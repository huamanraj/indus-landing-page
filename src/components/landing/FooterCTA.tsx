import Reveal from "./Reveal";
import Link from "next/link";
import GrainOverlay from "./GrainOverlay";

export default function FooterCTA() {
  return (
    <section className="py-20">
      <Reveal className="container max-w-[var(--container-width)] mx-auto px-6">
        <div className="group relative overflow-hidden bg-bg-surface border border-border-light rounded-[24px] py-16 sm:py-20 px-6 text-center transition-all duration-300 transform-gpu hover:-translate-y-0.5 hover:border-[rgba(99,242,154,0.35)] hover:shadow-[0_0_0_1px_rgba(99,242,154,0.10),0_28px_90px_-45px_rgba(99,242,154,0.35)]">
          {/* Grain overlay */}
          <GrainOverlay opacity={0.15} />
          {/* gradient layers */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-70 transition-opacity duration-300 group-hover:opacity-95"
          >
            <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full blur-2xl bg-[radial-gradient(circle_at_30%_30%,rgba(99,242,154,0.25),transparent_62%)]" />
            <div className="absolute -bottom-44 -right-44 w-[620px] h-[620px] rounded-full blur-2xl bg-[radial-gradient(circle_at_30%_30%,rgba(99,180,255,0.16),transparent_62%)]" />
            <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.06)_45%,transparent_60%)]" />
          </div>

          <div className="relative z-10">
            <h2 className="text-[32px] sm:text-[40px] text-white mb-4 font-semibold leading-tight">
              Ready to put Mercury on the phone?
            </h2>
            <p className="text-text-secondary text-[16px] sm:text-[18px] mb-8 max-w-[500px] mx-auto">
              Mercury handles repetitive calls so your team can focus on the
              work that actually needs humans.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-[15px] bg-white text-black border border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:-translate-y-px transition-all"
              >
                Start Free
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-[15px] text-text-primary border border-border-light hover:bg-[rgba(255,255,255,0.05)] hover:border-text-secondary transition-all"
              >
                <i className="ph ph-phone mr-2"></i>
                Talk to Sales
              </Link>
            </div>
            <p className="mt-6 text-[13px] text-text-muted flex justify-center items-center gap-2">
              <i className="ph ph-clock text-accent-primary"></i>Up and running
              in less than 15 minutes.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
