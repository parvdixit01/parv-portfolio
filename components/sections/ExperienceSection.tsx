"use client";

import { experience } from "@/data/content";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Briefcase } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          section="06"
          title="Work Experience"
          subtitle="Production operations, pipelines, and incident response."
        />

        <div className="space-y-6">
          {experience.map((job, i) => (
            <GlassCard key={job.id} delay={i * 0.1}>
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-magenta/10">
                    <Briefcase className="h-6 w-6 text-magenta" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{job.role}</h3>
                    <p className="font-mono text-sm text-cyan">
                      {job.company} · {job.location}
                    </p>
                    <p className="mt-1 font-mono text-xs text-foreground-muted">
                      {job.period}
                    </p>
                  </div>
                </div>
              </div>

              <ul className="mt-6 space-y-2">
                {job.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm text-foreground-muted"
                  >
                    <span className="mt-1 shrink-0 font-mono text-cyan">
                      ▹
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
