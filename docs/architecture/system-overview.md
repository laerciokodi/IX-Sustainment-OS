# IX Sustainment OS — System Overview

## Purpose

This document defines the intended **system architecture**, **trust boundaries**, and **operational shape** of IX Sustainment OS.

It exists to answer these questions clearly:

- what the platform does
- what the major system components are
- where policy enforcement happens
- where AI is allowed to assist
- where human approval is required
- how the platform should be deployed in controlled environments
- what the platform is explicitly not allowed to become

This is an architecture-level overview, not a final deployment guide.

---

## One-line definition

**IX Sustainment OS is a CUI-conscious sustainment operating layer for maintenance triage, parts bottleneck visibility, technical-data entitlement checks, and auditable human-governed AI recommendations.**

---

## System intent

The product is intended to unify fragmented sustainment decisions across:

- maintenance discrepancy intake
- fault triage
- procedure lookup
- technical-data access boundaries
- entitlement and approval logic
- parts and supply bottlenecks
- recommendation review
- evidence and audit history

The system should help operators answer:

1. what is broken or degraded
2. how severe it is
3. what is blocking action
4. whether the required procedure or reference is available
5. whether the user is entitled to see or act on that data
6. what parts or approvals are missing
7. what the most defensible next step is
8. who approved, rejected, or overrode that step

---

## Explicit operating boundary

IX Sustainment OS is designed for **non-weapon sustainment and readiness workflows**.

It is in scope for:

- depot maintenance operations
- field-support sustainment coordination
- maintenance production control
- readiness bottleneck analysis
- parts-constrained workflow management
- technical-reference entitlement workflows
- policy-gated recommendation review
- audit and evidence generation

It is **out of scope** for:

- targeting
- strike planning
- fires control
- battle damage exploitation for lethal action
- weapon employment
- kill-chain acceleration
- autonomous engagement
- offensive cyber operations
- mission execution against a target

This boundary is intentional and should remain explicit across the repo.

---

## Primary system outcomes

The platform should create five operational outcomes.

### 1. Faster triage
Users should reach a defensible next step faster when a new case arrives.

### 2. Better blocker visibility
Teams should be able to tell whether delay is caused by:
- parts
- tooling
- procedure access
- data-rights restrictions
- approval gating
- insufficient evidence
- queue congestion

### 3. Cleaner cross-team coordination
Maintainers, planners, logisticians, engineers, and leads should be able to work from one traceable case state.

### 4. Safer use of AI assistance
Recommendations should remain bounded, reviewable, attributable, and overrideable.

### 5. Durable operational evidence
Important actions and workflow transitions should leave behind an inspectable audit trail.

---

## High-level system shape

The platform is structured in six major layers.

```text
┌──────────────────────────────────────────────────────────────┐
│  Operator Experience Layer                                  │
│  dashboards • triage board • case review • approvals        │
├──────────────────────────────────────────────────────────────┤
│  Application Services Layer                                 │
│  cases • workflow • recommendations • parts • entitlement   │
├──────────────────────────────────────────────────────────────┤
│  Policy and Trust Layer                                     │
│  access control • action gating • approval rules • audit    │
├──────────────────────────────────────────────────────────────┤
│  Integration Layer                                          │
│  maintenance feeds • tech refs • parts feeds • identity     │
├──────────────────────────────────────────────────────────────┤
│  Data and Evidence Layer                                    │
│  operational records • event history • evidence ledger      │
├──────────────────────────────────────────────────────────────┤
│  Platform Foundation                                        │
│  deployment • secrets • observability • CI/CD • hardening   │
└──────────────────────────────────────────────────────────────┘

Major subsystems
1. Case intake subsystem

Responsible for creation and normalization of a sustainment case.

Inputs may include:

manual discrepancy entry

imported fault events

maintenance findings

operator notes

supporting attachments

structured mission impact fields

Core responsibilities:

create the case record

normalize severity and type

attach relevant asset context

capture evidence references

start the workflow state machine

2. Workflow and triage subsystem

Responsible for moving a case through operational states.

Core responsibilities:

state transitions

blocker tagging

priority calculation

assignment and queueing

escalation triggers

stale-case identification

Example states:

new

triage

awaiting-data

awaiting-parts

awaiting-approval

actionable

deferred

resolved

closed

3. Technical-data gateway

Responsible for connecting procedures, manuals, references, and revision-aware technical guidance to the case.

Core responsibilities:

procedure lookup

reference association

revision tracking

entitlement checking

access-denied signaling

evidence linkage to referenced material

This subsystem is important because a workflow may be blocked even when the technical solution exists, if the needed reference cannot be accessed or used by the current role.

4. Parts and readiness bottleneck subsystem

Responsible for showing material-driven and process-driven readiness delays.

Core responsibilities:

link part shortages to active cases

show readiness impact concentration

surface repeated blockers

estimate queue consequences

identify cases blocked by non-material causes

This subsystem should help distinguish:

“we cannot fix this because the part is not available”

from

“we cannot fix this because the workflow is broken”

5. Recommendation subsystem

Responsible for assistive recommendations only.

Possible recommendation types:

likely fault family

likely next evidence to collect

suggested workflow lane

probable blocker cause

queue-priority hint

similar prior-case retrieval

procedural relevance suggestions

The recommendation subsystem must not become silent authority.

6. Approval and audit subsystem

Responsible for preserving accountability.

Core responsibilities:

capture approval requests

record decisions

log overrides

log recommendation provenance

log policy-denied actions

preserve immutable-style event records

This is where the system proves that:

the recommendation was bounded

the user retained authority

the policy boundary was enforced

the action trail is inspectable later

Trust boundary model

IX Sustainment OS should be understood through four major trust boundaries.

Boundary A — user identity boundary

The system must know:

who the user is

what role they hold

what they are allowed to view

what they are allowed to request

what they are allowed to approve

This boundary is enforced through identity, session, and access policy.

Boundary B — data entitlement boundary

The system must distinguish between:

data that exists

data that is relevant

data the current user is allowed to access

data the current workflow permits them to act upon

This is especially important for technical references, controlled documentation, and support artifacts.

Boundary C — recommendation boundary

The system must separate:

what the model suggests

what the system allows to be displayed

what requires human review

what cannot proceed without approval

No recommendation should bypass this boundary.

Boundary D — action boundary

Meaningful state-changing actions should be:

policy-checked

attributable

logged

reviewable

Examples:

changing a case priority

moving a case to actionable

approving a recommendation

overriding a prior recommendation

linking a restricted procedure

closing a case

Human-governed AI model

The AI role in IX Sustainment OS is intentionally narrow and disciplined.

AI is allowed to do

classify and summarize case context

retrieve similar cases

suggest next evidence collection steps

explain likely blockers

help draft operator-visible reasoning

prioritize attention candidates

propose procedural relevance

AI is not allowed to do

silently mutate authoritative records

silently change approval state

bypass policy

self-authorize restricted actions

erase or rewrite audit history

represent confidence as certainty

act outside the data made available to it

Required controls

Every meaningful recommendation should preserve:

recommendation ID

inputs used

time generated

model or ruleset identifier

user who reviewed it

action taken

final disposition

any override reason if rejected or modified

Deployment model

The intended deployment posture is a controlled internal web platform.

Expected deployment characteristics

private network or enclave-capable deployment

customer-controlled identity provider integration

environment-specific policy bundles

encrypted data handling

strict role-based access control

auditable API surface

container-friendly packaging

CI/CD-compatible release process

logging suitable for controlled environments

Deployment modes to support

local evaluation mode

private pilot deployment

enterprise self-hosted deployment

integrator-supported deployment

controlled government-adjacent environment deployment

The repo should be shaped so that public code review does not imply public SaaS exposure.

Core data objects

The first-release architecture centers around a small, serious domain model.

Asset

Represents the maintained item, fleet element, or platform instance.

Key concerns:

identity

type

location or unit context

operational status

mission impact relevance

Case

Represents a sustainment issue under management.

Key concerns:

severity

workflow state

blockers

assigned lane

linked evidence

linked approvals

FaultEvent

Represents an observed fault, discrepancy, or condition indicator.

Key concerns:

type

source

time

impact

recurrence

ProcedureRef

Represents a technical reference or controlled procedure.

Key concerns:

revision

applicability

entitlement requirement

access status

linked case relevance

PartConstraint

Represents a part-driven or supply-driven limitation.

Key concerns:

affected cases

availability state

readiness consequence

alternate-path possibility

Recommendation

Represents an assistive recommendation.

Key concerns:

type

rationale

supporting inputs

confidence or uncertainty

approval requirement

final disposition

ApprovalDecision

Represents human review and disposition.

Key concerns:

approver

result

reason

time

related object

EvidenceEvent

Represents an auditable operational event.

Key concerns:

actor

object

action

time

policy context

before/after state summary

Example end-to-end flow
Scenario

A new discrepancy arrives for an asset that is mission-relevant.

Flow

a user or integration creates a case

the case enters new

triage service normalizes severity and attaches asset context

recommendation service proposes likely blocker pattern

technical-data gateway checks whether the relevant procedure is accessible

parts service checks known supply constraints

workflow service moves the case to one of:

awaiting-data

awaiting-parts

awaiting-approval

actionable

if a recommendation requires review, the approval subsystem creates an approval item

a human reviews the recommendation and accepts, rejects, or overrides it

the evidence layer records the full chain of events

The result is not just a decision. The result is a defensible decision trail.

UX design implications

Because this is mission-critical software, the UX cannot be casual, decorative, or dashboard-heavy for its own sake.

The UI should favor:

high signal density

clear state transitions

visible blockers

fast scanning

strong hierarchy

explicit severity markers

reversible interactions where possible

minimal ambiguity in approvals and overrides

The operator must be able to answer at a glance:

what needs attention first

what is blocked

what can proceed

what is awaiting review

what changed recently

what evidence supports the recommendation

Security and compliance implications

This repository should be built with controlled-environment expectations in mind.

That means the design should support:

least-privilege access

session accountability

policy-aware object access

strong auditability

separation of assistive output from authoritative action

environment-aware configuration

clear administrative boundaries

The repo should avoid fake claims such as:

“NIST compliant by default”

“CMMC certified”

“approved for government deployment”

The correct posture is:
designed for controlled environments, not self-certified by marketing language.

Observability expectations

The system should produce enough telemetry to answer:

what requests occurred

what actions were attempted

which were allowed or denied

how recommendations were used

where cases are accumulating

which blocker categories are recurring

where policy friction is happening

Observability should be operationally useful, not vanity instrumentation.

Product wedge for first public release

The first release should prove one sharp product story:

A sustainment triage and bottleneck operating layer with policy-aware recommendation review and durable evidence.

That means the public repo should demonstrate:

clear domain model

clear workflow states

clear role boundaries

clear recommendation boundaries

clear audit events

credible operator UX structure

API and schema seriousness

deployment and compliance awareness

It does not need to solve every sustainment problem on day one.

It needs to show a real wedge that a serious buyer could picture piloting.

Architecture risks to control
Risk 1 — dashboard theater

The platform looks impressive but does not reduce workflow friction.

Risk 2 — uncontrolled AI behavior

The recommendation subsystem appears to make decisions rather than assist.

Risk 3 — entitlement vagueness

The system fails to distinguish between existence of data and permission to use it.

Risk 4 — shallow audit design

The evidence layer is too weak to support review or oversight.

Risk 5 — generic enterprise UX

The interface looks like commodity admin software instead of operator-grade workflow software.

Risk 6 — overreach into operational harm

The product drifts from sustainment into prohibited mission or weapon workflows.

These risks should be treated as design constraints, not afterthoughts.

Definition of architectural success

This architecture is successful if a serious reviewer can say:

this is solving a real sustainment coordination problem

the trust boundaries are clear

the AI role is disciplined

the human authority boundary is preserved

the system could be piloted without pretending to be something it is not

the design is rigorous enough to justify deeper conversation

Status

This file establishes the architecture baseline for the repository.

Follow-on commits should implement that baseline through:

product docs

workflow docs

API definitions

schemas

backend services

frontend scaffolding

demo fixtures

CI and validation
