/**
 * TEF Canada — Expression Orale
 * App logic: renders the class list, lesson content and interactive quizzes.
 * Pure vanilla JS, no build step required.
 */
(function () {
  "use strict";

  const course = window.COURSE;
  const els = {
    classList: document.getElementById("class-list"),
    content: document.getElementById("class-content"),
    homeBtn: document.getElementById("home-btn"),
    progress: document.getElementById("progress-badge"),
  };

  const STORAGE_KEY = "tef-eo-progress";

  /* -------------------- progress persistence -------------------- */
  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
      return {};
    }
  }
  function saveProgress(p) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
    } catch (e) {
      /* ignore storage errors (e.g. private mode) */
    }
  }
  function markCompleted(classId) {
    const p = loadProgress();
    p[classId] = true;
    saveProgress(p);
    renderProgressBadge();
    renderClassList();
  }

  function renderProgressBadge() {
    const p = loadProgress();
    const done = course.classes.filter((c) => p[c.id]).length;
    els.progress.textContent = done + " / " + course.classes.length + " terminées";
  }

  /* -------------------- helpers -------------------- */
  function el(tag, opts, children) {
    const node = document.createElement(tag);
    if (opts) {
      if (opts.class) node.className = opts.class;
      if (opts.text != null) node.textContent = opts.text;
      if (opts.html != null) node.innerHTML = opts.html;
      if (opts.attrs) {
        Object.keys(opts.attrs).forEach((k) => node.setAttribute(k, opts.attrs[k]));
      }
      if (opts.on) {
        Object.keys(opts.on).forEach((evt) => node.addEventListener(evt, opts.on[evt]));
      }
    }
    (children || []).forEach((ch) => ch && node.appendChild(ch));
    return node;
  }

  /* -------------------- sidebar / class list -------------------- */
  function renderClassList() {
    const p = loadProgress();
    els.classList.innerHTML = "";
    course.classes.forEach((c) => {
      const item = el("button", {
        class: "class-link" + (p[c.id] ? " is-done" : ""),
        attrs: { "data-id": c.id, type: "button" },
        on: { click: () => openClass(c.id) },
      }, [
        el("span", { class: "class-num", text: "Classe " + c.id }),
        el("span", { class: "class-name", text: c.title }),
        el("span", { class: "class-check", text: p[c.id] ? "✓" : "" }),
      ]);
      els.classList.appendChild(item);
    });
  }

  function setActiveLink(classId) {
    document.querySelectorAll(".class-link").forEach((n) => {
      n.classList.toggle("is-active", String(classId) === n.getAttribute("data-id"));
    });
  }

  /* -------------------- home view -------------------- */
  function renderHome() {
    setActiveLink(null);
    els.content.innerHTML = "";
    const hero = el("section", { class: "hero" }, [
      el("h1", { text: course.title }),
      el("p", { class: "hero-sub", text: course.subtitle }),
      el("p", {
        class: "hero-lead",
        text:
          "Un parcours complet en 6 classes pour réussir l'épreuve d'Expression Orale du TEF Canada : " +
          "leçons, exemples de dialogues, vocabulaire utile et exercices de pratique interactifs.",
      }),
    ]);

    const grid = el("div", { class: "card-grid" });
    course.classes.forEach((c) => {
      const p = loadProgress();
      const card = el("button", {
        class: "course-card" + (p[c.id] ? " is-done" : ""),
        attrs: { type: "button" },
        on: { click: () => openClass(c.id) },
      }, [
        el("div", { class: "course-card-top" }, [
          el("span", { class: "badge", text: "Classe " + c.id }),
          el("span", { class: "duration", text: c.duration }),
        ]),
        el("h3", { text: c.title }),
        el("p", { text: c.subtitle }),
        el("span", { class: "card-cta", text: p[c.id] ? "Revoir ✓" : "Commencer →" }),
      ]);
      grid.appendChild(card);
    });

    els.content.appendChild(hero);
    els.content.appendChild(grid);
    window.scrollTo(0, 0);
  }

  /* -------------------- class view -------------------- */
  function openClass(classId) {
    const c = course.classes.find((x) => x.id === classId);
    if (!c) return;
    setActiveLink(classId);
    location.hash = "classe-" + classId;
    els.content.innerHTML = "";

    // Header
    els.content.appendChild(
      el("header", { class: "class-header" }, [
        el("span", { class: "badge", text: "Classe " + c.id + " · " + c.duration }),
        el("h1", { text: c.title }),
        el("p", { class: "class-sub", text: c.subtitle }),
      ])
    );

    // Objectives
    const objList = el("ul", { class: "objectives" });
    c.objectives.forEach((o) => objList.appendChild(el("li", { text: o })));
    els.content.appendChild(
      el("section", { class: "block" }, [
        el("h2", { text: "🎯 Objectifs de la classe" }),
        objList,
      ])
    );

    // Lessons
    const lessonBlock = el("section", { class: "block" }, [
      el("h2", { text: "📘 Leçon" }),
    ]);
    c.lessons.forEach((l) => {
      const lesson = el("article", { class: "lesson" }, [
        el("h3", { text: l.heading }),
      ]);
      l.body.forEach((para) => lesson.appendChild(el("p", { text: para })));
      if (l.note) {
        lesson.appendChild(el("div", { class: "note", html: "💡 <strong>À retenir :</strong> " + escapeHtml(l.note) }));
      }
      lessonBlock.appendChild(lesson);
    });
    els.content.appendChild(lessonBlock);

    // Dialogue
    if (c.dialogue) {
      const dlg = el("section", { class: "block" }, [
        el("h2", { text: "🎭 " + (c.dialogue.title || "Exemple de dialogue") }),
      ]);
      const script = el("div", { class: "dialogue" });
      c.dialogue.lines.forEach((line) => {
        script.appendChild(
          el("div", { class: "dialogue-line" }, [
            el("span", { class: "speaker", text: line.speaker }),
            el("span", { class: "utterance", text: line.text }),
          ])
        );
      });
      dlg.appendChild(script);
      els.content.appendChild(dlg);
    }

    // Vocabulary
    if (c.vocabulary && c.vocabulary.length) {
      const vocab = el("section", { class: "block" }, [
        el("h2", { text: "🗂️ Vocabulaire & expressions utiles" }),
      ]);
      const table = el("div", { class: "vocab-grid" });
      c.vocabulary.forEach((v) => {
        table.appendChild(
          el("div", { class: "vocab-item" }, [
            el("span", { class: "vocab-fr", text: v.fr }),
            el("span", { class: "vocab-en", text: v.en }),
          ])
        );
      });
      vocab.appendChild(table);
      els.content.appendChild(vocab);
    }

    // Quiz
    els.content.appendChild(renderQuiz(c));

    // Navigation between classes
    els.content.appendChild(renderClassNav(c.id));

    window.scrollTo(0, 0);
  }

  /* -------------------- quiz -------------------- */
  function renderQuiz(c) {
    const section = el("section", { class: "block quiz" }, [
      el("h2", { text: "✍️ Pratique" }),
      el("p", { class: "quiz-intro", text: "Répondez aux questions, puis vérifiez. Les questions ouvertes se pratiquent à voix haute avant de révéler un modèle de réponse." }),
    ]);

    const mcqState = {}; // index -> chosen option

    c.quiz.forEach((q, qi) => {
      const card = el("div", { class: "quiz-card" });
      card.appendChild(el("p", { class: "quiz-q", text: (qi + 1) + ". " + q.question }));

      if (q.type === "mcq") {
        const optsWrap = el("div", { class: "options" });
        q.options.forEach((opt, oi) => {
          const btn = el("button", {
            class: "option",
            attrs: { type: "button" },
            text: opt,
            on: {
              click: function () {
                if (mcqState[qi] != null) return; // already answered
                mcqState[qi] = oi;
                const correct = oi === q.answer;
                btn.classList.add(correct ? "correct" : "wrong");
                // reveal the correct one if user was wrong
                if (!correct) {
                  optsWrap.children[q.answer].classList.add("correct");
                }
                Array.prototype.forEach.call(optsWrap.children, (b) => (b.disabled = true));
                card.appendChild(
                  el("div", {
                    class: "feedback " + (correct ? "ok" : "ko"),
                    html: (correct ? "✅ Correct ! " : "❌ Pas tout à fait. ") + escapeHtml(q.explanation),
                  })
                );
                updateScore();
              },
            },
          });
          optsWrap.appendChild(btn);
        });
        card.appendChild(optsWrap);
      } else {
        // open question
        card.appendChild(
          el("textarea", {
            class: "open-answer",
            attrs: { rows: "3", placeholder: "Notez vos idées ici, ou entraînez-vous à voix haute…" },
          })
        );
        const modelBox = el("div", { class: "model-answer hidden", html: "<strong>Modèle de réponse :</strong> " + escapeHtml(q.model) });
        const toggle = el("button", {
          class: "reveal-btn",
          attrs: { type: "button" },
          text: "Afficher un modèle de réponse",
          on: {
            click: function () {
              modelBox.classList.toggle("hidden");
              toggle.textContent = modelBox.classList.contains("hidden")
                ? "Afficher un modèle de réponse"
                : "Masquer le modèle";
            },
          },
        });
        card.appendChild(toggle);
        card.appendChild(modelBox);
      }

      section.appendChild(card);
    });

    // score + complete
    const mcqCount = c.quiz.filter((q) => q.type === "mcq").length;
    const scoreEl = el("div", { class: "score", text: mcqCount ? "Score : 0 / " + mcqCount : "" });
    function updateScore() {
      if (!mcqCount) return;
      let good = 0;
      c.quiz.forEach((q, qi) => {
        if (q.type === "mcq" && mcqState[qi] === q.answer) good++;
      });
      scoreEl.textContent = "Score : " + good + " / " + mcqCount;
    }

    const completeBtn = el("button", {
      class: "complete-btn",
      attrs: { type: "button" },
      text: "Marquer la classe comme terminée ✓",
      on: {
        click: function () {
          markCompleted(c.id);
          completeBtn.textContent = "Classe terminée ✓";
          completeBtn.disabled = true;
        },
      },
    });

    const footer = el("div", { class: "quiz-footer" }, [scoreEl, completeBtn]);
    section.appendChild(footer);
    return section;
  }

  /* -------------------- class navigation -------------------- */
  function renderClassNav(currentId) {
    const nav = el("nav", { class: "class-nav" });
    const prev = course.classes.find((c) => c.id === currentId - 1);
    const next = course.classes.find((c) => c.id === currentId + 1);
    if (prev) {
      nav.appendChild(
        el("button", {
          class: "nav-prev",
          attrs: { type: "button" },
          html: "← Classe " + prev.id + " · " + escapeHtml(prev.title),
          on: { click: () => openClass(prev.id) },
        })
      );
    } else {
      nav.appendChild(el("span"));
    }
    if (next) {
      nav.appendChild(
        el("button", {
          class: "nav-next",
          attrs: { type: "button" },
          html: "Classe " + next.id + " · " + escapeHtml(next.title) + " →",
          on: { click: () => openClass(next.id) },
        })
      );
    }
    return nav;
  }

  /* -------------------- utils -------------------- */
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  /* -------------------- init -------------------- */
  function init() {
    renderClassList();
    renderProgressBadge();
    els.homeBtn.addEventListener("click", function (e) {
      e.preventDefault();
      location.hash = "";
      renderHome();
    });

    const m = /^#classe-(\d+)$/.exec(location.hash);
    if (m) {
      openClass(parseInt(m[1], 10));
    } else {
      renderHome();
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();
