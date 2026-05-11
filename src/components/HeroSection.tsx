import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  RiArrowRightLine,
  RiArrowUpLine,
  RiArrowDownLine,
  RiEditLine,
  RiArrowGoBackLine,
} from "react-icons/ri";
import { MdOutlineElectricBolt } from "react-icons/md";
import { FiActivity } from "react-icons/fi";
import { BiTargetLock } from "react-icons/bi";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <Badge variant="outline" className="mb-8 gap-2 px-3 py-3 text-[12px] font-medium rounded-full">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block" />
            Now in Public Beta
          </Badge>

          {/* Headline */}
          <h1 className="max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-foreground">
            Version, test, and ship
            <br />
            <span className="text-muted-foreground">prompts with confidence</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            PromptLab gives your team full control over AI prompts in production.
            Test changes safely, roll back instantly, and measure what works — all without touching code.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-3">

            <Button asChild variant="outline" size="lg">
              <Link href="#how-it-works">
                See How It Works
              </Link>
            </Button>
            <Button asChild size="lg" className="gap-2">
              <Link href="/waitlist">
                Join Waitlist
                <RiArrowRightLine />
              </Link>
            </Button>
          </div>

          {/* Hero Visual: Premium Dashboard Preview */}
          <div className="mt-20 w-full max-w-[1100px]">
            <div className="rounded-4xl border border-border bg-card overflow-hidden shadow-[0_8px_60px_rgba(0,0,0,0.06)]">
              {/* Window Chrome */}
              <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-[#fafafa]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60 hover:bg-red-500 transition-colors" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60 hover:bg-yellow-500 transition-colors" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60 hover:bg-green-500 transition-colors" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="flex items-center gap-2 rounded-full bg-white border border-border px-10 sm:px-20 py-1 text-[11px] text-muted-foreground font-mono">
                    <FiActivity className="text-[10px] opacity-50" />
                    app.promptlab.dev
                  </div>
                </div>
                <div className="w-[52px]" />
              </div>

              {/* App Layout */}
              <div className="flex min-h-[560px]">
                {/* Sidebar */}
                <div className="hidden md:flex flex-col w-[200px] border-r border-border bg-[#fafafa] py-3 px-2 shrink-0">

                  <div className="space-y-0.5 text-[12px]">
                    <SidebarItem label="Dashboard" />
                    <SidebarItem label="Prompts" active />
                    <SidebarItem label="Experiments" />
                    <SidebarItem label="Analytics" />
                    <SidebarItem label="Settings" />
                  </div>
                  <div className="mt-auto pt-4 border-t border-border mx-2">
                    <div className="flex items-center gap-2 px-1">
                      <div className="h-8 w-8 rounded-full  bg-blue-500/10 flex items-center justify-center text-[10px] font-semibold text-blue">AC</div>
                      <div>
                        <p className="text-[11px] font-medium text-foreground">Dev AI Labs</p>
                        <p className="text-[10px] text-muted-foreground">Pro plan</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex flex-col min-w-0">
                  {/* Top Nav */}
                  <div className="flex items-center justify-between px-5 py-3 border-b border-border">
                    <div className="flex items-center gap-2 text-[12px]">
                      <span className="text-muted-foreground">Prompts</span>
                      <span className="text-muted-foreground">/</span>
                      <span className="font-medium text-foreground">Checkout Assistant</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="h-7 text-[11px] px-2.5">Compare</Button>
                      <Button variant="destructive" size="sm" className="h-7 text-[11px] px-2.5 bg-rose/10 text-rose border-rose/20 hover:bg-rose/15 hover:text-rose">
                        Rollback
                      </Button>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="flex-1 p-5 overflow-hidden">
                    {/* Status Row */}
                    <div className="flex items-center gap-3 mb-5">
                      <Badge variant="outline" className="gap-1.5 text-[11px] text-emerald border-emerald/20 bg-emerald/5">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                        Live
                      </Badge>
                      <span className="text-[11px] text-muted-foreground">3 versions active</span>
                      <span className="text-[11px] text-muted-foreground">·</span>
                      <span className="text-[11px] text-muted-foreground">2.4M req/day</span>
                      <span className="text-[11px] text-muted-foreground">·</span>
                      <span className="text-[11px] text-muted-foreground">Updated 2 min ago</span>
                    </div>

                    {/* Two Column Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
                      {/* Left: Traffic + Metrics */}
                      <div className="md:col-span-3 space-y-4">
                        {/* Traffic Distribution */}
                        <div className="rounded-lg border border-border p-4">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-[11px] font-semibold text-foreground uppercase tracking-wider">Traffic Split</span>
                            <Button variant="ghost" size="sm" className="h-6 px-2 text-[10px] text-blue hover:text-blue">Edit</Button>
                          </div>
                          <div className="flex h-4 rounded-full overflow-hidden gap-[2px] mb-3">
                            <div className="bg-foreground rounded-l-full relative" style={{ width: '60%' }}>
                              <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-white">60%</span>
                            </div>
                            <div className="bg-blue relative" style={{ width: '25%' }}>
                              <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-white">25%</span>
                            </div>
                            <div className="bg-emerald rounded-r-full relative" style={{ width: '15%' }}>
                              <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-white">15%</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-5 text-[11px]">
                            <span className="flex items-center gap-1.5 text-muted-foreground"><span className="h-2 w-2 rounded-full bg-foreground" /> Current</span>
                            <span className="flex items-center gap-1.5 text-muted-foreground"><span className="h-2 w-2 rounded-full bg-blue" /> Variant B</span>
                            <span className="flex items-center gap-1.5 text-muted-foreground"><span className="h-2 w-2 rounded-full bg-emerald" /> Experiment</span>
                          </div>
                        </div>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-2 gap-3">
                          <MetricCard label="Quality Score" value="94.2" change="+3.1" positive spark={[65, 68, 70, 72, 71, 75, 78, 80, 83, 85, 88, 90, 92, 94]} />
                          <MetricCard label="Avg. Response" value="285ms" change="-16%" positive spark={[90, 85, 82, 78, 72, 68, 65, 60, 55, 50, 48, 45, 42, 40]} />
                          <MetricCard label="Cost / Request" value="$0.0021" change="-38%" positive spark={[80, 75, 70, 68, 60, 55, 50, 48, 45, 42, 38, 35, 33, 30]} />
                          <MetricCard label="Error Rate" value="0.02%" change="-62%" positive spark={[50, 42, 38, 30, 25, 20, 18, 15, 12, 10, 8, 6, 5, 4]} />
                        </div>
                      </div>

                      {/* Right: Activity Feed */}
                      <div className="md:col-span-2">
                        <div className="rounded-lg border border-border p-4 h-full">
                          <span className="text-[11px] font-semibold text-foreground uppercase tracking-wider block mb-3">Activity</span>
                          <div className="space-y-3">
                            <ActivityItem
                              icon={<RiArrowUpLine className="text-emerald text-xs" />}
                              iconBg="bg-emerald/10"
                              text={<>Variant B promoted to <span className="font-medium text-foreground">25%</span> traffic</>}
                              time="2m ago"
                            />
                            <ActivityItem
                              icon={<BiTargetLock className="text-blue text-xs" />}
                              iconBg="bg-blue/10"
                              text={<>Quality threshold reached: <span className="font-medium text-emerald">94.2</span> (target: 90)</>}
                              time="15m ago"
                            />
                            <ActivityItem
                              icon={<MdOutlineElectricBolt className="text-amber text-xs" />}
                              iconBg="bg-amber/10"
                              text={<>Experiment started with <span className="font-medium text-foreground">15%</span> traffic</>}
                              time="1h ago"
                            />
                            <ActivityItem
                              icon={<RiEditLine className="text-muted-foreground text-xs" />}
                              iconBg="bg-muted"
                              text={<>New version created by <span className="font-medium text-foreground">Sarah</span></>}
                              time="3h ago"
                            />
                            <ActivityItem
                              icon={<RiArrowGoBackLine className="text-rose text-xs" />}
                              iconBg="bg-rose/10"
                              text={<>Rolled back v3.1 — <span className="font-medium text-rose">error rate spike</span></>}
                              time="1d ago"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}

function SidebarItem({ label, active }: { label: string; active?: boolean }) {
  return (
    <div className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-[12px] ${active ? 'bg-white border border-border shadow-sm font-medium text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
      <span>{label}</span>
    </div>
  );
}

function MetricCard({ label, value, change, positive, spark }: {
  label: string; value: string; change: string; positive: boolean; spark: number[];
}) {
  const max = Math.max(...spark);
  const points = spark.map((v, i) => {
    const x = (i / (spark.length - 1)) * 100;
    const y = 28 - (v / max) * 24;
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="rounded-lg border border-border p-3 bg-white">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[11px] text-muted-foreground">{label}</span>
        <Badge variant="outline" className={`text-[10px] px-1.5 py-0 h-4 font-medium border-0 ${positive ? 'bg-emerald/8 text-emerald' : 'bg-rose/8 text-rose'}`}>
          {positive ? <RiArrowDownLine className="text-[9px] mr-0.5" /> : <RiArrowUpLine className="text-[9px] mr-0.5" />}
          {change}
        </Badge>
      </div>
      <div className="text-lg font-bold font-mono text-foreground mb-2">{value}</div>
      <svg viewBox="0 0 100 30" className="w-full h-6" preserveAspectRatio="none">
        <polyline
          points={points}
          fill="none"
          stroke={positive ? '#059669' : '#dc2626'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function ActivityItem({ icon, iconBg, text, time }: {
  icon: React.ReactNode; iconBg: string; text: React.ReactNode; time: string;
}) {
  return (
    <div className="flex items-start gap-2.5">
      <span className={`h-5 w-5 shrink-0 rounded-full ${iconBg} flex items-center justify-center mt-0.5`}>
        {icon}
      </span>
      <div className="flex-1 min-w-0 flex items-baseline justify-between gap-2">
        <p className="text-[11px] text-muted-foreground leading-relaxed">{text}</p>
        <p className="text-[10px] text-muted-foreground/50 shrink-0">{time}</p>
      </div>
    </div>
  );
}
