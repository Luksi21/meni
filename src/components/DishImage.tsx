"use client";

import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  emoji?: string;
};

export default function DishImage({
  src,
  alt,
  className = "",
  priority = false,
  emoji = "🍽️"
}: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-gradient-to-br from-bay-sea via-bay-deep to-bay-ink text-4xl text-bay-shell/80 ${className}`}
      >
        <span aria-hidden>{emoji}</span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}
