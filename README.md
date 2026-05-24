# Tuna Bay Grill – Mobile Menu

Premium, mobile-first online menu za restoran **Tuna Bay Grill** (pored Mediterijana). Otvara se sa sajta restorana ili skeniranjem QR koda.

Tehnologije: **Next.js 14 (App Router) + React + TypeScript + Tailwind CSS**.

---

## 1. Lokalno pokretanje

```bash
npm install
npm run dev
```

Otvori [http://localhost:3000](http://localhost:3000) **na telefonu** (ili sa DevTools mobile emulatorom) – meni je dizajniran isključivo mobile-first.

Production build provera:

```bash
npm run build
npm run start
```

---

## 2. Struktura projekta

```
src/
├─ app/
│  ├─ layout.tsx           # html shell, meta, fontovi
│  ├─ page.tsx             # glavni meni (sticky tabs)
│  └─ globals.css          # Tailwind + reset
├─ components/
│  ├─ MenuHeader.tsx
│  ├─ CategoryTabs.tsx     # Piće / Hrana / Pizze
│  ├─ DrinksSection.tsx
│  ├─ DrinkCard.tsx
│  ├─ DrinkAccordionContent.tsx
│  ├─ FoodSection.tsx
│  ├─ FoodCard.tsx
│  ├─ FoodAccordionContent.tsx
│  ├─ PizzaCarousel.tsx    # swipe + dots + arrows
│  └─ FooterInfo.tsx
├─ data/
│  ├─ restaurant.ts        # ime, radno vreme, pizza-of-the-day cutoff
│  ├─ drinks.ts            # SVE piće
│  ├─ food.ts              # SVA hrana
│  └─ pizzas.ts            # SVE pizze
├─ lib/format.ts           # formatiranje cene i ml
└─ types/menu.ts           # TypeScript tipovi
```

Sve cene, sastojci i kategorije se menjaju isključivo u `src/data/*.ts`. UI se ne dira.

---

## 3. Kako dodati / izmeniti stavku menija

### Piće
Otvori `src/data/drinks.ts` i dodaj novi unos u `drinks` array:

```ts
{
  id: "novo-vino",
  name: "Naziv vina",
  category: "white-bottle",       // vidi DrinkCategoryId u types/menu.ts
  region: "Istra / Istria",        // opciono
  prices: [
    { l: 0.10, price: 6.5 },
    { l: 0.20, price: 12.8 },
    { l: 0.75, price: 37.0 }
  ],
  icon: "🍷",
  shortDescription: "Kratak opis u jednoj liniji.",
  longDescription: "Detaljniji opis za accordion.",
  bestWith: "Bijela riba, školjke.",
  isSignature: true
}
```

Za koktele i mocktale: stavi sastojke u `ingredients` razdvojene zarezom — UI ih automatski prikazuje kao recept.

### Hrana
`src/data/food.ts` – isti princip:

```ts
{
  id: "novo-jelo",
  name: "Naziv jela",
  category: "mains",
  ingredients: "...",
  price: 28.0,
  image: "https://images.unsplash.com/photo-XXXXX?auto=format&fit=crop&w=1000&q=70",
  shortDescription: "...",
  longDescription: "...",
  isMvp: true,                    // MVP / najtraženije
  isSignature: true,              // signature jelo
  pairing: "Malvazija Piquentum"  // preporuka uz piće
}
```

MVP i Signature jela se automatski podižu pri vrhu liste i dobijaju vizuelni badge.

### Pizze
`src/data/pizzas.ts`. Samo dodaj objekat u `pizzas` array i automatski ulazi u carousel.

```ts
{
  id: "nova-pizza",
  name: "Naziv",
  ingredients: "...",
  price: 14.0,
  image: "https://images.unsplash.com/photo-XXXXX?...",
  shortDescription: "...",
  character: "Lagana · klasična",
  isPizzaOfTheDay: true,    // dobija "Pizza dana · do 17h" badge
  availableUntilHour: 17
}
```

Sat preseka („Pizza dana") menja se u `src/data/restaurant.ts` → `pizzaOfTheDayCutoffHour`.

---

## 4. Slike

Trenutno se sve slike za hranu i pizzu povlače sa Unsplash CDN-a (besplatno, optimizovano, lazy-loaded). Ako želiš lokalne slike:

1. Stavi fajlove u `public/images/food/...` i `public/images/pizzas/...`
2. U `data/*.ts` zameni URL: `image: "/images/food/tuna-tartar.jpg"`
3. Hostname iz `next.config.mjs` možeš skinuti ako više ne koristiš Unsplash

Sve `next/image` slike su **lazy-loaded** osim prve pizze u carousel-u (priority).

---

## 5. GitHub upload (push)

Iz root foldera (`2naloga/`):

```bash
git init
git add .
git commit -m "Initial: Tuna Bay Grill mobile menu"
git branch -M main

# napravi prazan repo na github.com/<tvoj-username>/tuna-bay-grill
git remote add origin https://github.com/<tvoj-username>/tuna-bay-grill.git
git push -u origin main
```

`.gitignore` već isključuje `node_modules`, `.next`, `.env*`, OS fajlove.

---

## 6. Deploy

### Vercel (preporučeno – 1-click)

1. Idi na [vercel.com/new](https://vercel.com/new)
2. Import tvoj GitHub repo `tuna-bay-grill`
3. Framework: **Next.js** (auto-detect)
4. Build command: `next build` (default)
5. Output: `.next` (default)
6. Klikni **Deploy** – za ~60s dobiješ produkcijski URL tipa `https://tuna-bay-grill.vercel.app`

Svaki sledeći `git push` na `main` automatski deployuje novu verziju.

### Custom domena (npr. `meni.tunabaygrill.me`)

Vercel → Project → Settings → Domains → Add Domain → unesi domenu → kreiraj CNAME zapis kod registratora prema instrukcijama.

### Netlify (alternativa)

```bash
npm i -g netlify-cli
netlify deploy --build --prod
```

### Static export (samo ako nema dinamičkih ruta — ovde sve radi)

```bash
# u next.config.mjs dodaj: output: "export"
npm run build
# rezultat u out/ - upload bilo gde (S3, GitHub Pages, Hetzner, itd.)
```

---

## 7. QR kod

1. Nakon deploy-a uzmi produkcijski URL.
2. Generiši QR na npr. [qr-code-generator.com](https://www.qr-code-generator.com/) ili kroz `npx qrcode "https://meni.tunabaygrill.me"` koji vraća ASCII/SVG.
3. Štampaj i postavi na stolove.

Tip: napravi i kraći `bit.ly` link ili koristi custom subdomen za lepši URL.

---

## 8. Konfiguracija restorana

`src/data/restaurant.ts` — menja se na jednom mestu:

- ime restorana, tagline, lokacija
- telefon, email
- radno vreme (`openingHours[]`)
- `pizzaOfTheDayCutoffHour` (default `17` — posle 17h badge se menja na „Klasika večeri")
- linkovi na Instagram / Facebook

---

## 9. Mobile UX checklist (provereno)

- [x] Mobile-first layout (`max-w-xl`, sticky tabs)
- [x] Veliki tap targeti (svi dugmići ≥ 40 px)
- [x] Bez horizontalnog skrolovanja na sadržaju (samo na chip filterima i pizza carouselu — namerno)
- [x] Accordion / dropdown na pićima i hrani
- [x] Pizza carousel: swipe + dots + arrows (sva tri kontrolna mehanizma)
- [x] Bez auto-rotacije carousel-a
- [x] Lazy-load slika preko `next/image`
- [x] Optimizovane slike (Next image optimizer + Unsplash)
- [x] PWA-ready manifest (`/manifest.webmanifest`)
- [x] Safe-area inset za iPhone notch / home indicator
- [x] Sticky category bar – uvek u dometu palca

---

## 10. Update menija u budućnosti — kratko

1. Otvori `src/data/drinks.ts`, `food.ts` ili `pizzas.ts`.
2. Dodaj / izmeni / izbriši objekat.
3. `git commit -am "menu: update prices"` → `git push`.
4. Vercel deployuje za 60s. Gotovo.

Za promenu boja brenda: `tailwind.config.ts` → `colors.bay.*`.

---

## License / Notes

Slike koje koristi default deploy su sa Unsplash (free for commercial use). Za realnu produkciju preporuka je profesionalna fotografija jela – stavi ih u `public/images/` kako je opisano u sekciji 4.
