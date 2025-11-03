import { OpenAIClient, GeminiClient, CustomHttpClient, LLMClient } from './providers';

let llmClient: LLMClient;

export function getLlmClient(): LLMClient {
  if (llmClient) {
    return llmClient;
  }

  const provider = process.env.LLM_PROVIDER?.toLowerCase() || 'openai';
  const apiKey = process.env.LLM_API_KEY;
  const modelName = process.env.MODEL_NAME;

  if (!apiKey || !modelName) {
    throw new Error('LLM_API_KEY and MODEL_NAME environment variables are required.');
  }

  switch (provider) {
    case 'openai':
      console.log(`Initializing LLM client for provider: OpenAI with model ${modelName}`);
      llmClient = new OpenAIClient(apiKey, modelName);
      break;
    case 'gemini':
      console.log(`Initializing LLM client for provider: Gemini with model ${modelName}`);
      // DEVELOPER: Replace with actual Gemini SDK implementation
      llmClient = new GeminiClient(apiKey, modelName); 
      break;
    case 'custom':
       const apiUrl = process.env.LLM_API_URL;
       if (!apiUrl) throw new Error('LLM_API_URL is required for custom provider.');
       console.log(`Initializing LLM client for provider: Custom HTTP at ${apiUrl}`);
       llmClient = new CustomHttpClient(apiKey, modelName, apiUrl);
       break;
    default:
      throw new Error(`Unsupported LLM_PROVIDER: ${provider}`);
  }

  return llmClient;
}