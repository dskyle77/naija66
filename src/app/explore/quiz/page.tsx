import { Metadata } from "next";
import Link from "next/link";
import { quizzes } from "@/lib/quiz";

export const metadata: Metadata = {
  title: "Nigeria quizzes",
  description:
    "Three short quizzes on the timeline, civic basics, and the map of Nigeria.",
  alternates: { canonical: "/explore/quiz" },
};

export default function QuizHubPage() {
  return (
    <main className="container pb-24 pt-32">
      <header className="animate-fade-up mb-12 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Quizzes
        </p>
        <h1 className="mt-2 text-4xl md:text-6xl">Test your knowledge</h1>
        <p className="mt-3 text-muted">
          Three short quizzes. Start with the timeline you just walked, then the
          civic basics, then the map.
        </p>
      </header>

      <ul className="stagger grid gap-4 md:grid-cols-3">
        {quizzes.map((quiz, i) => (
          <li key={quiz.id} className="animate-fade-up">
            <Link
              href={`/explore/quiz/${quiz.id}`}
              className="hover-lift flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/40 hover:bg-primary-light"
            >
              <span className="font-mono text-xs text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-3 text-2xl font-semibold text-foreground">
                {quiz.title}
              </h2>
              <p className="mt-1 text-sm font-medium text-primary">
                {quiz.tagline}
              </p>
              <p className="mt-3 flex-1 text-sm text-muted">
                {quiz.description}
              </p>
              <span className="mt-6 text-sm font-semibold text-foreground">
                {quiz.questions.length} questions →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
