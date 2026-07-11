# Phase 2 — Product Requirements Document

**Version:** 1.0.0
**Status:** Delivered — awaiting approval
**Owner:** CPO
**Depends on:** Phase 1 (approved)
**Feeds into:** Phase 3 (Information architecture), Phase 4 (Feature inventory)

---

## 1. Objective

Translate the approved vision into testable requirements: what the product must do (functional), how well it must do it (non-functional), what ships in v1.0 versus later, and the resolution or ownership of every open question carried from Phase 1. An engineering and design team should be able to start Phases 3–7 from this document without re-asking product questions.

## 2. Assumptions

- Phase 1 assumptions A-1–A-6 stand, with their verification obligations unchanged.
- **A-7:** Primary user research (8–12 Canadian first-time parents; validates A-2/A-4 and the pricing question) is an external activity owned by the Founder. This PRD proceeds with those assumptions explicitly flagged; requirements that depend on them are marked `[research-sensitive]` and may be re-prioritized after research without counting as a silent change.
- **A-8:** The Public Health Agency of Canada and provincial health authorities publish immunization schedules for all 13 provinces/territories in a form we can encode and keep current with a review cadence. Spot-verification is part of content-ops setup (Phase 18).
- **A-9:** Clinical reviewer (R-2) is engaged before content production begins. Requirements below that need clinical sign-off are marked `[clinical]`.

## 3. Deliverable — Product Requirements

### 3.0 Conventions

- **IDs:** `FR-<area>.<n>` functional, `NFR-<n>` non-functional.
- **Priority:** **P0** = v1.0 cannot ship without it; **P1** = v1.0 target, cuttable under schedule pressure with CPO sign-off; **P2** = fast-follow (v1.x); **P3** = post-v1 roadmap, recorded to constrain architecture only.
- Every P0/P1 requirement lists acceptance criteria (AC). Criteria are testable; vague criteria are treated as defects in this document.

### 3.1 Personas (operative summary)

- **Riley** — primary caregiver, first pregnancy → first year, exhausted, one-handed phone use, often at night. Design target for every P0 flow.
- **Sam** — co-caregiver/partner. Needs full shared context without duplicate data entry.
- **The broken path** — Riley when the happy path breaks: pregnancy loss, premature birth, NICU stay. Not a persona edge case; a P0 behavioral requirement (FR-3.4, D-011).

### 3.2 Functional requirements

#### F1 — Onboarding & family profile

- **FR-1.1 (P0)** A new user creates a family profile with: stage (pregnant — due date | baby — birth date), province/territory, preferred units (metric default), display name. Nothing else is mandatory.
  *AC:* completable in under 2 minutes; no medical history questions at onboarding; province drives all downstream provincial content.
- **FR-1.2 (P0)** Onboarding ends on an immediately useful home screen (stage-appropriate timeline + one suggested action), not a feature tour.
  *AC:* zero-state home renders meaningful content from profile data alone.
- **FR-1.3 (P0)** Consent flow: plain-language explanation of what data is stored, why, and the product's non-diagnostic boundary; granular opt-ins (analytics, notifications) unbundled from account creation.
  *AC:* user can decline analytics and still use the full product; consent text reading level ≤ grade 8.
- **FR-1.4 (P1)** Invite co-caregiver by link; invited account gets full parity (see D-009).
  *AC:* second caregiver sees identical data within seconds of any log; either can revoke the link.

#### F2 — Pregnancy journey

- **FR-2.1 (P0)** Week-by-week stage content: fetal development, maternal changes, what to expect at upcoming appointments, stage-relevant education. All content provenance-labelled per the evidence hierarchy. `[clinical]`
  *AC:* every content item displays source + evidence/consensus/opinion label; no item without a source ships.
- **FR-2.2 (P0)** Appointment tracker: prenatal visit schedule template (Canadian norms), user-editable, with prep checklists ("questions to ask") per visit type. `[clinical]`
  *AC:* user can add/edit/complete appointments; reminders honor notification rules (F8).
- **FR-2.3 (P1)** Symptom info lookup (educational): common pregnancy symptoms with "normal vs. call your provider vs. seek urgent care" framing. Red-flag symptoms route per FR-7.6. `[clinical]`
- **FR-2.4 (P2)** Birth-preferences worksheet and hospital-bag checklist (province/hospital-agnostic).

#### F3 — Baby profile & the birth transition

- **FR-3.1 (P0)** Transition flow from pregnancy to baby: record birth date, name (optional), and carry all family context forward; pregnancy content archives gracefully rather than vanishing.
  *AC:* transition completable one-handed in under 1 minute; no data loss; timeline re-anchors to baby's age.
- **FR-3.2 (P0)** Baby profile: birth date, sex (optional, used only where guidance differs), gestational age at birth (drives corrected-age display for preemies), feeding method (editable anytime).
  *AC:* corrected age shown alongside chronological age when gestational age < 37 weeks. `[clinical]`
- **FR-3.3 (P1)** Multiple children per family supported in the data model; v1 UX optimized for one child, with a functional (not polished) second-child path for twins. (Per A-6.)
- **FR-3.4 (P0)** **Compassionate mode** (D-011): a user can declare a pregnancy loss or bereavement at any point. The product immediately stops all stage-based content and reminders, offers Canadian support resources, and offers account pause/deletion — in that order, with no upsell surfaces anywhere in the flow. `[clinical]`
  *AC:* reachable from settings and from any pregnancy screen in ≤ 2 taps; zero stage-content notifications delivered after activation (release-blocking test); resource list clinically reviewed.
- **FR-3.5 (P1)** NICU path: user can flag a NICU stay; stage content shifts to NICU-appropriate guidance and corrected-age framing; milestone pressure removed from copy. `[clinical]`

#### F4 — Tracking (feeding, sleep, diapers, growth)

- **FR-4.1 (P0)** Quick log for feeds (breast/bottle/solids), sleep (start/stop + retroactive entry), diapers, and pumping. Optimized for one-handed, eyes-half-open use.
  *AC:* any log entry completable in ≤ 3 taps from home; retroactive edits ≤ 2 additional taps; works offline with sync on reconnect (NFR-7).
- **FR-4.2 (P0)** Growth records: weight/length/head circumference entries plotted against WHO growth standards (the Canadian standard for 0–24 months). `[clinical]`
  *AC:* chart displays percentile bands with a plain-language explanation that percentile position is not a grade; no alarming color semantics for low/high percentiles.
- **FR-4.3 (P1)** Pattern summaries: daily/weekly views of sleep and feeding ("what happened"), descriptive only — trends, not judgments.
  *AC:* no comparative or normative copy ("most babies…") in summaries; that framing lives only in provenance-labelled education content.
- **FR-4.4 (P2)** Insight nudges connecting patterns to stage-appropriate education (e.g., a 4-month sleep-pattern change links to the relevant CPS-derived article). Never framed as diagnosis. `[clinical]`
- **FR-4.5 (P0)** All tracking is optional and guilt-free by design: gaps in logging never produce warnings, streaks, or "you missed" copy anywhere in the product.
  *AC:* copy audit as a release gate; no streak mechanics exist in the codebase.

#### F5 — Health organizer

- **FR-5.1 (P0)** Provincially-aware immunization schedule for all 13 provinces/territories (D-010), generated from baby's birth date + province, with the Canadian Immunization Guide as the source of truth and provincial schedules as the operative layer. `[clinical]`
  *AC:* schedule matches the encoded provincial source for every province (data-driven test suite); each entry links to plain-language vaccine education; user can mark doses complete and record date/location.
- **FR-5.2 (P0)** Appointment & checkup tracker for well-baby visits per Canadian schedule norms (e.g., Rourke-based visit cadence), user-editable. `[clinical]`
- **FR-5.3 (P1)** Health records vault: user-entered notes, provider contact info, and photo attachments (e.g., the paper vaccine card). Attachments are encrypted at rest and excluded from analytics (NFR-10).
- **FR-5.4 (P1)** "Prepare for this visit" view: age-appropriate questions to ask, what will happen, what to bring. `[clinical]`
- **FR-5.5 (P2)** Export health summary (PDF) for sharing with a provider.

#### F6 — Education library

- **FR-6.1 (P0)** Stage-gated content library organized by child age/pregnancy week and by topic (sleep, feeding, development, safety, parental well-being). Every item carries: source(s), evidence label, last-reviewed date, and reviewer. `[clinical]`
  *AC:* content model enforces these fields (unpublishable without them); stale content (past review-by date) is flagged internally and de-prioritized in surfacing.
- **FR-6.2 (P0)** Divergence handling: where ranked sources disagree (e.g., CPS vs. AAP), content shows both positions, explains the disagreement, and recommends the Canada-appropriate approach with reasoning. `[clinical]`
  *AC:* divergence articles use a fixed template (positions → why they differ → recommendation → what this means for you).
- **FR-6.3 (P0)** Safety-critical content (safe sleep, CPR/choking reference, fever guidance by age, poison control, postpartum mental-health resources including crisis lines) is free-tier, offline-available, and reachable in ≤ 2 taps from home. `[clinical]` (Per D-003 ethics floor and D-013.)
- **FR-6.4 (P1)** Search across the library with typo tolerance; results respect stage relevance.
- **FR-6.5 (P2)** Parental well-being track: postpartum recovery, mental health (including partner), relationship strain — same evidence standards as child content. `[clinical]`

#### F7 — AI assistant

- **FR-7.1 (P0)** Conversational assistant answering parenting questions grounded exclusively in the curated corpus (retrieval-constrained), with child/family context (age, corrected age, province, feeding method, recent logs where relevant) applied automatically.
  *AC:* answers cite their corpus sources inline; a question outside corpus coverage yields an honest "I don't have reviewed guidance on this" plus escalation options — never an uncited generated answer.
- **FR-7.2 (P0)** Context memory: the assistant remembers prior conversations and the child's profile; users can view and delete this memory.
  *AC:* memory contents inspectable in settings; deletion is immediate and propagates to backups per NFR-11.
- **FR-7.3 (P0)** Reasoning transparency: answers explain *why* (mechanism or guideline rationale) and state confidence qualitatively when evidence is weak or mixed.
  *AC:* eval suite scores presence of reasoning and calibrated uncertainty; no false certainty on mixed-evidence topics.
- **FR-7.4 (P0)** Boundary behavior: never diagnoses, never prescribes, never estimates the probability that *this* child has a condition. Warning signs and "when to seek care" are always included where relevant.
  *AC:* release-blocking adversarial eval suite (Phase 16) covering diagnosis-seeking, dosage-seeking, and reassurance-seeking prompts.
- **FR-7.5 (P0)** Clarifying questions only when the answer materially depends on missing information; at most one round before answering with stated assumptions.
- **FR-7.6 (P0)** **Red-flag routing** (D-007): questions touching the red-flag taxonomy (§3.4) bypass generation and present the clinically reviewed guidance card for that domain, with escalation actions (call 911 where indicated / 811 or provincial equivalent / contact provider) as tap-to-act buttons. `[clinical]`
  *AC:* routing recall on the red-flag eval set is a release-blocking metric with a threshold set with the clinical reviewer; escalation numbers are province-correct.
- **FR-7.7 (P1)** Assistant is reachable from any screen; supports voice input (hands full).
- **FR-7.8 (P2)** Proactive assistant surfaces ("you asked about X last week; the guidance for her age has changed") — strictly opt-in.

#### F8 — Reminders & notifications

- **FR-8.1 (P0)** Notification categories individually controllable: appointments/immunizations, stage content, tracking-related. Defaults are conservative: only appointments/immunizations on by default.
  *AC:* category toggles independent; default state verified in tests.
- **FR-8.2 (P0)** Quiet hours on by default (device-night respected); nothing non-urgent notifies at night. There is no notification class we treat as "urgent" in v1 — we are not an alerting product.
  *AC:* no notification delivered in quiet hours in test harness; copy contains no urgency theater ("Don't miss…!").
- **FR-8.3 (P1)** Notification batching: at most one daily digest for content-class notifications.

#### F9 — Settings, privacy, data control

- **FR-9.1 (P0)** Full data export (machine-readable JSON + human-readable summary) self-serve.
- **FR-9.2 (P0)** Account and data deletion self-serve, completing within the SLA defined in Phase 13, including AI memory and attachments.
- **FR-9.3 (P0)** Privacy dashboard: what is stored, what the AI can see, what analytics (if opted in) collect — in plain language.
- **FR-9.4 (P1)** Per-feature data controls (e.g., exclude tracking logs from AI context).

#### F10 — Monetization surface (per D-003, D-013)

- **FR-10.1 (P0)** Free tier: all tracking (F4), immunization schedule and appointments (F5.1/5.2), safety-critical content (FR-6.3), compassionate mode, data export/deletion. `[research-sensitive]`
- **FR-10.2 (P0)** Paid tier: AI assistant beyond a limited free allowance, pattern summaries/insights (FR-4.3/4.4), partner sync (FR-1.4), full education library beyond safety + current stage. Single subscription per family, not per account. `[research-sensitive]`
  *AC:* paywall never interposes on safety content or escalation paths (release-blocking test); free allowance of AI questions lets a user experience real value before paying.
- **FR-10.3 (P1)** Gift subscription purchase flow (grandparents; OQ-2 hypothesis). `[research-sensitive]`

### 3.3 Non-functional requirements

- **NFR-1 Performance (P0):** cold start to interactive home < 2s on a mid-range device; quick-log interaction latency < 100ms perceived; AI first token < 3s p90.
- **NFR-2 Accessibility (P0, D-012):** WCAG 2.2 AA; full screen-reader support on all P0 flows; minimum touch target 44pt; dynamic type respected; no information conveyed by color alone.
- **NFR-3 One-handed reach (P0):** all P0 flow actions operable within thumb reach on large phones; no P0 flow requires precise two-handed gestures.
- **NFR-4 Dark mode (P0):** first-class, not inverted; night use assumes true dark backgrounds and reduced luminance; the app defaults to system theme.
- **NFR-5 Reading level (P0):** user-facing copy at or below grade 8 reading level except where clinical precision requires a term (then defined inline).
- **NFR-6 Reliability (P0):** no data loss on crash mid-log; local-first writes with durable queue; sync conflicts resolve without user intervention for tracking data (last-writer-wins is *not* acceptable for logs from two caregivers — merge semantics defined in Phase 9).
- **NFR-7 Offline (P0):** tracking, safety-critical content (FR-6.3), immunization schedule, and current-stage content function fully offline; AI assistant degrades gracefully (queued question or clear offline notice — decided in Phase 12).
- **NFR-8 Privacy & compliance (P0):** PIPEDA and Québec Law 25 compliance as floor; data residency in Canada for personal data (constrains Phase 8 provider choice); privacy-by-design review for every new feature.
- **NFR-9 Security (P0):** encryption in transit and at rest; attachments and AI memory under application-layer encryption; detailed architecture in Phase 13.
- **NFR-10 Analytics restraint (P0, D-006):** analytics opt-in, containing no content of AI conversations and no health-record values; event schema reviewed against the anti-metric policy in Phase 14.
- **NFR-11 Deletion propagation (P0):** deletion reaches replicas/backups within the retention window defined in Phase 13; AI memory deletion immediate at serving layer.
- **NFR-12 Localization-readiness (P0, D-004):** no hard-coded strings; ICU message format; layouts tolerate +40% text expansion; dates/units locale-aware. French content pipeline is P2 (fast-follow) but the scaffolding is P0.
- **NFR-13 Content operations (P0):** every corpus item versioned with review dates and reviewer identity; a schedule/guideline change publishable to production within 72 hours of clinical sign-off, without an app release.

### 3.4 Red-flag taxonomy v0 `[clinical — draft for reviewer, not final]`

Domains that bypass generative answering (FR-7.6). This list is a starting proposal; the clinical reviewer owns the final taxonomy and thresholds.

1. Fever in an infant < 3 months (any) / high or persistent fever thresholds by age
2. Breathing difficulty, apnea, cyanosis
3. Dehydration signs / persistent vomiting / bilious vomiting
4. Seizure or suspected seizure
5. Unresponsiveness, abnormal drowsiness, inconsolable high-pitched crying
6. Suspected allergic reaction / anaphylaxis
7. Head injury / falls
8. Jaundice beyond expected course / signs in first days
9. Rash with fever / petechiae
10. Feeding refusal in a neonate
11. Pregnancy: bleeding, severe abdominal pain, reduced fetal movement, signs of preeclampsia, preterm labour signs
12. Postpartum: heavy bleeding, chest pain/shortness of breath, severe headache/vision changes, fever
13. Parental mental-health crisis: self-harm or infant-harm ideation → crisis resources (province-correct) presented first, before any other content
14. Poisoning/ingestion → poison control routing
15. Choking (reference content must be reachable offline, FR-6.3)

### 3.5 Release scoping

- **v1.0 (MVP):** all P0 above. The MVP is *pregnancy + baby from day one* — launching pregnancy-only or baby-only was considered and rejected (see §5).
- **v1.x fast-follow:** P1 backlog, French localization (content pipeline + UI), NICU path polish, voice input.
- **Post-v1 (architectural constraints only):** second-year expansion, expert-anchored community (D-005 revisit), B2B2C channels, additional locales.

### 3.6 Resolution of Phase 1 open questions

| OQ | Resolution |
|----|-----------|
| OQ-1 (EN/FR) | **Resolved (D-004 stands):** English launch, French fast-follow in v1.x; localization scaffolding P0 (NFR-12). Québec marketing deferred until French ships. |
| OQ-2 (pricing/gifting) | **Assigned:** Founder owns pricing research (A-7). Gifting enters as FR-10.3 (P1) hypothesis. Price points intentionally absent from this PRD. |
| OQ-3 (free/paid line) | **Resolved (D-013):** line drawn at FR-10.1/10.2 — safety, tracking, and immunization organization free; AI depth, insights, sync, and full library paid. `[research-sensitive]` |
| OQ-4 (loss/NICU) | **Resolved (D-011):** compassionate mode is P0 (FR-3.4); NICU path P1 (FR-3.5). |
| OQ-5 (provinces) | **Resolved (D-010):** all 13 provinces/territories at launch for immunization schedules, single-source-of-truth data model with review cadence (NFR-13, A-8). |
| OQ-6 (caregiver model) | **Resolved (D-009):** two accounts with full parity per family; no primary/secondary hierarchy. Simpler mental model, simpler permissions, matches how couples actually share care. |

## 4. Decisions Made

Recorded in `DECISION_LOG.md` (D-008–D-013): priority scheme (D-008), caregiver parity (D-009), all-provinces launch (D-010), compassionate mode as P0 (D-011), WCAG 2.2 AA (D-012), free/paid line (D-013).

## 5. Trade-offs

- **Full journey (pregnancy + first year) in MVP** rather than a narrower launch. Costs: larger content surface before revenue. Rejected alternatives: pregnancy-only (loses the retention engine and the whole point of continuity at birth — the moment competitors drop users) and baby-only (forfeits the acquisition moment; parents choose their tools during pregnancy). The continuity *is* the product.
- **All 13 provinces at launch (D-010)** over a verified-subset launch. Costs: more encoding and verification up front. A subset launch would make province a marketing asterisk ("not available in your region") on a product whose entire differentiation is Canadian specificity — unacceptable. Mitigation: schedules come from a single encoded data model with automated cross-checks against sources, not 13 hand-maintained documents.
- **Caregiver full parity (D-009)** over primary/secondary roles. Costs: harder conflict-resolution semantics for concurrent edits (pushed to Phase 9 as merge requirements, NFR-6). Rejected: role hierarchies encode assumptions about families we shouldn't make and generate support burden ("why can't my partner…").
- **Retrieval-only AI answering (FR-7.1)** over letting the model use general knowledge with guardrails. Costs: more "I don't have reviewed guidance" moments early, and heavy dependence on corpus breadth. Accepted: an honest gap beats an uncited answer in this domain; corpus coverage becomes a measurable growth axis instead of an invisible risk.
- **Conservative notification defaults (FR-8.1/8.2)** over engagement-friendly defaults. Costs: lower short-term retention metrics. Consistent with D-006; the retention we want is trust-based.

## 6. Risks

R-1–R-7 remain open and unchanged. New:

| ID | Risk | Severity | Mitigation |
|----|------|----------|-----------|
| R-8 | Corpus breadth insufficient at launch → AI declines too often, feels useless | High | Corpus coverage driven by a ranked list of the most common first-year questions (content plan, Phase 18); "declined question" telemetry (opt-in, topic-level only) feeds corpus expansion |
| R-9 | Provincial schedule encoding error → wrong immunization guidance | High | Single data model, per-province automated tests against encoded sources (FR-5.1 AC), clinical sign-off per province, NFR-13 review cadence |
| R-10 | Two-caregiver concurrent logging produces data conflicts/loss | Medium | Merge semantics specified in Phase 9 before any implementation; NFR-6 forbids naive last-writer-wins |
| R-11 | Free tier too generous → conversion fails; or paywall placement erodes trust | Medium | D-013 line is `[research-sensitive]`; pricing research (OQ-2) before launch; paywall-on-safety forbidden by test |
| R-12 | Reading-level and copy-tone requirements (NFR-5, FR-4.5) erode under feature pressure | Medium | Copy audit as an explicit release gate (Phase 16) |

## 7. Open Questions

1. **OQ-7:** AI offline behavior — queue the question for reconnect, or clear "assistant unavailable offline" notice? (Owner: Phase 12; leaning queue-with-notice.)
2. **OQ-8:** Free AI allowance size and reset period (FR-10.2). (Owner: Founder, with pricing research.)
3. **OQ-9:** Red-flag routing threshold tuning — how aggressive is the classifier at the boundary (over-routing annoys; under-routing is unsafe)? (Owner: clinical reviewer + AI architecture, Phase 12/16. Default posture: over-route.)
4. **OQ-10:** Data residency — strict Canada-only for all processing (including LLM inference) or Canada-only for storage with disclosed processing exceptions? Material constraint on model-provider choice. (Owner: Phase 8/13 with counsel; must be answered before Phase 8 sign-off.)

## 8. Recommendations

1. Approve this PRD with decisions D-008–D-013; Phases 3 and 4 can then run against a stable requirements base.
2. Commission the pricing/user research (A-7) now — it is the longest-running validation item and gates final free/paid calibration, not the architecture phases.
3. Engage the clinical reviewer on §3.4 immediately; the taxonomy's final form shapes AI architecture (Phase 12) and cannot be retrofitted cheaply.
4. Get the OQ-10 (data residency) answer from counsel before Phase 8 begins — it can eliminate entire hosting/model-provider options and should not be discovered mid-architecture.

## 9. Self-Critique (applied before finalizing)

Corrections made in this version: an earlier draft had last-writer-wins sync (fails the two-caregiver case — replaced with NFR-6 merge requirement); put compassionate mode at P1 (contradicted OQ-4's resolution — raised to P0); omitted parental mental health from the red-flag taxonomy (added §3.4.13, presented crisis-resources-first); allowed analytics on AI conversation content (violates the trust posture — forbidden in NFR-10); and had no requirement preventing paywalls on safety content (added as a release-blocking AC in FR-10.2). Remaining known weaknesses: acceptance criteria for content quality (FR-2.1, FR-6.x) ultimately depend on the not-yet-engaged clinical reviewer; the free/paid line is unvalidated by research; performance numbers in NFR-1 are industry-standard targets, not derived from measurement, and may be revised with justification in Phase 8.

## 10. Next Phase

**Phase 3 — Information architecture.** Inputs: the functional map (F1–F10), stage-gating model (pregnancy weeks / child age), red-flag taxonomy v0, and the ≤ 2-tap reachability constraints (FR-3.4, FR-6.3) which are IA requirements as much as content ones. Begins on approval of this PRD.

## 11. Changelog

| Version | Date | Change |
|---------|------|--------|
| 1.0.0 | 2026-07-11 | Initial PRD delivered for approval; resolves OQ-1–OQ-6; adds D-008–D-013, R-8–R-12, OQ-7–OQ-10 |
