import { useState, useEffect } from "react";
import { Menu, X, Activity } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  onBookNowClick: () => void;
  activeSection: string;
}

export default function Header({ onBookNowClick, activeSection }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "IV Menu", href: "#iv-menu" },
    { name: "Beauty", href: "#beauty-treatments" },
    { name: "About", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Journal", href: "#journal" },
  ];

  return (
    <header className="fixed top-4 left-0 w-full z-50 px-4">
      <div className="max-w-6xl mx-auto flex items-center">
        {/* Logo — standalone, left side */}
        <a
          id="brand-logo-link"
          href="#home"
          className="flex items-center space-x-2.5 group transition-all flex-shrink-0"
        >
          <div className="w-9 h-9 rounded-full bg-primary-red flex items-center justify-center text-white shadow-md shadow-deep-red/10 group-hover:scale-105 transition-transform duration-300">
            <Activity className="w-5 h-5" />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-display text-base font-bold tracking-tight text-white leading-none">
              RED MONK
            </span>
            <span className="text-[8px] font-mono tracking-widest text-white/60 uppercase font-semibold">
              Wellness Clinic
            </span>
          </div>
        </a>

        {/* Glass pill navbar — centered nav links */}
        <div
          className={`flex items-center rounded-full border transition-all duration-300 mx-auto ${
            isScrolled
              ? "bg-black/10 backdrop-blur-xl border-white/20 shadow-lg"
              : "bg-black/5 backdrop-blur-lg border-white/15 shadow-sm"
          }`}
        >
          {/* Desktop nav links */}
          <nav id="desktop-navbar" className="hidden lg:flex items-center h-12 px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-wider font-semibold transition-all duration-200 ${
                  activeSection === link.href.slice(1) || (activeSection === "home" && link.name === "Home")
                    ? "text-white bg-white/20 shadow-sm"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden items-center h-12 px-3">
            <button
              id="mobile-menu-trigger"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 rounded-full text-white/60 hover:text-white hover:bg-white/10 focus:outline-none transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-collapsible-menu"
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-3 bg-black/20 backdrop-blur-xl border border-white/20 overflow-hidden shadow-xl rounded-3xl max-w-6xl mx-auto"
          >
            <div className="px-4 pt-3 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-full text-sm font-semibold tracking-wide transition-all ${
                    activeSection === link.href.slice(1)
                      ? "text-white bg-white/20 font-bold"
                      : "text-white/60 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <button
                  id="mobile-book-now-button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onBookNowClick();
                  }}
                  className="w-full text-center bg-cta-red hover:bg-deep-red text-white py-3 rounded-full text-sm font-semibold shadow-md cursor-pointer"
                >
                  Book Now!
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
