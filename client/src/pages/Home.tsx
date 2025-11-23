import { useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import PrinciplesSection from "@/components/PrinciplesSection";
import PortfolioGallery from "@/components/PortfolioGallery";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SignupModal from "@/components/SignupModal";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setTimeout(() => {
        setShowSignupModal(true);
        localStorage.setItem('hasVisited', 'true');
      }, 2000);
    }
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen" dir="rtl">
      <HeroSection onContactClick={scrollToContact} />
      <AboutSection />
      <VisionMissionSection />
      <PrinciplesSection />
      <PortfolioGallery />
      <ContactSection />
      <Footer />

      {showFloatingButton && (
        <Button
          size="lg"
          className="fixed bottom-8 left-8 rounded-full shadow-xl z-50 px-8"
          onClick={() => setShowSignupModal(true)}
          data-testid="button-floating-signup"
        >
          اشترك
        </Button>
      )}

      <SignupModal open={showSignupModal} onOpenChange={setShowSignupModal} />
    </div>
  );
}
