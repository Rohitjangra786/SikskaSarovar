# Run and deploy

This contains everything you need to run your app locally.

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
 
Server env & testing

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

SEO changes included:
- Added `components/SEO.tsx` to set page `title`, `description`, Open Graph and JSON-LD structured data.
- Injected `SEO` into `App.tsx` for main views.
- Added `sitemap.xml` and `robots.txt` at project root and server routes to serve them.

To customize metadata per route, update `SEO` usage in `App.tsx` or add it to individual page components and pass `title`/`description`/`image`/`url` props.
