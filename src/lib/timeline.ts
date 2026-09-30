export type Category = "history" | "culture" | "sport" | "technology" | "world";

export type Moment = {
  year: number;
  tag: string;
  title: string;
  date?: string;
  summary: string;
  image?: string;
  placeId?: string;
  happenings: { category: Category; text: string }[];
};

export const START = 1960;
export const END = 2026;

export const moments: Moment[] = [
  {
    year: 1960,
    tag: "Independence",
    title: "A new nation",
    date: "1 October 1960",
    summary:
      "Nigeria became independent from British colonial rule. Sir Abubakar Tafawa Balewa was Prime Minister; the capital was Lagos.",
    image: "/images/timeline/1960.jpg",
    placeId: "lagos",
    happenings: [
      { category: "history", text: "Independence from Britain on 1 October 1960" },
      {
        category: "history",
        text: "Abubakar Tafawa Balewa leads as Prime Minister",
      },
      {
        category: "world",
        text: "1960 is remembered as the “Year of Africa”, with a wave of independences across the continent",
      },
    ],
  },
  {
    year: 1963,
    tag: "Republic",
    title: "Nigeria becomes a republic",
    date: "1 October 1963",
    image: "/images/timeline/1963.jpg",

    summary:
      "Nigeria cut its constitutional tie to the British Crown, with Nnamdi Azikiwe as its first President.",
    happenings: [
      { category: "history", text: "Nnamdi Azikiwe becomes the first President" },
    ],
  },
  {
    year: 1970,
    tag: "Reconciliation",
    title: "The civil war ends",
    date: "15 January 1970",
    image: "/images/timeline/1970.jpg",

    summary:
      "The war that began on 6 July 1967 ended with a formal surrender in Lagos. Yakubu Gowon called for “no victor, no vanquished.”",
    happenings: [
      {
        category: "history",
        text: "Civil war ends on 15 January 1970 after about two and a half years",
      },
    ],
  },
  {
    year: 1977,
    tag: "Culture",
    title: "FESTAC '77",
    date: "15 January – 12 February 1977",
    image: "/images/timeline/1977.jpg",
    summary:
      "Lagos hosted the Second World Black and African Festival of Arts and Culture, with thousands of artists from Africa and the diaspora.",
    placeId: "lagos",
    happenings: [
      {
        category: "culture",
        text: "Artists and performers from across Africa and the diaspora gather in Lagos",
      },
    ],
  },
  {
    year: 1991,
    tag: "Capital",
    title: "The seat of government moves",
    date: "12 December 1991",
    image: "/images/timeline/1991.jpg",
    summary:
      "The federal capital moved from Lagos to Abuja, a planned city in the Federal Capital Territory created in 1976.",
    placeId: "abuja",
    happenings: [
      {
        category: "history",
        text: "Seat of government relocates from Lagos to Abuja",
      },
    ],
  },
  {
    year: 1996,
    tag: "Sport",
    title: "Olympic football gold",
    date: "3 August 1996",
    image: "/images/timeline/1996.avif",

    summary:
      "Nigeria won men’s football gold at the Atlanta Olympics — the first African team to do so.",
    happenings: [
      {
        category: "sport",
        text: "Nigeria wins Olympic men’s football gold in Atlanta",
      },
    ],
  },
  {
    year: 1999,
    tag: "Democracy",
    title: "Return to civilian rule",
    date: "29 May 1999",
    image: "/images/timeline/1999.jpg",
    summary:
      "Nigeria returned to elected civilian government after years of military rule. Olusegun Obasanjo was sworn in as President.",
    placeId: "abuja",
    happenings: [
      {
        category: "history",
        text: "Olusegun Obasanjo sworn in as President on 29 May 1999",
      },
    ],
  },
  {
    year: 2001,
    tag: "Technology",
    title: "The mobile revolution",
    date: "August 2001",
    image: "/images/timeline/2001.jpg",
    summary:
      "GSM mobile services launched. MTN and Econet began commercial service in early August 2001, and phones changed how the country communicates and does business.",
    happenings: [
      {
        category: "technology",
        text: "GSM networks roll out in Lagos, Abuja and other cities",
      },
    ],
  },
  {
    year: 2024,
    tag: "Anthem",
    title: "The first anthem returns",
    date: "29 May 2024",
    image: "/images/timeline/2024.jpg",
    summary:
      "“Nigeria, We Hail Thee” was readopted as the national anthem, replacing “Arise, O Compatriots,” which had been used since 1978.",
    happenings: [
      {
        category: "culture",
        text: "National Anthem Act 2024 restores the 1960 anthem",
      },
    ],
  },
  {
    year: 2026,
    tag: "Today",
    title: "Nigeria @66",
    date: "1 October 2026",
    image: "/images/timeline/2026.jpg",
    summary:
      "Sixty-six years on: 36 states and the FCT, more than 500 living languages, and a young, fast-growing country.",
    happenings: [
      {
        category: "history",
        text: "Nigeria marks 66 years of independence",
      },
    ],
  },
];
