# Phase 1 — Product Vision

**Version:** 1.0.0
**Status:** Delivered — awaiting approval
**Owner:** Founder / CPO
**Depends on:** —
**Feeds into:** Phase 2 (PRD)

---

## 1. Objective

Define what we are building, for whom, why it will win, and — just as importantly — what we are deliberately not building. This document is the contract every later phase is tested against: if a feature, screen, or architectural choice doesn't serve this vision, it gets cut.

## 2. Assumptions

Explicitly stated so they can be challenged before Phase 2:

- **A-1 (market):** Canada records roughly 350,000 births per year, a substantial share of them to first-time parents. *Verification required against current Statistics Canada data before this number appears in any external material or business case.*
- **A-2 (behaviour):** First-time parents already consult apps and search engines constantly, especially at night; the demand is proven, the trustworthy supply is not. Treated as consensus based on the visible market (BabyCenter, What to Expect, Huckleberry all report large user bases), not measured fact — Phase 2 includes primary user research to confirm.
- **A-3 (regulatory posture):** An educational/organizational product that provides guideline-based information, tracking, and reminders — and never diagnosis or treatment recommendations — can be positioned outside Health Canada's Software as a Medical Device (SaMD) scope. *This is an assumption, not a legal conclusion; it requires counsel review before implementation (see R-1).*
- **A-4 (willingness to pay):** Canadian parents will pay a subscription for a trustworthy, ad-free product during a life stage when they are already spending heavily. Unvalidated; pricing research is a Phase 2 open item.
- **A-5 (AI capability):** Current LLMs, when constrained to retrieve from a curated corpus of Canadian guidelines and to cite provenance, can answer parenting questions with acceptable safety when wrapped in the escalation and refusal scaffolding defined later in Phase 12. Partially validated by industry experience; must be proven by our own evaluation suite before launch.
- **A-6 (scope of "family"):** v1 serves one household (up to two caregiver accounts) with one child, pregnancy through 12 months. Twins/multiples are in scope as a data model requirement (Phase 9) even if v1 UX is optimized for a single child.

## 3. Deliverable — The Product Vision

### 3.1 The real problem

"Parents need a baby app" is not the problem — the store is full of baby apps. Decomposing what first-time parents in Canada actually face:

1. **Conflicting information with no arbiter.** Guidance differs between the CPS, the AAP, WHO, hospital handouts, older relatives, and influencer content. Parents don't lack information; they lack a way to resolve contradictions. No mainstream product says *"these two credible sources disagree, here is why, and here is what applies in Canada."*
2. **The 3 a.m. context problem.** The moment of highest need — exhausted, one hand free, anxious, baby crying — is the moment when searching, reading, and judging source quality is least possible. Existing products serve the calm daytime reader, not the overwhelmed nighttime parent.
3. **Fragmentation.** Pregnancy app → sleep-tracking app → feeding-log app → vaccination paper card → milestone checklist PDF → provincial health website. Context is lost at every seam, and the parent is the integration layer.
4. **Anxiety amplification.** Ad-funded content platforms are structurally incentivized toward engagement, which for new parents means worry. Forums surface worst cases. Generic AI chatbots answer confidently without context about *this* child, *this* jurisdiction, or when to stop answering and say "call your provider."
5. **US-centric defaults.** The dominant products assume US immunization schedules, US feeding guidance, US healthcare navigation ("call your pediatrician" — many Canadian families don't have one), and imperial units. Canada is served as an afterthought.

The real problem: **first-time Canadian parents have no single, trustworthy, context-aware system that reduces — rather than adds to — the cognitive load of the first year.**

### 3.2 Why existing products don't solve it

Qualitative landscape (no fabricated market-share figures; competitive teardown with current data is a Phase 2 task):

| Category | Examples | What they do well | Structural gap |
|---|---|---|---|
| Content + community | BabyCenter, What to Expect | Breadth, week-by-week content | Ad-funded, US-centric, anxiety-adjacent community, no personal context |
| Trackers | Huckleberry, Baby Tracker | Excellent logging, sleep guidance | Narrow; tracking without the "so what"; limited Canadian guidance |
| Pregnancy-first | Ovia | Strong pregnancy journey | Drops off after birth; US insurer-oriented model |
| Community | Peanut | Peer connection | Peer opinion is not evidence; moderation burden |
| Generic AI chat | ChatGPT et al. | Fluency, availability | No child context, no provenance, no escalation scaffolding, hallucination risk, no jurisdiction awareness |

Nobody combines **Canadian-first evidence, personal context, organization, and AI assistance in one calm system**. That intersection is the product.

### 3.3 Vision statement

> **Every first-time parent in Canada gets a calm, trustworthy companion that knows their family's context, organizes the first year, and answers the 3 a.m. question with evidence — and knows when to say "call your provider."**

Ten-year ambition: the default operating system for early parenthood in Canada — the layer families trust between raw medical guidance and daily life — expanding beyond the first year and beyond Canada only after that trust is earned.

### 3.4 What the product is — and is not

**It is:**
- A **trusted guide**: every piece of medical content traceable to the evidence hierarchy (CPS → Canadian Immunization Guide → Health Canada → BC Children's Hospital → WHO → AAP → NICE), with disagreements surfaced and explained, and evidence/consensus/opinion labelled.
- An **intelligent organizer**: one timeline of what matters — provincially-aware immunization schedule, appointment prep, developmental milestones, feeding/sleep patterns — with proactive, quiet reminders.
- A **personal parenting assistant**: an AI that remembers the child's age, feeding method, sleep history, and prior conversations; explains its reasoning; states confidence; and escalates ("this warrants a call to 811 / your provider / emergency care") instead of improvising.
- A **high-quality educational platform**: stage-appropriate content that arrives when relevant, not as an infinite feed.
- A **calm experience**: dark-mode-first, one-handed, offline-capable for core reference content, no ads, no engagement bait, no guilt mechanics.

**It is not:**
- A diagnostic or triage tool. It never diagnoses, never prescribes, never replaces clinicians.
- A social network. No forums in v1 (see Trade-offs, §5).
- An ad platform or data broker. The privacy stance (§3.8) forecloses the ad-funded model permanently, not just at launch.
- A general-purpose chatbot with a baby skin.

### 3.5 Product pillars

Every later phase maps its work to these five pillars; anything that serves none of them is out.

1. **Trust through provenance** — sources visible, hierarchy explicit, disagreements explained, uncertainty admitted.
2. **Context, not content** — the system knows the child and the province; answers and reminders are specific, not generic.
3. **Calm by design** — reduce decisions, reduce alerts, reduce guilt. Success is the parent closing the app reassured, not staying in it longer.
4. **One-handed at 3 a.m.** — the design target user is exhausted, holding a baby, in the dark. If a flow fails that test, it fails.
5. **Safety rails, not safety theater** — few disclaimers, but hard boundaries: warning signs always explained, escalation paths always one tap away, red-flag topics routed to guidance rather than generated prose.

### 3.6 Target user

**Primary persona (design target):** first-time expectant or new parent in Canada, roughly 25–40, smartphone-native, sleep-deprived, anxious, time-poor, using the app one-handed and often at night. Comfort with technology: high. Comfort with medical literature: low to moderate.

**Secondary:** the partner/co-caregiver, who needs shared context (same logs, same schedule, same answers) without duplicate data entry.

**Explicitly not designed for in v1:** experienced parents, professionals (midwives, doulas) as end users, families outside Canada. They may use it; we don't optimize for them.

### 3.7 v1 scope boundaries

- **Journey:** confirmed pregnancy → child's first birthday.
- **Geography:** Canada only. Provincial variation (immunization schedules, 811 availability, parental-leave references) is a first-class data problem from Phase 3 onward, not a patch.
- **Language:** English at launch; **French is a fast-follow commitment, not an option** — both because Canada is officially bilingual and because Québec's market and Law 25 environment make French-absent products structurally weak there. Architecture must be localization-ready from day one (decision D-004). Full scoping in Phase 2.
- **Platforms:** decided in Phase 8, but the vision constrains it: mobile-first, dark mode, offline-capable core.

### 3.8 Positioning and business model hypothesis

**Positioning:** *the calm, Canadian, evidence-first parenting companion.* Three durable moats, in order of defensibility:

1. **The Canadian evidence layer** — a maintained, versioned, provincially-aware corpus of guideline content with a clinical review process. Tedious to build, tedious to copy, and the foundation of both the content and the AI.
2. **Accumulated family context** — the longer a family uses it, the better it serves them; switching cost is earned, not imposed.
3. **Trust brand** — no ads, no data sales, privacy as a headline feature (PIPEDA and Québec Law 25 compliance as floor, not ceiling).

**Business model hypothesis (to be validated in Phase 2):** freemium subscription. Free tier: core tracking, immunization schedule, essential safety content — the things it would be irresponsible to paywall. Paid tier: the AI assistant, advanced insights, partner sync, expanded education. No ads ever; the ad model is incompatible with pillar 3 and with the anxiety dynamics described in §3.1.4. Rejected alternatives: ads (trust-destroying), pure paid (kills the trust-building funnel), B2B2C via insurers/employers (viable later; distracting now, and the Canadian benefits channel differs from the US model Ovia exploits).

### 3.9 Success metrics (north star and guardrails)

- **North star:** *weekly active families still engaged at child age 6 months* — retention through the trust-critical period, counted in families (not sessions), because the product's promise spans the whole first year.
- **Supporting:** activation (family completes profile + first meaningful action within 48h); AI helpfulness (thumbs-up rate and *resolution without re-asking*); organizer reliance (share of immunization appointments tracked in-app).
- **Guardrail metrics (anti-metrics):** session length and session frequency are **explicitly not goals** — a rise in nighttime session length is investigated as a possible harm signal, not celebrated. Escalation quality (AI correctly surfacing "seek care" in evaluation suites) is a release-blocking metric, not a dashboard vanity number.

### 3.10 Medical safety posture (summary; expanded in Phases 2 and 12)

- Content and AI answers derive only from the ranked evidence hierarchy; where sources disagree, the disagreement is shown and the Canada-appropriate guidance recommended, with reasoning.
- Evidence vs. consensus vs. opinion is labelled in the content model itself (a data-schema commitment for Phase 9, not an editorial afterthought).
- A clinical reviewer (licensed Canadian professional) signs off on the medical content corpus and the AI red-flag/escalation taxonomy before any public release. This is a hiring/contracting dependency flagged now (R-2).
- Defined red-flag domains (e.g., fever in a neonate, breathing difficulty, dehydration signs, postpartum mental-health crisis) bypass generative answering and route to curated guidance plus escalation paths (811, provider, emergency). The taxonomy is built in Phase 2/12.

## 4. Decisions Made

Recorded in `DECISION_LOG.md`; summarized here.

| ID | Decision |
|----|----------|
| D-001 | Recommend a dedicated repository before implementation; interim work isolated under `parenting-os/` in this repo. |
| D-002 | Product category: educational + organizational companion, positioned outside SaMD scope; never diagnostic. Requires counsel validation (R-1). |
| D-003 | No advertising business model — permanently, as a trust/positioning commitment. |
| D-004 | Canada-first with provincial awareness and localization-readiness (French fast-follow) as day-one architectural constraints. |
| D-005 | No community/forum features in v1. |
| D-006 | North-star metric is 6-month family retention; session length/frequency are guardrailed anti-metrics. |
| D-007 | Red-flag medical domains use curated content + escalation, never open generation. |

## 5. Trade-offs

- **No community in v1** — costs us the strongest organic-growth engine in this category (Peanut, BabyCenter forums) and a real user need (loneliness). Accepted because moderation of medical misinformation at startup scale is a safety and cost liability that could destroy the trust moat before it exists. Revisit post-v1 with a moderated, expert-anchored model.
- **Canada-only** — shrinks the addressable market versus a US launch by an order of magnitude. Accepted because Canada-specificity *is* the differentiation; a diluted "North America" product loses to incumbents on their home field.
- **Curated red-flag routing over full generative freedom** — makes the AI feel more constrained on exactly the questions where parents are most desperate for conversation. Accepted: safety and liability dominate; the escalation content must therefore be excellent, not boilerplate.
- **Freemium with a generous safety-content free tier** — weakens conversion pressure. Accepted: paywalling safety information is both ethically wrong and brand-destroying.
- **English-first launch** — creates a window of weakness in Québec and tension with the bilingual positioning. Accepted only with a committed French fast-follow and localization-ready architecture; a simultaneous bilingual launch doubles the clinical-review surface before product-market fit.

## 6. Risks

| ID | Risk | Severity | Mitigation path |
|----|------|----------|-----------------|
| R-1 | Regulatory: the AI assistant drifts into SaMD territory (Health Canada) despite educational positioning | High | Counsel review before Phase 8 sign-off; feature-level regulatory review gate in the PRD; escalation-not-diagnosis design enforced in Phase 12 |
| R-2 | No clinical reviewer secured → medical corpus and red-flag taxonomy unbuildable | High | Treat as a Phase 2 staffing dependency with a named owner; do not begin content production without it |
| R-3 | AI produces a harmful answer despite scaffolding | High | Red-flag routing (D-007), release-blocking safety evals, provenance-constrained retrieval — all specified in Phase 12; incident-response plan in Phase 13 |
| R-4 | Privacy breach of child/family data — reputationally fatal given the positioning | High | Data minimization from Phase 9, PIPEDA + Québec Law 25 compliance as floor, security architecture Phase 13 |
| R-5 | Retention cliff: product value ends at 12 months by design, capping LTV | Medium | Acknowledged; expansion beyond year one is the post-v1 roadmap, not scope creep now |
| R-6 | Provincial data (immunization schedules, services) goes stale | Medium | Corpus versioning + review cadence designed into the content system (Phases 9/18) |
| R-7 | Incumbent (or a general AI vendor) ships "good-enough" Canadian mode | Medium | Speed on moat #1 (evidence layer) and #2 (context accumulation); these compound, feature checklists don't |

## 7. Open Questions

Carried into Phase 2; each needs an answer or an owner before the PRD freezes.

1. **OQ-1:** Simultaneous EN/FR launch vs. fast-follow — what does the Québec go-to-market and Law 25 analysis actually say? (Current recommendation: fast-follow; see §3.7.)
2. **OQ-2:** Pricing: what will Canadian first-time parents pay, and is the payer sometimes a gift-giver (grandparents) — does gifting change the model?
3. **OQ-3:** Where exactly is the free/paid line for AI assistance, given the ethical floor of §3.8?
4. **OQ-4:** Pregnancy-loss and NICU journeys: how does the product behave respectfully when the happy path breaks? (This is a Phase 2/5 requirement, not an edge case to defer — getting it wrong is both a human failure and a brand catastrophe.)
5. **OQ-5:** Which provinces at launch — all ten plus territories with variable data quality, or a verified subset done properly?
6. **OQ-6:** Partner/caregiver model: two accounts with full parity, or a primary/secondary structure? (Affects Phase 9 heavily.)

## 8. Recommendations

1. **Approve this vision with explicit sign-off on D-001 through D-007** — later phases will treat them as fixed unless formally revised.
2. **Start the clinical-reviewer search now (R-2)** — it has the longest lead time of anything in Phases 2–4 and blocks content and AI-safety work.
3. **Commission the counsel review of the SaMD boundary (R-1) in parallel with Phase 2**, not after architecture.
4. **In Phase 2, run primary research with 8–12 Canadian first-time parents** before freezing requirements — A-2 and A-4 are load-bearing assumptions currently supported only by market inference.

## 9. Self-Critique (applied before finalizing)

Weaknesses identified and how this version addresses them: an earlier draft asserted unverified market statistics (removed; flagged as A-1 verification item); underplayed Québec/French (elevated to a scope commitment and OQ-1); treated pregnancy loss as an edge case (elevated to OQ-4); had session-engagement metrics that contradicted the calm-by-design pillar (replaced with anti-metrics, D-006); and did not name the clinical-reviewer dependency (now R-2). Remaining known weaknesses: the competitive landscape is qualitative pending Phase 2 teardown; the business model is a hypothesis with no pricing evidence; SaMD positioning rests on an unvalidated legal assumption.

## 10. Next Phase

**Phase 2 — Product Requirements Document.** Inputs from this phase: the five pillars (§3.5), scope boundaries (§3.7), decisions D-001–D-007, risks R-1/R-2 as blocking dependencies, and open questions OQ-1–OQ-6 as items the PRD must resolve or explicitly defer with an owner. Phase 2 will not begin until Phase 1 is approved.

## 11. Changelog

| Version | Date | Change |
|---------|------|--------|
| 1.0.0 | 2026-07-10 | Initial product vision delivered for approval |
