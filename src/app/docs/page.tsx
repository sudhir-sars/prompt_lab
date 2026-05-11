import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "API Docs — PromptLab",
  description:
    "PromptLab API reference. Authenticate, resolve prompts, manage versions, and deploy — all via REST.",
};

function CodeBlock({ code, lang = "bash" }: { code: string; lang?: string }) {
  return (
    <div className="rounded-lg border border-border bg-[#fafafa] overflow-x-auto">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border">
        <span className="text-[11px] font-mono text-muted-foreground">{lang}</span>
      </div>
      <pre className="px-4 py-4 text-[12px] font-mono text-foreground leading-relaxed whitespace-pre">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function SectionHeader({ id, title, description }: { id: string; title: string; description?: string }) {
  return (
    <div id={id} className="scroll-mt-24 mb-6">
      <h2 className="text-xl font-bold tracking-tight text-foreground mb-1.5">{title}</h2>
      {description && <p className="text-[14px] text-muted-foreground leading-relaxed">{description}</p>}
    </div>
  );
}

const navItems = [
  { label: "Authentication", href: "#authentication" },
  { label: "Rate Limits", href: "#rate-limits" },
  { label: "Resolve Prompt", href: "#resolve" },
  { label: "List Prompts", href: "#list-prompts" },
  { label: "Create Version", href: "#create-version" },
  { label: "Deploy Version", href: "#deploy-version" },
  { label: "Rollback", href: "#rollback" },
  { label: "Errors", href: "#errors" },
];

export default function ApiDocsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-20">
        <div className="mx-auto max-w-6xl px-6 py-12 flex gap-12">
          {/* Sidebar nav */}
          <aside className="hidden lg:block w-48 shrink-0">
            <div className="sticky top-24">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                On this page
              </p>
              <nav className="space-y-0.5">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-[13px] text-muted-foreground hover:text-foreground transition-colors py-1.5 px-2 rounded-md hover:bg-muted"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main docs content */}
          <div className="flex-1 min-w-0 space-y-16 max-w-3xl">
            {/* Overview */}
            <div>
              <Badge variant="outline" className="mb-5 text-[11px] rounded-full px-3 py-1.5">
                API Reference
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
                PromptLab API
              </h1>
              <p className="text-[14px] text-muted-foreground leading-relaxed mb-4">
                The PromptLab REST API lets you resolve prompts, manage versions, configure
                traffic rules, and trigger deployments — all programmatically.
              </p>
              <div className="flex items-center gap-2 rounded-lg border border-border bg-muted/40 px-4 py-2.5">
                <span className="text-[12px] font-mono text-muted-foreground">Base URL:</span>
                <span className="text-[12px] font-mono font-medium text-foreground">https://api.promptlab.dev/v1</span>
              </div>
            </div>

            {/* Authentication */}
            <div>
              <SectionHeader
                id="authentication"
                title="Authentication"
                description="All API requests require an API key passed in the Authorization header as a Bearer token. Generate API keys from your workspace settings."
              />
              <CodeBlock
                lang="bash"
                code={`curl https://api.promptlab.dev/v1/prompts \\
  -H "Authorization: Bearer pl_sk_live_your_api_key_here"`}
              />
              <div className="mt-4 rounded-lg border border-amber/20 bg-amber/5 px-4 py-3">
                <p className="text-[13px] text-amber-700 leading-relaxed">
                  <span className="font-semibold">Keep your API key secret.</span> Do not commit it to source control. Use environment variables — e.g. <code className="font-mono bg-amber/10 px-1 rounded text-[12px]">PROMPTLAB_API_KEY</code>.
                </p>
              </div>
            </div>

            {/* Rate Limits */}
            <div>
              <SectionHeader
                id="rate-limits"
                title="Rate Limits"
                description="Rate limits are enforced per API key. Limits vary by endpoint and plan."
              />
              <div className="rounded-lg border border-border overflow-hidden mb-4">
                <table className="w-full text-[13px]">
                  <thead>
                    <tr className="border-b border-border bg-muted/40">
                      <th className="text-left px-4 py-2.5 font-semibold text-foreground">Endpoint</th>
                      <th className="text-left px-4 py-2.5 font-semibold text-foreground">Free</th>
                      <th className="text-left px-4 py-2.5 font-semibold text-foreground">Pro</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      ["POST /resolve", "10 req/s", "500 req/s"],
                      ["GET /prompts", "30 req/min", "300 req/min"],
                      ["POST /versions", "20 req/min", "200 req/min"],
                      ["POST /deploy", "5 req/min", "60 req/min"],
                    ].map(([endpoint, free, pro]) => (
                      <tr key={endpoint}>
                        <td className="px-4 py-2.5 font-mono text-[12px] text-foreground">{endpoint}</td>
                        <td className="px-4 py-2.5 text-muted-foreground">{free}</td>
                        <td className="px-4 py-2.5 text-muted-foreground">{pro}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[13px] text-muted-foreground">
                When rate limited, the API returns <code className="font-mono bg-muted px-1 rounded text-[12px]">429 Too Many Requests</code> with a{" "}
                <code className="font-mono bg-muted px-1 rounded text-[12px]">Retry-After</code> header indicating when you can retry.
              </p>
            </div>

            {/* Resolve */}
            <div>
              <SectionHeader
                id="resolve"
                title="Resolve a Prompt"
                description="The core API. Given a prompt name and a user identifier, returns the correct prompt version based on your configured traffic rules."
              />
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-blue/10 text-blue border-0 text-[11px] font-mono px-2 py-0.5 rounded">POST</Badge>
                <span className="text-[13px] font-mono text-foreground">/v1/resolve</span>
              </div>
              <CodeBlock
                lang="bash"
                code={`curl -X POST https://api.promptlab.dev/v1/resolve \\
  -H "Authorization: Bearer pl_sk_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "checkout-assistant",
    "user_id": "usr_8f3k2a",
    "context": {
      "cart_value": 42.50,
      "locale": "en-US"
    }
  }'`}
              />
              <p className="text-[13px] text-muted-foreground my-4">Response:</p>
              <CodeBlock
                lang="json"
                code={`{
  "prompt": "checkout-assistant",
  "version": "v4",
  "content": "You are a helpful checkout assistant. Guide the user through their purchase. Be concise and friendly. Always suggest related products when the cart value is under $50.",
  "resolved_at": "2025-05-08T14:23:01Z",
  "traffic_rule": "experiment-april"
}`}
              />
              <div className="mt-5 space-y-2.5">
                {[
                  { field: "prompt", type: "string", required: true, desc: "The prompt name as configured in your workspace." },
                  { field: "user_id", type: "string", required: true, desc: "A stable identifier for the end user. Used for consistent hashing to ensure sticky assignment." },
                  { field: "context", type: "object", required: false, desc: "Optional key-value map passed to variable interpolation and targeting rules." },
                ].map((p) => (
                  <div key={p.field} className="flex gap-3 text-[13px] py-2 border-b border-border last:border-0">
                    <code className="font-mono text-foreground w-28 shrink-0">{p.field}</code>
                    <span className="text-muted-foreground/60 w-14 shrink-0">{p.type}</span>
                    <span className="text-muted-foreground leading-relaxed">{p.desc}</span>
                    {p.required && <Badge variant="outline" className="ml-auto text-[10px] h-5 self-start shrink-0">required</Badge>}
                  </div>
                ))}
              </div>
            </div>

            {/* List Prompts */}
            <div>
              <SectionHeader
                id="list-prompts"
                title="List Prompts"
                description="Retrieve all prompts in your workspace."
              />
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-emerald/10 text-emerald border-0 text-[11px] font-mono px-2 py-0.5 rounded">GET</Badge>
                <span className="text-[13px] font-mono text-foreground">/v1/prompts</span>
              </div>
              <CodeBlock
                lang="bash"
                code={`curl https://api.promptlab.dev/v1/prompts \\
  -H "Authorization: Bearer pl_sk_live_..."`}
              />
              <p className="text-[13px] text-muted-foreground my-4">Response:</p>
              <CodeBlock
                lang="json"
                code={`{
  "prompts": [
    {
      "id": "prm_abc123",
      "name": "checkout-assistant",
      "active_version": "v4",
      "version_count": 7,
      "updated_at": "2025-05-08T14:00:00Z"
    },
    {
      "id": "prm_def456",
      "name": "support-bot",
      "active_version": "v2",
      "version_count": 3,
      "updated_at": "2025-04-30T09:12:00Z"
    }
  ],
  "total": 2
}`}
              />
            </div>

            {/* Create Version */}
            <div>
              <SectionHeader
                id="create-version"
                title="Create a Version"
                description="Save a new version of a prompt. Creating a version does not deploy it — use the Deploy endpoint to route traffic."
              />
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-blue/10 text-blue border-0 text-[11px] font-mono px-2 py-0.5 rounded">POST</Badge>
                <span className="text-[13px] font-mono text-foreground">/v1/prompts/:prompt_id/versions</span>
              </div>
              <CodeBlock
                lang="bash"
                code={`curl -X POST https://api.promptlab.dev/v1/prompts/prm_abc123/versions \\
  -H "Authorization: Bearer pl_sk_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "content": "You are a helpful checkout assistant. Guide the user through their purchase. Be concise and friendly.",
    "message": "Remove product suggestion — A/B test showed no uplift"
  }'`}
              />
              <p className="text-[13px] text-muted-foreground my-4">Response:</p>
              <CodeBlock
                lang="json"
                code={`{
  "version_id": "ver_xyz789",
  "version": "v5",
  "prompt_id": "prm_abc123",
  "content_hash": "sha256:a3f4...",
  "message": "Remove product suggestion — A/B test showed no uplift",
  "created_by": "usr_team_member",
  "created_at": "2025-05-08T15:10:00Z"
}`}
              />
            </div>

            {/* Deploy */}
            <div>
              <SectionHeader
                id="deploy-version"
                title="Deploy a Version"
                description="Configure traffic routing for a prompt. Supports gradual rollouts by specifying weights per version. Weights must sum to 100."
              />
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-blue/10 text-blue border-0 text-[11px] font-mono px-2 py-0.5 rounded">POST</Badge>
                <span className="text-[13px] font-mono text-foreground">/v1/prompts/:prompt_id/deploy</span>
              </div>
              <CodeBlock
                lang="bash"
                code={`curl -X POST https://api.promptlab.dev/v1/prompts/prm_abc123/deploy \\
  -H "Authorization: Bearer pl_sk_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "traffic": [
      { "version": "v4", "weight": 90 },
      { "version": "v5", "weight": 10 }
    ],
    "label": "canary-v5-10pct"
  }'`}
              />
              <p className="text-[13px] text-muted-foreground my-4">Response:</p>
              <CodeBlock
                lang="json"
                code={`{
  "deployment_id": "dep_mn0pqr",
  "prompt_id": "prm_abc123",
  "label": "canary-v5-10pct",
  "traffic": [
    { "version": "v4", "weight": 90 },
    { "version": "v5", "weight": 10 }
  ],
  "deployed_at": "2025-05-08T15:12:00Z",
  "deployed_by": "usr_team_member"
}`}
              />
            </div>

            {/* Rollback */}
            <div>
              <SectionHeader
                id="rollback"
                title="Rollback"
                description="Instantly revert to the previous stable deployment. Routes 100% of traffic back to the last fully-deployed version."
              />
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-rose/10 text-rose border-0 text-[11px] font-mono px-2 py-0.5 rounded">POST</Badge>
                <span className="text-[13px] font-mono text-foreground">/v1/prompts/:prompt_id/rollback</span>
              </div>
              <CodeBlock
                lang="bash"
                code={`curl -X POST https://api.promptlab.dev/v1/prompts/prm_abc123/rollback \\
  -H "Authorization: Bearer pl_sk_live_..."`}
              />
              <p className="text-[13px] text-muted-foreground my-4">Response:</p>
              <CodeBlock
                lang="json"
                code={`{
  "rolled_back_to": "dep_prev_deployment_id",
  "version": "v4",
  "rolled_back_at": "2025-05-08T15:14:00Z"
}`}
              />
            </div>

            {/* Errors */}
            <div>
              <SectionHeader
                id="errors"
                title="Errors"
                description="The API uses standard HTTP status codes. All error responses include a machine-readable code and a human-readable message."
              />
              <div className="rounded-lg border border-border overflow-hidden mb-5">
                <table className="w-full text-[13px]">
                  <thead>
                    <tr className="border-b border-border bg-muted/40">
                      <th className="text-left px-4 py-2.5 font-semibold text-foreground">Status</th>
                      <th className="text-left px-4 py-2.5 font-semibold text-foreground">Code</th>
                      <th className="text-left px-4 py-2.5 font-semibold text-foreground">Meaning</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      ["400", "invalid_request", "Missing or malformed request body."],
                      ["401", "unauthorized", "API key missing or invalid."],
                      ["403", "forbidden", "API key lacks permission for this action."],
                      ["404", "not_found", "Prompt or version does not exist."],
                      ["422", "weight_mismatch", "Traffic weights do not sum to 100."],
                      ["429", "rate_limited", "Too many requests. See Retry-After header."],
                      ["500", "internal_error", "Something went wrong on our end."],
                    ].map(([status, code, meaning]) => (
                      <tr key={status}>
                        <td className="px-4 py-2.5 font-mono text-[12px] text-foreground">{status}</td>
                        <td className="px-4 py-2.5 font-mono text-[12px] text-muted-foreground">{code}</td>
                        <td className="px-4 py-2.5 text-muted-foreground">{meaning}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[13px] text-muted-foreground mb-3">Example error response:</p>
              <CodeBlock
                lang="json"
                code={`{
  "error": {
    "code": "weight_mismatch",
    "message": "Traffic weights must sum to 100. Got 95.",
    "docs": "https://docs.promptlab.dev/errors#weight_mismatch"
  }
}`}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
