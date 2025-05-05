
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import BMISection from "@/components/BMISection";
import HowItWorks from "@/components/HowItWorks";
import SpecsSection from "@/components/SpecsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <BMISection />
        <HowItWorks />
        <SpecsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
