import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import SocialProof from "@/components/landing/SocialProof";
import FeaturesDemo from "@/components/landing/FeaturesDemo";
import HowItWorks from "@/components/landing/HowItWorks";
import EnterpriseSecurity from "@/components/landing/EnterpriseSecurity";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import FooterCTA from "@/components/landing/FooterCTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-charcoal-sand text-text-primary">
      <Header />
      <Hero />
      <SocialProof />
      <FeaturesDemo />
      <HowItWorks />
      <EnterpriseSecurity />
      <Pricing />
      <FAQ />
      <FooterCTA />
      <Footer />
    </main>
  );
}
