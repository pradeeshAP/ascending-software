// Split from lucide-react's "graduation-cap" — the cap panel and the tassel
// string are separate real paths. On hover the cap tips like being tossed
// and the tassel string swings independently. Parent needs the `group` class.
export function AnimatedGraduationCap({ className }: { className?: string }) {
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
        d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        className="group-hover:animate-icon-cap-toss"
      />
      <path
        d="M22 10v6"
        style={{ transformOrigin: "22px 10px" }}
        className="group-hover:animate-icon-tassel-swing"
      />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  );
}
