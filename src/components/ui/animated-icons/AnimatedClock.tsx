// Split from lucide-react's "clock" (circle face + a separate hand path).
// On hover only the hand ticks, rotating around the face's true center —
// parent element needs the `group` class.
export function AnimatedClock({ className }: { className?: string }) {
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
      <circle cx="12" cy="12" r="10" />
      <path
        d="M12 6v6l4 2"
        style={{ transformOrigin: "12px 12px" }}
        className="group-hover:animate-icon-clock-tick"
      />
    </svg>
  );
}
