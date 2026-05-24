import type { Drink, DrinkCategoryMeta } from "@/types/menu";

export const drinkCategories: DrinkCategoryMeta[] = [
  { id: "sparkling-glass", title: "Pjenušci na čašu", subtitle: "Sparkling wine by the glass" },
  { id: "white-glass", title: "Bijela vina na čašu", subtitle: "White wine by the glass" },
  { id: "rose-glass", title: "Rose vina na čašu", subtitle: "Rosé wine by the glass" },
  { id: "red-glass", title: "Crvena vina na čašu", subtitle: "Red wine by the glass" },
  { id: "sweet-glass", title: "Desertna vina na čašu", subtitle: "Sweet wine by the glass" },
  { id: "champagne-glass", title: "Šampanjci na čašu", subtitle: "Champagne by the glass" },
  { id: "champagne-bottle", title: "Šampanjci", subtitle: "Champagne (bottle)" },
  { id: "sparkling-bottle", title: "Pjenušci", subtitle: "Sekt (bottle)" },
  { id: "white-bottle", title: "Bijela vina", subtitle: "White wine (bottle)" },
  { id: "red-bottle", title: "Crvena vina", subtitle: "Red wine (bottle)" },
  { id: "aperitifs", title: "Aperitivi", subtitle: "Aperitifs & bitters" },
  { id: "cocktails", title: "Cocktails", subtitle: "Signature cocktails" },
  { id: "mocktails", title: "Bezalkoholni kokteli", subtitle: "Non-alcoholic cocktails" },
  { id: "hot", title: "Topli napitci", subtitle: "Hot drinks" },
  { id: "mixed", title: "Miješana pića", subtitle: "Coolers & breezers" },
  { id: "soft", title: "Bezalkoholna pića", subtitle: "Soft drinks" },
  { id: "water", title: "Voda", subtitle: "Water" },
  { id: "draught-beer", title: "Točeno pivo", subtitle: "Draught beer" },
  { id: "bottled-beer", title: "Pivo u boci", subtitle: "Bottled beer" },
  { id: "craft-beer", title: "Lokal craft beer", subtitle: "Local craft bottled beer" },
  { id: "spirits-intl", title: "Strana žestoka pića", subtitle: "International spirits" },
  { id: "spirits-domestic", title: "Domaća žestoka pića", subtitle: "Domestic spirits" },
  { id: "liquers-domestic", title: "Domaći likeri", subtitle: "Domestic liqueurs" },
  { id: "cognac", title: "Konjak & brandy", subtitle: "Cognac & brandy" },
  { id: "whisky", title: "Viski", subtitle: "Whisky" },
  { id: "liqueurs", title: "Likeri", subtitle: "Liqueurs" }
];

export const drinks: Drink[] = [
  // ───────── SPARKLING BY GLASS ─────────
  {
    id: "sacchetto-prosecco",
    name: "Sacchetto Prosecco di Conegliano",
    category: "sparkling-glass",
    region: "Italy",
    prices: [
      { l: 0.1, price: 6.5 },
      { l: 0.2, price: 11.5 },
      { l: 0.75, price: 39.9 }
    ],
    icon: "🥂",
    shortDescription: "Italijanski Prosecco s laganim mehurićima i svježom voćnom notom.",
    longDescription:
      "Sacchetto Prosecco di Conegliano dolazi iz srca Veneta. Sortne Glera grožđice donose miris jabuke i bijelog cvijeta, dok perlaž ostaje fin i postojan.",
    originStory: "Conegliano, sjeveroistočna Italija – kolijevka Prosecca.",
    servingSuggestion: "Servira se dobro rashlađeno (6–8 °C) u tulipan čaši.",
    bestWith: "Aperitiv, lagana riblja predjela, ostrige."
  },
  // ───────── WHITE BY GLASS ─────────
  {
    id: "malvazija-kadum-glass",
    name: "Malvazija Kadum",
    category: "white-glass",
    region: "Istra / Istria",
    prices: [
      { l: 0.1, price: 6.5 },
      { l: 0.2, price: 12.8 },
      { l: 0.75, price: 37.0 }
    ],
    icon: "🍷",
    shortDescription: "Klasična istarska malvazija – svježa, mineralna, lagano cvjetna.",
    longDescription:
      "Vinarija Kadum njeguje malvaziju iz srca istarskog vinogorja. Lagana, pitka i ujednačena, idealna za toplo mediteransko podne.",
    bestWith: "Bijela riba, školjke, lagane tjestenine.",
    servingSuggestion: "Servirati na 10–12 °C."
  },
  {
    id: "malvazija-radovan-glass",
    name: "Malvazija Radovan",
    category: "white-glass",
    region: "Istra / Istria",
    prices: [
      { l: 0.1, price: 6.5 },
      { l: 0.2, price: 12.8 },
      { l: 0.75, price: 37.0 }
    ],
    icon: "🍷",
    shortDescription: "Mineralna malvazija s notama bijele breskve i bademovog cvijeta.",
    bestWith: "Riblji carpaccio, ceviche, lignje na žaru."
  },
  {
    id: "malvazija-piquentum-glass",
    name: "Malvazija Piquentum",
    category: "white-glass",
    region: "Istra / Istria",
    prices: [
      { l: 0.1, price: 8.0 },
      { l: 0.2, price: 15.5 },
      { l: 0.75, price: 58.0 }
    ],
    icon: "🍷",
    shortDescription: "Strukturirana malvazija punog tijela – izražena mineralnost i dugačka završnica.",
    bestWith: "Pečena bijela riba, tjestenine s plodovima mora.",
    isSignature: true
  },
  // ───────── ROSE BY GLASS ─────────
  {
    id: "kadum-rose-glass",
    name: "Kadum Rose",
    category: "rose-glass",
    region: "Istra / Istria",
    prices: [
      { l: 0.1, price: 6.5 },
      { l: 0.2, price: 12.8 },
      { l: 0.75, price: 39.0 }
    ],
    icon: "🌹",
    shortDescription: "Suhi rosé s notama jagode i divlje ruže.",
    bestWith: "Tuna tartar, salate, lagana predjela."
  },
  // ───────── RED BY GLASS ─────────
  {
    id: "radovan-cab-glass",
    name: "Radovan Cabernet Sauvignon",
    category: "red-glass",
    region: "Istra / Istria",
    prices: [
      { l: 0.1, price: 8.5 },
      { l: 0.2, price: 16.5 },
      { l: 0.75, price: 67.0 }
    ],
    icon: "🍷",
    shortDescription: "Punog tijela, s notama crnog ribiza i začina.",
    bestWith: "Steak, divljač, zreli sirevi."
  },
  {
    id: "teran-kadum-glass",
    name: "Teran Kadum",
    category: "red-glass",
    region: "Istra / Istria",
    prices: [
      { l: 0.1, price: 8.5 },
      { l: 0.2, price: 16.5 },
      { l: 0.75, price: 62.0 }
    ],
    icon: "🍷",
    shortDescription: "Autohtoni istarski teran – tamnih voćnih nota i mineralan.",
    bestWith: "Pršut, divljač, jela s tartufima."
  },
  // ───────── SWEET BY GLASS ─────────
  {
    id: "kadum-muscat",
    name: "Kadum Muscat",
    category: "sweet-glass",
    region: "Istra / Istria",
    prices: [
      { l: 0.1, price: 5.5 },
      { l: 0.5, price: 36.0 }
    ],
    icon: "🍯",
    shortDescription: "Aromatični Muscat – med, naranča i bijelo cvijeće.",
    bestWith: "Deserti, voćni tarteri, sirevi s plemenitom plijesni."
  },
  {
    id: "cossetto-muscat",
    name: "Cossetto Muscat",
    category: "sweet-glass",
    region: "Istra / Istria",
    prices: [
      { l: 0.1, price: 5.5 },
      { l: 0.2, price: 9.9 },
      { l: 0.75, price: 36.0 }
    ],
    icon: "🍯",
    shortDescription: "Sladak i mirisan, s notama meda i kandiranog voća."
  },
  // ───────── CHAMPAGNE BY GLASS ─────────
  {
    id: "louis-barthelemy-glass",
    name: "Louis Barthelemy Champagne Amethyste Brut",
    category: "champagne-glass",
    region: "France",
    prices: [
      { l: 0.1, price: 12.0 },
      { l: 0.75, price: 98.0 }
    ],
    icon: "🍾",
    shortDescription: "Elegantan brut šampanjac – brioš, agrumi, lagana mineralnost.",
    isSignature: true,
    bestWith: "Ostrige, tuna tartar, signature aperitiv."
  },
  // ───────── CHAMPAGNE BOTTLE ─────────
  {
    id: "moet-chandon",
    name: "Moët & Chandon",
    category: "champagne-bottle",
    region: "France",
    prices: [{ l: 0.75, price: 155.0 }],
    icon: "🍾",
    shortDescription: "Ikonični Moët & Chandon – savršen za posebne prilike.",
    isSignature: true
  },
  // ───────── SPARKLING BOTTLE ─────────
  {
    id: "piquentum-sparkling",
    name: "Pjenušac Piquentum",
    category: "sparkling-bottle",
    region: "Istra / Istria",
    prices: [{ l: 0.75, price: 80.0 }],
    icon: "🥂",
    shortDescription: "Istarski sekt s finim mehurićima i elegantnom strukturom."
  },
  // ───────── WHITE BOTTLE ─────────
  ...[
    ["malvazija-kadum-bottle", "Malvazija Kadum", 37.0],
    ["malvazija-radovan-bottle", "Malvazija Radovan", 37.0],
    ["malvazija-kozlovic", "Malvazija Kozlović", 44.0],
    ["malvazija-meneghetti", "Malvazija Meneghetti", 48.0],
    ["radovan-chardonnay", "Radovan Chardonnay", 48.0],
    ["radovan-sauvignon", "Radovan Sauvignon Blanc", 48.0],
    ["korak-sauvignon-kamenice", "Korak Sauvignon Kamenice", 78.0],
    ["jermann-vintage-tunina", "Jermann Vintage Tunina", 138.0],
    ["drouhin-laforet-bourgogne-chardonnay", "Drouhin Laforêt Bourgogne Chardonnay", 68.0],
    ["jm-brocard-chablis", "J.M. Brocard Chablis", 69.0],
    ["jermann-pinot-grigio", "Jermann Pinot Grigio", 71.0]
  ].map<Drink>(([id, name, price]) => ({
    id: id as string,
    name: name as string,
    category: "white-bottle",
    prices: [{ l: 0.75, price: price as number }],
    icon: "🍷"
  })),
  // ───────── RED BOTTLE ─────────
  ...[
    ["radovan-cab-bottle", "Radovan Cabernet Sauvignon", 67.0],
    ["kadum-teran-bottle", "Kadum Teran", 62.0],
    ["meneghetti-merlot", "Meneghetti Merlot", 57.0],
    ["jermann-red-angel", "Jermann Red Angel", 105.0],
    ["clai-ottocento", "Clai Ottocento", 85.0]
  ].map<Drink>(([id, name, price]) => ({
    id: id as string,
    name: name as string,
    category: "red-bottle",
    prices: [{ l: 0.75, price: price as number }],
    icon: "🍷"
  })),
  // ───────── APERITIFS ─────────
  {
    id: "campari-orange",
    name: "Campari & Orange Juice",
    category: "aperitifs",
    prices: [{ l: 0.13, price: 5.8 }],
    icon: "🍹",
    ingredients: "Campari, svježi sok od naranče",
    shortDescription: "Klasik – gorko-slatko osvježenje."
  },
  {
    id: "campari-soda",
    name: "Campari Soda",
    category: "aperitifs",
    prices: [{ l: 0.13, price: 5.3 }],
    icon: "🍹",
    ingredients: "Campari, soda",
    shortDescription: "Lagani gorki aperitiv."
  },
  {
    id: "pelinkovac",
    name: "Pelinkovac",
    category: "aperitifs",
    abv: "30%",
    prices: [{ l: 0.03, price: 3.7 }],
    icon: "🥃",
    shortDescription: "Tradicionalni gorki liker na bazi pelina."
  },
  {
    id: "amaro-ramazzotti",
    name: "Amaro Ramazzotti",
    category: "aperitifs",
    prices: [{ l: 0.03, price: 5.4 }],
    icon: "🥃",
    shortDescription: "Talijanski amaro – note naranče, mirhe i začina."
  },
  {
    id: "jagermeister",
    name: "Jägermeister",
    category: "aperitifs",
    abv: "35%",
    prices: [{ l: 0.03, price: 5.6 }],
    icon: "🥃",
    shortDescription: "Hladan herbal shot – 56 biljaka."
  },
  {
    id: "martini-bianco-rosso",
    name: "Martini Bianco / Rosso",
    category: "aperitifs",
    prices: [{ l: 0.1, price: 7.0 }],
    icon: "🍸",
    shortDescription: "Klasičan vermouth – sa kockom leda i kriškom naranče."
  },
  // ───────── HOT DRINKS ─────────
  ...[
    ["espresso", "Espresso", 2.5],
    ["macchiato", "Macchiato", 2.4],
    ["macchiato-large", "Macchiato Large", 3.7],
    ["cappuccino", "Cappuccino", 2.4],
    ["cappuccino-large", "Cappuccino Large", 3.7],
    ["kava-sa-slagom", "Kava sa šlagom", 3.8],
    ["latte-macchiato", "Latte Macchiato", 6.0],
    ["kava-bez-kofeina", "Kava bez kofeina / Decaf", 3.0],
    ["espresso-americano", "Espresso Americano", 2.5]
  ].map<Drink>(([id, name, price]) => ({
    id: id as string,
    name: name as string,
    category: "hot",
    prices: [{ l: 0, price: price as number }],
    icon: "☕"
  })),
  // ───────── MIXED ─────────
  {
    id: "apfelschorle",
    name: "Apfelschorle",
    category: "mixed",
    ingredients: "Sok od jabuke i mineralna voda",
    prices: [
      { l: 0.3, price: 3.9 },
      { l: 0.5, price: 5.5 }
    ],
    icon: "🍏"
  },
  {
    id: "speci",
    name: "Špeci",
    category: "mixed",
    ingredients: "Fanta & Cola",
    prices: [
      { l: 0.3, price: 4.0 },
      { l: 0.5, price: 7.3 }
    ],
    icon: "🥤"
  },
  {
    id: "radler-sprite",
    name: "Radler sa Spritom",
    category: "mixed",
    ingredients: "Pivo & Sprite",
    prices: [
      { l: 0.3, price: 3.9 },
      { l: 0.5, price: 5.5 }
    ],
    icon: "🍺"
  },
  {
    id: "mismas",
    name: "Mis maš",
    category: "mixed",
    ingredients: "Fanta & crveno vino",
    prices: [
      { l: 0.3, price: 7.3 },
      { l: 0.5, price: 9.1 }
    ],
    icon: "🍷"
  },
  {
    id: "bambus",
    name: "Bambus",
    category: "mixed",
    ingredients: "Crveno vino & Cola",
    prices: [
      { l: 0.3, price: 4.1 },
      { l: 0.5, price: 7.3 }
    ],
    icon: "🍷"
  },
  {
    id: "gemist",
    name: "Gemišt",
    category: "mixed",
    ingredients: "Bijelo vino & mineralna",
    prices: [
      { l: 0.3, price: 3.4 },
      { l: 0.5, price: 7.3 }
    ],
    icon: "🍷"
  },
  // ───────── SOFT DRINKS ─────────
  {
    id: "cola-fanta-sprite-zero",
    name: "Cola / Fanta / Sprite / Cola Zero",
    category: "soft",
    prices: [
      { l: 0.3, price: 3.9 },
      { l: 0.5, price: 5.5 }
    ],
    icon: "🥤"
  },
  {
    id: "cola-fanta-sprite-can",
    name: "Cola / Fanta / Sprite",
    category: "soft",
    prices: [{ l: 0.33, price: 5.0 }],
    icon: "🥫"
  },
  {
    id: "tonic-water",
    name: "Tonic Water",
    category: "soft",
    prices: [{ l: 0.25, price: 4.3 }],
    icon: "🍸"
  },
  {
    id: "bitter-lemon",
    name: "Bitter Lemon",
    category: "soft",
    prices: [{ l: 0.25, price: 4.3 }],
    icon: "🍋"
  },
  {
    id: "peach-ice-tea",
    name: "Breskva ledeni čaj",
    category: "soft",
    prices: [
      { l: 0.33, price: 4.3 },
      { l: 0.5, price: 5.0 }
    ],
    icon: "🍑"
  },
  {
    id: "fruit-juices",
    name: "Voćni sokovi",
    category: "soft",
    prices: [
      { l: 0.3, price: 4.0 },
      { l: 0.5, price: 5.0 }
    ],
    icon: "🧃"
  },
  {
    id: "red-bull",
    name: "Red Bull",
    category: "soft",
    prices: [{ l: 0.25, price: 6.5 }],
    icon: "⚡"
  },
  // ───────── WATER ─────────
  {
    id: "san-pellegrino",
    name: "San Pellegrino",
    category: "water",
    ingredients: "Gazirana mineralna voda",
    prices: [
      { l: 0.25, price: 3.9 },
      { l: 0.75, price: 7.1 }
    ],
    icon: "💧"
  },
  {
    id: "aqua-panna",
    name: "Aqua Panna",
    category: "water",
    ingredients: "Negazirana mineralna voda",
    prices: [
      { l: 0.25, price: 3.9 },
      { l: 0.75, price: 7.1 }
    ],
    icon: "💧"
  },
  // ───────── DRAUGHT BEER ─────────
  {
    id: "paulaner-draught",
    name: "Paulaner",
    category: "draught-beer",
    abv: "5.0%",
    prices: [
      { l: 0.3, price: 4.3 },
      { l: 0.5, price: 6.5 }
    ],
    icon: "🍺",
    shortDescription: "Bavarski lager – meka pjena, blago hmeljna završnica."
  },
  // ───────── BOTTLED BEER ─────────
  {
    id: "heineken",
    name: "Heineken",
    category: "bottled-beer",
    abv: "5.0%",
    prices: [{ l: 0.33, price: 5.5 }],
    icon: "🍺"
  },
  {
    id: "paulaner-munchener",
    name: "Paulaner Münchener Hell",
    category: "bottled-beer",
    abv: "4.9%",
    prices: [{ l: 0.33, price: 6.0 }],
    icon: "🍺"
  },
  {
    id: "rebel-cerny",
    name: "Rebel Černy",
    category: "bottled-beer",
    abv: "4.7%",
    prices: [{ l: 0.5, price: 6.8 }],
    icon: "🍺",
    shortDescription: "Češko tamno pivo – pržene kore i karamel."
  },
  {
    id: "paulaner-weissbier",
    name: "Paulaner Weissbier",
    category: "bottled-beer",
    prices: [{ l: 0.5, price: 7.0 }],
    icon: "🍺",
    shortDescription: "Pšenično pivo – banana, klinčić, kremasta tekstura."
  },
  // ───────── CRAFT BEER ─────────
  {
    id: "bura-optimist",
    name: "Bura Brew Optimist Golding Ale",
    category: "craft-beer",
    abv: "5.4%",
    prices: [{ l: 0.33, price: 6.8 }],
    icon: "🍻",
    isSignature: true
  },
  {
    id: "bura-tornado",
    name: "Bura Brew Tornado IPA",
    category: "craft-beer",
    abv: "6.1%",
    prices: [{ l: 0.33, price: 7.8 }],
    icon: "🍻",
    shortDescription: "Istarska IPA – tropsko voće i smolasti hmelj.",
    isSignature: true
  },
  {
    id: "bura-trippin",
    name: "Bura Brew Trippin' Tripel",
    category: "craft-beer",
    abv: "8.1%",
    prices: [{ l: 0.33, price: 9.8 }],
    icon: "🍻",
    shortDescription: "Belgijski tripel – med, začini, snažno tijelo."
  },
  // ───────── INTL SPIRITS ─────────
  {
    id: "smirnoff",
    name: "Vodka Smirnoff",
    category: "spirits-intl",
    abv: "40%",
    prices: [{ l: 0.03, price: 5.0 }],
    icon: "🥃"
  },
  {
    id: "bombay",
    name: "Bombay Sapphire",
    category: "spirits-intl",
    abv: "47%",
    prices: [{ l: 0.03, price: 5.8 }],
    icon: "🥃"
  },
  {
    id: "bacardi-white",
    name: "Bacardi Rum White",
    category: "spirits-intl",
    abv: "40%",
    prices: [{ l: 0.03, price: 5.8 }],
    icon: "🥃"
  },
  {
    id: "zacapa-23",
    name: "Ron Zacapa 23 YO",
    category: "spirits-intl",
    abv: "40%",
    prices: [{ l: 0.03, price: 10.0 }],
    icon: "🥃",
    isSignature: true,
    shortDescription: "Premium rum, starenje sustavom solera – med, vanilija, dim."
  },
  {
    id: "cuervo-silver",
    name: "Tequila Cuervo Silver",
    category: "spirits-intl",
    abv: "38%",
    prices: [{ l: 0.03, price: 5.0 }],
    icon: "🥃"
  },
  // ───────── DOMESTIC SPIRITS ─────────
  {
    id: "travarica",
    name: "Travarica / Herbal Brandy",
    category: "spirits-domestic",
    abv: "40%",
    prices: [{ l: 0.03, price: 3.7 }],
    icon: "🥃"
  },
  {
    id: "lozovaca",
    name: "Lozovača / Grape Brandy",
    category: "spirits-domestic",
    abv: "40%",
    prices: [{ l: 0.03, price: 3.7 }],
    icon: "🥃"
  },
  {
    id: "medica",
    name: "Medica / Honey Brandy",
    category: "spirits-domestic",
    abv: "40%",
    prices: [{ l: 0.03, price: 3.7 }],
    icon: "🥃"
  },
  // ───────── DOMESTIC LIQUEURS ─────────
  {
    id: "kruskovac",
    name: "Kruškovac",
    category: "liquers-domestic",
    abv: "25%",
    prices: [{ l: 0.03, price: 3.7 }],
    icon: "🍐"
  },
  // ───────── COGNAC ─────────
  {
    id: "martell-vs",
    name: "Martell V.S.",
    category: "cognac",
    abv: "40%",
    prices: [{ l: 0.03, price: 8.0 }],
    icon: "🥃",
    shortDescription: "Mladi francuski konjak – breskva, vanilija, lagani hrast."
  },
  // ───────── WHISKY ─────────
  {
    id: "ballantines",
    name: "Ballantine's",
    category: "whisky",
    abv: "40%",
    prices: [{ l: 0.03, price: 5.0 }],
    icon: "🥃"
  },
  {
    id: "johnnie-red",
    name: "Johnnie Walker Red Label",
    category: "whisky",
    abv: "40%",
    prices: [{ l: 0.03, price: 5.8 }],
    icon: "🥃"
  },
  {
    id: "jack-daniels",
    name: "Jack Daniel's",
    category: "whisky",
    abv: "40%",
    prices: [{ l: 0.03, price: 7.5 }],
    icon: "🥃"
  },
  // ───────── LIQUEURS ─────────
  {
    id: "malibu",
    name: "Malibu",
    category: "liqueurs",
    abv: "21%",
    prices: [{ l: 0.03, price: 5.5 }],
    icon: "🥥"
  },
  {
    id: "baileys",
    name: "Baileys Irish Cream",
    category: "liqueurs",
    abv: "17%",
    prices: [{ l: 0.03, price: 6.5 }],
    icon: "🥃"
  },
  {
    id: "amaretto-saronno",
    name: "Amaretto di Saronno",
    category: "liqueurs",
    abv: "28%",
    prices: [{ l: 0.03, price: 6.0 }],
    icon: "🥃"
  },
  {
    id: "cointreau",
    name: "Cointreau",
    category: "liqueurs",
    abv: "40%",
    prices: [{ l: 0.03, price: 6.5 }],
    icon: "🍊"
  },
  {
    id: "sambuca",
    name: "Sambuca",
    category: "liqueurs",
    abv: "40%",
    prices: [{ l: 0.03, price: 6.0 }],
    icon: "🥃"
  },
  // ───────── COCKTAILS ─────────
  {
    id: "mojito",
    name: "Mojito",
    category: "cocktails",
    ingredients: "Havana Club, fresh lime, fresh mint, sugar, sparkling water",
    prices: [{ l: 0, price: 12.5 }],
    icon: "🌿",
    isSignature: true,
    shortDescription: "Kubanski klasik – metvica, limeta, bijeli rum.",
    longDescription:
      "Mojito je rođen na Kubi i ostao jedan od najprepoznatljivijih koktela svijeta. Kombinacija svježe metvice, limete i Havana rum-a daje savršenu ravnotežu svježine i karaktera.",
    servingSuggestion: "Servira se u high-ball čaši s gomilom crushed leda."
  },
  {
    id: "negroni",
    name: "Negroni",
    category: "cocktails",
    ingredients: "Gin, Campari, Martini Rosso",
    prices: [{ l: 0, price: 12.5 }],
    icon: "🍸",
    isSignature: true,
    shortDescription: "Talijanski aperitiv – gorak, suh, sofisticiran.",
    longDescription:
      "Nastao 1919. u Firenci. Tri jednaka dijela gina, Camparija i slatkog vermouta. Servira se u staromodnoj čaši s kockom leda i korom naranče.",
    servingSuggestion: "Old fashioned čaša, velika kocka leda, kora naranče."
  },
  {
    id: "aperol-spritz",
    name: "Aperol Spritz",
    category: "cocktails",
    ingredients: "Aperol, Prosecco, soda",
    prices: [{ l: 0, price: 8.5 }],
    icon: "🍊",
    shortDescription: "Najprodavaniji aperitiv na obali – lagano, gorko-narančasto.",
    servingSuggestion: "Vinska čaša, puno leda, kriška naranče."
  },
  {
    id: "hugo",
    name: "Hugo",
    category: "cocktails",
    ingredients: "Prosecco, sirup od bazge, mineralna, metvica",
    prices: [{ l: 0, price: 8.5 }],
    icon: "🌼",
    shortDescription: "Cvjetni, lagani aperitiv s notama bazge i metvice."
  },
  // ───────── MOCKTAILS ─────────
  {
    id: "baby-strawberry-colada",
    name: "Baby Strawberry Colada",
    category: "mocktails",
    ingredients: "Sirup od jagode, sirup od kokosa, sok od ananasa, limeta",
    prices: [{ l: 0, price: 8.0 }],
    icon: "🍓",
    shortDescription: "Voćni, kremasti tropski osvježivač – bez alkohola."
  },
  {
    id: "fruity",
    name: "Fruity",
    category: "mocktails",
    ingredients: "Sirup od jagode, sirup od breskve, sok od naranče i ananasa, limeta, vrhnje",
    prices: [{ l: 0, price: 8.0 }],
    icon: "🍑",
    shortDescription: "Bogati voćni mocktail s kremastom završnicom."
  },
  {
    id: "monkey-business",
    name: "Monkey Business",
    category: "mocktails",
    ingredients: "Sirup od banane, sok od ananasa, vrhnje",
    prices: [{ l: 0, price: 8.0 }],
    icon: "🍌",
    shortDescription: "Banana + ananas + vrhnje – omiljeni izbor najmlađih gostiju."
  }
];
