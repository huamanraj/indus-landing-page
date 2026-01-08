import Reveal from "./Reveal";
import Link from "next/link";
import GrainOverlay from "./GrainOverlay";

const pricingFeatures = [
  {
    icon: "ph-lightning",
    title: "Pilot-first",
    description: "Start small, prove ROI, then expand",
  },
  {
    icon: "ph-chart-bar",
    title: "Volume-based",
    description: "Discounts as call minutes grow",
  },
  {
    icon: "ph-cloud",
    title: "Deployment options",
    description: "Shared, dedicated, or private environments",
  },
  {
    icon: "ph-headset",
    title: "Support options",
    description: "Standard to enterprise SLAs",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 scroll-mt-20">
      <div className="container max-w-[var(--container-width)] mx-auto px-6">
        <Reveal className="mb-12 text-center">
          <h2 className="text-[32px] sm:text-[36px] font-semibold text-white mb-3">
            Pricing that matches your call volume
          </h2>
          <p className="text-[16px] sm:text-[18px] text-text-secondary max-w-[680px] mx-auto">
            Mercury pricing depends on minutes, phone numbers, integrations, and
            compliance needs. We&apos;ll recommend a plan after a quick call and
            can start with a small pilot before scaling.
          </p>
        </Reveal>

        <Reveal className="max-w-[900px] mx-auto">
          <div className="bg-bg-surface border border-border-light rounded-[24px] p-8 sm:p-10 lg:p-12 relative overflow-hidden">
            {/* Grain overlay */}
            <GrainOverlay opacity={0.12} />

            {/* Top highlight */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.1)] to-transparent z-[2]"></div>

            {/* Gradient accents */}
            <div
              className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-accent-primary/10 blur-[100px] rounded-full pointer-events-none"
              aria-hidden="true"
            ></div>
            <div
              className="absolute -bottom-20 -left-20 w-[250px] h-[250px] bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"
              aria-hidden="true"
            ></div>

            <div className="relative z-[2]">
              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {pricingFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[rgba(99,242,154,0.1)] flex items-center justify-center flex-shrink-0">
                      <i
                        className={`ph ${feature.icon} text-accent-primary text-lg`}
                      ></i>
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-text-secondary text-[14px]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6 border-t border-border-light">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-[15px] bg-white text-black border border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:-translate-y-px transition-all"
                >
                  <i className="ph ph-phone mr-2"></i>
                  Talk to Sales
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-[15px] text-text-primary border border-border-light hover:bg-[rgba(255,255,255,0.05)] hover:border-text-secondary transition-all"
                >
                  <i className="ph ph-calendar-check mr-2"></i>
                  Book a Demo
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
