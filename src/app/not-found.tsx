import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RiArrowLeftLine, RiFlaskLine, RiHome4Line, RiFileTextLine, RiPriceTag2Line } from "react-icons/ri";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Minimal nav */}
      <nav className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground">
              <RiFlaskLine className="text-white text-base" />
            </div>
            <span className="text-[15px] font-semibold tracking-tight text-foreground">PromptLab</span>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="text-center max-w-md">
          {/* Code */}
          <p className="text-[11px] font-mono font-semibold uppercase tracking-widest text-muted-foreground mb-6">
            404 — Page not found
          </p>

          {/* Visual */}
          <div className="mx-auto mb-8 w-20 h-20 rounded-2xl bg-muted border border-border flex items-center justify-center">
            <span className="text-3xl font-bold font-mono text-muted-foreground/40">?</span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-3">
            This page doesn&apos;t exist
          </h1>
          <p className="text-[14px] text-muted-foreground leading-relaxed mb-10">
            The URL you followed may be outdated, mistyped, or the page may have been moved.
          </p>

          {/* Primary action */}
          <Button asChild size="lg" className="gap-2 mb-6">
            <Link href="/">
              <RiHome4Line />
              Back to home
            </Link>
          </Button>

          {/* Secondary links */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/docs"
              className="inline-flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-foreground transition-colors"
            >
              <RiFileTextLine className="text-sm" />
              API Docs
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-foreground transition-colors"
            >
              <RiPriceTag2Line className="text-sm" />
              Pricing
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-foreground transition-colors"
            >
              <RiArrowLeftLine className="text-sm" />
              Contact support
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
