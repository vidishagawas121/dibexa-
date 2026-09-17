export interface TechItem {
  name: string;
}

export interface TechCategory {
  id: string;
  category: string;
  items: TechItem[];
}

export const techStack: TechCategory[] = [
  {
    id: "frontend",
    category: "Frontend Engineering",
    items: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Vue.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Redux" }
    ]
  },
  {
    id: "backend",
    category: "Backend & API",
    items: [
      { name: "Node.js" },
      { name: "Python" },
      { name: "Java" },
      { name: ".NET Core" },
      { name: "Go" },
      { name: "GraphQL" }
    ]
  },
  {
    id: "cloud",
    category: "Cloud & DevOps",
    items: [
      { name: "AWS" },
      { name: "Microsoft Azure" },
      { name: "Google Cloud" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "Terraform" }
    ]
  },
  {
    id: "data-ai",
    category: "Data & AI",
    items: [
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "TensorFlow" },
      { name: "PyTorch" },
      { name: "Snowflake" }
    ]
  }
];
