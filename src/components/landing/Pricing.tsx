import Reveal from "./Reveal";
import Link from "next/link";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="container max-w-[var(--container-width)] mx-auto px-6">
        <Reveal className="mb-12 text-center">
          <h2 className="text-[36px] font-semibold text-white">
            Simple, transparent pricing
          </h2>
        </Reveal>

        <Reveal className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PricingCard
            title="Starter"
            description="For prototyping and side projects."
            price="$0"
            buttonText="Start Free"
            buttonStyle="secondary"
            features={[
              "50 mins/month included",
              "1 Phone number",
              "Standard voices",
            ]}
          />
          <PricingCard
            title="Growth"
            description="For scaling startups."
            price="$99"
            buttonText="Get Growth"
            buttonStyle="primary"
            popular={true}
            features={[
              "2,000 mins/month included",
              "5 Phone numbers",
              "Custom tools & Webhooks",
              "Recording storage",
            ]}
          />
          <PricingCard
            title="Enterprise"
            description="For volume and compliance."
            price="Custom"
            buttonText="Contact Sales"
            buttonStyle="secondary"
            priceSuffix={false}
            features={[
              "Volume discounts",
              "Private cloud deployment",
              "Dedicated support manager",
              "SLA guarantees",
            ]}
          />
        </Reveal>
      </div>
    </section>
  );
}

function PricingCard({
  title,
  description,
  price,
  priceSuffix = true,
  buttonText,
  buttonStyle,
  features,
  popular = false,
}: {
  title: string;
  description: string;
  price: string;
  priceSuffix?: boolean;
  buttonText: string;
  buttonStyle: "primary" | "secondary";
  features: string[];
  popular?: boolean;
}) {
  return (
    <div
      className={`p-8 bg-bg-surface border rounded-[20px] transition-all duration-300 hover:border-border-hover hover:-translate-y-1 hover:bg-bg-surface-hover flex flex-col h-full ${
        popular ? "border-accent-primary" : "border-border-light"
      }`}
    >
      {popular && (
        <div className="mb-2">
          <span className="text-[11px] font-bold tracking-[0.05em] uppercase text-accent-primary bg-[rgba(99,242,154,0.08)] px-3 py-1.5 rounded-full border border-[rgba(99,242,154,0.2)]">
            MOST POPULAR
          </span>
        </div>
      )}
      <h3 className="text-[18px] mb-2 text-white font-medium">{title}</h3>
      <p className="text-[14px] text-text-secondary leading-[1.6]">
        {description}
      </p>
      <div className="text-[32px] font-bold text-white my-4">
        {price}
        {priceSuffix && (
          <span className="text-[14px] font-normal text-text-muted">/mo</span>
        )}
      </div>
      <ul className="flex-1 my-6 list-none p-0">
        {features.map((feature, i) => (
          <li
            key={i}
            className="flex gap-2.5 text-[14px] text-text-secondary mb-3"
          >
            <i className="ph ph-check-circle text-accent-primary mt-0.5"></i>
            {feature}
          </li>
        ))}
      </ul>
      <Link
        href="#"
        className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-full font-medium text-[15px] transition-all ${
          buttonStyle === "primary"
            ? "bg-accent-primary text-black border border-accent-primary hover:shadow-[0_0_15px_rgba(99,242,154,0.3)] hover:-translate-y-px"
            : "bg-transparent text-text-primary border border-border-light hover:bg-[rgba(255,255,255,0.05)] hover:border-text-secondary"
        }`}
      >
        {buttonText}
      </Link>
    </div>
  );
}
