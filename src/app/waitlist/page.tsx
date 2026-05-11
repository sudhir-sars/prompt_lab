import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RiArrowRightLine, RiArrowLeftLine, RiCheckLine } from "react-icons/ri";
import {
  WaitlistForm
} from "./WaitlistForm";
export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Minimal Nav */}
      <nav className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg bg-foreground flex items-center justify-center">
              <span className="text-white text-xs font-bold">PL</span>
            </div>
            <span className="text-[15px] font-semibold tracking-tight text-foreground">PromptLab</span>
          </Link>
          <Button variant="ghost" size="sm" asChild className="gap-1.5 text-muted-foreground ">
            <Link href="/">
              <RiArrowLeftLine className="text-xs" />
              Back to home
            </Link>
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-[520px]">
          <WaitlistForm />
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-border py-6">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
          <p className="text-[12px] text-muted-foreground ">&copy; 2025 PromptLab, Inc.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-[12px] text-muted-foreground hover:text-foreground">Privacy</Link>
            <Link href="/terms" className="text-[12px] text-muted-foreground hover:text-foreground">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
