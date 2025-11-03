const http = require('http');

const documents = [
  { id: 'doc-001', text: 'The company-wide holiday for New Year is on January 1st, 2026.', source: 'HR-Policies.pdf', metadata: { year: 2026 }},
  { id: 'doc-002', text: 'All employees are eligible for a 15% discount on company products.', source: 'Benefits.html', metadata: { dept: 'all' }},
  { id: 'doc-003', text: 'To reset your password, please visit the IT self-service portal.', source: 'IT-FAQ.docx', metadata: { topic: 'password' }},
  { id: 'doc-004', text: 'The Q4 earnings report will be released on February 15th, 2026.', source: 'Investor-Relations.com/q4-report', metadata: { topic: 'finance' }}
];

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/search') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        const { query, top_k } = JSON.parse(body);
        console.log(`Mock DB received query: "${query}"`);

        // Simple keyword matching for mock
        const queryLower = query.toLowerCase();
        const results = documents
            .map(doc => ({
                ...doc,
                // Crude scoring based on keyword presence
                score: doc.text.toLowerCase().includes(queryLower) ? 0.9 : 0.2
            }))
            .sort((a,b) => b.score - a.score)
            .slice(0, top_k);
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ passages: results }));
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: "Invalid JSON" }));
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: "Not Found" }));
  }
});

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`Mock Vector DB server running on http://localhost:${PORT}`);
});