// Split from lucide-react's "sparkles" — main star, small corner mark, and a
// circle are three real independent shapes. On hover each twinkles at a
// staggered moment. Parent element needs the `group` class.
export function AnimatedSparkles({ className }: { className?: string }) {
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
        d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        className="group-hover:animate-icon-sparkle-1"
      />
      <g style={{ transformBox: "fill-box", transformOrigin: "center" }} className="group-hover:animate-icon-sparkle-2">
        <path d="M20 2v4" />
        <path d="M22 4h-4" />
      </g>
      <circle
        cx="4"
        cy="20"
        r="2"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        className="group-hover:animate-icon-sparkle-3"
      />
    </svg>
  );
}
