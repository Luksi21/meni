import type { Drink } from "@/types/menu";

export default function DrinkAccordionContent({ drink }: { drink: Drink }) {
  const showCocktailRecipe =
    drink.category === "cocktails" || drink.category === "mocktails";

  return (
    <div className="space-y-3 text-sm text-bay-ink/85">
      {drink.shortDescription && (
        <p className="font-medium text-bay-ink">{drink.shortDescription}</p>
      )}
      {drink.longDescription && <p>{drink.longDescription}</p>}

      {showCocktailRecipe && drink.ingredients && (
        <div className="rounded-xl bg-white p-3">
          <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-bay-sea/70">
            Recept / Recipe
          </p>
          <ul className="mt-1 space-y-1">
            {drink.ingredients.split(",").map((line, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-bay-gold" />
                <span>{line.trim()}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {!showCocktailRecipe && drink.ingredients && (
        <Row label="Sastojci" value={drink.ingredients} />
      )}

      {drink.originStory && <Row label="Porijeklo" value={drink.originStory} />}
      {drink.servingSuggestion && (
        <Row label="Serviranje" value={drink.servingSuggestion} />
      )}
      {drink.bestWith && <Row label="Najbolje uz" value={drink.bestWith} />}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-bay-sea/70">
        {label}
      </p>
      <p className="mt-0.5">{value}</p>
    </div>
  );
}
