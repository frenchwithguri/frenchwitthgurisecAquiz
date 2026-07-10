# Decision Log

Numbered, append-only record of project decisions. Decisions are never silently changed: a revision gets a new entry that supersedes the old one and states its impact on prior work.

Format: **ID · Date · Phase · Status** — decision, reasoning, alternatives considered, trade-offs, implications.

---

## D-001 · 2026-07-10 · Phase 1 · Recommended (pending founder action)

**Decision:** Recommend moving the Parenting OS to a dedicated repository before implementation begins; until then, all artifacts are isolated under `parenting-os/` in the current repository.

**Reasoning:** The host repository contains an unrelated production static site (TEF Canada French course) with a GitHub Pages workflow that deploys on push to `main`. Sharing a repo mixes deploy pipelines, permissions, issue tracking, and history for two unrelated products.

**Alternatives considered:** (a) monorepo with both products — rejected: no shared code, no shared team context; (b) orphan branch — rejected: hides the work and complicates review.

**Trade-offs:** Interim co-location is slightly awkward but zero-risk since no root files are touched. Migration later is a clean `git subtree split` or fresh init.

**Implications:** Phases 1–7 (documents only) may proceed here; Phase 8 onward should assume a dedicated repo.

## D-002 · 2026-07-10 · Phase 1 · Accepted (subject to R-1 counsel review)

**Decision:** Product category is an educational and organizational companion, positioned outside Health Canada SaMD scope. The product never diagnoses, prescribes, or triages; red-flag topics route to curated guidance and escalation.

**Reasoning:** The value proposition (trust, calm, organization) does not require diagnostic claims; making them would trigger medical-device regulation, clinical-evidence requirements, and liability incompatible with a startup timeline.

**Alternatives considered:** Regulated symptom-checker/triage product — rejected for regulatory cost and safety risk; it is also a different company.

**Trade-offs:** The AI will feel constrained on exactly the questions parents most want answered conversationally. Accepted; see Phase 1 §5.

**Implications:** Binding constraint on Phases 2 (requirements), 12 (AI architecture), 13 (security/compliance). Requires legal validation before Phase 8 sign-off (risk R-1).

## D-003 · 2026-07-10 · Phase 1 · Accepted

**Decision:** No advertising-based revenue, permanently. Business model hypothesis is freemium subscription with safety-essential content always free.

**Reasoning:** Ad incentives (engagement maximization) directly conflict with the calm-by-design pillar and the anxiety dynamics of the audience; "no ads, no data sales" is also a core positioning asset under PIPEDA/Law 25.

**Alternatives considered:** Ads (rejected: trust-destroying), fully paid (rejected: kills trust-building funnel), B2B2C via insurers/employers (deferred: viable later, distracting now).

**Trade-offs:** Slower monetization; conversion depends on genuinely superior paid value.

**Implications:** Phases 2 (pricing research), 14 (analytics must not be built around ad-style engagement KPIs).

## D-004 · 2026-07-10 · Phase 1 · Accepted

**Decision:** Canada-first with provincial awareness as a first-class data dimension; English at launch with French as a committed fast-follow; all architecture localization-ready from day one.

**Reasoning:** Canadian specificity is the core differentiation; provincial variation (immunization schedules, 811, services) is real and must live in the data model, not in copy edits. French is a market and regulatory necessity (Québec, Law 25 environment), but simultaneous bilingual launch doubles the clinical-review surface pre-product-market-fit.

**Alternatives considered:** North-America-wide launch (rejected: dilutes differentiation, fights incumbents at home), simultaneous EN/FR (open question OQ-1 — current recommendation is fast-follow).

**Trade-offs:** Smaller initial market; a Québec window of weakness until French ships.

**Implications:** Phases 3 (IA), 8–9 (i18n-ready architecture and schema), 18 (content ops for two languages).

## D-005 · 2026-07-10 · Phase 1 · Accepted

**Decision:** No community/forum features in v1.

**Reasoning:** Moderating medical misinformation at startup scale is a safety and cost liability that could destroy the trust moat before it exists.

**Alternatives considered:** Launch with moderated community (rejected for v1), expert-anchored Q&A community (deferred to post-v1 roadmap).

**Trade-offs:** Forfeits the category's strongest organic-growth engine and leaves the loneliness need unmet in v1.

**Implications:** Phase 4 feature inventory excludes community; growth strategy must not depend on virality from user-generated content.

## D-006 · 2026-07-10 · Phase 1 · Accepted

**Decision:** North-star metric is weekly active families retained at child age 6 months. Session length and frequency are guardrail anti-metrics — increases are investigated as possible harm signals. AI escalation quality is a release-blocking metric.

**Reasoning:** Aligns measurement with the calm-by-design pillar; prevents the analytics function from quietly optimizing the product toward anxiety-driven engagement.

**Alternatives considered:** DAU/MAU and session-based KPIs (rejected: structurally misaligned with product promise).

**Trade-offs:** Slower feedback loop (6-month horizon); requires leading indicators (activation, AI resolution rate) as proxies.

**Implications:** Phase 14 (analytics design), Phase 16 (safety evals in release criteria).

## D-007 · 2026-07-10 · Phase 1 · Accepted

**Decision:** Defined red-flag medical domains (e.g., neonatal fever, breathing difficulty, dehydration, postpartum mental-health crisis) bypass generative answering and route to clinically reviewed curated content plus escalation paths (811 / provider / emergency).

**Reasoning:** These are the highest-stakes, lowest-tolerance-for-error interactions; generation risk is unacceptable regardless of model quality. Curated routing also produces auditable behaviour.

**Alternatives considered:** Full generation with guardrail prompts (rejected: unauditable), refusing the topics entirely (rejected: abandons the user at peak need).

**Trade-offs:** Requires building and maintaining excellent curated escalation content; taxonomy maintenance is ongoing work.

**Implications:** Phase 2 (red-flag taxonomy requirement), Phase 12 (routing architecture), Phase 16 (eval suite), clinical reviewer dependency (R-2).
