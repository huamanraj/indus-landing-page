import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import SocialProof from "@/components/landing/SocialProof";
import Benefits from "@/components/landing/Benefits";
import FeaturesDemo from "@/components/landing/FeaturesDemo";
import HowItWorks from "@/components/landing/HowItWorks";
import EnterpriseSecurity from "@/components/landing/EnterpriseSecurity";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import FooterCTA from "@/components/landing/FooterCTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="relative isolate min-h-screen bg-charcoal-sand text-text-primary">
      <div className="noise-overlay" aria-hidden="true" />
      <div className="relative z-10">
        <Header />
        <Hero />
        <SocialProof />

        <FeaturesDemo />
        <Benefits />
        <HowItWorks />
        <EnterpriseSecurity />
    
        <FAQ />
        <FooterCTA />
        <Footer />
      </div>
    </main>
  );
}
