import Link from "next/link";
import { LINKEDIN_URL, NAV_LINKS, SITE_EMAIL, SITE_NAME } from "@/lib/site";

const LINKEDIN_ICON = (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40">
      <div className="max-w-[1200px] mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row gap-12 justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/" className="inline-flex items-center gap-2.5 font-bold text-lg mb-3 text-zinc-900 dark:text-zinc-50">
              <svg
                className="w-6 h-6 text-violet-500"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              {SITE_NAME}
            </Link>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
              Freelance web developer helping businesses build, improve, and
              maintain professional WordPress websites.
            </p>
            <div className="flex gap-3">
              {LINKEDIN_URL ? (
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-150"
                >
                  {LINKEDIN_ICON}
                </a>
              ) : (
                <span
                  aria-label="LinkedIn (coming soon)"
                  title="LinkedIn (coming soon)"
                  className="p-2 rounded-lg text-zinc-300 dark:text-zinc-700 cursor-default"
                >
                  {LINKEDIN_ICON}
                </span>
              )}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
                Pages
              </h3>
              <ul className="flex flex-col gap-2.5">
                {NAV_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
                Connect
              </h3>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <a
                    href={`mailto:${SITE_EMAIL}`}
                    className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                  >
                    Email
                  </a>
                </li>
                <li>
                  {LINKEDIN_URL ? (
                    <a
                      href={LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                    >
                      LinkedIn
                    </a>
                  ) : (
                    <span className="text-sm text-zinc-400 dark:text-zinc-600">
                      LinkedIn (coming soon)
                    </span>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 dark:text-zinc-500">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <p>Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
