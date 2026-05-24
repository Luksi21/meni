"use client";

import { useState } from "react";
import type { Food } from "@/types/menu";
import { formatEUR } from "@/lib/format";
import FoodAccordionContent from "./FoodAccordionContent";
import DishImage from "./DishImage";

export default function FoodCard({ food }: { food: Food }) {
  const [open, setOpen] = useState(false);

  return (
    <article
      className={`overflow-hidden rounded-2xl border bg-white shadow-card transition-all ${
        open ? "border-bay-gold" : "border-bay-sand"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="block w-full text-left"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-bay-shell">
          <DishImage
            src={food.image}
            alt={food.name}
            className="absolute inset-0 h-full w-full"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bay-deep/55 via-transparent to-transparent" />

          <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
            {food.isMvp && (
              <span className="rounded-full bg-bay-coral px-2 py-1 text-[0.6rem] font-bold uppercase tracking-wider text-white shadow-soft">
                MVP
              </span>
            )}
            {food.isSignature && (
              <span className="rounded-full bg-bay-gold px-2 py-1 text-[0.6rem] font-bold uppercase tracking-wider text-bay-deep shadow-soft">
                Signature
              </span>
            )}
          </div>

          <div className="absolute bottom-2 right-3 rounded-full bg-bay-deep/85 px-3 py-1 text-sm font-bold text-bay-shell backdrop-blur">
            {formatEUR(food.price)}
            {food.unit && (
              <span className="ml-1 text-[0.65rem] font-normal opacity-80">
                {food.unit}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-start justify-between gap-3 px-3 py-3">
          <div className="min-w-0 flex-1">
            <h3 className="truncate font-display text-base leading-tight text-bay-ink">
              {food.name}
            </h3>
            {food.shortDescription && (
              <p className="mt-1 line-clamp-2 text-xs text-bay-ink/65">
                {food.shortDescription}
              </p>
            )}
          </div>

          <span
            className={`mt-0.5 h-6 w-6 shrink-0 rounded-full border border-bay-sand text-center text-sm leading-6 text-bay-sea transition-transform ${
              open ? "rotate-180" : ""
            }`}
            aria-hidden
          >
            ▾
          </span>
        </div>
      </button>

      {open && (
        <div className="border-t border-bay-sand bg-bay-shell/60 px-3 py-3">
          <FoodAccordionContent food={food} />
        </div>
      )}
    </article>
  );
}
