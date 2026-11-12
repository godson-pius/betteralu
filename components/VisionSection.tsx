import { Ear, MessageSquareQuote, ArrowUpRight } from "lucide-react";
import { CAMPAIGN_CONFIG } from "@/lib/campaign";
import { Reveal } from "@/components/MotionPrimitives";

const PRINCIPLE_ICONS = {
  "01": Ear,
  "02": MessageSquareQuote,
  "03": ArrowUpRight,
} as const;

export function VisionSection() {
  const { vision } = CAMPAIGN_CONFIG;

  return (
    <section
      id="vision"
      className="border-b border-navy-800 bg-navy-900 py-20 text-white sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-400">
              My Vision
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {vision.heading}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-200 sm:text-xl">
              {vision.statement}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {vision.principles.map((principle, index) => {
            const Icon =
              PRINCIPLE_ICONS[
                principle.number as keyof typeof PRINCIPLE_ICONS
              ];
            return (
              <Reveal key={principle.number} delay={index * 0.08}>
                <article className="group flex h-full flex-col justify-between rounded-xl border border-navy-700 bg-navy-800/60 p-7 transition-colors duration-200 hover:border-gold-500/60 hover:bg-navy-800">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold tracking-[0.16em] text-gold-400">
                        {principle.number}
                      </span>
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-navy-700 bg-navy-900 text-gold-400 transition-colors group-hover:border-gold-500/40">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-bold tracking-wide text-white">
                      {principle.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                      {principle.description}
                    </p>
                  </div>
                  <div
                    aria-hidden="true"
                    className="mt-8 h-0.5 w-10 bg-gold-500/50 transition-all duration-200 group-hover:w-16 group-hover:bg-gold-400"
                  />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

