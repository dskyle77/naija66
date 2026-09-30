export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explain?: string;
};

export type QuizId = "timeline" | "general" | "map";

export type QuizSet = {
  id: QuizId;
  title: string;
  tagline: string;
  description: string;
  reviewHref: string;
  reviewLabel: string;
  questions: QuizQuestion[];
};

export const quizzes: QuizSet[] = [
  {
    id: "timeline",
    title: "Timeline",
    tagline: "From the years you just walked",
    description:
      "Independence, the republic, FESTAC, the capital move, sport, phones, and the anthem — all from the timeline.",
    reviewHref: "/explore",
    reviewLabel: "Review the timeline",
    questions: [
      {
        id: "t1",
        question: "In what year did Nigeria gain independence from Britain?",
        options: ["1957", "1960", "1963", "1966"],
        correctIndex: 1,
        explain: "Independence Day is 1 October 1960.",
      },
      {
        id: "t2",
        question: "Who was Nigeria’s first Prime Minister at independence?",
        options: [
          "Nnamdi Azikiwe",
          "Obafemi Awolowo",
          "Abubakar Tafawa Balewa",
          "Ahmadu Bello",
        ],
        correctIndex: 2,
        explain: "Sir Abubakar Tafawa Balewa led the government in 1960.",
      },
      {
        id: "t3",
        question: "When did Nigeria become a republic, with Nnamdi Azikiwe as first President?",
        options: ["1960", "1963", "1979", "1999"],
        correctIndex: 1,
        explain: "1 October 1963.",
      },
      {
        id: "t4",
        question: "In which year did the civil war end?",
        options: ["1966", "1967", "1970", "1975"],
        correctIndex: 2,
        explain:
          "The war ran from 6 July 1967 to 15 January 1970. Yakubu Gowon spoke of “no victor, no vanquished.”",
      },
      {
        id: "t5",
        question: "Which city hosted FESTAC ’77?",
        options: ["Abuja", "Ibadan", "Lagos", "Enugu"],
        correctIndex: 2,
        explain: "FESTAC ’77 ran in Lagos from 15 January to 12 February 1977.",
      },
      {
        id: "t6",
        question: "When did the seat of government move from Lagos to Abuja?",
        options: ["1976", "1987", "1991", "1999"],
        correctIndex: 2,
        explain:
          "12 December 1991. The Federal Capital Territory itself was created in 1976.",
      },
      {
        id: "t7",
        question: "Nigeria won Olympic men’s football gold in which year?",
        options: ["1992", "1994", "1996", "2000"],
        correctIndex: 2,
        explain:
          "Atlanta, 3 August 1996 — the first African team to win that gold.",
      },
      {
        id: "t8",
        question: "When did Nigeria return to elected civilian rule after years of military government?",
        options: ["1993", "1995", "1999", "2003"],
        correctIndex: 2,
        explain: "29 May 1999 — Olusegun Obasanjo was sworn in as President.",
      },
      {
        id: "t9",
        question: "What does GSM stand for in the 2001 “mobile revolution”?",
        options: [
          "Government Service Mandate",
          "Global System for Mobile communications",
          "General State Messaging",
          "Gulf Satellite Module",
        ],
        correctIndex: 1,
        explain: "Commercial GSM service in Nigeria began in August 2001.",
      },
      {
        id: "t10",
        question: "Which anthem was restored as Nigeria’s national anthem in 2024?",
        options: [
          "Arise, O Compatriots",
          "Nigeria, We Hail Thee",
          "God Bless Nigeria",
          "The Pledge",
        ],
        correctIndex: 1,
        explain:
          "“Nigeria, We Hail Thee” was readopted on 29 May 2024. It had first been used from 1960 to 1978.",
      },
    ],
  },
  {
    id: "general",
    title: "General knowledge",
    tagline: "The basics every Nigerian should know",
    description:
      "Flag, motto, anthem, pledge, capital, and other civic facts from the About page.",
    reviewHref: "/about",
    reviewLabel: "Read About Nigeria",
    questions: [
      {
        id: "g1",
        question: "What are the colours of the Nigerian flag, in order?",
        options: [
          "Green, white, green",
          "Green, white, red",
          "Blue, white, green",
          "Red, white, green",
        ],
        correctIndex: 0,
        explain:
          "Vertical green–white–green. Green stands for agriculture; white for peace and unity.",
      },
      {
        id: "g2",
        question: "Who designed the Nigerian flag?",
        options: [
          "Lillian Jean Williams",
          "Michael Taiwo Akinkunmi",
          "Felicia Adebola Adeyoyin",
          "Frances Benda",
        ],
        correctIndex: 1,
        explain: "Michael Taiwo Akinkunmi designed it in 1959.",
      },
      {
        id: "g3",
        question: "What is Nigeria’s national motto?",
        options: [
          "Peace, Unity, Freedom",
          "Unity and Faith, Peace and Progress",
          "One Nigeria, One Destiny",
          "Labour, Unity, Faith",
        ],
        correctIndex: 1,
        explain:
          "Adopted in 1978. From 1960 to 1978 the motto was “Peace, Unity, Freedom.”",
      },
      {
        id: "g4",
        question: "What is Nigeria’s national anthem today?",
        options: [
          "Arise, O Compatriots",
          "Nigeria, We Hail Thee",
          "God Bless Africa",
          "The Green-White-Green",
        ],
        correctIndex: 1,
        explain:
          "Restored on 29 May 2024. Words by Lillian Jean Williams; music by Frances Benda.",
      },
      {
        id: "g5",
        question: "Who wrote the National Pledge?",
        options: [
          "Lillian Jean Williams",
          "Nnamdi Azikiwe",
          "Felicia Adebola Adeyoyin",
          "Michael Taiwo Akinkunmi",
        ],
        correctIndex: 2,
        explain: "Professor Felicia Adebola Adeyoyin wrote it in 1976.",
      },
      {
        id: "g6",
        question: "On the coat of arms, what do the two white horses stand for?",
        options: ["Speed", "Peace", "Dignity", "Trade"],
        correctIndex: 2,
        explain: "The horses stand for dignity. The red eagle stands for strength.",
      },
      {
        id: "g7",
        question: "What does the wavy white Y on the coat of arms show?",
        options: [
          "Three regions of Nigeria",
          "The Niger and Benue rivers meeting at Lokoja",
          "The road to Abuja",
          "The Atlantic coastline",
        ],
        correctIndex: 1,
        explain: "It is a heraldic pall for the confluence at Lokoja.",
      },
      {
        id: "g8",
        question: "What is Nigeria’s national flower?",
        options: ["Hibiscus", "Costus spectabilis", "Yellow trumpet lily", "Ixora"],
        correctIndex: 1,
        explain:
          "Costus spectabilis, the yellow trumpet, grows across the country and stands for beauty.",
      },
      {
        id: "g9",
        question: "What is Nigeria’s official language?",
        options: ["Hausa", "Yoruba", "Igbo", "English"],
        correctIndex: 3,
        explain:
          "English is the official language. Hausa, Yoruba and Igbo are widely spoken national languages.",
      },
      {
        id: "g10",
        question: "What is the currency of Nigeria?",
        options: ["Cedi", "Naira", "Shilling", "Pound"],
        correctIndex: 1,
        explain: "The naira (₦), divided into 100 kobo.",
      },
    ],
  },
  {
    id: "map",
    title: "Map & places",
    tagline: "States, capitals, and the land",
    description:
      "Capitals, zones, and well-known places from the map — Lagos to the confluence, Yankari to the FCT.",
    reviewHref: "/explore/map",
    reviewLabel: "Open the map",
    questions: [
      {
        id: "m1",
        question: "How many states does Nigeria have, not counting the FCT?",
        options: ["30", "36", "37", "19"],
        correctIndex: 1,
        explain: "36 states plus the Federal Capital Territory (Abuja).",
      },
      {
        id: "m2",
        question: "Which city is Nigeria’s current capital?",
        options: ["Lagos", "Abuja", "Kaduna", "Port Harcourt"],
        correctIndex: 1,
        explain: "The seat of government moved from Lagos to Abuja on 12 December 1991.",
      },
      {
        id: "m3",
        question: "What is the capital of Lagos State?",
        options: ["Lagos Island", "Ikeja", "Badagry", "Epe"],
        correctIndex: 1,
        explain: "Ikeja is the state capital. Lagos was the federal capital until 1991.",
      },
      {
        id: "m4",
        question: "Where do the Niger and Benue rivers meet?",
        options: ["Makurdi", "Onitsha", "Lokoja", "Asaba"],
        correctIndex: 2,
        explain: "They meet at Lokoja, capital of Kogi — the confluence state.",
      },
      {
        id: "m5",
        question: "Which is Nigeria’s largest state by land area?",
        options: ["Borno", "Niger", "Taraba", "Kaduna"],
        correctIndex: 1,
        explain: "Niger State, capital Minna, is the largest by area.",
      },
      {
        id: "m6",
        question: "Which state is often called the “food basket of the nation”?",
        options: ["Kano", "Benue", "Oyo", "Plateau"],
        correctIndex: 1,
        explain: "Benue, capital Makurdi, is a major farming state along the Benue River.",
      },
      {
        id: "m7",
        question: "Yankari Game Reserve is in which state?",
        options: ["Plateau", "Bauchi", "Gombe", "Taraba"],
        correctIndex: 1,
        explain: "Yankari is in Bauchi State.",
      },
      {
        id: "m8",
        question: "The Osun-Osogbo Sacred Grove, a UNESCO World Heritage Site, is in which state?",
        options: ["Oyo", "Osun", "Ogun", "Ekiti"],
        correctIndex: 1,
        explain: "It is in Osun State. The state capital is Osogbo.",
      },
      {
        id: "m9",
        question: "Port Harcourt is the capital of which state?",
        options: ["Delta", "Bayelsa", "Rivers", "Akwa Ibom"],
        correctIndex: 2,
        explain: "Port Harcourt is the capital of Rivers State.",
      },
      {
        id: "m10",
        question: "How many geopolitical zones is Nigeria grouped into?",
        options: ["4", "5", "6", "8"],
        correctIndex: 2,
        explain:
          "Six zones: North West, North East, North Central, South West, South East, and South South.",
      },
    ],
  },
];

export function getQuizById(id: string | undefined): QuizSet | null {
  if (!id) return null;
  return quizzes.find((q) => q.id === id) ?? null;
}

export const quizIds = quizzes.map((q) => q.id);
