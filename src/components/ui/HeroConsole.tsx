import { useState, useEffect } from 'react';
import { 
  Terminal, 
  Activity, 
  ShieldCheck, 
  Cpu, 
  Database, 
  Network, 
  ArrowRight,
  Lock
} from 'lucide-react';
import { cn } from '../../lib/utils';

interface PipelineProfile {
  id: string;
  name: string;
  subtitle: string;
  latency: string;
  throughput: string;
  accuracy: string;
  status: string;
  nodes: {
    title: string;
    tech: string;
    status: 'active' | 'synced' | 'verified';
  }[];
  traceLogs: string[];
}

const pipelineProfiles: PipelineProfile[] = [
  {
    id: 'rag',
    name: 'Enterprise OmniRAG™',
    subtitle: 'Hybrid Dense-Sparse Vector Retrieval & Citation Grounding',
    latency: '18.4ms',
    throughput: '1,420 req/s',
    accuracy: '99.7%',
    status: 'GROUNDED & DETERMINISTIC',
    nodes: [
      { title: 'Data Ingestion', tech: 'S3 / ERP Connectors / Chunking', status: 'synced' },
      { title: 'Vector Routing', tech: 'Hybrid Dense (BGE) + BM25', status: 'active' },
      { title: 'Context Guard', tech: 'PII Scrubbing & Strict RBAC', status: 'verified' },
      { title: 'Inference Node', tech: 'Fine-Tuned Llama-3-70B vLLM', status: 'active' }
    ],
    traceLogs: [
      '[14:22:01.104] INGEST: 1,240 enterprise documents parsed via OCR pipeline',
      '[14:22:01.122] VECTOR: Indexing completed. 48,200 chunks mapped to Qdrant cluster',
      '[14:22:01.139] QUERY: "Extract quarterly inventory liabilities under ASC 842"',
      '[14:22:01.157] RETRIEVAL: Top 6 grounded chunks retrieved with similarity > 0.94',
      '[14:22:01.176] GUARDRAIL: Zero PII detected. Factuality confidence: 99.8%',
      '[14:22:01.192] RESPONSE: Deterministic payload returned [HTTP 200 OK • 18.4ms]'
    ]
  },
  {
    id: 'agents',
    name: 'AgentOps Orchestrator',
    subtitle: 'Multi-Agent Tool-Calling & Verification Workflows',
    latency: '34.2ms',
    throughput: '890 flows/min',
    accuracy: '99.9%',
    status: 'POLICY GOVERNED',
    nodes: [
      { title: 'Event Trigger', tech: 'Webhook / Kafka Transaction Stream', status: 'synced' },
      { title: 'Planning Agent', tech: 'Chain-of-Thought Task Decomposition', status: 'active' },
      { title: 'Tool Execution', tech: 'SAP / Salesforce / SQL APIs', status: 'active' },
      { title: 'Human-in-Loop', tech: 'Policy Threshold Verification', status: 'verified' }
    ],
    traceLogs: [
      '[14:22:02.040] EVENT: Discrepancy detected in cross-border bill of lading #BL-992',
      '[14:22:02.061] AGENT-01: Cross-referencing customs tariff code against HS-2026 db',
      '[14:22:02.078] AGENT-02: Auto-generating revised reconciliation entry',
      '[14:22:02.095] VERIFICATION: Value within $50k auto-approval threshold',
      '[14:22:02.112] ACTION: SAP transaction executed [POST /v2/ledger • 34.2ms]'
    ]
  },
  {
    id: 'vision',
    name: 'VisionEdge™ Industrial',
    subtitle: 'Sub-Millisecond Optical Defect Classification',
    latency: '8.2ms',
    throughput: '120 frames/sec',
    accuracy: '99.85%',
    status: 'LOW LATENCY EDGE',
    nodes: [
      { title: 'Optical Stream', tech: '4K Industrial GigE Camera Feeds', status: 'synced' },
      { title: 'Edge TensorRT', tech: 'YOLOv11 + Custom Patch Transformer', status: 'active' },
      { title: 'Surface Defect', tech: 'Micron-level Crack & Tolerance Check', status: 'verified' },
      { title: 'PLC Interlock', tech: 'Instant Pneumatic Ejection Signal', status: 'active' }
    ],
    traceLogs: [
      '[14:22:02.801] FRAME_CAPTURE: Frame #184920 ingested via GigE Vision interface',
      '[14:22:02.805] INFERENCE: TensorRT engine evaluation on Jetson Orin GPU',
      '[14:22:02.809] DETECTION: 0.12mm micro-fissure identified at coordinates [x:412, y:890]',
      '[14:22:02.812] SIGNAL: PLC trigger dispatched to pneumatic ejector [8.2ms latency]'
    ]
  }
];

export default function HeroConsole() {
  const [activeProfileId, setActiveProfileId] = useState('rag');
  const [logIndex, setLogIndex] = useState(0);

  const activeProfile = pipelineProfiles.find(p => p.id === activeProfileId) || pipelineProfiles[0];

  useEffect(() => {
    const interval = setInterval(() => {
      setLogIndex(prev => (prev + 1) % activeProfile.traceLogs.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [activeProfile]);

  return (
    <div className="w-full rounded-xl overflow-hidden border border-[var(--color-surface-dark-border)] bg-[var(--color-surface-dark)] shadow-2xl font-sans">
      
      {/* Console Top Header Bar */}
      <div className="px-4 py-3 bg-[#0B1528] border-b border-[var(--color-surface-dark-border)] flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-[var(--color-text-inverse-muted)] font-mono text-[11px] font-semibold tracking-wider flex items-center gap-2">
            <Terminal size={13} className="text-[var(--color-brand-cyan)]" />
            DIBEXA AI WORKBENCH // v2.4.9
          </span>
        </div>

        <div className="flex items-center gap-4 text-[11px] font-mono">
          <span className="text-emerald-400 flex items-center gap-1.5 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            LIVE RUNTIME
          </span>
          <span className="hidden sm:inline text-slate-400 border-l border-slate-700 pl-3">
            AIR-GAPPED / VPC READY
          </span>
        </div>
      </div>

      {/* Profile / Architecture Tabs */}
      <div className="px-4 pt-3 pb-0 bg-[#08101E] border-b border-[var(--color-surface-dark-border)] flex items-center gap-2 overflow-x-auto no-scrollbar">
        {pipelineProfiles.map(profile => (
          <button
            key={profile.id}
            onClick={() => {
              setActiveProfileId(profile.id);
              setLogIndex(0);
            }}
            className={cn(
              "px-3.5 py-2 rounded-t text-xs font-mono font-medium transition-all cursor-pointer whitespace-nowrap border-b-2 flex items-center gap-2",
              activeProfileId === profile.id
                ? "bg-[var(--color-surface-dark)] text-white border-[var(--color-brand-cyan)] font-bold"
                : "text-slate-400 hover:text-slate-200 border-transparent hover:bg-white/5"
            )}
          >
            {profile.id === 'rag' && <Database size={13} className="text-[var(--color-brand-cyan)]" />}
            {profile.id === 'agents' && <Cpu size={13} className="text-[var(--color-brand-blue)]" />}
            {profile.id === 'vision' && <Activity size={13} className="text-emerald-400" />}
            <span>{profile.name}</span>
          </button>
        ))}
      </div>

      {/* Main Console Body */}
      <div className="p-5 md:p-6 space-y-6">
        
        {/* Architecture Profile Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--color-brand-cyan)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-cyan)]" />
              {activeProfile.status}
            </div>
            <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
              {activeProfile.name}
            </h3>
            <p className="text-xs text-slate-300 font-mono mt-0.5">
              {activeProfile.subtitle}
            </p>
          </div>

          {/* Quick Telemetry Badges */}
          <div className="grid grid-cols-3 gap-2 shrink-0 font-mono text-center">
            <div className="px-3 py-1.5 bg-[#0F1B30] border border-white/10 rounded">
              <div className="text-[10px] text-slate-400 uppercase">Inference Latency</div>
              <div className="text-sm font-bold text-emerald-400">{activeProfile.latency}</div>
            </div>
            <div className="px-3 py-1.5 bg-[#0F1B30] border border-white/10 rounded">
              <div className="text-[10px] text-slate-400 uppercase">Throughput</div>
              <div className="text-sm font-bold text-cyan-400">{activeProfile.throughput}</div>
            </div>
            <div className="px-3 py-1.5 bg-[#0F1B30] border border-white/10 rounded">
              <div className="text-[10px] text-slate-400 uppercase">Factual Accuracy</div>
              <div className="text-sm font-bold text-blue-400">{activeProfile.accuracy}</div>
            </div>
          </div>
        </div>

        {/* Live Architecture Node Flow */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <Network size={13} className="text-[var(--color-brand-cyan)]" />
              PIPELINE EXECUTION TOPOLOGY
            </span>
            <span className="text-emerald-400 text-[11px]">ALL NODES HEALTHY</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {activeProfile.nodes.map((node, i) => (
              <div 
                key={i} 
                className="p-3 bg-[#0B1528] border border-white/10 rounded relative group hover:border-[var(--color-brand-cyan)]/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono font-bold text-slate-400">
                    STAGE 0{i + 1}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400/90" />
                </div>
                <div className="text-xs font-bold text-white tracking-tight">
                  {node.title}
                </div>
                <div className="text-[10px] text-slate-300 font-mono mt-1 line-clamp-1">
                  {node.tech}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Interactive Telemetry Log Tracer */}
        <div className="bg-[#050B14] p-4 rounded border border-white/10 font-mono text-xs space-y-1.5">
          <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-white/5 pb-2 mb-2">
            <span className="flex items-center gap-2 text-[var(--color-brand-cyan)] font-bold">
              <Activity size={12} className="animate-pulse text-emerald-400" />
              REAL-TIME EXECUTION TRACE
            </span>
            <span className="text-[10px] text-slate-400">STREAMING @ 60 FPS</span>
          </div>

          <div className="space-y-1 overflow-hidden">
            {activeProfile.traceLogs.map((log, index) => {
              const isLatest = index === logIndex;
              return (
                <div 
                  key={index}
                  className={cn(
                    "text-[11px] leading-relaxed transition-all duration-300 font-mono",
                    isLatest 
                      ? "text-emerald-300 font-semibold bg-emerald-950/30 px-2 py-0.5 rounded border-l-2 border-emerald-400" 
                      : index < logIndex 
                        ? "text-slate-400" 
                        : "text-slate-400 opacity-60"
                  )}
                >
                  {log}
                </div>
              );
            })}
          </div>
        </div>

        {/* Security & Deployment Footnote */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-slate-300 pt-1">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-slate-200">
              <ShieldCheck size={13} className="text-emerald-400" />
              SOC2 TYPE II READY
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-slate-200">
              <Lock size={13} className="text-cyan-400" />
              ZERO EXTERNAL DATA RETENTION
            </span>
          </div>
          <div className="text-[var(--color-brand-cyan)] font-semibold flex items-center gap-1 hover:underline cursor-pointer">
            <span>View Architecture Whitepaper</span>
            <ArrowRight size={11} />
          </div>
        </div>

      </div>

    </div>
  );
}
