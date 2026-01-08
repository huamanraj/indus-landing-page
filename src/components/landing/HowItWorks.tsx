import Reveal from "./Reveal";
import GrainOverlay from "./GrainOverlay";

export default function HowItWorks() {
  return (
    <section id="product" className="py-20 scroll-mt-20">
      <div className="container max-w-[var(--container-width)] mx-auto px-6">
        <Reveal className="mb-12">
          <h2 className="text-[36px] font-semibold text-white mb-3">
            From prompt to phone call
          </h2>
          <p className="text-[16px] sm:text-[18px] text-text-secondary max-w-[600px]">
            Build, test, deploy, and monitor—all without rewiring your stack.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StepCard
            number="01"
            title="Build"
            description="Define the role (HR, receptionist, setter), add knowledge, and set guardrails."
            icon="ph-wrench"
          />
          <StepCard
            number="02"
            title="Test"
            description="Simulate hard scenarios and tune behavior before going live."
            icon="ph-flask"
          />
          <StepCard
            number="03"
            title="Deploy"
            description="Buy numbers or port yours. Connect via SIP/WebRTC. Launch without rewiring your stack."
            icon="ph-rocket-launch"
          />
          <StepCard
            number="04"
            title="Monitor"
            description="Track outcomes, sentiment, and tool success. Fix what fails. Scale what works."
            icon="ph-chart-line-up"
          />
        </Reveal>
      </div>
    </section>
  );
}

function StepCard({
  number,
  title,
  description,
  icon,
}: {
  number: string;
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="h-[400px] flex flex-col justify-between p-8 bg-bg-surface border border-border-light rounded-[20px] overflow-hidden relative transition-all duration-300 hover:border-border-hover hover:-translate-y-1 hover:bg-bg-surface-hover">
      {/* Grain overlay */}
      <GrainOverlay opacity={0.12} />

      {/* Top highlight */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.1)] to-transparent z-[2]"></div>

      <div className="relative z-[2]">
        <div className="font-space-mono text-[48px] text-[rgba(255,255,255,0.05)] font-bold leading-none">
          {number}
        </div>
        <h3 className="mt-4 text-white text-[18px] font-medium">{title}</h3>
        <p className="text-[14px] text-text-secondary mt-2 leading-relaxed">
          {description}
        </p>
      </div>
      <div className="flex-1 my-5 bg-[rgba(0,0,0,0.3)] rounded-lg border border-dashed border-border-light flex items-center justify-center relative z-[2]">
        <i className={`ph ${icon} text-[32px] text-text-muted`}></i>
      </div>
    </div>
  );
}
