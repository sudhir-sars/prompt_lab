export default function ProblemSection() {
  const problems = [
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M9 3V10M9 13V14" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="9" cy="9" r="7" stroke="#dc2626" strokeWidth="1.5" />
        </svg>
      ),
      title: "No way to undo mistakes",
      desc: "A bad prompt goes live and there's no quick way to revert. Your team scrambles while users experience degraded quality.",
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M3 9L7 13L15 5" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="3" y1="3" x2="15" y2="15" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      title: "All-or-nothing changes",
      desc: "Every prompt update goes to 100% of users immediately. No gradual rollout, no testing with real traffic first.",
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <circle cx="9" cy="9" r="7" stroke="#dc2626" strokeWidth="1.5" />
          <path d="M6 6L12 12M12 6L6 12" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      title: "No visibility into impact",
      desc: "You change a prompt but can't tell if it helped or hurt. No quality metrics, no cost tracking, no before-and-after comparison.",
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M9 2L16 6V12L9 16L2 12V6L9 2Z" stroke="#dc2626" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      ),
      title: "Risky updates",
      desc: "Every prompt change is high-stakes. One wrong edit can spike costs, increase errors, or break the user experience.",
    },
  ];

  return (
    <section className="section-spacing relative bg-background-secondary">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[12px] font-medium text-rose uppercase tracking-widest mb-4 block">The Problem</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-2xl mx-auto leading-tight text-foreground">
            Changing AI prompts shouldn&apos;t feel this dangerous
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            One prompt tweak can spike costs, break workflows, and degrade quality — yet most teams have no safety net.
          </p>
        </div>

        {/* Problem Cards — 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {problems.map((problem) => (
            <div key={problem.title} className="group rounded-xl border border-border bg-card p-6 hover:border-rose-border hover:bg-card-hover">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-rose-subtle border border-rose-border">
                  {problem.icon}
                </div>
                <h3 className="text-sm font-semibold text-foreground">{problem.title}</h3>
              </div>
              <p className="text-[13px] text-muted-foreground leading-relaxed">{problem.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
