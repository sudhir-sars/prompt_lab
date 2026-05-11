export default function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "Create a new version",
      desc: "Write or update your prompt in the editor. PromptLab saves every change automatically so you can always go back.",
      visual: (
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[12px] font-medium text-muted-foreground ">Prompt Editor</span>
            <span className="text-[11px] text-emerald font-medium">Auto-saved</span>
          </div>
          <div className="space-y-3 text-[13px] rounded-lg bg-background-secondary border border-border p-4">
            <p className="text-muted-foreground  leading-relaxed">
              You are a helpful checkout assistant. Guide the user through their purchase. Be concise and friendly.
              <span className="bg-blue-subtle text-green-500 px-1 mx-0.5 rounded"> Always suggest related products when the cart value is under $50.</span>
            </p>
          </div>
          <div className="flex items-center gap-4 mt-4 text-[11px] text-muted-foreground ">
            <span>Version 4</span>
            <span>·</span>
            <span>Edited just now</span>
            <span>·</span>
            <span className="text-blue">3 previous versions</span>
          </div>
        </div>
      ),
    },
    {
      num: "02",
      title: "Test with a small audience",
      desc: "Route just 5% or 10% of your users to the new version. See how it performs before rolling it out to everyone.",
      visual: (
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[12px] font-medium  ">Traffic Split</span>
            <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-500 font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
              Active
            </span>
          </div>
          <div className="space-y-3">

            <div className="flex h-2 rounded-full overflow-hidden bg-surface gap-0.5">
              <div className="bg-green-500 rounded-full" style={{ width: '90%' }} />
              <div className="bg-blue-500 rounded-full" style={{ width: '10%' }} />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <span className="text-[13px] text-foreground font-medium">Current version</span>
              </div>
              <span className="text-[13px] font-semibold text-foreground font-mono">90%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-blue-500" />
                <span className="text-[13px] text-foreground font-medium">New version</span>
              </div>
              <span className="text-[13px] font-semibold text-blue font-mono">10%</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      num: "03",
      title: "Compare the results",
      desc: "See side-by-side how the new prompt performs vs. the old one — quality, speed, cost, and accuracy.",
      visual: (
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[12px] font-medium text-muted-foreground ">Experiment Results</span>
            <span className="text-[11px] text-blue font-medium">72h elapsed</span>
          </div>
          <div className="space-y-3">
            <ResultRow label="Quality Score" old="91.4" current="94.2" change="+3.1%" positive />
            <ResultRow label="Avg. Response Time" old="340ms" current="285ms" change="-16%" positive />
            <ResultRow label="Cost per Request" old="$0.0034" current="$0.0021" change="-38%" positive />
            <ResultRow label="Error Rate" old="2.1%" current="0.8%" change="-62%" positive />
          </div>
          <div className="mt-4 pt-3 border-t border-border flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald" />
            <span className="text-[11px] text-emerald font-medium">New version is outperforming</span>
          </div>
        </div>
      ),
    },
    {
      num: "04",
      title: "Roll out or roll back",
      desc: "If the new version wins, push it to all users. If not, revert instantly — no damage done.",
      visual: (
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-emerald-subtle border border-emerald-border mx-auto">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12L10 17L19 7" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">New version promoted</p>
              <p className="text-[12px] text-muted-foreground  mt-1">Now serving 100% of traffic</p>
            </div>
            <div className="flex items-center justify-center gap-3 text-[12px]">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-background-secondary border border-border px-3 py-1 text-muted-foreground ">
                Quality: <span className="text-emerald font-medium">+3.1%</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-background-secondary border border-border px-3 py-1 text-muted-foreground ">
                Cost: <span className="text-emerald font-medium">-38%</span>
              </span>
            </div>
            <p className="text-[11px] text-muted-foreground ">Previous version saved as rollback point</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="section-spacing relative bg-background-secondary py-32 [scroll-margin-top:10px]">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-20">
          <span className="text-[12px] font-medium text-foreground uppercase tracking-widest mb-4 block">How It Works</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-2xl mx-auto leading-tight text-foreground">
            Four steps to safer prompt updates
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            A simple workflow that removes the risk from changing AI prompts.
          </p>
        </div>

        <div className="space-y-12 md:space-y-20">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-14`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[13px] font-mono font-bold text-foreground">{step.num}</span>
                  <div className="h-px flex-1 bg-border max-w-[60px]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground  text-base leading-relaxed max-w-md">{step.desc}</p>
              </div>
              <div className="flex-1 w-full max-w-md">{step.visual}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResultRow({ label, old, current, change, positive }: {
  label: string; old: string; current: string; change: string; positive: boolean;
}) {
  return (
    <div className="flex items-center justify-between text-[12px]">
      <span className="text-muted-foreground  w-32">{label}</span>
      <span className="text-muted-foreground  w-16 text-right font-mono">{old}</span>
      <span className="text-muted-foreground  w-16 text-right font-mono font-medium">{current}</span>
      <span className={`w-14 text-right font-mono font-medium ${positive ? 'text-emerald' : 'text-rose'}`}>
        {change}
      </span>
    </div>
  );
}
