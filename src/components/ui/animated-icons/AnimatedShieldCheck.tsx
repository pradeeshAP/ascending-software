// Split from lucide-react's "shield-check" — shield outline + a genuinely
// separate checkmark path. On hover the shield glows and the check pops in
// a beat later, like a security check confirming. Parent needs `group`.
export function AnimatedShieldCheck({ className }: { className?: string }) {
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
        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
        className="group-hover:animate-icon-shield-glow"
      />
      <path
        d="m9 12 2 2 4-4"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        className="group-hover:animate-icon-check-pop"
      />
    </svg>
  );
}
