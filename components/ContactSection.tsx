import type { ComponentType } from "react";
import { Mail, MessageCircle, ExternalLink } from "lucide-react";
import { CAMPAIGN_CONFIG, type ContactChannel } from "@/lib/campaign";
import { Reveal } from "@/components/MotionPrimitives";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const CHANNEL_ICONS: Record<
  ContactChannel["id"],
  ComponentType<{ className?: string }>
> = {
  email: Mail,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
  community: MessageCircle,
};

export function ContactSection() {
  const { contactChannels } = CAMPAIGN_CONFIG;

  return (
    <section
      id="contact"
      className="border-b border-slate-200 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-700">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Have Something to Share?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Reach out with questions, student concerns, suggestions, or ideas
              through any official campaign channel below.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactChannels.map((channel, index) => {
            const Icon = CHANNEL_ICONS[channel.id];
            return (
              <Reveal key={channel.id} delay={index * 0.06}>
                <div className="flex h-full flex-col justify-between rounded-xl border border-slate-200 bg-slate-surface/50 p-6 transition-colors hover:border-navy-900/25 hover:bg-white">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-navy-900">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      {!channel.configured && (
                        <span className="rounded-full border border-slate-300 bg-white px-2.5 py-0.5 text-[11px] font-semibold text-slate-600">
                          Placeholder
                        </span>
                      )}
                    </div>
                    <h3 className="mt-5 text-base font-bold text-navy-900">
                      {channel.label}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                      {channel.description}
                    </p>
                  </div>

                  <div className="mt-5 border-t border-slate-200/80 pt-4">
                    {channel.configured && channel.href ? (
                      <a
                        href={channel.href}
                        target={
                          channel.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          channel.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 underline decoration-gold-500/60 underline-offset-4 hover:text-navy-700"
                      >
                        {channel.value}
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    ) : (
                      <p className="text-xs font-medium text-slate-500">
                        {channel.value}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
