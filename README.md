# French with Guri — TEF Canada · Expression Orale

A self-contained static web app for learning the **Expression Orale (Speaking)**
section of the **TEF Canada** exam, delivered as a 6-class course.

## Contents

The course covers the two speaking tasks of the TEF Canada — **Section A**
(obtaining information by asking questions) and **Section B** (convincing /
defending a point of view) — progressively across six classes:

| Class | Title | Focus |
|-------|-------|-------|
| 1 | Découvrir l'épreuve | Format, timing and scoring (NCLC/CLB) |
| 2 | Section A — Poser des questions | Question forms & formal register |
| 3 | Section A — Stratégies avancées | Covering all aspects, reacting, relancer |
| 4 | Section B — Convaincre : les bases | Structure, opinion, connectors |
| 5 | Section B — Persuasion avancée | Handling objections, concession, persuasion |
| 6 | Examen blanc & conseils finaux | Full mock exam, common mistakes, fluency |

Each class includes: learning **objectives**, a **lesson**, an example
**dialogue**, useful **vocabulary**, and an interactive **practice** section
(multiple-choice quizzes with instant feedback, plus open speaking prompts with
model answers). Progress is saved locally in the browser.

## Run it locally

No build step is required — it's plain HTML, CSS and JavaScript.

```bash
# from the project root, serve the folder with any static server, e.g.:
python3 -m http.server 8000
# then open http://localhost:8000
```

Or simply open `index.html` in a browser.

## Project structure

```
index.html                 # app shell
assets/css/styles.css      # styling
assets/js/data.js          # course content (all 6 classes)
assets/js/app.js           # rendering + quiz logic
```

## Adding or editing content

All course content lives in `assets/js/data.js` in the `COURSE` object. To edit
a class, change its entry; to add a class, append a new object to
`COURSE.classes` following the same shape (`objectives`, `lessons`, `dialogue`,
`vocabulary`, `quiz`). No other files need to change.

## Deployment

The included GitHub Actions workflow (`.github/workflows/pages.yml`) publishes
the site to **GitHub Pages** on every push to `main`.
