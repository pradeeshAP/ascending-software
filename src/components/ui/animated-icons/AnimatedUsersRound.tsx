// Split from lucide-react's "users-round" (users-2 alias) — front figure
// (head circle + body arc) and back figure (single combined path) are
// genuinely separate people. On hover they nod in a small greeting, one
// after the other. Parent element needs the `group` class.
export function AnimatedUsersRound({ className }: { className?: string }) {
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
      <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" className="group-hover:animate-icon-figure-nod-2" />
      <g className="group-hover:animate-icon-figure-nod-1">
        <path d="M18 21a8 8 0 0 0-16 0" />
        <circle cx="10" cy="8" r="5" />
      </g>
    </svg>
  );
}
