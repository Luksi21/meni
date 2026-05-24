"use client";

import { useState } from "react";
import MenuHeader from "@/components/MenuHeader";
import CategoryTabs, { TopCategory } from "@/components/CategoryTabs";
import DrinksSection from "@/components/DrinksSection";
import FoodSection from "@/components/FoodSection";
import PizzaCarousel from "@/components/PizzaCarousel";
import FooterInfo from "@/components/FooterInfo";

export default function HomePage() {
  const [active, setActive] = useState<TopCategory>("food");

  return (
    <main>
      <MenuHeader />
      <CategoryTabs active={active} onChange={setActive} />

      {active === "drinks" && <DrinksSection />}
      {active === "food" && <FoodSection />}
      {active === "pizzas" && <PizzaCarousel />}

      <FooterInfo />
    </main>
  );
}
