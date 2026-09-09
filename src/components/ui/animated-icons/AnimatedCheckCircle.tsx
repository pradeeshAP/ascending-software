// Split from lucide-react's "circle-check" (check-circle-2 alias) — the ring
// and checkmark are two real separate elements. On hover the ring pulses and
// the check pops a beat later, like a confirmation registering. Parent
// element needs the `group` class.
export function AnimatedCheckCircle({ className }: { className?: string }) {
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
      <circle
        cx="12"
        cy="12"
        r="10"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        className="group-hover:animate-icon-ring-ping-1"
      />
      <path
        d="m16 9-5.5 5.5L8 12"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        className="group-hover:animate-icon-check-pop"
      />
    </svg>
  );
}
