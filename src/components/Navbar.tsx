"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RiArrowRightLine } from "react-icons/ri";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Results", href: "#performance" },
  { label: "Developers", href: "#" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/60 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/app-logo.png" alt="Prompt Lab" width={210} height={32} priority unoptimized />
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
