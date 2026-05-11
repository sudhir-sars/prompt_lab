import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Changelog — PromptLab",
  description:
    "Follow the journey. See what we're building toward in PromptLab v1.",
};

const upcomingRelease = {
  version: "v1.0",
  label: "Upcoming Release",
  eta: "Coming Soon",
  tagStyle: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  description:
    "We're heads-down building the first version of PromptLab. Here's a preview of what's shipping in v1.",
  sections: [
    {
      label: "Core Features",

      items: [
        "Prompt versioning — create, edit, and save named versions of any prompt.",
        "Resolve API — fetch the right prompt version at runtime with a single SDK call.",
        "Traffic splitting — route a percentage of live traffic to a new prompt variant.",
        "One-click rollback to any previous version with no downtime.",
        "Real-time activity feed showing every deploy, edit, and rollback event.",
      ],
    },
    // {
    //   label: "Collaboration",

    //   items: [
    //     "Workspace invites — bring your whole team into a shared prompt library.",
    //     "Role-based access control (Admin, Editor, Viewer).",
    //     "Inline comments on prompt versions for async review workflows.",
    //   ],
    // },
    {
      label: "Observability",
      items: [
        "Per-version quality scores, latency, and cost metrics.",
        "Side-by-side diff viewer when comparing any two versions.",
      ],
    },
  ],
};

export default function ChangelogPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-32 pb-14 border-b border-border">
          <div className="mx-auto max-w-5xl px-6">
            <Badge
              variant="outline"
              className="mb-5 text-[11px] font-medium rounded-full px-3 py-1.5"
            >
              Changelog
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight text-foreground max-w-2xl">
              We&apos;re still building
            </h1>
            <p className="mt-4 text-muted-foreground text-base leading-relaxed max-w-xl">
              PromptLab v1 is actively in development. This page will track
              every release — features, improvements, and fixes — from day one.
              Stay tuned.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-[7.5rem] top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-16">
              {/* Upcoming Release */}
              <div>
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Left metadata */}
                  <div className="md:w-[120px] md:text-right shrink-0">
                    <div className="md:pr-8">
                      <p className="text-[13px] font-bold font-mono text-foreground mb-1">
                        {upcomingRelease.version}
                      </p>
                      <p className="text-[11px] text-muted-foreground mb-2">
                        {upcomingRelease.eta}
                      </p>
                      <Badge
                        variant="outline"
                        className={`text-[10px] px-2 py-0.5 rounded-full ${upcomingRelease.tagStyle}`}
                      >
                        {upcomingRelease.label}
                      </Badge>
                    </div>
                  </div>

                  {/* Timeline dot — pulsing to signal WIP */}
                  <div className="hidden md:flex items-start pt-1">
                    <span className="relative -left-[4.5px] flex h-2.5 w-2.5 mt-0.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-60" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400 border-2 border-background" />
                    </span>
                  </div>

                  {/* Right content */}
                  <div className="flex-1 min-w-0 md:pl-4 space-y-6">
                    {/* Teaser callout */}
                    <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 px-4 py-3 text-[13px] text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-amber-400 mr-1.5">
                        🚧 In progress.
                      </span>
                      {upcomingRelease.description}
                    </div>

                    {upcomingRelease.sections.map((section) => (
                      <div key={section.label}>
                        <span
                          className={`text-[11px] font-semibold uppercase tracking-widest  mb-3 block`}
                        >
                          {section.label}
                        </span>
                        <ul className="space-y-2">
                          {section.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 text-[13px]  leading-relaxed"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Future releases placeholder */}
              <div className="flex flex-col md:flex-row gap-8 opacity-30 select-none">
                <div className="md:w-[120px] md:text-right shrink-0">
                  <div className="md:pr-8">
                    <p className="text-[13px] font-bold font-mono text-foreground mb-1">
                      v1.1
                    </p>
                    <p className="text-[11px] text-muted-foreground">Future</p>
                  </div>
                </div>
                <div className="hidden md:flex items-start pt-1">
                  <div className="relative -left-[4.5px] h-2.5 w-2.5 rounded-full bg-border border-2 border-background ring-1 ring-border mt-0.5" />
                </div>
                <div className="flex-1 min-w-0 md:pl-4">
                  <p className="text-[13px]  italic">
                    More to come — we&apos;ll document it here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
