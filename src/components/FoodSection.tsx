"use client";

import { useMemo, useState } from "react";
import { food, foodCategories } from "@/data/food";
import FoodCard from "./FoodCard";
import type { FoodCategoryId } from "@/types/menu";

export default function FoodSection() {
  const presentCategories = useMemo(
    () => foodCategories.filter((c) => food.some((f) => f.category === c.id)),
    []
  );
  const [activeCat, setActiveCat] = useState<FoodCategoryId>(presentCategories[0].id);

  const visible = useMemo(() => {
    const byCat = food.filter((f) => f.category === activeCat);
    return [...byCat].sort((a, b) => {
      const aRank = (a.isMvp ? 0 : 1) + (a.isSignature ? 0 : 1);
      const bRank = (b.isMvp ? 0 : 1) + (b.isSignature ? 0 : 1);
      return aRank - bRank;
    });
  }, [activeCat]);

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

        <div className="grid grid-cols-1 gap-4">
          {visible.map((f) => (
            <FoodCard key={f.id} food={f} />
          ))}
        </div>
      </div>
    </section>
  );
}
