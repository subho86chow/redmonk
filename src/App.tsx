import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import StatsBanner from "./components/StatsBanner";
import SplitContent from "./components/SplitContent";
import MeetTeam from "./components/MeetTeam";
import Testimonials from "./components/Testimonials";
import PreFooter from "./components/PreFooter";
import Footer from "./components/Footer";
import CosmicOceanShader from "./components/ui/cosmic-ocean-shader";
import ScrollStroke from "./components/ScrollStroke";
import AnimatedSection from "./components/AnimatedSection";

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
    <div className="relative text-neutral-800 antialiased flex flex-col selection:bg-primary-red/10 selection:text-primary-red overflow-x-hidden">
      {/* Full-page shader background, fixed behind everything */}
      <CosmicOceanShader />

      {/* Content layered above the gradient */}
      <div className="relative z-10 flex flex-col min-h-screen">

        {/* Scroll-driven stroke animation — moves with content, draws on scroll */}
        <ScrollStroke />
        {/* Premium Sticky Header */}
        <Header onBookNowClick={handleBookNowScroll} activeSection={activeSection} />

        {/* Main Structural Flow */}
        <main className="flex-grow px-[5vw]">
          <AnimatedSection aboveFold delay={0.2}>
            <Hero onBookDripClick={handleBookNowScroll} />
          </AnimatedSection>

          <AnimatedSection delay={0.05}>
            <Services />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <StatsBanner />
          </AnimatedSection>

          <AnimatedSection delay={0.0}>
            <SplitContent />
          </AnimatedSection>

          <MeetTeam />

          <AnimatedSection delay={0.1}>
            <Testimonials />
          </AnimatedSection>

          <AnimatedSection delay={0.05}>
            <PreFooter />
          </AnimatedSection>
        </main>

        {/* Footer clearances & glow-wave bottom border ribbons */}
        <Footer />
      </div>
    </div>
  );
}

