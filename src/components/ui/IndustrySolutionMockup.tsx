import { 
  FileText, 
  Cpu, 
  CheckCircle2 
} from 'lucide-react';

export interface IndustrySolutionProfile {
  id: string;
  title: string;
  softwareName: string;
  category: string;
  oneLinePitch: string;
  businessImpactMetric: string;
  businessImpactLabel: string;
  timeframe: string;
  leftInputCard: {
    badge: string;
    title: string;
    detail: string;
    tag: string;
  };
  centerEngineCard: {
    engineName: string;
    processingAction: string;
    confidenceOrSpeed: string;
  };
  rightOutputCard: {
    badge: string;
    title: string;
    deliverable: string;
    status: string;
  };
  clientQuote: string;
}

export const industryProfiles: Record<string, IndustrySolutionProfile> = {
  healthcare: {
    id: 'healthcare',
    title: 'Healthcare & Life Sciences',
    softwareName: 'Clinical EHR & Lab Chart Extractor',
    category: 'CLINICAL DOCUMENT INTELLIGENCE',
    oneLinePitch: 'Eliminates manual chart typing by auto-converting doctor notes and lab PDFs into structured EHR records with ICD-10 codes.',
    businessImpactMetric: '78%',
    businessImpactLabel: 'Faster Chart Ingestion',
    timeframe: 'Saves 3.5 hrs/doctor daily',
    leftInputCard: {
      badge: 'INPUT: RAW MEDICAL RECORD',
      title: 'Discharge_Summary_Pt801.pdf',
      detail: 'Multi-page handwritten notes, lab vitals, and physician diagnostics',
      tag: 'UNSTRUCTURED PDF / SCANNED'
    },
    centerEngineCard: {
      engineName: 'Medical NLP & Entity Normalizer',
      processingAction: 'Extracted: Type 2 Diabetes (E11.9), Metformin 500mg BID, HbA1c 8.2%',
      confidenceOrSpeed: '99.8% Entity Precision'
    },
    rightOutputCard: {
      badge: 'OUTPUT: STRUCTURED EHR RECORD',
      title: 'HL7 / FHIR Compliant Payload',
      deliverable: 'Auto-populated in Epic / Cerner with physician 1-click verification',
      status: 'VERIFIED & READY'
    },
    clientQuote: 'Doctors stop wasting evening hours typing charts. Records sync into EHR instantly.'
  },

  finance: {
    id: 'finance',
    title: 'Banking & Financial Services',
    softwareName: 'Real-Time AML & Transaction Shield',
    category: 'TRANSACTION RISK & ANOMALY DETECTION',
    oneLinePitch: 'Inspects payment streams in 14ms to isolate fraudulent wires and synthetic identities before settlement.',
    businessImpactMetric: '64%',
    businessImpactLabel: 'Drop in False Fraud Declines',
    timeframe: '<18ms latency per transfer',
    leftInputCard: {
      badge: 'INPUT: LIVE WIRE STREAM',
      title: 'SWIFT Transfer #TX-89021',
      detail: '$75,000 USD outbound cross-border transfer across multi-hop accounts',
      tag: 'HIGH-VELOCITY PAYMENT'
    },
    centerEngineCard: {
      engineName: 'Graph Neural Risk Engine',
      processingAction: 'Flagged: Temporal velocity anomaly & rapid hop through high-risk shell entity',
      confidenceOrSpeed: 'Risk Score: 94/100 (Critical)'
    },
    rightOutputCard: {
      badge: 'OUTPUT: AUTOMATED MITIGATION',
      title: 'Settlement Hold & SAR Draft',
      deliverable: 'Transaction frozen before ledger debit; regulatory audit trail auto-drafted',
      status: 'THREAT ISOLATED'
    },
    clientQuote: 'Stops criminal fraud in milliseconds without blocking genuine client transactions.'
  },

  manufacturing: {
    id: 'manufacturing',
    title: 'Industrial Manufacturing',
    softwareName: 'Assembly Line Optical Defect Inspector',
    category: 'SUB-MILLISECOND EDGE VISION',
    oneLinePitch: 'Spots micron-level cracks and assembly flaws on conveyor lines at 120 FPS, triggering instant pneumatic ejection.',
    businessImpactMetric: '99.85%',
    businessImpactLabel: 'Defect Catch Rate',
    timeframe: '8.2ms per physical part',
    leftInputCard: {
      badge: 'INPUT: 4K HIGH-SPEED CAMERA',
      title: 'Conveyor Stream (Part #BR-402)',
      detail: 'High-speed optical frame capture of automotive bearing casing',
      tag: '120 FRAMES / SEC'
    },
    centerEngineCard: {
      engineName: 'Edge TensorRT Vision Model',
      processingAction: 'Detected: 0.14mm surface micro-fissure at [x:412, y:890] outer race',
      confidenceOrSpeed: 'Inference Time: 8.2ms'
    },
    rightOutputCard: {
      badge: 'OUTPUT: PLC HARDWARE TRIGGER',
      title: 'Pneumatic Ejection Signal',
      deliverable: 'Digital I/O sent directly to Siemens PLC to kick defective part into scrap bin',
      status: 'DEFECT REJECTED'
    },
    clientQuote: 'Replaces tired human visual inspectors. Zero defective parts escape to customers.'
  },

  insurance: {
    id: 'insurance',
    title: 'Insurance & Claims',
    softwareName: 'Instant FNOL & Damage Estimation Engine',
    category: 'CLAIMS ORCHESTRATION & UNDERWRITING',
    oneLinePitch: 'Analyzes accident photos to estimate repair costs and cross-checks policy coverage in under 3 minutes.',
    businessImpactMetric: '85%',
    businessImpactLabel: 'Faster Claims Settlement',
    timeframe: '3 mins vs 8 days manual',
    leftInputCard: {
      badge: 'INPUT: CLAIMANT ACCIDENT PHOTOS',
      title: 'Auto Claim #CL-9921',
      detail: '3 smartphone photos of side-impact collision on front fender and door',
      tag: 'MOBILE FNOL UPLOAD'
    },
    centerEngineCard: {
      engineName: 'Damage Vision & Part Cost Matrix',
      processingAction: 'Calculated: Fender replacement ($1,850) + Door repaint ($950) + Labor ($600)',
      confidenceOrSpeed: 'Total Estimate: $3,400'
    },
    rightOutputCard: {
      badge: 'OUTPUT: CLAIM APPROVAL & DISPATCH',
      title: 'Instant Settlement Authorization',
      deliverable: 'Deductible applied ($500); digital payout approved and body shop assigned',
      status: 'AUTO-AUTHORIZED'
    },
    clientQuote: 'Customers get their claims approved the same day directly on their smartphone.'
  },

  retail: {
    id: 'retail',
    title: 'Retail & E-Commerce',
    softwareName: 'Dynamic SKU Demand & Replenishment AI',
    category: 'PREDICTIVE INVENTORY & DEMAND',
    oneLinePitch: 'Predicts regional store stockouts 7 days in advance and automatically dispatches supplier purchase orders.',
    businessImpactMetric: '42%',
    businessImpactLabel: 'Reduction in Stockouts',
    timeframe: '7-day predictive window',
    leftInputCard: {
      badge: 'INPUT: POINT-OF-SALE TELEMETRY',
      title: 'Store Network Sales & Weather Data',
      detail: 'Hourly POS velocity, regional temperature drop, and promotion uplift',
      tag: '500+ RETAIL STORES'
    },
    centerEngineCard: {
      engineName: 'Multi-Variate Demand Forecaster',
      processingAction: 'Forecasted: SKU #88219 (Winter Jackets) stockout in 3.5 days at 42 locations',
      confidenceOrSpeed: 'Confidence: 96.4%'
    },
    rightOutputCard: {
      badge: 'OUTPUT: AUTOMATED REORDER',
      title: 'ERP Purchase Order Dispatched',
      deliverable: 'Reorder PO-901 generated in SAP; inventory routed from central distribution',
      status: 'INVENTORY PROTECTED'
    },
    clientQuote: 'Eliminates lost sales from empty shelves and stops over-ordering unwanted stock.'
  },

  logistics: {
    id: 'logistics',
    title: 'Logistics & Supply Chain',
    softwareName: 'Automated Manifest & Customs Rerouter',
    category: 'AUTONOMOUS FREIGHT ORCHESTRATION',
    oneLinePitch: 'Extracts international shipping bills of lading, matches customs tariff codes, and reroutes freight dynamically.',
    businessImpactMetric: '4.2x',
    businessImpactLabel: 'Faster Customs Clearance',
    timeframe: 'Dwell time cut from 48h to 45m',
    leftInputCard: {
      badge: 'INPUT: MULTI-PAGE FREIGHT BILL',
      title: 'Bill_of_Lading_Rotterdam.pdf',
      detail: 'Complex multi-currency container manifest with 120 line items in 3 languages',
      tag: 'CROSS-BORDER CARGO'
    },
    centerEngineCard: {
      engineName: 'Tariff & Manifest OCR Engine',
      processingAction: 'Mapped: 120 freight items to HS Tariff Code #8471.30; validated zero duty exemptions',
      confidenceOrSpeed: '99.4% Field Match'
    },
    rightOutputCard: {
      badge: 'OUTPUT: CUSTOMS CLEARANCE',
      title: 'EDI Manifest & Gate Pass',
      deliverable: 'Customs declaration transmitted; terminal gate pass issued to truck driver app',
      status: 'GATE PASS ISSUED'
    },
    clientQuote: 'Cargo moves through port terminals without sitting in customs backlog for days.'
  },

  cybersecurity: {
    id: 'cybersecurity',
    title: 'Cybersecurity & SOC',
    softwareName: 'Autonomous Level-1 SOC Investigator',
    category: 'AGENTIC THREAT HUNTING',
    oneLinePitch: 'Triages 10,000+ daily security alerts, investigates lateral network movements, and isolates compromised endpoints.',
    businessImpactMetric: '92%',
    businessImpactLabel: 'Alert Triage Automated',
    timeframe: '12 seconds per incident',
    leftInputCard: {
      badge: 'INPUT: SIEM ALERT STREAM',
      title: 'Alert #SEC-992 (Privilege Escalation)',
      detail: 'Unusual Kerberos ticket request from engineering workstation at 02:40 AM',
      tag: 'POTENTIAL ZERO-DAY'
    },
    centerEngineCard: {
      engineName: 'Agentic Threat Triager',
      processingAction: 'Correlated: EDR logs + cloud API tokens + suspicious outbound DNS queries',
      confidenceOrSpeed: 'Verdict: Credential Theft'
    },
    rightOutputCard: {
      badge: 'OUTPUT: ACTIVE CONTAINMENT',
      title: 'Host Isolated & Tokens Revoked',
      deliverable: 'Workstation quarantined from network; incident brief sent to CISO phone',
      status: 'CONTAINMENT ACTIVE'
    },
    clientQuote: 'Stops ransomware in seconds before attackers have time to spread across servers.'
  },

  proptech: {
    id: 'proptech',
    title: 'Real Estate & PropTech',
    softwareName: 'Commercial Lease Synthesizer & Rent Roll',
    category: 'CONTRACT & LEASE EXTRACTION',
    oneLinePitch: 'Parses 80-page commercial lease agreements into structured rent schedules, CAM expenses, and renewal dates.',
    businessImpactMetric: '90%',
    businessImpactLabel: 'Audit Time Saved',
    timeframe: '5 mins per 80-page lease',
    leftInputCard: {
      badge: 'INPUT: COMMERCIAL LEASE PDF',
      title: 'Tower_B_Office_Lease_2026.pdf',
      detail: '84-page legal agreement with dense tenant escalators and indemnities',
      tag: 'LEGAL DRAFT DOCUMENT'
    },
    centerEngineCard: {
      engineName: 'Legal Contract Extraction Model',
      processingAction: 'Extracted: Base Rent $42/sqft, 3.5% annual escalator, CAM cap $4.20/sqft',
      confidenceOrSpeed: 'Zero Clause Misses'
    },
    rightOutputCard: {
      badge: 'OUTPUT: STRUCTURED RENT ROLL',
      title: 'Direct Yardi / MRI Sync',
      deliverable: 'Tenancy financials and critical expiration alerts auto-populated in property ERP',
      status: 'EXPORTED TO ERP'
    },
    clientQuote: 'Property teams no longer waste weeks manually re-reading lease contracts.'
  },

  energy: {
    id: 'energy',
    title: 'Energy & Utilities',
    softwareName: 'Smart Grid Load & Renewable Forecaster',
    category: 'GRID BALANCE & PREDICTION',
    oneLinePitch: 'Forecasts solar and wind generation swings 24 hours in advance to balance regional grid power dispatch.',
    businessImpactMetric: '28%',
    businessImpactLabel: 'Lower Peaker Plant Cost',
    timeframe: '15-min dispatch intervals',
    leftInputCard: {
      badge: 'INPUT: WEATHER & SUBSTATION SENSORS',
      title: 'Grid Node #7 Substation Telemetry',
      detail: 'Solar irradiance, wind velocity, and residential cooling demand telemetry',
      tag: 'REAL-TIME IOT STREAM'
    },
    centerEngineCard: {
      engineName: 'Dynamic Grid Equilibrium Model',
      processingAction: 'Predicted: 45MW solar dip between 14:00-16:00 due to local cloud cover',
      confidenceOrSpeed: '97.2% Forecast Accuracy'
    },
    rightOutputCard: {
      badge: 'OUTPUT: STORAGE DISPATCH SIGNAL',
      title: 'Battery Reserve Injected',
      deliverable: 'Grid battery storage scheduled to discharge 40MW; blackouts prevented',
      status: 'GRID BALANCED'
    },
    clientQuote: 'Prevents regional blackouts and cuts reliance on expensive emergency diesel generators.'
  },

  automotive: {
    id: 'automotive',
    title: 'Automotive & Mobility',
    softwareName: 'Connected Fleet Predictive Telemetry',
    category: 'TELEMETRY & COMPONENT HEALTH',
    oneLinePitch: 'Reads vehicle CAN-bus diagnostic streams to predict alternator and brake failures 500 km before breakdown.',
    businessImpactMetric: '35%',
    businessImpactLabel: 'Lower Fleet Downtime',
    timeframe: 'Predicts failure 500 km early',
    leftInputCard: {
      badge: 'INPUT: FLEET CAN-BUS SENSORS',
      title: 'Truck Fleet Telemetry #TK-481',
      detail: 'Vibration frequency, engine oil temperature, and alternator voltage oscillations',
      tag: 'CONTINUOUS TELEMATICS'
    },
    centerEngineCard: {
      engineName: 'Degradation Time-Series Model',
      processingAction: 'Diagnosed: Alternator bearing harmonic distortion exceeding safe threshold',
      confidenceOrSpeed: 'Failure Risk: 89% in 400km'
    },
    rightOutputCard: {
      badge: 'OUTPUT: AUTOMATED SERVICE DISPATCH',
      title: 'Service Bay & Part Reserved',
      deliverable: 'Driver routed to closest service hub; replacement alternator reserved in advance',
      status: 'SERVICE BOOKED'
    },
    clientQuote: 'Commercial fleets avoid getting stranded on highways with dead alternators.'
  },

  telecom: {
    id: 'telecom',
    title: 'Telecommunications',
    softwareName: 'Autonomous Cell Tower Traffic Balancer',
    category: 'NETWORK TOPOLOGY OPTIMIZATION',
    oneLinePitch: 'Dynamically tilts and balances antenna RF transmission to eliminate congested dead zones during public events.',
    businessImpactMetric: '48%',
    businessImpactLabel: 'Fewer Dropped Calls',
    timeframe: 'Self-heals in 30 seconds',
    leftInputCard: {
      badge: 'INPUT: TOWER CELLULAR LOAD',
      title: 'Stadium Sector Tower #T-102',
      detail: 'Sudden spike of 80,000 mobile subscribers streaming 4K video during concert',
      tag: 'TRAFFIC SURGE EVENT'
    },
    centerEngineCard: {
      engineName: 'Antenna Beamforming Balancer',
      processingAction: 'Optimized: Shifted 35% of packet load to adjacent micro-cells via beam steering',
      confidenceOrSpeed: 'Latency: 12ms'
    },
    rightOutputCard: {
      badge: 'OUTPUT: NETWORK EQUILIBRIUM',
      title: 'Zero Cell Dropping Maintained',
      deliverable: 'Throughput stabilized at 450 Mbps per user; zero customer disconnects',
      status: 'TRAFFIC BALANCED'
    },
    clientQuote: 'Mobile users get lightning-fast speeds even in packed stadiums and festivals.'
  },

  travel: {
    id: 'travel',
    title: 'Travel & Hospitality',
    softwareName: 'Dynamic Fare & Concierge Reasoner',
    category: 'DYNAMIC COMMERCE & CONCIERGE',
    oneLinePitch: 'Adjusts hotel and flight rates dynamically and handles multi-leg rebooking during weather delays.',
    businessImpactMetric: '22%',
    businessImpactLabel: 'Higher Revenue Per Room',
    timeframe: 'Sub-second rate adaptation',
    leftInputCard: {
      badge: 'INPUT: FLIGHT CANCELLATION EVENT',
      title: 'Severe Snowstorm at Chicago (ORD)',
      detail: '45 flights cancelled; 6,000 travelers stranded seeking same-night hotel rooms',
      tag: 'REAL-TIME DISRUPTION'
    },
    centerEngineCard: {
      engineName: 'Dynamic Revenue & Booking Agent',
      processingAction: 'Matched: Unbooked rooms priced to demand; automated SMS rebooking sent to guests',
      confidenceOrSpeed: '100% Occupancy Reached'
    },
    rightOutputCard: {
      badge: 'OUTPUT: AUTOMATED GUEST BOOKING',
      title: 'Instant Confirmation & Keycard',
      deliverable: 'Room assigned, digital mobile key sent via WhatsApp; front desk backlog averted',
      status: 'GUEST CHECKED IN'
    },
    clientQuote: 'Hotels fill every empty room during disruptions without hiring extra front-desk staff.'
  },

  media: {
    id: 'media',
    title: 'Media & Entertainment',
    softwareName: 'Multimodal Video Tagger & Clip Generator',
    category: 'VIDEO ASSET EXTRACTION',
    oneLinePitch: 'Analyzes live broadcasts to auto-generate social clips, transcripts, and copyright-cleared highlight reels in seconds.',
    businessImpactMetric: '15x',
    businessImpactLabel: 'Faster Content Publishing',
    timeframe: '30 seconds from live match',
    leftInputCard: {
      badge: 'INPUT: LIVE BROADCAST FEED',
      title: 'Cricket / Football Live HD Stream',
      detail: 'Real-time commentary audio, optical player tracking, and scoreboard OCR',
      tag: 'BROADCAST VIDEO STREAM'
    },
    centerEngineCard: {
      engineName: 'Multimodal Event Classifier',
      processingAction: 'Detected: Goal celebration + crowd audio cheer peak at minute 74:12',
      confidenceOrSpeed: 'Zero Latency Lag'
    },
    rightOutputCard: {
      badge: 'OUTPUT: 9:16 SOCIAL HIGHLIGHT',
      title: 'Auto-Cropped Viral Reel',
      deliverable: 'Vertical video with auto-captions and sponsor logo exported directly to YouTube/Instagram',
      status: 'REEL PUBLISHED'
    },
    clientQuote: 'Broadcast studios publish viral game highlights seconds after the goal happens.'
  },

  agriculture: {
    id: 'agriculture',
    title: 'Agriculture & AgriTech',
    softwareName: 'Drone Spectral Crop Disease Scanner',
    category: 'MULTISPECTRAL CANOPY VISION',
    oneLinePitch: 'Scans multispectral drone footage to detect fungal infections and soil moisture stress 10 days before visible to human eye.',
    businessImpactMetric: '30%',
    businessImpactLabel: 'Pesticide Usage Reduced',
    timeframe: 'Identifies disease 10 days early',
    leftInputCard: {
      badge: 'INPUT: DRONE MULTISPECTRAL SURVEY',
      title: 'Field Survey #F-22 (500 Acres)',
      detail: 'Near-Infrared (NDVI) aerial canopy photography of wheat plantation',
      tag: 'AERIAL SPECTRAL MAP'
    },
    centerEngineCard: {
      engineName: 'Canopy Disease Classifier',
      processingAction: 'Identified: Early yellow rust fungal signature on 12-acre sector in northwest plot',
      confidenceOrSpeed: 'Precision: 98.6%'
    },
    rightOutputCard: {
      badge: 'OUTPUT: PRECISION SPRAY MAP',
      title: 'GPS Tractor Spray Prescription',
      deliverable: 'Targeted spraying map sent to autonomous tractor; 80% of healthy field skipped',
      status: 'SPRAY MAP DISPATCHED'
    },
    clientQuote: 'Farmers save huge money by spraying only the infected crops instead of whole fields.'
  },

  'professional-services': {
    id: 'professional-services',
    title: 'Legal & Accounting Services',
    softwareName: 'Contract Audit & Regulatory Knowledge Graph',
    category: 'AUDIT & CONTRACT COMPLIANCE',
    oneLinePitch: 'Scans thousands of corporate merger contracts to extract liability indemnities, change-of-control clauses, and tax risks.',
    businessImpactMetric: '75%',
    businessImpactLabel: 'Due Diligence Hours Saved',
    timeframe: '10,000 pages reviewed in 1 hr',
    leftInputCard: {
      badge: 'INPUT: VIRTUAL DATA ROOM (VDR)',
      title: 'M&A Deal Room: 1,400 Contracts',
      detail: 'Supplier agreements, non-competes, and employment agreements across 8 subsidiaries',
      tag: 'MERGER DUE DILIGENCE'
    },
    centerEngineCard: {
      engineName: 'Legal Risk Extraction Graph',
      processingAction: 'Flagged: 4 supplier contracts contain uncapped indemnity liabilities exceeding $10M',
      confidenceOrSpeed: 'Zero Missed Clauses'
    },
    rightOutputCard: {
      badge: 'OUTPUT: DUE DILIGENCE AUDIT REPORT',
      title: 'Executive Risk Matrix & Spreadsheet',
      deliverable: 'Categorized liability summary with exact paragraph citations for partner review',
      status: 'REPORT GENERATED'
    },
    clientQuote: 'Law firms review thousands of merger agreements in hours instead of billing weeks.'
  },

  government: {
    id: 'government',
    title: 'Government & Public Sector',
    softwareName: 'Air-Gapped Citizen Form & Benefit Processor',
    category: 'SECURE ON-PREM DOCUMENT AUTOMATION',
    oneLinePitch: 'Processes citizen applications, pension paperwork, and identity documents on 100% offline, air-gapped government servers.',
    businessImpactMetric: '80%',
    businessImpactLabel: 'Backlog Reduction',
    timeframe: 'Zero cloud data transmission',
    leftInputCard: {
      badge: 'INPUT: CITIZEN PENSION APPLICATION',
      title: 'Form_Pension_Claim_401.pdf',
      detail: 'Handwritten citizen application, physical identity proof, and income certificates',
      tag: 'GOVERNMENT WELFARE CLAIM'
    },
    centerEngineCard: {
      engineName: 'Air-Gapped Document Engine',
      processingAction: 'Verified: Aadhaar / National ID validity, income eligibility threshold, and signature match',
      confidenceOrSpeed: '100% Offline Air-Gapped'
    },
    rightOutputCard: {
      badge: 'OUTPUT: ELIGIBILITY DETERMINATION',
      title: 'Pension Approval Certificate',
      deliverable: 'Direct benefit transfer scheduled; approval letter printed for citizen delivery',
      status: 'BENEFIT APPROVED'
    },
    clientQuote: 'Citizen welfare benefits processed in days instead of months, with total data privacy.'
  },

  startups: {
    id: 'startups',
    title: 'Startups & Emerging Tech',
    softwareName: 'Bespoke Production AI Engine & Copilot',
    category: 'CUSTOM AI SAAS ARCHITECTURE',
    oneLinePitch: 'Accelerates startup MVPs by engineering custom private model pipelines, vector search, and agentic workflows in 3 weeks.',
    businessImpactMetric: '3 Weeks',
    businessImpactLabel: 'Time-to-Production MVP',
    timeframe: 'Own your IP & weights',
    leftInputCard: {
      badge: 'INPUT: STARTUP PRODUCT IDEA',
      title: 'Technical Requirement Brief',
      detail: 'FinTech or SaaS founder needing specialized domain AI inside their existing React/Node app',
      tag: 'NEW VENTURE ARCHITECTURE'
    },
    centerEngineCard: {
      engineName: 'Dibexa Production AI Scaffold',
      processingAction: 'Assembled: Custom fine-tuned weights + private vector DB + streaming API connectors',
      confidenceOrSpeed: 'Zero Third-Party Vendor Lock'
    },
    rightOutputCard: {
      badge: 'OUTPUT: DEPLOYED AI BACKEND',
      title: 'Live Production REST/gRPC API',
      deliverable: 'Deployed directly on startup AWS/GCP account with complete source code ownership',
      status: 'LIVE IN PRODUCTION'
    },
    clientQuote: 'Startups launch enterprise-ready AI products to their investors in weeks, not years.'
  }
};

interface IndustrySolutionMockupProps {
  industryId: string;
}

export default function IndustrySolutionMockup({ industryId }: IndustrySolutionMockupProps) {
  const profile = industryProfiles[industryId] || industryProfiles.healthcare;

  return (
    <div className="w-full bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-3xl p-5 sm:p-7 text-slate-900 font-sans shadow-[0_8px_30px_rgb(0,0,0,0.04)] space-y-6 dark:bg-[#010103]/90 dark:border-[#0055FF]/30 dark:text-white dark:shadow-[0_10px_40px_-15px_rgba(138,43,226,0.3)]">
      
      {/* Top Banner: What Dibexa Actually Builds */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-5 border-b border-slate-200/80 dark:border-[#0055FF]/20">
        <div>
          <div className="flex items-center gap-2 text-[11px] font-mono font-bold tracking-wider text-blue-600 uppercase dark:text-[#00F0FF]">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse dark:bg-[#00F0FF] dark:shadow-[0_0_10px_rgba(0,240,255,0.8)]" />
            WHAT DIBEXA BUILDS FOR YOUR BUSINESS
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mt-1 dark:text-white">
            {profile.softwareName}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed font-medium dark:text-slate-400 dark:font-mono">
            {profile.oneLinePitch}
          </p>
        </div>

        {/* Business Impact Delta */}
        <div className="px-4 py-2 bg-blue-50/80 border border-blue-100 rounded-2xl text-center shrink-0 w-full sm:w-auto shadow-sm dark:bg-[#05060A] dark:border-[#8A2BE2]/40 dark:shadow-[0_0_15px_rgba(138,43,226,0.2)]">
          <div className="text-[10px] font-mono text-blue-600 uppercase tracking-widest font-bold dark:text-[#8A2BE2]">
            PROVEN CLIENT OUTCOME
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-[var(--color-brand-cyan)] tracking-tight dark:text-[#00F0FF]">
            {profile.businessImpactMetric}
          </div>
          <div className="text-[11px] font-bold text-slate-600 dark:text-slate-400 dark:font-mono">
            {profile.businessImpactLabel}
          </div>
        </div>
      </div>

      {/* Visual Live Solution Pipeline Mockup (Left Ingest -> Center AI Engine -> Right Verified Output) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 items-stretch relative">
        
        {/* Step 1: Input Document / Sensor Data */}
        <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-4 flex flex-col justify-between space-y-3 relative group shadow-sm hover:shadow-md transition-shadow dark:bg-[#020204] dark:border-[#0055FF]/20 dark:hover:border-[#00F0FF]/40">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md border border-slate-200 dark:bg-transparent dark:text-[#0055FF] dark:border-[#0055FF]/40">
              1. INGESTION
            </span>
            <FileText size={14} className="text-slate-400 dark:text-[#0055FF]/70" />
          </div>

          <div className="space-y-1.5">
            <div className="text-[10px] font-mono text-slate-500 uppercase font-semibold dark:text-slate-400">
              {profile.leftInputCard.badge}
            </div>
            <div className="text-xs font-bold text-slate-900 tracking-tight dark:text-white dark:font-mono">
              {profile.leftInputCard.title}
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed font-medium dark:text-slate-500">
              {profile.leftInputCard.detail}
            </p>
          </div>

          <div className="pt-2 border-t border-slate-100 text-[10px] font-mono text-slate-500 dark:border-[#0055FF]/20">
            Format: <span className="text-slate-700 font-bold dark:text-[#00F0FF]">{profile.leftInputCard.tag}</span>
          </div>
        </div>

        {/* Step 2: Center Intelligent Engine Execution */}
        <div className="lg:col-span-4 bg-gradient-to-b from-blue-50/50 to-cyan-50/50 border border-blue-200/60 rounded-2xl p-4 flex flex-col justify-between space-y-3 relative shadow-md shadow-blue-900/5 dark:from-[#00F0FF]/5 dark:to-[#0055FF]/5 dark:border-[#00F0FF]/30 dark:shadow-[0_0_15px_rgba(0,240,255,0.1)]">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-blue-100 text-blue-700 rounded-md border border-blue-200 dark:bg-[#00F0FF]/10 dark:text-[#00F0FF] dark:border-[#00F0FF]/40">
              2. DIBEXA AI ENGINE
            </span>
            <Cpu size={14} className="text-blue-600 dark:text-[#00F0FF]" />
          </div>

          <div className="space-y-1.5">
            <div className="text-xs font-bold text-slate-900 tracking-tight dark:text-[#00F0FF] dark:font-mono">
              {profile.centerEngineCard.engineName}
            </div>
            <p className="text-[11px] text-slate-700 leading-relaxed font-mono bg-white/60 p-2 rounded-lg border border-blue-100/50 font-medium dark:bg-[#010103] dark:text-slate-300 dark:border-[#0055FF]/30">
              &gt; {profile.centerEngineCard.processingAction}
            </p>
          </div>

          <div className="pt-2 border-t border-blue-200/50 flex items-center justify-between text-[10px] font-mono dark:border-[#0055FF]/20">
            <span className="text-slate-600 dark:text-slate-500">Accuracy Benchmark:</span>
            <span className="text-blue-600 font-bold dark:text-[#00F0FF]">{profile.centerEngineCard.confidenceOrSpeed}</span>
          </div>
        </div>

        {/* Step 3: Verified Business Output & ERP Action */}
        <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-4 flex flex-col justify-between space-y-3 relative shadow-sm hover:shadow-md transition-shadow dark:bg-[#020204] dark:border-[#8A2BE2]/20 dark:hover:border-[#8A2BE2]/40">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-md border border-emerald-200 dark:bg-transparent dark:text-[#8A2BE2] dark:border-[#8A2BE2]/40">
              3. PRODUCTION OUTPUT
            </span>
            <CheckCircle2 size={14} className="text-emerald-500 dark:text-[#8A2BE2]" />
          </div>

          <div className="space-y-1.5">
            <div className="text-[10px] font-mono text-slate-500 uppercase font-semibold dark:text-slate-400">
              {profile.rightOutputCard.badge}
            </div>
            <div className="text-xs font-bold text-slate-900 tracking-tight dark:text-white dark:font-mono">
              {profile.rightOutputCard.title}
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed font-medium dark:text-slate-500">
              {profile.rightOutputCard.deliverable}
            </p>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono dark:border-[#8A2BE2]/20">
            <span className="text-slate-500">System Status:</span>
            <span className="text-emerald-600 font-bold dark:text-[#8A2BE2]">{profile.rightOutputCard.status}</span>
          </div>
        </div>

      </div>

      {/* Bottom Takeaway Quote & Turnaround */}
      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs dark:bg-[#05060A] dark:border-[#0055FF]/20">
        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
          <span className="text-[var(--color-brand-cyan)] font-extrabold text-lg leading-none dark:text-[#0055FF]">“</span>
          <span className="italic font-medium">{profile.clientQuote}</span>
        </div>
        <span className="text-[11px] font-mono text-slate-500 bg-white px-2.5 py-1 rounded-md border border-slate-200 shrink-0 font-bold dark:bg-[#010103] dark:border-[#0055FF]/30 dark:text-[#00F0FF]">
          {profile.timeframe}
        </span>
      </div>

    </div>
  );
}
