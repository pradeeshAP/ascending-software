// Split from lucide-react's "trending-up" — the arrowhead corner-bracket and
// the trend zigzag are two real separate paths. On hover the trend line
// draws in, then the arrowhead pops. Parent element needs the `group` class.
export function AnimatedTrendingUp({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path
        d="M16 7h6v6"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        className="group-hover:animate-icon-arrow-pop"
      />
      <path
        d="m22 7-8.5 8.5-5-5L2 17"
        strokeDasharray="26"
        className="group-hover:animate-icon-line-draw"
      />
    </svg>
  );
}
