import React, { StrictMode, useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";

const shell = {
  app: {
    minHeight: "100vh",
    background: "#0b1020",
    color: "#e6edf3",
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  topbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 24px",
    borderBottom: "1px solid rgba(230, 237, 243, 0.12)",
    position: "sticky",
    top: 0,
    background: "rgba(11, 16, 32, 0.96)",
    backdropFilter: "blur(8px)",
    zIndex: 10,
  },
  brandWrap: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  brandTitle: {
    margin: 0,
    fontSize: 22,
    fontWeight: 700,
    letterSpacing: 0.2,
  },
  brandSub: {
    margin: 0,
    fontSize: 13,
    color: "#9fb0c3",
  },
  topbarMeta: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    justifyContent: "flex-end",
  },
  pill: {
    padding: "8px 12px",
    borderRadius: 999,
    border: "1px solid rgba(230, 237, 243, 0.16)",
    background: "rgba(255, 255, 255, 0.04)",
    fontSize: 12,
    color: "#c6d4e1",
  },
  body: {
    display: "grid",
    gridTemplateColumns: "360px minmax(0, 1fr)",
    gap: 18,
    padding: 18,
  },
  panel: {
    background: "rgba(255, 255, 255, 0.035)",
    border: "1px solid rgba(230, 237, 243, 0.12)",
    borderRadius: 16,
    overflow: "hidden",
  },
  panelHeader: {
    padding: "14px 16px",
    borderBottom: "1px solid rgba(230, 237, 243, 0.1)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
  },
  panelTitle: {
    margin: 0,
    fontSize: 15,
    fontWeight: 700,
    letterSpacing: 0.2,
  },
  panelSub: {
    margin: 0,
    fontSize: 12,
    color: "#8ca0b3",
  },
  filterRow: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
    padding: "12px 16px 0",
  },
  select: {
    appearance: "none",
    border: "1px solid rgba(230, 237, 243, 0.14)",
    background: "#111a31",
    color: "#e6edf3",
    borderRadius: 10,
    padding: "10px 12px",
    fontSize: 13,
    minWidth: 110,
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    padding: 16,
  },
  caseCard: {
    border: "1px solid rgba(230, 237, 243, 0.1)",
    background: "rgba(255, 255, 255, 0.03)",
    borderRadius: 14,
    padding: 14,
    cursor: "pointer",
    transition: "transform 120ms ease, border-color 120ms ease, background 120ms ease",
  },
  caseCardSelected: {
    border: "1px solid rgba(125, 211, 252, 0.45)",
    background: "rgba(125, 211, 252, 0.07)",
  },
  caseTitle: {
    margin: "0 0 8px",
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 1.35,
  },
  metaGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 10,
    marginTop: 12,
  },
  metaBlock: {
    border: "1px solid rgba(230, 237, 243, 0.08)",
    background: "rgba(255, 255, 255, 0.025)",
    borderRadius: 12,
    padding: 12,
  },
  metaLabel: {
    display: "block",
    fontSize: 11,
    color: "#8ca0b3",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  metaValue: {
    fontSize: 13,
    lineHeight: 1.4,
    color: "#e6edf3",
    fontWeight: 600,
  },
  content: {
    display: "grid",
    gridTemplateRows: "auto auto auto",
    gap: 18,
  },
  detailWrap: {
    padding: 18,
    display: "grid",
    gap: 16,
  },
  hero: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) auto",
    gap: 16,
    alignItems: "start",
  },
  heroTitle: {
    margin: "0 0 10px",
    fontSize: 24,
    lineHeight: 1.2,
    fontWeight: 800,
  },
  heroBody: {
    margin: 0,
    color: "#c3d0db",
    lineHeight: 1.55,
    fontSize: 14,
  },
  badgeRow: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
    alignItems: "center",
    marginBottom: 10,
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    borderRadius: 999,
    padding: "7px 11px",
    fontSize: 12,
    fontWeight: 700,
    border: "1px solid rgba(230, 237, 243, 0.12)",
  },
  sectionGrid: {
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    gap: 18,
    alignItems: "start",
  },
  stack: {
    display: "grid",
    gap: 14,
  },
  card: {
    border: "1px solid rgba(230, 237, 243, 0.1)",
    background: "rgba(255, 255, 255, 0.03)",
    borderRadius: 14,
    padding: 14,
  },
  cardTitle: {
    margin: "0 0 10px",
    fontSize: 14,
    fontWeight: 700,
  },
  paragraph: {
    margin: 0,
    fontSize: 13,
    lineHeight: 1.55,
    color: "#c3d0db",
  },
  kvList: {
    display: "grid",
    gap: 10,
  },
  kvRow: {
    display: "grid",
    gridTemplateColumns: "140px minmax(0, 1fr)",
    gap: 12,
    alignItems: "start",
    fontSize: 13,
  },
  kvKey: {
    color: "#8ca0b3",
  },
  kvValue: {
    color: "#e6edf3",
    fontWeight: 600,
    lineHeight: 1.5,
  },
  chipRow: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
  },
  chip: {
    borderRadius: 999,
    padding: "7px 10px",
    fontSize: 12,
    fontWeight: 700,
    border: "1px solid rgba(230, 237, 243, 0.12)",
    background: "rgba(255, 255, 255, 0.04)",
  },
  timeline: {
    display: "grid",
    gap: 10,
  },
  timelineItem: {
    display: "grid",
    gridTemplateColumns: "140px 1fr",
    gap: 12,
    padding: "12px 0",
    borderTop: "1px solid rgba(230, 237, 243, 0.08)",
  },
  timelineTime: {
    fontSize: 12,
    color: "#8ca0b3",
    lineHeight: 1.4,
  },
  timelineBody: {
    display: "grid",
    gap: 4,
  },
  timelineAction: {
    margin: 0,
    fontSize: 13,
    fontWeight: 700,
  },
  timelineSummary: {
    margin: 0,
    fontSize: 13,
    lineHeight: 1.5,
    color: "#c3d0db",
  },
  empty: {
    padding: 32,
    textAlign: "center",
    color: "#8ca0b3",
    fontSize: 14,
  },
  error: {
    padding: 16,
    border: "1px solid rgba(248, 113, 113, 0.3)",
    background: "rgba(248, 113, 113, 0.08)",
    color: "#fecaca",
    borderRadius: 12,
    fontSize: 13,
  },
  loading: {
    padding: 24,
    color: "#9fb0c3",
    fontSize: 13,
  },
};

const stateColors = {
  "new": { border: "rgba(148, 163, 184, 0.3)", bg: "rgba(148, 163, 184, 0.12)", text: "#dbe5f0" },
  "triage": { border: "rgba(125, 211, 252, 0.35)", bg: "rgba(125, 211, 252, 0.12)", text: "#d7f3ff" },
  "awaiting-data": { border: "rgba(250, 204, 21, 0.35)", bg: "rgba(250, 204, 21, 0.12)", text: "#fef3c7" },
  "awaiting-parts": { border: "rgba(249, 115, 22, 0.35)", bg: "rgba(249, 115, 22, 0.12)", text: "#fed7aa" },
  "awaiting-approval": { border: "rgba(168, 85, 247, 0.35)", bg: "rgba(168, 85, 247, 0.12)", text: "#e9d5ff" },
  "actionable": { border: "rgba(34, 197, 94, 0.35)", bg: "rgba(34, 197, 94, 0.12)", text: "#dcfce7" },
  "deferred": { border: "rgba(244, 114, 182, 0.35)", bg: "rgba(244, 114, 182, 0.12)", text: "#fbcfe8" },
  "resolved": { border: "rgba(16, 185, 129, 0.35)", bg: "rgba(16, 185, 129, 0.12)", text: "#d1fae5" },
  "closed": { border: "rgba(100, 116, 139, 0.35)", bg: "rgba(100, 116, 139, 0.12)", text: "#e2e8f0" },
};

const severityColors = {
  low: { border: "rgba(34, 197, 94, 0.35)", bg: "rgba(34, 197, 94, 0.12)", text: "#dcfce7" },
  medium: { border: "rgba(59, 130, 246, 0.35)", bg: "rgba(59, 130, 246, 0.12)", text: "#dbeafe" },
  high: { border: "rgba(250, 204, 21, 0.35)", bg: "rgba(250, 204, 21, 0.12)", text: "#fef3c7" },
  critical: { border: "rgba(239, 68, 68, 0.35)", bg: "rgba(239, 68, 68, 0.12)", text: "#fee2e2" },
};

const blockerColors = {
  data: { border: "rgba(250, 204, 21, 0.3)", bg: "rgba(250, 204, 21, 0.12)", text: "#fef3c7" },
  procedure: { border: "rgba(59, 130, 246, 0.3)", bg: "rgba(59, 130, 246, 0.12)", text: "#dbeafe" },
  entitlement: { border: "rgba(168, 85, 247, 0.3)", bg: "rgba(168, 85, 247, 0.12)", text: "#e9d5ff" },
  parts: { border: "rgba(249, 115, 22, 0.3)", bg: "rgba(249, 115, 22, 0.12)", text: "#fed7aa" },
  tooling: { border: "rgba(14, 165, 233, 0.3)", bg: "rgba(14, 165, 233, 0.12)", text: "#dbeafe" },
  approval: { border: "rgba(168, 85, 247, 0.3)", bg: "rgba(168, 85, 247, 0.12)", text: "#e9d5ff" },
  capacity: { border: "rgba(244, 114, 182, 0.3)", bg: "rgba(244, 114, 182, 0.12)", text: "#fbcfe8" },
  policy: { border: "rgba(239, 68, 68, 0.3)", bg: "rgba(239, 68, 68, 0.12)", text: "#fee2e2" },
};

const approvalColors = {
  pending: { border: "rgba(250, 204, 21, 0.3)", bg: "rgba(250, 204, 21, 0.12)", text: "#fef3c7" },
  approved: { border: "rgba(34, 197, 94, 0.3)", bg: "rgba(34, 197, 94, 0.12)", text: "#dcfce7" },
  rejected: { border: "rgba(239, 68, 68, 0.3)", bg: "rgba(239, 68, 68, 0.12)", text: "#fee2e2" },
  "returned-for-info": { border: "rgba(59, 130, 246, 0.3)", bg: "rgba(59, 130, 246, 0.12)", text: "#dbeafe" },
};

function App() {
  const [cases, setCases] = useState([]);
  const [approvals, setApprovals] = useState([]);
  const [selectedCaseId, setSelectedCaseId] = useState("");
  const [selectedCase, setSelectedCase] = useState(null);
  const [evidence, setEvidence] = useState([]);
  const [stateFilter, setStateFilter] = useState("");
  const [blockerFilter, setBlockerFilter] = useState("");
  const [loadingCases, setLoadingCases] = useState(true);
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function loadBoard() {
      setLoadingCases(true);
      setError("");

      try {
        const query = new URLSearchParams();
        if (stateFilter) query.set("state", stateFilter);
        if (blockerFilter) query.set("primary_blocker", blockerFilter);

        const [casesRes, approvalsRes] = await Promise.all([
          fetch(`/cases?${query.toString()}`),
          fetch("/approvals"),
        ]);

        if (!casesRes.ok) {
          throw new Error(`Failed to load cases (${casesRes.status})`);
        }
        if (!approvalsRes.ok) {
          throw new Error(`Failed to load approvals (${approvalsRes.status})`);
        }

        const casesJson = await casesRes.json();
        const approvalsJson = await approvalsRes.json();

        if (!active) return;

        const nextCases = Array.isArray(casesJson.items) ? casesJson.items : [];
        setCases(nextCases);
        setApprovals(Array.isArray(approvalsJson.items) ? approvalsJson.items : []);

        if (nextCases.length === 0) {
          setSelectedCaseId("");
          setSelectedCase(null);
          setEvidence([]);
          return;
        }

        const selectedStillExists = nextCases.some((item) => item.case_id === selectedCaseId);
        if (!selectedStillExists) {
          setSelectedCaseId(nextCases[0].case_id);
        }
      } catch (err) {
        if (!active) return;
        setError(err instanceof Error ? err.message : "Failed to load board data.");
      } finally {
        if (active) {
          setLoadingCases(false);
        }
      }
    }

    void loadBoard();

    return () => {
      active = false;
    };
  }, [stateFilter, blockerFilter, selectedCaseId]);

  useEffect(() => {
    if (!selectedCaseId) {
      setSelectedCase(null);
      setEvidence([]);
      return;
    }

    let active = true;

    async function loadDetail() {
      setLoadingDetail(true);
      setError("");

      try {
        const [detailRes, evidenceRes] = await Promise.all([
          fetch(`/cases/${selectedCaseId}`),
          fetch(`/cases/${selectedCaseId}/evidence`),
        ]);

        if (!detailRes.ok) {
          throw new Error(`Failed to load case detail (${detailRes.status})`);
        }
        if (!evidenceRes.ok) {
          throw new Error(`Failed to load evidence (${evidenceRes.status})`);
        }

        const detailJson = await detailRes.json();
        const evidenceJson = await evidenceRes.json();

        if (!active) return;

        setSelectedCase(detailJson);
        setEvidence(Array.isArray(evidenceJson.items) ? evidenceJson.items : []);
      } catch (err) {
        if (!active) return;
        setError(err instanceof Error ? err.message : "Failed to load case detail.");
      } finally {
        if (active) {
          setLoadingDetail(false);
        }
      }
    }

    void loadDetail();

    return () => {
      active = false;
    };
  }, [selectedCaseId]);

  const metrics = useMemo(() => {
    const pendingApprovals = approvals.filter((item) => item.disposition === "pending").length;
    const actionable = cases.filter((item) => item.state === "actionable").length;
    const awaitingParts = cases.filter((item) => item.state === "awaiting-parts").length;
    const awaitingApproval = cases.filter((item) => item.state === "awaiting-approval").length;

    return {
      totalCases: cases.length,
      pendingApprovals,
      actionable,
      awaitingParts,
      awaitingApproval,
    };
  }, [cases, approvals]);

  const selectedApprovalItems = useMemo(() => {
    if (!selectedCaseId) return [];
    return approvals.filter((item) => item.case_id === selectedCaseId);
  }, [approvals, selectedCaseId]);

  return (
    <div style={shell.app}>
      <header style={shell.topbar}>
        <div style={shell.brandWrap}>
          <h1 style={shell.brandTitle}>IX Sustainment OS</h1>
          <p style={shell.brandSub}>
            Operator-grade sustainment triage, blocker visibility, approvals, and evidence
          </p>
        </div>

        <div style={shell.topbarMeta}>
          <Pill label={`Open Cases ${metrics.totalCases}`} />
          <Pill label={`Pending Approvals ${metrics.pendingApprovals}`} />
          <Pill label={`Actionable ${metrics.actionable}`} />
          <Pill label={`Awaiting Parts ${metrics.awaitingParts}`} />
          <Pill label={`Awaiting Approval ${metrics.awaitingApproval}`} />
        </div>
      </header>

      {error ? (
        <div style={{ padding: 18 }}>
          <div style={shell.error}>{error}</div>
        </div>
      ) : null}

      <main style={shell.body}>
        <section style={shell.panel}>
          <div style={shell.panelHeader}>
            <div>
              <h2 style={shell.panelTitle}>Triage Board</h2>
              <p style={shell.panelSub}>Queue visibility for state, severity, blockers, and approval pressure</p>
            </div>
          </div>

          <div style={shell.filterRow}>
            <select
              style={shell.select}
              value={stateFilter}
              onChange={(event) => setStateFilter(event.target.value)}
            >
              <option value="">All states</option>
              <option value="triage">triage</option>
              <option value="awaiting-data">awaiting-data</option>
              <option value="awaiting-parts">awaiting-parts</option>
              <option value="awaiting-approval">awaiting-approval</option>
              <option value="actionable">actionable</option>
              <option value="deferred">deferred</option>
              <option value="resolved">resolved</option>
              <option value="closed">closed</option>
            </select>

            <select
              style={shell.select}
              value={blockerFilter}
              onChange={(event) => setBlockerFilter(event.target.value)}
            >
              <option value="">All blockers</option>
              <option value="data">data</option>
              <option value="procedure">procedure</option>
              <option value="entitlement">entitlement</option>
              <option value="parts">parts</option>
              <option value="approval">approval</option>
              <option value="capacity">capacity</option>
              <option value="policy">policy</option>
            </select>
          </div>

          {loadingCases ? (
            <div style={shell.loading}>Loading case board…</div>
          ) : cases.length === 0 ? (
            <div style={shell.empty}>No cases match the current filter set.</div>
          ) : (
            <div style={shell.list}>
              {cases.map((item) => {
                const isSelected = item.case_id === selectedCaseId;
                return (
                  <button
                    key={item.case_id}
                    type="button"
                    onClick={() => setSelectedCaseId(item.case_id)}
                    style={{
                      ...shell.caseCard,
                      ...(isSelected ? shell.caseCardSelected : null),
                      textAlign: "left",
                    }}
                  >
                    <div style={shell.badgeRow}>
                      <StatusBadge value={item.state} />
                      <SeverityBadge value={item.severity} />
                      <BlockerBadge value={item.primary_blocker} />
                    </div>

                    <h3 style={shell.caseTitle}>{item.title}</h3>

                    <div style={{ fontSize: 12, color: "#9fb0c3", lineHeight: 1.5 }}>
                      <div>{item.case_id}</div>
                      <div>{item.asset_id}</div>
                    </div>

                    <div style={shell.metaGrid}>
                      <MiniMetric label="Priority" value={item.priority} />
                      <MiniMetric label="Mission Effect" value={item.mission_effect} />
                      <MiniMetric label="Approval" value={item.approval_required ? "Required" : "No"} />
                      <MiniMetric label="Recommendation" value={item.has_recommendation ? "Present" : "None"} />
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </section>

        <section style={shell.content}>
          {!selectedCase ? (
            <div style={shell.panel}>
              <div style={shell.empty}>Select a case to inspect detail, approvals, and evidence.</div>
            </div>
          ) : (
            <>
              <section style={shell.panel}>
                <div style={shell.panelHeader}>
                  <div>
                    <h2 style={shell.panelTitle}>Case Detail</h2>
                    <p style={shell.panelSub}>Defensible sustainment picture for the selected case</p>
                  </div>
                </div>

                {loadingDetail ? (
                  <div style={shell.loading}>Loading case detail…</div>
                ) : (
                  <div style={shell.detailWrap}>
                    <div style={shell.hero}>
                      <div>
                        <div style={shell.badgeRow}>
                          <StatusBadge value={selectedCase.case.state} />
                          <SeverityBadge value={selectedCase.case.severity} />
                          <BlockerBadge value={selectedCase.case.primary_blocker} />
                        </div>

                        <h2 style={shell.heroTitle}>{selectedCase.case.title}</h2>
                        <p style={shell.heroBody}>{selectedCase.case.description}</p>
                      </div>

                      <div style={{ minWidth: 220 }}>
                        <div style={shell.card}>
                          <h3 style={shell.cardTitle}>Asset Context</h3>
                          <div style={shell.kvList}>
                            <KeyValue label="Asset ID" value={selectedCase.asset.asset_id} />
                            <KeyValue label="Type" value={selectedCase.asset.asset_type} />
                            <KeyValue label="Serial" value={selectedCase.asset.tail_or_serial} />
                            <KeyValue label="Location" value={selectedCase.asset.unit_or_location} />
                            <KeyValue label="Status" value={selectedCase.asset.status} />
                            <KeyValue label="Mission Relevance" value={selectedCase.asset.mission_relevance} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div style={shell.sectionGrid}>
                      <div style={shell.stack}>
                        <div style={shell.card}>
                          <h3 style={shell.cardTitle}>Operational Attributes</h3>
                          <div style={shell.kvList}>
                            <KeyValue label="Case ID" value={selectedCase.case.case_id} />
                            <KeyValue label="Priority" value={selectedCase.case.priority} />
                            <KeyValue label="Mission Effect" value={selectedCase.case.mission_effect} />
                            <KeyValue label="Subsystem" value={selectedCase.case.subsystem_area || "—"} />
                            <KeyValue label="Reported Condition" value={selectedCase.case.reported_condition || "—"} />
                            <KeyValue label="Urgency Note" value={selectedCase.case.urgency_note || "—"} />
                          </div>
                        </div>

                        <div style={shell.card}>
                          <h3 style={shell.cardTitle}>Active Blockers</h3>
                          <div style={shell.stack}>
                            {selectedCase.case.blocker_list?.map((blocker, index) => (
                              <div key={`${blocker.category}-${index}`} style={shell.metaBlock}>
                                <div style={shell.badgeRow}>
                                  <BlockerBadge value={blocker.category} />
                                  {blocker.is_primary ? <SoftChip label="Primary blocker" /> : null}
                                </div>
                                <p style={shell.paragraph}>{blocker.summary}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div style={shell.card}>
                          <h3 style={shell.cardTitle}>Technical Data Gateway</h3>
                          {selectedCase.procedures?.length ? (
                            <div style={shell.stack}>
                              {selectedCase.procedures.map((procedure) => (
                                <div key={procedure.procedure_ref_id} style={shell.metaBlock}>
                                  <div style={shell.badgeRow}>
                                    <SoftChip label={procedure.reference_code} />
                                    <SoftChip label={procedure.revision} />
                                    <StatusChip
                                      text={procedure.access_state}
                                      palette={blockerColors[procedure.access_state === "restricted" ? "entitlement" : "procedure"] || blockerColors.procedure}
                                    />
                                  </div>
                                  <h4 style={{ margin: "6px 0 8px", fontSize: 14 }}>{procedure.title}</h4>
                                  <p style={shell.paragraph}>{procedure.applicability}</p>
                                  {procedure.restricted_reason ? (
                                    <p style={{ ...shell.paragraph, marginTop: 8, color: "#f5d0fe" }}>
                                      {procedure.restricted_reason}
                                    </p>
                                  ) : null}
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p style={shell.paragraph}>No procedure references linked for this case.</p>
                          )}
                        </div>
                      </div>

                      <div style={shell.stack}>
                        <div style={shell.card}>
                          <h3 style={shell.cardTitle}>Parts Bottleneck View</h3>
                          {selectedCase.part_constraints?.length ? (
                            <div style={shell.stack}>
                              {selectedCase.part_constraints.map((part) => (
                                <div key={part.part_constraint_id} style={shell.metaBlock}>
                                  <div style={shell.badgeRow}>
                                    <SoftChip label={part.part_number} />
                                    <StatusChip text={part.availability_state} palette={blockerColors.parts} />
                                  </div>
                                  <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 8 }}>
                                    {part.nomenclature}
                                  </div>
                                  <p style={shell.paragraph}>{part.readiness_impact}</p>
                                  <div style={{ marginTop: 10 }}>
                                    <KeyValue label="ETA" value={part.eta_text || "Unknown"} />
                                    <KeyValue label="Alternate Path" value={part.alternate_path || "None recorded"} />
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p style={shell.paragraph}>No material constraints are attached to this case.</p>
                          )}
                        </div>

                        <div style={shell.card}>
                          <h3 style={shell.cardTitle}>Recommendation Review</h3>
                          {selectedCase.recommendations?.length ? (
                            <div style={shell.stack}>
                              {selectedCase.recommendations.map((recommendation) => (
                                <div key={recommendation.recommendation_id} style={shell.metaBlock}>
                                  <div style={shell.badgeRow}>
                                    <SoftChip label={recommendation.type} />
                                    <SoftChip label={`confidence ${recommendation.confidence_label}`} />
                                    <StatusChip
                                      text={recommendation.status}
                                      palette={approvalColors[recommendation.status === "pending-review" ? "pending" : "approved"] || approvalColors.pending}
                                    />
                                    {recommendation.approval_required ? <SoftChip label="Approval required" /> : null}
                                  </div>
                                  <h4 style={{ margin: "6px 0 8px", fontSize: 14 }}>{recommendation.summary}</h4>
                                  <p style={shell.paragraph}>{recommendation.rationale}</p>
                                  {recommendation.inputs_used?.length ? (
                                    <div style={{ ...shell.chipRow, marginTop: 10 }}>
                                      {recommendation.inputs_used.map((input) => (
                                        <div key={input} style={shell.chip}>
                                          {input}
                                        </div>
                                      ))}
                                    </div>
                                  ) : null}
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p style={shell.paragraph}>No recommendations are attached to this case.</p>
                          )}
                        </div>

                        <div style={shell.card}>
                          <h3 style={shell.cardTitle}>Approval Queue</h3>
                          {selectedApprovalItems.length ? (
                            <div style={shell.stack}>
                              {selectedApprovalItems.map((approval) => (
                                <div key={approval.approval_id} style={shell.metaBlock}>
                                  <div style={shell.badgeRow}>
                                    <SoftChip label={approval.approval_id} />
                                    <StatusChip
                                      text={approval.disposition}
                                      palette={approvalColors[approval.disposition] || approvalColors.pending}
                                    />
                                  </div>
                                  <p style={{ ...shell.paragraph, fontWeight: 700, color: "#e6edf3", marginBottom: 8 }}>
                                    {approval.requested_action}
                                  </p>
                                  <KeyValue label="Requester" value={approval.requester?.display_name || "—"} />
                                  <KeyValue label="Approver Role" value={approval.approver_role} />
                                  <KeyValue label="Reason" value={approval.request_reason || "—"} />
                                  <KeyValue
                                    label="Due"
                                    value={approval.due_at ? formatDateTime(approval.due_at) : "No due time"}
                                  />
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p style={shell.paragraph}>No approval items are linked to this case.</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </section>

              <section style={shell.panel}>
                <div style={shell.panelHeader}>
                  <div>
                    <h2 style={shell.panelTitle}>Evidence Timeline</h2>
                    <p style={shell.panelSub}>Attributable workflow and review history for the selected case</p>
                  </div>
                </div>

                {loadingDetail ? (
                  <div style={shell.loading}>Loading evidence…</div>
                ) : evidence.length === 0 ? (
                  <div style={shell.empty}>No evidence events recorded for this case.</div>
                ) : (
                  <div style={{ padding: "0 18px 18px" }}>
                    <div style={shell.timeline}>
                      {evidence.map((event) => (
                        <div key={event.event_id} style={shell.timelineItem}>
                          <div style={shell.timelineTime}>
                            <div>{formatDateTime(event.occurred_at)}</div>
                            <div style={{ marginTop: 6 }}>{event.actor?.display_name || "Unknown actor"}</div>
                          </div>

                          <div style={shell.timelineBody}>
                            <p style={shell.timelineAction}>{event.action}</p>
                            <p style={shell.timelineSummary}>{event.summary}</p>
                            {(event.before_state || event.after_state) && (
                              <div style={shell.badgeRow}>
                                {event.before_state ? <SoftChip label={`from ${event.before_state}`} /> : null}
                                {event.after_state ? <SoftChip label={`to ${event.after_state}`} /> : null}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            </>
          )}
        </section>
      </main>
    </div>
  );
}

function Pill({ label }) {
  return <div style={shell.pill}>{label}</div>;
}

function MiniMetric({ label, value }) {
  return (
    <div style={shell.metaBlock}>
      <span style={shell.metaLabel}>{label}</span>
      <div style={shell.metaValue}>{value}</div>
    </div>
  );
}

function KeyValue({ label, value }) {
  return (
    <div style={shell.kvRow}>
      <div style={shell.kvKey}>{label}</div>
      <div style={shell.kvValue}>{value}</div>
    </div>
  );
}

function SoftChip({ label }) {
  return <div style={shell.chip}>{label}</div>;
}

function StatusChip({ text, palette }) {
  const colors = palette || {
    border: "rgba(230, 237, 243, 0.16)",
    bg: "rgba(255, 255, 255, 0.05)",
    text: "#e6edf3",
  };

  return (
    <div
      style={{
        ...shell.badge,
        border: `1px solid ${colors.border}`,
        background: colors.bg,
        color: colors.text,
      }}
    >
      {text}
    </div>
  );
}

function StatusBadge({ value }) {
  return <StatusChip text={value} palette={stateColors[value] || stateColors.triage} />;
}

function SeverityBadge({ value }) {
  return <StatusChip text={`severity ${value}`} palette={severityColors[value] || severityColors.medium} />;
}

function BlockerBadge({ value }) {
  return <StatusChip text={`blocker ${value}`} palette={blockerColors[value] || blockerColors.data} />;
}

function formatDateTime(value) {
  if (!value) return "—";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "UTC",
  }).format(date);
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
