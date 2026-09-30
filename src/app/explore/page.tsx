import { Metadata } from "next";
import { Journey } from "@/components/explore/Journey";

export const metadata: Metadata = {
  title: "Timeline of Nigeria",
  description:
    "Walk Nigeria’s story from independence in 1960 through FESTAC ’77, the move to Abuja, and Nigeria @66.",
  alternates: { canonical: "/explore" },
};

export default function ExplorePage() {
  return (
    <main className="flex min-h-dvh flex-col pt-32">
      <header className="container shrink-0 pb-2">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Timeline
        </p>
        <h1 className="mt-1 text-3xl md:text-5xl">Explore Nigeria</h1>
        <p className="mt-2 text-sm text-muted">
          Move through the years · {new Date().getFullYear() - 1960} years of
          story
        </p>
      </header>

      <Journey />
    </main>
  );
}
