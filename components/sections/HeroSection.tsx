"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/data/content";
import { Avatar } from "@/components/ui/Avatar";
import { GlowButton } from "@/components/ui/GlowButton";
import { InteractiveTerminal } from "@/components/terminal/InteractiveTerminal";
import { scrollToSection } from "@/lib/utils";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center pt-24 pb-16"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-4"
          >
            <Avatar />
            <div>
              <p className="font-mono text-sm text-cyan">
                <span className="text-magenta">$</span> echo $ROLE
              </p>
              <p className="font-mono text-sm text-foreground-muted">
                {siteConfig.title}
              </p>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
          >
            <span className="text-gradient">{siteConfig.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-lg text-lg text-foreground-muted"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-2 font-mono text-sm text-foreground-muted/70"
          >
            📍 {siteConfig.location}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <GlowButton onClick={() => scrollToSection("projects")}>
              View Projects
            </GlowButton>
            <GlowButton
              variant="secondary"
              onClick={() => scrollToSection("contact")}
            >
              Get in Touch
            </GlowButton>
          </motion.div>
        </div>

        <InteractiveTerminal />
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => scrollToSection("intro")}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan/60 transition-colors hover:text-cyan"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </motion.button>
    </section>
  );
}
