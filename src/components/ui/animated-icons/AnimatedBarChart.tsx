// Split from lucide-react's "chart-column" (bar-chart-3 alias): the axis
// path plus three independent bar paths. Each bar grows from its own base,
// staggered left to right. Parent element needs the `group` class.
export function AnimatedBarChart({ className }: { className?: string }) {
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
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <path
        d="M18 17V9"
        style={{ transformBox: "fill-box", transformOrigin: "bottom" }}
        className="group-hover:animate-icon-bar-3"
      />
      <path
        d="M13 17V5"
        style={{ transformBox: "fill-box", transformOrigin: "bottom" }}
        className="group-hover:animate-icon-bar-2"
      />
      <path
        d="M8 17v-3"
        style={{ transformBox: "fill-box", transformOrigin: "bottom" }}
        className="group-hover:animate-icon-bar-1"
      />
    </svg>
  );
}
