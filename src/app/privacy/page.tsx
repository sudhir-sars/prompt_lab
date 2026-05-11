import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Privacy Policy — PromptLab",
  description:
    "How PromptLab collects, uses, and protects your data. Clear, plain language.",
};

const sections = [
  {
    title: "Overview",
    body: `PromptLab, Inc. ("PromptLab," "we," or "us") operates the PromptLab platform, including promptlab.dev and related APIs. This Privacy Policy explains what data we collect, why we collect it, and how it is used. We believe privacy should be simple, so we keep this document as short and direct as possible.`,
  },
  {
    title: "What We Collect",
    items: [
      {
        label: "Account data",
        desc: "Name, work email, company name, and role — provided when you sign up.",
      },
      {
        label: "Usage data",
        desc: "Pages visited, features used, API call frequency, and error logs. Collected automatically.",
      },
      {
        label: "Prompt content",
        desc: "Prompts you create, edit, and deploy are stored on our infrastructure to power version control and deployment features.",
      },
      {
        label: "Billing data",
        desc: "Payment information is processed by Stripe. We never store raw card numbers.",
      },
      {
        label: "Device & browser data",
        desc: "IP address, browser type, and OS — used to detect abuse and improve reliability.",
      },
    ],
  },
  {
    title: "How We Use Your Data",
    items: [
      { label: "To provide the service", desc: "Versioning, deployment, and analytics features require storing your prompts and configuration." },
      { label: "To improve the platform", desc: "Aggregate, anonymised usage data helps us prioritise features and fix bugs." },
      { label: "To communicate with you", desc: "Product updates, security alerts, and occasional announcements. You can unsubscribe at any time." },
      { label: "To prevent abuse", desc: "Rate limiting, fraud detection, and enforcing our Terms of Service." },
    ],
  },
  {
    title: "Data Retention",
    body: `We retain account data for the duration of your subscription plus 90 days after cancellation. Prompt history is retained per your plan limits. You can request full deletion of your account and data at any time by emailing privacy@promptlab.dev. Deletion requests are processed within 30 days.`,
  },
  {
    title: "Third-Party Services",
    body: `We use a small number of trusted sub-processors: Stripe (billing), AWS (infrastructure), PostHog (product analytics), and Resend (email). Each is bound by data processing agreements aligned with applicable privacy law. We do not sell your data to third parties.`,
  },
  {
    title: "Your Rights",
    body: `Depending on your location, you may have the right to access, correct, export, or delete your personal data. To exercise these rights, email privacy@promptlab.dev. We will respond within 30 days.`,
  },
  {
    title: "Security",
    body: `All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We follow SOC 2 Type II security practices. See our Security page for more detail.`,
  },
  {
    title: "Changes to This Policy",
    body: `We may update this policy as the product evolves. Material changes will be communicated via email and posted here with an updated effective date. Continued use after notification constitutes acceptance.`,
  },
  {
    title: "Contact",
    body: `Questions about this policy? Email us at privacy@promptlab.dev or write to PromptLab, Inc., 340 Pine St, Suite 800, San Francisco, CA 94104.`,
  },
];

export default function PrivacyPage() {
  return (
    <PageShell
      badge="Legal"
      title="Privacy Policy"
      description="Effective May 1, 2025. Plain language. No surprises."
    >
      <div className="space-y-12 max-w-3xl">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="text-lg font-semibold text-foreground mb-3 tracking-tight">
              {section.title}
            </h2>
            {section.body && (
              <p className="text-[14px] text-muted-foreground leading-relaxed">
                {section.body}
              </p>
            )}
            {section.items && (
              <ul className="space-y-3 mt-3">
                {section.items.map((item) => (
                  <li key={item.label} className="flex gap-3 text-[14px]">
                    <span className="shrink-0 font-medium text-foreground w-36">
                      {item.label}
                    </span>
                    <span className="text-muted-foreground leading-relaxed">
                      {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </PageShell>
  );
}
