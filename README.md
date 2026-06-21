# Terminal AI Chatbot

A terminal-based AI chatbot built with **Node.js** that supports both **Groq** and **Google Gemini** models. The chatbot allows runtime model switching and includes an automatic fallback mechanism to ensure uninterrupted responses.

---

## Features

* Terminal-based chat interface
* Groq API integration
* Gemini API integration
* Runtime model switching
* Automatic fallback system
* Error handling
* Environment variables using `.env`
* Async/Await implementation
* Colored terminal output
* `/help` command
* `/clear` command
* `/exit` command

---

## Project Structure

```text
terminal-ai-chatbot
│
├── services
│   ├── groq.js
│   └── gemini.js
│
├── utils
│   └── fallback.js
│
├── index.js
├── test.js
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## Technologies Used

* Node.js
* JavaScript
* Groq SDK
* Google GenAI SDK
* Chalk
* dotenv
* readline-sync
* Git & GitHub

---

## Installation

Clone the repository:

```bash
git clone https://github.com/shubham070406/terminal-ai-chatbot.git
```

Move into the project directory:

```bash
cd terminal-ai-chatbot
```

Install dependencies:

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the root directory:

```env
GROQ_API_KEY=your_groq_api_key
GEMINI_API_KEY=your_gemini_api_key
```

---

## Run the Project

```bash
npm start
```

or

```bash
node index.js
```

---

## Commands

| Command   | Description             |
| --------- | ----------------------- |
| `/groq`   | Switch to Groq model    |
| `/gemini` | Switch to Gemini model  |
| `/help`   | Show available commands |
| `/clear`  | Clear terminal screen   |
| `/exit`   | Exit chatbot            |

---

## Example

```text
=== AI Terminal Chatbot ===

You: Hello

AI: Hi! How can I help you today?

You: /gemini

Using Gemini Model

You: Explain Node.js

AI: Node.js is a JavaScript runtime environment.

You: /exit

Goodbye!
```

---

## Fallback Architecture

1. User sends a query.
2. Selected model processes the request.
3. If the model fails due to API or network issues:
4. The system automatically switches to the alternate model.
5. The response is returned without interrupting the conversation.

Example:

```text
Primary Model Failed.
Switching to Gemini...

Response Generated Successfully.
```

---

## Error Handling

The chatbot handles:

* Invalid API keys
* Network errors
* Empty inputs
* API downtime
* Unexpected exceptions

---

## Why Async/Await?

Async/Await is used because API requests are asynchronous. It improves readability and prevents blocking during response generation.

---

## Future Improvements

* Streaming responses
* Conversation history
* Timestamp support
* Startup model selection menu
* Save chats to file

---

## Author

**Shubham Pradhan**

GitHub: https://github.com/shubham070406

---

## Repository

https://github.com/shubham070406/terminal-ai-chatbot
