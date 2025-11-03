import axios from 'axios';

export interface LLMClient {
  generate(systemPrompt: string, userPrompt: string): Promise<string>;
}

// --- OpenAI Provider ---
export class OpenAIClient implements LLMClient {
  private apiKey: string;
  private modelName: string;
  private client;

  constructor(apiKey: string, modelName: string) {
    this.apiKey = apiKey;
    this.modelName = modelName;
    // In a real app, use the official 'openai' package
  }

  async generate(systemPrompt: string, userPrompt: string): Promise<string> {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: this.modelName,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ],
      temperature: 0.0,
      max_tokens: 1024,
    }, {
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    return response.data.choices[0]?.message?.content || '';
  }
}

// --- Gemini Provider (Placeholder) ---
export class GeminiClient implements LLMClient {
    // DEVELOPER: This is a placeholder. Implement using Google's official Gemini SDK.
    constructor(private apiKey: string, private modelName: string) {}

    async generate(systemPrompt: string, userPrompt: string): Promise<string> {
        console.warn("GeminiClient is a placeholder and not implemented.");
        // Example with Google AI SDK:
        // const { GoogleGenerativeAI } = require("@google/generative-ai");
        // const genAI = new GoogleGenerativeAI(this.apiKey);
        // const model = genAI.getGenerativeModel({ model: this.modelName, systemInstruction: systemPrompt });
        // const result = await model.generateContent(userPrompt);
        // return result.response.text();
        return Promise.resolve("ANSWER: Gemini client is not yet implemented. [P:doc1-1]\n\nEXCERPTS:\ndoc1-1: Placeholder excerpt.");
    }
}

// --- Generic HTTP Provider ---
export class CustomHttpClient implements LLMClient {
    constructor(private apiKey: string, private modelName: string, private apiUrl: string) {}

    async generate(systemPrompt: string, userPrompt: string): Promise<string> {
        const response = await axios.post(this.apiUrl, {
            model: this.modelName,
            system_prompt: systemPrompt,
            prompt: userPrompt,
            // Adjust the payload based on your custom model's API spec
        }, {
            headers: {
                'Authorization': `Bearer ${this.apiKey}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data.completion || ''; // Adjust based on actual response schema
    }
}