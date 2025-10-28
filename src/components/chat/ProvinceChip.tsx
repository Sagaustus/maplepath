export type ProvinceChipProps = {
  province?: string;
  city?: string;
};

export default function ProvinceChip({ province, city }: ProvinceChipProps) {
  const hasLocation = Boolean(province || city);
  const label = [city, province].filter(Boolean).join(", ") || "Location unknown";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide ${
        hasLocation
          ? "border-amber-300/60 bg-amber-300/10 text-amber-100"
          : "border-slate-800 bg-slate-900/60 text-slate-400"
      }`}
      aria-live="polite"
    >
      <span aria-hidden>📍</span>
      {label}
    </span>
  );
}
