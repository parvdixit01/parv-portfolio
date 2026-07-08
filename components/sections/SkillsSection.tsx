"use client";

import { skillCategories } from "@/data/content";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  Cloud,
  Container,
  GitBranch,
  Layers,
  Activity,
  Terminal,
  Code2,
  Workflow,
} from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ElementType> = {
  cloud: Cloud,
  container: Container,
  pipeline: GitBranch,
  iac: Layers,
  monitor: Activity,
  linux: Terminal,
  code: Code2,
  itsm: Workflow,
};

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          section="04"
          title="DevOps Tool Stack"
          subtitle="Technologies I work with across the delivery lifecycle."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, i) => {
            const Icon = iconMap[category.icon] || Terminal;
            return (
              <GlassCard key={category.id} delay={i * 0.05}>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan/10">
                    <Icon className="h-5 w-5 text-cyan" />
                  </div>
                  <h3 className="text-sm font-semibold leading-tight">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 + j * 0.05 }}
                      className="rounded-md border border-[var(--glass-border)] bg-background/50 px-2.5 py-1 font-mono text-xs text-foreground-muted transition-colors hover:border-cyan/40 hover:text-cyan"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
