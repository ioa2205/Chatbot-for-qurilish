(function () {
  'use strict';

  let config = {};
  let jwtToken = null;
  let chatHistory = [];

  const render = () => {
    const container = document.getElementById(config.containerId);
    if (!container) {
      console.error(`OrgChat Error: Container with id "${config.containerId}" not found.`);
      return;
    }

    container.innerHTML = `
      <div class="org-chat-widget">
        <div class="chat-header">
          <h2>Organization Chat</h2>
        </div>
        <div class="chat-history" id="chat-history">
          ${chatHistory.map(renderMessage).join('')}
        </div>
        <div class="chat-input-area">
          <form id="org-chat-form">
            <input type="text" id="chat-input" placeholder="Ask a question..." autocomplete="off" required />
            <button type="submit" id="chat-submit-btn">Send</button>
          </form>
        </div>
      </div>
    `;

    // Scroll to bottom
    const historyEl = document.getElementById('chat-history');
    historyEl.scrollTop = historyEl.scrollHeight;

    document.getElementById('org-chat-form').addEventListener('submit', handleFormSubmit);
  };
  
  const renderMessage = (msg) => {
    if (msg.type === 'user') {
        return `<div class="chat-message user-message">${escapeHtml(msg.text)}</div>`;
    }
    
    let provenanceHtml = '';
    if(msg.provenance && msg.provenance.length > 0) {
        provenanceHtml = '<div class="provenance"><h4>Sources:</h4><ul>' + 
            msg.provenance.map(p => 
                `<li>
                    <a href="#" class="provenance-link" data-id="${escapeHtml(p.id)}">${escapeHtml(p.source)}</a>
                    <div class="provenance-excerpt">"${escapeHtml(p.excerpt)}"</div>
                 </li>`
            ).join('') + '</ul></div>';
    }

    let answerHtml = escapeHtml(msg.text).replace(/\[P:([^\]]+)\]/g, '');

    return `
      <div class="chat-message bot-message">
        <div class="bot-answer">${answerHtml}</div>
        ${provenanceHtml}
        ${msg.showFeedbackBtn ? '<button class="feedback-btn">Request human review</button>' : ''}
      </div>
    `;
  };

  const escapeHtml = (unsafe) => {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
  };

  const getJwt = async () => {
    if (typeof config.getJwtCallback !== 'function') {
      throw new Error('OrgChat: `getJwtCallback` is not a function.');
    }
    try {
      jwtToken = await config.getJwtCallback();
      if (!jwtToken) throw new Error('JWT is null or empty');
    } catch (error) {
      console.error('OrgChat: Failed to get JWT.', error);
      jwtToken = null;
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const inputEl = document.getElementById('chat-input');
    const submitBtn = document.getElementById('chat-submit-btn');
    const query = inputEl.value.trim();

    if (!query) return;

    // Add user message to history and render
    chatHistory.push({ type: 'user', text: query });
    inputEl.value = '';
    inputEl.disabled = true;
    submitBtn.disabled = true;
    render();

    // Add typing indicator
    chatHistory.push({ type: 'bot', text: '...' });
    render();
    
    await getJwt();
    if (!jwtToken) {
        chatHistory.pop(); // remove typing indicator
        chatHistory.push({ type: 'bot', text: 'Error: Could not authenticate.' });
        render();
        return;
    }

    try {
        const response = await fetch(`${config.apiUrl}/chat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwtToken}`
            },
            body: JSON.stringify({ query, user_id: 'anonymous' }) // TODO: get real user_id
        });

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();
        chatHistory.pop(); // remove typing indicator
        chatHistory.push({
            type: 'bot',
            text: data.answer,
            provenance: data.provenance,
            showFeedbackBtn: data.verification_status !== 'OK'
        });

    } catch (error) {
        console.error('OrgChat API error:', error);
        chatHistory.pop();
        chatHistory.push({ type: 'bot', text: 'Sorry, an error occurred. Please try again.' });
    } finally {
        inputEl.disabled = false;
        submitBtn.disabled = false;
        render();
        inputEl.focus();
    }
  };


  window.OrgChat = {
    init: (opts) => {
      config = opts;
      chatHistory = [{
        type: 'bot',
        text: 'Hello! How can I help you today?',
        provenance: [],
      }];
      render();
    },
  };
})();