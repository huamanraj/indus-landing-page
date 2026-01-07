export default function SocialProof() {
  return (
    <div className="py-10">
      <div className="container max-w-[var(--container-width)] mx-auto px-6">
        <p className="text-center text-[13px] text-text-muted mb-6">
          TRUSTED BY TEAMS BUILDING VOICE AT SCALE
        </p>
        <div className="flex justify-center gap-15 opacity-40 grayscale flex-wrap">
          <i className="ph ph-slack-logo text-5xl"></i>
          <i className="ph ph-figma-logo text-5xl"></i>
          <i className="ph ph-spotify-logo text-5xl"></i>
          <i className="ph ph-gitlab-logo text-5xl"></i>
          <i className="ph ph-stripe-logo text-5xl"></i>
        </div>
      </div>
    </div>
  );
}
