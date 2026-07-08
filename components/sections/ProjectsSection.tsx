"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, RotateCcw } from "lucide-react";
import { GitHubIcon } from "@/components/ui/SocialIcons";
import { projects } from "@/data/content";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlowButton } from "@/components/ui/GlowButton";

function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: (typeof projects)[0];
  index: number;
  featured?: boolean;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <GlassCard
      delay={index * 0.1}
      className={featured ? "lg:col-span-2" : ""}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span className="font-mono text-xs text-cyan">
              {featured ? "★ featured" : `project/${project.id}`}
            </span>
            {project.placeholder && (
              <span className="rounded-full border border-magenta/40 bg-magenta/10 px-2 py-0.5 font-mono text-[10px] uppercase text-magenta">
                Edit me
              </span>
            )}
          </div>
          <h3 className="text-xl font-bold">{project.title}</h3>
        </div>
        <button
          type="button"
          onClick={() => setFlipped(!flipped)}
          aria-label="Toggle architecture view"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[var(--glass-border)] text-foreground-muted transition-colors hover:border-cyan/40 hover:text-cyan"
        >
          <RotateCcw className="h-4 w-4" />
        </button>
      </div>

      <AnimatePresence mode="wait">
        {!flipped ? (
          <motion.div
            key="front"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-4"
          >
            <p className="text-foreground-muted">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-cyan/20 bg-cyan/5 px-2.5 py-1 font-mono text-xs text-cyan"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              {project.repo && (
                <GlowButton href={project.repo} variant="ghost" external>
                  <GitHubIcon className="h-4 w-4" /> Repo
                </GlowButton>
              )}
              {project.demo && (
                <GlowButton href={project.demo} variant="ghost" external>
                  <ExternalLink className="h-4 w-4" /> Demo
                </GlowButton>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="back"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-4"
          >
            <p className="mb-2 font-mono text-xs text-magenta">
              # architecture.yaml
            </p>
            <pre className="overflow-x-auto rounded-lg border border-[var(--glass-border)] bg-background/50 p-4 font-mono text-xs leading-relaxed text-cyan/80">
              {project.architecture}
            </pre>
          </motion.div>
        )}
      </AnimatePresence>
    </GlassCard>
  );
}

export function ProjectsSection() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          section="05"
          title="Projects"
          subtitle="Real automation work and homelab infrastructure projects."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {featured && <ProjectCard project={featured} index={0} featured />}
          {rest.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
