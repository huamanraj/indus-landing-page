import Reveal from "./Reveal";
import GrainOverlay from "./GrainOverlay";

const benefits = [
  {
    icon: "ph-phone-call",
    title: "24/7 availability",
    description:
      "Answers every call, 24/7 if needed, with consistent policies.",
  },
  {
    icon: "ph-calendar-check",
    title: "Automatic scheduling",
    description: "Books, reschedules, and confirms appointments automatically.",
  },
  {
    icon: "ph-clipboard-text",
    title: "Clean CRM notes",
    description: "Qualifies leads and writes clean notes into your CRM.",
  },
  {
    icon: "ph-user-check",
    title: "HR screening",
    description:
      "Screens candidates and schedules interviews, without back-and-forth.",
  },
  {
    icon: "ph-lifebuoy",
    title: "Tier-1 support",
    description: "Handles tier-1 support and routes the rest with context.",
  },
  {
    icon: "ph-chart-bar",
    title: "Survey completion",
    description: "Runs surveys and feedback calls people actually finish.",
  },
  {
    icon: "ph-shield-check",
    title: "Guardrails built-in",
    description: "Stays inside guardrails so it does not improvise into risk.",
  },
  {
    icon: "ph-eye",
    title: "Full visibility",
    description:
      "Transcripts, recordings, outcomes, sentiment, failure reasons.",
  },
  {
    icon: "ph-trend-up",
    title: "Fast iteration",
    description:
      "Improves fast: iterate prompts, knowledge, and tools based on real outcomes.",
  },
];

export default function Benefits() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(99,242,154,0.02)] to-transparent pointer-events-none"
        aria-hidden="true"
      ></div>

      <div className="container max-w-[var(--container-width)] mx-auto px-6 relative z-10">
        <Reveal className="mb-12 text-center">
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.08em] uppercase text-accent-primary mb-4 inline-block">
            CAPABILITIES
          </span>
          <h2 className="text-[32px] sm:text-[36px] font-semibold text-white mb-3">
            What Mercury does for you
          </h2>
          <p className="text-[16px] sm:text-[18px] text-text-secondary max-w-[600px] mx-auto">
            Replace repetitive calls with an agent that actually gets outcomes.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 bg-bg-surface border border-border-light rounded-[16px] transition-all duration-300 hover:border-border-hover hover:bg-bg-surface-hover hover:-translate-y-0.5 relative overflow-hidden"
            >
              {/* Grain overlay */}
              <GrainOverlay opacity={0.08} />

              {/* Top highlight on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(99,242,154,0.2)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative z-[2]">
                <div className="w-10 h-10 rounded-lg bg-[rgba(99,242,154,0.08)] flex items-center justify-center mb-4 group-hover:bg-[rgba(99,242,154,0.15)] transition-colors">
                  <i
                    className={`ph ${benefit.icon} text-accent-primary text-xl`}
                  ></i>
                </div>
                <h3 className="text-white font-medium text-[16px] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary text-[14px] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
