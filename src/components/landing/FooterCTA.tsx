import Reveal from "./Reveal";
import Link from "next/link";

export default function FooterCTA() {
  return (
    <section className="py-20">
      <Reveal className="container max-w-[var(--container-width)] mx-auto px-6">
        <div className="bg-bg-surface border border-border-light rounded-[20px] py-20 px-6 text-center">
          <h2 className="text-[40px] text-white mb-6 font-semibold">
            Ready to build the future of voice?
          </h2>
          <div className="flex justify-center gap-4">
            <Link
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium text-[15px] bg-white text-black border border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:-translate-y-px transition-all"
            >
              Start Free
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium text-[15px] text-text-primary border border-border-light hover:bg-[rgba(255,255,255,0.05)] hover:border-text-secondary transition-all"
            >
              Talk to Sales
            </Link>
          </div>
          <p className="mt-6 text-[13px] text-text-muted flex justify-center items-center gap-2">
            <i className="ph ph-clock text-lg"></i> Up and running in less than
            15 minutes.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
