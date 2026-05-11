export default function DeveloperExperienceSection() {
  return (
    <section id="developer-experience" className="section-spacing relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="text-[12px] font-medium text-foreground uppercase tracking-widest mb-4 block">Developer Experience</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto leading-tight text-foreground">
            Built for infrastructure engineers
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            CLI-first. API-native. Config-as-code. Works with your existing deployment pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* CLI Commands */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot bg-[#ff5f57]" />
              <div className="terminal-dot bg-[#febc2e]" />
              <div className="terminal-dot bg-[#28c840]" />
              <span className="text-[11px] text-zinc-500 ml-2 font-mono">CLI — promptlab</span>
            </div>
            <div className="p-5 font-mono text-[12px] space-y-4">
              <div>
                <div className="text-zinc-500"># Initialize prompt project</div>
                <div><span className="text-emerald-400">$</span> <span className="text-zinc-200">promptlab init --project checkout-ai</span></div>
              </div>
              <div>
                <div className="text-zinc-500"># Deploy with traffic split</div>
                <div><span className="text-emerald-400">$</span> <span className="text-zinc-200">promptlab deploy checkout-assistant \</span></div>
                <div className="pl-6 text-zinc-200">--env production \</div>
                <div className="pl-6 text-zinc-200">--traffic 10% --canary</div>
              </div>
              <div>
                <div className="text-zinc-500"># Check deployment status</div>
                <div><span className="text-emerald-400">$</span> <span className="text-zinc-200">promptlab status checkout-assistant</span></div>
                <div className="text-zinc-500 mt-1">
                  <span className="text-emerald-400">●</span> v2.4 — 10% traffic — healthy<br />
                  <span className="text-zinc-300">●</span> v2.3 — 90% traffic — stable
                </div>
              </div>
            </div>
          </div>

          {/* YAML Config */}
          <CodeBlock title="promptlab.deploy.yml" lang="YAML">{`deployment:
  prompt: checkout-assistant
  version: v2.4
  environment: production

  strategy:
    type: canary
    initial_traffic: 5%
    increment: 10%
    interval: 30m

  health_checks:
    quality_threshold: 0.90
    latency_p95_max: 500ms
    error_rate_max: 0.01

  rollback:
    auto: true
    on_failure: revert_to_stable`}</CodeBlock>

          {/* API Snippet */}
          <CodeBlock title="runtime.ts" lang="TypeScript">{`import { PromptLab } from '@promptlab/sdk'

const client = new PromptLab({
  apiKey: process.env.PROMPTLAB_API_KEY,
});

// Resolve prompt at runtime
const prompt = await client.resolve({
  name: 'checkout-assistant',
  environment: 'production',
  context: { userId, cartTotal },
});

// prompt.version  → "v2.4"
// prompt.template → resolved template
// prompt.metadata → deployment info`}</CodeBlock>

          {/* Traffic Config */}
          <CodeBlock title="traffic.config.json" lang="JSON">{`{
  "prompt": "checkout-assistant",
  "rules": [
    {
      "version": "v2.3",
      "weight": 60,
      "tag": "stable"
    },
    {
      "version": "v2.4-beta",
      "weight": 25,
      "tag": "canary"
    },
    {
      "version": "v2.4-rc",
      "weight": 15,
      "tag": "experiment"
    }
  ]
}`}</CodeBlock>
        </div>
      </div>
    </section>
  );
}

function CodeBlock({ title, lang, children }: { title: string; lang: string; children: string }) {
  const lines = children.split('\n');
  return (
    <div className="code-block">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <span className="text-[11px] font-mono text-muted">{title}</span>
        <span className="text-[10px] text-muted/60 uppercase tracking-wider">{lang}</span>
      </div>
      <div className="p-5 font-mono text-[12px] leading-6 overflow-x-auto">
        {lines.map((line, i) => (
          <div key={i} className="flex">
            <span className="code-line-number text-[11px]">{i + 1}</span>
            <span className="text-muted-foreground ">{line || '\u00A0'}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
