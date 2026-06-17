"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import ParticleField from "@/components/ai/ParticleField";

/* Rotating, typed "generative" line — the terminal/AI motif. */
const PHRASES = [
  "AI product engineering",
  "LLM-powered automation",
  "serverless platforms at scale",
  "idea → production, fast",
];

function TypedRotator() {
  const [text, setText] = useState("");
  const [phrase, setPhrase] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setText(PHRASES[0]);
      return;
    }
    const full = PHRASES[phrase];
    let delay = deleting ? 35 : 65;

    if (!deleting && text === full) {
      delay = 1600; // hold the full phrase
      const t = setTimeout(() => setDeleting(true), delay);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setPhrase((p) => (p + 1) % PHRASES.length);
      return;
    }

    const t = setTimeout(() => {
      setText((cur) =>
        deleting ? full.slice(0, cur.length - 1) : full.slice(0, cur.length + 1)
      );
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, phrase]);

  return (
    <span className="font-mono text-brand">
      {text}
      <span className="gd-caret ml-0.5 inline-block w-[2px] -mb-0.5 h-[1em] bg-brand align-middle" />
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function AiHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-canvas">
      {/* --- Background layers --- */}
      {/* engineering grid */}
      <div className="gd-grid gd-grid-animate gd-fade-radial absolute inset-0 z-0" aria-hidden />

      {/* aurora glow blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <div
          className="absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-60 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0,229,153,0.35), transparent 60%)",
            animation: "gd-aurora 16s ease-in-out infinite",
          }}
        />
        <div
          className="absolute right-[-5%] bottom-[5%] h-[420px] w-[520px] rounded-full opacity-40 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0,179,122,0.3), transparent 60%)",
            animation: "gd-aurora 22s ease-in-out infinite reverse",
          }}
        />
      </div>

      {/* neural field */}
      <ParticleField className="absolute inset-0 z-0 h-full w-full gd-fade-radial" />

      {/* sweeping light beams */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <div className="gd-beam absolute top-[28%] left-0 h-px w-1/2" />
        <div
          className="gd-beam absolute top-[64%] left-0 h-px w-1/3"
          style={{ animationDelay: "2.4s" }}
        />
      </div>

      {/* top + bottom vignette to seat content */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(6,8,10,0.4) 0%, transparent 22%, transparent 70%, rgba(6,8,10,0.95) 100%)",
        }}
        aria-hidden
      />

      {/* --- Foreground --- */}
      <div className="relative z-20">
        <Navbar />
      </div>

      <main className="relative z-10 mx-auto flex min-h-[calc(100vh-64px)] max-w-[1100px] flex-col items-center justify-center px-5 text-center">
        {/* eyebrow badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="gd-glass gd-glass-brand mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-brand opacity-70 [animation:gd-pulse-glow_2s_ease-in-out_infinite]" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
          </span>
          <span className="font-mono text-[12px] tracking-[0.18em] text-ink-soft uppercase">
            AI-First Product Studio
          </span>
        </motion.div>

        {/* headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="max-w-[900px] text-balance text-[40px] font-semibold leading-[1.05] tracking-tight text-ink sm:text-[60px] lg:text-[76px]"
        >
          Intelligent software,
          <br className="hidden sm:block" /> engineered at the{" "}
          <span className="gd-shimmer gd-glow-text">speed of light</span>.
        </motion.h1>

        {/* subcopy */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-6 max-w-[620px] text-[16px] leading-[1.7] text-ink-soft sm:text-[18px]"
        >
          Gamma Developers ships AI-native platforms, automations, and
          scale-ready systems — from idea to production, without the agency drag.
        </motion.p>

        {/* generative terminal line */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="gd-glass mt-7 flex items-center gap-2 rounded-lg px-4 py-2 font-mono text-[13px] sm:text-[14px]"
        >
          <span className="text-brand">▸</span>
          <span className="text-ink-faint">gamma</span>
          <span className="text-ink-faint">build</span>
          <TypedRotator />
        </motion.div>

        {/* CTAs */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Link
            href="/contact"
            className="group gd-glow-sm inline-flex h-[50px] items-center gap-2 rounded-full bg-brand px-7 text-[15px] font-semibold text-[color:var(--color-brand-ink)] transition-transform duration-200 hover:scale-[1.03]"
          >
            Start a project
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/projects"
            className="gd-glass inline-flex h-[50px] items-center gap-2 rounded-full px-7 text-[15px] font-medium text-ink transition-colors duration-200 hover:border-[color:var(--color-line-bright)]"
          >
            <Sparkles className="h-4 w-4 text-brand" />
            See our work
          </Link>
        </motion.div>

        {/* trust strip */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13px] text-ink-faint"
        >
          {[
            ["21+", "platforms shipped"],
            ["AI-native", "by default"],
            ["Serverless", "built for scale"],
          ].map(([k, v]) => (
            <div key={k} className="flex items-center gap-2">
              <span className="font-mono font-semibold text-ink">{k}</span>
              <span>{v}</span>
            </div>
          ))}
        </motion.div>
      </main>
    </section>
  );
}
