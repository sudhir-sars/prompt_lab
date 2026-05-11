import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  RiCheckLine,
  RiArrowRightLine,
} from "react-icons/ri";

export const metadata: Metadata = {
  title: "Pricing — PromptLab",
  description:
    "Simple, transparent pricing for teams managing AI prompts in production. Free to start, Pro when you scale.",
};

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Enough to start building. No credit card required.",
    highlighted: false,
    cta: "Get started free",
    href: "/waitlist",
    features: [
      "Up to 5 prompts",
      "Basic prompt management",
      "10-version history per prompt",
      "1,000 API calls / month",
      "1 team member",
      "Community support",
    ],
    limits: [
      "No traffic splitting",
      "No production deployments",
      "No analytics",
    ],
  },
  {
    name: "Pro",
    price: "$49",
    period: "per month",
    description: "Full infrastructure for teams shipping prompts to production.",
    highlighted: true,
    cta: "Join the waitlist",
    href: "/waitlist",
    features: [
      "Unlimited prompts",
      "Full version history & branching",
      "Production deployments",
      "Traffic splitting & A/B experiments",
      "Instant rollback",
      "Real-time metrics & analytics",
      "500,000 API calls / month",
      "Up to 10 team members",
      "Priority email support",
      "SSO (SAML 2.0)",
    ],
    limits: [],
  },
];

const faqs = [
  {
    q: "What counts as an API call?",
    a: "Every request to the PromptLab Resolve API counts as one call. Reads from the dashboard and management API calls (creating versions, editing rules) do not count toward your limit.",
  },
  {
    q: "Can I switch plans later?",
    a: "Yes. You can upgrade or downgrade at any time. Upgrades take effect immediately. Downgrades apply at the end of the billing cycle.",
  },
  {
    q: "Is there an annual option?",
    a: "Yes. Annual billing for Pro is $490/year — saving two months compared to monthly billing. You can switch to annual from your account settings.",
  },
  {
    q: "What happens if I exceed my API call limit?",
    a: "We will not charge you automatically. API calls over the limit will return a 429 rate-limit response. You can upgrade or wait for the next billing cycle.",
  },
  {
    q: "Do you offer custom plans?",
    a: "If you need higher limits, dedicated infrastructure, or custom SLAs, email us at sales@promptlab.dev and we can discuss a tailored arrangement.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="pt-32 pb-14 text-center">
          <div className="mx-auto max-w-5xl px-6">
            <Badge
              variant="outline"
              className="mb-6 text-[11px] font-medium rounded-full px-3 py-1.5"
            >
              Pricing
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight text-foreground max-w-2xl mx-auto">
              Simple, honest pricing
            </h1>
            <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed max-w-lg mx-auto">
              Start free. Move to Pro when your prompts go to production. No
              per-seat surprises.
            </p>
          </div>
        </section>

        {/* Plans */}
        <section className="pb-20">
          <div className="mx-auto max-w-4xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl border p-8 flex flex-col ${
                    plan.highlighted
                      ? "border-foreground bg-card shadow-[0_4px_32px_rgba(0,0,0,0.08)]"
                      : "border-border bg-card"
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-foreground text-background text-[11px] px-3 py-1 rounded-full shadow-sm">
                        Recommended
                      </Badge>
                    </div>
                  )}

                  <div className="mb-6">
                    <p className="text-[12px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                      {plan.name}
                    </p>
                    <div className="flex items-baseline gap-1.5 mb-2">
                      <span className="text-4xl font-bold text-foreground tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-[13px] text-muted-foreground">
                        / {plan.period}
                      </span>
                    </div>
                    <p className="text-[13px] text-muted-foreground leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  <Button
                    asChild
                    variant={plan.highlighted ? "default" : "outline"}
                    size="lg"
                    className="w-full gap-2 mb-8"
                  >
                    <Link href={plan.href}>
                      {plan.cta}
                      <RiArrowRightLine />
                    </Link>
                  </Button>

                  <ul className="space-y-2.5">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2.5 text-[13px] text-foreground"
                      >
                        <RiCheckLine className="text-emerald shrink-0 text-base" />
                        {f}
                      </li>
                    ))}
                    {plan.limits.map((l) => (
                      <li
                        key={l}
                        className="flex items-center gap-2.5 text-[13px] text-muted-foreground/60"
                      >
                        <span className="h-3.5 w-3.5 shrink-0 flex items-center justify-center">
                          <span className="h-px w-3 bg-muted-foreground/30 block" />
                        </span>
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-border py-20 bg-muted/30">
          <div className="mx-auto max-w-2xl px-6">
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-10 text-center">
              Common questions
            </h2>
            <div className="space-y-8">
              {faqs.map((faq) => (
                <div key={faq.q}>
                  <h3 className="text-[15px] font-semibold text-foreground mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-[14px] text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
