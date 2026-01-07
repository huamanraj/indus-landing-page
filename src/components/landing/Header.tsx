"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-[100] flex justify-center px-4 sm:px-6 lg:px-0 pointer-events-none pt-0">
      <nav
        className={`pointer-events-auto w-full max-w-[var(--container-width)] flex items-center justify-between px-6 py-4 rounded-b-[24px] border-b border-x border-border-light backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(7,10,11,0.95)] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
            : "bg-[rgba(7,10,11,0.8)] shadow-none"
        }`}
      >
        <Link
          href="#"
          className="flex items-center gap-2 font-bold text-xl text-white no-underline"
        >
          <div className="w-6 h-6 bg-accent-primary rounded-md"></div>
          INDUS
        </Link>
        <div className="hidden md:flex gap-8">
          <Link
            href="#product"
            className="text-text-secondary text-sm font-medium hover:text-white transition-colors"
          >
            Product
          </Link>
          <Link
            href="#cases"
            className="text-text-secondary text-sm font-medium hover:text-white transition-colors"
          >
            Use Cases{" "}
            <span className="text-[10px] text-accent-primary bg-[rgba(99,242,154,0.1)] px-1.5 py-0.5 rounded ml-1.5">
              AGENTS
            </span>
          </Link>
          <Link
            href="#pricing"
            className="text-text-secondary text-sm font-medium hover:text-white transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#docs"
            className="text-text-secondary text-sm font-medium hover:text-white transition-colors"
          >
            Docs
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <Link
            href="#"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-full font-medium text-sm text-text-primary border border-border-light hover:bg-[rgba(255,255,255,0.05)] hover:border-text-secondary transition-all"
          >
            Contact Sales
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center px-4 py-2 rounded-full font-medium text-sm bg-white text-black border border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:-translate-y-px transition-all"
          >
            Start Free
          </Link>
        </div>
      </nav>
    </header>
  );
}
