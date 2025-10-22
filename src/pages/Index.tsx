import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import FeaturedWorks from "@/components/FeaturedWorks";
import ClientsSection from "@/components/ClientsSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <PhilosophySection />
      <FeaturedWorks />
      <ClientsSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
