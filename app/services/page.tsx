import type { Metadata } from "next";
import Link from "next/link";
import ServiceIcon from "@/components/ServiceIcon";
import { SERVICES } from "@/lib/services";

export const metadata: Metadata = { title: "Services" };

export default function Services() {
  return (
    <main>
      <section className="border-b border-zinc-200 dark:border-zinc-800 py-16">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-3">
            Services
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">How I Can Help Your Business</h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
            Practical website development and maintenance services, explained
            in plain terms — what&apos;s included, the problem it solves, and
            what you can expect.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-6">
            {SERVICES.map(({ slug, icon, title, includes, problem, expect }) => (
              <div
                key={slug}
                className="p-7 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-950/60 flex items-center justify-center text-violet-600 dark:text-violet-400 mb-5">
                  <ServiceIcon icon={icon} className="w-6 h-6" />
                </div>
                <h2 className="font-semibold text-xl mb-4">{title}</h2>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wide mb-2">
                    What&apos;s Included
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {includes.map((item) => (
                      <li key={item} className="text-sm text-zinc-700 dark:text-zinc-300 flex items-start gap-2">
                        <span className="text-violet-500 mt-1.5 w-1 h-1 rounded-full bg-violet-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wide mb-1.5">
                    The Problem It Solves
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{problem}</p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wide mb-1.5">
                    What To Expect
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{expect}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Not sure which service fits?</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">
            Tell me about your website or business and I&apos;ll help you figure out the right starting point.
          </p>
          <Link
            href="/contact"
            className="inline-block px-7 py-3.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-colors shadow-lg shadow-violet-500/20"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </section>
    </main>
  );
}
