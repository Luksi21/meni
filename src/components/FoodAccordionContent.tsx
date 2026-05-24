import type { Food } from "@/types/menu";

export default function FoodAccordionContent({ food }: { food: Food }) {
  return (
    <div className="space-y-3 text-sm text-bay-ink/85">
      {food.longDescription && <p>{food.longDescription}</p>}

      {food.ingredients && <Row label="Sastojci" value={food.ingredients} />}
      {food.servingStyle && <Row label="Serviranje" value={food.servingStyle} />}
      {food.allergens && food.allergens.length > 0 && (
        <Row label="Alergeni" value={food.allergens.join(", ")} />
      )}
      {food.pairing && <Row label="Preporuka uz piće" value={food.pairing} />}
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
