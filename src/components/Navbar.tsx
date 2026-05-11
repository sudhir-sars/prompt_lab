"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RiFlaskLine, RiArrowRightLine } from "react-icons/ri";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Results", href: "#performance" },
  { label: "Developers", href: "#" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground">
              <RiFlaskLine className="text-white text-base" />
            </div>
            <span className="text-[15px] font-semibold tracking-tight">PromptLab</span>
          </Link>

          {/* Center Nav — plain links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-[13px] text-muted-foreground  hover:text-foreground rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right CTA */}
          <div className="flex items-center gap-3">
            <Button asChild size="sm" className="gap-1.5">
              <Link href="/waitlist">
                Join Waitlist
                <RiArrowRightLine className="text-xs" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
