// backend/src/core/verification.ts (BASED ON YOUR LOGIC)

import { Passage, Provenance, VerificationResult } from '../types';

function parseLlmOutput(rawOutput: string): { answer: string; excerpts: Map<string, string>; llmConfidence: string } {
    const answerMatch = rawOutput.match(/ANSWER:\s*([\sS]*?)(\n\n(EXCERPTS:|Confidence:)|$)/);
    const confidenceMatch = rawOutput.match(/Confidence:\s*(High|Medium|Low)/i);
    const excerptsMatch = rawOutput.match(/EXCERPTS:\s*([\sS]*)/);

    const answer = (answerMatch && answerMatch[1]) ? answerMatch[1].trim() : "No answer found in organization data.";
    const llmConfidence = (confidenceMatch && confidenceMatch[1]) ? confidenceMatch[1].trim().toLowerCase() : "medium";
    
    const excerpts = new Map<string, string>();
    if (excerptsMatch && excerptsMatch[1]) {
        const excerptRegex = /\[P:([^\]]+)\]\s*([\s\S]*?)(?=\s*\[P:[^\]]+\]|$)/g;
        let match;
        while ((match = excerptRegex.exec(excerptsMatch[1])) !== null) {
            const id = match[1].trim();
            const text = match[2].trim();
            excerpts.set(id, text);
        }
    }
    return { answer, excerpts, llmConfidence };
}


export async function verifyAnswer(
  rawOutput: string,
  passages: Passage[]
): Promise<VerificationResult> {
  const { answer, excerpts, llmConfidence } = parseLlmOutput(rawOutput);
  
  if (answer.includes("No answer found")) {
    return { status: 'OK', answer, provenance: [], confidence: 'Low' };
  }

  let isVerified = false;

  // --- YOUR LOGIC IMPLEMENTED HERE ---

  // 1. If LLM confidence is High, we trust it and automatically verify.
  if (llmConfidence.toLowerCase() === 'high') {
      console.log("Verification PASSED (Tier 1: LLM reported High Confidence)");
      isVerified = true;
  } else {
  // 2. If LLM confidence is not High, run one lenient check.
      console.log(`LLM confidence is not High. Running Tier 2 lenient check...`);
      const entailmentThreshold = 0.65; // A lenient threshold for paraphrasing
      const cleanAnswer = answer.replace(/\[P:.*?\]/g, '').replace(/\s+/g, ' ').trim().toLowerCase();
      const claimWords = new Set(cleanAnswer.match(/\b\w+\b/g) || []);
      
      if (claimWords.size > 0) {
          for (const passage of passages) {
              const passageWords = new Set(passage.text.toLowerCase().match(/\b\w+\b/g) || []);
              const intersection = new Set([...claimWords].filter(x => passageWords.has(x)));
              const similarity = intersection.size / claimWords.size;
              
              if (similarity >= entailmentThreshold) {
                  isVerified = true;
                  console.log(`Verification PASSED (Tier 2: Similarity threshold met)`);
                  break;
              }
          }
      } else {
          // If the answer is just punctuation or empty after cleaning, consider it verified.
          isVerified = true; 
      }
  }

  if (!isVerified) {
    console.log(`Verification REJECTED. Lenient check failed.`);
    return { status: 'REJECTED' };
  }
  
  // --- END OF YOUR LOGIC ---

  // --- Provenance Extraction (runs if verification passed) ---
  const finalProvenance: Provenance[] = [];
  const citedIdsInAnswer = new Set<string>();
  const citationRegex = /\[P:([^\]]+)\]/g;
  let match;
  while ((match = citationRegex.exec(answer)) !== null) {
    citedIdsInAnswer.add(match[1].trim());
  }

  for (const id of citedIdsInAnswer) {
      const originalPassage = passages.find(p => p.id === id);
      const excerptText = excerpts.get(id);

      if (originalPassage && excerptText) {
          finalProvenance.push({
              id: originalPassage.id,
              source: originalPassage.source,
              excerpt: excerptText,
          });
      }
  }

  // Set our final confidence based on which check passed.
  const finalConfidence = (llmConfidence.toLowerCase() === 'high') ? 'High' : 'Medium';

  return {
    status: 'OK',
    answer,
    provenance: finalProvenance,
    confidence: finalConfidence,
  };
}