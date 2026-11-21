import { MapPin, Cpu, Check, RefreshCw } from "lucide-react";
import { CANDIDATE_STORY } from "@/lib/story";
import { Reveal } from "@/components/MotionPrimitives";

export function GeancoSection() {
  const { geanco } = CANDIDATE_STORY;

  return (
    <section
      id="geanco"
      className="border-b border-navy-800 bg-navy-900 bg-navy-mesh py-20 text-white sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left column: Story & Four Locations */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-400">
                Taking Technology to Communities
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                GEANCO Foundation: Taking Technology to Young Girls
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-200 sm:text-lg">
                {geanco.intro}
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-7">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold-400">
                  Month-Long STEM Outreach Across Four Nigerian Locations
                </p>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {geanco.locations.map((city) => (
                    <div
                      key={city}
                      className="flex items-center gap-2.5 rounded-lg border border-navy-700 bg-navy-800/75 px-4 py-3 text-sm font-semibold text-white"
                    >
                      <MapPin
                        className="h-4 w-4 shrink-0 text-gold-400"
                        aria-hidden="true"
                      />
                      <span>{city}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-7 border-l-2 border-gold-500 pl-4 font-serif text-lg italic leading-relaxed text-slate-200">
                &ldquo;{geanco.reflection}&rdquo;
              </p>
            </Reveal>
          </div>

          {/* Right column: Hands-on IoT/Robotics + Helper Robot Handover */}
          <div className="space-y-6 lg:col-span-7">
            <Reveal delay={0.08}>
              <div className="rounded-2xl border border-navy-700 bg-navy-800/65 p-6 sm:p-8">
                <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.14em] text-gold-400">
                  <Cpu className="h-4 w-4" aria-hidden="true" />
                  <span>Hands-On IoT, Robotics &amp; Mentorship Sessions</span>
                </div>
                <ul className="mt-5 space-y-3.5">
                  {geanco.activities.map((activity) => (
                    <li
                      key={activity}
                      className="flex items-start gap-3 text-sm leading-relaxed text-slate-100 sm:text-base"
                    >
                      <Check
                        className="mt-1 h-4 w-4 shrink-0 text-gold-400"
                        aria-hidden="true"
                      />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="rounded-2xl border border-gold-500/35 bg-navy-950/80 p-6 sm:p-8">
                <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.14em] text-gold-400">
                  <RefreshCw className="h-4 w-4" aria-hidden="true" />
                  <span>Continuity in Practice</span>
                </div>
                <h3 className="mt-2.5 text-xl font-bold text-white">
                  {geanco.helperRobot.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
                  {geanco.helperRobot.body}
                </p>
                <p className="mt-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-xs leading-relaxed text-slate-300 sm:text-sm">
                  {geanco.helperRobot.note}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
