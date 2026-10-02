"use client";

import { useMemo, useState } from "react";
import { geoMercator, geoPath } from "d3-geo";
import type { FeatureCollection } from "geojson";
import nigeriaStates from "@/data/geo/nigeria-states.json";
import { nameToStateId } from "@/lib/states";

type Props = {
  onSelect?: (code: string, name: string) => void;
  selectedId?: string | null;
  showLabels?: boolean;
};

// Only the larger states get an always-on label (keeps the map calm).
// Everything else shows its name on hover/focus/select, or via the dropdown.
const MIN_LABEL_AREA = 6500;

function shortName(name: string) {
  return name === "Federal Capital Territory" ? "FCT" : name;
}

export function NigeriaSvgMap({ onSelect, selectedId, showLabels = true }: Props) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const items = useMemo(() => {
    const fc = nigeriaStates as FeatureCollection;
    const projection = geoMercator().fitSize([900, 900], fc);
    const path = geoPath(projection);
    return fc.features.map((f) => {
      const name = (f.properties?.admin1Name as string) ?? "State";
      const code = (f.properties?.admin1Pcod as string) ?? name;
      const [cx, cy] = path.centroid(f);
      return {
        code,
        name,
        id: nameToStateId(name),
        d: path(f) ?? undefined,
        cx,
        cy,
        area: path.area(f),
      };
    });
  }, []);

  return (
    <svg
      viewBox="0 0 900 900"
      className="h-auto w-full"
      role="group"
      aria-label="Map of Nigeria. Select a state."
    >
      {items.map((s) => {
        const active = selectedId === s.id;
        return (
          <path
            key={s.code}
            d={s.d}
            role="button"
            tabIndex={0}
            aria-label={s.name}
            aria-pressed={active}
            className={`cursor-pointer stroke-primary stroke-1 outline-none transition-colors focus-visible:stroke-3 ${
              active ? "fill-primary/50" : "fill-primary/20 hover:fill-primary/40"
            }`}
            onClick={() => onSelect?.(s.code, s.name)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onSelect?.(s.code, s.name);
              }
            }}
            onMouseEnter={() => setHoveredId(s.id)}
            onMouseLeave={() => setHoveredId(null)}
            onFocus={() => setHoveredId(s.id)}
            onBlur={() => setHoveredId(null)}
          >
            <title>{s.name}</title>
          </path>
        );
      })}

      {/* Labels sit on a separate layer above all paths and never block clicks */}
      <g pointerEvents="none" textAnchor="middle" aria-hidden="true">
        {items.map((s) => {
          const emphasised = selectedId === s.id || hoveredId === s.id;
          const big = s.area >= MIN_LABEL_AREA;
          if (!emphasised && !(showLabels && big)) return null;
          return (
            <text
              key={s.code}
              x={s.cx}
              y={s.cy}
              dy="0.35em"
              fontSize={emphasised ? 36 : 26}
              fontWeight={emphasised ? 700 : 500}
              fill="currentColor"
              stroke="none"
              opacity={emphasised ? 1 : 0.7}
              className="text-foreground"
            >
              {shortName(s.name)}
            </text>
          );
        })}
      </g>
    </svg>
  );
}

export { NigeriaSvgMap as NigeriaMap };