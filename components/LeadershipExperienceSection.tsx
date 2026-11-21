import { CheckCircle2, Users, BookOpen, Mic, Music } from "lucide-react";
import { CANDIDATE_STORY } from "@/lib/story";
import { Reveal } from "@/components/MotionPrimitives";

const SERVICE_ICONS = [BookOpen, Mic, Music] as const;

export function LeadershipExperienceSection() {
  const { leadershipRoles, teachingAndService } = CANDIDATE_STORY;
  const featuredRole = leadershipRoles.find((r) => r.featured);
  const otherRoles = leadershipRoles.filter((r) => !r.featured);

  return (
    <section
      id="experience"
      className="border-b border-slate-200 bg-ivory-ambient py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-700">
              Leadership in Action
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Representing Students &amp; Serving Communities
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
              My commitment to representation did not start with this campaign.
              From serving classmates right now at ALU to coordinating youth and
              community programmes over several years, I have learned to listen
              first and follow through.
            </p>
          </div>
        </Reveal>

        {/* Prominent Current ALU Role */}
        {featuredRole && (
          <Reveal delay={0.06}>
            <article className="mt-10 rounded-2xl border-2 border-navy-900 bg-white p-6 shadow-md sm:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-navy-900 px-3 py-1 text-xs font-bold uppercase tracking-[0.1em] text-gold-400">
                      <Users className="h-3.5 w-3.5" aria-hidden="true" />
                      {featuredRole.status} &bull; ALU
                    </span>
                    <span className="rounded-full border border-slate-200 bg-ivory px-3 py-1 text-xs font-semibold text-slate-700">
                      {featuredRole.timeframe}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
                    {featuredRole.role}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-gold-700">
                    {featuredRole.organization}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">
                    {featuredRole.summary}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-ivory p-5 sm:p-6 lg:col-span-5">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-navy-900">
                    How This Connects to the SRC Presidency
                  </p>
                  <ul className="mt-3.5 space-y-2.5">
                    {featuredRole.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-700"
                      >
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-gold-700"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>
        )}

        {/* Previous Community & Youth Leadership Roles */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {otherRoles.map((role, index) => (
            <Reveal key={role.id} delay={index * 0.06}>
              <article className="flex h-full flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-2xs transition-colors hover:border-navy-900/25">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full border border-slate-200 bg-slate-surface px-2.5 py-0.5 text-[11px] font-semibold text-slate-700">
                      {role.status}
                    </span>
                    <span className="text-xs font-semibold text-gold-700">
                      {role.timeframe}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-navy-900">
                    {role.role}
                  </h3>
                  <p className="mt-0.5 text-xs font-medium text-slate-500">
                    {role.organization}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {role.summary}
                  </p>
                </div>

                <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                  {role.highlights.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-xs leading-relaxed text-slate-700"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-700"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Teaching, Public Speaking & Community Service */}
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {teachingAndService.map((item, idx) => {
            const Icon = SERVICE_ICONS[idx];
            return (
              <Reveal key={item.title} delay={idx * 0.06}>
                <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white/90 p-6">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-gold-400">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.12em] text-gold-700">
                      {item.label}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-bold text-navy-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
