import { CheckCircle2 } from "lucide-react";
import { CAMPAIGN_CONFIG } from "@/lib/campaign";
import { Reveal } from "@/components/MotionPrimitives";

export function AboutSection() {
  const { about, messaging } = CAMPAIGN_CONFIG;

  return (
    <section id="about" className="border-b border-slate-200 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-700">
                About Me
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
                {about.heading}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-700 sm:text-lg">
                {about.intro}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                {messaging.coreBeliefs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.08}>
              <blockquote className="rounded-xl border border-slate-200 bg-ivory p-6 sm:p-8">
                <p className="font-serif text-xl leading-relaxed text-navy-900 sm:text-2xl">
                  &ldquo;{about.philosophyQuote}&rdquo;
                </p>
                <footer className="mt-4 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="h-0.5 w-8 bg-gold-500"
                  />
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
                    Godson Azubuike &mdash; Leadership Philosophy
                  </span>
                </footer>
              </blockquote>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-8">
                <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-navy-900">
                  Relevant Experience &amp; Grounding
                </h3>
                <ul className="mt-4 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
                  {about.experiences.map((exp) => (
                    <li
                      key={exp.title}
                      className="flex items-start gap-3.5 p-4 sm:p-5"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 shrink-0 text-gold-700"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="text-sm font-semibold text-navy-900 sm:text-base">
                          {exp.title}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-slate-600">
                          {exp.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

