import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { Badge } from "@/components/ui/badge";
import {
  RiShieldCheckLine,
  RiLockPasswordLine,
  RiKeyLine,
  RiEyeOffLine,
  RiServerLine,
  RiFlowChart,
} from "react-icons/ri";

export const metadata: Metadata = {
  title: "Security — PromptLab",
  description:
    "How PromptLab secures your prompts, deployments, and infrastructure. Encryption, access control, and safe production rollouts.",
};

const pillars = [
  {
    icon: RiEyeOffLine,
    title: "Prompt Privacy",
    color: "text-blue",
    bg: "bg-blue/5",
    border: "border-blue/10",
    points: [
      "Prompt content is isolated per organisation. No cross-tenant data access is possible by design.",
      "Prompts are never used to train or fine-tune any AI model — yours or ours.",
      "Version history is stored encrypted and accessible only to authenticated members of your workspace.",
    ],
  },
  {
    icon: RiLockPasswordLine,
    title: "Encrypted Communication",
    color: "text-emerald",
    bg: "bg-emerald/5",
    border: "border-emerald/10",
    points: [
      "All data in transit is encrypted using TLS 1.3. Older TLS versions are rejected.",
      "API keys are hashed with bcrypt before storage. Plain-text keys are never persisted.",
      "Webhook payloads are signed with HMAC-SHA256 so you can verify authenticity on your side.",
    ],
  },
  {
    icon: RiServerLine,
    title: "Secure Infrastructure",
    color: "text-amber",
    bg: "bg-amber/5",
    border: "border-amber/10",
    points: [
      "Hosted on AWS with data residency in us-east-1 (US) and eu-west-1 (EU).",
      "All persistent data is encrypted at rest using AES-256.",
      "Automated daily backups with 30-day retention. Restore tested monthly.",
    ],
  },
  {
    icon: RiKeyLine,
    title: "Access Control",
    color: "text-rose",
    bg: "bg-rose/5",
    border: "border-rose/10",
    points: [
      "Role-based access control: Admin, Editor, and Viewer roles per workspace.",
      "API keys are scoped — read-only, write, or deploy permissions. Principle of least privilege.",
      "SSO via SAML 2.0 available on Pro plan. Enforce your organisation's identity provider.",
    ],
  },
  {
    icon: RiFlowChart,
    title: "Deployment Safety",
    color: "text-blue",
    bg: "bg-blue/5",
    border: "border-blue/10",
    points: [
      "Gradual rollouts enforce canary deployments — prompts never go to 100% traffic instantly.",
      "Automated rollback triggers: define error-rate or quality-score thresholds. We revert automatically.",
      "Deployment audit logs capture who changed what, when, and to which traffic percentage.",
    ],
  },
  {
    icon: RiShieldCheckLine,
    title: "Compliance & Posture",
    color: "text-foreground",
    bg: "bg-muted",
    border: "border-border",
    points: [
      "SOC 2 Type II audit in progress. Report available to Pro customers under NDA.",
      "GDPR-compliant data handling. Data Processing Agreement (DPA) available on request.",
      "Internal security reviews conducted quarterly. Penetration test results available on request.",
    ],
  },
];

export default function SecurityPage() {
  return (
    <PageShell
      badge="Security"
      title="Security you can rely on"
      description="PromptLab is built for production. Your prompts, keys, and deployment pipeline are protected at every layer."
    >
      {/* Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {pillars.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.title}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-lg ${p.bg} border ${p.border}`}
                >
                  <Icon className={`${p.color} text-base`} />
                </span>
                <h2 className="text-[15px] font-semibold text-foreground">
                  {p.title}
                </h2>
              </div>
              <ul className="space-y-2.5">
                {p.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-[13px] text-muted-foreground leading-relaxed"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-border" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Responsible Disclosure */}
      <div className="rounded-xl border border-border bg-muted/40 p-8 max-w-3xl">
        <Badge variant="outline" className="mb-4 text-[11px]">
          Responsible Disclosure
        </Badge>
        <h2 className="text-lg font-semibold text-foreground mb-2 tracking-tight">
          Found a vulnerability?
        </h2>
        <p className="text-[14px] text-muted-foreground leading-relaxed mb-4">
          We take security reports seriously. If you discover a potential security
          issue, please email{" "}
          <span className="text-foreground font-medium">
            security@promptlab.dev
          </span>{" "}
          with a description and reproduction steps. We will acknowledge within
          24 hours and provide a resolution timeline.
        </p>
        <p className="text-[13px] text-muted-foreground">
          We ask that you do not publicly disclose vulnerabilities until we have
          had a reasonable time to address them. We do not currently offer a
          formal bug bounty but will credit responsible reporters in our
          changelog.
        </p>
      </div>
    </PageShell>
  );
}
