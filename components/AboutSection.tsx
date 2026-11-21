import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { CAMPAIGN_CONFIG } from "@/lib/campaign";
import { CANDIDATE_STORY } from "@/lib/story";
import { Reveal } from "@/components/MotionPrimitives";

export function AboutSection() {
  const { about, candidate, messaging } = CAMPAIGN_CONFIG;
  const { education, journeyTimeline } = CANDIDATE_STORY;

  return (
    <section
      id="about"
      className="border-b border-slate-200 bg-white bg-editorial-grid py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Part 1: Meet Godson */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-700">
                Meet Godson
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
                {about.heading}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-700 sm:text-lg">
                {about.intro}
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-navy-900 shadow-md">
                <div className="grid grid-cols-12 items-center">
                  <div className="relative col-span-5 aspect-square h-full w-full">
                    <Image
                      src={candidate.portrait.src}
                      alt={candidate.portrait.alt}
                      fill
                      sizes="(max-width: 1024px) 40vw, 18vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="col-span-7 p-4 text-white sm:p-5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-gold-400">
                      Current Role at ALU
                    </p>
                    <p className="mt-1 text-sm font-bold text-white sm:text-base">
                      CPS Course Representative
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-300">
                      BSc (Hons) Entrepreneurial Leadership &bull; Over 200
                      students trained &amp; mentored.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                {messaging.coreBeliefs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right column: Quote + Education + My Journey Timeline */}
          <div className="lg:col-span-7">
            <Reveal delay={0.08}>
              <blockquote className="rounded-xl border border-slate-200 bg-ivory p-6 sm:p-8">
                <p className="font-serif text-xl leading-relaxed text-navy-900 sm:text-2xl">
                  &ldquo;{about.philosophyQuote}&rdquo;
                </p>
                <footer className="mt-4 flex items-center gap-3">
                  <span aria-hidden="true" className="h-0.5 w-8 bg-gold-500" />
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
                    Godson Azubuike &mdash; Leadership Philosophy
                  </span>
                </footer>
              </blockquote>
            </Reveal>

            {/* Education & Personal Development */}
            <Reveal delay={0.12}>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {education.map((edu) => (
                  <div
                    key={edu.degree}
                    className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs"
                  >
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-gold-700">
                      <GraduationCap className="h-4 w-4" aria-hidden="true" />
                      <span>{edu.status}</span>
                    </div>
                    <h3 className="mt-2 text-sm font-bold text-navy-900 sm:text-base">
                      {edu.degree}
                    </h3>
                    <p className="mt-0.5 text-xs font-medium text-slate-500">
                      {edu.institution}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                      {edu.note}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Part 2: My Journey Visual Timeline */}
            <Reveal delay={0.16}>
              <div className="mt-10">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-700">
                  My Journey
                </p>
                <h3 className="mt-1.5 text-xl font-bold tracking-tight text-navy-900 sm:text-2xl">
                  Shaped by Years of Building, Teaching &amp; Serving
                </h3>

                <ol className="relative mt-6 space-y-5 border-l-2 border-navy-900/15 pl-6">
                  {journeyTimeline.map((item) => (
                    <li key={item.title} className="relative">
                      <span
                        aria-hidden="true"
                        className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-gold-500 ring-2 ring-navy-900/20"
                      />
                      <div className="rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-navy-900/25">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-bold uppercase tracking-[0.12em] text-navy-900">
                            {item.period}
                          </span>
                          <span className="rounded-full bg-ivory px-2.5 py-0.5 text-[11px] font-semibold text-gold-700">
                            {item.badge}
                          </span>
                        </div>
                        <h4 className="mt-2 text-sm font-bold text-navy-900 sm:text-base">
                          {item.title}
                        </h4>
                        <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                          {item.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
