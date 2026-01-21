# SEEKH NEPAL

Educational platform for career guidance and skill development in Nepal.

## Setup Instructions

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Add your Google AI API key to `.env.local`:
- Get your key from: https://aistudio.google.com/app/apikey
- Add it to `GOOGLE_GENERATIVE_AI_API_KEY`

### 3. Run Development Server
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Vercel Deployment

### Required Environment Variables
Add the following to your Vercel project settings:
- `GOOGLE_GENERATIVE_AI_API_KEY` - Your Google AI API key

### Deploy
```bash
vercel deploy
```

## Features
- Career guidance chatbot
- Interactive course demos
- Course exploration
- Contact information

## Tech Stack
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Google Gemini AI
