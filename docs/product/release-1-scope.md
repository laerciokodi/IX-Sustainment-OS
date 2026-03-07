# IX Sustainment OS — Release 1 Scope

## Purpose

This document defines the **first credible release scope** for IX Sustainment OS.

It exists to answer the most important product questions before implementation expands too far:

- what Release 1 must include
- what Release 1 must not include
- what the first buyer should be able to understand immediately
- what counts as “serious enough to pilot”
- what acceptance criteria define success

This is not a marketing page.  
This is the **product scope lock** for the initial repository release.

---

## Release 1 product thesis

Release 1 should prove one narrow, defensible claim:

**IX Sustainment OS can help a sustainment organization move a case from intake to defensible next action by combining triage, blocker visibility, entitlement-aware procedure access, parts constraint visibility, human-governed recommendations, and durable evidence.**

That is the wedge.

Release 1 does **not** need to solve all sustainment, logistics, or maintenance problems.  
It needs to make one serious wedge undeniably clear.

---

## Release 1 target buyer signal

A serious buyer reviewing Release 1 should be able to say:

- this is solving a real workflow problem
- this understands sustainment friction, not just generic enterprise software
- this respects role boundaries and controlled environments
- this is disciplined about AI recommendations
- this could be piloted without pretending to replace systems of record
- this looks like a product foundation, not a vague concept repo

---

## Release 1 core modules

Release 1 consists of **six product modules**.

### 1. Case Intake
Structured capture of sustainment issues with asset, severity, mission effect, source, and supporting evidence.

### 2. Triage Board
Operational queue for case states, severity, blockers, aging, and next-step posture.

### 3. Technical Data Gateway
Procedure/reference association with entitlement-aware access state and revision metadata.

### 4. Parts Bottleneck Board
Case-linked material constraints with readiness consequence visibility.

### 5. Recommendation Review Layer
Assistive recommendations with rationale, provenance, confidence/uncertainty markers, and human review actions.

### 6. Audit and Evidence Timeline
Durable, inspectable history of actions, approvals, overrides, and state transitions.

These six modules are enough to make the first wedge real.

---

## Release 1 user roles in scope

Release 1 must support the following roles in a clear, intentional way.

### Maintainer / technician
Needs:
- fast case review
- clear blockers
- applicable next step
- procedure visibility status
- evidence trail clarity

### Production controller / planner
Needs:
- triage queue visibility
- aging and blocker concentration
- state transitions
- work prioritization cues

### Supply / logistics analyst
Needs:
- part-constraint visibility
- repeated shortage signals
- readiness impact context
- affected-case grouping

### Sustainment engineer / analyst
Needs:
- recurring pattern visibility
- similar case context
- technical-reference relevance
- evidence completeness

### Lead / approver
Needs:
- approval inbox
- override visibility
- accountability trail
- queue risk awareness

### Security / policy reviewer
Needs:
- access-boundary clarity
- recommendation boundary clarity
- event evidence
- policy enforcement visibility

Release 1 does not need deep customization for every persona, but the interface must show that these roles were actually considered.

---

## Release 1 operational story

Release 1 must support this basic story end to end:

1. a new case is created
2. the case enters triage
3. blockers are identified
4. technical-data access is checked
5. parts constraints are checked
6. a recommendation may be generated
7. a human reviews the recommendation
8. an approval may be requested
9. the case becomes actionable or remains blocked
10. evidence of what happened remains reviewable

If Release 1 cannot tell that story cleanly, it is not done.

---

## Release 1 must-have capabilities

### A. Structured case lifecycle
The system must have:
- unique case IDs
- controlled state model
- explicit transitions
- timestamps
- accountable actor identity on meaningful actions

### B. First-class blocker model
The system must support:
- blocker categories
- primary blocker designation
- multiple blockers per case
- visible blocker state in queue views

### C. Entitlement-aware procedure handling
The system must support:
- procedure references
- revision metadata
- applicability metadata
- entitlement-check outcomes
- visible distinction between missing vs restricted data

### D. Parts constraint representation
The system must support:
- one or more part constraints per case
- availability state
- readiness consequence note
- delay or unknown status
- visible queue impact

### E. Human-governed recommendations
The system must support:
- recommendation objects
- recommendation status
- rationale summary
- provenance fields
- review actions
- explicit approval requirement flags where needed

### F. Approval model
The system must support:
- approval requests
- approval statuses
- approver roles
- attributable decisions
- reason capture

### G. Evidence and audit trail
The system must support:
- event IDs
- actor identity
- object references
- action names
- timestamps
- policy context where applicable
- before/after state summaries where relevant

### H. Operator-grade UI structure
The system must support:
- queue or board view
- case detail view
- approval view
- recommendation review section
- event timeline view

### I. CUI-conscious design posture
The system must show:
- role boundaries
- safe defaults
- non-public operational positioning
- controlled-environment awareness
- no fake compliance claims

---

## Release 1 non-goals

This section matters because scope drift destroys credibility.

Release 1 is **not** trying to be:

- a full ERP replacement
- a full maintenance system of record
- a full supply-chain planning suite
- a CMMS for every possible organization
- a mission-planning platform
- a targeting product
- a fielded weapon-adjacent system
- a predictive-maintenance science project with fake certainty
- a universal AI copilot for every workflow
- a digital twin platform
- a procurement suite
- a document-management platform of record

Release 1 is a **sustainment operating layer**, not a total-enterprise replacement.

---

## Release 1 design principles

### 1. Seriousness over breadth
A smaller credible product is better than a giant vague platform claim.

### 2. Workflow over dashboard theater
Every screen should help an operator or reviewer do real work.

### 3. Evidence over AI theater
The product should look trustworthy because it preserves accountable history, not because it sounds futuristic.

### 4. Boundaries over feature sprawl
The repo should visibly respect policy, role, and operating boundaries.

### 5. Controlled clarity
State, blockers, approvals, and recommendation status should be obvious under time pressure.

---

## Release 1 information architecture

The first release UI should organize around five major navigation areas.

### 1. Triage Board
Primary operational queue.

Contains:
- all open cases
- severity markers
- state markers
- blocker visibility
- aging indicators
- approval flags
- recommendation flags

### 2. Case Detail
Detailed view of one case.

Contains:
- case summary
- asset context
- mission effect
- blockers
- procedure status
- parts constraints
- recommendation section
- approval section
- evidence timeline

### 3. Approvals
List and detail view for pending and completed approval items.

Contains:
- request summary
- requester
- required role
- due time if applicable
- related case
- decision controls
- decision history

### 4. Bottlenecks
Cross-case view for blocker concentration.

Contains:
- blocker counts
- parts-driven bottlenecks
- approval backlog
- aging problem clusters
- repeated constrained assets or categories

### 5. Evidence
Event and audit visibility.

Contains:
- event timeline
- filter by actor/object/action
- recommendation review chain
- state transition trail
- approval trail

---

## Release 1 data objects in scope

Release 1 should include these core objects.

### Asset
Minimum fields:
- asset_id
- asset_type
- tail_or_serial
- unit_or_location
- status
- mission_relevance

### Case
Minimum fields:
- case_id
- title
- description
- severity
- priority
- state
- asset_id
- mission_effect
- created_at
- created_by
- primary_blocker
- blocker_list

### FaultEvent
Minimum fields:
- fault_event_id
- case_id
- type
- source
- observed_at
- notes

### ProcedureRef
Minimum fields:
- procedure_ref_id
- title
- reference_code
- revision
- applicability
- access_state
- restricted_reason

### PartConstraint
Minimum fields:
- part_constraint_id
- case_id
- part_number
- nomenclature
- availability_state
- eta_text
- readiness_impact
- alternate_path

### Recommendation
Minimum fields:
- recommendation_id
- case_id
- type
- summary
- rationale
- confidence_label
- approval_required
- status
- generated_at

### ApprovalDecision
Minimum fields:
- approval_id
- related_object_type
- related_object_id
- requested_action
- requester
- approver
- disposition
- reason
- decided_at

### EvidenceEvent
Minimum fields:
- event_id
- object_type
- object_id
- action
- actor
- occurred_at
- summary
- policy_context

---

## Release 1 API intent

Release 1 does not need a giant API surface.

It needs a **clean, believable API** for the core story.

The first API layer should cover:
- case creation
- case listing
- case retrieval
- state transition
- blocker updates
- procedure association
- part-constraint updates
- recommendation review
- approval decisions
- evidence retrieval

That is enough to prove product seriousness.

---

## Release 1 recommendation boundary

Recommendations are useful only if their limits are obvious.

Every recommendation shown in Release 1 should visibly preserve:
- type
- summary
- rationale
- confidence/uncertainty indicator
- generation time
- status
- whether approval is required
- user disposition history if reviewed

Release 1 must make it visually obvious that:
- a recommendation is **not** a confirmed fact
- a recommendation is **not** an approval
- a recommendation is **not** an irreversible action

---

## Release 1 approval boundary

Approvals are where accountability becomes visible.

Release 1 approval behavior must show:
- who requested the approval
- what action is being requested
- why it needs review
- who can decide
- what the decision was
- when it was decided
- what evidence was attached

Anything less starts to look fake.

---

## Release 1 board metrics

The triage and bottleneck views should at minimum support visibility into:

- total open cases
- cases by state
- cases by severity
- cases by primary blocker
- aging counts
- approval backlog count
- actionable-now count
- parts-blocked count
- data-blocked count
- repeated blocker clusters

These do not need advanced analytics in Release 1.  
They need operational usefulness.

---

## Release 1 acceptance criteria

Release 1 should be considered complete only when the repo demonstrates all of the following.

### Product clarity
- the repo clearly states what problem it solves
- the first buyer can understand the wedge quickly
- the non-weapon boundary is explicit

### Workflow credibility
- the intake-to-actionable story is documented and coherent
- case states are controlled
- blockers are first-class
- approvals are clear
- recommendation review is controlled

### Architecture credibility
- core domain objects exist
- trust boundaries are described
- role boundaries are visible
- API surface exists for the core story
- event/audit model exists

### UX credibility
- board view is represented
- case detail is represented
- approval flow is represented
- evidence view is represented
- recommendation UI is represented as assistive, not sovereign

### Controlled-environment credibility
- CUI-conscious positioning is present
- policy boundaries are present
- auditability is visible
- no fake compliance claims are made

### Repo credibility
- docs are coherent
- schemas exist
- API exists
- backend skeleton exists
- frontend skeleton exists
- demo fixtures exist
- validation or CI structure exists

If any of those are missing, Release 1 is not complete.

---

## Release 1 demo expectation

The first public demo story should be simple:

> “A new sustainment case arrives. The team triages it, sees blockers, checks procedure access, sees parts constraints, reviews a recommendation, approves or overrides it, and reaches a defensible next action with a durable evidence trail.”

That single story should be visible across docs, schema, backend, frontend, and demo fixtures.

---

## Release 1 buyer-facing language guardrails

The product should not be described with phrases like:
- “fully autonomous sustainment AI”
- “replaces maintainers”
- “guarantees readiness”
- “automatically compliant”
- “decision-making AI”
- “complete defense operating system”

It should be described with language like:
- sustainment operating layer
- maintenance triage
- bottleneck visibility
- entitlement-aware procedure access
- auditable recommendation review
- controlled-environment workflow software

That language is stronger because it is believable.

---

## Release 1 biggest risks

### Risk 1 — trying to solve too much
The product becomes broad and soft instead of narrow and credible.

### Risk 2 — recommendation overreach
The AI layer feels like the real decision-maker.

### Risk 3 — shallow UI seriousness
The product looks like a startup dashboard instead of operator-grade workflow software.

### Risk 4 — fake compliance tone
The repo implies approvals or certifications it does not have.

### Risk 5 — weak evidence model
The system claims accountability without preserving enough event detail.

Each of these should be treated as a release-blocking concern.

---

## Definition of Release 1 success

Release 1 is successful if a serious reviewer can say:

- I understand the first buyer story
- I understand the system boundary
- I understand how the workflow works
- I understand how the AI is constrained
- I understand how approvals and evidence work
- I can picture this being piloted

That is the standard.

---

## Status

This file locks the Release 1 scope.

Follow-on commits should now translate this scope into:
- schemas
- API routes
- backend services
- frontend views
- demo fixtures
- CI and validation structure

