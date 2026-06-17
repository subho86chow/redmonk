import { useState, useEffect, Suspense } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import StatsBanner from "./components/StatsBanner";
import SplitContent from "./components/SplitContent";
import MeetTeam from "./components/MeetTeam";
import Testimonials from "./components/Testimonials";
import PreFooter from "./components/PreFooter";
import Footer from "./components/Footer";
import ShaderGradientBackground from "./components/ShaderGradientBackground";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Dynamically highlight active section based on scroll offsets
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "services",
        "iv-menu",
        "beauty-treatments",
        "about",
        "team",
        "journal",
        "reserve-your-slot"
      ];

      const currentScrollY = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (currentScrollY >= top && currentScrollY < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBookNowScroll = () => {
    const targetElement = document.getElementById("reserve-your-slot");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative text-neutral-800 antialiased flex flex-col selection:bg-primary-red/10 selection:text-primary-red">
      {/* Full-page shader gradient background, fixed behind everything */}
      <Suspense fallback={<div className="fixed inset-0 bg-[#A62125]" />}>
        <ShaderGradientBackground />
      </Suspense>

      {/* Content layered above the gradient */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Premium Sticky Header */}
        <Header onBookNowClick={handleBookNowScroll} activeSection={activeSection} />

        {/* Main Structural Flow */}
        <main className="flex-grow">
          {/* Interactive Hero Banner */}
          <Hero onBookDripClick={handleBookNowScroll} />

          {/* 4-Column Clinical Services Grid */}
          <Services />

          {/* Brand Core Values Statistics Banner */}
          <StatsBanner />

          {/* Asymmetrical 65/35 Split: IV menu and Beauty accordions */}
          <SplitContent />

          {/* Certified Physician & Aesthetic Team Grid */}
          <MeetTeam />

          {/* Soft-shadowed Review Journal Grid */}
          <Testimonials />

          {/* PreFooter Booking Intake form, Social grids, Maps */}
          <PreFooter />
        </main>

        {/* Footer clearances & glow-wave bottom border ribbons */}
        <Footer />
      </div>
    </div>
  );
}

