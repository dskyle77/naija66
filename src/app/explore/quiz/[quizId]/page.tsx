import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Quiz } from "@/components/explore/Quiz";
import { getQuizById, quizIds } from "@/lib/quiz";


export async function generateMetadata({
  params,
}: {
  params: Promise<{ quizId: string }>;
}): Promise<Metadata> {
  const { quizId } = await params;
  const quiz = getQuizById(quizId);
  if (!quiz) return { title: "Quiz" };

  return {
    title: `${quiz.title} quiz`,
    description: quiz.description,
    alternates: { canonical: `/explore/quiz/${quiz.id}` },
  };
}

export function generateStaticParams() {
  return quizIds.map((quizId) => ({ quizId }));
}

export default async function QuizPlayPage({
  params,
}: {
  params: Promise<{ quizId: string }>;
}) {
  const { quizId } = await params;
  const quiz = getQuizById(quizId);
  if (!quiz) notFound();

  return (
    <main className="container pb-24 pt-32">
      <p className="mb-8">
        <Link
          href="/explore/quiz"
          className="text-sm font-medium text-muted hover:text-primary"
        >
          ← All quizzes
        </Link>
      </p>
      <Quiz quiz={quiz} />
    </main>
  );
}
