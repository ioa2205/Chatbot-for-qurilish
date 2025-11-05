import axios from 'axios';
import { Passage } from '../types';

const VECTOR_DB_API = process.env.VECTOR_DB_API;

// FIX #1: This block guarantees VECTOR_DB_API is a string, not undefined.
if (!VECTOR_DB_API) {
  throw new Error("VECTOR_DB_API environment variable is not set.");
}

// FIX #2: This interface tells TypeScript what the API response will look like.
interface VectorSearchResponse {
    passages: Passage[];
}

export async function vectorSearch(query: string, top_k: number): Promise<Passage[]> {
  try {
    // FIX #3: We use the interface here to give the 'response' a proper type.
    const response = await axios.post<VectorSearchResponse>(
      VECTOR_DB_API!,
      { query, top_k },
      { headers: { 'Content-Type': 'application/json' } }
    );
    
    // Now TypeScript knows that 'response.data.passages' exists and is an array.
    return response.data.passages || [];
  } catch (error) {
    console.error(`Error calling Vector DB API at ${VECTOR_DB_API}:`, error);
    return [];
  }
}

export function rerankPassages(passages: Passage[], query: string): Passage[] {
  // This part of the file was already correct.
  const queryTerms = query.toLowerCase().split(/\s+/);
  passages.forEach(p => {
    let boost = 0;
    const textLower = p.text.toLowerCase();
    if (queryTerms.every(term => textLower.includes(term))) {
        boost += 0.1;
    }
    p.score += boost;
  });

  return passages.sort((a, b) => b.score - a.score);
}