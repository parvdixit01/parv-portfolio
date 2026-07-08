"use client";

import { education } from "@/data/content";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GraduationCap } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          section="07"
          title="Education"
          subtitle="Academic foundation in engineering."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item, i) => (
            <GlassCard key={item.institution} delay={i * 0.1}>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan/10">
                  <GraduationCap className="h-6 w-6 text-cyan" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{item.degree}</h3>
                  <p className="font-mono text-sm text-foreground-muted">
                    {item.institution}
                  </p>
                  <p className="mt-1 font-mono text-xs text-cyan">
                    {item.location} · {item.year}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
