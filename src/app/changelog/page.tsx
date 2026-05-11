import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Changelog — PromptLab",
  description: "Release notes for PromptLab — features, improvements, and fixes.",
};

const releases = [
  {
    version: "v0.9.0",
    date: "May 8, 2025",
    tag: "Latest",
    tagStyle: "bg-emerald/8 text-emerald border-emerald/20",
    sections: [
      {
        label: "Features",
        color: "text-blue",
        items: [
          "Traffic splitting now supports up to 5 concurrent variants per prompt (was 2).",
          "SSO via SAML 2.0 for Pro plan workspaces.",
          "Automatic rollback triggers: define quality score or error rate thresholds for instant reversion.",
          "Diff viewer: side-by-side and unified diff modes when comparing versions.",
        ],
      },
      {
        label: "Improvements",
        color: "text-amber",
        items: [
          "Resolve API p99 latency reduced from 4.2ms to 1.8ms via improved Redis pipelining.",
          "Webhook payloads now include HMAC-SHA256 signatures for verification.",
          "Dashboard redesign: prompt list shows live traffic percentage and last-deployed-by inline.",
        ],
      },
      {
        label: "Fixes",
        color: "text-rose",
        items: [
          "Fixed race condition where simultaneous deploys could briefly serve incorrect traffic weights.",
          "Resolved deleted API keys remaining valid for up to 60 seconds post-deletion.",
        ],
      },
    ],
  },
  {
    version: "v0.8.2",
    date: "April 22, 2025",
    tag: "Patch",
    tagStyle: "bg-muted text-muted-foreground border-border",
    sections: [
      {
        label: "Fixes",
        color: "text-rose",
        items: [
          "Fixed metric aggregation delay causing analytics charts to lag 5–10 minutes.",
          "Corrected edge case in consistent hashing where hash boundary users always routed to default.",
          "Resolved dashboard 500 error for prompts with more than 50 versions.",
        ],
      },
      {
        label: "Infrastructure",
        color: "text-foreground",
        items: [
          "Upgraded Redis from 7.0 to 7.2. No client-side changes required.",
          "Increased Resolve API rate limit for Pro plan from 200 to 500 req/s.",
        ],
      },
    ],
  },
  {
    version: "v0.8.0",
    date: "April 7, 2025",
    tag: "Minor",
    tagStyle: "bg-muted text-muted-foreground border-border",
    sections: [
      {
        label: "Features",
        color: "text-blue",
        items: [
          "Prompt branching: create experimental branches without affecting main prompt lineage.",
          "Version tagging: label any version (e.g. 'stable', 'staging') for easier navigation.",
          "Metrics API: programmatically read quality scores, latency, and cost per version.",
        ],
      },
      {
        label: "Improvements",
        color: "text-amber",
        items: [
          "Prompt editor supports multi-line variables with triple-brace syntax.",
          "Audit log now shows previous and new traffic weights on every deploy event.",
          "TypeScript SDK updated to v0.8.0 with branch-aware resolve support.",
        ],
      },
    ],
  },
  {
    version: "v0.7.0",
    date: "March 18, 2025",
    tag: "Initial Release",
    tagStyle: "bg-muted text-muted-foreground border-border",
    sections: [
      {
        label: "Features",
        color: "text-blue",
        items: [
          "Core prompt versioning: create, edit, and save versions of any prompt.",
          "Resolve API: fetch the correct prompt version at runtime.",
          "Basic traffic splitting: route a percentage of traffic to a new version.",
          "Instant rollback to any previous version.",
          "Activity feed with real-time deployment events.",
        ],
      },
      {
        label: "Infrastructure",
        color: "text-foreground",
        items: [
          "Go + BadgerDB persistence + Redis distributed cache.",
          "Kubernetes-native deployment with horizontal scaling.",
          "Prometheus metrics at /metrics for operational observability.",
        ],
      },
    ],
  },
];

export default function ChangelogPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="pt-32 pb-14 border-b border-border">
          <div className="mx-auto max-w-5xl px-6">
            <Badge variant="outline" className="mb-5 text-[11px] font-medium rounded-full px-3 py-1.5">
              Changelog
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight text-foreground max-w-2xl">
              What&apos;s new in PromptLab
            </h1>
            <p className="mt-4 text-muted-foreground text-base leading-relaxed max-w-xl">
              Every release, documented. Features, improvements, and fixes.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="relative">
            <div className="absolute left-[7.5rem] top-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="space-y-16">
              {releases.map((release) => (
                <div key={release.version}>
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-[120px] md:text-right shrink-0">
                      <div className="md:pr-8">
                        <p className="text-[13px] font-bold font-mono text-foreground mb-1">{release.version}</p>
                        <p className="text-[11px] text-muted-foreground mb-2">{release.date}</p>
                        <Badge variant="outline" className={`text-[10px] px-2 py-0.5 rounded-full ${release.tagStyle}`}>
                          {release.tag}
                        </Badge>
                      </div>
                    </div>
                    <div className="hidden md:flex items-start pt-1">
                      <div className="relative -left-[4.5px] h-2.5 w-2.5 rounded-full bg-foreground border-2 border-background ring-1 ring-border mt-0.5" />
                    </div>
                    <div className="flex-1 min-w-0 md:pl-4 space-y-6">
                      {release.sections.map((section) => (
                        <div key={section.label}>
                          <span className={`text-[11px] font-semibold uppercase tracking-widest ${section.color} mb-3 block`}>
                            {section.label}
                          </span>
                          <ul className="space-y-2">
                            {section.items.map((item) => (
                              <li key={item} className="flex items-start gap-2.5 text-[13px] text-muted-foreground leading-relaxed">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-border" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
