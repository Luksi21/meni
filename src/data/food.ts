import type { Food, FoodCategoryMeta } from "@/types/menu";

export const foodCategories: FoodCategoryMeta[] = [
  { id: "cold-starters", title: "Hladna predjela", subtitle: "Cold starters" },
  { id: "warm-starters", title: "Topla predjela", subtitle: "Warm starters" },
  { id: "mains", title: "Glavna jela", subtitle: "Main courses" },
  { id: "traditional-mains", title: "Tradicionalna glavna jela", subtitle: "Traditional mains" },
  { id: "salads", title: "Salate", subtitle: "Salads" },
  { id: "kids", title: "Dječji meni", subtitle: "Kids menu" },
  { id: "desserts", title: "Deserti", subtitle: "Desserts" },
  { id: "sides", title: "Prilozi", subtitle: "Sides" },
  { id: "bread", title: "Kruh", subtitle: "Bread" }
];

const img = (id: string, w = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export const food: Food[] = [
  // ───────── COLD STARTERS ─────────
  {
    id: "cold-fish-platter",
    name: "Hladni riblji tanjur",
    category: "cold-starters",
    ingredients: "Selekcija hladnih ribljih predjela",
    price: 19.1,
    image: img("photo-1559737558-2f5a35f4523b"),
    shortDescription: "Šef-selekcija hladnih ribljih delicija – savršeno za podijeliti.",
    longDescription:
      "Pažljivo komponiran tanjur s dnevnim odabirom hladnih ribljih predjela – tartar, ceviche, dimljena riba i marinirane školjke ovisno o ulovu.",
    isSignature: true,
    pairing: "Malvazija Piquentum, Sacchetto Prosecco"
  },
  {
    id: "tuna-tartar",
    name: "Tuna Tartar",
    category: "cold-starters",
    ingredients: "Krema mango, avokado, naranča, wakame, ikura",
    price: 17.5,
    image: img("photo-1503764654157-72d979d9af2f"),
    shortDescription: "Svježa tuna, mango, avokado, ikura – signature predjelo Tuna Bay.",
    longDescription:
      "Naša najprepoznatljivija ploča – ručno sjeckana svježa tuna s tropskom kremom od manga, avokadom i naranom, finiširana wakame algama i ikura kavijarom.",
    isMvp: true,
    isSignature: true,
    pairing: "Sacchetto Prosecco, Kadum Rose"
  },
  {
    id: "istarski-crostini",
    name: "Istarski Crostini",
    category: "cold-starters",
    ingredients: "Sourdough focaccia, ovčji sir s tartufima, istarska kobasica, divlja rukula",
    price: 16.0,
    image: img("photo-1572441713132-c542fc4fe282"),
    shortDescription: "Domaća focaccia s ovčjim sirom, tartufima i istarskom kobasicom.",
    pairing: "Malvazija Kozlović, Teran Kadum"
  },
  {
    id: "bruschetta",
    name: "Bruschetta",
    category: "cold-starters",
    ingredients: "Rajčica, korijander, luk, limeta, maslinovo ulje",
    price: 13.0,
    image: img("photo-1572695157366-5e585ab2b69f"),
    shortDescription: "Klasika s mediteranskim tvistom – sočna rajčica i korijander."
  },
  {
    id: "istarski-tanjur",
    name: "Istarski tanjur",
    category: "cold-starters",
    ingredients: "Domaći sourdough, pršut, salama, sir, masline, džem od smokve, orasi",
    price: 16.0,
    image: img("photo-1556909114-f6e7ad7d3136"),
    shortDescription: "Plate za podijeliti – sve okuse Istre na jednom tanjuru.",
    isMvp: true,
    pairing: "Teran Kadum"
  },
  {
    id: "ceviche",
    name: "Ceviche",
    category: "cold-starters",
    ingredients: "File bijele ribe / tuna, leche de tigre, huancaina krema, avokado, mango, luk, chilli, wakame",
    price: 19.0,
    image: img("photo-1551782450-a2132b4ba21d"),
    shortDescription: "Peruanski ceviche s istarskim potpisom.",
    longDescription:
      "Svježi file dnevnog ulova (ili tune) marinirani u leche de tigre, posluženi s avokadom, mangom i huancaina kremom – odlična kombinacija svježine i blagog začina.",
    isSignature: true,
    pairing: "Malvazija Piquentum, Aperol Spritz"
  },

  // ───────── WARM STARTERS ─────────
  {
    id: "spaghetti-chittara-bottarga",
    name: "Spaghetti alla Chittara s dagnjama i bottargom",
    category: "warm-starters",
    ingredients: "Dagnje, češnjak, vino, limun, ulje od peršina, bottarga",
    price: 18.5,
    image: img("photo-1551183053-bf91a1d81141"),
    shortDescription: "Ručno rezana tjestenina, dagnje i bottarga – pravi okus mora.",
    pairing: "Malvazija Radovan"
  },
  {
    id: "tagliolini-kozice",
    name: "Tagliolini s kozicama",
    category: "warm-starters",
    ingredients: "Bisque, limunska trava, kozice, cider, chimichurri",
    price: 18.5,
    image: img("photo-1563379926898-05f4575a45d8"),
    shortDescription: "Kozice u aromatičnom bisque-u – fini balans citrusa i zelja."
  },
  {
    id: "tagliatelle-jastog",
    name: "Tagliatelle s jastogom",
    category: "warm-starters",
    ingredients: "Salsa od rajčice, bisque od jastoga, bodljikar",
    price: 43.0,
    image: img("photo-1633237308525-cd587cf71926"),
    shortDescription: "Premium tjestenina s jastogom – za posebne prilike.",
    isSignature: true,
    pairing: "Jermann Vintage Tunina"
  },
  {
    id: "tagliolini-pomodoro",
    name: "Tagliolini Pomodoro & Basilico",
    category: "warm-starters",
    ingredients: "Umak od rajčice, bosiljak",
    price: 13.0,
    image: img("photo-1598866594230-a7c12756260f"),
    shortDescription: "Najjednostavnija i najbolja klasika – domaće rajčice i bosiljak."
  },
  {
    id: "istarski-fuzi",
    name: "Istarski Fuži",
    category: "warm-starters",
    ingredients: "Tuna / sabljarka, inćuni, šeri rajčica, češnjak, peršun, kora limuna",
    price: 24.0,
    image: img("photo-1473093295043-cdd812d0e601"),
    shortDescription: "Autohtoni istarski fuži s ribom dana.",
    isMvp: true,
    pairing: "Malvazija Meneghetti"
  },

  // ───────── MAINS ─────────
  {
    id: "fish-curry",
    name: "Fish Curry",
    category: "mains",
    ingredients: "Bijela riba (dnevni ulov), kokos, curry, chilli, udon, limeta",
    price: 33.0,
    image: img("photo-1604908176997-125f25cc6f3d"),
    shortDescription: "Mediteran susreće Aziju – kokos, curry i svježa bijela riba.",
    longDescription:
      "Komadići dnevne bijele ribe kuhane u kremastom kokos-curry temeljcu, na podlozi udon rezanaca, dovršeno limetom i svježim chillijem.",
    isSignature: true,
    pairing: "Malvazija Radovan, Hugo"
  },
  {
    id: "brancin-zara",
    name: "File brancina sa žara",
    category: "mains",
    ingredients: "Bulgur, blitva, pinjoli, peršin, rotkvica",
    price: 29.0,
    image: img("photo-1590947132387-155cc02f3212"),
    shortDescription: "Klasik s roštilja – fino začinjen i lagan.",
    isMvp: true,
    pairing: "Korak Sauvignon"
  },
  {
    id: "tuna-steak",
    name: "Tuna Steak",
    category: "mains",
    ingredients: "Mrkva, cous-cous, crveni radič, kapari, sezam",
    price: 32.0,
    image: img("photo-1559847844-5315695dadae"),
    shortDescription: "Naš pečat kuće – debeli odrezak tune savršeno spečen.",
    isMvp: true,
    isSignature: true,
    pairing: "Radovan Cabernet Sauvignon"
  },
  {
    id: "tuna-poke",
    name: "Tuna Poke Bowl",
    category: "mains",
    ingredients: "Sushi riža, mango, avokado, shiitake, wakame, edamame, sezam, đumbir, sriracha majoneza",
    price: 28.0,
    image: img("photo-1546069901-ba9599a7e63c"),
    shortDescription: "Premium poke s vrhunskom svježom tunom.",
    isMvp: true,
    pairing: "Sacchetto Prosecco"
  },
  {
    id: "grilana-hobotnica",
    name: "Grilana hobotnica",
    category: "mains",
    ingredients: "Krema od mrkve i anisa, krema od komorača, blitva, kokice kvinoje",
    price: 34.0,
    image: img("photo-1633237308525-cd587cf71926"),
    shortDescription: "Sočna hobotnica s vrtnom kremom – klasik s tvistom.",
    isSignature: true
  },
  {
    id: "steak-au-poivre",
    name: "Steak au Poivre 250g",
    category: "mains",
    ingredients: "Umak od zelenog papra, domaći krumpirići",
    price: 43.0,
    image: img("photo-1546964124-0cce460f38ef"),
    shortDescription: "Sočan biftek u kremastom umaku od zelenog papra.",
    isSignature: true,
    pairing: "Jermann Red Angel"
  },
  {
    id: "premium-burger",
    name: "Premium Burger 100% junetina",
    category: "mains",
    ingredients: "Brie sir, džem od smokve, panceta, luk, rukula, tartufi, majoneza, batat, BBQ",
    price: 24.0,
    image: img("photo-1568901346375-23c9450c58cd"),
    shortDescription: "Naš premium burger – brie, džem od smokve i tartufi.",
    isMvp: true
  },
  {
    id: "ribeye",
    name: "Ribeye odrezak",
    category: "mains",
    ingredients: "Marinada od soje i kruške, sezamovo ulje, mladi luk, sezam, pommes aligot",
    price: 44.0,
    image: img("photo-1600891964092-4316c288032e"),
    shortDescription: "Vrhunski ribeye, azijska marinada, kremasti pommes aligot.",
    isSignature: true,
    pairing: "Meneghetti Merlot"
  },
  {
    id: "iberico-pork",
    name: "Iberico Pork Steak",
    category: "mains",
    ingredients: "Krema od mrkve i zvjezdanog anisa, demi-glace umak, ukiseljene tikvice",
    price: 39.0,
    image: img("photo-1432139509613-5c4255815697"),
    shortDescription: "Iberico svinjetina – orašasti, dimljeni karakter.",
    pairing: "Clai Ottocento"
  },

  // ───────── TRADITIONAL MAINS ─────────
  {
    id: "skampi-zar",
    name: "Škampi sa žara",
    category: "traditional-mains",
    price: 37.0,
    image: img("photo-1559742811-822873691df8"),
    shortDescription: "Jadranski škampi sa žara – samo svježe i limun.",
    isMvp: true
  },
  {
    id: "skampi-buzara",
    name: "Škampi na buzaru",
    category: "traditional-mains",
    ingredients: "Salsa od rajčice, bosiljak, palenta",
    price: 37.0,
    image: img("photo-1611599537845-1c7aca0091c0"),
    shortDescription: "Tradicionalna buzara, kremasta palenta."
  },
  {
    id: "lignja-grill",
    name: "Jadranska lignja na grillu",
    category: "traditional-mains",
    unit: "/kg",
    price: 68.0,
    image: img("photo-1571066811602-716837d681de"),
    shortDescription: "Sezonska jadranska lignja, savršeno pečena."
  },
  {
    id: "fresh-fish-1",
    name: "Dnevno svježa riba – 1. klasa",
    category: "traditional-mains",
    ingredients: "Grill ili al forno · uz prilog blitva i krumpir, povrće sa žara",
    unit: "/kg",
    price: 88.0,
    image: img("photo-1485921325833-c519f76c4927"),
    shortDescription: "Najbolji izbor dana – pripremljen po želji."
  },
  {
    id: "fresh-fish-extra",
    name: "Dnevno svježa riba – ekstra klasa",
    category: "traditional-mains",
    ingredients: "Grill ili al forno · uz prilog blitva i krumpir, povrće sa žara",
    unit: "/kg",
    price: 116.0,
    image: img("photo-1559847844-5315695dadae"),
    shortDescription: "Premium ulov – samo najbolje s naših obala.",
    isSignature: true
  },

  // ───────── SALADS ─────────
  {
    id: "caesar-base",
    name: "Caesar salata",
    category: "salads",
    ingredients: "Krutoni, parmezan, chips od speka, rajčica",
    price: 13.0,
    image: img("photo-1551248429-40975aa4de74"),
    shortDescription: "Klasik – kremasto, slano, hrskavo."
  },
  {
    id: "caesar-chicken",
    name: "Caesar salata s pilećim prsima",
    category: "salads",
    ingredients: "Krutoni, parmezan, chips od speka, rajčica, pileća prsa",
    price: 16.5,
    image: img("photo-1546069901-ba9599a7e63c"),
    shortDescription: "Caesar s grilanim pilećim prsima."
  },
  {
    id: "caesar-tuna",
    name: "Caesar salata s confitiranom tunom",
    category: "salads",
    ingredients: "Krutoni, parmezan, chips od speka, rajčica, confit tuna",
    price: 17.0,
    image: img("photo-1513104890138-7c749659a591"),
    shortDescription: "Naša verzija – sa sporo kuhanom tunom u maslinovom ulju.",
    isSignature: true
  },
  {
    id: "salad-market",
    name: "Šarena salata s tržnice",
    category: "salads",
    ingredients: "Domaći dresing",
    price: 8.0,
    image: img("photo-1540420773420-3366772f4999"),
    shortDescription: "Sezonsko zelje, korjenje i začinsko bilje s lokalne tržnice."
  },

  // ───────── KIDS ─────────
  {
    id: "kids-tagliolini",
    name: "Tagliolini Pomodoro",
    category: "kids",
    ingredients: "Rajčica, bosiljak",
    price: 9.0,
    image: img("photo-1551183053-bf91a1d81141"),
    shortDescription: "Lagana porcija za male goste."
  },
  {
    id: "kids-bolognese",
    name: "Spaghetti Bolognese",
    category: "kids",
    ingredients: "Umak bolognese",
    price: 10.0,
    image: img("photo-1551183053-bf91a1d81141"),
    shortDescription: "Klasični bolognese."
  },
  {
    id: "kids-burger",
    name: "Mini Burger 80g",
    category: "kids",
    ingredients: "Prženi krumpirići, kečap",
    price: 12.0,
    image: img("photo-1568901346375-23c9450c58cd"),
    shortDescription: "Mini izdanje našeg burgera."
  },
  {
    id: "kids-crunchy-chicken",
    name: "Crunchy Chicken Stripes",
    category: "kids",
    ingredients: "Prženi krumpirići, kečap",
    price: 11.0,
    image: img("photo-1562967914-608f82629710"),
    shortDescription: "Hrskave piletine i pomfrit – favorit najmlađih."
  },

  // ───────── DESSERTS ─────────
  {
    id: "basque-cheesecake",
    name: "Baskijski Cheesecake",
    category: "desserts",
    price: 9.0,
    image: img("photo-1567306226416-28f0efdc88ce"),
    shortDescription: "Karamelizirana kora, kremasta srž – instant favorit.",
    isMvp: true
  },
  {
    id: "fruit-tart",
    name: "Voćni Tart",
    category: "desserts",
    price: 7.5,
    image: img("photo-1488477181946-6428a0291777"),
    shortDescription: "Hrskavo tijesto, sezonsko voće, vanilija krema."
  },
  {
    id: "hazelnut-cake",
    name: "Kolač lješnjak",
    category: "desserts",
    price: 11.0,
    image: img("photo-1565958011703-44f9829ba187"),
    shortDescription: "Bogati lješnjak kolač s čokoladnom strukturom."
  },
  {
    id: "eclair-chocolate",
    name: "Éclair čokolada",
    category: "desserts",
    price: 7.5,
    image: img("photo-1551024601-bec78aea704b"),
    shortDescription: "Klasični éclair s tamnom čokoladom."
  },
  {
    id: "lemon-tart",
    name: "Limun Tart",
    category: "desserts",
    price: 8.0,
    image: img("photo-1519915028121-7d3463d20b13"),
    shortDescription: "Citrusno-svjež finiš obroka."
  },

  // ───────── SIDES ─────────
  {
    id: "side-various",
    name: "Razni prilozi",
    category: "sides",
    price: 6.0,
    image: img("photo-1540420773420-3366772f4999"),
    shortDescription: "Po izboru – povrće sa žara, blitva, krumpir."
  },
  {
    id: "side-fries",
    name: "Prženi krumpirići",
    category: "sides",
    ingredients: "Kečap / majoneza",
    price: 7.0,
    image: img("photo-1573080496219-bb080dd4f877"),
    shortDescription: "Hrskavi, ručno rezani."
  },
  {
    id: "side-sweet-potato",
    name: "Prženi batat",
    category: "sides",
    ingredients: "Bacon chips, sriracha majo, parmezan",
    price: 9.8,
    image: img("photo-1573080496219-bb080dd4f877"),
    shortDescription: "Premium batat sa speckom i parmezanom.",
    isSignature: true
  },
  {
    id: "side-sauces",
    name: "Umaci",
    category: "sides",
    ingredients: "Kečap, majoneza, BBQ, sriracha majo, sweet chilli",
    price: 0.9,
    image: img("photo-1607013251379-e6eecfffe234"),
    shortDescription: "Po izboru – cijena po umaku."
  },
  {
    id: "side-blitva",
    name: "Blitva i krumpir",
    category: "sides",
    price: 6.0,
    image: img("photo-1540420773420-3366772f4999"),
    shortDescription: "Klasik dalmatinskih obroka."
  },

  // ───────── BREAD ─────────
  {
    id: "sourdough",
    name: "Domaći sourdough kruh",
    category: "bread",
    price: 2.9,
    image: img("photo-1509440159596-0249088772ff"),
    shortDescription: "Pečen svaki dan u kući."
  }
];
