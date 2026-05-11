export default function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M3 10H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M3 10L8 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M10 10L17 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M10 10L17 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      title: "Gradual Rollouts",
      desc: "Route a small percentage of users to a new prompt first. Scale up only when you see it working.",
      color: "text-blue",
      bg: "bg-blue-subtle",
      border: "border-blue-border",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="2" y="4" width="7" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
          <rect x="11" y="4" width="7" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M5.5 7V9M14.5 7V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      title: "A/B Testing",
      desc: "Run controlled experiments with real users. See which prompt version performs better with actual data.",
      color: "text-emerald",
      bg: "bg-emerald-subtle",
      border: "border-emerald-border",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M14 6L6 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M6 6L6 14L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Instant Rollback",
      desc: "Something went wrong? Revert to the previous prompt in seconds. No waiting, no downtime.",
      color: "text-rose",
      bg: "bg-rose-subtle",
      border: "border-rose-border",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M3 15L7 9L11 12L17 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="17" cy="5" r="1.5" fill="currentColor" />
        </svg>
      ),
      title: "Real-time Analytics",
      desc: "Track quality scores, response times, costs, and error rates. Know the impact of every change instantly.",
      color: "text-blue",
      bg: "bg-blue-subtle",
      border: "border-blue-border",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="2" y="3" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M2 10H18" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10 3V17" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
      title: "Side-by-Side Comparison",
      desc: "Compare prompt versions visually. See exactly what changed and how it affected results before going live.",
      color: "text-amber",
      bg: "bg-amber-subtle",
      border: "border-amber-border",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10 6V10L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Version History",
      desc: "Every prompt change is saved automatically. Browse your full history and restore any previous version.",
      color: "text-foreground",
      bg: "bg-accent-subtle",
      border: "border-accent-border",
    },
  ];

  return (
    <section id="features" className="[scroll-margin-top:80px]">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-16">
          <span className="text-[12px] font-medium text-foreground uppercase tracking-widest mb-4 block">Capabilities</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-2xl mx-auto leading-tight text-foreground">
            Everything you need to manage AI prompts safely
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            The tools your team needs to update, test, and improve prompts with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div key={feature.title} className="feature-card group">
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${feature.bg} border ${feature.border} mb-4`}>
                <span className={feature.color}>{feature.icon}</span>
              </div>
              <h3 className="text-[15px] font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-[13px] text-muted-foreground  leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
