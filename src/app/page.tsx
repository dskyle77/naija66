import Intro from "@/screens/Intro";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore Nigeria",
  description:
    "Start with Nigeria’s story: independence, the map of 36 states and the FCT, and three short quizzes.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return <Intro />;
}
