"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const features = [
  {
    id: "receptionist",
    icon: "ph-phone-incoming",
    title: "Receptionist",
    description:
      "Handles after-hours calls, answers FAQs, and routes complex issues.",
    transcript: '"Thanks for calling Indus. How can I direct your call today?"',
    chip: "Reception",
  },
  {
    id: "appointment",
    icon: "ph-calendar-check",
    title: "Appointment Setter",
    description:
      "Integrates with Calendly/Google Calendar to negotiate times and book slots.",
    transcript:
      '"Hi, I\'m calling to schedule your appointment. Does Tuesday at 2 PM work?"',
    chip: "Scheduling",
  },
  {
    id: "lead-qual",
    icon: "ph-funnel",
    title: "Lead Qualification",
    description:
      "Qualifies inbound leads based on BANT criteria and syncs to Salesforce.",
    transcript:
      '"Thanks for your interest. Could you tell me a bit about your budget and timeline?"',
    chip: "Sales",
  },
  {
    id: "surveys",
    icon: "ph-clipboard-text",
    title: "Surveys",
    description:
      "Conducts NPS and market research surveys via natural conversation.",
    transcript:
      '"Hi, we\'d love to get your feedback on your recent experience. Do you have a moment?"',
    chip: "Research",
  },
  {
    id: "support",
    icon: "ph-life-buoy",
    title: "Customer Support",
    description:
      "Triages support tickets, resets passwords, and handles tier-1 issues.",
    transcript:
      '"I see you\'re having trouble with your account. Let me check that for you."',
    chip: "Support",
  },
  {
    id: "debt",
    icon: "ph-currency-dollar",
    title: "Debt Collection",
    description:
      "Empathetic, compliant payment reminders and arrangement negotiation.",
    transcript:
      '"This is a courtesy call regarding your balance. We have a few payment options."',
    chip: "Finance",
  },
];

export default function FeaturesDemo() {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [demoState, setDemoState] = useState<"idle" | "calling" | "success">(
    "idle"
  );
  const activeFeature = features[activeFeatureIndex];

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDemoState("calling");

    // Simulate API call
    setTimeout(() => {
      setDemoState("success");
      // Reset after showing success
      setTimeout(() => setDemoState("idle"), 3000);
    }, 2000);
  };

  return (
    <section id="cases" className="py-20 scroll-mt-20">
      <div className="container max-w-[var(--container-width)] mx-auto px-4 sm:px-6">
        <Reveal className="mb-12 text-center">
          <h2 className="text-[32px] sm:text-[36px] font-semibold text-white mb-3">
            Built for any workflow
          </h2>
          <p className="text-[16px] sm:text-[18px] text-text-secondary">
            Select a use case to test the agent.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Feature Selection List */}
          <Reveal className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                onClick={() => setActiveFeatureIndex(index)}
                className={`p-5 rounded-[16px] border cursor-pointer transition-all duration-300 flex items-start gap-4 ${
                  activeFeatureIndex === index
                    ? "bg-bg-surface-hover border-accent-primary shadow-[0_0_20px_rgba(99,242,154,0.05)]"
                    : "bg-bg-surface border-border-light hover:border-border-hover hover:bg-bg-surface-hover"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center text-xl transition-colors ${
                    activeFeatureIndex === index
                      ? "bg-accent-primary text-black"
                      : "bg-[rgba(255,255,255,0.05)] text-white"
                  }`}
                >
                  <i className={`ph ${feature.icon}`}></i>
                </div>
                <div>
                  <h3
                    className={`text-[16px] font-medium mb-1 ${
                      activeFeatureIndex === index
                        ? "text-white"
                        : "text-text-primary"
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-[13px] text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>

          {/* Right Column: Sticky Demo Interface */}
          <div className="lg:col-span-7 lg:sticky lg:top-24">
            <Reveal className="bg-bg-surface border border-border-light rounded-[24px] overflow-hidden relative shadow-2xl">
              {/* Top highlight */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.1)] to-transparent"></div>

              {/* Demo Header / Preview Area */}
              <div className="bg-gradient-to-b from-[rgba(20,25,30,1)] to-[rgba(10,12,14,1)] p-6 sm:p-8 border-b border-border-light relative overflow-hidden">
                <div className="flex justify-center mb-6">
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-black bg-white px-3 py-1 rounded-full">
                    {activeFeature.chip} AGENT
                  </span>
                </div>

                <div className="text-center relative z-10">
                  <div className="flex items-center gap-1.5 h-[40px] sm:h-[50px] mb-6 justify-center">
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
                  <p className="font-space-mono text-accent-primary text-[14px] sm:text-[15px] md:text-[18px] leading-relaxed max-w-[90%] sm:max-w-[80%] mx-auto">
                    {activeFeature.transcript}
                  </p>
                </div>

                {/* Background decoration */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-accent-primary blur-[100px] opacity-[0.05] pointer-events-none rounded-full"></div>
              </div>

              {/* Demo Form */}
              <div className="relative p-6 sm:p-8 md:p-10 bg-[rgba(14,18,21,0.6)] backdrop-blur-md">
                {/* Decorative background gradients */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/10 blur-[50px] rounded-full pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/10 blur-[40px] rounded-full pointer-events-none"></div>

                <div className="relative z-10">
                  <h3 className="text-[18px] sm:text-[20px] text-white mb-6 font-semibold flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-accent-primary/20 flex items-center justify-center">
                      <i className="ph-fill ph-lightning text-accent-primary text-lg"></i>
                    </div>
                    Test this agent live
                  </h3>

                  <form onSubmit={handleDemoSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Name Input */}
                      <div className="space-y-1.5">
                        <label className="block text-[11px] font-semibold text-text-secondary uppercase tracking-wider pl-1">
                          Name
                        </label>
                        <div className="relative group">
                          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary group-focus-within:text-accent-primary transition-colors duration-300">
                            <i className="ph ph-user text-lg"></i>
                          </div>
                          <input
                            type="text"
                            required
                            className="w-full bg-black/20 border border-border-light/50 focus:border-accent-primary/50 p-3 pl-10 rounded-xl text-white font-medium focus:outline-none focus:ring-1 focus:ring-accent-primary/50 transition-all duration-300 placeholder:text-text-muted/30 hover:bg-black/30 hover:border-border-hover"
                            placeholder="Jane Doe"
                          />
                        </div>
                      </div>

                      {/* Phone Input */}
                      <div className="space-y-1.5">
                        <label className="block text-[11px] font-semibold text-text-secondary uppercase tracking-wider pl-1">
                          Phone Number
                        </label>
                        <div className="relative group">
                          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary group-focus-within:text-accent-primary transition-colors duration-300">
                            <i className="ph ph-phone text-lg"></i>
                          </div>
                          <input
                            type="tel"
                            required
                            className="w-full bg-black/20 border border-border-light/50 focus:border-accent-primary/50 p-3 pl-10 rounded-xl text-white font-medium focus:outline-none focus:ring-1 focus:ring-accent-primary/50 transition-all duration-300 placeholder:text-text-muted/30 hover:bg-black/30 hover:border-border-hover"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-semibold text-text-secondary uppercase tracking-wider pl-1">
                        Work Email
                      </label>
                      <div className="relative group">
                        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary group-focus-within:text-accent-primary transition-colors duration-300">
                          <i className="ph ph-envelope-simple text-lg"></i>
                        </div>
                        <input
                          type="email"
                          required
                          className="w-full bg-black/20 border border-border-light/50 focus:border-accent-primary/50 p-3 pl-10 rounded-xl text-white font-medium focus:outline-none focus:ring-1 focus:ring-accent-primary/50 transition-all duration-300 placeholder:text-text-muted/30 hover:bg-black/30 hover:border-border-hover"
                          placeholder="jane@company.com"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={demoState !== "idle"}
                      className={`w-full mt-2 relative overflow-hidden inline-flex items-center justify-center px-6 py-4 rounded-xl font-bold text-[15px] transition-all duration-300 
                        ${
                          demoState === "success"
                            ? "bg-emerald-500 text-white border-emerald-400"
                            : "bg-white text-black border-white hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:-translate-y-0.5"
                        } disabled:opacity-90 disabled:cursor-not-allowed border`}
                    >
                      {demoState === "idle" && (
                        <>
                          <span className="mr-2">Call Me Now</span>
                          <i className="ph-bold ph-phone-call text-lg group-hover:translate-x-1 transition-transform"></i>
                        </>
                      )}

                      {demoState === "calling" && (
                        <>
                          <span className="mr-2">Connecting</span>
                          <div className="flex gap-1 items-center">
                            <span className="w-1 h-1 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                            <span className="w-1 h-1 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                            <span className="w-1 h-1 bg-black rounded-full animate-bounce"></span>
                          </div>
                        </>
                      )}

                      {demoState === "success" && (
                        <>
                          <span className="mr-2">Calling You!</span>
                          <i className="ph-bold ph-check text-lg"></i>
                        </>
                      )}
                    </button>

                    
                  </form>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
