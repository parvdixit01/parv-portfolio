"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  section: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ section, title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <p className="mb-2 font-mono text-sm text-cyan">
        <span className="text-magenta">§</span>
        {section}
        <span className="text-foreground-muted"> // module</span>
      </p>
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-foreground-muted">{subtitle}</p>
      )}
      <div className="section-divider mt-6 max-w-xs" />
    </motion.div>
  );
}
