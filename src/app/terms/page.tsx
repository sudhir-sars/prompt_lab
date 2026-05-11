import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Terms of Service — PromptLab",
  description:
    "The terms governing your use of PromptLab's platform, APIs, and services.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    body: `By creating a PromptLab account or accessing our API, you agree to these Terms of Service. If you are accepting on behalf of a company, you represent that you have authority to bind that company. If you do not agree, do not use the service.`,
  },
  {
    title: "The Service",
    body: `PromptLab provides a platform for prompt versioning, deployment, experimentation, and analytics ("the Service"). We reserve the right to modify, suspend, or discontinue features with reasonable notice. We will not materially degrade the core service without 30-day notice for paid subscribers.`,
  },
  {
    title: "Your Account",
    items: [
      { label: "Eligibility", desc: "You must be at least 18 years old and capable of forming a binding contract." },
      { label: "Credentials", desc: "You are responsible for keeping your API keys and login credentials secure. Do not share them." },
      { label: "Accuracy", desc: "Provide accurate information during registration. Fraudulent accounts will be terminated." },
      { label: "One account per user", desc: "Creating multiple free accounts to circumvent limits is prohibited." },
    ],
  },
  {
    title: "Acceptable Use",
    body: `You may not use PromptLab to: (a) generate, store, or deploy prompts that produce illegal content; (b) circumvent usage limits through automation or account manipulation; (c) resell access to the API without prior written consent; (d) reverse-engineer or scrape the platform; (e) interfere with the infrastructure or other users' services.`,
  },
  {
    title: "Your Data & Prompts",
    body: `You own your prompts and content. By using the Service, you grant PromptLab a limited licence to store, process, and serve your content solely to deliver the features you have enabled. We do not use your prompt content to train AI models. See our Privacy Policy for full details.`,
  },
  {
    title: "Billing & Payments",
    items: [
      { label: "Free plan", desc: "Available indefinitely with stated limits. No credit card required." },
      { label: "Pro plan", desc: "Billed monthly or annually. Pricing is displayed at checkout and may change with 30-day notice." },
      { label: "Refunds", desc: "Refunds for annual plans are available within 14 days of purchase if the Service is materially defective." },
      { label: "Overages", desc: "Exceeding plan limits will restrict access, not generate automatic charges, unless explicitly agreed." },
    ],
  },
  {
    title: "Intellectual Property",
    body: `PromptLab and its logos, UI, documentation, and APIs are the intellectual property of PromptLab, Inc. These Terms do not grant you any right to use our brand. You may not modify, copy, or redistribute any part of the platform.`,
  },
  {
    title: "Limitation of Liability",
    body: `To the maximum extent permitted by law, PromptLab's total liability for any claim arising from these Terms or the Service is limited to the amount you paid in the three months preceding the claim. We are not liable for indirect, consequential, or incidental damages.`,
  },
  {
    title: "Termination",
    body: `You may terminate your account at any time. We may suspend or terminate accounts that violate these Terms, with or without notice depending on severity. Upon termination, your data will be retained for 90 days and then deleted.`,
  },
  {
    title: "Governing Law",
    body: `These Terms are governed by the laws of the State of California, without regard to conflict-of-law principles. Disputes will be resolved in the courts of San Francisco County, California.`,
  },
  {
    title: "Changes",
    body: `We may update these Terms. Material changes will be communicated at least 30 days in advance via email. Continued use after the effective date constitutes acceptance. The current version is always published at promptlab.dev/terms.`,
  },
  {
    title: "Contact",
    body: `Questions about these Terms? Email legal@promptlab.dev.`,
  },
];

export default function TermsPage() {
  return (
    <PageShell
      badge="Legal"
      title="Terms of Service"
      description="Effective May 1, 2025. Your agreement with PromptLab, in plain language."
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
