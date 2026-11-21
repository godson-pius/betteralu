import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { CAMPAIGN_CONFIG } from "@/lib/campaign";
import { CANDIDATE_STORY } from "@/lib/story";
import { Reveal } from "@/components/MotionPrimitives";

export function ClosingMessageSection() {
  const { candidate, messaging } = CAMPAIGN_CONFIG;
  const { closingMessage } = CANDIDATE_STORY;

  return (
    <section className="border-b border-navy-800 bg-navy-900 bg-navy-mesh py-20 text-white sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-400">
            {closingMessage.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {closingMessage.heading}
          </h2>
          <p className="mt-6 font-serif text-xl leading-relaxed text-white sm:text-2xl">
            &ldquo;{closingMessage.centralMessage}&rdquo;
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
            {closingMessage.body}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#get-involved"
              className="inline-flex items-center gap-2 rounded-md bg-gold-500 px-6 py-3.5 text-sm font-bold text-navy-950 shadow-sm transition-colors hover:bg-gold-400 sm:text-base"
            >
              Share Your Voice or Join Us
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link
              href="/manifesto"
              className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-gold-400 hover:bg-white/15 sm:text-base"
            >
              <BookOpen className="h-4 w-4 text-gold-400" aria-hidden="true" />
              Read Full 9-Point Manifesto
            </Link>
          </div>

          <div className="mt-10 border-t border-white/15 pt-6">
            <p className="text-base font-extrabold tracking-wide text-gold-400">
              {messaging.slogan}
            </p>
            <p className="mt-1 text-sm font-semibold text-white">
              {candidate.fullName} &mdash; {candidate.position},{" "}
              {candidate.university}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
