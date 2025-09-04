# Wedding & Events — React Starter Site

This is a lightweight React (Vite) + Tailwind starter site for a wedding/event photography business.

## Features
- Home, Gallery, About, Contact pages
- Simple in-browser gallery upload (files stored in-memory)
- EmailJS contact form (replace IDs with your own)
- Tailwind CSS for styling

## Setup (locally)
1. Node.js 18+ recommended.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start dev server:
   ```bash
   npm run dev
   ```
4. Build:
   ```bash
   npm run build
   ```

## Notes
- The gallery currently stores files in-memory for preview only. For persistence, connect to a backend or cloud storage (Amazon S3, Firebase Storage, etc.).
- Replace EmailJS `SERVICE_ID`, `TEMPLATE_ID`, and `PUBLIC_KEY` inside `src/pages/Contact.jsx`.
- Tailwind is included; if you prefer plain CSS, remove Tailwind files.

Happy editing — edit components under `src/pages` and `src/components` to customize.

