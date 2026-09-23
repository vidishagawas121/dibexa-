import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Database, 
  Cpu, 
  Workflow, 
  CheckCircle2, 
  ArrowRight, 
  Network, 
  ShieldCheck, 
  Server,
  Code2,
  Lock,
  Zap
} from 'lucide-react';
import { cn } from '../../lib/utils';

interface SystemLayer {
  id: string;
  name: string;
  badge: string;
  category: string;
  icon: typeof Database;
  description: string;
  technologies: string[];
  benchmarks: string;
  codeSnippet: string;
  deliverables: string[];
}

const systemLayers: SystemLayer[] = [
  {
    id: 'data-ingest',
    name: 'Data & Telemetry Ingestion',
    badge: 'LAYER 01 / INGEST',
    category: 'Ingestion & ETL',
    icon: Database,
    description: 'Automated connectors for multi-format enterprise storage, real-time event streams, and legacy ERP databases with automated schema validation.',
    technologies: ['Apache Kafka', 'PostgreSQL / CDC', 'AWS S3 / Azure Blob', 'Document OCR Engines'],
    benchmarks: 'Up to 50,000 events/sec • Sub-5ms parsing latency',
    codeSnippet: `// Ingestion Pipeline Configuration
const streamConfig = {
  source: 'enterprise.erp.transactions',
  cdcMode: 'WAL_LOGICAL',
  sanitization: ['strip_pii', 'normalize_unicode'],
  chunking: { strategy: 'semantic_boundary', maxTokens: 512 }
};`,
    deliverables: ['Automated ETL Connectors', 'Zero-Loss Streaming Architecture', 'Compliance Scrubbing Pipeline']
  },
  {
    id: 'vector-memory',
    name: 'Vector & Semantic Memory',
    badge: 'LAYER 02 / EMBED',
    category: 'Retrieval Layer',
    icon: Server,
    description: 'Hybrid dense and sparse vector indexing with contextual metadata filtering, guaranteeing zero hallucination through grounded citation retrieval.',
    technologies: ['Qdrant / Milvus Cluster', 'BGE-M3 Embeddings', 'BM25 Hybrid Scoring', 'Cohere Rerank v3'],
    benchmarks: '99.4% retrieval precision • <15ms nearest-neighbor lookup',
    codeSnippet: `// Hybrid Retrieval Execution
const searchResults = await vectorStore.hybridSearch({
  query: userQuery,
  filter: { tenantId: authContext.tenant, securityClearance: 'L3' },
  topK: 6,
  rerank: true
});`,
    deliverables: ['Private Vector Indices', 'Multi-Tenant RBAC Filters', 'Citation-Grounded Context Ingestion']
  },
  {
    id: 'model-inference',
    name: 'Model Runtime & Inference',
    badge: 'LAYER 03 / REASON',
    category: 'Inference Layer',
    icon: Cpu,
    description: 'High-throughput local and private cloud inference engines utilizing domain-adapted fine-tuned open weights and enterprise foundation LLMs.',
    technologies: ['vLLM / TensorRT-LLM', 'Llama-3-70B & Mistral Large', 'Speculative Decoding', 'LoRA Adapters'],
    benchmarks: '120 tokens/sec/GPU • 65% cost reduction vs commercial APIs',
    codeSnippet: `// vLLM Optimized Inference Dispatch
const response = await vllmClient.generate({
  model: 'dibexa-finance-70b-instruct',
  prompt: formattedContextPrompt,
  temperature: 0.1, // Deterministic mode
  max_tokens: 1024
});`,
    deliverables: ['On-Prem / Private VPC Weights', 'Quantized Sub-millisecond Models', 'Self-Hosted Inference Clusters']
  },
  {
    id: 'guardrails-safety',
    name: 'Deterministic Guardrails',
    badge: 'LAYER 04 / VERIFY',
    category: 'Security & Policy',
    icon: ShieldCheck,
    description: 'Strict programmatic validation layer enforcing zero prompt injection, PII masking, factual output consistency, and corporate policy compliance.',
    technologies: ['NeMo Guardrails', 'Presidio PII Anonymizer', 'Structured JSON Schema Enforcement', 'Audit Tracers'],
    benchmarks: '100% schema conformance • Zero unauthorized API calls',
    codeSnippet: `// Deterministic Guardrail Interceptor
const policyCheck = await guardrails.enforce({
  outputPayload: response.text,
  rules: ['prohibit_pii', 'enforce_schema_v2', 'verify_grounding_citations'],
  onViolation: 'escalate_to_human_audit'
});`,
    deliverables: ['SOC 2 Type II Audit Trails', 'Zero-PII Leakage Shield', 'Deterministic JSON Encoders']
  },
  {
    id: 'agentic-action',
    name: 'Autonomous Agent Orchestration',
    badge: 'LAYER 05 / ACTION',
    category: 'Execution Layer',
    icon: Workflow,
    description: 'Multi-agent workflows equipped with deterministic tool calling to execute ERP adjustments, trigger APIs, and resolve operational bottlenecks.',
    technologies: ['LangGraph / CrewAI Runtime', 'REST & gRPC Tool Connectors', 'Human-in-the-Loop Interlocks', 'Stateful Memory'],
    benchmarks: '85% automated straight-through processing',
    codeSnippet: `// Autonomous Agent Execution Cycle
const executionResult = await agentRuntime.dispatch({
  task: 'reconcile_freight_manifest',
  tools: [sapConnector, customsVerificationApi, emailNotifier],
  requireConfirmationAbove: 25000 // $25k manual sign-off threshold
});`,
    deliverables: ['Autonomous ERP Connectors', 'Human-in-the-Loop Dashboards', 'Auditable Operational Telemetry']
  }
];

export default function AiSystemVisual() {
  const [activeLayerId, setActiveLayerId] = useState<string>('vector-memory');

  const activeLayer = systemLayers.find(l => l.id === activeLayerId) || systemLayers[1];
  const Icon = activeLayer.icon;

  return (
    <div className="w-full bg-[#061021] text-white rounded-xl border border-slate-800 overflow-hidden shadow-2xl relative font-sans">
      
      {/* Background Architectural Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />
      
      {/* Blueprint Header */}
      <div className="border-b border-slate-800 p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative z-10 bg-[#08142A]/80">
        <div>
          <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold text-[var(--color-brand-cyan)] tracking-wider">
            <Network size={15} />
            <span>ENTERPRISE PRODUCTION STACK ARCHITECTURE</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            Full-Stack Intelligence Blueprint
          </h3>
          <p className="text-xs text-slate-300 font-mono mt-1">
            Standardized production pipeline deployed across private cloud, VPC, and on-premises hardware.
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono text-slate-300 bg-black/40 px-3.5 py-2 rounded border border-slate-700">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>PRODUCTION-TESTED HARDWARE SPEC</span>
        </div>
      </div>

      {/* Layer Navigation Tabs */}
      <div className="p-4 md:p-6 bg-[#040B17] border-b border-slate-800 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          {systemLayers.map((layer, idx) => {
            const LayerIcon = layer.icon;
            const isActive = layer.id === activeLayerId;
            return (
              <button
                key={layer.id}
                type="button"
                onClick={() => setActiveLayerId(layer.id)}
                className={cn(
                  "p-3 rounded text-left transition-all cursor-pointer border relative flex flex-col justify-between",
                  isActive
                    ? "bg-[#0E1F3B] border-[var(--color-brand-cyan)] shadow-lg shadow-[var(--color-brand-cyan)]/10"
                    : "bg-[#071326] border-slate-800/80 hover:border-slate-700 hover:bg-[#0A1A35]"
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={cn(
                    "text-[10px] font-mono font-bold tracking-widest",
                    isActive ? "text-[var(--color-brand-cyan)]" : "text-slate-300"
                  )}>
                    0{idx + 1}
                  </span>
                  <LayerIcon size={14} className={isActive ? "text-[var(--color-brand-cyan)]" : "text-slate-300"} />
                </div>
                <div className="text-xs font-bold text-white tracking-tight leading-tight line-clamp-1">
                  {layer.name}
                </div>
                <div className="text-[10px] text-slate-300 font-mono mt-1">
                  {layer.category}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Layer Deep-Dive View */}
      <div className="p-6 md:p-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Architectural Specs */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[var(--color-brand-cyan)]/10 text-[var(--color-brand-cyan)] rounded text-[11px] font-mono font-bold uppercase mb-3">
              <Icon size={13} />
              {activeLayer.badge}
            </div>
            <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
              {activeLayer.name}
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {activeLayer.description}
            </p>
          </div>

          {/* Performance Benchmark Callout */}
          <div className="p-3.5 bg-[#0A172D] border border-slate-700/80 rounded font-mono text-xs text-emerald-300 flex items-center gap-3">
            <Zap size={16} className="text-emerald-400 shrink-0" />
            <div>
              <span className="text-slate-300 uppercase text-[10px] block">Verified Benchmark</span>
              <span className="font-semibold">{activeLayer.benchmarks}</span>
            </div>
          </div>

          {/* Tech Stack Components */}
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-3">
              TECHNOLOGY STACK & INTEGRATIONS
            </div>
            <div className="flex flex-wrap gap-2">
              {activeLayer.technologies.map((tech, i) => (
                <span 
                  key={i}
                  className="px-3 py-1.5 bg-[#0B182E] border border-slate-700 text-xs text-slate-200 rounded font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Concrete Deliverables */}
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-3">
              CORE DELIVERABLES
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {activeLayer.deliverables.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                  <CheckCircle2 size={13} className="text-[var(--color-brand-cyan)] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Code & Execution Blueprint Preview */}
        <div className="lg:col-span-5 bg-[#030812] border border-slate-800 rounded-lg p-4 font-mono text-xs overflow-hidden shadow-inner">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Code2 size={13} className="text-[var(--color-brand-cyan)]" />
              IMPLEMENTATION INTERFACE
            </span>
            <span className="text-[10px] text-emerald-400">PRODUCTION CODE</span>
          </div>

          <pre className="text-slate-300 leading-relaxed overflow-x-auto text-[11px] py-1 font-mono">
            <code>{activeLayer.codeSnippet}</code>
          </pre>

          <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
            <span className="flex items-center gap-1">
              <Lock size={11} className="text-cyan-400" />
              TYPE-SAFE & AUDITED
            </span>
            <Link 
              to="/contact" 
              className="text-[var(--color-brand-cyan)] hover:underline flex items-center gap-1 font-semibold"
            >
              Request Architecture Review
              <ArrowRight size={10} />
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}
