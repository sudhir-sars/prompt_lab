import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RiArrowRightLine } from "react-icons/ri";

export default function CTASection() {
  return (
    <section id="cta" className="section-spacing relative pb-30">
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="rounded-4xl bg-muted p-10 md:p-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-2xl mx-auto leading-tight mb-4 ">
            Ready to take control of your AI prompts?
          </h2>
          <p className="text-zinc-400 max-w-lg mx-auto text-base sm:text-lg leading-relaxed mb-10">
            Join the teams already using PromptLab to ship faster, reduce costs, and improve quality.
          </p>

          <Button asChild size="lg" variant="secondary" className="gap-2 bg-white text-foreground">
            <Link href="/waitlist">
              Join Waitlist
              <RiArrowRightLine />
            </Link>
          </Button>


        </div>
      </div>
    </section>
  );
}
