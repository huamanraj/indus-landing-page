"use client";

import Reveal from "./Reveal";
import Link from "next/link";
import GrainOverlay from "./GrainOverlay";

export default function Hero() {
  return (
    <section className="pt-[188px] pb-[60px] -mt-[88px] relative text-center overflow-hidden">
      {/* 3D background */}
      <div className="hero-3d-bg" aria-hidden="true">
        <div className="hero-3d-scene">
          <div className="hero-3d-grid" />
          <div
            className="hero-3d-orb hero-3d-orb--accent"
            style={
              {
                ["--x" as any]: "18%",
                ["--y" as any]: "32%",
                ["--z" as any]: "140px",
                ["--s" as any]: "520px",
              } as React.CSSProperties
            }
          />
          <div
            className="hero-3d-orb hero-3d-orb--cool"
            style={
              {
                ["--x" as any]: "72%",
                ["--y" as any]: "18%",
                ["--z" as any]: "60px",
                ["--s" as any]: "620px",
              } as React.CSSProperties
            }
          />
          <div
            className="hero-3d-orb hero-3d-orb--accent"
            style={
              {
                ["--x" as any]: "68%",
                ["--y" as any]: "62%",
                ["--z" as any]: "220px",
                ["--s" as any]: "420px",
              } as React.CSSProperties
            }
          />
        </div>
      </div>

      <div className="absolute w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(46,56,110,0.25)_0%,rgba(7,10,11,0)_70%)] top-[-200px] left-1/2 -translate-x-1/2 z-[-1] pointer-events-none"></div>

      <Reveal className="container max-w-[var(--container-width)] mx-auto px-4 sm:px-6 relative z-10">
        <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.05em] uppercase text-accent-primary bg-[rgba(99,242,154,0.08)] px-3 py-1.5 rounded-full border border-[rgba(99,242,154,0.2)] inline-block mb-6">
          MEET MERCURY CALLING AGENTS
        </span>
        <h1 className="text-[32px] sm:text-[48px] lg:text-[64px] leading-[1.1] font-semibold tracking-[-0.03em] mb-4 sm:mb-6 text-white max-w-[900px] mx-auto">
          AI phone calls
          <br className="hidden sm:block" /> that sound human.
        </h1>
        <p className="text-[16px] sm:text-[20px] text-text-secondary max-w-[600px] mx-auto mb-8 sm:mb-10 px-4">
          Deploy enterprise-grade voice agents with sub-500ms latency, native
          tool calling, and full observability. Built for scale.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-[300px] sm:max-w-none mx-auto mb-12">
          <Link
            href="#cases"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-full font-medium text-[15px] bg-white text-black border border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:-translate-y-px transition-all w-full sm:w-auto"
          >
            Try Now
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-full font-medium text-[15px] text-text-primary border border-border-light hover:bg-[rgba(255,255,255,0.05)] hover:border-text-secondary transition-all w-full sm:w-auto"
          >
            <i className="ph ph-phone mr-2"></i> Talk to Sales
          </Link>
        </div>

        <Reveal className="bg-bg-surface border border-border-light rounded-[20px] overflow-hidden relative flex flex-col lg:flex-row h-auto lg:h-[400px]">
          {/* Grain overlay */}
          <GrainOverlay opacity={0.15} />

          {/* Top highlight */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.1)] to-transparent z-[2]"></div>

          <div className="flex-1 border-b lg:border-b-0 lg:border-r border-border-light flex flex-col items-center justify-center p-8 sm:p-10 min-h-[300px] lg:min-h-auto relative z-[2]">
            <div className="flex items-center gap-1 h-[60px]">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 bg-accent-primary rounded-full animate-wave"
                  style={{
                    animationDuration:
                      i % 3 === 0 ? "1.4s" : i % 2 === 0 ? "0.9s" : "1.2s",
                  }}
                ></div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-2 font-space-mono text-xs text-text-secondary">
              <span className="w-2 h-2 bg-accent-primary rounded-full"></span>{" "}
              LIVE // +1 (415) 555-0192
            </div>
          </div>
          <div className="flex-1 bg-[rgba(255,255,255,0.01)] p-6 sm:p-10 flex flex-col text-left min-h-[300px] lg:min-h-auto relative z-[2]">
            <div className="mb-4 text-sm">
              <div className="text-[11px] text-text-muted mb-1 font-semibold uppercase">
                User
              </div>
              <div className="bg-[rgba(255,255,255,0.05)] px-3.5 py-2.5 rounded-lg text-text-primary inline-block">
                I'd like to reschedule my appointment for Tuesday.
              </div>
            </div>
            <div className="mb-4 text-sm">
              <div className="text-[11px] text-accent-primary mb-1 font-semibold uppercase">
                Mercury Agent
              </div>
              <div className="bg-[rgba(99,242,154,0.05)] border border-border-active px-3.5 py-2.5 rounded-lg text-text-primary inline-block">
                I can help with that. Looking at Tuesday, I have openings at 10
                AM or 2 PM. Which works better?
              </div>
            </div>

            <div className="flex flex-wrap gap-4 sm:gap-6 mt-auto pt-5 border-t border-border-light font-space-mono text-xs text-text-muted">
              <div className="metric">
                LATENCY: <span className="text-accent-primary">480ms</span>
              </div>
              <div className="metric">
                SENTIMENT: <span className="text-accent-primary">POSITIVE</span>
              </div>
              <div className="metric">
                INTENT: <span className="text-accent-primary">RESCHEDULE</span>
              </div>
            </div>
          </div>
        </Reveal>
      </Reveal>
    </section>
  );
}
