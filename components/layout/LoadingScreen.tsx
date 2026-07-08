"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { terminalBootLines } from "@/data/content";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [lines, setLines] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < terminalBootLines.length) {
        setLines((prev) => [...prev, terminalBootLines[index]]);
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setDone(true);
          setTimeout(onComplete, 400);
        }, 300);
      }
    }, 280);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="w-full max-w-lg px-6">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-magenta/80" />
              <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <div className="h-3 w-3 rounded-full bg-emerald-400/80" />
              <span className="ml-2 font-mono text-xs text-foreground-muted">
                nexus-boot
              </span>
            </div>
            <div className="glass rounded-xl p-6 font-mono text-sm">
              {lines.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-cyan/90"
                >
                  <span className="text-foreground-muted">[{">"}]</span> {line}
                </motion.p>
              ))}
              <span className="cursor-blink inline-block h-4 w-2 bg-cyan" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
