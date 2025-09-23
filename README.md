Shaobo Chen — Personal Homepage & Showcase

A fast, accessible, recruiter-friendly personal site built with HTML5, CSS3, Bootstrap 5, and vanilla ES Modules.
Includes a parallax photo gallery, education/experience accordions, projects with colorful skill badges, and a separate showcase layout.

Demo: (optional) https://your-username.github.io/your-repo/

Homepage: index.html · Gallery: secondary.html · Showcase: showcase.html

🌟 Project Objective

Present my background (CS & Info Science @ Northeastern, GPA 4.0) and projects in a polished, mobile-friendly way.

Make it easy for recruiters to scan impact: projects, skills, education, and experience.

Keep the codebase simple (no framework) but modern (ES6 modules, modular CSS, ESLint).

🖼 Screenshot

Replace with your real images.

🧰 Tech Requirements / Stack

HTML5, CSS3, Bootstrap 5.3

Vanilla JavaScript with ES Modules

Each page loads ./js/main.js via <script type="module" src="./js/main.js"></script>

ESLint (flat config, ESM) for code quality

No build step required; static hosting ready (GitHub Pages / Netlify / Vercel)

Optional dev tooling:

Node 18+ (for ESLint only)

📁 Project Structure (simplified)
index.html # Homepage (hero banner, 8–4 layout, About, Education, Experience, Projects)
secondary.html # Personal life gallery (full-bleed parallax, scroll-snap)
showcase.html # Alternate recruiter-focused layout (hero + stats, timeline, skills grid)
styles/
main.css # All site styles (modular sections, no inline styles)
images/
... # Banner + gallery images (each with meaningful alt text)
files/
data_mart.pdf # Project PDF 1
mobile_app.pdf # Project PDF 2
js/
main.js # Entry point (ESM)
accordion.js # Semantic accordions (education/experience/skills)
langToggle.js # Optional language toggle for secondary page
.eslintrc / eslint.config.mjs
package.json

✨ Creative Addition (JavaScript): One-Button EN/中文 Toggle

What it is
A single floating button that switches all visible text between English and Chinese instantly, 
and remembers the choice with localStorage. Implemented with vanilla ES modules; accessible and
keyboard-friendly.

Why it matters
Broadens audience beyond English speakers (friends, peers, recruiters from China).
Zero page reload, tiny footprint, and no framework needed.

UX & Accessibility
Real <button> with aria-pressed and a visible focus ring.
Works with mouse, touch, and keyboard.
Persists language across visits via localStorage('lang').
Graceful fallback: if JS is off, default language content stays visible.

🚀 How to Install / Use

1. Clone and open
   git clone https://github.com/your-username/your-repo.git
   cd your-repo

2. (Optional) Install dev tools for linting
   npm install

if package.json not present, run:

npm init -y && npm i -D eslint @eslint/js globals && npm pkg set type=module

3. Run locally (use a local server for ES modules)

Any of these works:

Python

python3 -m http.server 5173

Node (serve)

npx serve .

VS Code

Use the "Live Server" extension and open index.html

Then open http://localhost:5173 (or the URL shown by your server).

4. Lint (optional)
   npm run lint
   npm run lint:fix

🌐 Deploy (GitHub Pages)

Push this repo to GitHub. Ensure index.html is at the repo root.

Settings → Pages → Source: “Deploy from a branch” · Branch: main · Folder: /

Your site will be at: https://gideonccc.github.io/Shaobo_Homepage/



✨ Features

Hero banner with overlap text card and motto (Roger Federer)

Education & Experience as accessible accordions (keyboard & touch friendly)

Projects as cards with colorful gradient badges for tools/skills

Secondary page: scroll-snapping, parallax photo bands with alt text

Showcase page: recruiter-oriented hero + stats card + timeline + skills grid

Modular CSS, semantic HTML, and alt text for images

👤 Author

Shaobo Chen

https://gideonccc.github.io/Shaobo_Homepage/(update with your real URL)


🎓 Class Reference

CS5610 Web Development — Northeastern University
Class link: [CS5610](https://johnguerra.co/classes/webDevelopment_online_fall_2025/)


🤖 AI-Generated Content Disclosure
AI tool (ChatGPT-5)
Item: Alternate “Showcase” page layout (showcase.html) and hero stats styles in styles/main.css.
Original prompt (excerpt):
“Act as a senior full-stack web engineer/editor and build a third page (showcase.html) that reuses exactly the same content as my homepage (About, Motto, Education, Experience, Projects, Skillset) but presents it in a distinct, recruiter-focused layout (e.g., hero + brief value prop + stats, projects first, combined education/experience timeline, simple skills grid). Use HTML5, CSS3, Bootstrap 5.3 (CDN), and vanilla JS with ES modules (<script type="module" src="./js/main.js"></script>). Add styles to styles/main.css scoped under .showcase; no inline styles or !important. Keep it semantic, accessible (meaningful alt, keyboardable), responsive, and fast.”

Item: Colorful project card design - palette selection, gradient/solid variants, and CSS rules for .showcase .card (including hover/focus states) in styles/main.css.
prompt:
"Design the project cards to be colorful, using a consistent palette with gradient or solid options. Add simple hover and focus states that improve readability."

📄 License
This project is licensed under the [MIT License](LICENSE) — you are free to use, modify, and distribute this project in accordance with the terms of the license.
