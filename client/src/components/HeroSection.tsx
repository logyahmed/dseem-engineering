import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Hero_background_engineering_construction_20f5c29a.png";

interface HeroSectionProps {
  onContactClick: () => void;
}

export default function HeroSection({ onContactClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 text-center">
        <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-8xl text-white mb-6 leading-tight">
          الهندسة المتقدمة
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 max-w-3xl mx-auto leading-loose">
          نبني المستقبل بخبرة هندسية متميزة ورؤية إبداعية
        </p>
        <Button
          size="lg"
          className="px-12 py-6 text-lg rounded-full backdrop-blur-sm bg-white/20 border-2 border-white/30 text-white hover:bg-white/30 transition-all"
          onClick={onContactClick}
          data-testid="button-hero-contact"
        >
          تواصل معنا
        </Button>
      </div>
    </section>
  );
}
