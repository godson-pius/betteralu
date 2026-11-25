import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Check, BookOpen } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/MotionPrimitives";
import { CAMPAIGN_CONFIG } from "@/lib/campaign";

export const metadata: Metadata = {
  title: "My Manifesto",
  description:
    "Read the full 9-point SRC Presidential Manifesto of Godson Azubuike at African Leadership University. Listen. Represent. Act. Election Day: 27 November 2026.",
  alternates: {
    canonical: "/manifesto",
  },
  openGraph: {
    title: "My Manifesto | Godson Azubuike for SRC President — ALU",
    description:
      "Together, We Make ALU Better. Read all 9 manifesto pillars, leadership approach, and first priorities if elected.",
    url: "/manifesto",
    type: "article",
  },
};

export default function ManifestoPage() {
  const { candidate, messaging, manifesto } = CAMPAIGN_CONFIG;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Editorial Manifesto Header */}
        <section className="border-b border-navy-800 bg-navy-900 bg-navy-mesh py-16 text-white sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-gold-400 transition-colors hover:text-gold-300"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              Back to Campaign Home
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-navy-900/90 px-3.5 py-1 text-xs font-semibold tracking-wide text-gold-400">
                <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                Official Campaign Manifesto
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-xs font-medium text-slate-200">
                <Calendar className="h-3.5 w-3.5 text-gold-400" aria-hidden="true" />
                Election Day | {candidate.electionDate}
              </span>
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-gold-400">
              {candidate.fullName} &bull; {candidate.position},{" "}
              {candidate.university}
            </p>

            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              {messaging.slogan}
            </h1>

            <p className="mt-3 font-serif text-xl italic text-gold-400 sm:text-2xl">
              {manifesto.subtitle}
            </p>

            <div className="mt-8 space-y-4 border-t border-white/15 pt-8 text-base leading-relaxed text-slate-200 sm:text-lg">
              {manifesto.opening.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Quick-Jump Index */}
        <section className="border-b border-slate-200 bg-ivory-ambient py-10">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-700">
              Manifesto Contents
            </p>
            <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {manifesto.pillars.map((pillar) => (
                <a
                  key={pillar.id}
                  href={`#${pillar.id}`}
                  className="flex items-start gap-2.5 rounded-lg border border-slate-200 bg-white p-3 text-xs font-semibold text-navy-900 transition-colors hover:border-navy-900/40 hover:bg-slate-50"
                >
                  <span className="shrink-0 font-bold text-gold-700">
                    {pillar.number}.
                  </span>
                  <span className="leading-snug">{pillar.title}</span>
                </a>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap gap-2.5">
              <a
                href="#way-i-lead"
                className="rounded-md border border-navy-900/15 bg-white px-3 py-1.5 text-xs font-semibold text-navy-900 hover:bg-slate-50"
              >
                The Way I Will Lead
              </a>
              <a
                href="#first-priorities"
                className="rounded-md border border-navy-900/15 bg-white px-3 py-1.5 text-xs font-semibold text-navy-900 hover:bg-slate-50"
              >
                My First Priorities If Elected
              </a>
              <a
                href="#commitment"
                className="rounded-md border border-navy-900/15 bg-white px-3 py-1.5 text-xs font-semibold text-navy-900 hover:bg-slate-50"
              >
                My Commitment To You
              </a>
            </div>
          </div>
        </section>

        {/* 8 Manifesto Pillars */}
        <section className="border-b border-slate-200 bg-white bg-editorial-grid py-16 sm:py-20">
          <div className="mx-auto max-w-5xl space-y-10 px-4 sm:px-6 lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-700">
                My Manifesto
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
                Nine Practical Commitments for ALU
              </h2>
            </div>

            {manifesto.pillars.map((pillar) => (
              <Reveal key={pillar.id}>
                <article
                  id={pillar.id}
                  className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8 lg:p-10"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-navy-900 text-xs font-bold text-gold-400">
                      {pillar.number}
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight text-navy-900">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-base leading-relaxed text-slate-700">
                    {pillar.intro}
                  </p>

                  <p className="mt-5 text-sm font-bold uppercase tracking-[0.08em] text-navy-900">
                    {pillar.leadIn}
                  </p>

                  <ul className="mt-3.5 space-y-3">
                    {pillar.bullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm leading-relaxed text-slate-700 sm:text-base"
                      >
                        <Check
                          className="mt-1 h-4 w-4 shrink-0 text-gold-700"
                          aria-hidden="true"
                        />
                        <span>
                          {"lead" in bullet && bullet.lead ? (
                            <>
                              <strong className="font-semibold text-navy-900">
                                {bullet.lead}
                              </strong>{" "}
                              {bullet.text}
                            </>
                          ) : (
                            bullet.text
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {"extraParagraphs" in pillar &&
                    pillar.extraParagraphs?.map((para) => (
                      <p
                        key={para}
                        className="mt-5 text-sm leading-relaxed text-slate-700 sm:text-base"
                      >
                        {para}
                      </p>
                    ))}

                  <div className="mt-6 rounded-lg border border-slate-200 bg-ivory px-4 py-3.5 text-sm font-medium leading-relaxed text-navy-900">
                    {pillar.closingNote}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* The Way I Will Lead */}
        <section
          id="way-i-lead"
          className="scroll-mt-20 border-b border-navy-800 bg-navy-900 bg-navy-mesh py-16 text-white sm:py-20"
        >
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-400">
                Leadership Approach
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {manifesto.wayILead.heading}
              </h2>
              <p className="mt-2 font-serif text-xl italic text-gold-400">
                {manifesto.wayILead.subheading}
              </p>
            </Reveal>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {manifesto.wayILead.pillars.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.07}>
                  <div className="flex h-full flex-col rounded-xl border border-navy-700 bg-navy-800/60 p-6">
                    <span className="text-xs font-bold tracking-[0.14em] text-gold-400">
                      0{index + 1}
                    </span>
                    <h3 className="mt-2 text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.14}>
              <div className="mt-8 space-y-4 rounded-xl border border-white/10 bg-navy-950/60 p-6 text-sm leading-relaxed text-slate-200 sm:p-8 sm:text-base">
                {manifesto.wayILead.notes.map((note) => (
                  <p key={note}>{note}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* My First Priorities If Elected */}
        <section
          id="first-priorities"
          className="scroll-mt-20 border-b border-slate-200 bg-ivory-ambient py-16 sm:py-20"
        >
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-700">
                Immediate Action Plan
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
                {manifesto.firstPriorities.heading}
              </h2>
              <p className="mt-3 text-base text-slate-700 sm:text-lg">
                {manifesto.firstPriorities.intro}
              </p>
            </Reveal>

            <ol className="mt-8 space-y-4">
              {manifesto.firstPriorities.steps.map((step, index) => (
                <Reveal key={step.number} delay={index * 0.05}>
                  <li className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-2xs sm:p-6">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-900 text-xs font-bold text-gold-400">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-navy-900 sm:text-lg">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600 sm:text-base">
                        {step.description}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* My Commitment To You */}
        <section id="commitment" className="scroll-mt-20 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="rounded-2xl border border-navy-900/15 bg-ivory p-8 shadow-sm sm:p-12">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-700">
                  Closing Statement
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
                  {manifesto.commitment.heading}
                </h2>

                <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                  {manifesto.commitment.paragraphs.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>

                <div className="mt-8 border-t border-slate-200 pt-6">
                  <p className="text-lg font-extrabold tracking-wide text-navy-900">
                    {messaging.slogan}
                  </p>
                  <p className="mt-2 text-sm font-bold text-navy-900">
                    {candidate.fullName}
                  </p>
                  <p className="text-xs text-slate-600">
                    {candidate.position} | {candidate.university}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/#get-involved"
                    className="inline-flex items-center gap-2 rounded-md bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
                  >
                    Share a Concern or Join Campaign
                    <ArrowRight
                      className="h-4 w-4 text-gold-400"
                      aria-hidden="true"
                    />
                  </Link>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-md border border-navy-900/20 bg-white px-5 py-3 text-sm font-semibold text-navy-900 transition-colors hover:bg-slate-50"
                  >
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                    Back to Home
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
