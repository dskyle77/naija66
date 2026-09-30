import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Motion from "@/components/Motion";
import { about } from "@/lib/about";

const sectionClass = "mt-20 scroll-mt-32";

export const metadata: Metadata = {
  title: "About Nigeria",
  description:
    "Nigeria’s motto, flag, coat of arms, anthem, national pledge, and a short origin story.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="container pb-24 pt-32">
      <header className="animate-fade-up max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          National identity
        </p>
        <h1 className="mt-2 text-4xl md:text-6xl">{about.title}</h1>
        <p className="mt-4 text-lg text-muted">{about.lede}</p>
      </header>

      <nav
        aria-label="On this page"
        className="stagger mt-8 flex flex-wrap gap-2"
      >
        {about.sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="animate-fade-up rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-primary-light hover:text-primary"
          >
            {section.label}
          </a>
        ))}
      </nav>

      <ul className="stagger mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {about.snapshot.map((item) => (
          <li key={item.label} className="animate-fade-up">
            <Link
              href={item.href}
              className="hover-lift block rounded-xl border border-border bg-surface px-4 py-3 transition-colors hover:border-primary/40 hover:bg-primary-light"
            >
              <p className="font-mono text-xs uppercase text-muted">
                {item.label}
              </p>
              <p className="mt-1 font-semibold text-foreground">{item.value}</p>
            </Link>
          </li>
        ))}
      </ul>

      <Motion preset="fade-up" className="mt-20 grid gap-10 md:grid-cols-2">
        <article
          id="motto"
          className="scroll-mt-32 rounded-2xl border border-border bg-surface p-6 md:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            National motto
          </p>
          <h2 className="mt-3 text-3xl leading-tight text-primary md:text-4xl">
            {about.motto.current}
          </h2>
          <p className="mt-4 text-sm text-muted">
            Adopted in {about.motto.adopted}. Before that, from{" "}
            {about.motto.previousYears}, the motto was “{about.motto.previous}”.
          </p>
          <p className="mt-2 text-sm text-muted">
            {about.motto.note} See the{" "}
            <a href="#coat-of-arms" className="font-semibold text-primary underline-offset-2 hover:underline">
              coat of arms
            </a>
            .
          </p>
        </article>

        <article
          id="flag"
          className="scroll-mt-32 rounded-2xl border border-border bg-surface p-6 md:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            The flag
          </p>
          <h2 className="mt-3 text-2xl">Green, white, green</h2>
          <p className="mt-2 text-sm text-muted">
            Designed by {about.flag.designer} in {about.flag.year}. First flown as
            the national flag on {about.flag.adopted}.
          </p>
          <div className="mt-5 flex h-16 overflow-hidden rounded-md border border-border-strong">
            <span className="w-1/3 bg-[#008751]" />
            <span className="w-1/3 bg-white" />
            <span className="w-1/3 bg-[#008751]" />
          </div>
          <ul className="mt-5 space-y-2 text-sm">
            {about.flag.bands.map((band, i) => (
              <li key={`${band.color}-${i}`} className="flex gap-3">
                <span className="font-semibold text-foreground">{band.color}</span>
                <span className="text-muted">{band.meaning}</span>
              </li>
            ))}
          </ul>
        </article>
      </Motion>

      <Motion preset="fade-up" className={sectionClass} id="coat-of-arms">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Coat of arms
          </p>
          <h2 className="mt-2 text-3xl md:text-5xl">What the emblem says</h2>
          <p className="mt-3 text-muted">
            Adopted {about.coatOfArms.adopted}, just before independence.
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl border border-border bg-surface">
            <Image
              src={about.coatOfArms.image}
              alt={about.coatOfArms.imageAlt}
              fill
              sizes="(min-width: 1024px) 28rem, 90vw"
              className="object-contain p-8"
            />
          </div>

          <ul className="space-y-3">
            {about.coatOfArms.parts.map((item) => (
              <li
                key={item.part}
                className="flex items-start gap-4 rounded-xl border border-border bg-surface p-4"
              >
                <span className="mt-1 size-2 shrink-0 rounded-full bg-primary" />
                <div>
                  <p className="font-semibold text-foreground">{item.part}</p>
                  <p className="text-sm text-muted">{item.meaning}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Motion>

      <Motion preset="fade-up" className={sectionClass} id="anthem">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          National anthem
        </p>
        <h2 className="mt-2 text-3xl md:text-5xl">{about.anthem.title}</h2>
        <p className="mt-3 max-w-2xl text-muted">
          {about.anthem.status}. First used from {about.anthem.adopted} to{" "}
          {about.anthem.relinquished}. Words by {about.anthem.lyricist}; music by{" "}
          {about.anthem.composer}. It replaced {about.anthem.previousTitle} (
          {about.anthem.previousYears}).
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {about.anthem.stanzas.map((stanza) => (
            <article
              key={stanza.title}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <p className="font-mono text-xs text-muted">
                Stanza {stanza.title}
              </p>
              <p className="mt-3 whitespace-pre-line text-base leading-relaxed text-foreground">
                {stanza.lines.join("\n")}
              </p>
            </article>
          ))}
        </div>
      </Motion>

      <Motion
        preset="fade-up"
        id="pledge"
        className={`${sectionClass} rounded-2xl bg-primary-dark p-8 text-inverse md:p-12`}
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-inverse/70">
          {about.pledge.title} · {about.pledge.author}, {about.pledge.introduced}
        </p>
        <blockquote className="mt-4 max-w-xl text-xl leading-relaxed md:text-2xl">
          {about.pledge.lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </blockquote>
      </Motion>

      <Motion preset="fade-up" className={sectionClass} id="history">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              History
            </p>
            <h2 className="mt-2 text-3xl md:text-5xl">A short origin story</h2>
            <p className="mt-3 text-muted">{about.history.intro}</p>
          </div>
          <Link
            href="/explore"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-inverse transition-colors hover:bg-primary-hover"
          >
            Open the timeline →
          </Link>
        </div>

        <ol className="space-y-4">
          {about.history.beats.map((beat) => (
            <li
              key={beat.year}
              className="grid gap-3 rounded-2xl border border-border bg-surface p-5 md:grid-cols-[8rem_1fr] md:gap-8 md:p-6"
            >
              <p className="font-mono text-sm text-primary">{beat.year}</p>
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  {beat.title}
                </h3>
                <p className="mt-2 text-foreground/85">{beat.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Motion>

      <Motion preset="fade-up" className="mt-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          Keep going
        </p>
        <h2 className="mt-2 text-3xl md:text-4xl">Explore the rest</h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-3">
          {about.more.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex h-full flex-col rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-primary/40 hover:bg-primary-light"
              >
                <span className="font-semibold text-foreground">
                  {item.label} →
                </span>
                <span className="mt-1 text-sm text-muted">{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Motion>
    </main>
  );
}
