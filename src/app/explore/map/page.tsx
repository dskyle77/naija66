import { Metadata } from "next";
import { Suspense } from "react";
import MapClient from "@/components/explore/MapClient";

export const metadata: Metadata = {
  title: "Map of Nigeria",
  description:
    "Click any of Nigeria’s 36 states and the FCT to read its capital, zone, and story.",
  alternates: { canonical: "/explore/map" },
};

export default function MapPage() {
  return (
    <Suspense fallback={null}>
      <MapClient />
    </Suspense>
  );
}
