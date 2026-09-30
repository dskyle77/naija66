"use client";

import { useMemo } from "react";
import { geoMercator, geoPath } from "d3-geo";
import type { FeatureCollection } from "geojson";
import nigeriaStates from "@/data/geo/nigeria-states.json";
import { nameToStateId } from "@/lib/states";

type Props = {
  onSelect?: (code: string, name: string) => void;
  selectedId?: string | null;
};

export function NigeriaSvgMap({ onSelect, selectedId }: Props) {
  const { path, features } = useMemo(() => {
    const fc = nigeriaStates as FeatureCollection;
    const projection = geoMercator().fitSize([900, 900], fc);
    return { path: geoPath(projection), features: fc.features };
  }, []);

  return (
    <svg viewBox="0 0 900 900" className="h-auto w-full" role="img" aria-label="Map of Nigeria">
      {features.map((f) => {
        const name = (f.properties?.admin1Name as string) ?? "State";
        const code = (f.properties?.admin1Pcod as string) ?? name;
        const id = nameToStateId(name);
        const active = selectedId === id;

        return (
          <path
            key={code}
            d={path(f) ?? undefined}
            className={`cursor-pointer stroke-primary stroke-[1] transition-colors ${
              active
                ? "fill-primary/50"
                : "fill-primary/20 hover:fill-primary/40"
            }`}
            onClick={() => onSelect?.(code, name)}
          >
            <title>{name}</title>
          </path>
        );
      })}
    </svg>
  );
}

export { NigeriaSvgMap as NigeriaMap };