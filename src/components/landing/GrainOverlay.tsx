"use client";

import { useId } from "react";

interface GrainOverlayProps {
  opacity?: number;
}

export default function GrainOverlay({ opacity = 0.12 }: GrainOverlayProps) {
  const id = useId();

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
      aria-hidden="true"
      style={{ opacity }}
    >
      <filter id={`grain-${id}`}>
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.9"
          numOctaves="4"
          seed="5"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect
        width="100%"
        height="100%"
        filter={`url(#grain-${id})`}
        style={{ mixBlendMode: "overlay" }}
      />
    </svg>
  );
}
