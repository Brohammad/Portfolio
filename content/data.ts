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
    email: "hello@brohammad.tech",
    resume: "/resume.pdf",
  },
};

export const stats: Stat[] = [
  { label: "Projects Built", value: 12, suffix: "+" },
  { label: "Technologies", value: 40, suffix: "+" },
  { label: "GitHub Commits", value: 600, suffix: "+" },
  { label: "Years Engineering", value: 2, suffix: "+" },
  { label: "AI Systems Shipped", value: 3, suffix: "" },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    icon: "Code2",
    skills: [
      { name: "Python" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Java" },
      { name: "C++" },
      { name: "SQL" },
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "FastAPI" },
      { name: "REST APIs" },
      { name: "gRPC" },
      { name: "WebSockets" },
      { name: "SSE" },
      { name: "JWT / Auth" },
      { name: "Microservices" },
      { name: "Kafka" },
    ],
  },
  {
    category: "AI & GenAI",
    icon: "Brain",
    skills: [
      { name: "LangChain" },
      { name: "LangGraph" },
      { name: "LlamaIndex" },
      { name: "OpenAI APIs" },
      { name: "Gemini" },
      { name: "RAG" },
      { name: "Prompt Engineering" },
      { name: "LLM Evaluation" },
      { name: "Multi-Agent Systems" },
      { name: "MCP" },
    ],
  },
  {
    category: "Databases",
    icon: "Database",
    skills: [
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "ChromaDB" },
      { name: "Qdrant" },
      { name: "Neo4j" },
      { name: "SQLite" },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: "Cloud",
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
    category: "Frontend",
    icon: "Monitor",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Angular" },
      { name: "TailwindCSS" },
    ],
  },
];

export const projects: Project[] = [
  {
    id: "renewai",
    title: "RenewAI",
    description:
      "Multi-agent insurance renewal platform that autonomously handles policy renewals, risk assessment, and client communication at enterprise scale.",
    longDescription:
      "An enterprise-grade multi-agent AI platform built for insurance renewal workflows. The system uses LangGraph to orchestrate specialized agents for policy analysis, risk scoring, document extraction, and client outreach — reducing manual processing time significantly.",
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
      "Multi-agent orchestration",
      "Enterprise production deployment",
      "Banking client rollout",
    ],
    architecture:
      "FastAPI backend with LangGraph orchestrating specialized agents. PostgreSQL for audit logs. Redis for session state. Deployed on Azure with Docker Compose.",
  },
  {
    id: "fincore",
    title: "FinCore Banking Assistant",
    description:
      "Enterprise conversational AI assistant for banking operations — answering policy queries, summarizing documents, and automating routine workflows.",
    longDescription:
      "A production RAG-based conversational assistant deployed inside a major banking client's operations. Handles policy queries, regulatory document Q&A, and internal workflow automation. Built with a hybrid search pipeline and strict hallucination guardrails.",
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
      "Enterprise banking deployment",
      "Thousands of queries/day",
      "Hybrid retrieval pipeline",
    ],
    architecture:
      "FastAPI service with LangChain RAG pipeline. Qdrant vector store with PostgreSQL for metadata. Azure OpenAI for embeddings and generation. Deployed on Azure AKS.",
  },
  {
    id: "paint-intelligence",
    title: "Paint Intelligence Platform",
    description:
      "AI-powered Dealer CRM that surfaces actionable insights, automates follow-ups, and predicts churn for paint distribution networks.",
    longDescription:
      "An AI-first CRM platform for a paint distribution network. Analyzes dealer purchase patterns, generates automated follow-up recommendations, predicts churn risk, and surfaces growth opportunities — all powered by LLM-driven insight generation.",
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
      "AI-generated insights",
      "Dealer network rollout",
    ],
    architecture:
      "Node.js REST API + Python AI service. MongoDB for CRM data. LangChain for insight generation. React dashboard. Deployed with Docker on AWS.",
  },
  {
    id: "url-shortener",
    title: "Production URL Shortener",
    description:
      "High-throughput URL shortening service with analytics, custom slugs, rate limiting, and sub-5ms redirect latency.",
    longDescription:
      "A production-grade URL shortener built to handle high request volumes. Features include custom slug generation, click analytics, Redis caching for fast redirects, rate limiting, QR code generation, and expirable links.",
    tech: ["Node.js", "Express", "Redis", "PostgreSQL", "Docker"],
    difficulty: "Advanced",
    status: "in-progress",
    features: [
      "Custom short slugs with collision detection",
      "Redis-backed caching for sub-5ms redirect latency",
      "Click analytics with geographic breakdown",
      "Rate limiting per API key",
      "QR code generation",
      "Link expiration with TTL",
    ],
    challenges: [
      "Collision-free slug generation at scale",
      "Consistent analytics under high concurrent load",
    ],
    lessons: [
      "Redis TTL strategies for caching and expiration",
      "Horizontal scaling patterns for stateless services",
    ],
    metrics: ["< 5ms redirect latency", "Redis hot path", "Stateless design"],
    architecture:
      "Stateless Node.js API with Redis caching layer and PostgreSQL for persistent storage.",
  },
  {
    id: "distributed-kv",
    title: "Distributed Key-Value Store",
    description:
      "Fault-tolerant distributed KV store implementing Raft consensus, log replication, and linearizable reads/writes from scratch.",
    longDescription:
      "A distributed key-value store implementing the Raft consensus algorithm from scratch. Supports linearizable reads and writes across a cluster with automatic leader election and failover.",
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
    metrics: ["Raft consensus", "3-node cluster", "Linearizable guarantees"],
    architecture: "Multi-node cluster over gRPC with Raft state machine per node.",
  },
  {
    id: "coming-auth",
    title: "Authentication Service",
    description:
      "Standalone auth microservice — JWT, OAuth2, refresh token rotation, TOTP MFA, and session management.",
    longDescription: "Coming soon.",
    tech: ["Node.js", "PostgreSQL", "Redis", "Docker"],
    difficulty: "Advanced",
    status: "coming-soon",
    features: [],
    challenges: [],
    lessons: [],
  },
  {
    id: "coming-cache",
    title: "Distributed Cache",
    description:
      "Redis-inspired distributed cache with LRU eviction, consistent hashing, and replication.",
    longDescription: "Coming soon.",
    tech: ["Go", "Consistent Hashing", "Docker"],
    difficulty: "Expert",
    status: "coming-soon",
    features: [],
    challenges: [],
    lessons: [],
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
      "Developing backend APIs and ML pipelines integrated with cloud infrastructure",
      "Leading technical delivery on production AI projects for Fortune 500 clients",
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
  learning: [
    "C++ — systems programming and performance",
    "Distributed Systems — consensus, replication, CRDTs",
    "Linux internals — kernel, networking stack",
    "AI Infrastructure — inference optimization, serving",
    "Kubernetes — production cluster management",
    "Observability — OpenTelemetry, Prometheus, Grafana",
    "Performance Engineering — profiling, benchmarking",
  ],
  building: [
    "Production URL Shortener",
    "Distributed Key-Value Store",
    "AI RAG Platform",
    "Authentication Service",
  ],
  reading: [
    "Designing Data-Intensive Applications — Kleppmann",
    "Computer Systems: A Programmer's Perspective",
    "The Pragmatic Programmer",
  ],
  goals: [
    "Land a role at a top-tier tech company (OpenAI / Anthropic / Cloudflare / Stripe / Databricks)",
    "Master distributed systems fundamentals",
    "Become proficient in C++ for systems programming",
    "Build and ship 10 production-grade projects",
    "Write technical articles on backend and AI engineering",
  ],
};

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
