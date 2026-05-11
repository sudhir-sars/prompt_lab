import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

interface PageShellProps {
  badge?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}

export default function PageShell({
  badge,
  title,
  description,
  children,
}: PageShellProps) {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Page Header */}
        <section className="pt-32 pb-14 border-b border-border">
          <div className="mx-auto max-w-5xl px-6">
            {badge && (
              <Badge
                variant="outline"
                className="mb-5 text-[11px] font-medium rounded-full px-3 py-1.5"
              >
                {badge}
              </Badge>
            )}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-foreground max-w-2xl">
              {title}
            </h1>
            {description && (
              <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl">
                {description}
              </p>
            )}
          </div>
        </section>

        {/* Page Body */}
        <div className="mx-auto max-w-5xl px-6 py-16">{children}</div>
      </main>
      <Footer />
    </>
  );
}
