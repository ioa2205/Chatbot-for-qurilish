# "Expert Assistant" RAG Chatbot

This repository contains a complete, production-ready web application for a secure, organization-only chatbot. It uses a sophisticated **Retrieval-Augmented Generation (RAG)** architecture to answer user questions based *only* on a provided set of documents.

The system is designed to be intelligent, trustworthy, and easy to integrate into any existing website.

[![Chatbot Demo](./demo.gif)](./demo.gif)
*(Recommendation: Create a simple animated GIF of the chatbot working and save it as `demo.gif` in your project root. It makes the README look incredibly professional.)*

---

## Core Features

*   **Intelligent Reasoning:** Uses a multi-step LLM process to understand complex, comparative questions and find evidence from different parts of the source documents.
*   **Conversational Memory:** Remembers the context of the current conversation, allowing users to ask natural follow-up questions.
*   **Strictly Grounded:** Guarantees that answers are based only on the provided documents, with no outside knowledge, to prevent hallucinations. (Verification is currently disabled for testing).
*   **Trustworthy & Citable:** The architecture is built to provide **provenance** for its answers, citing the exact sources for its claims.
*   **Secure & Private:** Uses JWT-based authentication to ensure only authorized users can access the chatbot.
*   **Easy to Integrate:** A single JavaScript file provides a self-contained chat widget that can be dropped into any website.

---

## How It Works (The "Brain")

The chatbot's intelligence comes from a multi-stage pipeline designed for accuracy and reasoning.

1.  **Memory (Query Rewriting):** First, it looks at the user's new question and the recent chat history. It uses a fast AI call to rewrite the user's question into a clear, standalone query (e.g., "What about that?" becomes "What about the remote work policy?").

2.  **Planning (Query Transformation):** Next, it takes the standalone query and uses another AI call to break it down into a set of specific, targeted search queries. This allows it to find all the necessary evidence for complex questions.

3.  **Search (Retrieval):** It runs a search in the **Vector Database** for each of the sub-queries, gathering a rich collection of relevant text "chunks."

4.  **Synthesis (Generation):** Finally, it sends the combined evidence and the original user question to the main AI model. It follows a strict prompt that commands it to write a comprehensive answer based *only* on the provided evidence and to cite its sources.

---

## Getting Started: Running Locally

This project is fully containerized with Docker, making local setup incredibly simple.

### Prerequisites

*   **Docker Desktop:** [Install Docker](https://www.docker.com/products/docker-desktop/)
*   **Node.js:** [Install Node.js](https://nodejs.org/) (for running helper scripts)
*   **Python:** [Install Python](https://www.python.org/downloads/) (for processing your own documents)

### 1. Initial Setup

1.  **Clone the Repository:**
    ```bash
    git clone <your_repository_url>
    cd <your_project_folder>
    ```

2.  **Configure Environment Variables:**
    *   Navigate into the `backend` directory.
    *   Copy the example environment file: `cp .env.example .env`
    *   Edit the new `backend/.env` file and **add your Gemini API key**:
        ```env
        # backend/.env
        LLM_API_KEY="AIzaSy...your_gemini_key_here"
        ```
    *   (For local testing, the other default values for `JWT_SECRET`, `JWT_ISSUER`, etc., are already set up to work correctly.)

### 2. Prepare Your Data (Optional)

The project includes a pre-processed dataset. To use your own PDF document:

1.  Place your PDF in the project's root directory and name it `source_document.pdf`.
2.  Install the necessary Python libraries:
    ```bash
    pip install "unstructured[local-inference]" torch torchvision torchaudio
    ```
3.  Run the processing script:
    ```bash
    python process_pdf.py
    ```
4.  This creates a `processed_data.json` file. Copy the entire contents of this file and paste it into the `const documents = [...]` array in **`scripts/mock_vector_db.js`**.

### 3. Run the Application

From the **root directory** of the project, run one simple command:

```bash
docker-compose up --build
```

This will build the backend image and start both the chatbot server (on `http://localhost:3001`) and the mock database server (on `http://localhost:8000`).

The terminal will show the logs and appear to be "stuck" on `Attaching to...`. **This is the correct behavior.** It means the servers are running and waiting for requests.

### 4. Test the Chatbot

1.  Find the **`test.html`** file in your project's root directory.
2.  **Open this file in your web browser.**
3.  The chat widget will appear. You can now ask it questions about the documents you processed!

---

## Integrating the Widget into Your Website

1.  **Host the Assets:** Upload `frontend/widget.js` and `frontend/widget.css` to a public server or CDN.
2.  **Set Up Authentication:** Create an endpoint on your website's backend that generates a JWT using the same `JWT_SECRET` and `JWT_ISSUER` from your `.env` file.
3.  **Embed the Snippet:** Add the following code to your website's HTML.

    ```html
    <!-- Add this to your page's <head> -->
    <link rel="stylesheet" href="https://your-cdn.com/path/to/widget.css">

    <!-- Add this where you want the chat widget to appear -->
    <div id="your-chat-container"></div>

    <!-- Add this script before your closing </body> tag -->
    <script src="https://your-cdn.com/path/to/widget.js"></script>
    <script>
      window.OrgChat.init({
        // The URL of your deployed chatbot API
        apiUrl: "https://api.your-company.com/chat",
        
        // A function that calls YOUR site's backend to get a JWT
        getJwtCallback: async () => {
          const response = await fetch("/api/get-jwt-for-chat");
          return await response.text();
        },
        
        // The ID of the container div
        containerId: "your-chat-container"
      });
    </script>
    ```