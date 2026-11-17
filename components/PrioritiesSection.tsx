"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bus,
  Wifi,
  CalendarClock,
  MessageSquare,
  Check,
  Info,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { CAMPAIGN_CONFIG } from "@/lib/campaign";
import { Reveal } from "@/components/MotionPrimitives";

const PRIORITY_ICONS = {
  transportation: Bus,
  utilities: Wifi,
  academics: CalendarClock,
  "student-voice": MessageSquare,
} as const;

export function PrioritiesSection() {
  const { priorities, manifesto } = CAMPAIGN_CONFIG;
  const [selectedId, setSelectedId] = useState<string>(priorities.items[0].id);

  return (
    <section
      id="priorities"
      className="border-b border-slate-200 bg-ivory py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-700">
                Campaign Priorities
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
                {priorities.heading}
              </h2>
            </div>

            <div className="max-w-xl rounded-lg border border-navy-900/15 bg-white px-4 py-3 text-xs leading-relaxed text-slate-700 sm:text-sm">
              <div className="flex items-start gap-2.5">
                <Info
                  className="mt-0.5 h-4 w-4 shrink-0 text-navy-900"
                  aria-hidden="true"
                />
                <p>{priorities.disclaimer}</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Quick-focus filter bar */}
        <Reveal delay={0.06}>
          <div
            role="tablist"
            aria-label="Select a campaign priority to highlight"
            className="mt-10 flex flex-wrap gap-2"
          >
            {priorities.items.map((item) => {
              const isSelected = selectedId === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedId(item.id)}
                  className={`rounded-md px-4 py-2 text-xs font-semibold tracking-wide transition-colors sm:text-sm ${
                    isSelected
                      ? "bg-navy-900 text-white shadow-xs"
                      : "border border-slate-200 bg-white text-slate-700 hover:border-navy-900/30 hover:text-navy-900"
                  }`}
                >
                  {item.number}. {item.shortTitle}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Four priority cards - all readable, selected card subtly elevated */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {priorities.items.map((priority, index) => {
            const Icon =
              PRIORITY_ICONS[priority.id as keyof typeof PRIORITY_ICONS];
            const isHighlighted = selectedId === priority.id;

            return (
              <Reveal key={priority.id} delay={index * 0.06}>
                <article
                  onClick={() => setSelectedId(priority.id)}
                  className={`flex h-full cursor-pointer flex-col justify-between rounded-xl border bg-white p-6 transition-all duration-200 sm:p-8 ${
                    isHighlighted
                      ? "border-navy-900 shadow-md ring-1 ring-navy-900/10"
                      : "border-slate-200 hover:border-slate-300 hover:shadow-sm"
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold-700">
                          {priority.label}
                        </p>
                        <h3 className="mt-2 text-2xl font-bold tracking-tight text-navy-900">
                          {priority.headline}
                        </h3>
                      </div>
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                          isHighlighted
                            ? "border-navy-900 bg-navy-900 text-gold-400"
                            : "border-slate-200 bg-slate-50 text-navy-900"
                        }`}
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                      {priority.description}
                    </p>

                    <div className="mt-6 border-t border-slate-100 pt-5">
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                        Proposed Actions
                      </p>
                      <ul className="mt-3 space-y-2.5">
                        {priority.actions.map((action) => (
                          <li
                            key={action}
                            className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-700"
                          >
                            <Check
                              className="mt-0.5 h-4 w-4 shrink-0 text-gold-700"
                              aria-hidden="true"
                            />
                            <span>{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="text-xs font-medium text-slate-500">
                      {priority.scopeNote}
                    </span>
                    <span className="text-xs font-semibold text-navy-900">
                      Priority {priority.number}
                    </span>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Full Manifesto Read-More Callout */}
        <Reveal delay={0.12}>
          <div className="mt-10 rounded-2xl border border-navy-800 bg-navy-900 bg-navy-mesh p-6 text-white shadow-lg sm:p-8 lg:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-gold-400">
                  <BookOpen className="h-4 w-4" aria-hidden="true" />
                  <span>Complete 8-Point Manifesto</span>
                </div>
                <h3 className="mt-2.5 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Explore the Full Plan for a Stronger, More Accountable SRC
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
                  Read all 8 manifesto pillars in detail—including SRC
                  recognition &amp; continuity, accommodation information,
                  opportunities beyond the classroom, community engagement,
                  responsible financial planning, and my first 5 priorities if
                  elected.
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  href="/manifesto"
                  className="inline-flex items-center gap-2 rounded-md bg-gold-500 px-6 py-3.5 text-sm font-bold text-navy-950 shadow-sm transition-colors hover:bg-gold-400 sm:text-base"
                >
                  Read Full Manifesto
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="mt-6 grid gap-2.5 border-t border-navy-700 pt-6 sm:grid-cols-2 lg:grid-cols-4">
              {manifesto.pillars.map((pillar) => (
                <Link
                  key={pillar.id}
                  href={`/manifesto#${pillar.id}`}
                  className="group flex items-center gap-2.5 rounded-lg border border-navy-700 bg-navy-800/80 px-3.5 py-2.5 text-xs font-medium text-slate-100 transition-colors hover:border-gold-400 hover:bg-navy-800 hover:text-white"
                >
                  <span className="font-bold text-gold-400">
                    {pillar.number}
                  </span>
                  <span className="line-clamp-1">{pillar.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

