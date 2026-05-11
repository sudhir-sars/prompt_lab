import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RiArrowLeftLine, RiHome4Line, RiFileTextLine, RiPriceTag2Line } from "react-icons/ri";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">

      <nav className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center">
          <Link href="/" className="flex items-center">
            <Image src="/app-logo.png" alt="Prompt Lab" width={210} height={32} unoptimized priority />
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-40">
        <div className="text-center max-w-md">


          {/* Visual */}
          <div className="mx-auto mb-8 flex items-center justify-center font-bold text-3xl ">
            404
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
      <Footer />
    </div>
  );
}
