import { Layers, Wrench } from "lucide-react";
import { CANDIDATE_STORY, type VentureItem } from "@/lib/story";
import { Reveal } from "@/components/MotionPrimitives";

const STATUS_STYLES: Record<VentureItem["statusTone"], string> = {
  active: "border-emerald-200 bg-emerald-50 text-emerald-900",
  hackathon: "border-amber-200 bg-amber-50 text-amber-950",
  progress: "border-sky-200 bg-sky-50 text-sky-900",
  exploring: "border-slate-200 bg-slate-100 text-slate-700",
};

export function VenturesSection() {
  const { ventures, technicalSummary } = CANDIDATE_STORY;

  return (
    <section
      id="ventures"
      className="border-b border-slate-200 bg-white bg-editorial-grid py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-700">
                Building Solutions
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
                Entrepreneurship, Innovation &amp; Problem-Solving
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                Starting initiatives from scratch has taught me how to identify
                real problems, work with teams, manage uncertainty, take
                responsibility and keep building—not just talk about ideas.
              </p>
            </div>
            <p className="max-w-sm rounded-lg border border-slate-200 bg-ivory px-4 py-3 text-xs leading-relaxed text-slate-600">
              Each initiative below is clearly labelled to distinguish founded
              ventures, hackathon prototypes, ongoing builds and early
              explorations.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ventures.map((venture, index) => (
            <Reveal key={venture.id} delay={index * 0.05}>
              <article className="flex h-full flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-navy-900/25 hover:shadow-sm">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-gold-400">
                      <Layers className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${STATUS_STYLES[venture.statusTone]}`}
                    >
                      {venture.status}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-navy-900">
                    {venture.name}
                  </h3>
                  <p className="mt-0.5 text-xs font-semibold text-gold-700">
                    {venture.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {venture.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Concise technical problem-solving grounding (not a developer CV) */}
        <Reveal delay={0.14}>
          <div className="mt-10 rounded-xl border border-slate-200 bg-ivory p-6 sm:p-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-gold-400">
                <Wrench className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-base font-bold text-navy-900">
                  {technicalSummary.years}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-700">
                  {technicalSummary.description}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
