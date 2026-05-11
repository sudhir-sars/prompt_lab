export default function PerformanceSection() {
  return (
    <section id="performance" className="section-spacing relative [scroll-margin-top:80px]">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-16">
          <span className="text-[12px] font-medium text-foreground uppercase tracking-widest mb-4 block">Results</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-2xl mx-auto leading-tight text-foreground">
            Teams ship faster and safer with PromptLab
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            Real impact from teams already using PromptLab in production.
          </p>
        </div>

        {/* Large Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <BigMetric value="73%" label="Fewer Incidents" sub="From prompt-related issues" />
          <BigMetric value="4x" label="Faster Iteration" sub="Average time to update prompts" />
          <BigMetric value="38%" label="Lower Cost" sub="Average token cost reduction" />
          <BigMetric value="<5s" label="Recovery Time" sub="To revert a bad change" />
        </div>

        {/* Performance Dashboard */}
        <div className="rounded-xl border border-border bg-card p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
            <div>
              <h3 className="text-sm font-semibold mb-1 text-foreground">Live Dashboard</h3>
              <p className="text-[12px] text-muted">checkout-assistant · last 24 hours</p>
            </div>
            <span className="flex items-center gap-1.5 rounded-full bg-emerald-subtle border border-emerald-border px-2.5 py-1 text-[11px] text-emerald font-medium mt-3 md:mt-0">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
              All Healthy
            </span>
          </div>

          {/* Mini charts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ChartCard label="Quality Score" value="94.2" change="↑ 3.2%" changeColor="text-emerald"
              bars={[70, 72, 71, 74, 76, 78, 80, 82, 85, 84, 86, 88, 90, 89, 91, 92, 93, 94]}
              barColor="bg-emerald/20 hover:bg-emerald/35" />
            <ChartCard label="Avg. Response Time" value="285ms" change="↓ 16%" changeColor="text-emerald"
              bars={[40, 35, 42, 38, 30, 28, 32, 25, 22, 20, 23, 21, 19, 20, 18, 22, 20, 19]}
              barColor="bg-foreground/15 hover:bg-foreground/25" />
            <ChartCard label="Error Rate" value="0.8%" change="↓ 62%" changeColor="text-emerald"
              bars={[15, 12, 10, 8, 6, 5, 4, 3, 4, 3, 2, 3, 2, 2, 1, 2, 1, 1]}
              barColor="bg-rose/20 hover:bg-rose/35" />
          </div>
        </div>
      </div>
    </section>
  );
}

function BigMetric({ value, label, sub }: { value: string; label: string; sub: string }) {
  return (
    <div className="metric-card text-center">
      <div className="text-3xl md:text-4xl font-bold font-mono text-foreground mb-2">{value}</div>
      <div className="text-sm font-semibold text-foreground mb-1">{label}</div>
      <div className="text-[12px] text-muted">{sub}</div>
    </div>
  );
}

function ChartCard({ label, value, change, changeColor, bars, barColor }: {
  label: string; value: string; change: string; changeColor: string; bars: number[]; barColor: string;
}) {
  return (
    <div className="rounded-lg bg-background-secondary border border-border p-4">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[12px] text-muted-foreground font-medium">{label}</span>
        <span className={`text-[12px] font-mono ${changeColor}`}>{change}</span>
      </div>
      <div className="text-xl font-bold font-mono text-foreground mb-3">{value}</div>
      <div className="flex items-end gap-1 h-16">
        {bars.map((h, i) => (
          <div key={i} className={`flex-1 rounded-sm ${barColor}`} style={{ height: `${h * 2}%` }} />
        ))}
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-[10px] text-muted">24h ago</span>
        <span className="text-[10px] text-muted">now</span>
      </div>
    </div>
  );
}
