export type PriceTier = {
  /** volume in liters, e.g. 0.10, 0.20, 0.75 */
  l: number;
  /** price in EUR */
  price: number;
};

export type DrinkCategoryId =
  | "sparkling-glass"
  | "white-glass"
  | "rose-glass"
  | "red-glass"
  | "sweet-glass"
  | "champagne-glass"
  | "champagne-bottle"
  | "sparkling-bottle"
  | "white-bottle"
  | "red-bottle"
  | "aperitifs"
  | "hot"
  | "mixed"
  | "soft"
  | "water"
  | "draught-beer"
  | "bottled-beer"
  | "craft-beer"
  | "spirits-intl"
  | "spirits-domestic"
  | "liquers-domestic"
  | "cognac"
  | "whisky"
  | "liqueurs"
  | "cocktails"
  | "mocktails";

export type Drink = {
  id: string;
  name: string;
  category: DrinkCategoryId;
  region?: string;
  ingredients?: string;
  prices: PriceTier[];
  abv?: string;
  icon: string;
  shortDescription?: string;
  longDescription?: string;
  originStory?: string;
  servingSuggestion?: string;
  bestWith?: string;
  isSignature?: boolean;
};

export type FoodCategoryId =
  | "cold-starters"
  | "warm-starters"
  | "mains"
  | "traditional-mains"
  | "salads"
  | "kids"
  | "desserts"
  | "sides"
  | "bread";

export type Food = {
  id: string;
  name: string;
  category: FoodCategoryId;
  ingredients?: string;
  price: number;
  /** e.g. "/kg" or "/portion" */
  unit?: string;
  image: string;
  shortDescription?: string;
  longDescription?: string;
  servingStyle?: string;
  allergens?: string[];
  pairing?: string;
  isMvp?: boolean;
  isSignature?: boolean;
};

export type Pizza = {
  id: string;
  name: string;
  ingredients: string;
  price: number;
  image: string;
  shortDescription: string;
  longDescription?: string;
  character?: string;
  isPizzaOfTheDay?: boolean;
  availableUntilHour?: number;
};

export type DrinkCategoryMeta = {
  id: DrinkCategoryId;
  title: string;
  subtitle?: string;
};

export type FoodCategoryMeta = {
  id: FoodCategoryId;
  title: string;
  subtitle?: string;
};
