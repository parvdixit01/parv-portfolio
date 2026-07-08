"use client";

import { siteConfig } from "@/data/content";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[var(--glass-border)] bg-background-secondary/50 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-mono text-sm text-foreground-muted">
            © {year}{" "}
            <span className="text-cyan">{siteConfig.name}</span>
            <span className="mx-2 text-foreground-muted/50">·</span>
            Built with precision, deployed with confidence.
          </p>
          <p className="mt-1 font-mono text-xs text-foreground-muted/60">
            Next.js · TypeScript · Tailwind · Framer Motion
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-foreground-muted transition-colors hover:text-cyan"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-foreground-muted transition-colors hover:text-cyan"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="Email"
            className="text-foreground-muted transition-colors hover:text-cyan"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-4 max-w-6xl px-6">
        <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-xs text-foreground-muted/50 md:justify-start">
          <span>
            uptime: <span className="text-emerald-400">99.9%</span>
          </span>
          <span>·</span>
          <span>
            region: <span className="text-cyan">ap-south-1</span>
          </span>
          <span>·</span>
          <span>
            version: <span className="text-magenta">v2.0.26</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
