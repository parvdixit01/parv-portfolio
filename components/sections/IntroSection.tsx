"use client";

import { stats, bio } from "@/data/content";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function IntroSection() {
  return (
    <section id="intro" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          section="02"
          title="Professional Introduction"
          subtitle="Bridging development and operations with automation-first thinking."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <GlassCard key={stat.label} delay={i * 0.1}>
              <p className="font-mono text-xs uppercase tracking-wider text-cyan">
                {stat.label}
              </p>
              <p className="mt-2 text-xl font-semibold">{stat.value}</p>
            </GlassCard>
          ))}
        </div>

        <ScrollReveal className="mt-8">
          <GlassCard hover={false}>
            <p className="text-lg leading-relaxed text-foreground-muted">
              {bio.short}
            </p>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
