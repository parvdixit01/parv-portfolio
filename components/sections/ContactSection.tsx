"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Copy, Check } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { siteConfig } from "@/data/content";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio Contact from ${formState.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          section="09"
          title="Let's Connect"
          subtitle={siteConfig.availability}
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <GlassCard hover={false}>
            <h3 className="mb-6 font-mono text-sm text-cyan">
              <span className="text-magenta">$</span> contact --list
            </h3>

            <div className="space-y-4">
              <button
                type="button"
                onClick={copyEmail}
                className="flex w-full items-center gap-3 rounded-lg border border-[var(--glass-border)] p-4 text-left transition-colors hover:border-cyan/40"
              >
                <Mail className="h-5 w-5 text-cyan" />
                <div className="flex-1">
                  <p className="font-mono text-xs text-foreground-muted">
                    Email
                  </p>
                  <p className="text-sm">{siteConfig.email}</p>
                </div>
                {copied ? (
                  <Check className="h-4 w-4 text-emerald-400" />
                ) : (
                  <Copy className="h-4 w-4 text-foreground-muted" />
                )}
              </button>

              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-[var(--glass-border)] p-4 transition-colors hover:border-cyan/40"
              >
                <GitHubIcon className="h-5 w-5 text-cyan" />
                <div>
                  <p className="font-mono text-xs text-foreground-muted">
                    GitHub
                  </p>
                  <p className="text-sm">@parvdixit01</p>
                </div>
              </a>

              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-[var(--glass-border)] p-4 transition-colors hover:border-cyan/40"
              >
                <LinkedInIcon className="h-5 w-5 text-cyan" />
                <div>
                  <p className="font-mono text-xs text-foreground-muted">
                    LinkedIn
                  </p>
                  <p className="text-sm">parv-dixit</p>
                </div>
              </a>
            </div>
          </GlassCard>

          <GlassCard hover={false}>
            <h3 className="mb-6 font-mono text-sm text-cyan">
              <span className="text-magenta">$</span> send-message
            </h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <Check className="mb-4 h-12 w-12 text-emerald-400" />
                <p className="font-mono text-cyan">
                  Message ready — your email client should open shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block font-mono text-xs text-foreground-muted"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full rounded-lg border border-[var(--glass-border)] bg-background/50 px-4 py-3 text-sm outline-none transition-colors focus:border-cyan/50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block font-mono text-xs text-foreground-muted"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full rounded-lg border border-[var(--glass-border)] bg-background/50 px-4 py-3 text-sm outline-none transition-colors focus:border-cyan/50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1 block font-mono text-xs text-foreground-muted"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full resize-none rounded-lg border border-[var(--glass-border)] bg-background/50 px-4 py-3 text-sm outline-none transition-colors focus:border-cyan/50"
                  />
                </div>
                <button type="submit" className="inline-block">
                  <span className="relative inline-flex items-center justify-center gap-2 rounded-lg border border-cyan/40 bg-cyan/10 px-6 py-3 font-mono text-sm font-medium text-cyan transition-all duration-300 hover:border-cyan/70 hover:bg-cyan/20 hover:shadow-[0_0_24px_var(--glow-cyan)]">
                    <Send className="h-4 w-4" />
                    Send Message
                  </span>
                </button>
              </form>
            )}
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
