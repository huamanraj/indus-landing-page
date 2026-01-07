"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export default function DemoSection() {
  const [activeChip, setActiveChip] = useState("Reception");

  const chips = ["Reception", "Sales", "Support"];

  return (
    <section className="py-20">
      <div className="container max-w-[var(--container-width)] mx-auto px-6">
        <Reveal className="bg-bg-surface border border-border-light rounded-[20px] overflow-hidden relative grid grid-cols-1 lg:grid-cols-2 gap-6 h-auto lg:h-[500px]">
          {/* Top highlight */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.1)] to-transparent"></div>

          <div className="p-12">
            <h3 className="text-[24px] text-white mb-6 font-semibold">
              Try a live demo
            </h3>
            <div className="mb-5">
              <label className="block text-[13px] text-text-secondary mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full bg-[rgba(0,0,0,0.3)] border border-border-light p-3 rounded-lg text-white font-inherit focus:outline-none focus:border-accent-primary transition-colors"
                placeholder="+1 (555) 000-0000"
              />
            </div>
            <div className="mb-5">
              <label className="block text-[13px] text-text-secondary mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full bg-[rgba(0,0,0,0.3)] border border-border-light p-3 rounded-lg text-white font-inherit focus:outline-none focus:border-accent-primary transition-colors"
                placeholder="Jane Doe"
              />
            </div>
            <div className="mb-5">
              <label className="block text-[13px] text-text-secondary mb-2">
                Work Email
              </label>
              <input
                type="email"
                className="w-full bg-[rgba(0,0,0,0.3)] border border-border-light p-3 rounded-lg text-white font-inherit focus:outline-none focus:border-accent-primary transition-colors"
                placeholder="jane@company.com"
              />
            </div>
            <button className="w-full mt-2.5 inline-flex items-center justify-center px-6 py-3 rounded-full font-medium text-[15px] bg-white text-black border border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:-translate-y-px transition-all cursor-pointer">
              Get a call now
            </button>
            <p className="text-[11px] text-text-muted mt-4 leading-[1.4]">
              By requesting a call, you agree to receive an automated demo call.
              Standard carrier rates may apply.
            </p>
          </div>

          <div className="bg-gradient-to-b from-[rgba(20,25,30,1)] to-[rgba(10,12,14,1)] flex flex-col justify-center items-center relative min-h-[300px] lg:min-h-auto p-6">
            <div className="absolute top-8 flex gap-2">
              {chips.map((chip) => (
                <span
                  key={chip}
                  onClick={() => setActiveChip(chip)}
                  className={`text-[12px] px-3 py-1.5 rounded-full border cursor-pointer transition-colors ${
                    activeChip === chip
                      ? "bg-white text-black border-white"
                      : "border-border-light text-text-muted hover:border-text-secondary"
                  }`}
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="text-center mt-5">
              <div className="flex items-center gap-1 h-[40px] mb-5 justify-center">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 bg-accent-primary rounded-full animate-wave"
                    style={{
                      animationDuration: i % 2 === 0 ? "0.9s" : "1.2s",
                    }}
                  ></div>
                ))}
              </div>
              <p className="font-space-mono text-accent-primary text-[14px]">
                "Thanks for calling Indus. How can I direct your call today?"
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
