import { useState } from 'react';
import { 
  FileSearch, 
  Database, 
  Cpu, 
  ShieldCheck, 
  Server, 
  Activity, 
  Clock, 
  CheckCircle2 
} from 'lucide-react';
import { cn } from '../../lib/utils';

interface ProcessStep {
  id: string;
  stageNumber: string;
  duration: string;
  name: string;
  subtitle: string;
  icon: typeof FileSearch;
  objective: string;
  deliverables: string[];
  securitySignOff: string;
  operationalImpact: string;
}

const steps: ProcessStep[] = [
  {
    id: 'discovery',
    stageNumber: 'PHASE 01',
    duration: 'Week 1 – 2',
    name: 'Architecture Spike & Data Readiness',
    subtitle: 'Technical Feasibility',
    icon: FileSearch,
    objective: 'Audit proprietary enterprise data stores, benchmark latency constraints, and define target accuracy thresholds before writing production code.',
    deliverables: [
      'Data Cleanliness & Ingestion Audit',
      'Target Model & Latency Matrix',
      'Fixed-Cost Proof-of-Concept Scope'
    ],
    securitySignOff: 'Enterprise NDA & Zero-Retention Compliance Agreement',
    operationalImpact: 'Eliminates open-ended R&D waste by grounding the project in verifiable business constraints.'
  },
  {
    id: 'ingestion',
    stageNumber: 'PHASE 02',
    duration: 'Week 3 – 4',
    name: 'Pipeline & Retrieval Engineering',
    subtitle: 'Private Vector Indexing',
    icon: Database,
    objective: 'Construct secure ETL pipelines, semantic chunking algorithms, and private hybrid vector indices across your internal systems.',
    deliverables: [
      'Hybrid Dense/Sparse Vector Cluster',
      'Automated Document OCR Extractors',
      'Role-Based Metadata Access Filters'
    ],
    securitySignOff: 'SOC 2-compliant Air-Gapped / Private VPC isolation',
    operationalImpact: 'Ensures downstream reasoning is strictly grounded in internal, verified enterprise facts.'
  },
  {
    id: 'fine-tuning',
    stageNumber: 'PHASE 03',
    duration: 'Week 5 – 6',
    name: 'Model Alignment & Guardrails',
    subtitle: 'Domain Adaptation',
    icon: Cpu,
    objective: 'Fine-tune open weights on domain tasks and build strict programmatic guardrails prohibiting hallucinations and PII exposure.',
    deliverables: [
      'Custom Model Weights / LoRA Adapters',
      'Deterministic JSON Validation Engine',
      'Red-Teaming & Prompt Injection Shield'
    ],
    securitySignOff: 'Zero-PII Leakage Verification & Factuality Sign-Off',
    operationalImpact: 'Transforms unpredictable chat models into reliable, deterministic enterprise software.'
  },
  {
    id: 'deployment',
    stageNumber: 'PHASE 04',
    duration: 'Week 7 – 8',
    name: 'Hardened Production Deployment',
    subtitle: 'VPC / On-Prem Release',
    icon: Server,
    objective: 'Deploy low-latency containerized inference clusters directly inside your enterprise cloud (AWS/Azure/GCP) or private on-prem GPUs.',
    deliverables: [
      'Containerized vLLM / TensorRT Cluster',
      'High-Throughput API Gateway (REST/gRPC)',
      'Human-in-the-Loop Override Dashboard'
    ],
    securitySignOff: 'Enterprise Infrastructure & Pen-Testing Approval',
    operationalImpact: 'Your proprietary data never leaves your perimeter; sub-50ms inference at scale.'
  },
  {
    id: 'lifecycle',
    stageNumber: 'PHASE 05',
    duration: 'Ongoing',
    name: '24/7 SLA & Drift Telemetry',
    subtitle: 'Continuous Operations',
    icon: Activity,
    objective: 'Monitor live production telemetry, detect edge-case failures, and continuously fine-tune weights against real-world drift.',
    deliverables: [
      'Real-Time Latency & Accuracy Dashboards',
      'Automated Regression Testing Harness',
      'Guaranteed 99.9% Production Uptime SLA'
    ],
    securitySignOff: 'Continuous Security Audits & Vulnerability Patches',
    operationalImpact: 'Prevents model decay and guarantees long-term operational resilience.'
  }
];

export default function ProcessPipeline() {
  const [activeStepId, setActiveStepId] = useState<string>('fine-tuning');

  const activeStep = steps.find(s => s.id === activeStepId) || steps[2];
  const StepIcon = activeStep.icon;

  return (
    <div className="w-full space-y-8 font-sans">
      
      {/* Horizontal Phase Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {steps.map(step => {
          const isActive = step.id === activeStepId;
          return (
            <button
              key={step.id}
              type="button"
              onClick={() => setActiveStepId(step.id)}
              className={cn(
                "p-4 rounded-lg border text-left transition-all cursor-pointer relative",
                isActive
                  ? "bg-white border-[var(--color-brand-blue)] shadow-md ring-1 ring-[var(--color-brand-blue)]/20"
                  : "bg-[var(--color-surface)] border-[var(--color-border-light)] hover:bg-white hover:border-slate-300"
              )}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={cn(
                  "text-[10px] font-mono font-bold tracking-wider uppercase",
                  isActive ? "text-[var(--color-brand-blue)]" : "text-slate-500"
                )}>
                  {step.stageNumber}
                </span>
                <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1">
                  <Clock size={10} />
                  {step.duration}
                </span>
              </div>
              <div className="text-xs font-bold text-[var(--color-brand-navy)] line-clamp-1 mb-1">
                {step.name}
              </div>
              <div className="text-[11px] text-slate-500 font-medium">
                {step.subtitle}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Phase Detail Panel */}
      <div className="bg-white border border-[var(--color-border-light)] rounded-xl p-6 md:p-8 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue)] flex items-center justify-center shrink-0">
                <StepIcon size={20} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[var(--color-brand-blue)] uppercase">
                    {activeStep.stageNumber} • {activeStep.duration}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[var(--color-brand-navy)] tracking-tight">
                  {activeStep.name}
                </h3>
              </div>
            </div>

            <p className="text-base text-slate-700 leading-relaxed">
              {activeStep.objective}
            </p>

            {/* Operational Impact Banner */}
            <div className="p-4 bg-[var(--color-surface)] border border-[var(--color-border-light)] rounded-lg">
              <div className="text-[10px] font-mono uppercase text-slate-500 font-bold mb-1">
                ENTERPRISE OPERATIONAL IMPACT
              </div>
              <div className="text-sm font-semibold text-[var(--color-brand-navy)]">
                {activeStep.operationalImpact}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-5 bg-[var(--color-surface)] p-5 rounded-lg border border-[var(--color-border-light)]">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-3">
                KEY TECHNICAL DELIVERABLES
              </div>
              <div className="space-y-2.5">
                {activeStep.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--color-border-light)]">
              <div className="text-[10px] font-mono uppercase text-slate-500 font-bold mb-1.5 flex items-center gap-1.5">
                <ShieldCheck size={12} className="text-blue-600" />
                SECURITY & GOVERNANCE GATE
              </div>
              <div className="text-xs text-slate-700 font-mono bg-white p-2.5 rounded border border-slate-200">
                {activeStep.securitySignOff}
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
