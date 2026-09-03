# Burhan Faisal — AI Engineer Portfolio

A modern, single-page portfolio website built with **React**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customization

All personal information is centralized in **one config file**:

### `src/data/config.js`

Update these fields:

| Field | Description |
|---|---|
| `email` | Your email address |
| `github` | Your GitHub profile URL |
| `linkedin` | Your LinkedIn profile URL |
| `profilePhoto` | Path to your profile photo (place in `public/`) |
| `university` | Your university name |
| `universityStart` | Start year |
| `universityEnd` | Expected graduation |

### `src/data/projects.js`

Update project details:
- Replace `YOUR_GITHUB_REPO_URL` with actual repo URLs
- Replace `{REPLACE}` metrics with actual values
- Update project 4 when ready

### `src/data/journey.js`

Update timeline years and descriptions to match your actual journey.

### `src/data/skills.js`

Add or remove skills from any category.

## Profile Photo

1. Place your photo in the `public/` directory (e.g., `public/profile.jpg`)
2. Update `profilePhoto` in `src/data/config.js`:
   ```js
   profilePhoto: "/profile.jpg",
   ```
3. Use a square image (400×400 or larger) for best results

## SEO

Update these in `index.html`:
- `og:url` — your deployed site URL

## Deployment

### Vercel
```bash
npm run build
# Deploy the `dist/` folder via Vercel dashboard or CLI
```

### Netlify
```bash
npm run build
# Deploy the `dist/` folder via Netlify dashboard or CLI
```

Build command: `npm run build`  
Output directory: `dist`

## Tech Stack

- **React 18** — UI library
- **Vite** — Build tool
- **Tailwind CSS** — Utility-first CSS
- **Framer Motion** — Animations
- **Lucide React** — Icons

## License

MIT
