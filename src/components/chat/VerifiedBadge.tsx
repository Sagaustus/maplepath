export type VerifiedBadgeProps = {
  verifiedOn: string;
};

export default function VerifiedBadge({ verifiedOn }: VerifiedBadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-100">
      <span aria-hidden>✅</span>
      Verified {verifiedOn}
    </span>
  );
}
