import Reveal from "./Reveal";
import Link from "next/link";

export default function EnterpriseSecurity() {
  return (
    <section className="py-20">
      <Reveal className="container max-w-[var(--container-width)] mx-auto px-6">
        <div className="bg-bg-surface border border-border-light rounded-[20px] p-6 sm:p-8 lg:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-none md:max-w-[500px] text-center md:text-left">
            <h2 className="text-[24px] sm:text-[28px] text-white mb-3 font-semibold">
              Enterprise-grade security
            </h2>
            <p className="text-text-secondary">
              Your data is encrypted at rest and in transit. We are SOC 2 Type
              II compliant and HIPAA ready.
            </p>
            <Link
              href="#"
              className="text-accent-primary text-[14px] mt-4 inline-block hover:underline"
            >
              Visit Trust Center &rarr;
            </Link>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-3 sm:gap-4">
            <span className="px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium text-[13px] sm:text-[15px] bg-transparent text-text-primary border border-border-light cursor-default opacity-70">
              SOC 2
            </span>
            <span className="px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium text-[13px] sm:text-[15px] bg-transparent text-text-primary border border-border-light cursor-default opacity-70">
              GDPR
            </span>
            <span className="px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium text-[13px] sm:text-[15px] bg-transparent text-text-primary border border-border-light cursor-default opacity-70">
              HIPAA
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
