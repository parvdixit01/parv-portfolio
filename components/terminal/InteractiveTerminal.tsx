"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { siteConfig, terminalCommands } from "@/data/content";
import { scrollToSection } from "@/lib/utils";

interface TerminalLine {
  type: "input" | "output" | "system";
  text: string;
}

const bootSequence = [
  { cmd: "whoami", output: terminalCommands.whoami },
  { cmd: "cat /etc/motd", output: siteConfig.tagline },
  {
    cmd: "kubectl get pods",
    output: `NAME                    STATUS
portfolio-deploy        Running
ticket-automation       Running
monitoring-stack        Running`,
  },
];

export function InteractiveTerminal() {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [input, setInput] = useState("");
  const [bootDone, setBootDone] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    async function runBoot() {
      for (const item of bootSequence) {
        if (cancelled) return;

        let typed = "";
        setLines((prev) => [
          ...prev,
          { type: "input", text: "parv@nexus ~ $ " },
        ]);

        for (const char of item.cmd) {
          if (cancelled) return;
          typed += char;
          const current = typed;
          setLines((prev) => {
            const updated = [...prev];
            updated[updated.length - 1] = {
              type: "input",
              text: `parv@nexus ~ $ ${current}`,
            };
            return updated;
          });
          await new Promise((r) => setTimeout(r, 45));
        }

        await new Promise((r) => setTimeout(r, 350));
        setLines((prev) => [...prev, { type: "output", text: item.output }]);
        await new Promise((r) => setTimeout(r, 400));
      }

      if (!cancelled) setBootDone(true);
    }

    runBoot();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [lines]);

  const processCommand = useCallback((cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();

    setLines((prev) => [
      ...prev,
      { type: "input", text: `parv@nexus ~ $ ${cmd}` },
    ]);

    switch (trimmed) {
      case "help":
        setLines((prev) => [
          ...prev,
          { type: "output", text: terminalCommands.help },
        ]);
        break;
      case "whoami":
        setLines((prev) => [
          ...prev,
          { type: "output", text: terminalCommands.whoami },
        ]);
        break;
      case "skills":
        scrollToSection("skills");
        setLines((prev) => [
          ...prev,
          { type: "system", text: "→ Navigating to skills module..." },
        ]);
        break;
      case "projects":
        scrollToSection("projects");
        setLines((prev) => [
          ...prev,
          { type: "system", text: "→ Navigating to projects module..." },
        ]);
        break;
      case "experience":
        scrollToSection("experience");
        setLines((prev) => [
          ...prev,
          { type: "system", text: "→ Navigating to experience module..." },
        ]);
        break;
      case "contact":
        scrollToSection("contact");
        setLines((prev) => [
          ...prev,
          { type: "system", text: "→ Navigating to contact module..." },
        ]);
        break;
      case "about":
        scrollToSection("about");
        setLines((prev) => [
          ...prev,
          { type: "system", text: "→ Navigating to about module..." },
        ]);
        break;
      case "clear":
        setLines([]);
        break;
      case "":
        break;
      default:
        setLines((prev) => [
          ...prev,
          {
            type: "output",
            text: `Command not found: ${cmd}. Type 'help' for available commands.`,
          },
        ]);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setHistory((prev) => [...prev, input]);
    setHistoryIndex(-1);
    processCommand(input);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const newIndex =
        historyIndex === -1
          ? history.length - 1
          : Math.max(0, historyIndex - 1);
      setHistoryIndex(newIndex);
      setInput(history[newIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const newIndex = historyIndex + 1;
      if (newIndex >= history.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="glass w-full overflow-hidden rounded-xl"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex items-center gap-2 border-b border-[var(--glass-border)] px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-magenta/80" />
        <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
        <div className="h-3 w-3 rounded-full bg-emerald-400/80" />
        <span className="ml-2 font-mono text-xs text-foreground-muted">
          parv@nexus — bash
        </span>
      </div>

      <div
        ref={containerRef}
        className="max-h-72 overflow-y-auto p-4 font-mono text-sm md:max-h-80"
        style={{ background: "var(--terminal-bg)" }}
      >
        {lines.map((line, i) => (
          <div
            key={i}
            className={
              line.type === "input"
                ? "text-cyan"
                : line.type === "system"
                  ? "text-magenta"
                  : "whitespace-pre-wrap text-foreground-muted"
            }
          >
            {line.text}
          </div>
        ))}

        {bootDone && (
          <form onSubmit={handleSubmit} className="mt-1 flex items-center">
            <span className="text-cyan">parv@nexus ~ $&nbsp;</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none"
              spellCheck={false}
              autoComplete="off"
              aria-label="Terminal input"
            />
            <span className="cursor-blink inline-block h-4 w-2 bg-cyan" />
          </form>
        )}

        {!bootDone && (
          <span className="cursor-blink inline-block h-4 w-2 bg-cyan" />
        )}
      </div>
    </motion.div>
  );
}
