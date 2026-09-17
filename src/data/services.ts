export type ServicePriority = 'PRIMARY' | 'SECONDARY' | 'HIGH_PRIORITY' | null;

export interface Service {
  id: string;
  title: string;
  description: string;
  slug: string;
  priority: ServicePriority;
}

export interface ServiceCategory {
  id: string;
  title: string;
  services: Service[];
}

export const servicesData: ServiceCategory[] = [
  {
    id: "ai-product-engineering",
    title: "AI Product Engineering",
    services: [
      {
        id: "ai-mvp-development",
        title: "AI MVP Development",
        description: "Rapidly prototype and build AI-powered Minimum Viable Products for early-stage validation and investor pitches.",
        slug: "ai-mvp-development",
        priority: null
      },
      {
        id: "generative-ai-integration",
        title: "Generative AI Integration",
        description: "Seamlessly embed Large Language Models (LLMs) and generative capabilities into your existing products.",
        slug: "generative-ai-integration",
        priority: null
      },
      {
        id: "custom-model-finetuning",
        title: "Custom Model Fine-tuning",
        description: "Train and fine-tune specialized AI models using your startup's proprietary datasets for competitive advantage.",
        slug: "custom-model-finetuning",
        priority: null
      },
      {
        id: "computer-vision-systems",
        title: "Computer Vision Systems",
        description: "Develop robust image and video analysis models for visual data processing and automated inspection.",
        slug: "computer-vision-systems",
        priority: null
      },
      {
        id: "nlp-text-analytics",
        title: "NLP & Text Analytics",
        description: "Extract intelligent insights, sentiment, and structured data from massive volumes of unstructured text.",
        slug: "nlp-text-analytics",
        priority: null
      }
    ]
  },
  {
    id: "ai-operations-automation",
    title: "AI Operations & Automation",
    services: [
      {
        id: "ai-workflow-automation",
        title: "AI Workflow Automation",
        description: "Implement intelligent AI agents to automate internal operations and significantly reduce operational overhead.",
        slug: "ai-workflow-automation",
        priority: null
      },
      {
        id: "intelligent-conversational-agents",
        title: "Intelligent Conversational Agents",
        description: "Deploy advanced AI chatbots and virtual assistants for scalable, 24/7 customer support and inbound sales.",
        slug: "intelligent-conversational-agents",
        priority: null
      },
      {
        id: "ai-data-infrastructure",
        title: "AI Data Infrastructure",
        description: "Architect robust, scalable data pipelines to process, clean, and feed data continuously into machine learning models.",
        slug: "ai-data-infrastructure",
        priority: null
      },
      {
        id: "predictive-analytics",
        title: "Predictive Analytics",
        description: "Harness historical data to forecast trends, customer behaviors, and operational bottlenecks before they happen.",
        slug: "predictive-analytics",
        priority: null
      }
    ]
  },
  {
    id: "ai-strategy-architecture",
    title: "AI Strategy & Architecture",
    services: [
      {
        id: "ai-feasibility-assessment",
        title: "AI Feasibility Assessment",
        description: "Evaluate the technical viability, architecture requirements, and potential ROI of your AI product concepts.",
        slug: "ai-feasibility-assessment",
        priority: null
      },
      {
        id: "mlops-architecture",
        title: "Machine Learning Architecture (MLOps)",
        description: "Design scalable, cost-effective infrastructure for deploying, monitoring, and managing AI applications in production.",
        slug: "mlops-architecture",
        priority: null
      },
      {
        id: "ai-security-compliance",
        title: "AI Security & Compliance",
        description: "Ensure your AI solutions are secure against adversarial attacks, unbiased, and compliant with emerging data regulations.",
        slug: "ai-security-compliance",
        priority: null
      },
      {
        id: "ai-transformation-consulting",
        title: "AI Transformation Consulting",
        description: "Develop a comprehensive roadmap for AI adoption across your entire startup to maximize efficiency and innovation.",
        slug: "ai-transformation-consulting",
        priority: null
      }
    ]
  }
];

export const allServices = servicesData.flatMap(cat => cat.services);
