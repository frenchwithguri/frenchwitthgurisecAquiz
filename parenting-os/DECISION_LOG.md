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

## D-008 · 2026-07-11 · Phase 2 · Accepted

**Decision:** Requirement priority scheme P0 (ship-blocking) / P1 (v1.0 target, cuttable with CPO sign-off) / P2 (fast-follow) / P3 (roadmap, architecture-constraining only).

**Reasoning:** Simple, testable, and maps directly to release gates. MoSCoW's "Should/Could" ambiguity invites scope drift.

**Alternatives considered:** MoSCoW (rejected: ambiguity), RICE scoring (rejected: false precision without usage data pre-launch).

**Trade-offs:** Coarse; relies on CPO judgment for P1 cuts.

**Implications:** All phases 3–18 use this scheme.

## D-009 · 2026-07-11 · Phase 2 · Accepted (resolves OQ-6)

**Decision:** Co-caregiver model is two accounts with full parity per family — identical read/write access, no primary/secondary hierarchy. Either caregiver can revoke sharing.

**Reasoning:** Matches how couples actually share infant care; simplest mental model and permission system; hierarchy generates support burden and encodes family-structure assumptions.

**Alternatives considered:** Primary/secondary roles (rejected above), configurable granular roles (rejected: cognitive load for sleep-deprived users, YAGNI for v1).

**Trade-offs:** Concurrent-edit conflict resolution becomes a hard requirement (NFR-6); merge semantics must be designed in Phase 9, not defaulted to last-writer-wins.

**Implications:** Phase 9 (data model, merge semantics), Phase 13 (revocation, account separation on family breakdown — a real scenario the security design must handle).

## D-010 · 2026-07-11 · Phase 2 · Accepted (resolves OQ-5)

**Decision:** Launch with immunization schedules for all 13 provinces and territories, encoded in a single data model with automated cross-checks and a clinical review cadence.

**Reasoning:** Provincial specificity is the differentiation; a subset launch turns the core promise into a regional asterisk. PHAC/provincial publication of schedules (A-8) makes full coverage tractable.

**Alternatives considered:** Verified-subset launch by population (rejected: brand damage in excluded provinces exceeds the encoding savings), national-schedule-only (rejected: factually wrong for several provinces).

**Trade-offs:** More up-front encoding and per-province verification; ongoing maintenance across 13 sources.

**Implications:** Phase 9 (schedule data model), Phase 16 (per-province test suite is release-blocking), Phase 18 (review cadence), risk R-9.

## D-011 · 2026-07-11 · Phase 2 · Accepted (resolves OQ-4)

**Decision:** Compassionate mode (pregnancy loss / bereavement) is a P0 requirement (FR-3.4): immediate cessation of stage content and reminders, clinically reviewed support resources, pause/delete offered, no monetization surfaces in the flow. NICU path is P1 (FR-3.5).

**Reasoning:** Continuing cheerful stage notifications after a loss is the single most catastrophic failure this product could have — for the user and for the brand. It is cheap to build and unconscionable to defer.

**Alternatives considered:** P1/fast-follow (rejected: the failure mode exists from day one of launch), silent account-delete-only (rejected: abandons the user).

**Trade-offs:** Requires clinically reviewed resource content before launch (adds to R-2 dependency).

**Implications:** Phase 5 (journey design), Phase 15 (notification kill-switch semantics, release-blocking test), Phase 16.

## D-012 · 2026-07-11 · Phase 2 · Accepted

**Decision:** Accessibility standard is WCAG 2.2 AA across all P0 flows, with 44pt touch targets, dynamic type, and screen-reader support as explicit acceptance criteria.

**Reasoning:** 2.2 is the current standard and its additions (target size, dragging alternatives) directly serve one-handed exhausted use; accessibility and the core persona's constraints are the same problem here.

**Alternatives considered:** WCAG 2.1 AA (rejected: 2.2 exists and costs little more if adopted from the start), AAA (rejected: some AAA criteria conflict with practical design; adopt AAA items selectively where they serve the persona).

**Trade-offs:** Testing overhead in Phase 16.

**Implications:** Phases 6 (wireframes), 7 (design system tokens/contrast), 11 (frontend), 16 (a11y test gates).

## D-013 · 2026-07-11 · Phase 2 · Accepted, research-sensitive (resolves OQ-3)

**Decision:** Free tier: all tracking, immunization schedule + appointment organizer, safety-critical content, compassionate mode, data export/deletion. Paid tier: AI assistant beyond a limited free allowance, insights/pattern summaries, partner sync, full education library. One subscription per family. Paywall may never interpose on safety content or escalation paths (release-blocking test).

**Reasoning:** Draws the line at the D-003 ethics floor (safety is never paid) while placing the highest-value, highest-cost capabilities (AI, insights) behind payment. Family-level billing matches D-009.

**Alternatives considered:** Paid tracking (rejected: tracking is the habit loop and the context engine for the AI — gating it starves the product), free partner sync (open to reversal by research: sync may be a stronger free-tier retention driver than a paid converter).

**Trade-offs:** Free AI allowance sizing (OQ-8) is a delicate conversion/serving-cost balance, deferred to pricing research.

**Implications:** Phase 8 (entitlement architecture), Phase 14 (conversion analytics within anti-metric policy), risk R-11. Marked research-sensitive: pricing research (A-7) may move the sync/library lines without it counting as a silent change, per PRD §2.
