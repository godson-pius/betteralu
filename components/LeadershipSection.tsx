import { CAMPAIGN_CONFIG } from "@/lib/campaign";
import { Reveal } from "@/components/MotionPrimitives";

export function LeadershipSection() {
  const { leadership } = CAMPAIGN_CONFIG;

  return (
    <section
      id="leadership"
      className="border-b border-slate-200 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-700">
                How I Intend to Lead
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
                {leadership.heading}
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <blockquote className="mt-8 rounded-xl border-l-4 border-gold-500 bg-navy-900 p-6 text-white shadow-sm sm:p-8">
                <p className="font-serif text-xl leading-relaxed text-white sm:text-2xl">
                  &ldquo;{leadership.quote}&rdquo;
                </p>
                <footer className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-gold-400">
                  Godson Azubuike
                </footer>
              </blockquote>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {leadership.pillars.map((pillar, index) => (
                <Reveal key={pillar.title} delay={index * 0.05}>
                  <div className="flex h-full flex-col justify-between rounded-xl border border-slate-200 bg-slate-surface/60 p-6 transition-colors hover:border-navy-900/25 hover:bg-white">
                    <div>
                      <span className="text-xs font-bold tracking-[0.14em] text-gold-700">
                        0{index + 1}
                      </span>
                      <h3 className="mt-2 text-base font-bold text-navy-900 sm:text-lg">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

