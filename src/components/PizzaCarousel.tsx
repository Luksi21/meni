"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { pizzas } from "@/data/pizzas";
import { restaurant } from "@/data/restaurant";
import { formatEUR } from "@/lib/format";
import DishImage from "./DishImage";

export default function PizzaCarousel() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hour, setHour] = useState<number | null>(null);

  useEffect(() => {
    setHour(new Date().getHours());
    const t = setInterval(() => setHour(new Date().getHours()), 60_000);
    return () => clearInterval(t);
  }, []);

  const isFreshHour =
    hour === null ? true : hour < restaurant.pizzaOfTheDayCutoffHour;

  const onScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const childWidth = el.firstElementChild?.clientWidth ?? el.clientWidth;
    if (!childWidth) return;
    const idx = Math.round(el.scrollLeft / childWidth);
    setActiveIndex(Math.max(0, Math.min(pizzas.length - 1, idx)));
  }, []);

  const goTo = (idx: number) => {
    const el = trackRef.current;
    if (!el) return;
    const childWidth = el.firstElementChild?.clientWidth ?? el.clientWidth;
    el.scrollTo({ left: childWidth * idx, behavior: "smooth" });
  };

  const next = () => goTo(Math.min(pizzas.length - 1, activeIndex + 1));
  const prev = () => goTo(Math.max(0, activeIndex - 1));

  return (
    <section className="pb-10">
      <div className="px-4 pt-5">
        <p className="text-[0.65rem] uppercase tracking-[0.4em] text-bay-coral">
          Pizza Napoletana
        </p>
        <h2 className="mt-1 font-display text-3xl leading-tight text-bay-deep">
          Sveže iz krušne peći
        </h2>
        <p className="mt-2 text-sm text-bay-ink/70">
          Klasične napolitanke, fior di latte, 90 sekundi na 450 °C. Listaj prstom.
        </p>
      </div>

      <div className="relative mt-4">
        <div
          ref={trackRef}
          onScroll={onScroll}
          className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-4 pb-2"
          style={{ scrollbarWidth: "none" }}
        >
          {pizzas.map((p, i) => {
            const showFreshBadge = p.isPizzaOfTheDay && isFreshHour;
            const showAfterBadge = p.isPizzaOfTheDay && !isFreshHour;
            return (
              <article
                key={p.id}
                className="relative w-[85vw] max-w-[420px] shrink-0 snap-center overflow-hidden rounded-3xl bg-bay-deep text-bay-shell shadow-soft"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${pizzas.length}: ${p.name}`}
              >
                <div className="relative aspect-[4/5] w-full">
                  <DishImage
                    src={p.image}
                    alt={p.name}
                    priority={i === 0}
                    emoji="🍕"
                    className="absolute inset-0 h-full w-full"
                  />
                  <div className="absolute inset-0 bg-hero-gradient" />

                  <div className="absolute left-3 top-3 flex flex-col gap-2">
                    {showFreshBadge && (
                      <span className="rounded-full bg-bay-coral px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-white shadow-soft">
                        Pizza dana · do 17h
                      </span>
                    )}
                    {showAfterBadge && (
                      <span className="rounded-full bg-bay-gold px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-bay-deep shadow-soft">
                        Klasika večeri
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display text-3xl leading-none">{p.name}</h3>
                    <p className="mt-1.5 text-sm text-bay-shell/85">
                      {p.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 px-4 py-4">
                  {p.character && (
                    <p className="text-[0.65rem] uppercase tracking-[0.3em] text-bay-gold">
                      {p.character}
                    </p>
                  )}
                  <p className="text-sm text-bay-shell/80">{p.ingredients}</p>
                  <div className="flex items-end justify-between">
                    <span className="text-2xl font-bold">{formatEUR(p.price)}</span>
                    {p.longDescription && (
                      <details className="group cursor-pointer text-xs uppercase tracking-wider text-bay-gold">
                        <summary className="list-none">Više info ›</summary>
                        <p className="mt-2 text-left text-xs normal-case text-bay-shell/85">
                          {p.longDescription}
                        </p>
                      </details>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-3 flex items-center justify-center gap-4 px-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Prethodna pizza"
            disabled={activeIndex === 0}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-bay-sand bg-white text-bay-deep shadow-card transition-opacity disabled:opacity-30"
          >
            ‹
          </button>

          <div className="flex items-center gap-1.5">
            {pizzas.map((p, i) => (
              <button
                key={p.id}
                type="button"
                aria-label={`Idi na pizzu ${i + 1}`}
                aria-current={i === activeIndex}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all ${
                  i === activeIndex
                    ? "w-6 bg-bay-coral"
                    : "w-2 bg-bay-sand"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Sledeća pizza"
            disabled={activeIndex === pizzas.length - 1}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-bay-sand bg-white text-bay-deep shadow-card transition-opacity disabled:opacity-30"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
