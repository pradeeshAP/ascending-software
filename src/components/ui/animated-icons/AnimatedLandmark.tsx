// Split from lucide-react's "landmark" — the four vertical pillar paths are
// independent from the roof/base. On hover they rise into place, staggered
// left to right. Parent element needs the `group` class.
export function AnimatedLandmark({ className }: { className?: string }) {
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
        d="M6 18v-7"
        style={{ transformBox: "fill-box", transformOrigin: "bottom" }}
        className="group-hover:animate-icon-pillar-rise-1"
      />
      <path
        d="M10 18v-7"
        style={{ transformBox: "fill-box", transformOrigin: "bottom" }}
        className="group-hover:animate-icon-pillar-rise-2"
      />
      <path
        d="M14 18v-7"
        style={{ transformBox: "fill-box", transformOrigin: "bottom" }}
        className="group-hover:animate-icon-pillar-rise-3"
      />
      <path
        d="M18 18v-7"
        style={{ transformBox: "fill-box", transformOrigin: "bottom" }}
        className="group-hover:animate-icon-pillar-rise-4"
      />
      <path d="M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z" />
      <path d="M3 22h18" />
    </svg>
  );
}
