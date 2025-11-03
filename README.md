# Organization-Only Grounded Chatbot

This repository contains a minimal, production-ready web application for an organization-only chatbot. It is designed to be easily integrated into an existing website and guarantees that answers are generated *only* from verified organizational data, with strict citation and abstention behavior.

## Features

- **Strict Grounding**: Answers are generated exclusively from passages retrieved from your organization's data. The system will abstain if evidence is insufficient.
- **Provenance**: Every answer includes citations and excerpts from the source documents, so users can verify the information.
- **Provider Agnostic**: Supports major LLM providers (OpenAI, Gemini) and generic HTTP endpoints through simple environment variable configuration.
- **Verification Layer**: A deterministic module checks the LLM's output against the source passages to prevent factual hallucinations before responding to the user.
- **Embeddable Widget**: A lightweight, vanilla JavaScript widget that can be easily dropped into any existing website.
- **Production Ready**: Includes Docker setup for easy deployment, a simple audit log, and JWT-based authentication.

---

## How It Works

1.  A user asks a question in the frontend widget.
2.  The widget authenticates with your site's backend to get a JWT.
3.  The query is sent to the chatbot backend's `/api/chat` endpoint.
4.  The backend calls your organization's **Vector DB API** to retrieve the most relevant data passages.
5.  A small, curated set of passages is passed to a large language model (LLM) with a **strict system prompt** that forbids outside knowledge.
6.  The LLM's generated answer is passed through a **verification module** to ensure every claim is supported by the provided passages.
7.  If verified, the answer and its sources are returned. If not, the system abstains and informs the user.
8.  The transaction is logged for auditing.

---

## Getting Started

### Prerequisites

-   Node.js (v18+)
-   Docker and Docker Compose
-   An accessible Vector Search API endpoint (for production). A mock server is included for local testing.
-   API keys for your chosen LLM provider (e.g., OpenAI).

### 1. Installation & Configuration

1.  **Clone the repository:**
    ```bash
    git clone <repo_url>
    cd org-chat-repo
    ```

2.  **Configure the backend:**
    Copy the example environment file and fill in your details.
    ```bash
    cp backend/.env.example backend/.env
    ```
    Now, edit `backend/.env` with your actual secrets and endpoints:
    -   `JWT_SECRET`: A long, random string for signing auth tokens.
    -   `JWT_ISSUER`: A unique name for your organization (e.g., `mycompany-chat`).
    -   `VECTOR_DB_API`: URL of your vector search API. For local testing, leave it as `http://mock_vector_db:8000/search`.
    -   `LLM_PROVIDER`, `LLM_API_KEY`, `MODEL_NAME`: Your chosen LLM provider details.

### 2. Running Locally with Docker

This is the recommended way to run the application for development and testing.

```bash
docker-compose up --build