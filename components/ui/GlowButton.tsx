"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
}

export function GlowButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  external,
}: GlowButtonProps) {
  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-mono text-sm font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-cyan/10 text-cyan border border-cyan/40 hover:bg-cyan/20 hover:shadow-[0_0_24px_var(--glow-cyan)] hover:border-cyan/70",
    secondary:
      "bg-magenta/10 text-magenta border border-magenta/40 hover:bg-magenta/20 hover:shadow-[0_0_24px_var(--glow-magenta)] hover:border-magenta/70",
    ghost:
      "bg-transparent text-foreground-muted border border-[var(--glass-border)] hover:text-cyan hover:border-cyan/40",
  };

  const content = (
    <motion.span
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={cn(base, variants[variant], className)}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="inline-block"
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className="inline-block">
      {content}
    </button>
  );
}
