/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import TransitionLink from "./TransitionLink";

const navItems = [
  { label: "Intro", href: "/" },
  { label: "Timeline", href: "/explore" },
  { label: "Map", href: "/explore/map" },
  { label: "Quiz", href: "/explore/quiz" },
  { label: "About", href: "/about" },
] as const;

const DAY_MS = 86_400_000;

function useIndependence() {
  const [info, setInfo] = useState<{
    days: number;
    today: boolean;
    years: number;
  } | null>(null);

  useEffect(() => {
    const now = new Date();

    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();

    const todayUtc = Date.UTC(year, month, date);
    const independenceUtc = Date.UTC(1960, 9, 1);

    setInfo({
      days: Math.floor((todayUtc - independenceUtc) / DAY_MS),
      today: month === 9 && date === 1,
      years: year - 1960,
    });
  }, []);

  return info;
}
const flagStripe =
  "bg-[linear-gradient(90deg,#008751_33.33%,#ffffff_33.33%_66.66%,#008751_66.66%)]";

export default function Navigation() {
  const pathname = usePathname();
  const info = useIndependence();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/explore") return pathname === "/explore";
    return pathname.startsWith(href);
  };

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-border bg-background/80 shadow-sm backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      {/* Independence banner — collapses when solid */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          solid ? "grid-rows-[0fr] opacity-0" : "grid-rows-[1fr] opacity-100"
        }`}
      >
        <div className="overflow-hidden">
          <div
            className={`relative flex h-8 items-center justify-center px-3 ${flagStripe}`}
          >
            {/* readable chip over the flag */}
            <span className="relative z-10 inline-flex max-w-full items-center gap-2 truncate rounded-full bg-background/90 px-3 py-0.5 text-xs font-medium tracking-wide text-primary shadow-sm backdrop-blur-sm">
              <span className="relative flex size-2 shrink-0">
                <span className="absolute inset-0 inline-flex animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>

              <span suppressHydrationWarning className="truncate">
                {info
                  ? info.today
                    ? `Happy Independence Day · ${info.years} years`
                    : `${info.days.toLocaleString()} days since 1 October 1960`
                  : "Independence · 1 October 1960"}
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <TransitionLink
          href="/"
          variant="ghost"
          className="group flex items-center gap-3 focus:outline-none"
        >
          <div className="flex h-8 w-11 overflow-hidden rounded-md border border-border-strong shadow-sm transition-transform duration-300 group-hover:scale-105">
            <span className="w-1/3 bg-[#008751]" />
            <span className="w-1/3 bg-white" />
            <span className="w-1/3 bg-[#008751]" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Naija<span className="text-primary">66</span>
          </span>
        </TransitionLink>

        <div className="flex items-center gap-3">
          {/* Desktop pills */}
          <div className="hidden items-center gap-0.5 rounded-full border border-border/60 bg-surface/60 p-1 shadow-sm backdrop-blur-xl md:flex">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <TransitionLink
                  key={item.href}
                  href={item.href}
                  variant="ghost"
                  className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-200 ${
                    active
                      ? "bg-primary text-inverse shadow-sm"
                      : "text-foreground/80 hover:bg-surface-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                </TransitionLink>
              );
            })}
          </div>

          {/* Menu toggle — mobile only */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="nav-menu"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full border border-border bg-surface/70 text-foreground backdrop-blur-xl md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="nav-menu"
          className="animate-fade-in absolute inset-x-0 top-full z-50"
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-background/40 backdrop-blur-sm"
          />

          {/* Panel */}
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
            <div className="ml-auto w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-background shadow-xl">
              <ul className="stagger flex flex-col p-2">
                {navItems.map((item, i) => {
                  const active = isActive(item.href);
                  return (
                    <li
                      key={item.href}
                      className="animate-fade-up"
                      style={{ animationDelay: `${i * 50}ms` }}
                    >
                      <TransitionLink
                        href={item.href}
                        variant="ghost"
                        className={`flex items-center justify-between rounded-xl px-4 py-3.5 transition-colors ${
                          active
                            ? "bg-primary-light text-primary"
                            : "text-foreground hover:bg-surface-muted"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-xs font-medium text-muted">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="text-lg font-semibold tracking-tight">
                            {item.label}
                          </span>
                        </div>
                        {active ? (
                          <span className="size-2 rounded-full bg-primary" />
                        ) : (
                          <span className="text-muted">→</span>
                        )}
                      </TransitionLink>
                    </li>
                  );
                })}
              </ul>

              <div className="border-t border-border p-3">
                <TransitionLink
                  href="/explore"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-bold text-inverse transition-transform hover:-translate-y-0.5"
                >
                  Explore Now ↗
                </TransitionLink>
              </div>

              <div className={`h-1 w-full ${flagStripe}`} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
