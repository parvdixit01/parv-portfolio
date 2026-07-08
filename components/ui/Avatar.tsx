"use client";

import { motion } from "framer-motion";

export function Avatar() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="relative"
    >
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan to-magenta opacity-60 blur-sm" />
      <div className="glass relative flex h-28 w-28 items-center justify-center rounded-2xl md:h-32 md:w-32">
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan/10 to-magenta/10" />
          <div
            className="absolute inset-x-0 h-1/3 bg-cyan/10"
            style={{ animation: "scanline 3s linear infinite" }}
          />
        </div>
        <span className="relative font-mono text-3xl font-bold text-gradient md:text-4xl">
          PD
        </span>
      </div>
      <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-background bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
    </motion.div>
  );
}
