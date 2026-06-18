"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, RotateCcw, Cpu, Zap, Check, AlertTriangle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";

/**
 * Cinematic hero: a dead project is revived by AI "gamma rays".
 * Stages: 0 dead → 1 AI scan → 2 gamma strike → 3 alive → 4 brand reveal.
 */
const TIMELINE = { scan: 1300, strike: 2600, alive: 3100, brand: 4100 };

// AI agent status readout per stage
const AGENT = [
  { icon: AlertTriangle, text: "diagnosing critical failure", tone: "bad" },
  { icon: Cpu, text: "analyzing architecture…", tone: "scan" },
  { icon: Zap, text: "applying gamma rays", tone: "strike" },
  { icon: Check, text: "system revived · optimal", tone: "alive" },
  { icon: Check, text: "system revived · optimal", tone: "alive" },
] as const;

function Flip({
  isAlive,
  dead,
  alive,
  className,
}: {
  isAlive: boolean;
  dead: string;
  alive: string;
  className?: string;
}) {
  return (
    <span className={className} style={{ display: "inline-block" }}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isAlive ? "a" : "d"}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.3 }}
          style={{ display: "inline-block" }}
        >
          {isAlive ? alive : dead}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function AiHero() {
  const [stage, setStage] = useState(0);
  const [run, setRun] = useState(0); // bump to replay

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setStage(4);
      return;
    }
    setStage(0);
    const timers = [
      setTimeout(() => setStage(1), TIMELINE.scan),
      setTimeout(() => setStage(2), TIMELINE.strike),
      setTimeout(() => setStage(3), TIMELINE.alive),
      setTimeout(() => setStage(4), TIMELINE.brand),
    ];
    return () => timers.forEach(clearTimeout);
  }, [run]);

  const alive = stage >= 3;
  const agent = AGENT[stage];
  const AgentIcon = agent.icon;

  return (
    <section className="relative min-h-screen overflow-hidden bg-canvas">
      {/* grid — dim while dead, brightens once alive */}
      <motion.div
        className="gd-grid gd-fade-radial absolute inset-0 z-0"
        animate={{ opacity: alive ? 0.7 : 0.25 }}
        transition={{ duration: 1.2 }}
        aria-hidden
      />
      {/* aurora — ignites on revival */}
      <motion.div
        className="absolute left-1/2 top-[-12%] z-0 h-[560px] w-[820px] -translate-x-1/2 rounded-full blur-[130px]"
        animate={{ opacity: alive ? 0.6 : 0.12 }}
        transition={{ duration: 1.4 }}
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,229,153,0.4), transparent 60%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(6,8,10,0.5) 0%, transparent 30%, transparent 68%, rgba(6,8,10,0.96) 100%)",
        }}
        aria-hidden
      />

      <div className="relative z-20">
        <Navbar />
      </div>

      <main className="relative z-10 mx-auto flex min-h-[calc(100vh-72px)] max-w-[1080px] flex-col items-center justify-center px-5 py-10 text-center">
        {/* status kicker */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-700"
          style={{
            borderColor: alive ? "var(--color-line-bright)" : "rgba(255,80,80,0.35)",
            color: alive ? "var(--color-brand)" : "#ff6b6b",
            background: alive ? "rgba(0,229,153,0.05)" : "rgba(255,80,80,0.05)",
          }}
        >
          <span className="relative flex h-2 w-2">
            <span
              className="absolute inline-flex h-full w-full rounded-full opacity-70"
              style={{
                background: alive ? "var(--color-brand)" : "#ff5050",
                animation: "gd-pulse-glow 1.6s ease-in-out infinite",
              }}
            />
            <span
              className="relative inline-flex h-2 w-2 rounded-full"
              style={{ background: alive ? "var(--color-brand)" : "#ff5050" }}
            />
          </span>
          {alive ? "Project status — revived" : "Project status — critical"}
        </motion.div>

        {/* ---------- THE SPECIMEN STAGE ---------- */}
        <div className="relative">
          {/* gamma-ray beam */}
          <AnimatePresence>
            {stage === 2 && (
              <motion.div
                key={`beam-${run}`}
                className="pointer-events-none absolute left-1/2 z-30 -translate-x-1/2"
                style={{ top: -180, transformOrigin: "top" }}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                aria-hidden
              >
                <div
                  className="h-[180px] w-[4px] rounded-full"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent, #6bffc6, #ffffff)",
                    boxShadow:
                      "0 0 24px 6px rgba(0,229,153,0.8), 0 0 60px 16px rgba(0,229,153,0.4)",
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* the project card */}
          <motion.div
            className={`gd-glass relative w-[300px] overflow-hidden rounded-2xl p-5 text-left sm:w-[420px] ${
              stage === 0 ? "gd-flicker" : ""
            } ${alive ? "gd-alive-pulse gd-glass-brand" : ""}`}
            animate={{
              borderColor: alive ? "var(--color-line-bright)" : "rgba(255,255,255,0.08)",
              filter: alive ? "saturate(1)" : "saturate(0.25) brightness(0.8)",
            }}
            transition={{ duration: 0.8 }}
          >
            {/* AI scan sweep */}
            {stage === 1 && (
              <div
                key={`scan-${run}`}
                className="gd-scanline pointer-events-none absolute inset-x-0 top-0 z-20 h-[40px]"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent, rgba(0,229,153,0.35), transparent)",
                  boxShadow: "0 0 20px rgba(0,229,153,0.5)",
                }}
                aria-hidden
              />
            )}
            {/* impact flash */}
            {stage === 2 && (
              <div
                key={`flash-${run}`}
                className="gd-flash pointer-events-none absolute inset-0 z-20"
                style={{
                  background:
                    "radial-gradient(circle at 50% 35%, rgba(255,255,255,0.9), rgba(0,229,153,0.4) 40%, transparent 70%)",
                }}
                aria-hidden
              />
            )}

            {/* card header */}
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                </span>
                <span className="font-mono text-[12px] text-ink-faint">gamma.app</span>
              </div>
              <div
                className="flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wide"
                style={{
                  background: alive ? "rgba(0,229,153,0.12)" : "rgba(255,80,80,0.12)",
                  color: alive ? "var(--color-brand)" : "#ff6b6b",
                }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: alive ? "var(--color-brand)" : "#ff5050" }}
                />
                <Flip isAlive={alive} dead="Offline" alive="Live" />
              </div>
            </div>

            {/* chart */}
            <div className="relative mb-4 h-[96px] w-full">
              <svg viewBox="0 0 300 96" className="h-full w-full" preserveAspectRatio="none">
                {/* dead: flat broken line */}
                {!alive && (
                  <polyline
                    points="0,80 70,80 78,80 86,52 92,80 160,80 168,80 300,80"
                    fill="none"
                    stroke="#ff5050"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    opacity="0.8"
                  />
                )}
                {/* alive: surging line that draws itself */}
                {alive && (
                  <>
                    <motion.path
                      d="M0,86 C40,82 60,60 92,54 C130,46 150,30 190,30 C232,30 262,12 300,6"
                      fill="none"
                      stroke="var(--color-brand)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                    <motion.path
                      d="M0,86 C40,82 60,60 92,54 C130,46 150,30 190,30 C232,30 262,12 300,6 L300,96 L0,96 Z"
                      fill="url(#gdFill)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1.2, delay: 0.3 }}
                    />
                    <defs>
                      <linearGradient id="gdFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(0,229,153,0.35)" />
                        <stop offset="100%" stopColor="rgba(0,229,153,0)" />
                      </linearGradient>
                    </defs>
                  </>
                )}
              </svg>
            </div>

            {/* metrics */}
            <div className="grid grid-cols-3 gap-3 font-mono">
              {[
                { label: "Uptime", dead: "0%", alive: "100%" },
                { label: "Errors", dead: "147", alive: "0" },
                { label: "Latency", dead: "—", alive: "38ms" },
              ].map((m) => (
                <div key={m.label} className="rounded-lg bg-white/[0.03] p-2.5">
                  <div className="mb-1 text-[10px] uppercase tracking-wide text-ink-faint">
                    {m.label}
                  </div>
                  <Flip
                    isAlive={alive}
                    dead={m.dead}
                    alive={m.alive}
                    className="text-[18px] font-semibold"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* AI agent readout */}
          <motion.div
            key={stage}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mx-auto mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-[12px]"
            style={{ color: agent.tone === "bad" ? "#ff6b6b" : "var(--color-brand)" }}
          >
            <AgentIcon className="h-3.5 w-3.5" />
            <span className="text-ink-soft">gamma.ai</span>
            <span>▸</span>
            <span style={{ color: agent.tone === "bad" ? "#ff6b6b" : "var(--color-brand)" }}>
              {agent.text}
            </span>
          </motion.div>
        </div>

        {/* ---------- BRAND REVEAL ---------- */}
        <div className="mt-12 flex min-h-[210px] flex-col items-center justify-start">
          {stage >= 4 && (
            <>
              <h1
                key={`brand-${run}`}
                className="gd-reveal-glitch font-display text-[44px] leading-none tracking-[0.04em] text-ink sm:text-[68px] lg:text-[80px]"
                style={{ fontWeight: 900 }}
              >
                <span className="gd-glow-text text-brand">GAMMA</span>
              </h1>
              <motion.div
                initial={{ opacity: 0, letterSpacing: "0.5em" }}
                animate={{ opacity: 1, letterSpacing: "0.42em" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="font-display mt-1 text-[13px] font-medium uppercase tracking-[0.42em] text-ink-soft sm:text-[16px]"
              >
                Developers
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="mt-6 max-w-[560px] text-[16px] leading-[1.7] text-ink-soft sm:text-[18px]"
              >
                We bring projects back to life — AI-engineered software,
                rebuilt and shipped at the speed of light.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.0 }}
                className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
              >
                <Link
                  href="/contact"
                  className="group gd-glow-sm inline-flex h-[50px] items-center gap-2 rounded-full bg-brand px-7 text-[15px] font-semibold text-[color:var(--color-brand-ink)] transition-transform duration-200 hover:scale-[1.03]"
                >
                  Revive my project
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/projects"
                  className="gd-glass inline-flex h-[50px] items-center gap-2 rounded-full px-7 text-[15px] font-medium text-ink transition-colors duration-200 hover:border-[color:var(--color-line-bright)]"
                >
                  See our work
                </Link>
                <button
                  onClick={() => setRun((r) => r + 1)}
                  className="inline-flex h-[50px] items-center gap-2 rounded-full px-4 font-mono text-[13px] text-ink-faint transition-colors hover:text-brand"
                  aria-label="Replay animation"
                >
                  <RotateCcw className="h-4 w-4" />
                  Replay
                </button>
              </motion.div>
            </>
          )}
        </div>
      </main>
    </section>
  );
}
