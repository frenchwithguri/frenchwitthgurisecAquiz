# French with Guri — TEF Canada · Expression Orale

A self-contained static web app for learning the **Expression Orale (Speaking)**
section of the **TEF Canada** exam, delivered as an 8-class course.

## Contents

The course covers the two speaking tasks of the TEF Canada — **Section A**
(obtaining information by asking questions) and **Section B** (convincing /
defending a point of view) — progressively across eight classes. Classes 1–3
build Section A; Classes 4–8 form a deeper, drill-heavy Section B block ending
with a full mock exam:

| Class | Title | Focus |
|-------|-------|-------|
| 1 | Découvrir l'épreuve | Format, timing and scoring (NCLC/CLB) |
| 2 | Section A — Poser des questions | Question forms & formal register |
| 3 | Section A — Stratégies avancées | Covering all aspects, reacting, relancer |
| 4 | Section B — Convaincre : les bases | Structure, opinion, connectors, argument + example |
| 5 | Section B — Persuasion avancée | Objections (ARC method), concession, compromise |
| 6 | Section B — Argumentation thématique | Argument bank by theme, thematic vocabulary, nuance |
| 7 | Grammaire, connecteurs et aisance à l'oral | Conditional/subjunctive, connectors, liaisons, fluency |
| 8 | Examen blanc & conseils finaux | Four full mock scenarios, common mistakes, final checklist |

Each class includes: learning **objectives**, a **lesson**, an example
**dialogue**, useful **vocabulary**, and an interactive **practice** section
(multiple-choice quizzes with instant feedback, plus open speaking prompts with
model answers). Classes 4–8 are intentionally in-depth and drill-oriented, with
10–14 exercises each and full model responses. Progress is saved locally in the
browser.

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
assets/js/data.js          # course content (all 8 classes)
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
