# RAPIDMSI

Landing page for RAPIDMSI – accelerating Mass Spectrometry Imaging with intelligent partial acquisition.

## Tech Stack

- [Next.js](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` – development server
- `npm run build` – production build
- `npm run start` – run production server
- `npm run lint` – run ESLint

## Deploying to GitHub (upload and push to main)

1. **One-time: sign in to GitHub from the terminal** (if you haven’t already):
   ```bash
   brew install gh   # if you don’t have GitHub CLI
   gh auth login     # follow prompts; choose HTTPS and “authenticate Git”
   ```

2. **Make sure your remote points to your repo** (replace with your repo URL if different):
   ```bash
   git remote -v
   # If origin is wrong or missing:
   git remote set-url origin https://github.com/rapidmsi/rapidmsi-landing-page.git
   ```

3. **Stage, commit, and push to main**:
   ```bash
   git add .
   git status          # optional: see what will be committed
   git commit -m "Add mobile navbar and update README"
   git branch -M main  # ensure branch is named main (GitHub default)
   git push -u origin main
   ```

   After the first push with `-u origin main`, later pushes are just:
   ```bash
   git add .
   git commit -m "Your message"
   git push
   ```

   **Note:** GitHub’s default branch is `main`, not `master`. Use `main` unless your repo is set up for `master`.
