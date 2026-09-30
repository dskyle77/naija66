"use client";

import { END, START, type Moment } from "@/lib/timeline";

type Props = {
  moments: Moment[];
  index: number;
  onChange: (i: number) => void;
};

export function TimelineScrubber({ moments, index, onChange }: Props) {
  const pct = (y: number) => ((y - START) / (END - START)) * 100;

  return (
    <div className="container">
      <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 sm:hidden">
        {moments.map((m, i) => {
          const active = i === index;
          return (
            <button
              key={m.year}
              type="button"
              onClick={() => onChange(i)}
              aria-label={`${m.year}: ${m.title}`}
              aria-current={active}
              className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                active
                  ? "bg-primary text-inverse"
                  : "border border-border bg-surface text-muted hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {m.year}
            </button>
          );
        })}
      </div>

      <div className="relative hidden h-20 sm:block">
        <div className="absolute inset-x-0 top-6 h-px bg-border-strong" />
        <div
          className="absolute left-0 top-6 h-px bg-primary transition-[width] duration-500"
          style={{ width: `${pct(moments[index].year)}%` }}
        />

        {moments.map((m, i) => {
          const active = i === index;
          const passed = i < index;
          return (
            <button
              key={m.year}
              type="button"
              onClick={() => onChange(i)}
              aria-label={`${m.year}: ${m.title}`}
              aria-current={active}
              style={{ left: `${pct(m.year)}%` }}
              className="group absolute top-6 -translate-x-1/2 -translate-y-1/2"
            >
              <span
                className={`block rounded-full border-2 transition-all duration-300 ${
                  active
                    ? "animate-pulse-ring size-5 border-primary bg-primary"
                    : passed
                      ? "size-3.5 border-primary bg-primary group-hover:scale-125"
                      : "size-3.5 border-border-strong bg-background group-hover:scale-125 group-hover:border-primary"
                }`}
              />
              <span
                className={`absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap text-xs font-medium transition-colors ${
                  active ? "text-primary" : "text-muted"
                }`}
              >
                {m.year}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
