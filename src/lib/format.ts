export function formatEUR(value: number): string {
  return new Intl.NumberFormat("hr-HR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
}

export function formatVolume(l: number): string {
  if (l === 0) return "";
  if (l >= 1) return `${l.toFixed(2)} L`;
  return `${Math.round(l * 1000)} ml`;
}
