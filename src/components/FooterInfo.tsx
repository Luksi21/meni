import { restaurant } from "@/data/restaurant";

export default function FooterInfo() {
  return (
    <footer className="mt-10 bg-bay-deep px-5 py-8 text-center text-bay-shell">
      <p className="font-display text-xl">{restaurant.name}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.3em] text-bay-gold/90">
        {restaurant.location}
      </p>

      <div className="mt-5 space-y-1 text-sm text-bay-shell/85">
        {restaurant.openingHours.map((h) => (
          <p key={h.day}>
            <span className="text-bay-shell/60">{h.day}</span>
            <span className="mx-2">·</span>
            <span>{h.hours}</span>
          </p>
        ))}
        <p>
          <a href={`tel:${restaurant.phone.replace(/\s+/g, "")}`} className="underline-offset-4 hover:underline">
            {restaurant.phone}
          </a>
        </p>
        <p>
          <a href={`mailto:${restaurant.email}`} className="underline-offset-4 hover:underline">
            {restaurant.email}
          </a>
        </p>
      </div>

      <div className="mt-5 flex justify-center gap-4 text-sm">
        <a
          href={restaurant.social.instagram}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-bay-shell/30 px-3 py-1 text-xs uppercase tracking-wider hover:border-bay-gold hover:text-bay-gold"
        >
          Instagram
        </a>
        <a
          href={restaurant.social.facebook}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-bay-shell/30 px-3 py-1 text-xs uppercase tracking-wider hover:border-bay-gold hover:text-bay-gold"
        >
          Facebook
        </a>
      </div>

      <p className="mt-6 text-[0.65rem] uppercase tracking-[0.3em] text-bay-shell/40">
        Scan · Sit · Savour
      </p>
    </footer>
  );
}
