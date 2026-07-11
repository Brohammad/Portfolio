import type { Project, Experience, SkillGroup, Certification, BlogPost, Stat, ProjectCaseStudy } from "@/types";

export const siteConfig = {
  name: "Brohammad",
  title: "Brohammad | Backend & AI Engineer · Founding Engineer",
  description:
    "Backend and AI engineer who ships production systems solo. Built VoxForge — open-source voice AI in production — plus enterprise AI at PwC. Open to founding engineer and early technical co-founder roles.",
  url: "https://brohammad.tech",
  ogImage: "https://brohammad.tech/og.png",
  location: "Bengaluru, Karnataka, India",
  role: "Associate Consultant @ PwC",
  tagline: "Founding engineer energy. Production discipline.",
  headline: "I ship production systems solo — from architecture to HTTPS.",
  links: {
    github: "https://github.com/Brohammad",
    linkedin: "https://www.linkedin.com/in/aabid-mohamed-a-b22a02229/",
    email: "aabidmohamed2003@gmail.com",
    resume: "/resume.pdf",
  },
  lastUpdated: "July 2026",
  builtWith: "Next.js · TypeScript · Tailwind CSS",
  voxforge: {
    site: "https://voxforge.brohammad.tech",
    demo: "https://voxforge.brohammad.tech/demo",
    apiDocs: "https://voxforge.brohammad.tech/api/v1/docs",
    repo: "https://github.com/Brohammad/VoxFauge",
  },
};

export const foundingEngineer = {
  why: [
    "I want to own problems end-to-end — architecture, implementation, deploy, and ops — not hand off to a platform team.",
    "Enterprise work taught me how production AI survives real load; I want that discipline at startup speed.",
    "I'm looking for a founding engineer or early co-founder role where shipping beats process.",
  ],
  openTo:
    "Open to co-founder conversations and early founding engineer roles — especially voice/AI infra. VoxForge is built in public so founders and engineers can evaluate how I work before we talk. Just shipped; no traction metrics yet.",
  contactBlurb:
    "If you're a founder building voice agents, AI infra, or developer tools — or hiring a founding engineer who ships solo — I'd like to hear from you.",
};

export const aboutIntro = [
  {
    label: "Who I am",
    text: "Backend and AI engineer. By day, production systems at PwC. On my own time, I ship full platforms solo — most recently VoxForge, a voice AI stack live in production.",
  },
  {
    label: "What I build",
    text: "Production systems you can demo, deploy, and inspect — not slide decks. See Projects for the full stack; VoxForge is the latest and lives at voxforge.brohammad.tech.",
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
    description:
      "Open-source voice AI infrastructure platform with unified pipeline, RAG, evaluation, replay, and one-command HTTPS deployment — live at voxforge.brohammad.tech.",
    demo: "https://voxforge.brohammad.tech/demo",
    caseStudyUrl: "https://voxforge.brohammad.tech",
    github: "https://github.com/Brohammad/VoxFauge",
    audience:
      "Built for teams evaluating self-hosted voice AI — try the live demo or read the repo without a sales call. Just shipped; growing from here.",
    longDescription:
      "VoxForge is an open-source voice AI infrastructure platform for building and operating enterprise voice agents. Most voice AI projects stop at an LLM wrapper; VoxForge ships the full stack in one deploy: WebSocket, REST, and LiveKit WebRTC unified through VoicePipelineService; LangGraph orchestration; pgvector RAG with citation grounding; MCP tools; per-turn evaluation; session replay; human handoff; SAML SSO; and an operator dashboard. Production deployment is automated via ./deploy.sh init on Ubuntu 24.04 with Let's Encrypt. CI enforces linting, dependency audit, secret scanning, 70% coverage, and Playwright browser tests. Try the live demo at voxforge.brohammad.tech or inspect 354+ tests and ADRs on GitHub.",
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
      "Live production deployment with HTTPS and smoke-tested endpoints",
      "v1.0.0-rc.1 released on GitHub with 81% test coverage and green CI",
      "Public demo completes voice pipeline in ~100ms with mock providers",
      "Open-source alternative to managed voice SaaS — deployable in 15 minutes",
    ],
    metrics: [
      "Live at voxforge.brohammad.tech",
      "354+ automated tests · 81% coverage",
      "v1.0.0-rc.1 · 3 unified transports",
    ],
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
    id: "paint-intelligence",
    title: "PaintCRM",
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
    metrics: [
      "Live at paintcrm.brohammad.tech",
      "200+ automated tests",
      "40+ API endpoints",
    ],
    scale: ["<60 sec to preview", "63 catalog shades", "12 route modules"],
    engineeringChallenges: [
      "Heuristic wall segmentation with optional ML fusion in the browser",
      "Append-only ledger with compensating reversals on order delete",
    ],
    architecture:
      "Vite offline-first frontend with Canvas engine and tested ES modules. Express API with 12 route modules, PostgreSQL multi-tenant store, optional Redis rate limiting. Docker + GitHub Actions CI, deployed on Render/Fly.io.",
  },
  {
    id: "alphaedge",
    title: "AlphaEdge",
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
    id: "renewai",
    title: "RenewAI",
    description:
      "Multi-agent platform that automates insurance renewals for Fortune 500 banking clients — orchestrating policy analysis, risk scoring, and client outreach at scale.",
    longDescription:
      "Built for a Fortune 500 banking client, RenewAI replaces manual renewal workflows with a production multi-agent system. LangGraph orchestrates specialized agents for document extraction, risk assessment, and client communication — with full audit trails and REST APIs into legacy banking infrastructure.",
    tech: ["Python", "LangGraph", "LangChain", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    difficulty: "Expert",
    status: "completed",
    github: "https://github.com/Brohammad/InsuranceAI",
    features: [
      "Multi-agent orchestration with LangGraph state machines",
      "Automated policy document extraction and analysis",
      "Risk scoring engine with configurable thresholds",
      "Parallel agent execution for high throughput",
      "Audit trail for all agent decisions",
      "REST API for integration with existing banking systems",
    ],
    challenges: [
      "Designing reliable agent handoffs without state loss",
      "Handling LLM inconsistencies in production with eval pipelines",
      "Integrating with legacy banking infrastructure",
    ],
    lessons: [
      "LangGraph state machines are critical for reliable agent flows",
      "LLM eval pipelines are non-negotiable before production",
      "Streaming responses dramatically improve UX in AI applications",
    ],
    metrics: [
      "Fortune 500 banking client",
      "Multi-agent architecture",
      "Production on Azure",
    ],
    scale: ["3 specialized agents", "Full audit trail", "Legacy API integration"],
    engineeringChallenges: [
      "Reliable agent handoffs without state loss",
      "LLM eval pipelines before production",
    ],
    architecture:
      "FastAPI backend with LangGraph orchestrating specialized agents. PostgreSQL for audit logs. Redis for session state. Deployed on Azure with Docker Compose.",
  },
  {
    id: "fincore",
    title: "FinCore Banking Assistant",
    description:
      "Enterprise AI assistant that automates banking workflows and retrieves financial knowledge using hybrid RAG — handling thousands of production queries daily.",
    longDescription:
      "A production RAG assistant deployed inside a major banking client's operations team. Hybrid semantic + keyword retrieval over regulatory documents, strict hallucination guardrails with source citation, and role-based access for compliance-sensitive content.",
    tech: ["Python", "FastAPI", "LangChain", "OpenAI", "Azure", "PostgreSQL", "Qdrant"],
    difficulty: "Advanced",
    status: "completed",
    github: "https://github.com/Brohammad/bank-fincorp",
    features: [
      "Hybrid semantic + keyword search over banking documents",
      "Strict hallucination guardrails with source citation",
      "Streaming responses with SSE",
      "Role-based access to sensitive document segments",
      "Multi-turn conversation with memory management",
      "Integration with internal banking portals",
    ],
    challenges: [
      "Reducing hallucinations on financial/regulatory content",
      "Managing context window with large policy documents",
      "RBAC on document-level access for compliance",
    ],
    lessons: [
      "Chunking strategy is the single biggest quality lever in RAG",
      "Hybrid search consistently outperforms pure dense retrieval",
      "Guardrails and eval frameworks are essential in finance",
    ],
    metrics: [
      "Enterprise production deployment",
      "Thousands of queries daily",
      "Hybrid retrieval pipeline",
    ],
    scale: ["~5K queries/day", "Document-level RBAC", "SSE streaming"],
    engineeringChallenges: [
      "Hallucination guardrails on regulatory content",
      "Hybrid dense + BM25 retrieval tuning",
    ],
    architecture:
      "FastAPI service with LangChain RAG pipeline. Qdrant vector store with PostgreSQL for metadata. Azure OpenAI for embeddings and generation. Deployed on Azure AKS.",
  },
  {
    id: "distributed-kv",
    title: "Distributed Key-Value Store",
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
      "Recruiters and pilot customers can evaluate voice agents via live demo — no clone required",
      "Engineering evaluators can inspect architecture docs and 354+ automated tests on GitHub",
      "Open-source release removes per-minute SaaS fees and vendor lock-in for early adopters",
    ],
    architecture:
      "Solo-designed modular monolith with Clean Architecture boundaries. Owned transport unification, agent orchestration, deploy stack, and observability end-to-end.",
    scale: [
      "Solo founder · end-to-end ownership",
      "Open source · v1.0.0-rc.1",
      "Live at voxforge.brohammad.tech",
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
    role: "Associate Consultant",
    duration: "2025 — Present",
    startDate: "2025-01",
    endDate: null,
    location: "Bengaluru, India",
    type: "full-time",
    current: true,
    responsibilities: [
      "Building enterprise-grade AI applications for banking clients",
      "Designing and deploying multi-agent AI systems using LangGraph and LangChain",
      "Architecting RAG pipelines with hybrid retrieval for financial document Q&A",
    ],
    technologies: [
      "Python", "FastAPI", "LangChain", "LangGraph", "LlamaIndex",
      "OpenAI", "Azure", "PostgreSQL", "Qdrant", "Docker", "Node.js",
    ],
    achievements: [
      "Shipped 3 production AI systems to enterprise banking clients",
      "Built multi-agent insurance renewal platform reducing manual processing",
      "Deployed RAG assistant handling thousands of queries daily in production",
    ],
    impact: [
      "Reduced manual insurance renewal processing for Fortune 500 banking client",
      "RAG assistant serving ~5K queries/day with source citation and RBAC",
      "Multi-agent platform with full audit trails integrated into legacy banking APIs",
    ],
    architecture:
      "LangGraph-orchestrated agents on FastAPI, hybrid RAG over Qdrant + PostgreSQL, deployed on Azure AKS with Docker and Redis session state.",
    scale: [
      "3 production systems · Fortune 500 clients",
      "~5K daily queries · 99.9% uptime target",
      "12+ agent flows · document-level access control",
    ],
    decisions: [
      "LangGraph state machines over ad-hoc agent chains for reliability",
      "Hybrid retrieval (dense + BM25) over pure vector search for finance docs",
      "Eval pipelines as a deployment gate, not a post-launch afterthought",
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
  "Building reliable multi-agent systems with LangGraph",
  "RAG in production: chunking strategies that actually work",
  "Implementing Raft consensus from scratch in Go",
  "Redis caching patterns for high-throughput APIs",
  "Prompt engineering for structured outputs",
  "System design: building an API gateway from scratch",
  "LLM evaluation pipelines you can't skip in production",
  "Kafka for event-driven backend architectures",
];

export const nowPage = {
  lastUpdated: "July 2026",
  currentObsession:
    "Unifying voice transport layers without duplicating business logic — one pipeline for WebSocket, REST, and LiveKit.",
  favoriteProblem:
    "Closing the gap between voice demos and production operability: evaluation, replay, and human handoff.",
  building: [
    "VoxForge v1.0 — voice AI platform live at voxforge.brohammad.tech",
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

export const projectCaseStudies: ProjectCaseStudy[] = [];

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
