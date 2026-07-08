"use client";

import { bio } from "@/data/content";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import {
  GitBranch,
  Server,
  Shield,
  Zap,
} from "lucide-react";

const principles = [
  {
    icon: GitBranch,
    title: "Automate Everything",
    desc: "If it runs twice, it deserves a pipeline.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    desc: "Least privilege, encrypted secrets, audited changes.",
  },
  {
    icon: Server,
    title: "Infrastructure as Code",
    desc: "Repeatable, version-controlled, reviewable deployments.",
  },
  {
    icon: Zap,
    title: "Observability First",
    desc: "You can't fix what you can't see — metrics, logs, traces.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          section="03"
          title="About Me"
          subtitle="Building the bridge between code and production."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <ScrollReveal>
            <GlassCard hover={false} className="h-full">
              <div className="font-mono text-xs text-cyan">
                <span className="text-magenta">#</span> cat about.md
              </div>
              <div className="mt-4 space-y-4 whitespace-pre-line leading-relaxed text-foreground-muted">
                {bio.long}
              </div>
            </GlassCard>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((item, i) => (
              <GlassCard key={item.title} delay={i * 0.1}>
                <item.icon className="mb-3 h-6 w-6 text-cyan" />
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-foreground-muted">
                  {item.desc}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
