import axios from 'axios';
import { Passage } from '../types';

const VECTOR_DB_API = process.env.VECTOR_DB_API;

if (!VECTOR_DB_API) {
  throw new Error("VECTOR_DB_API environment variable is not set.");
}

export async function vectorSearch(query: string, top_k: number): Promise<Passage[]> {
  try {
    const response = await axios.post<{ passages: Passage[] }>(
      VECTOR_DB_API,
      { query, top_k },
      { headers: { 'Content-Type': 'application/json' } }
    );
    // Assuming the API returns an object with a 'passages' key
    return response.data.passages || response.data as unknown as Passage[];
  } catch (error) {
    console.error(`Error calling Vector DB API at ${VECTOR_DB_API}:`, error);
    return [];
  }
}

export function rerankPassages(passages: Passage[], query: string): Passage[] {
  // Placeholder for reranking logic.
  // 1. Simple lexical boost (example: boost passages containing the query terms)
  const queryTerms = query.toLowerCase().split(/\s+/);
  passages.forEach(p => {
    let boost = 0;
    const textLower = p.text.toLowerCase();
    if (queryTerms.every(term => textLower.includes(term))) {
        boost += 0.1; // Add a small boost for containing all terms
    }
    p.score += boost;
  });

  // 2. Placeholder for a cross-encoder model.
  // A real implementation would involve calling a separate reranking model:
  // const reranked_ids = await crossEncoder.rerank(query, passages.map(p => p.text));
  // return passages.sort(...) based on reranked_ids and their new scores.
  
  // For now, just sort by the potentially boosted score in descending order.
  return passages.sort((a, b) => b.score - a.score);
}