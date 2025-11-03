import request from 'supertest';
import app from '../src/server';
import jwt from 'jsonwebtoken';
import { vectorSearch } from '../src/core/retriever';
import { getLlmClient } from '../src/core/llm';

jest.mock('../src/core/retriever');
jest.mock('../src/core/llm');

const mockVectorSearch = vectorSearch as jest.Mock;
const mockGetLlmClient = getLlmClient as jest.Mock;

describe('POST /api/chat', () => {
    const JWT_SECRET = process.env.JWT_SECRET!;
    const JWT_ISSUER = process.env.JWT_ISSUER!;
    const token = jwt.sign({ sub: 'test-user' }, JWT_SECRET, { issuer: JWT_ISSUER });

    const mockLlmClient = {
        generate: jest.fn(),
    };

    beforeEach(() => {
        jest.clearAllMocks();
        mockGetLlmClient.mockReturnValue(mockLlmClient);
    });

    it('should return 401 without a valid token', async () => {
        const res = await request(app).post('/api/chat').send({ query: 'test', user_id: '123' });
        expect(res.status).toBe(401);
    });

    it('should return NO_EVIDENCE if retriever finds nothing', async () => {
        mockVectorSearch.mockResolvedValue([]);
        const res = await request(app)
            .post('/api/chat')
            .set('Authorization', `Bearer ${token}`)
            .send({ query: 'test', user_id: '123' });
        
        expect(res.status).toBe(200);
        expect(res.body.verification_status).toBe('NO_EVIDENCE');
        expect(res.body.answer).toContain('No answer found');
    });

    it('should process a valid query and return a verified answer', async () => {
        mockVectorSearch.mockResolvedValue([
            { id: 'doc1', text: 'The policy number is 12345.', source: 'policies.pdf', score: 0.9 }
        ]);
        mockLlmClient.generate.mockResolvedValue(
`ANSWER: The policy number is 12345. [P:doc1]

EXCERPTS:
doc1: The policy number is 12345.`
        );

        const res = await request(app)
            .post('/api/chat')
            .set('Authorization', `Bearer ${token}`)
            .send({ query: 'what is the policy number?', user_id: '123' });

        expect(res.status).toBe(200);
        expect(res.body.verification_status).toBe('OK');
        expect(res.body.answer).toContain('12345');
        expect(res.body.provenance[0].id).toBe('doc1');
    });
});