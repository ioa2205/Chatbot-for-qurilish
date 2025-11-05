// backend/src/api/chat.ts (STABLE VERSION - REASONING ONLY, NO MEMORY)

import { Router, Request, Response } from 'express';
import { vectorSearch, rerankPassages } from '../core/retriever';
import { getLlmClient } from '../core/llm';
import { logAuditEvent } from '../core/audit';
import { Passage, ChatRequest, ChatResponse, ApiError, Provenance } from '../types';
import fs from 'fs';
import path from 'path';
import { z } from 'zod';
import { authMiddleware } from '../middleware/auth';

const router = Router();
const SYSTEM_PROMPT = fs.readFileSync(path.join(__dirname, '../../system_prompt.txt'), 'utf-8');

const CONVERSATIONAL_KEYWORDS = ['hi', 'hello', 'hey', 'yo', 'thanks', 'thank', 'thx', 'good', 'great', 'ok', 'cool'];

function isGreetingOrBanter(query: string): boolean {
    const cleanQuery = query.toLowerCase().trim();
    const words = cleanQuery.split(/\s+/);
    if (words.length <= 4) {
        return words.some(word => CONVERSATIONAL_KEYWORDS.includes(word.replace(/[.,!?]/g, '')));
    }
    return false;
}

function parseAndCleanLlmOutput(rawOutput: string, passages: Passage[]): { cleanAnswer: string; provenance: Provenance[] } {
    const answerMatch = rawOutput.match(/ANSWER:\s*([\s\S]*?)(\n\n(EXCERPTS:|Confidence:)|$)/);
    const excerptsMatch = rawOutput.match(/EXCERPTS:\s*([\s\S]*)/);
    let cleanAnswer = "Sorry, I couldn't formulate a response from the provided text.";
    if (rawOutput.includes("No answer found in organization data.")) { cleanAnswer = "No answer found in organization data."; }
    else if (answerMatch && answerMatch[1]) { cleanAnswer = answerMatch[1].trim(); }
    const provenance: Provenance[] = [];
    if (excerptsMatch && excerptsMatch[1]) {
        const excerptRegex = /\[P:([^\]]+)\]\s*([\s\S]*?)(?=\s*\[P:[^\]]+\]|$)/g;
        let match;
        while ((match = excerptRegex.exec(excerptsMatch[1])) !== null) {
            const id = match[1].trim();
            const text = match[2].trim();
            const originalPassage = passages.find(p => p.id === id);
            if (originalPassage) {
                provenance.push({ id: originalPassage.id, source: originalPassage.source, excerpt: text });
            }
        }
    }
    return { cleanAnswer, provenance };
}

// Reverted to the simple schema without history
const chatRequestSchema = z.object({
  query: z.string().min(1).max(500),
  user_id: z.string(),
});

router.post('/chat', authMiddleware, async (req: Request, res: Response<ChatResponse | ApiError>) => {
  try {
    const validation = chatRequestSchema.safeParse(req.body);
    if (!validation.success) { 
        console.error("Request validation failed:", validation.error);
        return res.status(400).json({ error: 'Invalid request body' }); 
    }
    
    // Reverted to the simple destructuring without history
    const { query, user_id } = validation.data as any;
    
    if (isGreetingOrBanter(query)) {
        const greetingResponse: ChatResponse = { answer: "You're welcome! How else can I help?", provenance: [], confidence: "High", verification_status: "OK", used_passages: [] };
        return res.status(200).json(greetingResponse);
    }

    const llmClient = getLlmClient();
    const topK = parseInt(process.env.TOP_K || '8');
    
    console.log("Step 1: Planning - Generating sub-queries...");
    const subQueries = await llmClient.generateSubQueries(query); // Uses the original query
    console.log(`   ...Generated sub-queries: ${JSON.stringify(subQueries)}`);

    console.log("Step 2: Searching - Running parallel searches...");
    const searchPromises = subQueries.map(q => vectorSearch(q, topK));
    const searchResults = await Promise.all(searchPromises);
    
    const allPassages = searchResults.flat();
    const uniquePassageMap = new Map<string, Passage>();
    allPassages.forEach(p => uniquePassageMap.set(p.id, p));
    const uniquePassages = Array.from(uniquePassageMap.values());
    console.log(`   ...Found ${uniquePassages.length} unique passages.`);
    
    if (uniquePassages.length === 0) {
      const noEvidenceResponse: ChatResponse = { answer: "No answer found in organization data.", provenance: [], confidence: "Low", verification_status: "NO_EVIDENCE", used_passages: [] };
      return res.status(200).json(noEvidenceResponse);
    }
    
    const finalN = parseInt(process.env.FINAL_N || '4');
    const selectedPassages = rerankPassages(uniquePassages, query).slice(0, finalN);

    const formattedPassages = selectedPassages.map((p) => `[P:${p.id}]\n${p.text}`).join('\n\n');
    const llmInput = `RETRIEVED_PASSAGES:\n${formattedPassages}\n\nUSER_QUERY: "${query}"`;
    
    console.log("Step 3: Synthesizing - Generating final answer...");
    const rawLlmOutput = await llmClient.generate(SYSTEM_PROMPT, llmInput);

    const { cleanAnswer, provenance } = parseAndCleanLlmOutput(rawLlmOutput, selectedPassages);

    const finalResponse: ChatResponse = {
        answer: cleanAnswer,
        provenance: provenance,
        confidence: "High", 
        verification_status: "SKIPPED",
        used_passages: selectedPassages.map(p => p.id),
    };

    res.status(200).json(finalResponse);

  } catch (error) {
    console.error('Chat API Error:', error);
    res.status(500).json({ error: 'An internal server error occurred.' });
  }
});

router.post('/feedback', authMiddleware, async (req: Request, res: Response) => {
    const { query_id, user_id, feedback_type } = req.body;
    console.log(`Feedback received for query ${query_id} from ${user_id}: ${feedback_type}`);
    await logAuditEvent({ query: `feedback for ${query_id}`, user_id, status: "FEEDBACK", details: { feedback_type }});
    res.status(200).json({ message: "Feedback received" });
});
router.get('/doc/:id', authMiddleware, async (req: Request, res: Response) => {
    const docId = req.params.id;
    res.status(200).json({ id: docId, content: "Full document content placeholder...", url: `/docs/${docId}`});
}); 
export default router;