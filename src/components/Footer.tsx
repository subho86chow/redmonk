import { ArrowUp, Activity, ShieldAlert, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinksData = [
    {
      title: "Menu",
      links: [
        { name: "Home", href: "#home" },
        { name: "Services", href: "#services" },
        { name: "IV Menu", href: "#iv-menu" },
        { name: "Beauty Treatments", href: "#beauty-treatments" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Clinic", href: "#about" },
        { name: "Medical Team", href: "#team" },
        { name: "Clinical Journal", href: "#journal" },
        { name: "Contact Intake", href: "#reserve-your-slot" }
      ]
    },
    {
      title: "Legals",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Use", href: "#" },
        { name: "HIPPA Agreement", href: "#" },
        { name: "Safety Standards", href: "#" }
      ]
    }
  ];

  return (
    <footer id="main-clinic-footer" className="relative bg-black/10 backdrop-blur-xl text-white/60 border-t border-white/10 font-sans mt-auto rounded-t-[64px]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Logo & Manifesto block */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-primary-red flex items-center justify-center text-white font-bold">
                <Activity className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-display text-base font-bold text-white tracking-widest leading-none">
                  RED MONK
                </span>
                <span className="text-[9px] font-mono tracking-widest text-[#CD3134] uppercase font-bold">
                  Wellness Clinic
                </span>
              </div>
            </div>
            <p className="text-xs text-white/50 max-w-sm leading-relaxed">
              Synthesizing targeted micronutrient biochemistry with clinical safety protocols. Administering timeless, science-backed wellness formulas directly to your cellular pathways.
            </p>

            <div className="flex items-center space-x-2 pt-2 text-[10px] text-white/50">
              <ShieldAlert className="w-4 h-4 text-primary-red mr-1 flex-shrink-0" />
              <span>Certified Licenced ISO-9001 Facility</span>
            </div>
          </div>

          {/* Directory Links columns */}
          <div className="md:col-span-6 grid grid-cols-3 gap-4 sm:gap-8 text-left">
            {footerLinksData.map((col, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="text-[10px] font-mono tracking-widest uppercase text-white font-extrabold border-b border-white/10 pb-1.5">
                  {col.title}
                </h4>
                <ul className="space-y-2.5 text-xs">
                  {col.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a
                        href={link.href}
                        className="hover:text-primary-red text-white/50 transition-colors pointer-events-auto"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Action Call for Bookings & Contact info */}
          <div className="md:col-span-2 flex flex-col justify-between h-full items-start md:items-end">
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 hover:border-[#CD3134] text-white/60 hover:text-[#CD3134] flex items-center justify-center transition-all cursor-pointer self-start md:self-auto mb-6 hover:shadow-md"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>

            <div className="text-left md:text-right space-y-1">
              <span className="text-[9.5px] font-mono text-white/50 uppercase tracking-widest font-extrabold block">
                Intake Hotline
              </span>
              <a
                href="tel:+912284930221"
                className="text-white hover:text-[#CD3134] transition-colors font-mono font-bold text-sm sm:text-base leading-none block"
              >
                +91 (22) 8493 0221
              </a>
              <span className="text-[10px] text-white/50 block">
                emergency desk open 24/7
              </span>
            </div>
          </div>

        </div>

        {/* Divider and copyright details */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row sm:justify-between sm:items-center text-[10px] text-white/30 space-y-4 sm:space-y-0 text-left">
          <div className="space-y-1 max-w-2xl">
            <p>
              © {new Date().getFullYear()} Red Monk Wellness Pvt Ltd. All generic cellular therapies require pre-diagnostic clearance.
            </p>
            <p className="leading-relaxed">
              Disclaimer: Statements regarding dietary infusions, vitamin cocktails, and cosmetic therapeutics have not been evaluated by the Ministry of Health or local drug administrations. These services are not designed to diagnose, self-treat, cure, or prevent complex chronical illnesses.
            </p>
          </div>
          <div className="flex items-center space-x-1 sm:self-end">
            <span>Formulated with</span>
            <Heart className="w-3.5 h-3.5 text-primary-red fill-current animate-pulse" />
            <span>for clinical vitality.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
