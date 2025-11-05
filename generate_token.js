// generate_token.js

const jwt = require('jsonwebtoken');

// --- IMPORTANT: COPY THE VALUES FROM YOUR backend/.env FILE ---
const JWT_SECRET = "your-very-strong-jwt-secret-key";
const JWT_ISSUER = "your-organization-issuer-name";
// ---------------------------------------------------------

const payload = {
  sub: 'local-test-user', // A subject identifier for the user
  iss: JWT_ISSUER,        // The issuer of the token
};

// Generate the token
const token = jwt.sign(payload, JWT_SECRET);

console.log("--- Your New JWT Token ---");
console.log(token);
console.log("--------------------------");
console.log("Copy the long string above and paste it into your test.html file.");