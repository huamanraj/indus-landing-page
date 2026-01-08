"use client";

import React, { useId } from "react";

// Less dense grain: change baseFrequency="0.85" to 0.65 in the main noise

// Darker grain: lower brightness(70%) to brightness(60%)

// Stronger grain: increase strength to 0.26 slowly (too high looks dirty)


type NoiseCardProps = {
  children: React.ReactNode;
  className?: string;
  strength?: number; // main grain opacity
  microStrength?: number; // micro grain opacity
};

export default function NoiseCard({
  children,
  className = "",
  strength = 0.18,
  microStrength = 0.07,
}: NoiseCardProps) {
  const uid = useId();
  const grainId = `grainHD-${uid}`;
  const microId = `microHD-${uid}`;

  return (
    <div className={`nc ${className}`}>
      {/* base */}
      <div className="nc-base" aria-hidden="true" />

      {/* noise layers */}
      <svg
        className="nc-noise nc-main"
        aria-hidden="true"
        style={{ opacity: strength }}
      >
        <filter id={grainId} x="0" y="0" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="4"
            seed="7"
            result="n"
          />
          <feComponentTransfer in="n" result="c">
            <feFuncR type="linear" slope="1.35" intercept="-0.20" />
            <feFuncG type="linear" slope="1.35" intercept="-0.20" />
            <feFuncB type="linear" slope="1.35" intercept="-0.20" />
          </feComponentTransfer>
          <feColorMatrix
            in="c"
            type="matrix"
            values="
              0.90 0    0    0 0
              0    0.90 0    0 0
              0    0    0.90 0 0
              0    0    0    1 0
            "
          />
        </filter>
        <rect width="100%" height="100%" filter={`url(#${grainId})`} />
      </svg>

      <svg
        className="nc-noise nc-micro"
        aria-hidden="true"
        style={{ opacity: microStrength }}
      >
        <filter id={microId} x="0" y="0" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="1.35"
            numOctaves="2"
            seed="11"
            result="n"
          />
          <feComponentTransfer in="n">
            <feFuncR type="linear" slope="1.25" intercept="-0.24" />
            <feFuncG type="linear" slope="1.25" intercept="-0.24" />
            <feFuncB type="linear" slope="1.25" intercept="-0.24" />
          </feComponentTransfer>
        </filter>
        <rect width="100%" height="100%" filter={`url(#${microId})`} />
      </svg>

      {/* content */}
      <div className="nc-content">{children}</div>

      <style jsx>{`
        .nc {
          position: relative;
          overflow: hidden;
          border-radius: 18px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(14, 16, 19, 0.65);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
          isolation: isolate;
        }

        .nc-base {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          background: radial-gradient(
              700px 360px at 12% 10%,
              rgba(255, 255, 255, 0.06),
              transparent 60%
            ),
            radial-gradient(
              600px 320px at 88% 20%,
              rgba(255, 255, 255, 0.04),
              transparent 62%
            ),
            linear-gradient(180deg, #0f1114 0%, #0a0b0d 45%, #060709 100%);
        }

        .nc-noise {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          mix-blend-mode: multiply;
        }

        .nc-main {
          filter: contrast(190%) brightness(70%);
        }

        .nc-micro {
          filter: contrast(220%) brightness(65%);
        }

        .nc-content {
          position: relative;
          z-index: 2;
          padding: 18px;
        }
      `}</style>
    </div>
  );
}
