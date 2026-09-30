export type CoatPart = {
  part: string;
  meaning: string;
};

export type AnthemStanza = {
  title: string;
  lines: string[];
};

export type HistoryBeat = {
  year: string;
  title: string;
  text: string;
};

export const about = {
  title: "About Nigeria",
  lede:
    "A country of many languages and landscapes, bound by shared symbols — a flag, a motto, an anthem, and a coat of arms.",

  snapshot: [
    {
      label: "Independence",
      value: "1 October 1960",
      href: "/explore",
    },
    {
      label: "Republic",
      value: "1 October 1963",
      href: "/explore",
    },
    {
      label: "Capital",
      value: "Abuja",
      href: "/explore/map",
    },
    {
      label: "States",
      value: "36 + the FCT",
      href: "/explore/map",
    },
  ],

  sections: [
    { id: "motto", label: "Motto" },
    { id: "flag", label: "Flag" },
    { id: "coat-of-arms", label: "Coat of arms" },
    { id: "anthem", label: "Anthem" },
    { id: "pledge", label: "Pledge" },
    { id: "history", label: "History" },
  ],

  more: [
    {
      label: "Timeline",
      href: "/explore",
      text: "Walk the years from 1960 to now.",
    },
    {
      label: "Map",
      href: "/explore/map",
      text: "Open the 36 states and the FCT.",
    },
    {
      label: "Quiz",
      href: "/explore/quiz",
      text: "Three quizzes: timeline, civic basics, and the map.",
    },
  ],

  motto: {
    current: "Unity and Faith, Peace and Progress",
    adopted: "1978",
    previous: "Peace, Unity, Freedom",
    previousYears: "1960–1978",
    note: "The words sit on the ribbon at the base of the coat of arms.",
  },

  flag: {
    designer: "Michael Taiwo Akinkunmi",
    year: "1959",
    adopted: "1 October 1960",
    bands: [
      { color: "Green", meaning: "Agriculture" },
      { color: "White", meaning: "Peace and unity" },
      { color: "Green", meaning: "Agriculture" },
    ],
  },

  coatOfArms: {
    adopted: "20 May 1960",
    image: "/images/coat-of-arms.jpg",
    imageAlt: "Coat of arms of the Federal Republic of Nigeria",
    parts: [
      { part: "Black shield", meaning: "Nigeria’s fertile soil" },
      {
        part: "Wavy white Y",
        meaning: "The Niger and Benue rivers meeting at Lokoja",
      },
      { part: "Two white horses", meaning: "Dignity" },
      { part: "Red eagle", meaning: "Strength" },
      {
        part: "Green and white wreath",
        meaning: "The colours of the flag — agriculture and peace",
      },
      {
        part: "Costus spectabilis",
        meaning: "The national flower; it grows across the country and stands for beauty",
      },
      {
        part: "Ribbon",
        meaning: "The national motto since 1978",
      },
    ] satisfies CoatPart[],
  },

  anthem: {
    title: "Nigeria, We Hail Thee",
    status: "National anthem since 29 May 2024",
    adopted: "1 October 1960",
    relinquished: "1 October 1978",
    readopted: "29 May 2024",
    firstUsed: "1960–1978",
    lyricist: "Lillian Jean Williams",
    composer: "Frances Benda",
    previousTitle: "Arise, O Compatriots",
    previousYears: "1978–2024",
    stanzas: [
      {
        title: "I",
        lines: [
          "Nigeria, we hail thee,",
          "Our own dear native land,",
          "Though tribes and tongues may differ,",
          "In brotherhood we stand,",
          "Nigerians all, are proud to serve",
          "Our sovereign Motherland.",
        ],
      },
      {
        title: "II",
        lines: [
          "Our flag shall be a symbol",
          "That truth and justice reign,",
          "In peace or battle honoured,",
          "And this we count as gain,",
          "To hand on to our children",
          "A banner without stain.",
        ],
      },
      {
        title: "III",
        lines: [
          "O God of all creation,",
          "Grant this our one request:",
          "Help us to build a nation",
          "Where no man is oppressed,",
          "And so with peace and plenty",
          "Nigeria may be blessed.",
        ],
      },
    ] satisfies AnthemStanza[],
  },

  pledge: {
    title: "The National Pledge",
    author: "Felicia Adebola Adeyoyin",
    introduced: "1976",
    lines: [
      "I pledge to Nigeria my country,",
      "To be faithful, loyal and honest,",
      "To serve Nigeria with all my strength,",
      "To defend her unity and uphold her honour and glory.",
      "So help me God.",
    ],
  },

  history: {
    intro:
      "The long story lives on the timeline. This is the short version — how the country took its present shape.",
    beats: [
      {
        year: "1914",
        title: "One colony",
        text: "On 1 January 1914 Britain joined the Northern and Southern Protectorates (and the Colony of Lagos) into a single Nigeria. The land already held kingdoms, city-states and communities — from Benin and Kanem-Bornu to the Hausa cities, Yoruba states and the Niger Delta.",
      },
      {
        year: "1960",
        title: "Independence",
        text: "On 1 October 1960 Nigeria became independent. Sir Abubakar Tafawa Balewa was Prime Minister. The capital was Lagos.",
      },
      {
        year: "1963",
        title: "A republic",
        text: "On 1 October 1963 Nigeria cut its last constitutional tie to the British Crown. Nnamdi Azikiwe became the first President.",
      },
      {
        year: "1967–1970",
        title: "War and after",
        text: "A civil war ran from 6 July 1967 to 15 January 1970. When it ended, Head of State Yakubu Gowon spoke of “no victor, no vanquished,” and the work of rebuilding began.",
      },
      {
        year: "1991",
        title: "A new capital",
        text: "On 12 December 1991 the seat of the federal government moved from Lagos to Abuja. The Federal Capital Territory itself had been created in 1976 as a planned city in the centre of the country.",
      },
      {
        year: "1999",
        title: "Civilian rule returns",
        text: "After years of military government, Nigeria returned to elected civilian rule on 29 May 1999. Olusegun Obasanjo was sworn in as President.",
      },
      {
        year: "Today",
        title: "Nigeria @66",
        text: "Thirty-six states and the Federal Capital Territory. More than 500 living languages. A young population, and the same question the motto asks: how to hold unity, faith, peace and progress together.",
      },
    ] satisfies HistoryBeat[],
  },
};

export type AboutData = typeof about;
