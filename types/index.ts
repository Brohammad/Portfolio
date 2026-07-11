export interface ProjectCaseStudy {
  slug: string;
  projectId: string;
  problem: string;
  solution: string;
  deliverables: { area: string; detail: string }[];
  decisions: { title: string; detail: string }[];
  results: string[];
  links: { label: string; href: string }[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github?: string;
  demo?: string;
  caseStudyUrl?: string;
  image?: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  status: "completed" | "in-progress" | "coming-soon";
  features: string[];
  challenges: string[];
  lessons: string[];
  metrics?: string[];
  architecture?: string;
  scale?: string[];
  engineeringChallenges?: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  startDate: string;
  endDate: string | null;
  location: string;
  type: "full-time" | "part-time" | "contract" | "internship";
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
  impact: string[];
  architecture: string;
  scale: string[];
  decisions: string[];
  current: boolean;
}

export interface Skill {
  name: string;
  icon?: string;
  level?: number;
}

export interface SkillGroup {
  category: string;
  icon: string;
  description?: string;
  skills: Skill[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
  logo?: string;
  placeholder: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
}

export interface Stat {
  label: string;
  subtitle?: string;
  value: number;
  suffix?: string;
  prefix?: string;
}
