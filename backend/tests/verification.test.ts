import { verifyAnswer } from '../src/core/verification';
import { Passage } from '../src/types';

describe('Verification Module', () => {
    const mockPassages: Passage[] = [
        { id: 'doc-a', text: 'The project deadline is December 15, 2025.', source: 'plan.doc', score: 0.9 },
        { id: 'doc-b', text: 'Our company was founded in 1998.', source: 'about.html', score: 0.85 }
    ];

    it('should pass verification for a directly supported claim', async () => {
        const llmOutput = `ANSWER: The deadline for the project is December 15, 2025. [P:doc-a]\n\nEXCERPTS:\ndoc-a: The project deadline is December 15, 2025.`;
        const result = await verifyAnswer(llmOutput, mockPassages);
        expect(result.status).toBe('OK');
        expect(result.confidence).toBe('Medium'); // because of paraphrase
    });
    
    it('should REJECT an answer with an unsupported claim', async () => {
        const llmOutput = `ANSWER: The project deadline is January 30, 2026. [P:doc-a]\n\nEXCERPTS:\ndoc-a: The project deadline is December 15, 2025.`;
        const result = await verifyAnswer(llmOutput, mockPassages);
        expect(result.status).toBe('REJECTED');
    });

    it('should handle "No answer found" gracefully', async () => {
        const llmOutput = 'ANSWER: No answer found in organization data.';
        const result = await verifyAnswer(llmOutput, mockPassages);
        expect(result.status).toBe('OK');
        expect(result.answer).toContain('No answer found');
    });
});