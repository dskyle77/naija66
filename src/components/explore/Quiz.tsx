"use client";

import { useState } from "react";
import { ArrowRight, Check, RotateCcw, X } from "lucide-react";
import type { QuizSet } from "@/lib/quiz";

type Phase = "start" | "playing" | "done";

export function Quiz({ quiz }: { quiz: QuizSet }) {
  const [phase, setPhase] = useState<Phase>("start");
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);

  const questions = quiz.questions;
  const total = questions.length;
  const current = questions[index];
  const revealed = picked !== null;

  function start() {
    setPhase("playing");
    setIndex(0);
    setScore(0);
    setPicked(null);
  }

  function choose(optionIndex: number) {
    if (picked !== null || !current) return;
    setPicked(optionIndex);
    if (optionIndex === current.correctIndex) setScore((s) => s + 1);
  }

  function next() {
    if (index >= total - 1) {
      setPhase("done");
      return;
    }
    setIndex((i) => i + 1);
    setPicked(null);
  }

  if (phase === "start") {
    return (
      <div className="animate-fade-up mx-auto max-w-lg text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          {quiz.title}
        </p>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">{quiz.tagline}</h2>
        <p className="mt-3 text-muted">
          {total} questions · {quiz.description}
        </p>
        <button
          type="button"
          onClick={start}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-inverse transition hover:bg-primary-hover"
        >
          Start quiz
          <ArrowRight className="size-4" />
        </button>
      </div>
    );
  }

  if (phase === "done") {
    const pct = Math.round((score / total) * 100);
    let verdict = "Have another look at the source page, then try again.";
    if (pct >= 90) verdict = "Excellent — you know this well.";
    else if (pct >= 70) verdict = "Strong score. A little more polish and you’re there.";
    else if (pct >= 50) verdict = "Solid start. Review and come back for a higher mark.";

    return (
      <div className="animate-fade-up mx-auto max-w-lg text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          {quiz.title} · results
        </p>
        <h2 className="mt-2 text-4xl font-bold md:text-5xl">
          {score}
          <span className="text-muted"> / {total}</span>
        </h2>
        <p className="mt-1 text-lg text-primary">{pct}%</p>
        <p className="mt-4 text-muted">{verdict}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={start}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-inverse"
          >
            <RotateCcw className="size-4" />
            Try again
          </button>
          <a
            href={quiz.reviewHref}
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold"
          >
            {quiz.reviewLabel}
          </a>
          <a
            href="/explore/quiz"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold"
          >
            All quizzes
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl">
      <div className="mb-6 flex items-center justify-between gap-4 text-sm">
        <span className="font-mono text-muted">
          {index + 1} / {total}
        </span>
        <span className="text-muted">
          Score <span className="font-semibold text-foreground">{score}</span>
        </span>
      </div>
      <div className="mb-8 h-1.5 overflow-hidden rounded-full bg-surface-muted">
        <div
          className="h-full rounded-full bg-primary transition-all duration-300"
          style={{ width: `${((index + (revealed ? 1 : 0)) / total) * 100}%` }}
        />
      </div>

      <div key={current.id} className="animate-fade-up">
      <h2 className="text-xl font-bold md:text-2xl">{current.question}</h2>

      <ul className="mt-6 space-y-3">
        {current.options.map((opt, i) => {
          const isPicked = picked === i;
          const isCorrect = i === current.correctIndex;
          let styles =
            "border-border bg-surface hover:border-primary/40 hover:bg-surface-muted";

          if (revealed) {
            if (isCorrect)
              styles = "border-primary bg-primary-light text-primary-dark";
            else if (isPicked)
              styles =
                "border-red-400/60 bg-red-50 text-red-800 dark:bg-red-950/40 dark:text-red-200";
            else styles = "border-border bg-surface opacity-60";
          } else if (isPicked) {
            styles = "border-primary bg-primary-light";
          }

          return (
            <li key={`${current.id}-${opt}`}>
              <button
                type="button"
                disabled={revealed}
                onClick={() => choose(i)}
                className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3.5 text-left text-sm font-medium transition md:text-base ${styles}`}
              >
                <span className="grid size-7 shrink-0 place-items-center rounded-full border border-current/20 font-mono text-xs">
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="flex-1">{opt}</span>
                {revealed && isCorrect && <Check className="size-4 shrink-0" />}
                {revealed && isPicked && !isCorrect && (
                  <X className="size-4 shrink-0" />
                )}
              </button>
            </li>
          );
        })}
      </ul>

      {revealed && current.explain && (
        <p className="mt-4 rounded-lg bg-surface-muted/80 px-4 py-3 text-sm text-muted">
          {current.explain}
        </p>
      )}

      {revealed && (
        <button
          type="button"
          onClick={next}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-inverse"
        >
          {index >= total - 1 ? "See results" : "Next"}
          <ArrowRight className="size-4" />
        </button>
      )}
      </div>
    </div>
  );
}
