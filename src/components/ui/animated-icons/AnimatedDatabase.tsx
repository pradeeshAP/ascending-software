// Split from lucide-react's "database" (top ellipse "lid" + two body-curve
// paths, stacked like disk plates). On hover they pulse top-to-bottom like
// data syncing through the stack. Parent element needs the `group` class.
export function AnimatedDatabase({ className }: { className?: string }) {
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
      <ellipse
        cx="12"
        cy="5"
        rx="9"
        ry="3"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        className="group-hover:animate-icon-db-pulse-1"
      />
      <path
        d="M3 5V19A9 3 0 0 0 21 19V5"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        className="group-hover:animate-icon-db-pulse-3"
      />
      <path
        d="M3 12A9 3 0 0 0 21 12"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        className="group-hover:animate-icon-db-pulse-2"
      />
    </svg>
  );
}
