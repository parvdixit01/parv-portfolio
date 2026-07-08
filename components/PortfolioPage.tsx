"use client";

import { useCallback, useEffect, useState } from "react";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ParticleBackground } from "@/components/animations/ParticleBackground";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export function PortfolioPage() {
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!sessionStorage.getItem("boot-complete")) {
      setLoading(true);
    }
  }, []);

  const handleLoadComplete = useCallback(() => {
    sessionStorage.setItem("boot-complete", "true");
    setLoading(false);
  }, []);

  return (
    <>
      {mounted && loading && <LoadingScreen onComplete={handleLoadComplete} />}
      <ParticleBackground />
      <div className="relative z-10 grid-bg min-h-screen">
        <Navbar />
        <main>
          <HeroSection />
          <IntroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <EducationSection />
          <CertificationsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
