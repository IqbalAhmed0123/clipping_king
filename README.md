# Clip Maker (static, runs entirely in the browser)

## Deploy on Vercel
1. Push this folder to a GitHub repo (or run `npx vercel` inside it).
2. In Vercel choose "Add New > Project", import the repo, and click Deploy. Vercel detects Vite; `vercel.json` already sets the build.

## Run locally
    npm install
    npm run dev

## Use Ollama (free, local ranking)
Install Ollama, run `ollama pull llama3.2`, then allow the website to call it:
- Windows: `setx OLLAMA_ORIGINS "https://YOUR-APP.vercel.app"` then quit and restart Ollama
- macOS: `launchctl setenv OLLAMA_ORIGINS "https://YOUR-APP.vercel.app"` then restart Ollama
- Linux: add `Environment="OLLAMA_ORIGINS=https://YOUR-APP.vercel.app"` to the ollama systemd service
Use Chrome or Edge. For local dev use `http://localhost:5173` as the origin.

## YouTube / video links
Vercel cannot download YouTube (it blocks cloud servers), so links go through a helper on your own computer:

    pip install yt-dlp        # also install ffmpeg (Windows: winget install ffmpeg)
    python yt_helper.py       # the site serves this file at /yt_helper.py; leave it running

Then paste a link on the site. Set MAX_HEIGHT=1080 for sharper clips. Use only videos you own or may reuse.
