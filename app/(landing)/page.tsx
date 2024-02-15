import React from "react";
import LandingNavbar from "@/components/landing/LandingNavbar";
import LandingHero from "@/components/landing/LandingHero";
import LandingContent from "@/components/landing/LandingContent";

const LandingPage = () => {
  return (
    <section className="h-full">
      <div className="mb-20">
        <LandingNavbar />
        <LandingHero />
      </div>
      <LandingContent />
    </section>
  );
};

export default LandingPage;
