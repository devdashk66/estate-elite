import AgentProfiles from "./_components/AgentProfiles";
import FeaturedProperties from "./_components/FeaturedProperties";
import GetInTouchSection from "./_components/GetInTouchSection";
import HeroSection from "./_components/HeroSection";
import HowItWorksSection from "./_components/HowItWorksSection";
import NeighborhoodSpotlights from "./_components/NeighborhoodSpotlights";
import PropertyTypesSection from "./_components/PropertyTypesSection";
import ServicesSection from "./_components/ServicesSection";
import Testimonials from "./_components/Testimonials";

export default function Home() {
  return (
    <section>
      <main>
        <HeroSection />
        <FeaturedProperties />
        <Testimonials />
        <NeighborhoodSpotlights />
        <AgentProfiles />
        <ServicesSection />
        <HowItWorksSection />
        <PropertyTypesSection />
        <GetInTouchSection />
      </main>
    </section>
  );
}
