"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RiArrowRightLine, RiArrowLeftLine, RiCheckLine } from "react-icons/ri";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-emerald/8 border border-emerald/20 mb-6 mx-auto">
          <RiCheckLine className="text-emerald text-2xl" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground mb-3">
          You&apos;re on the list
        </h1>
        <p className="text-muted-foreground  text-base leading-relaxed max-w-sm mx-auto mb-2">
          We&apos;ll reach out to <span className="text-foreground font-medium">{email}</span> when your spot opens up.
        </p>
        <p className="text-muted-foreground  text-sm mb-8">Typical wait time: 1–2 weeks</p>

        <div className="rounded-xl border border-border bg-muted/30 p-6 text-left mb-8">
          <h3 className="text-[13px] font-semibold text-foreground mb-3">While you wait</h3>
          <ul className="space-y-3">
            {[
              { title: "Read the docs", desc: "Explore concepts, guides, and the API reference." },
              { title: "Join the community", desc: "Connect with other teams building with AI." },
              { title: "Star us on GitHub", desc: "Follow open-source SDK development." },
            ].map((item) => (
              <li key={item.title} className="flex items-start gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-foreground/5 border border-border mt-0.5">
                  <RiArrowRightLine className="text-foreground text-[10px]" />
                </span>
                <div>
                  <span className="text-[13px] text-foreground font-medium">{item.title}</span>
                  <p className="text-[12px] text-muted-foreground ">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <Button variant="ghost" asChild className="gap-1.5 text-muted-foreground ">
          <Link href="/">
            <RiArrowLeftLine className="text-xs" />
            Back to homepage
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <div className="text-center mb-10">

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
          Get early access
        </h1>
        <p className="text-muted-foreground  text-base leading-relaxed max-w-md mx-auto">
          PromptLab is currently in private beta. Join the waitlist to be among the first teams to ship prompts with confidence.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          id="waitlist-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Work email *"
          className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-[14px] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring/30 focus:border-ring/30 transition-colors"
        />

        <input
          id="waitlist-company"
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Company (optional)"
          className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-[14px] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring/30 focus:border-ring/30 transition-colors"
        />

        <Select value={role} onValueChange={setRole}>
          <SelectTrigger id="waitlist-role" className="w-full">
            <SelectValue placeholder="Your role (optional)" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="engineer">Software Engineer</SelectItem>
            <SelectItem value="ai-engineer">AI / ML Engineer</SelectItem>
            <SelectItem value="platform">Platform Engineer</SelectItem>
            <SelectItem value="prompt-engineer">Prompt Engineer</SelectItem>
            <SelectItem value="engineering-manager">Engineering Manager</SelectItem>
            <SelectItem value="founder">Founder / CTO</SelectItem>
            <SelectItem value="pm">Product Manager</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>

        <Button type="submit" size="lg" className="w-full gap-2 mt-2">
          Join the waitlist
          <RiArrowRightLine />
        </Button>
      </form>




    </>
  );
}
