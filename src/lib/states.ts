export type StateStory = {
  id: string;
  name: string;
  code: string;
  slogan?: string;
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
    slogan: "God's Own State",
    capital: "Umuahia",
    zone: "South East",
    created: "27 August 1991",
    summary:
      "A south-eastern state known for trade, especially around Aba, one of Nigeria’s major commercial hubs. Aba’s workshops turn out shoes, garments and leather goods under the “Made in Aba” banner, while Umuahia serves as the quieter administrative capital.",
    highlights: ["Created from Imo State in 1991", "Commercial centre in Aba"],
  },
  {
    id: "adamawa",
    name: "Adamawa",
    code: "NG002",
    slogan: "Land of Beauty",
    capital: "Yola",
    zone: "North East",
    created: "27 August 1991",
    summary:
      "A north-eastern state along the Cameroon border, with diverse ethnic groups and highland landscapes. The Benue River runs past Yola, and the Mandara Mountains in the north hold the Sukur Cultural Landscape, a UNESCO World Heritage Site.",
    highlights: [
      "Created from Gongola State in 1991",
      "Borders Cameroon",
      "Sukur Cultural Landscape",
    ],
  },
  {
    id: "akwa-ibom",
    name: "Akwa Ibom",
    code: "NG003",
    slogan: "Land of Promise",
    capital: "Uyo",
    zone: "South South",
    created: "23 September 1987",
    summary:
      "An oil-producing coastal state in the South South, with a growing urban centre in Uyo. Its Atlantic shoreline, palm-fringed beaches and steady investment in roads and an airport have made it one of the region’s more visible success stories.",
    highlights: [
      "Created from Cross River State in 1987",
      "Atlantic coastline",
    ],
  },
  {
    id: "anambra",
    name: "Anambra",
    code: "NG004",
    slogan: "Light of the Nation",
    capital: "Awka",
    zone: "South East",
    created: "3 February 1976",
    summary:
      "A densely populated south-eastern state and a historic centre of trade, with Onitsha as a major market city on the Niger. Nnewi is a well-known manufacturing town, especially for motor parts, and Awka has long been associated with blacksmithing and craft.",
    highlights: [
      "Onitsha market",
      "Strong commercial culture",
      "Nnewi manufacturing hub",
    ],
  },
  {
    id: "bauchi",
    name: "Bauchi",
    code: "NG005",
    slogan: "Pearl of Tourism",
    capital: "Bauchi",
    zone: "North East",
    created: "3 February 1976",
    summary:
      "A north-eastern state that includes Yankari Game Reserve, one of Nigeria’s best-known wildlife areas. Visitors go for elephants, baboons and the Wikki Warm Springs, while the state itself sits on the savannah with a mix of farming and pastoral communities.",
    highlights: [
      "Yankari Game Reserve",
      "Wikki Warm Springs",
      "Created in 1976",
    ],
  },
  {
    id: "bayelsa",
    name: "Bayelsa",
    code: "NG006",
    slogan: "Pride of the Nation",
    capital: "Yenagoa",
    zone: "South South",
    created: "1 October 1996",
    summary:
      "A Niger Delta state defined by waterways, oil production, and Ijaw cultural heritage. Much of its land is creeks, mangroves and swamp, and Oloibiri, where Nigeria’s first commercial oil well was drilled in the 1950s, lies within the state.",
    highlights: [
      "Created from Rivers State in 1996",
      "Core Niger Delta state",
      "Oloibiri oil heritage",
    ],
  },
  {
    id: "benue",
    name: "Benue",
    code: "NG007",
    slogan: "Food Basket of the Nation",
    capital: "Makurdi",
    zone: "North Central",
    created: "3 February 1976",
    summary:
      "Often called the “food basket of the nation” for its large-scale farming along the Benue River. Yams, rice, sorghum and citrus are staples of its fertile plains, and the state is home mainly to the Tiv, Idoma and Igede peoples.",
    highlights: [
      "Major agricultural producer",
      "Benue River",
      "Tiv and Idoma heartlands",
    ],
  },
  {
    id: "borno",
    name: "Borno",
    code: "NG008",
    slogan: "Home of Peace",
    capital: "Maiduguri",
    zone: "North East",
    created: "3 February 1976",
    summary:
      "Nigeria’s north-easternmost state, with a long history as a centre of the Kanem-Bornu world and trade toward the Sahel. It touches Lake Chad and shares borders with Cameroon, Chad and Niger, and the Kanuri people carry one of the region’s oldest state traditions.",
    highlights: [
      "Historic Kanem-Bornu region",
      "Borders Cameroon, Chad and Niger",
      "Lake Chad basin",
    ],
  },
  {
    id: "cross-river",
    name: "Cross River",
    code: "NG009",
    slogan: "The People's Paradise",
    capital: "Calabar",
    zone: "South South",
    created: "27 May 1967",
    summary:
      "A coastal and forested south-southern state, known for Calabar’s carnival and national parks. Calabar was an important colonial-era port, and the state’s rainforest and Obudu highlands shelter rare wildlife such as the Cross River gorilla.",
    highlights: [
      "Calabar Carnival",
      "Cross River National Park",
      "Obudu Plateau",
    ],
  },
  {
    id: "delta",
    name: "Delta",
    code: "NG010",
    slogan: "The Big Heart",
    capital: "Asaba",
    zone: "South South",
    created: "27 August 1991",
    summary:
      "A major oil-producing state in the Niger Delta, with a mix of coastal, riverine and upland communities. Its peoples include the Urhobo, Itsekiri, Ijaw, Isoko and Anioma Igbo, and Warri is a key port and oil-services city alongside the capital, Asaba, on the Niger.",
    highlights: [
      "Created from Bendel State in 1991",
      "Asaba and Warri",
      "Many ethnic groups",
    ],
  },
  {
    id: "ebonyi",
    name: "Ebonyi",
    code: "NG011",
    slogan: "Salt of the Nation",
    capital: "Abakaliki",
    zone: "South East",
    created: "1 October 1996",
    summary:
      "A south-eastern state known for agriculture, especially rice, with Abakaliki as its capital. Salt lakes at Okposi and Uburu have supplied salt for generations, and the state’s farmland feeds markets well beyond the South East.",
    highlights: ["Created in 1996", "Rice and salt production"],
  },
  {
    id: "edo",
    name: "Edo",
    code: "NG012",
    slogan: "Heart Beat of the Nation",
    capital: "Benin City",
    zone: "South South",
    created: "27 August 1991",
    summary:
      "Home to Benin City, one of West Africa’s historic royal and artistic centres, famous for the Benin Bronzes. The Oba of Benin remains a respected traditional ruler, and the old kingdom’s earthworks and brass-casting guilds still shape the city’s identity.",
    highlights: [
      "Created from Bendel State in 1991",
      "Benin Kingdom heritage",
      "Benin Bronzes",
    ],
  },
  {
    id: "ekiti",
    name: "Ekiti",
    code: "NG013",
    slogan: "Fountain of Knowledge",
    capital: "Ado-Ekiti",
    zone: "South West",
    created: "1 October 1996",
    summary:
      "A south-western state known for hills, education, and a strong Yoruba cultural identity. Rocky uplands and rolling farmland give it a distinctive landscape, and Ikogosi Warm Springs, where warm and cold streams meet, is its best-known attraction.",
    highlights: [
      "Created from Ondo State in 1996",
      "Reputation for education",
      "Ikogosi Warm Springs",
    ],
  },
  {
    id: "enugu",
    name: "Enugu",
    code: "NG014",
    slogan: "Coal City State",
    capital: "Enugu",
    zone: "South East",
    created: "27 August 1991",
    summary:
      "Once the capital of the Eastern Region and a historic coal-mining centre; still a major south-eastern city. Its hills and cooler climate set it apart, and Nsukka in the north is home to the University of Nigeria.",
    highlights: [
      "Former coal city",
      "Eastern Region capital legacy",
      "University of Nigeria, Nsukka",
    ],
  },
  {
    id: "fct",
    name: "Federal Capital Territory",
    code: "NG015",
    slogan: "Centre of Unity",
    capital: "Abuja",
    zone: "North Central",
    created: "3 February 1976",
    summary:
      "Purpose-built federal capital territory. Abuja became Nigeria’s capital city on 12 December 1991, chosen partly for its central location and neutrality among the country’s regions. The planned city is dominated by the granite outcrop of Aso Rock.",
    highlights: [
      "Created 3 February 1976",
      "Seat of government since 1991",
      "Aso Rock",
    ],
  },
  {
    id: "gombe",
    name: "Gombe",
    code: "NG016",
    slogan: "Jewel in the Savannah",
    capital: "Gombe",
    zone: "North East",
    created: "1 October 1996",
    summary:
      "A north-eastern state at a crossroads of trade and farming between the savannah and the highlands. The Tangale Hills rise in the south, and the Dadin Kowa Dam supports irrigation and fishing across the area.",
    highlights: [
      "Created from Bauchi State in 1996",
      "Agricultural economy",
      "Dadin Kowa Dam",
    ],
  },
  {
    id: "imo",
    name: "Imo",
    code: "NG017",
    slogan: "Eastern Heartland",
    capital: "Owerri",
    zone: "South East",
    created: "3 February 1976",
    summary:
      "A compact south-eastern state with Owerri as a lively urban and cultural centre. Oguta Lake and its surrounding communities draw visitors, and the state has both oil and gas activity and a strong tradition of trade and entrepreneurship.",
    highlights: [
      "Created in 1976",
      "Owerri as the state capital",
      "Oguta Lake",
    ],
  },
  {
    id: "jigawa",
    name: "Jigawa",
    code: "NG018",
    slogan: "The New World",
    capital: "Dutse",
    zone: "North West",
    created: "27 August 1991",
    summary:
      "A north-western state bordered by Niger Republic, with an economy rooted in agriculture. Millet, sesame and irrigated crops dominate, and the Hadejia-Nguru wetlands to the east are an important habitat for migratory birds.",
    highlights: [
      "Created from Kano State in 1991",
      "Borders Niger",
      "Hadejia-Nguru wetlands",
    ],
  },
  {
    id: "kaduna",
    name: "Kaduna",
    code: "NG019",
    slogan: "Centre of Learning",
    capital: "Kaduna",
    zone: "North West",
    created: "27 May 1967",
    summary:
      "A major northern political and military centre, and a historic railway and industrial hub. Zaria, home to Ahmadu Bello University, is a long-standing seat of learning, and the Nok culture, known for some of Africa’s oldest terracotta sculptures, is linked to the area.",
    highlights: [
      "Created as North-Central State in 1967",
      "Diverse population",
      "Nok culture",
    ],
  },
  {
    id: "kano",
    name: "Kano",
    code: "NG020",
    slogan: "Centre of Commerce",
    capital: "Kano",
    zone: "North West",
    created: "27 May 1967",
    summary:
      "One of West Africa’s great historic trading cities; still a commercial powerhouse of northern Nigeria. Its old city walls, Kurmi Market and centuries-old indigo dye pits reflect a trading tradition stretching back across the Sahara.",
    highlights: [
      "Ancient city walls and markets",
      "Major trade centre",
      "Kofar Mata dye pits",
    ],
  },
  {
    id: "katsina",
    name: "Katsina",
    code: "NG021",
    slogan: "Home of Hospitality",
    capital: "Katsina",
    zone: "North West",
    created: "23 September 1987",
    summary:
      "A historic Hausa city-state region near the Niger border, with deep roots in scholarship and trade. Daura, in the north of the state, is traditionally regarded as a cradle of the Hausa people, and Katsina city still keeps its old walls and the Gobarau Minaret.",
    highlights: [
      "Created from Kaduna State in 1987",
      "Borders Niger",
      "Gobarau Minaret",
    ],
  },
  {
    id: "kebbi",
    name: "Kebbi",
    code: "NG022",
    slogan: "Land of Equity",
    capital: "Birnin Kebbi",
    zone: "North West",
    created: "27 August 1991",
    summary:
      "A north-western state along the Niger River, known for rice production and the Argungu fishing heritage. The annual Argungu Fishing Festival, where thousands wade into the river with hand nets, is one of northern Nigeria’s best-known cultural events.",
    highlights: [
      "Argungu Fishing Festival",
      "Created from Sokoto State in 1991",
      "Rice production",
    ],
  },
  {
    id: "kogi",
    name: "Kogi",
    code: "NG023",
    slogan: "Confluence State",
    capital: "Lokoja",
    zone: "North Central",
    created: "27 August 1991",
    summary:
      "Often called the confluence state — where the Niger and Benue rivers meet at Lokoja, a former colonial administrative centre. The state is also home to the Ajaokuta Steel Complex, a long-running national industrial project, and to Mount Patti overlooking Lokoja.",
    highlights: [
      "Niger–Benue confluence",
      "Created in 1991",
      "Ajaokuta Steel Complex",
    ],
  },
  {
    id: "kwara",
    name: "Kwara",
    code: "NG024",
    slogan: "State of Harmony",
    capital: "Ilorin",
    zone: "North Central",
    created: "27 May 1967",
    summary:
      "A north-central state bridging Yoruba, Hausa and other communities, with Ilorin as its capital. Ilorin Emirate reflects this blend of cultures, and natural sites such as Owu Falls draw visitors to the state.",
    highlights: ["Created in 1967", "Ilorin Emirate", "Owu Falls"],
  },
  {
    id: "lagos",
    name: "Lagos",
    code: "NG025",
    slogan: "Centre of Excellence",
    capital: "Ikeja",
    zone: "South West",
    created: "27 May 1967",
    summary:
      "Nigeria’s commercial capital and former federal capital — a dense coastal megacity that drives much of the country’s economy and culture. Despite being the smallest state by area, it is home to major ports, Nollywood, a large financial sector and a huge, fast-moving population.",
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
    slogan: "Home of Solid Minerals",
    capital: "Lafia",
    zone: "North Central",
    created: "1 October 1996",
    summary:
      "A central state next to the FCT, with farming communities and growing links to Abuja. Solid minerals feature in its economy, and Farin Ruwa Falls near Wamba is among the tallest waterfalls in the country.",
    highlights: [
      "Created from Plateau State in 1996",
      "Borders the FCT",
      "Farin Ruwa Falls",
    ],
  },
  {
    id: "niger",
    name: "Niger",
    code: "NG027",
    slogan: "The Power State",
    capital: "Minna",
    zone: "North Central",
    created: "3 February 1976",
    summary:
      "Nigeria’s largest state by land area, home to the Kainji and Shiroro dams and wide guinea-savannah landscapes. Its dams supply a large share of the country’s hydroelectric power, and Zuma Rock, the great monolith near Abuja, stands on its territory.",
    highlights: [
      "Largest state by land area",
      "Major hydroelectric dams",
      "Zuma Rock",
    ],
  },
  {
    id: "ogun",
    name: "Ogun",
    code: "NG028",
    slogan: "Gateway State",
    capital: "Abeokuta",
    zone: "South West",
    created: "3 February 1976",
    summary:
      "A south-western industrial corridor state between Lagos and the interior, with Abeokuta as its historic capital. Cement, manufacturing and printing cluster along the Lagos corridor, while Olumo Rock and the ancient Sungbo’s Eredo earthworks in Ijebu-Ode anchor its heritage.",
    highlights: [
      "Industrial belt near Lagos",
      "Olumo Rock in Abeokuta",
      "Sungbo’s Eredo",
    ],
  },
  {
    id: "ondo",
    name: "Ondo",
    code: "NG029",
    slogan: "Sunshine State",
    capital: "Akure",
    zone: "South West",
    created: "3 February 1976",
    summary:
      "A south-western state with coastline, bitumen deposits, and a mix of Yoruba highland and coastal communities. Cocoa is a key cash crop, the Ilaje coast has creeks and beaches, and the Idanre Hills are a striking landmark of the interior.",
    highlights: ["Bitumen resources", "Atlantic coastline", "Idanre Hills"],
  },
  {
    id: "osun",
    name: "Osun",
    code: "NG030",
    slogan: "State of the Living Spring",
    capital: "Osogbo",
    zone: "South West",
    created: "27 August 1991",
    summary:
      "Home to the Osun-Osogbo Sacred Grove, a UNESCO World Heritage Site and centre of Yoruba spiritual tradition. Ile-Ife, regarded by many Yoruba as their ancestral home, also lies in the state, and the annual Osun-Osogbo Festival draws visitors from around the world.",
    highlights: [
      "Osun-Osogbo Sacred Grove",
      "UNESCO World Heritage Site",
      "Ile-Ife",
    ],
  },
  {
    id: "oyo",
    name: "Oyo",
    code: "NG031",
    slogan: "Pacesetter State",
    capital: "Ibadan",
    zone: "South West",
    created: "3 February 1976",
    summary:
      "Home to Ibadan, one of Africa’s largest historic cities and a long-standing centre of politics, media and education. The University of Ibadan is among Nigeria’s oldest, and the town of Oyo preserves the legacy of the powerful Oyo Empire and the Alaafin.",
    highlights: [
      "Ibadan",
      "Historic Yoruba empire roots",
      "University of Ibadan",
    ],
  },
  {
    id: "plateau",
    name: "Plateau",
    code: "NG032",
    slogan: "Home of Peace and Tourism",
    capital: "Jos",
    zone: "North Central",
    created: "3 February 1976",
    summary:
      "Known for the Jos Plateau’s cooler climate, tin-mining history, and many ethnic communities. Rocky hills, waterfalls such as Assop Falls, and productive vegetable and potato farms give the state a landscape unlike most of the north.",
    highlights: ["Jos Plateau", "Former tin-mining centre", "Assop Falls"],
  },
  {
    id: "rivers",
    name: "Rivers",
    code: "NG033",
    slogan: "Treasure Base of the Nation",
    capital: "Port Harcourt",
    zone: "South South",
    created: "27 May 1967",
    summary:
      "A core Niger Delta oil-and-gas state, with Port Harcourt as a major industrial and port city. Often nicknamed the Garden City, Port Harcourt anchors refineries, petrochemicals and LNG activity around Bonny Island, and the state is home to peoples such as the Ijaw, Ogoni and Ikwerre.",
    highlights: ["Port Harcourt", "Oil and gas industry", "Bonny Island LNG"],
  },
  {
    id: "sokoto",
    name: "Sokoto",
    code: "NG034",
    slogan: "Seat of the Caliphate",
    capital: "Sokoto",
    zone: "North West",
    created: "3 February 1976",
    summary:
      "Seat of the Sokoto Caliphate’s legacy and a major centre of Islamic scholarship in the north-west. Founded in the early 19th century under Usman dan Fodio, the caliphate shaped the region’s politics, and the Sultan of Sokoto remains a leading religious figure for Nigerian Muslims.",
    highlights: [
      "Sokoto Caliphate heritage",
      "Borders Niger",
      "Sultan of Sokoto",
    ],
  },
  {
    id: "taraba",
    name: "Taraba",
    code: "NG035",
    slogan: "Nature's Gift to the Nation",
    capital: "Jalingo",
    zone: "North East",
    created: "27 August 1991",
    summary:
      "A north-eastern state of mountains, valleys and many ethnic groups, including the Mambilla Plateau. Gashaka-Gumti National Park, Nigeria’s largest, lies partly here, and Chappal Waddi, the country’s highest point, rises near the Cameroon border.",
    highlights: [
      "Created from Gongola State in 1991",
      "Mambilla Plateau",
      "Chappal Waddi",
    ],
  },
  {
    id: "yobe",
    name: "Yobe",
    code: "NG036",
    slogan: "Pride of the Sahel",
    capital: "Damaturu",
    zone: "North East",
    created: "27 August 1991",
    summary:
      "A north-eastern state on the edge of the Sahel, with pastoral and farming communities. Gum arabic, livestock and the seasonal wetlands around Nguru are central to livelihoods, and the state borders Niger to the north.",
    highlights: [
      "Created from Borno State in 1991",
      "Borders Niger",
      "Gum arabic",
    ],
  },
  {
    id: "zamfara",
    name: "Zamfara",
    code: "NG037",
    slogan: "Farming is Our Pride",
    capital: "Gusau",
    zone: "North West",
    created: "1 October 1996",
    summary:
      "A north-western state with gold-mining areas and a largely agricultural economy. The area was once the seat of the historic Zamfara kingdom, and its savannah farmland produces grains, cotton and groundnuts.",
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
