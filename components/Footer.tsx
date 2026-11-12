import { CAMPAIGN_CONFIG } from "@/lib/campaign";

export function Footer() {
  const { candidate, messaging, navigation, contactChannels } = CAMPAIGN_CONFIG;
  const configuredSocials = contactChannels.filter(
    (channel) => channel.configured && channel.href
  );

  return (
    <footer className="bg-navy-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:justify-between">
          <div className="lg:col-span-6">
            <p className="text-lg font-extrabold tracking-wide text-white sm:text-xl">
              {candidate.fullName.toUpperCase()}
            </p>
            <p className="mt-1 text-sm font-medium text-slate-300">
              {candidate.position} | {candidate.university}
            </p>
            <p className="mt-5 text-base font-bold tracking-wide text-gold-400">
              {messaging.slogan}
            </p>
            <p className="mt-1 font-serif text-base italic text-slate-300">
              &ldquo;{messaging.supportingStatement}&rdquo;
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-6 lg:justify-items-end">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-gold-400">
                Campaign Sections
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="transition-colors hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-gold-400">
                Campaign Channels
              </h2>
              {configuredSocials.length > 0 ? (
                <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
                  {configuredSocials.map((channel) => (
                    <li key={channel.id}>
                      <a
                        href={channel.href!}
                        target={
                          channel.href!.startsWith("http")
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          channel.href!.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="transition-colors hover:text-white"
                      >
                        {channel.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 max-w-xs text-xs leading-relaxed text-slate-400">
                  Official social and email links can be enabled in{" "}
                  <code className="rounded bg-navy-900 px-1.5 py-0.5 text-slate-200">
                    lib/campaign.ts
                  </code>
                  .
                </p>
              )}
              <p className="mt-5 text-xs font-semibold text-slate-300">
                Election Day: {candidate.electionDate}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-navy-800 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; 2026 {candidate.fullName} SRC Presidential Campaign.
          </p>
          <p>African Leadership University Student Representative Council Election</p>
        </div>
      </div>
    </footer>
  );
}

