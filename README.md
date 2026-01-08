<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1oYJqCeNcob0UtLqMS4BgFEKGyG0VTZBC

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
 
Server env & testing
---------------------

Add a `.env` file at the project root with the following keys (example values shown):

```
DATABASE_URL=postgresql://neondb_owner:YOUR_PASSWORD@ep-shiny-fire-a1ha9ez1-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require
API_KEY=your_google_genai_api_key
STACK_SECRET_SERVER_KEY=some_jwt_secret
FRONTEND_URL=http://localhost:3000
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
GOOGLE_CALLBACK_URL=http://localhost:8080/auth/google/callback
FACEBOOK_CLIENT_ID=...
FACEBOOK_CLIENT_SECRET=...
FACEBOOK_CALLBACK_URL=http://localhost:8080/auth/facebook/callback
```

Quick test commands:

```bash
npm install
# start the backend server (auth + AI proxy)
npm run start-server
# start the frontend
npm run dev

# Optional: run DB test (if package.json includes `test-db`)
npm run test-db

# Verify AI endpoint (once server is running)
curl -X POST http://localhost:8080/api/ai/chat -H "Content-Type: application/json" -d '{"message":"Hello"}'
```

Security notes
--------------
- Keep `API_KEY` and `DATABASE_URL` secret and do not commit `.env` to source control.
- The server proxies requests to the Google GenAI (Gemini) API — the API key stays server-side.
