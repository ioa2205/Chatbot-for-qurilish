import { Passage, Provenance, VerificationResult } from '../types';
import { NlpManager } from 'node-nlp'; // A simple library for NLP tasks

// DEVELOPER: This is a simplified entailment check. For production,
// swap this with a call to a dedicated, lightweight entailment model/API.
const manager = new NlpManager({ languages: ['en'], forceNER: true });

function parseLlmOutput(rawOutput: string): { answer: string; excerpts: string } {
    const answerMatch = rawOutput.match(/ANSWER:\s*([\s\S]*?)(\n\nEXCERPTS:|$)/);
    const excerptsMatch = rawOutput.match(/EXCERPTS:\s*([\s\S]*)/);
    
    return {
        answer: (answerMatch && answerMatch[1]) ? answerMatch[1].trim() : "No answer found in organization data.",
        excerpts: (excerptsMatch && excerptsMatch[1]) ? excerptsMatch[1].trim() : ""
    };
}


export async function verifyAnswer(
  rawLlmOutput: string,
  passages: Passage[]
): Promise<VerificationResult> {
  const { answer, excerpts } = parseLlmOutput(rawLlmOutput);
  
  if (answer.includes("No answer found")) {
    return { status: 'OK', answer, provenance: [], confidence: 'Low' };
  }

  const entailmentThreshold = parseFloat(process.env.ENTAILMENT_THRESHOLD || '0.88');
  let isVerified = true;
  let confidenceType = 'High'; // Assume High, downgrade if needed

  // Extract claims/sentences from the answer
  const claims = answer.split('. ').filter(s => s.trim().length > 0);
  
  for (const claim of claims) {
    let claimSupported = false;
    for (const passage of passages) {
        // 1. Exact span match check (fast)
        if (passage.text.includes(claim.replace(/\[P:.*?\]/g, '').trim())) {
            claimSupported = true;
            break;
        }

        // 2. Semantic entailment check (slower, placeholder)
        // This is a heuristic. A real system would use a trained NLI model.
        // Here we just check for word overlap as a proxy.
        const claimWords = new Set(claim.toLowerCase().match(/\w+/g));
        const passageWords = new Set(passage.text.toLowerCase().match(/\w+/g));
        if (claimWords.size === 0) continue;
        const intersection = new Set([...claimWords].filter(x => passageWords.has(x)));
        const similarity = intersection.size / claimWords.size;
        
        if (similarity >= entailmentThreshold) {
            claimSupported = true;
            confidenceType = 'Medium'; // Downgrade confidence for paraphrased match
            break;
        }
    }

    if (!claimSupported) {
        isVerified = false;
        break;
    }
  }

  if (!isVerified) {
    return { status: 'REJECTED' };
  }

  // Extract provenance from LLM output
  const provenance: Provenance[] = [];
  const usedPassageIds = new Set<string>();
  const citationRegex = /\[P:([^\]]+)\]/g;
  let match;
  while ((match = citationRegex.exec(answer)) !== null) {
      usedPassageIds.add(match[1]);
  }

  // Create provenance from excerpts section if available
  const excerptEntries = excerpts.split(/^\s*([a-zA-Z0-9_-]+):\s*/m).filter(s => s.trim());
  for(let i = 0; i < excerptEntries.length; i += 2) {
    const id = excerptEntries[i];
    const excerptText = excerptEntries[i+1];
    const originalPassage = passages.find(p => p.id === id);
    if(originalPassage) {
        provenance.push({
            id: originalPassage.id,
            source: originalPassage.source,
            excerpt: excerptText.trim()
        });
    }
  }


  return {
    status: 'OK',
    answer,
    provenance,
    confidence: confidenceType as 'High' | 'Medium' | 'Low',
  };
}