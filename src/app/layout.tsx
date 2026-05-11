import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PromptLab — Production Infrastructure for Prompt Engineering",
  description:
    "Version, deploy, experiment, and rollback prompts in production. PromptLab brings software deployment workflows to prompt engineering with traffic splitting, A/B experiments, and instant rollback.",
  keywords: [
    "prompt engineering",
    "prompt versioning",
    "prompt deployment",
    "AI infrastructure",
    "prompt management",
    "LLM operations",
    "prompt experiments",
    "traffic splitting",
  ],
  openGraph: {
    title: "PromptLab — Production Infrastructure for Prompt Engineering",
    description:
      "Version, deploy, experiment, and rollback prompts in production.",
    type: "website",
    siteName: "PromptLab",
  },
  twitter: {
    card: "summary_large_image",
    title: "PromptLab — Production Infrastructure for Prompt Engineering",
    description:
      "Version, deploy, experiment, and rollback prompts in production.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#0a0a0b]">{children}</body>
    </html>
  );
}
