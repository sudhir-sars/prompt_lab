export default function ArchitectureSection() {
  return (
    <section id="architecture" className="section-spacing relative bg-background-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="text-[12px] font-medium text-foreground uppercase tracking-widest mb-4 block">Architecture</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto leading-tight text-foreground">
            Real infrastructure, not a wrapper
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Purpose-built systems for prompt lifecycle management at scale.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="rounded-xl border border-border bg-card p-6 md:p-10 overflow-x-auto">
          <div className="min-w-[700px]">
            {/* Top Layer */}
            <div className="flex justify-center mb-6">
              <div className="arch-node arch-node-accent flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue" />
                API Gateway
              </div>
            </div>

            <div className="flex justify-center mb-6">
              <div className="w-px h-8 bg-border" />
            </div>

            {/* Core Layer */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="flex flex-col items-center gap-4">
                <div className="arch-node w-full text-center">
                  <div className="text-foreground text-[10px] uppercase tracking-wider mb-1 font-semibold">Storage</div>
                  Prompt Store
                </div>
                <div className="w-px h-6 bg-border" />
                <div className="arch-node w-full text-center">
                  <div className="text-blue text-[10px] uppercase tracking-wider mb-1 font-semibold">Versioning</div>
                  Version Graph
                </div>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="arch-node arch-node-accent w-full text-center">
                  <div className="text-blue text-[10px] uppercase tracking-wider mb-1 font-semibold">Core</div>
                  Runtime Resolver
                </div>
                <div className="w-px h-6 bg-blue/20" />
                <div className="arch-node w-full text-center">
                  <div className="text-emerald text-[10px] uppercase tracking-wider mb-1 font-semibold">Routing</div>
                  Traffic Router
                </div>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="arch-node w-full text-center">
                  <div className="text-amber text-[10px] uppercase tracking-wider mb-1 font-semibold">Experiments</div>
                  Experiment Engine
                </div>
                <div className="w-px h-6 bg-border" />
                <div className="arch-node w-full text-center">
                  <div className="text-cyan text-[10px] uppercase tracking-wider mb-1 font-semibold">Control</div>
                  Deployment Controller
                </div>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center mb-6">
              <div className="glow-line w-full max-w-lg" />
            </div>

            {/* Bottom Layer */}
            <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
              <div className="arch-node text-center">
                <div className="text-blue text-[10px] uppercase tracking-wider mb-1 font-semibold">Data</div>
                Metrics Pipeline
              </div>
              <div className="arch-node text-center">
                <div className="text-emerald text-[10px] uppercase tracking-wider mb-1 font-semibold">Performance</div>
                Runtime Cache
              </div>
            </div>
          </div>
        </div>

        {/* Architecture Properties */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { label: "Edge-deployed", desc: "Global presence, sub-ms resolution" },
            { label: "Event-driven", desc: "Async metrics pipeline" },
            { label: "Zero-downtime", desc: "Hot-swap prompt versions" },
            { label: "Multi-tenant", desc: "Isolated prompt namespaces" },
          ].map((prop) => (
            <div key={prop.label} className="rounded-lg border border-border bg-card p-4">
              <h4 className="text-[13px] font-semibold mb-1 text-foreground">{prop.label}</h4>
              <p className="text-[12px] text-muted">{prop.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
