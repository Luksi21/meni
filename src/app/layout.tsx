import type { Metadata, Viewport } from "next";
import "./globals.css";
import { restaurant } from "@/data/restaurant";

export const metadata: Metadata = {
  title: `${restaurant.name} – Menu`,
  description: restaurant.tagline,
  manifest: "/manifest.webmanifest"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: "#0b2a3a"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap"
        />
      </head>
      <body className="bg-bay-shell text-bay-ink">
        <div className="mx-auto min-h-screen max-w-xl bg-bay-shell shadow-soft">
          {children}
        </div>
      </body>
    </html>
  );
}
