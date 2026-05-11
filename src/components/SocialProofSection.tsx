export default function SocialProofSection() {
  const testimonials = [
    {
      quote: "We used to dread updating our AI prompts. One bad change could ruin the experience for thousands of users. PromptLab lets us test changes safely and roll back in seconds if needed.",
      name: "Sarah Chen",
      role: "Head of AI Product",
      company: "Meridian AI",
    },
    {
      quote: "We manage over 200 prompts across our products. PromptLab gave us one place to manage them all, with version history and the ability to A/B test every change.",
      name: "James Okonkwo",
      role: "VP of Engineering",
      company: "Nexus Labs",
    },
    {
      quote: "The impact was immediate. Our prompt-related incidents dropped by 70%, and our team updates prompts 4x more frequently because they're no longer afraid to make changes.",
      name: "Priya Sharma",
      role: "Director of AI Products",
      company: "Arclight",
    },
  ];

  return (
    <section className="section-spacing relative bg-background-secondary py-30">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-16">
          <span className="text-[12px] font-medium text-foreground uppercase tracking-widest mb-4 block">What Teams Are Saying</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-2xl mx-auto leading-tight text-foreground">
            Trusted by teams building with AI
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl border border-border bg-card p-6 flex flex-col">
              <p className="text-[13px] text-muted-foreground  leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 pt-4 border-t border-border">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-background-secondary border border-border flex items-center justify-center text-[12px] font-semibold text-foreground">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-foreground">{t.name}</div>
                    <div className="text-[11px] text-muted-foreground">{t.role} · {t.company}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
