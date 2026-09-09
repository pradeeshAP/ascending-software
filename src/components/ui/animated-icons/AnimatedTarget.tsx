// Split from lucide-react's "target" (three concentric, independent circles).
// On hover the rings ping outward in sequence, like a radar/target lock.
// Parent element needs the `group` class.
export function AnimatedTarget({ className }: { className?: string }) {
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
        className="group-hover:animate-icon-ring-ping-3"
      />
      <circle
        cx="12"
        cy="12"
        r="6"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        className="group-hover:animate-icon-ring-ping-2"
      />
      <circle
        cx="12"
        cy="12"
        r="2"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        className="group-hover:animate-icon-ring-ping-1"
      />
    </svg>
  );
}
