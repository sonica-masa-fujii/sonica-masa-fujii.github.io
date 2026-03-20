Masayoshi Fujii personal website

This directory is prepared as a static multi-page site for GitHub Pages.

Pages

- `index.html`
- `publications.html`
- `cv.html`
- `contact.html`
- `index-en.html`
- `publications-en.html`
- `cv-en.html`
- `contact-en.html`

Assets

- `sample-theme.css`
- `sample-motion.js`
- `masayoshi-fujii_selfie.jpg`
- `.nojekyll`

Local preview

Open `index.html` directly in a browser, or run a simple local server:

```bash
cd /Users/masayoshifujii/homepage-redesign/fujii-site-qiqb
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

GitHub Pages setup

1. Create a new GitHub repository.
2. Push the contents of this directory to the `main` branch.
3. In GitHub, open `Settings > Pages`.
4. Set:
   Source: `Deploy from a branch`
   Branch: `main`
   Folder: `/ (root)`
5. Save and wait for the site URL to be issued.

If you want a user site, use a repository name like:

- `<your-github-username>.github.io`

If you want a project site, any repository name is fine.
