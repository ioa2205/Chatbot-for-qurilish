// backend/src/api/chat.ts

import { Router, Request, Response } from 'express';
import { vectorSearch, rerankPassages } from '../core/retriever';
import { getLlmClient } from '../core/llm';
import { verifyAnswer } from '../core/verification';
import { logAuditEvent } from '../core/audit';
import { Passage, ChatRequest, ChatResponse, ApiError } from '../types';
import fs from 'fs';
import path from 'path';
import { z } from 'zod';
import { authMiddleware } from '../middleware/auth';

const router = Router();

const SYSTEM_PROMPT = fs.readFileSync(path.join(__dirname, '../../../../system_prompt.txt'), 'utf-8');

const chatRequestSchema = z.object({
  query: z.string().min(1).max(500),
  user_id: z.string(),
  context: z.object({
    dept: z.string().optional(),
    locale: z.string().optional(),
  }).optional(),
});

router.post('/chat', authMiddleware, async (req: Request, res: Response<ChatResponse | ApiError>) => {
  try {
    const validation = chatRequestSchema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: 'Invalid request body', details: validation.error.issues });
    }

    const { query, user_id, context } = validation.data as ChatRequest;
    const topK = parseInt(process.env.TOP_K || '8');
    const finalN = parseInt(process.env.FINAL_N || '4');

    // 1. Retrieve
    const retrieverResults = await vectorSearch(query, topK);
    if (!retrieverResults || retrieverResults.length === 0) {
      const noEvidenceResponse: ChatResponse = {
        answer: "No answer found in organization data.",
        provenance: [],
        confidence: "Low",
        verification_status: "NO_EVIDENCE",
        used_passages: [],
      };
      await logAuditEvent({ query, user_id, status: "NO_EVIDENCE", response: noEvidenceResponse });
      return res.status(200).json(noEvidenceResponse);
    }

    // 2. Rerank/Select
    const selectedPassages = rerankPassages(retrieverResults, query).slice(0, finalN);

    // 3. Generate
    const llmClient = getLlmClient();
    const formattedPassages = selectedPassages.map((p, i) => `[P:${p.id}]\n${p.text}`).join('\n\n');
    const llmInput = `RETRIEVED_PASSAGES:\n${formattedPassages}\n\nUSER_QUERY: "${query}"`;

    const rawLlmOutput = await llmClient.generate(SYSTEM_PROMPT, llmInput);

    // 4. Verify
    const verificationResult = await verifyAnswer(rawLlmOutput, selectedPassages);

    let finalResponse: ChatResponse;
    if (verificationResult.status === 'REJECTED') {
      finalResponse = {
        answer: "No answer found in organization data.",
        provenance: [],
        confidence: "Low",
        verification_status: "REJECTED",
        used_passages: selectedPassages.map(p => p.id),
      };
    } else {
      // THIS IS THE FIX: We now know these properties exist if status is 'OK'
      finalResponse = {
        answer: verificationResult.answer!,
        provenance: verificationResult.provenance!,
        confidence: verificationResult.confidence!,
        verification_status: "OK",
        used_passages: selectedPassages.map(p => p.id),
        debug: {
            retriever_results: retrieverResults
        }
      };
    }
    
    // 5. Audit & Respond
    await logAuditEvent({
        query,
        user_id,
        status: finalResponse.verification_status,
        llmInput,
        rawLlmOutput,
        response: finalResponse
    });
    
    res.status(200).json(finalResponse);

  } catch (error) {
    console.error('Chat API Error:', error);
    await logAuditEvent({ query: req.body.query, user_id: req.body.user_id, status: "ERROR", error: (error as Error).message });
    res.status(500).json({ error: 'An internal server error occurred.' });
  }
});

router.post('/feedback', authMiddleware, async (req: Request, res: Response) => {
    // Placeholder for feedback mechanism (e.g., logging user reports)
    const { query_id, user_id, feedback_type } = req.body;
    console.log(`Feedback received for query ${query_id} from ${user_id}: ${feedback_type}`);
    await logAuditEvent({ query: `feedback for ${query_id}`, user_id, status: "FEEDBACK", details: { feedback_type }});
    res.status(200).json({ message: "Feedback received" });
});

router.get('/doc/:id', authMiddleware, async (req: Request, res: Response) => {
    // Placeholder for fetching a full document source
    const docId = req.params.id;
    res.status(200).json({ id: docId, content: "Full document content placeholder...", url: `/docs/${docId}`});
});


export default router;