export type ServicePriority = 'PRIMARY' | 'SECONDARY' | 'HIGH_PRIORITY' | null;

export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription?: string;
  slug: string;
  priority: ServicePriority;
  capabilities?: string[];
  useCases?: string[];
  industries?: string[];
  image?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description?: string;
  services: Service[];
}

export const servicesData: ServiceCategory[] = [
  {
    id: "intelligent-ai",
    title: "Intelligent AI",
    description: "Harness foundational models and custom architectures to build systems that understand context and generate insights.",
    services: [
      {
        id: "generative-ai",
        title: "Generative AI",
        shortDescription: "Custom generative models tailored for enterprise knowledge.",
        description: "Deploy large language models securely within your enterprise to synthesize data, generate content, and answer complex operational queries without compromising proprietary information.",
        slug: "generative-ai",
        priority: "PRIMARY",
        capabilities: ["LLM Fine-tuning", "Prompt Engineering", "Custom Model Training", "Multi-modal Generation"],
        useCases: ["Automated report generation", "Code assistants", "Creative content automation"],
        industries: ["Finance", "Healthcare", "Media & Entertainment"],
        image: "/images/svc-generative-ai.jpg"
      },
      {
        id: "ai-agents",
        title: "AI Agents",
        shortDescription: "Autonomous systems that execute complex multi-step workflows.",
        description: "Build autonomous AI agents capable of reasoning, planning, and executing sequences of actions across different enterprise systems to complete complex objectives.",
        slug: "ai-agents",
        priority: "PRIMARY",
        capabilities: ["Agentic Workflows", "Tool Use & API Integration", "Multi-Agent Systems", "Reasoning Engines"],
        useCases: ["Autonomous research", "Complex scheduling", "System monitoring & remediation"],
        industries: ["Technology", "Logistics", "Professional Services"],
        image: "/images/svc-ai-agents.jpg"
      },
      {
        id: "conversational-ai",
        title: "Conversational AI",
        shortDescription: "Intelligent dialogue systems for customer and employee support.",
        description: "Develop conversational interfaces that go beyond scripted chatbots, capable of understanding deep context, resolving issues, and interfacing with backend APIs.",
        slug: "conversational-ai",
        priority: "PRIMARY",
        capabilities: ["Natural Language Understanding", "Voice AI", "Multi-turn Dialogue", "Sentiment Analysis"],
        useCases: ["L1/L2 support automation", "Internal HR assistants", "Conversational commerce"],
        industries: ["Retail & E-Commerce", "Banking & Financial Services", "Telecom"],
        image: "/images/svc-conversational-ai.jpg"
      },
      {
        id: "computer-vision",
        title: "Computer Vision",
        shortDescription: "Visual intelligence for automated inspection and analysis.",
        description: "Implement advanced computer vision models to extract structured data from images and video feeds in real-time for quality control, security, and analysis.",
        slug: "computer-vision",
        priority: "PRIMARY",
        capabilities: ["Object Detection", "Image Segmentation", "Facial Recognition", "Visual QA"],
        useCases: ["Defect detection", "Inventory monitoring", "Medical image analysis"],
        industries: ["Manufacturing", "Healthcare", "Retail & E-Commerce"],
        image: "/images/svc-computer-vision.jpg"
      }
    ]
  },
  {
    id: "ai-engineering",
    title: "AI Engineering",
    description: "End-to-end development of custom AI applications, from architecture to seamless enterprise integration.",
    services: [
      {
        id: "custom-ai-applications",
        title: "Custom AI Application Development",
        shortDescription: "Purpose-built AI software for specific business needs.",
        description: "We engineer bespoke AI applications from the ground up, integrating intelligent models into intuitive, scalable software tailored to your specific operational constraints.",
        slug: "custom-ai-applications",
        priority: "PRIMARY",
        capabilities: ["Full-Stack Engineering", "Model Integration", "API Development", "User Experience Design"],
        useCases: ["Internal productivity tools", "AI-powered SaaS products", "Intelligent portals"],
        industries: ["Startups & SMEs", "Professional Services", "Technology"],
        image: "/images/svc-custom-ai-applications.jpg"
      },
      {
        id: "rag-systems",
        title: "RAG / Enterprise Knowledge",
        shortDescription: "Retrieval-Augmented Generation for proprietary data.",
        description: "Connect foundational AI models securely to your private databases and document repositories, ensuring AI responses are grounded in accurate, real-time enterprise facts.",
        slug: "rag-systems",
        priority: "PRIMARY",
        capabilities: ["Vector Databases", "Document Parsing", "Semantic Search", "Knowledge Graphs"],
        useCases: ["Enterprise search", "Contract analysis", "Policy Q&A"],
        industries: ["Legal", "Insurance", "Government / Public Sector"],
        image: "/images/svc-rag-systems.jpg"
      },
      {
        id: "model-finetuning",
        title: "Model Fine-Tuning",
        shortDescription: "Adapting open-source models to specialized domains.",
        description: "Optimize open-weight models (like Llama or Mistral) using your proprietary datasets to achieve higher performance, lower latency, and strict data privacy.",
        slug: "model-finetuning",
        priority: "SECONDARY",
        capabilities: ["LoRA / QLoRA", "Instruction Tuning", "RLHF", "Domain Adaptation"],
        useCases: ["Specialized medical AI", "Financial modeling", "Brand-aligned generation"],
        industries: ["Healthcare", "Finance", "Media & Entertainment"],
        image: "/images/svc-model-finetuning.jpg"
      }
    ]
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    description: "Intelligent workflows that execute complex processes, reducing manual intervention and scaling throughput.",
    services: [
      {
        id: "ai-workflow-automation",
        title: "AI Workflow Automation",
        shortDescription: "Connecting systems with intelligent decision nodes.",
        description: "Replace rigid RPA with intelligent automation that can handle unstructured data, make contextual decisions, and route exceptions dynamically.",
        slug: "ai-workflow-automation",
        priority: "PRIMARY",
        capabilities: ["Process Orchestration", "Unstructured Data Handling", "Exception Routing", "API Connectors"],
        useCases: ["Invoice processing", "Onboarding automation", "Ticket routing"],
        industries: ["Logistics & Supply Chain", "Insurance", "Professional Services"],
        image: "/images/svc-ai-workflow-automation.jpg"
      },
      {
        id: "document-intelligence",
        title: "Document Intelligence",
        shortDescription: "Extracting structured data from complex documents.",
        description: "Utilize multimodal models and OCR to instantly extract, validate, and structure information from complex forms, contracts, and handwritten documents.",
        slug: "document-intelligence",
        priority: "PRIMARY",
        capabilities: ["OCR / Layout Parsing", "Entity Extraction", "Automated Validation", "Table Extraction"],
        useCases: ["Claims processing", "KYC automation", "Audit preparation"],
        industries: ["Banking & Financial Services", "Real Estate / PropTech", "Healthcare"],
        image: "/images/svc-document-intelligence.jpg"
      }
    ]
  },
  {
    id: "ai-data-infrastructure",
    title: "AI Data & Infrastructure",
    description: "Robust MLOps pipelines and secure architectures to train, deploy, and monitor machine learning models at scale.",
    services: [
      {
        id: "mlops",
        title: "MLOps & Infrastructure",
        shortDescription: "Scalable architecture for AI production.",
        description: "Design and deploy the underlying cloud infrastructure required to serve machine learning models with high availability, low latency, and continuous monitoring.",
        slug: "mlops",
        priority: "PRIMARY",
        capabilities: ["Model Serving", "Data Pipelines", "Performance Monitoring", "CI/CD for ML"],
        useCases: ["Real-time inference", "Automated retraining", "Model drift detection"],
        industries: ["Technology", "Retail & E-Commerce", "Finance"],
        image: "/images/svc-mlops.jpg"
      },
      {
        id: "predictive-analytics",
        title: "Predictive Analytics",
        shortDescription: "Forecasting outcomes from historical data.",
        description: "Engineer machine learning pipelines that analyze massive historical datasets to accurately forecast demand, detect anomalies, and predict maintenance needs.",
        slug: "predictive-analytics",
        priority: "PRIMARY",
        capabilities: ["Time-Series Forecasting", "Anomaly Detection", "Risk Modeling", "Churn Prediction"],
        useCases: ["Demand forecasting", "Predictive maintenance", "Fraud detection"],
        industries: ["Manufacturing", "Energy & Utilities", "Telecom"],
        image: "/images/svc-predictive-analytics.jpg"
      }
    ]
  },
  {
    id: "enterprise-ai",
    title: "Enterprise AI",
    description: "Strategic consulting, governance, and organizational adoption frameworks for AI.",
    services: [
      {
        id: "ai-strategy",
        title: "AI Strategy & Consulting",
        shortDescription: "Roadmaps for AI-driven transformation.",
        description: "Work with our AI architects to identify high-ROI use cases, assess data readiness, and develop a phased roadmap for enterprise-wide AI adoption.",
        slug: "ai-strategy",
        priority: "PRIMARY",
        capabilities: ["Use Case Discovery", "Data Readiness Assessment", "ROI Modeling", "Technology Selection"],
        useCases: ["Digital transformation", "AI capability building", "Vendor evaluation"],
        industries: ["Enterprise", "Government / Public Sector", "Cybersecurity & IT"],
        image: "/images/svc-ai-strategy.jpg"
      },
      {
        id: "ai-governance",
        title: "AI Governance & Security",
        shortDescription: "Ensuring responsible and secure AI deployment.",
        description: "Establish frameworks for AI safety, fairness, and compliance, ensuring models do not leak data, hallucinate harmful content, or violate industry regulations.",
        slug: "ai-governance",
        priority: "SECONDARY",
        capabilities: ["Red Teaming", "Bias Auditing", "Data Privacy Controls", "Regulatory Compliance"],
        useCases: ["Compliance auditing", "Model risk management", "Secure AI gateways"],
        industries: ["Banking & Financial Services", "Healthcare", "Insurance"],
        image: "/images/sf-enterprise-ai.jpg"
      }
    ]
  }
];

export const allServices = servicesData.flatMap(cat => cat.services);
