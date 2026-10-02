import Image from "next/image";
import { ArrowRight, Landmark, Languages, MapPin } from "lucide-react";

import Motion from "@/components/Motion";
import TransitionLink from "@/components/TransitionLink";

const stats = [
  { value: "36 + FCT", label: "States" },
  { value: "370+", label: "Ethnic groups" },
  { value: "500+", label: "Languages" },
];

export default function Intro() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute -left-40 -top-40 h-128 w-lg rounded-full bg-primary/15 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(color-mix(in srgb, var(--primary) 12%, transparent) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 pb-16 pt-32 md:grid-cols-2">
        <Motion preset="fade" className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-surface/70 px-3 py-1 text-sm font-medium text-primary backdrop-blur">
            <span className="size-2 rounded-full bg-primary" />
            Independence · 1 October 1960
          </span>

          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Nigeria{" "}
            <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              @66
            </span>
          </h1>

          <p className="max-w-md text-lg text-secondary">
            Explore Nigeria through its history, culture, and geography. Walk
            the years, tap a state, follow the story.
          </p>

          <Motion preset={["move-right"]} className="flex flex-wrap gap-3">
            <TransitionLink href="/explore" className="animate-bounce">
              Explore
              <ArrowRight />
            </TransitionLink>
          </Motion>

          <dl className="mt-6 flex gap-8 border-t border-border pt-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl font-bold text-primary">{s.value}</dt>
                <dd className="text-sm text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Motion>

        <Motion preset="fade" className="relative mx-auto w-full max-w-sm">
          <div className="relative aspect-3/4 overflow-hidden rounded-t-pill rounded-b-3xl border-4 border-surface shadow-2xl">
            <Image
              src="/images/zuma-rock.jpg"
              alt="Zuma Rock, Niger State"
              fill
              priority
              sizes="(min-width: 768px) 384px, 90vw"
              className="object-cover object-[54%_center] contrast-110 saturate-125"
            />
            <div className="absolute inset-0 bg-linear-to-t from-surface-dark/30 via-transparent to-primary/10" />
            <div className="absolute inset-x-0 bottom-0 flex h-2">
              <div className="flex-1 bg-[#008751]" />
              <div className="flex-1 bg-white" />
              <div className="flex-1 bg-[#008751]" />
            </div>
          </div>

          <div className="animate-float absolute -left-6 top-16 flex items-center gap-2 rounded-2xl bg-surface px-4 py-3 shadow-lg">
            <MapPin className="size-4 text-primary" />
            <span className="text-sm font-medium">Zuma Rock, Niger</span>
          </div>

          <div
            className="animate-float absolute -right-4 top-1/2 flex items-center gap-2 rounded-2xl bg-surface px-4 py-3 shadow-lg"
            style={{ animationDelay: "1s" }}
          >
            <Languages className="size-4 text-primary" />
            <span className="text-sm font-medium">Yorùbá · Igbo · Hausa</span>
          </div>

          <div
            className="animate-float absolute -bottom-4 left-8 flex items-center gap-2 rounded-2xl bg-surface px-4 py-3 shadow-lg"
            style={{ animationDelay: "2s" }}
          >
            <Landmark className="size-4 text-primary" />
            <span className="text-sm font-medium">66 years of independence</span>
          </div>
        </Motion>
      </div>
    </section>
  );
}
