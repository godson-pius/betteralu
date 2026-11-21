import { ArrowRight } from "lucide-react";
import { CANDIDATE_STORY } from "@/lib/story";
import { Reveal } from "@/components/MotionPrimitives";

export function ReadinessSection() {
  const { readinessRows, readinessQuote } = CANDIDATE_STORY;

  return (
    <section
      id="readiness"
      className="border-b border-slate-200 bg-ivory-ambient py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-700">
              My Experience, My Readiness
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              How These Experiences Prepare Me to Serve ALU
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <blockquote className="mt-8 rounded-2xl border-l-4 border-gold-500 bg-navy-900 bg-navy-mesh p-6 text-white shadow-md sm:p-8">
            <p className="font-serif text-xl leading-relaxed text-white sm:text-2xl">
              &ldquo;{readinessQuote}&rdquo;
            </p>
            <footer className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-gold-400">
              Godson Azubuike &mdash; Candidate for SRC President
            </footer>
          </blockquote>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {readinessRows.map((row, index) => (
            <Reveal key={row.experience} delay={index * 0.04}>
              <div className="flex h-full flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-2xs transition-colors hover:border-navy-900/30">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                    Experience
                  </p>
                  <p className="mt-1 text-base font-bold text-navy-900">
                    {row.experience}
                  </p>
                </div>
                <div className="mt-4 flex items-start gap-2 border-t border-slate-100 pt-3.5">
                  <ArrowRight
                    className="mt-0.5 h-4 w-4 shrink-0 text-gold-700"
                    aria-hidden="true"
                  />
                  <p className="text-sm font-medium text-slate-700">
                    {row.lesson}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
