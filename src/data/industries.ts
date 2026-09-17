export interface Industry {
  id: string;
  title: string;
  description: string;
  features: string[];
}

export const industriesData: Industry[] = [
  {
    id: "healthcare",
    title: "Healthcare",
    description: "Engineering secure and highly available systems for healthcare providers, designed with patient data integrity and operational efficiency in mind.",
    features: ["Secure Data Architectures", "Telemedicine Platforms", "EHR Integrations", "Medical Data Analytics"]
  },
  {
    id: "finance",
    title: "Financial Services",
    description: "Developing robust fintech solutions, secure transactional gateways, and high-performance financial systems built for demanding regulatory environments.",
    features: ["Transactional Systems", "Secure Gateway Integrations", "Fraud Detection Algorithms", "Core Banking Modernization"]
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    description: "Integrating smart manufacturing systems, IoT infrastructure, and predictive analytics to optimize supply chains and production lines.",
    features: ["Industrial IoT Integration", "Predictive Maintenance Models", "Supply Chain Optimization", "Digital Twin Concepts"]
  },
  {
    id: "retail",
    title: "Retail & E-Commerce",
    description: "Architecting scalable digital commerce platforms and omnichannel retail solutions designed to handle massive transaction volumes.",
    features: ["Omnichannel Commerce", "Inventory Management Systems", "Personalization Engines", "Point of Sale (POS) Integrations"]
  },
  {
    id: "logistics",
    title: "Logistics & Supply Chain",
    description: "Deploying AI-driven routing, fleet management, and demand forecasting systems to optimize global logistics operations and reduce overhead.",
    features: ["Algorithmic Route Optimization", "Demand Forecasting Models", "Autonomous Warehouse Systems", "Real-Time Fleet Tracking"]
  },
  {
    id: "energy",
    title: "Energy & Utilities",
    description: "Building smart grid management systems and predictive maintenance architectures to ensure reliable, efficient, and secure energy distribution.",
    features: ["Smart Grid Optimization", "Anomaly Detection", "Predictive Maintenance", "Algorithmic Energy Trading"]
  },
  {
    id: "telecom",
    title: "Telecommunications",
    description: "Leveraging machine learning to optimize network routing, predict infrastructural failures, and hyper-personalize customer experiences at scale.",
    features: ["Network Traffic Optimization", "Churn Prediction Models", "Automated Fault Resolution", "Intelligent Customer Routing"]
  },
  {
    id: "proptech",
    title: "Real Estate & PropTech",
    description: "Implementing computer vision and AI models for property valuation, smart building management, and automated commercial maintenance.",
    features: ["AI Valuation Models", "Smart HVAC Optimization", "Automated Security Monitoring", "Space Utilization Analytics"]
  }
];
