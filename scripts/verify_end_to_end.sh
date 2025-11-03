#!/bin/bash

# This script performs a simple end-to-end health check of the chat API.
# It requires `jq` to be installed for JSON parsing.

# --- Configuration ---
API_URL="http://localhost:3001/api/chat"
JWT_SECRET="your-very-strong-jwt-secret-key"
JWT_ISSUER="your-organization-issuer-name"

# --- Helper Functions ---
function generate_jwt() {
  # This is a simplified JWT generator for testing.
  # In a real scenario, use a proper library.
  header=$(echo -n '{"alg":"HS256","typ":"JWT"}' | base64 | tr -d '=' | tr '/+' '_-')
  payload=$(echo -n "{\"sub\":\"e2e-test-user\",\"iss\":\"$JWT_ISSUER\"}" | base64 | tr -d '=' | tr '/+' '_-')
  signature=$(echo -n "$header.$payload" | openssl dgst -sha256 -hmac "$JWT_SECRET" -binary | base64 | tr -d '=' | tr '/+' '_-')
  echo "$header.$payload.$signature"
}

function assert_eq() {
  if [ "$1" != "$2" ]; then
    echo "❌ ASSERTION FAILED: Expected '$2', but got '$1'"
    exit 1
  fi
}

# --- Test Execution ---
echo "▶️  Starting end-to-end verification script..."

# 1. Generate a valid JWT
TOKEN=$(generate_jwt)
echo "✅ Generated test JWT."

# 2. Run a query that should get a direct answer from the mock DB
echo "▶️  Testing query with expected direct answer: 'What is the employee discount?'"

RESPONSE=$(curl -s -X POST "$API_URL" \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer $TOKEN" \
     -d '{
           "query": "What is the employee discount?",
           "user_id": "e2e-test"
         }')

# 3. Verify the response schema and content
VERIFICATION_STATUS=$(echo "$RESPONSE" | jq -r '.verification_status')
CONFIDENCE=$(echo "$RESPONSE" | jq -r '.confidence')
PROVENANCE_ID=$(echo "$RESPONSE" | jq -r '.provenance[0].id')

echo "    - Verification Status: $VERIFICATION_STATUS"
echo "    - Confidence: $CONFIDENCE"
echo "    - Top Provenance ID: $PROVENANCE_ID"

assert_eq "$VERIFICATION_STATUS" "OK"
assert_eq "$PROVENANCE_ID" "doc-002"
echo "✅ Test Passed: Direct answer query returned OK status with correct provenance."


# 4. Run a query that should be rejected (hallucination)
# We mock the LLM to produce a false answer to test the verification step.
# This test requires modifying the backend to allow mock LLM output,
# so this script assumes a separate test environment or a mock server.
# For simplicity, we are testing a query that has no good evidence.
echo "▶️  Testing query with insufficient evidence: 'What is the company car policy?'"
RESPONSE_NO_EVIDENCE=$(curl -s -X POST "$API_URL" \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer $TOKEN" \
     -d '{
           "query": "What is the company car policy?",
           "user_id": "e2e-test"
         }')

STATUS_NO_EVIDENCE=$(echo "$RESPONSE_NO_EVIDENCE" | jq -r '.verification_status')
ANSWER_NO_EVIDENCE=$(echo "$RESPONSE_NO_EVIDENCE" | jq -r '.answer')

echo "    - Verification Status: $STATUS_NO_EVIDENCE"
assert_eq "$STATUS_NO_EVIDENCE" "NO_EVIDENCE"
assert_eq "$ANSWER_NO_EVIDENCE" "No answer found in organization data."
echo "✅ Test Passed: Query with no evidence was handled correctly."

echo "🎉 All checks passed!"