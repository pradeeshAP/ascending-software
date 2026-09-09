// Split from lucide-react's "workflow" (start node rect, connector path, end
// node rect — three real separate elements). On hover the connector "flows"
// and the destination node lights up when the signal arrives. Parent needs
// the `group` class.
export function AnimatedWorkflow({ className }: { className?: string }) {
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
      <rect width="8" height="8" x="3" y="3" rx="2" />
      <path
        d="M7 11v4a2 2 0 0 0 2 2h4"
        strokeDasharray="12"
        className="group-hover:animate-icon-flow-dash"
      />
      <rect width="8" height="8" x="13" y="13" rx="2" className="group-hover:animate-icon-node-light" />
    </svg>
  );
}
