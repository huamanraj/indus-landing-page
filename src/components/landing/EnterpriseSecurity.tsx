import Reveal from "./Reveal";
import Link from "next/link";

export default function EnterpriseSecurity() {
  return (
    <section className="py-20">
      <Reveal className="container max-w-[var(--container-width)] mx-auto px-6">
        <div className="bg-bg-surface border border-border-light rounded-[20px] p-12 flex flex-wrap items-center justify-between gap-8">
          <div className="max-w-[500px]">
            <h2 className="text-[28px] text-white mb-3 font-semibold">
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
          <div className="flex gap-4">
            <span className="px-6 py-3 rounded-full font-medium text-[15px] bg-transparent text-text-primary border border-border-light cursor-default opacity-70">
              SOC 2
            </span>
            <span className="px-6 py-3 rounded-full font-medium text-[15px] bg-transparent text-text-primary border border-border-light cursor-default opacity-70">
              GDPR
            </span>
            <span className="px-6 py-3 rounded-full font-medium text-[15px] bg-transparent text-text-primary border border-border-light cursor-default opacity-70">
              HIPAA
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
