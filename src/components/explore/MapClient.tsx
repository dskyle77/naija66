"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { NigeriaSvgMap } from "@/components/explore/NigeriaMap";
import { getStateById, nameToStateId } from "@/lib/states";


export default function MapClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [stateId, setStateId] = useState<string | null>(null);
  const selected = getStateById(stateId);
  const storyRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const fromUrl = searchParams.get("state");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (fromUrl) setStateId(fromUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function selectState(name: string) {
    const id = nameToStateId(name);
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
        <p className="mt-2 text-muted">Click a state to open its story.</p>
      </header>

      <div className="grid items-start gap-10 lg:grid-cols-2">
        <section className="animate-fade-up relative mx-auto w-full max-w-xl">
          <NigeriaSvgMap
            selectedId={stateId}
            onSelect={(_code, name) => selectState(name)}
          />
        </section>

        <section ref={storyRef} className="min-h-[20rem] scroll-mt-28">
          {selected ? (
            <article
              key={selected.id}
              className="animate-blur-in rounded-2xl border border-border bg-surface p-6 md:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase text-muted">
                    {selected.code}
                  </p>
                  <h2 className="mt-1 text-3xl font-bold text-primary">
                    {selected.name}
                  </h2>
                  {selected.capital && (
                    <p className="mt-1 text-sm text-muted">
                      Capital · {selected.capital}
                      {selected.zone ? ` · ${selected.zone}` : ""}
                    </p>
                  )}
                  {selected.created && (
                    <p className="mt-1 text-sm text-muted">
                      Created · {selected.created}
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={clearState}
                  className="rounded-full border border-border px-3 py-1 text-sm text-muted hover:bg-surface-muted"
                >
                  Clear
                </button>
              </div>

              <p className="mt-4 text-base leading-relaxed text-foreground/90">
                {selected.summary}
              </p>

              {selected.highlights && selected.highlights.length > 0 && (
                <ul className="mt-6 space-y-2">
                  {selected.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-sm text-foreground/80"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ) : (
            <div className="grid h-full min-h-[20rem] place-items-center rounded-2xl border border-dashed border-border bg-surface/50 p-8 text-center">
              <p className="text-muted">
                Select a state on the map to read its story.
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
