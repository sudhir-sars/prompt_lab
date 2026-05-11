import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import {
  RiMailLine,
  RiGithubLine,
  RiDiscordLine,
  RiTwitterXLine,
  RiArrowRightLine,
} from "react-icons/ri";

export const metadata: Metadata = {
  title: "Contact & Support — PromptLab",
  description:
    "Get help with PromptLab. Reach the team via email, Discord, or GitHub.",
};

const channels = [
  {
    icon: RiDiscordLine,
    title: "Discord Community",
    desc: "Ask questions, share workflows, and get help from the community and the PromptLab team.",
    action: "Join Discord",
    href: "#",
    color: "text-indigo-500",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
  },
  {
    icon: RiGithubLine,
    title: "GitHub Issues",
    desc: "Found a bug or want to request a feature? Open an issue on our public SDK repository.",
    action: "Open GitHub",
    href: "#",
    color: "text-foreground",
    bg: "bg-muted",
    border: "border-border",
  },
  {
    icon: RiMailLine,
    title: "Email Support",
    desc: "Pro plan customers get priority email support with a 4-hour response target during business hours.",
    action: "support@promptlab.dev",
    href: "mailto:support@promptlab.dev",
    color: "text-blue",
    bg: "bg-blue/5",
    border: "border-blue/10",
  },
  {
    icon: RiTwitterXLine,
    title: "Twitter / X",
    desc: "Follow @promptlabdev for product updates, engineering posts, and outage notifications.",
    action: "Follow on X",
    href: "#",
    color: "text-foreground",
    bg: "bg-muted",
    border: "border-border",
  },
];

export default function ContactPage() {
  return (
    <PageShell
      badge="Support"
      title="We're here to help"
      description="Whether you have a question, a bug report, or feedback — reach us where it's easiest for you."
    >
      {/* Channels */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16">
        {channels.map((ch) => {
          const Icon = ch.icon;
          return (
            <div
              key={ch.title}
              className="rounded-xl border border-border bg-card p-6 flex flex-col gap-4"
            >
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-lg ${ch.bg} border ${ch.border}`}
              >
                <Icon className={`${ch.color} text-base`} />
              </span>
              <div>
                <h2 className="text-[15px] font-semibold text-foreground mb-1.5">
                  {ch.title}
                </h2>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  {ch.desc}
                </p>
              </div>
              <a
                href={ch.href}
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-foreground hover:text-muted-foreground transition-colors mt-auto"
              >
                {ch.action}
                <RiArrowRightLine className="text-[11px]" />
              </a>
            </div>
          );
        })}
      </div>

      {/* Contact Form */}
      <div className="max-w-xl">
        <h2 className="text-xl font-semibold text-foreground mb-2 tracking-tight">
          Send a message
        </h2>
        <p className="text-[14px] text-muted-foreground mb-8 leading-relaxed">
          For general enquiries, partnership requests, or anything else — fill
          out the form below and we will get back to you within one business day.
        </p>
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              id="contact-name"
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-[14px] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring/30 focus:border-ring/30 transition-colors"
            />
            <input
              id="contact-email"
              type="email"
              placeholder="Work email"
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-[14px] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring/30 focus:border-ring/30 transition-colors"
            />
          </div>
          <input
            id="contact-subject"
            type="text"
            placeholder="Subject"
            className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-[14px] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring/30 focus:border-ring/30 transition-colors"
          />
          <textarea
            id="contact-message"
            placeholder="Tell us what you need..."
            rows={5}
            className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-[14px] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring/30 focus:border-ring/30 transition-colors resize-none"
          />
          <Button size="lg" className="gap-2">
            Send message
            <RiArrowRightLine />
          </Button>
        </form>
      </div>
    </PageShell>
  );
}
