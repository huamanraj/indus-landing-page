"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

export default function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);
  const [parallaxPx, setParallaxPx] = useState(22);
  const [wordmarkOpacity, setWordmarkOpacity] = useState(0.0);

  const reduceMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false
    );
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    const el = footerRef.current;
    if (!el) return;

    let raf = 0;

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || 1;

        // progress: 0 when footer is below viewport, 1 when footer is mostly in view
        const visible = Math.min(vh, Math.max(0, vh - rect.top));
        const progress = Math.max(
          0,
          Math.min(1, visible / Math.max(1, Math.min(vh, rect.height)))
        );

        // Parallax: start slightly lower, rise as you scroll into footer
        const y = 26 - progress * 26; // px
        setParallaxPx(y);

        // Reveal: fade in with progress but stay subtle
        setWordmarkOpacity(Math.min(0.18, progress * 0.22));
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reduceMotion]);

  return (
    <footer
      ref={footerRef}
      className="footer-parallax bg-[#050708] border-t border-border-light pt-20 pb-10 overflow-hidden"
      aria-label="Site footer"
    >
      {/* ambient accent */}
      <div className="absolute inset-x-0 bottom-0 h-[240px] bg-gradient-to-t from-[rgba(99,242,154,0.06)] to-transparent pointer-events-none z-0" />
      <div className="absolute inset-0 pointer-events-none z-0 [background:radial-gradient(900px_320px_at_50%_0%,rgba(255,255,255,0.06),transparent_60%)]" />

      {/* parallax wordmark */}
      <div
        className="footer-wordmark"
        style={
          {
            "--footer-parallax": `${parallaxPx}px`,
            opacity: reduceMotion ? 0.14 : wordmarkOpacity,
          } as React.CSSProperties
        }
        aria-hidden="true"
      >
        MERCURY
      </div>

      <div className="container max-w-[var(--container-width)] mx-auto px-6 relative z-10">
        {/* Top */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12">
          <div className="lg:col-span-5">
            <Link
              href="#"
              className="flex items-center gap-2 font-bold text-xl text-white no-underline mb-4"
            >
              <div className="w-6 h-6 bg-accent-primary rounded-md shadow-[0_0_0_1px_rgba(99,242,154,0.18),0_0_24px_rgba(99,242,154,0.12)]" />
              MERCURY
            </Link>
            <p className="text-[14px] text-text-secondary leading-[1.7] max-w-[46ch]">
              Enterprise-grade conversational AI infrastructure: voice agents,
              observability, and secure deployments.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-[var(--radius-lg)] border border-border-light bg-[rgba(255,255,255,0.02)] p-5 md:p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <div className="text-white font-semibold text-[14px]">
                    Stay in the loop
                  </div>
                  <div className="text-text-muted text-[13px] mt-1">
                    Product updates, release notes, and security announcements.
                  </div>
                </div>

                <form
                  className="flex w-full md:w-auto gap-3"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    className="w-full md:w-[280px] rounded-[var(--radius-md)] border border-border-light bg-[rgba(0,0,0,0.25)] px-4 py-2 text-[14px] text-text-primary placeholder:text-text-muted outline-none focus:border-border-active focus:shadow-[0_0_0_3px_var(--accent-glow)]"
                    aria-label="Email address"
                  />
                  <button
                    type="submit"
                    className="rounded-[var(--radius-md)] bg-accent-primary text-[#06110a] font-semibold text-[14px] px-4 py-2 hover:brightness-105 transition"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12">
          <div>
            <h4 className="text-[14px] text-white mb-4 font-semibold">
              Product
            </h4>
            <ul className="list-none p-0 space-y-3">
              {/* ...existing links, updated styling... */}
              <li>
                <Link
                  href="#"
                  className="text-text-secondary text-[14px] hover:text-accent-primary transition-colors"
                >
                  Agents
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-text-secondary text-[14px] hover:text-accent-primary transition-colors"
                >
                  Phone Numbers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-text-secondary text-[14px] hover:text-accent-primary transition-colors"
                >
                  Observability
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-text-secondary text-[14px] hover:text-accent-primary transition-colors"
                >
                  Integrations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[14px] text-white mb-4 font-semibold">
              Company
            </h4>
            <ul className="list-none p-0 space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-text-secondary text-[14px] hover:text-accent-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-text-secondary text-[14px] hover:text-accent-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-text-secondary text-[14px] hover:text-accent-primary transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-text-secondary text-[14px] hover:text-accent-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[14px] text-white mb-4 font-semibold">
              Developers
            </h4>
            <ul className="list-none p-0 space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-text-secondary text-[14px] hover:text-accent-primary transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-text-secondary text-[14px] hover:text-accent-primary transition-colors"
                >
                  API Reference
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-text-secondary text-[14px] hover:text-accent-primary transition-colors"
                >
                  Status
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-text-secondary text-[14px] hover:text-accent-primary transition-colors"
                >
                  GitHub
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[14px] text-white mb-4 font-semibold">Legal</h4>
            <ul className="list-none p-0 space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-text-secondary text-[14px] hover:text-accent-primary transition-colors"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-text-secondary text-[14px] hover:text-accent-primary transition-colors"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-text-secondary text-[14px] hover:text-accent-primary transition-colors"
                >
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border-light flex flex-col md:flex-row gap-4 justify-between items-start md:items-center text-[13px] text-text-muted">
          <div>&copy; 2024 Mercury AI Inc. All rights reserved.</div>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-inherit hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <i className="ph ph-twitter-logo text-lg" />
            </Link>
            <Link
              href="#"
              className="text-inherit hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <i className="ph ph-linkedin-logo text-lg" />
            </Link>
            <Link
              href="#"
              className="text-inherit hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <i className="ph ph-github-logo text-lg" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
