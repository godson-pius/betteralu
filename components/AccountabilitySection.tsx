import { CAMPAIGN_CONFIG } from "@/lib/campaign";
import { Reveal } from "@/components/MotionPrimitives";

export function AccountabilitySection() {
  const { accountability } = CAMPAIGN_CONFIG;

  return (
    <section
      id="accountability"
      className="border-b border-navy-800 bg-navy-950 py-20 text-white sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-400">
              Accountability Framework
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {accountability.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              {accountability.subheading}
            </p>
          </div>
        </Reveal>

        <ol className="relative mt-12 grid gap-6 md:grid-cols-5">
          {accountability.steps.map((item, index) => (
            <Reveal key={item.step} delay={index * 0.07}>
              <li className="relative flex h-full flex-col rounded-xl border border-navy-800 bg-navy-900/80 p-6 transition-colors hover:border-gold-500/50">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold-500/40 bg-navy-950 text-xs font-bold text-gold-400">
                    {item.step}
                  </span>
                  {index < accountability.steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="hidden h-px flex-1 bg-navy-700 md:ml-3 md:block"
                    />
                  )}
                </div>
                <h3 className="mt-5 text-base font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                  {item.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

