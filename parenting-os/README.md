# AI Parenting OS — Project Workspace

**Status:** Pre-implementation. Working through the 18 delivery phases in order; no application code until architecture (Phases 8–13) is designed and approved.

An AI-powered parenting operating system for first-time parents in Canada, supporting families from pregnancy through the child's first birthday. Educational and organizational; it does not replace licensed healthcare professionals.

## Repository note

This directory lives inside a repository whose original content (a TEF Canada French course app at the repo root) is unrelated to this project. All Parenting OS artifacts are contained under `parenting-os/` and never touch the root app. **Recommendation on record (D-001):** move to a dedicated repository before implementation begins.

## Structure

```
parenting-os/
├── README.md                  # this file — project index and status
├── CHANGELOG.md               # versioned history of all phase deliverables
├── DECISION_LOG.md            # numbered, immutable record of decisions (D-###)
└── docs/
    └── phases/
        ├── phase-01-product-vision.md
        └── phase-02-product-requirements.md
```

## Phase tracker

| Phase | Deliverable | Status | Version |
|-------|-------------|--------|---------|
| 1 | Product vision | ✅ Approved | 1.0.0 |
| 2 | Product requirements document | ✅ Delivered — awaiting approval | 1.0.0 |
| 3 | Information architecture | Not started | — |
| 4 | Feature inventory | Not started | — |
| 5 | User journeys | Not started | — |
| 6 | Wireframes | Not started | — |
| 7 | Design system | Not started | — |
| 8 | Technical architecture | Not started | — |
| 9 | Database design | Not started | — |
| 10 | Backend architecture | Not started | — |
| 11 | Frontend architecture | Not started | — |
| 12 | AI architecture | Not started | — |
| 13 | Security architecture | Not started | — |
| 14 | Analytics | Not started | — |
| 15 | Notifications | Not started | — |
| 16 | Testing strategy | Not started | — |
| 17 | Deployment | Not started | — |
| 18 | Documentation | Not started | — |

## Ground rules (binding on all phases)

- Evidence hierarchy for medical content: Canadian Paediatric Society → Canadian Immunization Guide → Health Canada → BC Children's Hospital → WHO → AAP → NICE. Divergences are explained; the Canada-appropriate guidance is recommended.
- No fabricated medical information, no invented references. Evidence, consensus, and opinion are always labelled as such.
- The product never diagnoses, prescribes, or replaces clinicians. It always explains warning signs and when professional care is appropriate.
- Every technical decision records reasoning, alternatives, trade-offs, scalability, maintainability, complexity, security, and performance implications in `DECISION_LOG.md`.
- Earlier decisions are never changed silently; changes are logged with their impact.
