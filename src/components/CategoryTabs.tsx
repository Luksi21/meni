"use client";

import { useEffect, useState } from "react";

export type TopCategory = "drinks" | "food" | "pizzas";

const TABS: { id: TopCategory; label: string; sub: string; icon: string }[] = [
  { id: "drinks", label: "Piće", sub: "Drinks", icon: "🍷" },
  { id: "food", label: "Hrana", sub: "Food", icon: "🍽️" },
  { id: "pizzas", label: "Pizze", sub: "Pizza", icon: "🍕" }
];

type Props = {
  active: TopCategory;
  onChange: (next: TopCategory) => void;
};

export default function CategoryTabs({ active, onChange }: Props) {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-30 -mx-1 px-1 transition-all ${
        stuck ? "bg-bay-deep/95 backdrop-blur" : "bg-bay-deep"
      }`}
    >
      <div className="mx-auto flex max-w-xl gap-2 px-3 py-3">
        {TABS.map((t) => {
          const isActive = t.id === active;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => onChange(t.id)}
              aria-pressed={isActive}
              className={`flex-1 rounded-xl px-2 py-2.5 text-center transition-all ${
                isActive
                  ? "bg-bay-gold text-bay-deep shadow-card"
                  : "bg-bay-sea/40 text-bay-shell/80"
              }`}
            >
              <span className="block text-base leading-none" aria-hidden>{t.icon}</span>
              <span className="mt-1 block font-display text-sm leading-none">{t.label}</span>
              <span className="mt-0.5 block text-[0.6rem] uppercase tracking-widest opacity-70">
                {t.sub}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
