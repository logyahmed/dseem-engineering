import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioGallery from "@/components/PortfolioGallery";
import AccreditationsSection from "@/components/AccreditationsSection";
import ContactSection from "@/components/ContactSection";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />

        {/* موقعك الأساسي */}
        <HeroSection />
        <AboutSection />
        <PortfolioGallery />
        <AccreditationsSection />
        <ContactSection />

        {/* لو عندك صفحات أخرى */}
        <Router />

      </TooltipProvider>
    </QueryClientProvider>
  );
}
