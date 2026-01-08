import Reveal from "./Reveal";
import Link from "next/link";
import GrainOverlay from "./GrainOverlay";

export default function EnterpriseSecurity() {
  return (
    <section className="py-20">
      <Reveal className="container max-w-[var(--container-width)] mx-auto px-6">
        <div className="bg-bg-surface border border-border-light rounded-[20px] p-6 sm:p-8 lg:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8 relative overflow-hidden">
          {/* Grain overlay */}
          <GrainOverlay opacity={0.1} />

          {/* Subtle gradient accent */}
          <div
            className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent-primary/5 blur-[100px] rounded-full pointer-events-none"
            aria-hidden="true"
          ></div>

          <div className="max-w-none md:max-w-[540px] text-center md:text-left relative z-[2]">
            <h2 className="text-[24px] sm:text-[28px] text-white mb-3 font-semibold">
              Enterprise-grade security
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Encrypted data in transit and at rest, access controls, audit
              logs, and configurable retention. Built for real customer
              conversations and compliance needs.
            </p>
            <Link
              href="#"
              className="text-accent-primary text-[14px] mt-4 inline-flex items-center gap-1.5 hover:underline group"
            >
              Visit Trust Center
              <i className="ph ph-arrow-right group-hover:translate-x-0.5 transition-transform"></i>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-3 sm:gap-4 relative z-[2]">
            <span className="px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium text-[13px] sm:text-[15px] bg-[rgba(99,242,154,0.05)] text-text-primary border border-[rgba(99,242,154,0.2)] cursor-default">
              <i className="ph ph-check-circle text-accent-primary mr-1.5"></i>
              SOC 2-ready
            </span>
            <span className="px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium text-[13px] sm:text-[15px] bg-[rgba(99,242,154,0.05)] text-text-primary border border-[rgba(99,242,154,0.2)] cursor-default">
              <i className="ph ph-check-circle text-accent-primary mr-1.5"></i>
              GDPR support
            </span>
            <span className="px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium text-[13px] sm:text-[15px] bg-[rgba(99,242,154,0.05)] text-text-primary border border-[rgba(99,242,154,0.2)] cursor-default">
              <i className="ph ph-check-circle text-accent-primary mr-1.5"></i>
              HIPAA options
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
