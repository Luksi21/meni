import { restaurant } from "@/data/restaurant";

export default function MenuHeader() {
  return (
    <header className="relative w-full overflow-hidden bg-bay-deep text-bay-shell">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?auto=format&fit=crop&w=1200&q=60')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bay-deep/40 via-bay-deep/70 to-bay-deep" aria-hidden />

      <div className="relative px-5 pb-6 pt-10 text-center">
        <p className="text-[0.65rem] uppercase tracking-[0.4em] text-bay-gold/90">
          Mediterijan · Premium grill
        </p>
        <h1 className="mt-3 font-display text-4xl leading-none tracking-tight">
          {restaurant.name}
        </h1>
        <p className="mx-auto mt-3 max-w-xs text-sm text-bay-shell/80">
          {restaurant.tagline}
        </p>
      </div>
    </header>
  );
}
