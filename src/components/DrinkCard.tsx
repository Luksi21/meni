"use client";

import { useState } from "react";
import type { Drink } from "@/types/menu";
import { formatEUR, formatVolume } from "@/lib/format";
import DrinkAccordionContent from "./DrinkAccordionContent";

export default function DrinkCard({ drink }: { drink: Drink }) {
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
        className="flex w-full items-stretch gap-3 px-3 py-3 text-left"
      >
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-bay-shell text-2xl">
          <span aria-hidden>{drink.icon}</span>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="truncate font-display text-base leading-tight text-bay-ink">
              {drink.name}
              {drink.isSignature && (
                <span className="ml-2 rounded-full bg-bay-gold/20 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wider text-bay-coral">
                  Signature
                </span>
              )}
            </h3>
          </div>
          {drink.region && (
            <p className="mt-0.5 text-xs text-bay-sea/70">{drink.region}</p>
          )}
          {drink.ingredients && (
            <p className="mt-1 line-clamp-2 text-xs text-bay-ink/65">
              {drink.ingredients}
            </p>
          )}
          {drink.abv && (
            <p className="mt-0.5 text-[0.65rem] uppercase tracking-wider text-bay-sea/60">
              {drink.abv}
            </p>
          )}

          <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
            {drink.prices.map((p, i) => (
              <span
                key={i}
                className="text-sm font-semibold text-bay-deep"
              >
                {p.l > 0 && (
                  <span className="mr-1 text-[0.65rem] font-normal uppercase tracking-wider text-bay-sea/70">
                    {formatVolume(p.l)}
                  </span>
                )}
                {formatEUR(p.price)}
              </span>
            ))}
          </div>
        </div>

        <span
          className={`mt-1 h-6 w-6 shrink-0 self-start rounded-full border border-bay-sand text-center text-sm leading-6 text-bay-sea transition-transform ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden
        >
          ▾
        </span>
      </button>

      {open && (
        <div className="border-t border-bay-sand bg-bay-shell/60 px-3 py-3">
          <DrinkAccordionContent drink={drink} />
        </div>
      )}
    </article>
  );
}
