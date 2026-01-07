import Reveal from "./Reveal";

export default function Features() {
  return (
    <section id="cases" className="py-20">
      <div className="container max-w-[var(--container-width)] mx-auto px-6">
        <Reveal className="mb-12 text-center">
          <h2 className="text-[36px] font-semibold text-white mb-3">
            Built for any workflow
          </h2>
          <p className="text-[18px] text-text-secondary">
            From simple routing to complex negotiations.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon="ph-phone-incoming"
            title="Receptionist"
            description="Handles after-hours calls, answers FAQs, and routes complex issues to specific departments."
          />
          <FeatureCard
            icon="ph-calendar-check"
            title="Appointment Setter"
            description="Integrates with Calendly/Google Calendar to negotiate times and book slots in real-time."
          />
          <FeatureCard
            icon="ph-funnel"
            title="Lead Qualification"
            description="Qualifies inbound leads based on BANT criteria and syncs data directly to Salesforce."
          />
          <FeatureCard
            icon="ph-clipboard-text"
            title="Surveys"
            description="Conducts NPS and market research surveys with high completion rates via natural conversation."
          />
          <FeatureCard
            icon="ph-life-buoy"
            title="Customer Support"
            description="Triages support tickets, resets passwords, and handles tier-1 issues autonomously."
          />
          <FeatureCard
            icon="ph-currency-dollar"
            title="Debt Collection"
            description="Empathetic, compliant payment reminders and arrangement negotiation."
          />
        </Reveal>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="p-8 bg-bg-surface border border-border-light rounded-[20px] transition-all duration-300 hover:border-border-hover hover:-translate-y-1 hover:bg-bg-surface-hover">
      <div className="w-10 h-10 bg-[rgba(255,255,255,0.05)] rounded-lg flex items-center justify-center text-white mb-5 text-xl">
        <i className={`ph ${icon}`}></i>
      </div>
      <h3 className="text-[18px] mb-2 text-white font-medium">{title}</h3>
      <p className="text-[14px] text-text-secondary leading-relaxed">
        {description}
      </p>
    </div>
  );
}
