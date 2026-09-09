// Split from lucide-react's "users" — the front figure (head circle + body
// arc) and the back figure (two arc paths) are genuinely separate people. On
// hover they nod in a small greeting, one after the other. Parent needs `group`.
export function AnimatedUsers({ className }: { className?: string }) {
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
      <g className="group-hover:animate-icon-figure-nod-2">
        <path d="M16 3.128a4 4 0 0 1 0 7.744" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      </g>
      <g className="group-hover:animate-icon-figure-nod-1">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
      </g>
    </svg>
  );
}
