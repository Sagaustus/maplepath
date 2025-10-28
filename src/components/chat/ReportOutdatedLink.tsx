export type ReportOutdatedLinkProps = {
  href?: string;
};

export default function ReportOutdatedLink({ href = "#" }: ReportOutdatedLinkProps) {
  return (
    <a
      href={href}
      className="text-xs font-semibold uppercase tracking-wide text-slate-400 underline-offset-2 transition hover:text-amber-200 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
    >
      Report outdated info
    </a>
  );
}
