"use client";

import { useMemo, useState } from "react";
import { drinkCategories, drinks } from "@/data/drinks";
import DrinkCard from "./DrinkCard";
import type { DrinkCategoryId } from "@/types/menu";

export default function DrinksSection() {
  const presentCategories = useMemo(
    () => drinkCategories.filter((c) => drinks.some((d) => d.category === c.id)),
    []
  );
  const [activeCat, setActiveCat] = useState<DrinkCategoryId>(presentCategories[0].id);

  const visible = useMemo(
    () => drinks.filter((d) => d.category === activeCat),
    [activeCat]
  );

  return (
    <section className="space-y-4 px-4 pb-10 pt-5">
      <div className="-mx-4 overflow-x-auto px-4">
        <div className="flex gap-2 pb-2">
          {presentCategories.map((c) => {
            const isActive = c.id === activeCat;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveCat(c.id)}
                aria-pressed={isActive}
                className={`shrink-0 rounded-full border px-3 py-2 text-xs leading-none transition-all ${
                  isActive
                    ? "border-bay-gold bg-bay-gold/15 text-bay-deep"
                    : "border-bay-sand bg-white text-bay-ink/75"
                }`}
              >
                {c.title}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        {(() => {
          const meta = presentCategories.find((c) => c.id === activeCat)!;
          return (
            <div className="mb-3">
              <h2 className="font-display text-2xl text-bay-deep">{meta.title}</h2>
              {meta.subtitle && (
                <p className="text-xs uppercase tracking-widest text-bay-sea/70">
                  {meta.subtitle}
                </p>
              )}
            </div>
          );
        })()}

        <div className="space-y-3">
          {visible.map((d) => (
            <DrinkCard key={d.id} drink={d} />
          ))}
        </div>
      </div>
    </section>
  );
}
