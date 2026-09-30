"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { moments } from "@/lib/timeline";
import { TimelineScrubber } from "./TimelineScrubber";
import TransitionLink from "../TransitionLink";

export function Journey() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<"next" | "prev">("next");
  const current = moments[index];

  const go = useCallback(
    (i: number) => {
      const next = Math.max(0, Math.min(moments.length - 1, i));
      if (next === index) return;
      setDir(next > index ? "next" : "prev");
      setIndex(next);
    },
    [index],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(index + 1);
      if (e.key === "ArrowLeft") go(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, go]);

  const isFirst = index === 0;
  const isLast = index === moments.length - 1;

  return (
    <div className="flex min-h-[calc(100dvh-8rem)] flex-col">
      {/* ── Middle: story + image ── */}
      <div className="container flex flex-1 flex-col justify-center py-8">
        <article
          key={current.year}
          className={`grid items-center gap-8 md:grid-cols-2 md:gap-12 ${
            dir === "next" ? "animate-slide-next" : "animate-slide-prev"
          }`}
        >
          {/* Story */}
          <div className="flex flex-col gap-3">
            <span className="w-fit rounded-full bg-primary-light px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary-dark">
              {current.tag}
            </span>

            <h2 className="text-5xl font-bold text-primary md:text-6xl">
              {current.year}
            </h2>
            <h3 className="text-2xl md:text-3xl">{current.title}</h3>

            {current.date && (
              <p className="font-mono text-sm uppercase text-muted">
                {current.date}
              </p>
            )}

            <p className="max-w-md text-base text-foreground/90 md:text-lg">
              {current.summary}
            </p>

            {/* Happenings */}
            <ul className="mt-2 space-y-2">
              {current.happenings.slice(0, 3).map((h) => (
                <li key={h.text} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 shrink-0 rounded-full bg-surface-muted px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider">
                    {h.category}
                  </span>
                  <span className="text-foreground/80">{h.text}</span>
                </li>
              ))}
            </ul>

            {/* Prev / Next */}
            <div className="mt-4 flex items-center gap-2">
              <button
                type="button"
                onClick={() => go(index - 1)}
                disabled={isFirst}
                aria-label="Previous moment"
                className={`inline-flex h-11 items-center gap-2 rounded-full border border-border bg-surface text-foreground transition-all hover:bg-surface-muted disabled:pointer-events-none disabled:opacity-40 ${
                  isLast ? "px-5" : "size-11 justify-center px-0"
                }`}
              >
                <ArrowLeft className="size-4 shrink-0" />
                {isLast && (
                  <span className="hidden text-sm font-semibold sm:inline">
                    Back
                  </span>
                )}
              </button>

              {isLast ? (
                <TransitionLink
                  href="/explore/map"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-inverse transition-all hover:bg-primary-hover"
                >
                  <span>Explore the map</span>
                  <ArrowRight className="size-4" />
                </TransitionLink>
              ) : (
                <button
                  type="button"
                  onClick={() => go(index + 1)}
                  aria-label="Next moment"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-inverse transition-all hover:bg-primary-hover"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ArrowRight className="size-4" />
                </button>
              )}

              <span className="ml-2 font-mono text-xs text-muted">
                {index + 1} / {moments.length}
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-primary-light shadow-lg">
            {current.image ? (
              <Image
                src={current.image}
                alt={current.title}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-primary-light via-surface to-primary/15">
                <div className="grid h-full place-items-center text-center">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-primary">
                      {current.tag}
                    </p>
                    <p className="mt-2 text-6xl font-bold text-primary md:text-7xl">
                      {current.year}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 flex h-2">
                  <span className="w-1/3 bg-[#008751]" />
                  <span className="w-1/3 bg-white" />
                  <span className="w-1/3 bg-[#008751]" />
                </div>
              </div>
            )}
          </div>
        </article>
      </div>

      {/* ── Bottom: timeline scrubber ── */}
      <div className="border-t border-border bg-background/80 pb-6 pt-4 backdrop-blur">
        <TimelineScrubber moments={moments} index={index} onChange={go} />
      </div>
    </div>
  );
}
