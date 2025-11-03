/**
 * Represents a single passage retrieved from the vector database.
 */
export interface Passage {
  id: string;
  text: string;
  source: string;
  score: number;
  metadata?: Record<string, any>;
}

/**
 * Defines the structure of the incoming request body for the /api/chat endpoint.
 */
export interface ChatRequest {
  query: string;
  user_id: string;
  context?: {
    dept?: string;
    locale?: string;
  };
}

/**
 * Represents a single piece of evidence or source for the generated answer.
 */
export interface Provenance {
  id: string;
  source: string;
  excerpt: string;
}

/**
 * Defines the structure of the successful JSON response for the /api/chat endpoint.
 */
export interface ChatResponse {
  answer: string;
  provenance: Provenance[];
  confidence: 'High' | 'Medium' | 'Low';
  verification_status: 'OK' | 'REJECTED' | 'NO_EVIDENCE';
  used_passages: string[];
  debug?: {
    retriever_results?: Passage[];
  };
}

/**
 * A generic structure for API error responses.
 */
export interface ApiError {
  error: string;
  details?: any;
}

/**
 * Represents the internal result from the verification module before it's
 * formatted into the final ChatResponse.
 */
export interface VerificationResult {
    status: 'OK' | 'REJECTED';
    answer?: string;
    provenance?: Provenance[];
    confidence?: 'High' | 'Medium' | 'Low';
}