"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { NigeriaSvgMap } from "@/components/explore/NigeriaMap";
import { getStateById, nameToStateId, states } from "@/lib/states";

const sortedStates = [...states].sort((a, b) => a.name.localeCompare(b.name));

export default function MapClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [stateId, setStateId] = useState<string | null>(null);
  const [showLabels, setShowLabels] = useState(true);
  const selected = getStateById(stateId);
  const storyRef = useRef<HTMLElement>(null);
  const mapRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const fromUrl = searchParams.get("state");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (fromUrl) setStateId(fromUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function selectById(id: string) {
    setStateId(id);
    router.replace(`?state=${id}`, { scroll: false });

    // on small screens, nudge user to the story panel
    requestAnimationFrame(() => {
      storyRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function clearState() {
    setStateId(null);
    router.replace("/explore/map", { scroll: false });
  }

  return (
    <main className="container pb-24 pt-32">
      <header className="animate-fade-up mb-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Map
        </p>
        <h1 className="mt-2 text-4xl md:text-6xl">Explore the Map</h1>
        <p className="mt-2 text-muted">
          Click a state on the map, or pick one from the list, to open its story.
        </p>
      </header>

      <div className="grid items-start gap-10 lg:grid-cols-2">
        <section
          ref={mapRef}
          className="animate-fade-up mx-auto w-full max-w-xl scroll-mt-24"
        >
          <div className="mb-4 flex items-center gap-3">
            <label htmlFor="state-select" className="sr-only">
              Choose a state
            </label>
            <select
              id="state-select"
              value={stateId ?? ""}
              onChange={(e) => e.target.value && selectById(e.target.value)}
              className="w-full rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground"
            >
              <option value="">Choose a state…</option>
              {sortedStates.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>

            <label className="flex shrink-0 cursor-pointer items-center gap-2 text-sm text-muted">
              <input
                type="checkbox"
                checked={showLabels}
                onChange={(e) => setShowLabels(e.target.checked)}
                className="accent-primary"
              />
              Names
            </label>
          </div>

          <NigeriaSvgMap
            selectedId={stateId}
            showLabels={showLabels}
            onSelect={(_code, name) => selectById(nameToStateId(name))}
          />
          <p className="mt-2 text-center text-xs text-muted">
            Hover or tap a state to see its name.
          </p>
        </section>

        <section ref={storyRef} className="scroll-mt-28 lg:sticky lg:top-28">
          {selected ? (
            <article
              key={selected.id}
              className="animate-blur-in overflow-hidden md:rounded-3xl border border-border bg-surface shadow-sm"
            >
              {/* accent bar */}
              <div className="h-1.5 w-full bg-primary" />

              <div className="p-5 sm:p-6 md:p-8">
                {/* top row: code chip + clear */}
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-primary">
                    {selected.code}
                  </span>
                  <button
                    type="button"
                    onClick={clearState}
                    aria-label="Clear selected state"
                    className="rounded-full border border-border px-3 py-1 text-sm text-muted transition-colors hover:bg-surface-muted hover:text-foreground"
                  >
                    Clear ✕
                  </button>
                </div>

                {/* title + slogan */}
                <h2 className="mt-4 break-words text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                  {selected.name}
                </h2>
                {selected.slogan && (
                  <div className="mt-4 border-l-2 border-primary pl-3">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-muted">
                      State slogan
                    </p>
                    <p className="mt-0.5 text-base italic text-primary sm:text-lg">
                      “{selected.slogan}”
                    </p>
                  </div>
                )}

                {/* quick facts */}
                <dl className="mt-5 divide-y divide-border overflow-hidden rounded-xl border border-border sm:mt-6 sm:grid sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                  {[
                    ["Capital", selected.capital],
                    ["Zone", selected.zone],
                    ["Created", selected.created],
                  ]
                    .filter(([, v]) => v)
                    .map(([label, value]) => (
                      <div
                        key={label}
                        className="flex items-baseline justify-between gap-4 bg-surface-muted/40 px-4 py-2.5 sm:block sm:py-3"
                      >
                        <dt className="text-[11px] font-semibold uppercase tracking-widest text-muted">
                          {label}
                        </dt>
                        <dd className="text-right text-sm font-medium text-foreground sm:mt-0.5 sm:text-left">
                          {value}
                        </dd>
                      </div>
                    ))}
                </dl>

                {/* summary */}
                <p className="mt-5 text-[15px] leading-7 text-foreground/85 sm:mt-6 sm:text-base md:text-[17px] md:leading-8">
                  {selected.summary}
                </p>

                {/* highlights */}
                {selected.highlights && selected.highlights.length > 0 && (
                  <div className="mt-6 border-t border-border pt-5 sm:mt-8 sm:pt-6">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-muted">
                      Highlights
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {selected.highlights.map((h) => (
                        <li
                          key={h}
                          className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[13px] text-foreground/85 sm:py-1.5 sm:text-sm"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() =>
                    mapRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                  className="mt-6 w-full rounded-full border border-border py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-surface-muted lg:hidden"
                >
                  ↑ Back to map
                </button>
              </div>
            </article>
          ) : (
            <div className="grid min-h-[12rem] place-items-center rounded-3xl sm:min-h-[20rem] border border-dashed border-border bg-surface/50 p-8 text-center">
              <div>
                <p className="text-lg font-medium text-foreground/80">
                  No state selected
                </p>
                <p className="mx-auto mt-2 max-w-xs text-sm text-muted">
                  Click a state on the map or choose one from the list to read
                  its story.
                </p>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}