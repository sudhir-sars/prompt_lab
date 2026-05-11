import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RiTwitterXLine, RiLinkedinBoxLine } from "react-icons/ri";

const productLinks = [
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Changelog", href: "/changelog" },
  { label: "API Docs", href: "/docs" },
];

const companyLinks = [
  { label: "About", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Security", href: "/security" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 bg-background">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-12">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center mb-4">
              <Image src="/app-logo.png" alt="Prompt Lab" width={270} height={28} />
            </div>
            <p className="text-[12px] text-muted-foreground leading-relaxed">
              The safe way to manage AI prompts in production.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-[12px] font-semibold uppercase tracking-wider text-muted-foreground mb-4">Product</h4>
              <ul className="space-y-2.5">
                {productLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-[13px] text-muted-foreground hover:text-foreground transition-colors">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[12px] font-semibold uppercase tracking-wider text-muted-foreground mb-4">Company</h4>
              <ul className="space-y-2.5">
                {companyLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-[13px] text-muted-foreground hover:text-foreground transition-colors">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[12px] font-semibold uppercase tracking-wider text-muted-foreground mb-4">Legal</h4>
              <ul className="space-y-2.5">
                {legalLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-[13px] text-muted-foreground hover:text-foreground transition-colors">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-muted-foreground">&copy; 2025 PromptLab, Inc. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
              <Link href="#" aria-label="Twitter / X">
                <RiTwitterXLine className="text-muted-foreground text-sm" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
              <Link href="#" aria-label="LinkedIn">
                <RiLinkedinBoxLine className="text-muted-foreground text-sm" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
