import type { ProjectCaseStudy } from "@/types";
import {
  bugSathiMetrics,
  paintCrmMetrics,
  signalMineMetrics,
  voxForgeMetrics,
} from "@/content/verified-metrics";

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    slug: "voxforge",
    projectId: "voxforge",
    problem:
      "Voice AI prototypes usually split across transports (WebSocket demos, REST glue, WebRTC pilots) with no shared pipeline, evaluation, or deploy story. Operators cannot trust what changed between releases.",
    solution:
      "VoxForge is a modular monolith that routes every transport through one VoicePipelineService: LangGraph agents, pgvector RAG, per-turn evaluation, signed replay, and human handoff behind a single FastAPI core with a Docker + NGINX production path.",
    requirements:
      "Self-hostable on a single VPS; one-command HTTPS; mock providers for CI without vendor API keys; operator visibility (sessions, latency, alerts); citation-grounded RAG; SAML for enterprise pilots.",
    architectureDiagramNote:
      "See VoxForge docs: docs/architecture/ and ADRs in the repository. Diagrams are maintained upstream — this site does not duplicate them to avoid drift.",
    eventFlow:
      "Client connects via WebSocket, REST onboarding, or LiveKit WebRTC → gateway normalizes audio/text → VoicePipelineService runs STT → LangGraph agent graph (planner, safety, executor, critic) → optional pgvector retrieval → TTS response. Each turn can be evaluated and replayed with a signed link.",
    reliability:
      "Health and readiness endpoints behind NGINX; session state in Redis; PostgreSQL for knowledge and configuration. Incident runbooks and backup scripts ship with the deploy stack. Mock providers complete the pipeline in CI without external dependencies.",
    security:
      "JWT, RBAC, API keys, optional SAML SSO. CI runs secret scanning and dependency audit. Production deploy documented for Ubuntu 24.04 with TLS via Certbot.",
    testing: `CI collects ${voxForgeMetrics.testsCollected} tests (${voxForgeMetrics.testsPassedNonBrowser} non-browser passed at last pinned metrics doc). Playwright browser tests run in a separate job. Coverage gate on src/voxforge: ${voxForgeMetrics.coveragePercent}% (see docs/project-metrics.md).`,
    performance:
      "Benchmark documents exist in the VoxForge repo; this page does not quote latency numbers without linking to a pinned benchmark revision. Mock pipeline exercises full path quickly for regression testing.",
    tradeoffs: [
      "Modular monolith instead of microservices — fewer moving parts for self-hosters, boundaries enforced in code.",
      "pgvector on Postgres instead of a dedicated vector DB — simpler ops for pilots.",
      "Evaluation every turn — extra compute for operator trust and regression detection.",
    ],
    lessonsLearned: [
      "Unifying transports early prevented three divergent test suites.",
      "Signed replay links make voice regressions reviewable without replaying production audio blindly.",
    ],
    evidenceGaps: [
      "Republish portfolio figures whenever docs/project-metrics.md is regenerated at a new commit.",
    ],
    deliverables: [
      { area: "Transport", detail: "WebSocket gateway, REST API, LiveKit WebRTC worker integration" },
      { area: "Agents", detail: "LangGraph orchestration with safety and critic stages" },
      { area: "Knowledge", detail: "Ingestion, chunking, pgvector search, citation grounding" },
      { area: "Operations", detail: "Dashboard, OpenTelemetry, deploy.sh + Docker Compose prod stack" },
      { area: "Quality", detail: "pytest + Playwright CI, coverage and secret scanning gates" },
    ],
    decisions: [
      {
        title: "Single VoicePipelineService",
        detail: "All transports call the same service so business logic and tests stay transport-agnostic.",
      },
      {
        title: "Mock STT/LLM/TTS providers",
        detail: "Enables full pipeline tests and demos without paid API keys.",
      },
      {
        title: "Per-turn evaluation",
        detail: "Turns operator trust into code — regressions surface in CI and dashboards, not only in demos.",
      },
    ],
    results: [
      ...voxForgeMetrics.display,
      "Live demo and status pages at voxforge.brohammad.tech",
      "Open source: v1.0.0-rc.1",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Brohammad/VoxForge" },
      { label: "Live demo", href: "https://voxforge.brohammad.tech/demo" },
      { label: "Project metrics (SSoT)", href: "https://github.com/Brohammad/VoxForge/blob/main/docs/project-metrics.md" },
      { label: "Architecture docs", href: "https://github.com/Brohammad/VoxForge/tree/main/docs" },
    ],
  },
  {
    slug: "bugsathi",
    projectId: "bugsathi",
    problem:
      "Bug reports lose context: no recording, inconsistent steps, and SaaS tools that hide how media and AI processing actually work.",
    solution:
      "BugSathi ingests a screen recording locally, stores media in MinIO, runs an ordered Kafka pipeline (ffmpeg frames → AI draft → report), and exposes shareable reports with JWT auth and observability.",
    requirements:
      "Local-first Docker Compose; ordered processing per recording; idempotent consumers; refresh-token rotation; OTel + Prometheus + Grafana; Kubernetes path for production experiments.",
    eventFlow:
      "Upload → presigned MinIO PUT → completion event → Kafka topics (per-recording ordering via partition key) → ffmpeg worker → AI analysis worker → report materialization in Postgres → shareable link.",
    reliability:
      "Outbox pattern, DLQ reprocess path, and chaos drills in Makefile targets. Workers are separate binaries from the API.",
    security:
      "JWT access + refresh rotation, project tenancy, rate limiting with Redis, audit logs. Production compose guards for AI and MinIO configuration.",
    testing: `${bugSathiMetrics.goTests} Go tests; CI runs test-race. ${bugSathiMetrics.adrs} ADRs document major decisions.`,
    performance:
      "Media steps are isolated in workers; no synthetic throughput benchmarks are published on this site.",
    tradeoffs: [
      "Kafka for ordering vs a simpler queue — pays off when stages replay or fail independently.",
      "Go modular monolith (API + worker) vs single binary — clearer failure domains for media-heavy work.",
    ],
    lessonsLearned: [
      "Provider ports for AI keep vision tests deterministic offline.",
      "ADRs paid off when debugging pipeline ordering under replay.",
    ],
    deliverables: [
      { area: "API", detail: "REST API for projects, recordings, reports, auth" },
      { area: "Pipeline", detail: "Kafka/Redpanda ordered stages with ffmpeg and AI workers" },
      { area: "Storage", detail: "MinIO for recordings/frames, Postgres for metadata" },
      { area: "Observability", detail: "OpenTelemetry, Prometheus, Grafana dashboards" },
    ],
    decisions: [
      {
        title: "Per-recording Kafka ordering",
        detail: "Partition keys keep all stages for one recording strictly ordered.",
      },
      {
        title: "Separate worker binary",
        detail: "Media and AI work cannot block API request latency.",
      },
    ],
    results: [...bugSathiMetrics.display],
    links: [
      { label: "GitHub", href: "https://github.com/Brohammad/BugSathi" },
      { label: "ADRs", href: "https://github.com/Brohammad/BugSathi/tree/master/docs/adr" },
    ],
  },
  {
    slug: "signalmine",
    projectId: "signalmine",
    problem:
      "Market and product signals are buried in unstructured GitHub and Reddit threads. Manual synthesis does not scale and is not reproducible.",
    solution:
      "SignalMine (PainMiningEngine repo) runs collector → deterministic normalizer → schema-constrained LLM extraction → JSON Schema validation, with golden-dataset evaluation and optional Postgres persistence via FastAPI.",
    requirements:
      "Source-agnostic RawDiscussion contract; GitHub collector first; Reddit behind configuration; no embeddings or clustering in current scope (per README).",
    eventFlow:
      "URL → routed collector → RawDiscussion → NormalizedDocument → Instructor extraction → Complaint JSON → validator. CLI supports stage-by-stage JSON workflows; API persists when DATABASE_URL is configured.",
    reliability:
      "Insert-only SQLAlchemy persistence per stage; duplicate detection migrations; structured errors from collectors with retries on GitHub API.",
    security:
      "No auth on current API scope (explicitly out of scope in README). Secrets via environment only — no keys in repo.",
    testing: `${signalMineMetrics.pytestCollected} pytest tests collected (verified ${signalMineMetrics.verifiedLocally} via pytest --collect-only). Prefer adding docs/project-metrics.md in-repo as the long-term SSoT.`,
    performance: "Synchronous pipeline for CLI validation; API adds persistence and metrics endpoints.",
    tradeoffs: [
      "Synchronous orchestration first — simpler correctness proofs before background workers.",
      "JSON Schema + Pydantic — reliability over free-form LLM output.",
    ],
    lessonsLearned: [
      "Golden datasets catch extraction drift field-by-field, not just with a single accuracy score.",
    ],
    evidenceGaps: [
      "Add docs/project-metrics.md to PainMiningEngine so CI revision pins the pytest count (local collect-only showed 125 on 2026-11-07; resume cites 124).",
    ],
    deliverables: [
      { area: "Collectors", detail: "GitHub REST, file, optional Reddit via PRAW" },
      { area: "Contracts", detail: `${signalMineMetrics.jsonSchemas} JSON schemas in schemas/` },
      { area: "Extraction", detail: "Versioned prompts, Instructor, validation retries" },
      { area: "Evaluation", detail: "Golden dataset harness and Markdown reports" },
      { area: "API", detail: "FastAPI process/complaints/health/metrics" },
    ],
    decisions: [
      {
        title: "Deterministic normalization before LLM",
        detail: "Removes formatting variance so extraction diffs are meaningful.",
      },
      {
        title: "Schema-first outputs",
        detail: "Complaint contract is authoritative — extraction must validate or retry.",
      },
    ],
    results: [...signalMineMetrics.display],
    links: [
      { label: "GitHub (PainMiningEngine)", href: "https://github.com/Brohammad/PainMiningEngine" },
      { label: "Architecture", href: "https://github.com/Brohammad/PainMiningEngine/blob/main/docs/architecture.md" },
      { label: "Evaluation", href: "https://github.com/Brohammad/PainMiningEngine/blob/main/docs/eval.md" },
    ],
  },
  {
    slug: "paint-intelligence",
    projectId: "paint-intelligence",
    problem:
      "Paint dealers need a fast in-store demo: visualize real catalog colors on a customer's wall and capture the lead — often with unreliable shop-floor internet.",
    solution:
      "PaintCRM combines browser-side wall masking and recolor, offline-first lead capture, and a multi-tenant Express API for quotes, orders, inventory, and an append-only credit ledger.",
    security: "JWT with rotating refresh tokens; multi-tenant API; financial totals computed server-side.",
    testing:
      "Automated Vitest/Jest suite and Playwright E2E documented in repository; exact counts live in PaintCRM CI — verify before citing a number on external profiles.",
    deliverables: [
      { area: "Visualization", detail: "Canvas segmentation and 63-shade catalog preview" },
      { area: "CRM", detail: "Quotes, orders, inventory, receivables" },
      { area: "Deploy", detail: "Docker + live demo at paintcrm.brohammad.tech" },
    ],
    decisions: [
      {
        title: "Offline-first UX",
        detail: "Shop-floor demos cannot depend on continuous connectivity.",
      },
      {
        title: "Server-side financial totals",
        detail: "Ledger and quote totals never trust client-computed amounts.",
      },
    ],
    results: [...paintCrmMetrics.display],
    links: [
      { label: "GitHub", href: "https://github.com/Brohammad/PaintCRM" },
      { label: "Live demo", href: "https://paintcrm.brohammad.tech" },
      { label: "Architecture", href: "https://github.com/Brohammad/PaintCRM/blob/main/ARCHITECTURE.md" },
    ],
  },
];
