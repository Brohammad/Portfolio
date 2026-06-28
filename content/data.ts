import type { Project, Experience, SkillGroup, Certification, BlogPost, Stat } from "@/types";

export const siteConfig = {
  name: "Brohammad",
  title: "Brohammad | Backend & AI Engineer",
  description:
    "Backend and AI Engineer at PwC building enterprise-grade intelligent systems. Specializing in distributed systems, LLM applications, and production-grade backend infrastructure.",
  url: "https://brohammad.tech",
  ogImage: "https://brohammad.tech/og.png",
  location: "Bengaluru, Karnataka, India",
  role: "Associate Consultant @ PwC",
  tagline: "Building intelligent systems that scale.",
  links: {
    github: "https://github.com/Brohammad",
    linkedin: "https://www.linkedin.com/in/aabid-mohamed-a-b22a02229/",
    email: "aabidmohamed2003@gmail.com",
    resume: "/resume.pdf",
  },
  lastUpdated: "June 2026",
  builtWith: "Next.js · TypeScript · Tailwind CSS",
};

export const stats: Stat[] = [
  { label: "Production Systems", subtitle: "Enterprise deployments", value: 3 },
  { label: "Daily API Requests", subtitle: "RAG + agent pipelines", value: 5, suffix: "K+", prefix: "~" },
  { label: "Open Source Commits", subtitle: "GitHub contributions", value: 600, suffix: "+" },
  { label: "Languages", subtitle: "Production proficiency", value: 6 },
  { label: "Years Building", subtitle: "Professional engineering", value: 2, suffix: "+" },
];

export const heroMetrics = [
  { label: "Systems in prod", value: "3", detail: "Fortune 500 banking" },
  { label: "Uptime target", value: "99.9%", detail: "Azure · AKS" },
  { label: "Query volume", value: "~5K/day", detail: "Hybrid RAG" },
  { label: "Agents orchestrated", value: "12+", detail: "LangGraph flows" },
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
      { name: "Kubernetes" },
      { name: "GitHub Actions" },
      { name: "Linux" },
      { name: "Prometheus" },
      { name: "Grafana" },
    ],
  },
  {
    category: "AI Platform",
    icon: "Brain",
    description: "LLM orchestration, RAG, and evaluation pipelines",
    skills: [
      { name: "LangChain" },
      { name: "LangGraph" },
      { name: "LlamaIndex" },
      { name: "OpenAI APIs" },
      { name: "Gemini" },
      { name: "RAG" },
      { name: "LLM Evaluation" },
      { name: "Multi-Agent Systems" },
      { name: "MCP" },
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    description: "APIs, services, and event-driven architecture",
    skills: [
      { name: "Python" },
      { name: "TypeScript" },
      { name: "Node.js" },
      { name: "FastAPI" },
      { name: "REST APIs" },
      { name: "gRPC" },
      { name: "WebSockets" },
      { name: "SSE" },
      { name: "Kafka" },
      { name: "Microservices" },
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
      { name: "MongoDB" },
      { name: "Qdrant" },
      { name: "Neo4j" },
      { name: "ChromaDB" },
    ],
  },
  {
    category: "Cloud",
    icon: "Database",
    description: "Data stores, caching, and retrieval layers",
    skills: [
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "Qdrant" },
      { name: "SQLite" },
      { name: "JWT / Auth" },
    ],
  },
  {
    category: "Developer Experience",
    icon: "Monitor",
    description: "Interfaces and tooling for shipping faster",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TailwindCSS" },
      { name: "Prompt Engineering" },
      { name: "Java" },
      { name: "C++" },
    ],
  },
];

export const projects: Project[] = [
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
    id: "paint-intelligence",
    title: "Paint Intelligence Platform",
    description:
      "AI-first CRM that predicts dealer churn, automates follow-ups, and surfaces growth opportunities across a national paint distribution network.",
    longDescription:
      "Production CRM platform combining structured dealer data with LLM-driven insight generation. Churn prediction, automated follow-up recommendations, and natural language queries over sales data — integrated with mobile CRM via REST APIs.",
    tech: ["Python", "Node.js", "LangChain", "OpenAI", "MongoDB", "React", "Docker"],
    difficulty: "Advanced",
    status: "completed",
    features: [
      "Dealer churn prediction with ML scoring",
      "Automated follow-up generation with LLM",
      "Sales trend analysis and anomaly detection",
      "Natural language query interface over CRM data",
      "Dashboard with AI-generated weekly insights",
      "REST API for mobile CRM app integration",
    ],
    challenges: [
      "Generating trustworthy LLM insights from structured CRM data",
      "Low-latency responses for mobile app integration",
      "Handling sparse and inconsistent dealer data",
    ],
    lessons: [
      "Structured output parsing is critical for LLM-to-database workflows",
      "Caching LLM responses reduces cost by 60%+ for repeated queries",
      "Business users need confidence scores, not just AI answers",
    ],
    metrics: [
      "Production CRM deployment",
      "National dealer network",
      "AI-generated insights",
    ],
    scale: ["National dealer network", "Mobile API integration", "60%+ cache hit rate"],
    engineeringChallenges: [
      "Structured LLM output parsing for CRM workflows",
      "Low-latency mobile API responses",
    ],
    architecture:
      "Node.js REST API + Python AI service. MongoDB for CRM data. LangChain for insight generation. React dashboard. Deployed with Docker on AWS.",
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
    id: "pwc",
    company: "PwC",
    role: "Associate Consultant",
    duration: "2024 — Present",
    startDate: "2024-01",
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
  lastUpdated: "June 2026",
  currentObsession: "Making multi-agent handoffs reliable without losing state in production.",
  favoriteProblem: "Balancing retrieval recall and hallucination rate on regulatory documents.",
  building: [
    "Distributed Key-Value Store — Raft consensus in Go",
    "AI RAG platform with eval pipelines as deployment gates",
    "Authentication service — JWT, refresh rotation, RBAC",
  ],
  reading: [
    "Designing Data-Intensive Applications — Kleppmann",
    "Computer Systems: A Programmer's Perspective — Bryant & O'Hallaron",
  ],
  exploring: [
    "CRDTs and eventual consistency",
    "Kubernetes production patterns",
    "OpenTelemetry instrumentation",
    "Inference optimization for LLM serving",
  ],
  research: [
    "Chunking strategy benchmarks for banking policy docs",
    "Fault injection testing for Raft cluster behavior",
    "Hybrid dense + BM25 retrieval tuning",
  ],
  nextProjects: [
    "Event-driven notification service with Kafka",
    "API gateway with rate limiting and observability",
  ],
  goals: [
    "Ship fewer systems, each production-grade",
    "Publish technical writing on backend + AI engineering",
    "Deepen distributed systems fundamentals",
  ],
  ideas: [
    "Structured output schemas as pre-deployment gates",
    "Redis dedup for repeated RAG queries in enterprise",
    "Eval suites tied to CI, not slide decks",
  ],
  technicalNotes: [
    "512-token chunks outperformed 256 on policy renewal docs",
    "LangGraph checkpoints prevented state loss in agent handoffs",
    "Hybrid retrieval beat pure vector search on finance Q&A",
  ],
};

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
  "TypeScript", "Python", "Node.js", "FastAPI",
  "LangChain", "React", "PostgreSQL", "MongoDB",
  "Redis", "Docker", "AWS", "Azure",
];

export const stats_simple = [
  { label: "Projects Built", value: 12, suffix: "+" },
  { label: "Technologies", value: 40, suffix: "+" },
  { label: "AI Systems Shipped", value: 3 },
  { label: "Years Engineering", value: 2, suffix: "+" },
];
