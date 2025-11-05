// backend/src/core/llm/providers.ts (STABLE VERSION - REASONING ONLY, NO MEMORY)

import { GoogleGenerativeAI, GenerativeModel } from '@google/generative-ai';
import fs from 'fs';
import path from 'path';

export interface LLMClient {
  generate(systemPrompt: string, userPrompt: string): Promise<string>;
  generateSubQueries(userQuery: string): Promise<string[]>;
  // The rewriteQuery function has been removed
}

const SUB_QUERY_PROMPT = fs.readFileSync(path.join(__dirname, '../../../sub_query_prompt.txt'), 'utf-8');
// The rewrite_prompt is no longer needed

export class GeminiClient implements LLMClient {
    private genAI: GoogleGenerativeAI;
    private modelName: string;

    constructor(apiKey: string, modelName: string) {
        if (!apiKey) throw new Error("Gemini API key is required.");
        this.genAI = new GoogleGenerativeAI(apiKey);
        this.modelName = modelName;
    }

    async generate(systemPrompt: string, userPrompt: string): Promise<string> {
        const model = this.genAI.getGenerativeModel({
            model: this.modelName,
            systemInstruction: systemPrompt,
        });
        try {
            const result = await model.generateContent(userPrompt);
            return result.response.text();
        } catch (error) {
            console.error("Error calling Gemini API for generation:", error);
            return "Sorry, an error occurred with the AI model during generation.";
        }
    }

    async generateSubQueries(userQuery: string): Promise<string[]> {
        const model = this.genAI.getGenerativeModel({ model: this.modelName });
        const prompt = SUB_QUERY_PROMPT.replace('{user_question}', userQuery);
        try {
            const result = await model.generateContent(prompt);
            const textResponse = result.response.text();
            const jsonString = textResponse.replace(/```json|```/g, "").trim();
            const queries = JSON.parse(jsonString);
            if (Array.isArray(queries) && queries.every(q => typeof q === 'string') && queries.length > 0) {
                return queries;
            }
            return [userQuery];
        } catch (error) {
            console.error("Error generating sub-queries:", error);
            return [userQuery];
        }
    }
}

export class OpenAIClient implements LLMClient {
    // Implementation for OpenAIClient would go here
    async generate(systemPrompt: string, userPrompt: string): Promise<string> {
        // Placeholder implementation
        return "OpenAI response";
    }
    async generateSubQueries(userQuery: string): Promise<string[]> {
        // Placeholder implementation
        return [userQuery];
    }
    async rewriteQuery(chatHistory: string, userQuery: string): Promise<string> {
        // Placeholder implementation
        return userQuery;
    }
}   