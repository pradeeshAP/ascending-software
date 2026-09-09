// Split from lucide-react's "mail" — the envelope body (rect) and the flap
// (a genuinely separate V-shaped path) are distinct. On hover only the flap
// lifts like it's opening. Parent element needs the `group` class.
export function AnimatedMail({ className }: { className?: string }) {
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
        d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"
        style={{ transformOrigin: "12px 7px" }}
        className="group-hover:animate-icon-flap-open"
      />
      <rect x="2" y="4" width="20" height="16" rx="2" />
    </svg>
  );
}
