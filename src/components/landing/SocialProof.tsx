import Reveal from "./Reveal";

export default function SocialProof() {
  return (
    <div className="py-12 sm:py-16">
      <div className="container max-w-[var(--container-width)] mx-auto px-6">
        <Reveal className="text-center mb-8">
          <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.08em] uppercase text-text-muted mb-2">
            TRUSTED BY TEAMS THAT RUN HIGH-VOLUME CALLS
          </p>
          <p className="text-[14px] sm:text-[15px] text-text-secondary max-w-[500px] mx-auto">
            From startups to enterprise ops teams, Mercury takes calls off
            humans without breaking your workflow.
          </p>
        </Reveal>
        <Reveal className="flex justify-center gap-10 sm:gap-16 opacity-40 grayscale flex-wrap hover:opacity-60 transition-opacity duration-500">
          <i className="ph ph-slack-logo text-4xl sm:text-5xl"></i>
          <i className="ph ph-figma-logo text-4xl sm:text-5xl"></i>
          <i className="ph ph-spotify-logo text-4xl sm:text-5xl"></i>
          <i className="ph ph-gitlab-logo text-4xl sm:text-5xl"></i>
          <i className="ph ph-stripe-logo text-4xl sm:text-5xl"></i>
        </Reveal>
      </div>
    </div>
  );
}
