// Split from lucide-react's "monitor-smartphone" — the monitor (paths) and
// the phone (a genuinely separate rect) are distinct devices. On hover they
// power on in sequence, monitor first then phone. Parent needs `group`.
export function AnimatedMonitorSmartphone({ className }: { className?: string }) {
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
      <g style={{ transformBox: "fill-box", transformOrigin: "center" }} className="group-hover:animate-icon-device-pop-1">
        <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" />
        <path d="M10 19v-3.96 3.15" />
        <path d="M7 19h5" />
      </g>
      <rect
        width="6"
        height="10"
        x="16"
        y="12"
        rx="2"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        className="group-hover:animate-icon-device-pop-2"
      />
    </svg>
  );
}
