"use client";

import { certifications } from "@/data/content";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Award } from "lucide-react";

export function CertificationsSection() {
  return (
    <section id="certifications" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          section="08"
          title="Certifications"
          subtitle="Continuous learning and industry credentials."
        />

        <GlassCard hover={false}>
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-magenta/10">
              <Award className="h-6 w-6 text-magenta" />
            </div>
            <div>
              <p className="font-mono text-xs text-cyan">
                <span className="text-magenta">status:</span> in_progress
              </p>
              <p className="mt-2 text-foreground-muted">
                {certifications.message}
              </p>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
