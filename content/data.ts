import type { Project, Experience, SkillGroup, Certification, BlogPost, Stat } from "@/types";
import { projectCaseStudies } from "@/content/case-studies";
import {
  bugSathiMetrics,
  paintCrmMetrics,
  signalMineMetrics,
  voxForgeMetrics,
} from "@/content/verified-metrics";

export const siteConfig = {
  name: "Aabid Mohamed A",
  handle: "brohammad",
  title: "Aabid Mohamed A | Backend · Distributed Systems & AI Infrastructure",
  description:
    "Backend engineer building distributed systems and AI infrastructure — VoxForge, BugSathi, SignalMine, and production agentic workflows at PwC. Source, tests, and case studies on GitHub.",
  url: "https://brohammad.tech",
  ogImage: "https://brohammad.tech/og.png",
  location: "Bengaluru, Karnataka, India",
  role: "Associate Software Engineer @ PwC",
  tagline: "I build backend systems and AI infrastructure.",
  headline: "Distributed systems, developer tooling, and production-grade AI applications.",
  techIdentity: "Python · Go · Distributed Systems · AI Infrastructure",
  links: {
    github: "https://github.com/Brohammad",
    linkedin: "https://www.linkedin.com/in/aabid-mohamed-a-b22a02229/",
    email: "aabidmohamed2003@gmail.com",
    resume: "/resume.pdf",
  },
  lastUpdated: "November 2026",
  builtWith: "Next.js · TypeScript · Tailwind CSS",
  voxforge: {
    repo: "https://github.com/Brohammad/VoxForge",
    demo: "https://voxforge.brohammad.tech",
  },
};

export const engineeringContact = {
  why: [
    "I want end-to-end ownership — architecture, implementation, deploy, and ops — not handoffs across silos.",
    "Enterprise banking work taught me how production AI and APIs survive real load and change.",
    "I optimize for systems you can inspect: tests, ADRs, observability, and honest limitations.",
  ],
  focus:
    "Backend and platform engineering roles — distributed systems, event-driven services, and AI infrastructure with real test and deploy discipline.",
  openTo:
    "Open to backend, platform, and applied-AI infrastructure roles. I keep flagship work in public repos so you can inspect architecture and tests before we talk.",
  contactBlurb:
    "Hiring for backend, distributed systems, or AI infrastructure? Email me with the system problem — I’ll point you at the repo, tests, and case study that best match it.",
};

/** @deprecated Use engineeringContact — kept for unused section components */
export const foundingEngineer = engineeringContact;

export const aboutIntro = [
  {
    label: "Who I am",
    text: "Backend and AI engineer. By day, production systems at PwC. On my own time, I ship full platforms solo — most recently VoxForge, a voice AI stack live in production.",
  },
  {
    label: "What I build",
    text: "Production systems you can deploy and inspect — not slide decks. See Projects for the full stack; VoxForge is the latest, open source and self-hostable.",
  },
  {
    label: "What excites me",
    text: "Zero-to-one ownership, voice AI infrastructure, and software that holds up when someone actually uses it.",
  },
  {
    label: "Why founding engineer",
    text: "I do my best work with full scope and full accountability. I want to be early — building the product, the infra, and the ops story together — not maintaining someone else's roadmap.",
  },
];

export const stats: Stat[] = [
  { label: "Production Systems", subtitle: "Enterprise + open source", value: 4 },
  { label: "Automated Tests", subtitle: "VoxForge test suite", value: 354, suffix: "+" },
  { label: "Open Source Commits", subtitle: "GitHub contributions", value: 600, suffix: "+" },
  { label: "Daily API Requests", subtitle: "RAG + agent pipelines", value: 5, suffix: "K+", prefix: "~" },
  { label: "Years Building", subtitle: "Professional engineering", value: 2, suffix: "+" },
];

export const heroMetrics = [
  { label: "Systems in prod", value: "4", detail: "Banking + VoxForge" },
  { label: "Voice tests", value: "354+", detail: "81% coverage" },
  { label: "Transports unified", value: "3", detail: "WS · REST · WebRTC" },
  { label: "Deploy time", value: "<15m", detail: "Docker + HTTPS" },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Infrastructure",
    icon: "Cloud",
    description: "Deployment, observability, and cloud primitives",
    skills: [
      { name: "AWS" },
      { name: "Azure" },
      { name: "Docker" },
      { name: "NGINX" },
      { name: "Kubernetes" },
      { name: "GitHub Actions" },
      { name: "Linux" },
      { name: "OpenTelemetry" },
      { name: "Prometheus" },
    ],
  },
  {
    category: "AI Platform",
    icon: "Brain",
    description: "LLM orchestration, voice AI, RAG, and evaluation pipelines",
    skills: [
      { name: "LangChain" },
      { name: "LangGraph" },
      { name: "RAG" },
      { name: "pgvector" },
      { name: "MCP" },
      { name: "LiveKit" },
      { name: "STT/LLM/TTS" },
      { name: "LLM Evaluation" },
      { name: "Multi-Agent Systems" },
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    description: "APIs, services, and event-driven architecture",
    skills: [
      { name: "Python" },
      { name: "FastAPI" },
      { name: "Uvicorn" },
      { name: "SQLAlchemy" },
      { name: "Alembic" },
      { name: "TypeScript" },
      { name: "Node.js" },
      { name: "WebSockets" },
      { name: "REST APIs" },
      { name: "SSE" },
    ],
  },
  {
    category: "Distributed Systems",
    icon: "Network",
    description: "Consensus, replication, and fault tolerance",
    skills: [
      { name: "Raft" },
      { name: "Redis" },
      { name: "PostgreSQL" },
      { name: "asyncpg" },
      { name: "gRPC" },
      { name: "Kafka" },
    ],
  },
  {
    category: "Data",
    icon: "Database",
    description: "Relational stores, vector search, and caching",
    skills: [
      { name: "PostgreSQL" },
      { name: "pgvector" },
      { name: "Redis" },
      { name: "Qdrant" },
      { name: "MongoDB" },
      { name: "Vector Search" },
    ],
  },
  {
    category: "Security & Quality",
    icon: "Monitor",
    description: "Auth, testing, and production hardening",
    skills: [
      { name: "JWT / RBAC" },
      { name: "SAML SSO" },
      { name: "pytest" },
      { name: "Playwright" },
      { name: "Clean Architecture" },
      { name: "CI/CD" },
    ],
  },
];

export const projects: Project[] = [
  {
    id: "voxforge",
    title: "VoxForge",
    tier: "flagship",
    problemStatement:
      "Voice AI stacks split across transports and lack production operability (eval, replay, deploy).",
    contribution: "Solo design and implementation — architecture through HTTPS deploy, tests, and docs.",
    mainEngineeringChallenge:
      "One VoicePipelineService for WebSocket, REST, and LiveKit without duplicating agent and RAG logic.",
    description:
      "Open-source voice AI infrastructure platform with one unified pipeline, RAG, evaluation, replay, and one-command HTTPS deployment.",
    demo: "https://voxforge.brohammad.tech",
    github: "https://github.com/Brohammad/VoxForge",
    audience:
      "Built for teams evaluating self-hosted voice AI — read the repo and run it locally without a sales call. Just shipped; growing from here.",
    longDescription:
      "VoxForge is an open-source voice AI infrastructure platform for building and operating enterprise voice agents. Most voice AI projects stop at an LLM wrapper; VoxForge ships the full stack in one deploy: WebSocket, REST, and LiveKit WebRTC unified through VoicePipelineService; LangGraph orchestration; pgvector RAG with citation grounding; MCP tools; per-turn evaluation; session replay; human handoff; SAML SSO; and an operator dashboard. Production deployment is automated via ./deploy.sh init on Ubuntu 24.04 with Let's Encrypt. CI enforces linting, dependency audit, secret scanning, 70% coverage, and Playwright browser tests. Inspect 354+ tests and ADRs on GitHub.",
    tech: [
      "Python 3.12", "FastAPI", "LangGraph", "LangChain", "PostgreSQL", "pgvector",
      "Redis", "LiveKit", "Docker", "NGINX", "OpenTelemetry", "Playwright",
    ],
    difficulty: "Expert",
    status: "completed",
    features: [
      "Voice core: WebSocket gateway, VoicePipelineService, multi-provider STT/LLM/TTS",
      "Agents: LangGraph pipeline — planner, safety, executor, critic",
      "Knowledge: document ingestion, chunking, pgvector search, citation grounding",
      "Tools: MCP runtime discovery and builtin tools",
      "Operations: dashboard with sessions, latency, alerts, policy presets",
      "Trust: per-turn evaluation, signed replay links, human handoff queue",
      "Auth: JWT, RBAC, API keys, and SAML SSO",
      "WebRTC: LiveKit token API and worker integration",
      "Deploy: Docker Compose prod stack, NGINX, Certbot, health/readiness, backups",
      "Quality: 354+ tests, Playwright browser suite, pip-audit, gitleaks",
    ],
    challenges: [
      "Teams face a false choice: managed voice SaaS (fast, expensive, opaque) or DIY frameworks (incomplete, no ops story)",
      "Unifying three transport layers without duplicated business logic",
      "Closing the gap between voice demos and production operability",
    ],
    lessons: [
      "One-command HTTPS deploy with smoke-tested endpoints (NGINX + Certbot)",
      "Metrics pinned in docs/project-metrics.md (426 collected, 76.40% coverage at last doc revision)",
      "Mock providers exercise the full voice pipeline in ~100ms without API keys",
      "Open-source alternative to managed voice SaaS — deployable in 15 minutes",
    ],
    metrics: [...voxForgeMetrics.display, "3 transports · 1 pipeline"],
    scale: ["354+ tests", "3 unified transports", "~100ms mock pipeline"],
    engineeringChallenges: [
      "Modular monolith over microservices — faster pilots, simpler ops, module boundaries in code",
      "pgvector over dedicated vector DB — fewer moving parts for self-hosted deployments",
      "Mock providers for local/CI — zero API keys for demos and tests",
      "Evaluation on every turn — operator trust and regression detection",
    ],
    architecture:
      "Modular monolith with Clean Architecture boundaries. FastAPI + LangGraph orchestration, PostgreSQL/pgvector for knowledge retrieval, Redis for session state. Single VoicePipelineService unifies WebSocket, REST onboarding, and LiveKit WebRTC. Docker Compose prod stack with NGINX, Certbot, OpenTelemetry, and one-command HTTPS deploy on Ubuntu 24.04.",
  },
  {
    id: "bugsathi",
    title: "BugSathi",
    tier: "flagship",
    problemStatement:
      "Bug reports lack evidence and teams cannot audit how recordings become AI-written reports.",
    contribution: "End-to-end Go systems build — API, workers, Kafka pipeline, observability, ADRs.",
    mainEngineeringChallenge:
      "Ordered, idempotent media + AI pipeline per recording under Kafka replay and failure.",
    description:
      "Local-first, AI-native bug reporting platform — screen recording upload, ffmpeg frame extraction, AI-drafted reports, shareable links, and an ordered Kafka pipeline in Go.",
    github: "https://github.com/Brohammad/BugSathi",
    audience:
      "Built for engineering teams that want bug reports with evidence — recording, frames, environment, and an AI draft — without shipping media to a black-box SaaS.",
    longDescription:
      "BugSathi turns a screen recording into a structured bug report: upload to MinIO, extract keyframes with ffmpeg, analyze frames and browser metadata with an OpenAI-compatible provider, and publish a shareable report. The backend is a Go modular monolith split into API and worker binaries, with per-recording Kafka ordering, idempotent consumers, an outbox, DLQ reprocess, JWT refresh rotation, project tenancy, Postgres migrations, and OpenTelemetry/Prometheus/Grafana observability. It runs local-first on Docker Compose or on Kubernetes with Caddy.",
    tech: [
      "Go", "Kafka", "PostgreSQL", "MinIO", "Redis", "ffmpeg",
      "OpenTelemetry", "Prometheus", "Grafana", "Docker", "Kubernetes", "React",
    ],
    difficulty: "Expert",
    status: "in-progress",
    features: [
      "Screen recording upload to MinIO with presigned URLs",
      "Ordered Kafka pipeline: upload → ffmpeg frames → AI analysis → report",
      "AI-drafted summary and reproduction steps behind a provider port",
      "Shareable report links and project/workspace tenancy",
      "JWT auth with refresh rotation, audit logs, and rate limiting",
      "OpenTelemetry traces, Prometheus metrics, and Grafana dashboards",
    ],
    challenges: [
      "Keeping per-recording pipeline stages ordered and idempotent under replay",
      "Grounding AI reports in frames without inventing untriggered actions",
      "Running the full media + AI stack local-first on one machine",
    ],
    lessons: [
      "ADRs and runbooks make a solo systems project debuggable",
      "Provider ports keep AI tests offline and deterministic",
      "Vision evals need uncertainty fields, not just higher scores",
    ],
    metrics: [...bugSathiMetrics.display, "28 REST endpoints (per project docs)"],
    scale: ["8 Kafka topics", "10 Postgres migrations", "API + worker binaries"],
    engineeringChallenges: [
      "Per-recording ordering via Kafka partition keys",
      "Idempotent replay with an outbox and DLQ reprocess path",
      "Media processing isolated in an ffmpeg worker",
    ],
      architecture:
      "Go modular monolith with separate API and worker binaries. PostgreSQL for metadata, MinIO for recordings and frames, Redis for rate limiting, Kafka/Redpanda for the ordered event pipeline, and OpenTelemetry/Prometheus/Grafana for observability. Docker Compose locally; Kubernetes manifests and Caddy for production.",
  },
  {
    id: "signalmine",
    title: "SignalMine",
    tier: "flagship",
    problemStatement:
      "Unstructured forum and issue threads hide product and market signals; manual synthesis is not reproducible.",
    contribution:
      "Pipeline design, collectors, normalizer, schema-bound extraction, evaluation harness, and FastAPI service.",
    mainEngineeringChallenge:
      "Reliable LLM extraction with JSON Schema contracts and golden-dataset regression scoring.",
    description:
      "Source-agnostic pipeline turning GitHub and Reddit discussions into schema-validated market intelligence.",
    longDescription:
      "SignalMine (repository: PainMiningEngine) implements collector → deterministic normalization → Instructor-backed extraction → validation. Typer CLI exposes stage-by-stage JSON workflows; FastAPI adds persistence, health, and Prometheus metrics when Postgres is configured.",
    github: "https://github.com/Brohammad/PainMiningEngine",
    tech: [
      "Python", "FastAPI", "Typer", "PostgreSQL", "SQLAlchemy", "Alembic",
      "OpenTelemetry", "Prometheus", "JSON Schema", "Instructor", "PRAW",
    ],
    difficulty: "Expert",
    status: "completed",
    features: [
      "GitHub and file collectors with URL routing",
      "Deterministic markdown normalization",
      "Schema-constrained Complaint extraction",
      "Golden-dataset evaluation reports",
      "Insert-only persistence and duplicate detection",
    ],
    challenges: [
      "GitHub rate limits and collector retries",
      "Extraction validation retries without silent drift",
      "Keeping CLI and API orchestration aligned",
    ],
    lessons: [
      "Normalize before LLM calls so diffs are attributable",
      "Golden datasets beat single accuracy numbers for extraction work",
    ],
    metrics: [...signalMineMetrics.display],
    scale: ["4 JSON schemas", "Synchronous pipeline + optional API"],
    engineeringChallenges: [
      "Versioned prompt policy separate from code",
      "Field-level golden scoring",
    ],
    architecture:
      "Python package boundaries under backend/app: collectors, normalizer, extractor, validator, pipeline, storage, API. Contracts in schemas/; product constraints in docs/.",
  },
  {
    id: "paint-intelligence",
    title: "PaintCRM",
    tier: "supporting",
    problemStatement:
      "Dealers need sub-minute wall previews and lead capture on unreliable shop-floor networks.",
    contribution: "Full-stack product build — offline-first UX, Express API, ledger integrity, deploy.",
    mainEngineeringChallenge:
      "Offline-first CRM sync with server-authoritative financial data.",
    description:
      "Full-stack paint dealer platform — upload a room photo, preview 63 catalog shades on walls in under 60 seconds, capture leads, and run quotes, orders, inventory, and receivables offline-first.",
    demo: "https://paintcrm.brohammad.tech",
    github: "https://github.com/Brohammad/PaintCRM",
    audience:
      "Built for paint dealers on the shop floor — preview 63 real catalog shades on a customer's wall in under 60 seconds, capture leads, and run quotes even without reliable internet.",
    longDescription:
      "PaintCRM unifies visualization, lead capture, and commercial workflows for paint dealers. Upload a room photo, auto-detect walls with heuristic segmentation (optional TensorFlow.js DeepLab assist), apply real Asian Paints and Dulux shades with HSL recolor, then convert leads into quotes, orders, inventory movements, and an append-only credit ledger — all offline-first for shop-floor demos with best-effort sync when online.",
    tech: [
      "Node.js", "Express", "PostgreSQL", "Vanilla JS", "Vite",
      "Canvas 2D", "TensorFlow.js", "Docker", "Vitest", "Jest",
    ],
    difficulty: "Expert",
    status: "completed",
    features: [
      "Room photo → wall masking → live shade preview in under 60 seconds",
      "63-shade catalog with cost estimator and before/after compare",
      "Multi-tenant Express API with JWT + rotating refresh tokens",
      "Quotes, orders, inventory, and append-only credit ledger",
      "Offline-first UX with localStorage and transparent token refresh",
      "200+ automated tests (Vitest + Jest/Supertest) with CI/CD",
    ],
    challenges: [
      "Wall masking without a server — region-growing, scoring, edge feathering",
      "Offline-first sync with server as source of truth for CRM data",
      "Server-side quote/order totals and append-only ledger integrity",
    ],
    lessons: [
      "Extracting tested modules from a 4,500-line monolith without breaking offline flows",
      "Financial data must never trust client-computed totals",
      "Shop-floor demos need zero-login, zero-network paths first",
    ],
    metrics: [...paintCrmMetrics.display, "Multi-tenant Express API"],
    scale: ["<60 sec to preview", "63 catalog shades", "12 route modules"],
    engineeringChallenges: [
      "Heuristic wall segmentation with optional ML fusion in the browser",
      "Append-only ledger with compensating reversals on order delete",
    ],
    architecture:
      "Vite offline-first frontend with Canvas engine and tested ES modules. Express API with 12 route modules, PostgreSQL multi-tenant store, optional Redis rate limiting. Docker + GitHub Actions CI, deployed on Render/Fly.io.",
  },
  {
    id: "arden",
    title: "Arden",
    tier: "upcoming",
    problemStatement:
      "Teams need a scheduler that survives worker crashes without double execution or lost jobs.",
    contribution: "Planned — distributed job engine in Go (design phase; not yet implemented).",
    mainEngineeringChallenge:
      "Postgres as source of truth with leasing, fencing tokens, heartbeats, and fair retry/DLQ semantics.",
    description:
      "Upcoming distributed job scheduler and execution engine in Go — Postgres-backed leasing, fencing, and observability.",
    longDescription:
      "Arden is in design. Intended scope: distributed scheduling, job leasing with fencing tokens, worker heartbeats, crash recovery, retry and DLQ policies, delayed/recurring jobs, fair scheduling, observability, fault injection, and benchmarks. No implementation evidence yet — follow GitHub when the repo ships.",
    github: undefined,
    tech: ["Go", "PostgreSQL", "OpenTelemetry"],
    difficulty: "Expert",
    status: "coming-soon",
    features: [
      "Design: Postgres as scheduler source of truth",
      "Design: leasing, fencing tokens, worker heartbeats",
      "Design: delayed jobs, DLQ, fair scheduling",
    ],
    challenges: ["Correctness under crash and partition — implementation not started"],
    lessons: [],
    metrics: ["Status: upcoming · not production-ready"],
    architecture: "Planned architecture will be documented in-repo before this site claims components exist.",
  },
  {
    id: "alphaedge",
    title: "AlphaEdge",
    tier: "experiment",
    problemStatement: "Quant research toolchain experiment — personal learning and integration practice.",
    contribution: "Solo build — strategy DSL, backtesting, and broker integration exploration.",
    mainEngineeringChallenge: "Bounded contexts across backtesting, execution, and market data ingestion.",
    description:
      "Quantitative trading research and execution platform — strategy DSL, async backtesting, paper/live trading via Alpaca, portfolio risk, and OpenAI-powered insights.",
    longDescription:
      "AlphaEdge is a web-based quantitative trading terminal that takes you from idea to execution in one place. Users author strategies in a custom YAML DSL or Python, validate and backtest on historical data, optimize parameters with Celery workers, deploy to paper trading, and optionally route orders to Alpaca — with LLM-generated strategy explanations and performance reports.",
    tech: [
      "Python", "FastAPI", "PostgreSQL", "Redis", "Celery",
      "React", "TypeScript", "C++", "Docker", "Stripe", "Alpaca", "OpenAI",
    ],
    github: "https://github.com/Brohammad/Apha-Edge",
    audience:
      "Built for indie quant researchers who want strategy authoring, backtesting, optimization, and paper trading in one workspace — without juggling notebooks, spreadsheets, and broker APIs.",
    difficulty: "Expert",
    status: "completed",
    features: [
      "YAML strategy DSL with compile-time validation and Python runtime",
      "Event-driven backtesting with Sharpe, drawdown, and win-rate metrics",
      "Celery-based parameter optimization (grid search, Optuna)",
      "Paper and Alpaca broker execution with encrypted credentials",
      "React trading terminal with live ticker and portfolio dashboards",
      "OpenAI-powered strategy explanations with provider abstraction",
    ],
    challenges: [
      "DDD-style bounded contexts across identity, strategies, backtesting, and execution",
      "Optional C++ backtest engine via pybind11 for performance-critical paths",
      "Sync API for CRUD vs async workers for backtests, ingestion, and orders",
    ],
    lessons: [
      "Modular monolith with domain → application → infrastructure layers scales cleanly",
      "Provider abstraction for LLM insights enables offline mock mode in CI",
      "End-to-end Playwright coverage catches full user journeys early",
    ],
    metrics: [
      "80+ unit and integration tests",
      "Multi-symbol backtests with slippage and commissions",
      "OAuth + RBAC-secured REST APIs",
    ],
    scale: ["6 bounded contexts", "Celery async workers", "Stripe marketplace"],
    engineeringChallenges: [
      "Bar-by-bar simulation with equity curve and trade log accuracy",
      "Market data provider fallback chain (Polygon → Alpha Vantage → DB)",
    ],
    architecture:
      "FastAPI modular monolith with DDD bounded contexts. PostgreSQL source of truth, Redis for cache and Celery broker. React 19 SPA with TanStack Query. Docker Compose local stack, GitHub Actions CI, Nginx reverse proxy.",
  },
  {
    id: "distributed-kv",
    title: "Distributed Key-Value Store",
    tier: "experiment",
    problemStatement: "Learn Raft consensus and linearizable replication by building, not reading only.",
    contribution: "Go implementation study — leader election, log replication, snapshots.",
    mainEngineeringChallenge: "Correctness at partition boundaries and fault-injection testing.",
    description:
      "Fault-tolerant distributed store implementing Raft consensus from scratch — linearizable reads/writes with automatic leader election and failover.",
    longDescription:
      "A from-scratch implementation of the Raft consensus algorithm in Go. Supports linearizable reads and writes across a multi-node cluster with snapshotting, log compaction, and gRPC inter-node communication.",
    tech: ["Go", "Raft", "gRPC", "Docker", "Protocol Buffers"],
    difficulty: "Expert",
    status: "in-progress",
    audience:
      "Systems learning project — Raft consensus from scratch to understand linearizable reads/writes, leader election, and fault tolerance firsthand.",
    features: [
      "Raft leader election and log replication",
      "Linearizable reads and writes",
      "Snapshotting for log compaction",
      "Automatic leader failover",
      "gRPC inter-node communication",
    ],
    challenges: [
      "Correct Raft term management",
      "Handling network partitions gracefully",
    ],
    lessons: [
      "Distributed systems testing requires fault injection",
      "Consensus protocols are subtle at the boundary cases",
    ],
    metrics: [
      "Raft consensus",
      "Linearizable guarantees",
      "3-node cluster",
    ],
    scale: ["3-node cluster", "Log compaction", "Automatic failover"],
    engineeringChallenges: [
      "Correct Raft term management at partition boundaries",
      "Fault injection for distributed testing",
    ],
    architecture: "Multi-node cluster over gRPC with Raft state machine per node.",
  },
];

export const experiences: Experience[] = [
  {
    id: "voxforge",
    company: "VoxForge",
    role: "Founder / Principal Engineer",
    duration: "2025 — Present",
    startDate: "2025-06",
    endDate: null,
    location: "Bengaluru, India",
    type: "contract",
    current: false,
    responsibilities: [
      "Solo founder — owned architecture, implementation, deployment, and documentation end-to-end",
      "Scoped and prioritized features for pilot customers, recruiters, and engineering evaluators",
      "Released open source to offer Vapi-class capabilities without vendor lock-in",
    ],
    technologies: [
      "Python", "FastAPI", "LangGraph", "PostgreSQL", "pgvector", "Redis",
      "LiveKit", "Docker", "NGINX", "OpenTelemetry", "Playwright",
    ],
    achievements: [
      "Founded VoxForge and shipped the full platform solo — from system design through production HTTPS",
      "Automated deploy pipeline: fresh Ubuntu VPS to HTTPS in one command with Docker, NGINX, and Certbot",
      "Published v1.0.0-rc.1 open source with ADRs, runbooks, and incident response documentation",
      "Set CI quality gates: 354+ tests, Playwright UI coverage, dependency audit, and secret scanning",
    ],
    impact: [
      "Engineers can evaluate the voice pipeline from the repo, docs, and 354+ tests",
      "Engineering evaluators can inspect architecture docs and 354+ automated tests on GitHub",
      "Open-source release removes per-minute SaaS fees and vendor lock-in for early adopters",
    ],
    architecture:
      "Solo-designed modular monolith with Clean Architecture boundaries. Owned transport unification, agent orchestration, deploy stack, and observability end-to-end.",
    scale: [
      "Solo founder · end-to-end ownership",
      "Open source · v1.0.0-rc.1",
      "Self-hostable · one-command deploy",
    ],
    decisions: [
      "Scoped as modular monolith to ship pilots faster without a team",
      "Prioritized operator trust — eval, replay, handoff — over demo-only features",
      "Open-sourced to lower adoption barrier for pilot customers and contributors",
    ],
  },
  {
    id: "pwc",
    company: "PwC",
    role: "Associate Software Engineer",
    duration: "2025 — Present",
    startDate: "2025-01",
    endDate: null,
    location: "Bengaluru, India",
    type: "full-time",
    current: true,
    responsibilities: [
      "Building an agentic deal platform for an enterprise banking client on async microservices",
      "Designing NLP extraction and ML classification pipelines over deal documents and chat",
      "Shipping the APIs and operational tooling the sales desk uses daily",
    ],
    technologies: [
      "Python", "FastAPI", "LangChain", "PostgreSQL", "Azure", "Docker", "Node.js",
    ],
    achievements: [
      "Shipped an end-to-end agentic deal platform that replaced a manual workflow for 25 salespeople",
      "Cut irrelevant blotter entries ~40% with an ML deal-likelihood classifier",
      "Improved downstream extraction quality 30%+ with a normalized chat-ingestion pipeline",
    ],
    impact: [
      "~50 deals/day processed end to end in under 60 seconds",
      "Zero downtime on the blotter API and live potlist for 25 concurrent users",
      "~2 hours/day saved in status checks; per-call eval logging catches extraction drift",
    ],
    architecture:
      "Async Python microservices on FastAPI with a prompt-driven NLP extraction layer, an ML classifier for deal likelihood, and PostgreSQL behind a blotter API. Deployed on Azure.",
    scale: [
      "~50 deals/day",
      "25 salespeople",
      "Zero-downtime blotter API",
    ],
    decisions: [
      "Async services over one monolith so ingestion stays independent of scoring",
      "Evaluation logging at extraction time instead of offline batch review",
      "Typed contracts between ingestion, extraction, and classification stages",
    ],
  },
];

export const education = {
  institution: "National Institute of Technology Calicut",
  degree: "B.Tech",
  field: "Electrical and Electronics Engineering",
  year: "2025",
};

export const certifications: Certification[] = [
  {
    id: "github-copilot",
    name: "GitHub Copilot Certification",
    issuer: "GitHub",
    placeholder: true,
  },
  {
    id: "azure-ai",
    name: "Microsoft Azure AI Fundamentals",
    issuer: "Microsoft",
    placeholder: true,
  },
  {
    id: "aws-ai",
    name: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    placeholder: true,
  },
  {
    id: "google-genai",
    name: "Google Generative AI Fundamentals",
    issuer: "Google",
    placeholder: true,
  },
];

export const blogPosts: BlogPost[] = [];

export const blogTopics = [
  "Building a real-time voice AI infrastructure platform",
  "Designing event-driven services in Go and Kafka",
  "Building reliable LLM extraction pipelines",
  "Distributed systems correctness: leases, fencing, and recovery",
  "Implementing observability in production applications",
  "RAG in production: chunking and grounding tradeoffs",
  "Per-turn evaluation as a deployment gate for voice agents",
];

export const nowPage = {
  lastUpdated: "July 2026",
  currentObsession:
    "Unifying voice transport layers without duplicating business logic — one pipeline for WebSocket, REST, and LiveKit.",
  favoriteProblem:
    "Closing the gap between voice demos and production operability: evaluation, replay, and human handoff.",
  building: [
    "VoxForge v1.0 — open-source voice AI infrastructure",
    "Distributed Key-Value Store — Raft consensus in Go",
    "Per-turn evaluation suites as CI deployment gates",
  ],
  reading: [
    "Designing Data-Intensive Applications — Kleppmann",
    "VoxForge ADRs and incident response runbooks",
  ],
  exploring: [
    "LiveKit WebRTC worker integration patterns",
    "OpenTelemetry instrumentation for voice pipelines",
    "MCP tool routing in production agents",
    "Inference optimization for real-time STT/TTS",
  ],
  research: [
    "Mock provider strategies for zero-API-key CI and demos",
    "pgvector retrieval tuning for voice agent grounding",
    "Failure-mode testing for WebSocket lifecycle and handoff flows",
  ],
  nextProjects: [
    "Event-driven notification service with Kafka",
    "API gateway with rate limiting and observability",
  ],
  goals: [
    "Ship fewer systems, each production-grade",
    "Grow VoxForge pilot adoption and contributor base",
    "Publish technical writing on voice AI infrastructure",
  ],
  ideas: [
    "Signed replay links as regression fixtures in CI",
    "Policy presets as operator-configurable agent guardrails",
    "Eval suites tied to CI, not slide decks",
  ],
  technicalNotes: [
    "Single VoicePipelineService eliminated transport-specific test duplication",
    "Mock providers complete voice pipeline in ~100ms without API keys",
    "Modular monolith shipped faster than planned microservices split",
  ],
};

export { projectCaseStudies };

export const engineeringQuotes = [
  "Simplicity is prerequisite for reliability. — Dijkstra",
  "Make it work, make it right, make it fast. — Kent Beck",
  "The only way to go fast is to go well. — Robert C. Martin",
];

export const usesPage = {
  hardware: [
    { name: "MacBook Air", description: "Primary development machine" },
  ],
  editor: [
    { name: "Cursor", description: "AI-first code editor" },
    { name: "VS Code", description: "Secondary editor" },
  ],
  terminal: [
    { name: "Warp", description: "Modern AI-powered terminal" },
    { name: "zsh + Oh My Zsh", description: "Shell config" },
  ],
  aiTools: [
    { name: "Cursor", description: "AI-first coding" },
    { name: "Claude", description: "Technical reasoning and writing" },
    { name: "ChatGPT", description: "General purpose" },
    { name: "Perplexity", description: "Research and documentation" },
  ],
  devTools: [
    { name: "Docker", description: "Containerization" },
    { name: "Postman", description: "API testing" },
    { name: "TablePlus", description: "Database GUI" },
    { name: "GitHub", description: "Version control" },
  ],
};

export const techStack = [
  "Python", "FastAPI", "LangGraph", "LiveKit", "PostgreSQL", "pgvector",
  "Redis", "Docker", "TypeScript", "Next.js", "Azure", "OpenTelemetry",
];

export const stats_simple = [
  { label: "Projects Built", value: 12, suffix: "+" },
  { label: "Technologies", value: 40, suffix: "+" },
  { label: "AI Systems Shipped", value: 3 },
  { label: "Years Engineering", value: 2, suffix: "+" },
];
