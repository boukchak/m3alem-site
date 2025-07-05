import { HeroSection } from "@/components/ui/hero-section";
import { FeaturesSection } from "@/components/ui/features-section";
import { HowItWorksSection } from "@/components/ui/how-it-works-section";
import { StatsSection } from "@/components/ui/stats-section";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { FAQSection } from "@/components/ui/faq-section";
import { CTASection } from "@/components/ui/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <StatsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}

