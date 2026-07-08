"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Moon, Sun, X, Terminal } from "lucide-react";
import { navLinks, siteConfig } from "@/data/content";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn, scrollToSection } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    const id = href.replace("#", "");
    scrollToSection(id);
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass py-3 shadow-lg" : "bg-transparent py-5"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <button
          type="button"
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2 font-mono text-sm font-bold text-cyan transition-colors hover:text-magenta"
        >
          <Terminal className="h-5 w-5" />
          <span>{siteConfig.domain}</span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => handleNav(link.href)}
              className="font-mono text-sm text-foreground-muted transition-colors hover:text-cyan"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="glass flex h-10 w-10 items-center justify-center rounded-lg text-cyan transition-colors hover:border-cyan/40"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="glass flex h-10 w-10 items-center justify-center rounded-lg text-cyan md:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass mx-4 mt-2 overflow-hidden rounded-xl md:hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleNav(link.href)}
                  className="rounded-lg px-4 py-3 text-left font-mono text-sm text-foreground-muted transition-colors hover:bg-cyan/10 hover:text-cyan"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
