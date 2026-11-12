"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { CAMPAIGN_CONFIG } from "@/lib/campaign";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
        scrolled
          ? "border-b border-slate-200/90 bg-white/95 backdrop-blur-md shadow-[0_1px_12px_rgba(10,25,47,0.05)]"
          : "border-b border-slate-200/60 bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="group flex items-center gap-3 focus-visible:rounded-md"
        >
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-md bg-navy-900 text-xs font-bold tracking-wider text-gold-400 transition-colors group-hover:bg-navy-800"
          >
            GA
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-navy-900 sm:text-base">
              GODSON AZUBUIKE
            </span>
            <span className="text-[11px] font-medium tracking-wide text-slate-600">
              ALU SRC PRESIDENTIAL CAMPAIGN
            </span>
          </div>
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {CAMPAIGN_CONFIG.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-navy-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#priorities"
            className="inline-flex items-center gap-2 rounded-md bg-navy-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
          >
            Explore My Manifesto
            <ArrowRight className="h-4 w-4 text-gold-400" aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation-menu"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-navy-900 transition-colors hover:bg-slate-100 lg:hidden"
        >
          {isOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {isOpen && (
        <div
          id="mobile-navigation-menu"
          className="border-t border-slate-200 bg-white px-4 pb-6 pt-4 shadow-lg lg:hidden"
        >
          <nav
            aria-label="Mobile navigation"
            className="flex flex-col space-y-1"
          >
            {CAMPAIGN_CONFIG.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-2.5 text-base font-medium text-slate-800 transition-colors hover:bg-slate-100 hover:text-navy-900"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 border-t border-slate-200 pt-4">
            <a
              href="#priorities"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-navy-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
            >
              Explore My Manifesto
              <ArrowRight className="h-4 w-4 text-gold-400" aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

