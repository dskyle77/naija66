export type StateStory = {
  id: string;
  name: string;
  code: string;
  capital?: string;
  zone?: string;
  created?: string;
  summary: string;
  highlights?: string[];
};

export const states: StateStory[] = [
  {
    id: "abia",
    name: "Abia",
    code: "NG001",
    capital: "Umuahia",
    zone: "South East",
    created: "27 August 1991",
    summary:
      "A south-eastern state known for trade, especially around Aba, one of Nigeria’s major commercial hubs.",
    highlights: ["Created from Imo State in 1991", "Commercial centre in Aba"],
  },
  {
    id: "adamawa",
    name: "Adamawa",
    code: "NG002",
    capital: "Yola",
    zone: "North East",
    created: "27 August 1991",
    summary:
      "A north-eastern state along the Cameroon border, with diverse ethnic groups and highland landscapes.",
    highlights: ["Created from Gongola State in 1991", "Borders Cameroon"],
  },
  {
    id: "akwa-ibom",
    name: "Akwa Ibom",
    code: "NG003",
    capital: "Uyo",
    zone: "South South",
    created: "23 September 1987",
    summary:
      "An oil-producing coastal state in the South South, with a growing urban centre in Uyo.",
    highlights: ["Created from Cross River State in 1987", "Atlantic coastline"],
  },
  {
    id: "anambra",
    name: "Anambra",
    code: "NG004",
    capital: "Awka",
    zone: "South East",
    created: "3 February 1976",
    summary:
      "A densely populated south-eastern state and a historic centre of trade, with Onitsha as a major market city.",
    highlights: ["Onitsha market", "Strong commercial culture"],
  },
  {
    id: "bauchi",
    name: "Bauchi",
    code: "NG005",
    capital: "Bauchi",
    zone: "North East",
    created: "3 February 1976",
    summary:
      "A north-eastern state that includes Yankari Game Reserve, one of Nigeria’s best-known wildlife areas.",
    highlights: ["Yankari Game Reserve", "Created in 1976"],
  },
  {
    id: "bayelsa",
    name: "Bayelsa",
    code: "NG006",
    capital: "Yenagoa",
    zone: "South South",
    created: "1 October 1996",
    summary:
      "A Niger Delta state defined by waterways, oil production, and Ijaw cultural heritage.",
    highlights: ["Created from Rivers State in 1996", "Core Niger Delta state"],
  },
  {
    id: "benue",
    name: "Benue",
    code: "NG007",
    capital: "Makurdi",
    zone: "North Central",
    created: "3 February 1976",
    summary:
      "Often called the “food basket of the nation” for its large-scale farming along the Benue River.",
    highlights: ["Major agricultural producer", "Benue River"],
  },
  {
    id: "borno",
    name: "Borno",
    code: "NG008",
    capital: "Maiduguri",
    zone: "North East",
    created: "3 February 1976",
    summary:
      "Nigeria’s north-easternmost state, with a long history as a centre of the Kanem-Bornu world and trade toward the Sahel.",
    highlights: [
      "Historic Kanem-Bornu region",
      "Borders Cameroon, Chad and Niger",
    ],
  },
  {
    id: "cross-river",
    name: "Cross River",
    code: "NG009",
    capital: "Calabar",
    zone: "South South",
    created: "27 May 1967",
    summary:
      "A coastal and forested south-southern state, known for Calabar’s carnival and national parks.",
    highlights: ["Calabar Carnival", "Cross River National Park"],
  },
  {
    id: "delta",
    name: "Delta",
    code: "NG010",
    capital: "Asaba",
    zone: "South South",
    created: "27 August 1991",
    summary:
      "A major oil-producing state in the Niger Delta, with a mix of coastal, riverine and upland communities.",
    highlights: ["Created from Bendel State in 1991", "Asaba and Warri"],
  },
  {
    id: "ebonyi",
    name: "Ebonyi",
    code: "NG011",
    capital: "Abakaliki",
    zone: "South East",
    created: "1 October 1996",
    summary:
      "A south-eastern state known for agriculture, especially rice, with Abakaliki as its capital.",
    highlights: ["Created in 1996", "Rice and salt production"],
  },
  {
    id: "edo",
    name: "Edo",
    code: "NG012",
    capital: "Benin City",
    zone: "South South",
    created: "27 August 1991",
    summary:
      "Home to Benin City, one of West Africa’s historic royal and artistic centres, famous for the Benin Bronzes.",
    highlights: ["Created from Bendel State in 1991", "Benin Kingdom heritage"],
  },
  {
    id: "ekiti",
    name: "Ekiti",
    code: "NG013",
    capital: "Ado-Ekiti",
    zone: "South West",
    created: "1 October 1996",
    summary:
      "A south-western state known for hills, education, and a strong Yoruba cultural identity.",
    highlights: ["Created from Ondo State in 1996", "Reputation for education"],
  },
  {
    id: "enugu",
    name: "Enugu",
    code: "NG014",
    capital: "Enugu",
    zone: "South East",
    created: "27 August 1991",
    summary:
      "Once the capital of the Eastern Region and a historic coal-mining centre; still a major south-eastern city.",
    highlights: ["Former coal city", "Eastern Region capital legacy"],
  },
  {
    id: "fct",
    name: "Federal Capital Territory",
    code: "NG015",
    capital: "Abuja",
    zone: "North Central",
    created: "3 February 1976",
    summary:
      "Purpose-built federal capital territory. Abuja became Nigeria’s capital city on 12 December 1991.",
    highlights: ["Created 3 February 1976", "Seat of government since 1991"],
  },
  {
    id: "gombe",
    name: "Gombe",
    code: "NG016",
    capital: "Gombe",
    zone: "North East",
    created: "1 October 1996",
    summary:
      "A north-eastern state at a crossroads of trade and farming between the savannah and the highlands.",
    highlights: ["Created from Bauchi State in 1996", "Agricultural economy"],
  },
  {
    id: "imo",
    name: "Imo",
    code: "NG017",
    capital: "Owerri",
    zone: "South East",
    created: "3 February 1976",
    summary:
      "A compact south-eastern state with Owerri as a lively urban and cultural centre.",
    highlights: ["Created in 1976", "Owerri as the state capital"],
  },
  {
    id: "jigawa",
    name: "Jigawa",
    code: "NG018",
    capital: "Dutse",
    zone: "North West",
    created: "27 August 1991",
    summary:
      "A north-western state bordered by Niger Republic, with an economy rooted in agriculture.",
    highlights: ["Created from Kano State in 1991", "Borders Niger"],
  },
  {
    id: "kaduna",
    name: "Kaduna",
    code: "NG019",
    capital: "Kaduna",
    zone: "North West",
    created: "27 May 1967",
    summary:
      "A major northern political and military centre, and a historic railway and industrial hub.",
    highlights: ["Created as North-Central State in 1967", "Diverse population"],
  },
  {
    id: "kano",
    name: "Kano",
    code: "NG020",
    capital: "Kano",
    zone: "North West",
    created: "27 May 1967",
    summary:
      "One of West Africa’s great historic trading cities; still a commercial powerhouse of northern Nigeria.",
    highlights: ["Ancient city walls and markets", "Major trade centre"],
  },
  {
    id: "katsina",
    name: "Katsina",
    code: "NG021",
    capital: "Katsina",
    zone: "North West",
    created: "23 September 1987",
    summary:
      "A historic Hausa city-state region near the Niger border, with deep roots in scholarship and trade.",
    highlights: ["Created from Kaduna State in 1987", "Borders Niger"],
  },
  {
    id: "kebbi",
    name: "Kebbi",
    code: "NG022",
    capital: "Birnin Kebbi",
    zone: "North West",
    created: "27 August 1991",
    summary:
      "A north-western state along the Niger River, known for rice production and the Argungu fishing heritage.",
    highlights: ["Argungu Fishing Festival", "Created from Sokoto State in 1991"],
  },
  {
    id: "kogi",
    name: "Kogi",
    code: "NG023",
    capital: "Lokoja",
    zone: "North Central",
    created: "27 August 1991",
    summary:
      "Often called the confluence state — where the Niger and Benue rivers meet at Lokoja, a former colonial administrative centre.",
    highlights: ["Niger–Benue confluence", "Created in 1991"],
  },
  {
    id: "kwara",
    name: "Kwara",
    code: "NG024",
    capital: "Ilorin",
    zone: "North Central",
    created: "27 May 1967",
    summary:
      "A north-central state bridging Yoruba, Hausa and other communities, with Ilorin as its capital.",
    highlights: ["Created in 1967", "Ilorin"],
  },
  {
    id: "lagos",
    name: "Lagos",
    code: "NG025",
    capital: "Ikeja",
    zone: "South West",
    created: "27 May 1967",
    summary:
      "Nigeria’s commercial capital and former federal capital — a dense coastal megacity that drives much of the country’s economy and culture.",
    highlights: [
      "Federal capital until 12 December 1991",
      "Largest city by population",
      "Major port and finance hub",
    ],
  },
  {
    id: "nasarawa",
    name: "Nasarawa",
    code: "NG026",
    capital: "Lafia",
    zone: "North Central",
    created: "1 October 1996",
    summary:
      "A central state next to the FCT, with farming communities and growing links to Abuja.",
    highlights: ["Created from Plateau State in 1996", "Borders the FCT"],
  },
  {
    id: "niger",
    name: "Niger",
    code: "NG027",
    capital: "Minna",
    zone: "North Central",
    created: "3 February 1976",
    summary:
      "Nigeria’s largest state by land area, home to the Kainji and Shiroro dams and wide guinea-savannah landscapes.",
    highlights: ["Largest state by land area", "Major hydroelectric dams"],
  },
  {
    id: "ogun",
    name: "Ogun",
    code: "NG028",
    capital: "Abeokuta",
    zone: "South West",
    created: "3 February 1976",
    summary:
      "A south-western industrial corridor state between Lagos and the interior, with Abeokuta as its historic capital.",
    highlights: ["Industrial belt near Lagos", "Olumo Rock in Abeokuta"],
  },
  {
    id: "ondo",
    name: "Ondo",
    code: "NG029",
    capital: "Akure",
    zone: "South West",
    created: "3 February 1976",
    summary:
      "A south-western state with coastline, bitumen deposits, and a mix of Yoruba highland and coastal communities.",
    highlights: ["Bitumen resources", "Atlantic coastline"],
  },
  {
    id: "osun",
    name: "Osun",
    code: "NG030",
    capital: "Osogbo",
    zone: "South West",
    created: "27 August 1991",
    summary:
      "Home to the Osun-Osogbo Sacred Grove, a UNESCO World Heritage Site and centre of Yoruba spiritual tradition.",
    highlights: ["Osun-Osogbo Sacred Grove", "UNESCO World Heritage Site"],
  },
  {
    id: "oyo",
    name: "Oyo",
    code: "NG031",
    capital: "Ibadan",
    zone: "South West",
    created: "3 February 1976",
    summary:
      "Home to Ibadan, one of Africa’s largest historic cities and a long-standing centre of politics, media and education.",
    highlights: ["Ibadan", "Historic Yoruba empire roots"],
  },
  {
    id: "plateau",
    name: "Plateau",
    code: "NG032",
    capital: "Jos",
    zone: "North Central",
    created: "3 February 1976",
    summary:
      "Known for the Jos Plateau’s cooler climate, tin-mining history, and many ethnic communities.",
    highlights: ["Jos Plateau", "Former tin-mining centre"],
  },
  {
    id: "rivers",
    name: "Rivers",
    code: "NG033",
    capital: "Port Harcourt",
    zone: "South South",
    created: "27 May 1967",
    summary:
      "A core Niger Delta oil-and-gas state, with Port Harcourt as a major industrial and port city.",
    highlights: ["Port Harcourt", "Oil and gas industry"],
  },
  {
    id: "sokoto",
    name: "Sokoto",
    code: "NG034",
    capital: "Sokoto",
    zone: "North West",
    created: "3 February 1976",
    summary:
      "Seat of the Sokoto Caliphate’s legacy and a major centre of Islamic scholarship in the north-west.",
    highlights: ["Sokoto Caliphate heritage", "Borders Niger"],
  },
  {
    id: "taraba",
    name: "Taraba",
    code: "NG035",
    capital: "Jalingo",
    zone: "North East",
    created: "27 August 1991",
    summary:
      "A north-eastern state of mountains, valleys and many ethnic groups, including the Mambilla Plateau.",
    highlights: ["Created from Gongola State in 1991", "Mambilla Plateau"],
  },
  {
    id: "yobe",
    name: "Yobe",
    code: "NG036",
    capital: "Damaturu",
    zone: "North East",
    created: "27 August 1991",
    summary:
      "A north-eastern state on the edge of the Sahel, with pastoral and farming communities.",
    highlights: ["Created from Borno State in 1991", "Borders Niger"],
  },
  {
    id: "zamfara",
    name: "Zamfara",
    code: "NG037",
    capital: "Gusau",
    zone: "North West",
    created: "1 October 1996",
    summary:
      "A north-western state with gold-mining areas and a largely agricultural economy.",
    highlights: ["Created from Sokoto State in 1996", "Gold deposits"],
  },
];

/** Map GeoJSON admin1Name → our id */
const NAME_TO_ID: Record<string, string> = {
  Abia: "abia",
  Adamawa: "adamawa",
  "Akwa Ibom": "akwa-ibom",
  Anambra: "anambra",
  Bauchi: "bauchi",
  Bayelsa: "bayelsa",
  Benue: "benue",
  Borno: "borno",
  "Cross River": "cross-river",
  Delta: "delta",
  Ebonyi: "ebonyi",
  Edo: "edo",
  Ekiti: "ekiti",
  Enugu: "enugu",
  "Federal Capital Territory": "fct",
  FCT: "fct",
  Abuja: "fct",
  Gombe: "gombe",
  Imo: "imo",
  Jigawa: "jigawa",
  Kaduna: "kaduna",
  Kano: "kano",
  Katsina: "katsina",
  Kebbi: "kebbi",
  Kogi: "kogi",
  Kwara: "kwara",
  Lagos: "lagos",
  Nasarawa: "nasarawa",
  Niger: "niger",
  Ogun: "ogun",
  Ondo: "ondo",
  Osun: "osun",
  Oyo: "oyo",
  Plateau: "plateau",
  Rivers: "rivers",
  Sokoto: "sokoto",
  Taraba: "taraba",
  Yobe: "yobe",
  Zamfara: "zamfara",
};

export function nameToStateId(name: string): string {
  if (NAME_TO_ID[name]) return NAME_TO_ID[name];
  return name.toLowerCase().replace(/\s+/g, "-");
}

export function getStateById(id: string | null | undefined): StateStory | null {
  if (!id) return null;
  return states.find((s) => s.id === id) ?? null;
}
