"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Calendar, UserCheck, Download } from "lucide-react";
import { CAMPAIGN_CONFIG } from "@/lib/campaign";
import { Reveal } from "@/components/MotionPrimitives";

type HeroVisualMode = "portrait" | "poster";

export function HeroSection() {
  const { candidate, messaging } = CAMPAIGN_CONFIG;
  const [visualMode, setVisualMode] = useState<HeroVisualMode>("poster");
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-slate-200 bg-ivory-ambient"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal delay={0.02} yOffset={12}>
              <div className="inline-flex items-center gap-2 rounded-full border border-navy-900/15 bg-white px-3.5 py-1.5 text-xs font-semibold tracking-wide text-navy-900 shadow-2xs">
                <Calendar
                  className="h-3.5 w-3.5 text-gold-700"
                  aria-hidden="true"
                />
                <span>Election Day | {candidate.electionDate}</span>
              </div>
            </Reveal>

            <Reveal delay={0.08} yOffset={14}>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-gold-700 sm:text-base">
                {candidate.heroIntro}
              </p>
            </Reveal>

            <Reveal delay={0.14} yOffset={16}>
              <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-navy-900 sm:text-5xl lg:text-6xl lg:leading-[1.06]">
                {messaging.slogan}
              </h1>
            </Reveal>

            <Reveal delay={0.2} yOffset={16}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-700 sm:text-xl">
                {messaging.heroSupportingText}
              </p>
            </Reveal>

            <Reveal delay={0.26} yOffset={16}>
              <p className="mt-4 font-serif text-lg text-navy-800">
                &ldquo;{messaging.supportingStatement}&rdquo;
              </p>
            </Reveal>

            <Reveal delay={0.32} yOffset={16}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#vision"
                  className="inline-flex items-center gap-2 rounded-md bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-navy-800 sm:text-base"
                >
                  Explore My Vision
                  <ArrowRight
                    className="h-4 w-4 text-gold-400"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center gap-2 rounded-md border border-navy-900/20 bg-white px-6 py-3.5 text-sm font-semibold text-navy-900 transition-colors hover:border-navy-900/40 hover:bg-slate-50 sm:text-base"
                >
                  <UserCheck
                    className="h-4 w-4 text-navy-700"
                    aria-hidden="true"
                  />
                  Meet Godson
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.18} yOffset={20}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div
                  aria-hidden="true"
                  className="absolute -right-3 -bottom-3 h-full w-full rounded-2xl border border-gold-500/40 bg-navy-900/5"
                />

                <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-[#111214] shadow-xl">
                  {/* Top interactive switcher */}
                  <div className="flex items-center justify-between border-b border-white/10 bg-navy-950/95 px-4 py-2.5">
                    <div
                      role="tablist"
                      aria-label="Switch hero visual"
                      className="inline-flex rounded-lg bg-navy-900 p-0.5"
                    >
                      <button
                        type="button"
                        role="tab"
                        aria-selected={visualMode === "poster"}
                        onClick={() => setVisualMode("poster")}
                        className={`rounded-md px-3 py-1 text-xs font-semibold transition-colors ${visualMode === "poster"
                            ? "bg-gold-500 text-navy-950"
                            : "text-slate-300 hover:text-white"
                          }`}
                      >
                        Campaign Poster
                      </button>
                      <button
                        type="button"
                        role="tab"
                        aria-selected={visualMode === "portrait"}
                        onClick={() => setVisualMode("portrait")}
                        className={`rounded-md px-3 py-1 text-xs font-semibold transition-colors ${visualMode === "portrait"
                            ? "bg-gold-500 text-navy-950"
                            : "text-slate-300 hover:text-white"
                          }`}
                      >
                        Portrait
                      </button>
                    </div>

                    {visualMode === "poster" && (
                      <a
                        href="/images/Godson Azubuike_ Vote for SRC President.png"
                        download="Godson-Azubuike-SRC-President.png"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-gold-400 transition-colors hover:text-gold-300"
                      >
                        <Download className="h-3.5 w-3.5" aria-hidden="true" />
                        Save
                      </a>
                    )}
                  </div>

                  {/* Visual stage */}
                  <div className="relative aspect-[4/5] w-full bg-[#111214]">
                    <AnimatePresence mode="wait">
                      {visualMode === "portrait" ? (
                        <motion.div
                          key="portrait"
                          initial={shouldReduceMotion ? false : { opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={shouldReduceMotion ? undefined : { opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="relative h-full w-full"
                        >
                          <Image
                            src={candidate.portrait.src}
                            alt={candidate.portrait.alt}
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            className="object-cover object-top"
                          />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="poster"
                          initial={shouldReduceMotion ? false : { opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={shouldReduceMotion ? undefined : { opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="relative h-full w-full"
                        >
                          <Image
                            src="/images/Godson Azubuike_ Vote for SRC President.png"
                            alt="Official campaign poster: Vote Godson Azubuike for SRC President at African Leadership University"
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            className="object-contain p-1"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="border-t border-gold-500/25 bg-navy-950/95 px-5 py-3.5 text-white">
                    <p className="text-sm font-semibold text-white">
                      {candidate.fullName}
                    </p>
                    <p className="text-xs text-slate-300">
                      {candidate.position} &bull; {candidate.university}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
