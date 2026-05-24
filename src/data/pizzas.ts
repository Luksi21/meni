import type { Pizza } from "@/types/menu";

const img = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;

export const pizzas: Pizza[] = [
  {
    id: "margherita",
    name: "Margherita",
    ingredients: "Umak rajčica, Parmigiano Reggiano, mozzarella, bosiljak",
    price: 12.0,
    image: img("photo-1574071318508-1cdbab80d002"),
    shortDescription: "Napuljska klasika u najčistijem izdanju.",
    longDescription:
      "San Marzano rajčica, fior di latte mozzarella, list svježeg bosiljka i kap maslinovog ulja. Pečeno u krušnoj peći na 450 °C, u 90 sekundi.",
    character: "Lagana · klasična · uvijek prava",
    isPizzaOfTheDay: true,
    availableUntilHour: 17
  },
  {
    id: "istriana",
    name: "Istriana",
    ingredients: "Krema od ovčjeg sira i tartufa, fior di latte, taggiasca masline, kapari, inćuni, pikantna salama",
    price: 16.5,
    image: img("photo-1604382354936-07c5d9983bd3"),
    shortDescription: "Naša signature – kremasti tartufi i istarski karakter.",
    longDescription:
      "Spoj kremaste baze od ovčjeg sira i crnih tartufa, slanog inćuna, taggiasca maslina i pikantne salame. Bogata, slojevita, nezaboravna.",
    character: "Bogata · zemljana · signature"
  },
  {
    id: "siciliana",
    name: "Siciliana",
    ingredients: "San Marzano rajčica, fior di latte, taggiasca masline, kapari, inćuni, pikantna salama",
    price: 16.0,
    image: img("photo-1593560708920-61dd98c46a4e"),
    shortDescription: "Mediteranska smjelost – inćuni, kapari, masline.",
    character: "Slano-pikantna · južnjačka"
  },
  {
    id: "mortadela-pistachio",
    name: "Mortadela & Pistachio",
    ingredients: "Mozzarella, pesto pistacija, mortadela, bosiljak",
    price: 16.0,
    image: img("photo-1571407970349-bc81e7e96d47"),
    shortDescription: "Trend s talijanske obale – kremasti pistacijo pesto i tanka mortadela.",
    character: "Kremasta · elegantna · novogeneracijska"
  },
  {
    id: "capricciosa",
    name: "Capricciosa",
    ingredients: "San Marzano rajčica, fior di latte, prosciutto cotto, artičoke, ukiseljeni šampinjoni, taggiasca masline",
    price: 14.9,
    image: img("photo-1565299624946-b28f40a0ae38"),
    shortDescription: "Klasik sa sve – prosciutto cotto, artičoke, šampinjoni.",
    character: "Punog okusa · za svakoga"
  }
];
