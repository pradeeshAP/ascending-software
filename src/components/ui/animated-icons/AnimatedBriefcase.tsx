// Split from lucide-react's "briefcase" — the handle path is genuinely
// separate from the case body (rect). On hover the handle/clasp pops up
// slightly like it's about to be picked up. Parent needs the `group` class.
export function AnimatedBriefcase({ className }: { className?: string }) {
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
        d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
        style={{ transformBox: "fill-box", transformOrigin: "bottom" }}
        className="group-hover:animate-icon-clasp-pop"
      />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}
