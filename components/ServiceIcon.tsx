import { Service } from "@/lib/services";

const PATHS: Record<Service["icon"], string> = {
  wordpress: "M4 4h16v16H4z M4 9h16 M9 9v11 M4 4l5 5 M20 4l-6 6",
  redesign: "M11 4H4v7 M4 4l16 16 M20 13v7h-7",
  maintenance:
    "M14.7 6.3a4 4 0 00-5.4 5.4l-6 6V20h2.3l6-6a4 4 0 005.4-5.4l-2.1 2.1-2-2z",
  landing: "M4 5h16v3H4z M4 11h10v8H4z M16 11h4v8h-4z",
  speed: "M12 2v4 M12 18v4 M4.9 4.9l2.9 2.9 M16.2 16.2l2.9 2.9 M2 12h4 M18 12h4 M4.9 19.1l2.9-2.9 M16.2 7.8l2.9-2.9",
  automation: "M12 2a10 10 0 100 20 10 10 0 000-20z M12 7v5l3 3",
};

export default function ServiceIcon({ icon, className = "w-6 h-6" }: { icon: Service["icon"]; className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d={PATHS[icon]} />
    </svg>
  );
}
