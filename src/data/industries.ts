export interface Industry {
  id: string;
  title: string;
  description: string;
  slug: string;
  businessChallenge: string;
  useCase: string;
  workflow: string;
  outcome: string;
  relatedCapabilities: string[];
}

export const industriesData: Industry[] = [
  {
    id: "healthcare",
    title: "Healthcare",
    description: "Accelerating patient care and operational efficiency through secure, compliant AI systems.",
    slug: "healthcare",
    businessChallenge: "Managing massive volumes of unstructured patient records and compliance documentation.",
    useCase: "Document Intelligence",
    workflow: "Automated extraction and structuring of EHR data, claims processing, and clinical notes.",
    outcome: "Reduced administrative overhead and faster patient onboarding.",
    relatedCapabilities: ["Document Intelligence", "Generative AI", "Predictive Analytics"]
  },
  {
    id: "finance",
    title: "Banking & Financial Services",
    description: "Driving secure transactional intelligence, dynamic risk assessment, and fraud prevention.",
    slug: "banking-and-financial-services",
    businessChallenge: "Detecting increasingly sophisticated fraudulent transactions in real-time.",
    useCase: "Predictive Analytics",
    workflow: "Continuous monitoring of transaction streams using anomaly detection models.",
    outcome: "Reduced false positives and immediate threat isolation.",
    relatedCapabilities: ["Predictive Analytics", "Document Intelligence", "AI Governance"]
  },
  {
    id: "insurance",
    title: "Insurance",
    description: "Modernizing underwriting, claims processing, and customer support with intelligent automation.",
    slug: "insurance",
    businessChallenge: "Slow, manual claims adjudication and document verification.",
    useCase: "AI Workflow Automation",
    workflow: "Intelligent extraction of claim details combined with automated policy verification rules.",
    outcome: "Faster claim settlement and improved customer satisfaction.",
    relatedCapabilities: ["AI Workflow Automation", "Document Intelligence", "Conversational AI"]
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    description: "Optimizing production lines, quality control, and supply chains through connected intelligence.",
    slug: "manufacturing",
    businessChallenge: "High defect rates and manual visual inspection bottlenecks on the assembly line.",
    useCase: "Computer Vision",
    workflow: "Real-time camera feeds analyzed by edge AI models to instantly flag anomalies.",
    outcome: "Increased yield and automated defect categorization.",
    relatedCapabilities: ["Computer Vision", "Predictive Analytics", "MLOps & Infrastructure"]
  },
  {
    id: "retail",
    title: "Retail & E-Commerce",
    description: "Delivering hyper-personalized shopping experiences and dynamic inventory optimization.",
    slug: "retail",
    businessChallenge: "Suboptimal demand forecasting leading to overstock and stockouts.",
    useCase: "Predictive Analytics",
    workflow: "Analyzing historical sales, seasonality, and market signals to predict SKU demand.",
    outcome: "Optimized inventory turnover and reduced holding costs.",
    relatedCapabilities: ["Predictive Analytics", "Conversational AI", "Generative AI"]
  },
  {
    id: "logistics",
    title: "Logistics & Supply Chain",
    description: "Ensuring resilient, algorithmically optimized global logistics and fleet management.",
    slug: "logistics",
    businessChallenge: "Inefficient routing and unpredictable delivery windows.",
    useCase: "Machine Learning",
    workflow: "Dynamic route optimization adapting to real-time traffic and weather conditions.",
    outcome: "Reduced fuel consumption and improved delivery reliability.",
    relatedCapabilities: ["Predictive Analytics", "AI Agents", "MLOps & Infrastructure"]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & IT Ops",
    description: "Automating security operations center (SOC) alert triage and incident response.",
    slug: "cybersecurity",
    businessChallenge: "Alert fatigue and slow incident triage across sprawling enterprise networks.",
    useCase: "AI Agents / Anomaly Detection",
    workflow: "Deploying autonomous security agents to correlate real-time threat telemetry and isolate threats.",
    outcome: "90% faster mean-time-to-detect and automated mitigation of Tier-1 incidents.",
    relatedCapabilities: ["AI Agents", "Predictive Analytics", "AI Workflow Automation"]
  },
  {
    id: "proptech",
    title: "Real Estate / PropTech",
    description: "Automating property management, valuation, and customer interactions.",
    slug: "real-estate",
    businessChallenge: "Manually processing dense property contracts and lease agreements.",
    useCase: "Document Intelligence",
    workflow: "Automated extraction of key clauses, dates, and obligations from legal documents.",
    outcome: "Accelerated due diligence and reduced legal review time.",
    relatedCapabilities: ["Document Intelligence", "Conversational AI", "Predictive Analytics"]
  },
  {
    id: "telecom",
    title: "Telecom",
    description: "Optimizing network infrastructure and automating high-volume customer support.",
    slug: "telecom",
    businessChallenge: "High volume of repetitive L1 technical support queries.",
    useCase: "Conversational AI",
    workflow: "Intelligent dialogue systems resolving network issues via API integration.",
    outcome: "Deflected call volumes and instant customer resolution.",
    relatedCapabilities: ["Conversational AI", "Predictive Analytics", "AI Workflow Automation"]
  },
  {
    id: "automotive",
    title: "Automotive",
    description: "Engineering intelligent systems for production optimization and connected vehicle analytics.",
    slug: "automotive",
    businessChallenge: "Unexpected equipment failure halting production lines.",
    useCase: "Predictive Analytics",
    workflow: "Monitoring sensor data to forecast mechanical degradation before failure.",
    outcome: "Maximized uptime and optimized maintenance schedules.",
    relatedCapabilities: ["Predictive Analytics", "Computer Vision", "MLOps & Infrastructure"]
  },
  {
    id: "energy",
    title: "Energy & Utilities",
    description: "Applying predictive intelligence to grid management, asset tracking, and demand forecasting.",
    slug: "energy-utilities",
    businessChallenge: "Balancing grid load against unpredictable renewable energy generation.",
    useCase: "Predictive Analytics",
    workflow: "Time-series forecasting combining weather data and consumption patterns.",
    outcome: "Stable grid operations and optimized energy distribution.",
    relatedCapabilities: ["Predictive Analytics", "AI Data & Analytics", "Computer Vision"]
  },
  {
    id: "travel",
    title: "Travel & Hospitality",
    description: "Enhancing guest experiences through conversational AI and operational forecasting.",
    slug: "travel",
    businessChallenge: "Managing dynamic pricing and occupancy optimization.",
    useCase: "Machine Learning",
    workflow: "Dynamic price adjustment based on market demand and competitor analysis.",
    outcome: "Maximized RevPAR (Revenue Per Available Room).",
    relatedCapabilities: ["Predictive Analytics", "Conversational AI", "Generative AI"]
  },
  {
    id: "media",
    title: "Media & Entertainment",
    description: "Automating content workflows, personalization, and audience analytics.",
    slug: "media",
    businessChallenge: "Manual tagging, categorization, and metadata generation for vast content libraries.",
    useCase: "Generative AI",
    workflow: "Automated generation of transcripts, summaries, and metadata for video assets.",
    outcome: "Highly searchable content libraries and faster time-to-market.",
    relatedCapabilities: ["Generative AI", "Computer Vision", "RAG / Enterprise Knowledge"]
  },
  {
    id: "agriculture",
    title: "Agriculture",
    description: "Implementing computer vision and analytics for precision farming and crop intelligence.",
    slug: "agriculture",
    businessChallenge: "Early detection of crop disease and yield estimation.",
    useCase: "Computer Vision",
    workflow: "Drone imagery analyzed to detect precise areas of crop distress.",
    outcome: "Targeted intervention, reduced pesticide use, and optimized yields.",
    relatedCapabilities: ["Computer Vision", "Predictive Analytics", "MLOps & Infrastructure"]
  },
  {
    id: "professional-services",
    title: "Professional Services",
    description: "Augmenting legal, consulting, and accounting workflows with knowledge assistants.",
    slug: "professional-services",
    businessChallenge: "Sifting through massive archives of case law, precedent, or audit documents.",
    useCase: "RAG / Enterprise Knowledge",
    workflow: "Semantic search and synthesis across secure, proprietary document repositories.",
    outcome: "Drastically reduced research time and augmented professional capability.",
    relatedCapabilities: ["RAG / Enterprise Knowledge", "Generative AI", "Document Intelligence"]
  },
  {
    id: "government",
    title: "Government / Public Sector",
    description: "Modernizing citizen services and automating bureaucratic workflows securely.",
    slug: "government",
    businessChallenge: "Complex, manual processing of citizen applications and forms.",
    useCase: "AI Workflow Automation",
    workflow: "Intelligent ingestion and routing of citizen requests to appropriate departments.",
    outcome: "Faster public service delivery and reduced processing backlogs.",
    relatedCapabilities: ["AI Workflow Automation", "Document Intelligence", "AI Governance"]
  },
  {
    id: "startups",
    title: "Startups & SMEs",
    description: "Accelerating growth through agile AI product engineering and operational automation.",
    slug: "startups",
    businessChallenge: "Scaling operations rapidly without linearly increasing headcount.",
    useCase: "Custom AI Application Development",
    workflow: "Building bespoke AI-driven platforms that differentiate the startup's core product.",
    outcome: "Enhanced market competitiveness and operational leverage.",
    relatedCapabilities: ["Custom AI Application Development", "Generative AI", "AI Agents"]
  }
];
