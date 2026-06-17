import { useState } from "react";
import { Plus, Minus, ArrowRight, DollarSign, ShieldAlert, Sparkles, X, Check, Droplet } from "lucide-react";
import { popularDripsData, beautyTreatmentsData } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { IVDrip, BeautyTreatment } from "../types";
import GlassCard from "./GlassCard";

export default function SplitContent() {
  const [activeAccordion, setActiveAccordion] = useState<string | null>("beauty-1");
  const [isDripCatalogOpen, setIsDripCatalogOpen] = useState(false);
  const [selectedDripDetails, setSelectedDripDetails] = useState<IVDrip | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <section
      id="iv-menu"
      className="py-16 sm:py-24 bg-transparent scroll-mt-14"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Wrapper (Desktop 65% left, 35% right Split) */}
        <div id="split-asymmetrical-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
          
          {/* LEFT SIDE (~65% width: Most Popular IV Drips) */}
          <div className="lg:col-span-8 flex flex-col space-y-6" id="popular-iv-drips-container">
            
            {/* Left side title top-left */}
            <div className="flex flex-col space-y-2">
              <h3
                id="popular-drips-title"
                className="text-display text-2xl sm:text-3.5xl font-extrabold text-white tracking-tight"
              >
                Most Popular IV Drips
              </h3>
            </div>

            {/* Nested 3x2 grid of rectangular cards (IV 1, IV 2, IV 3, IV 4, IV 5, "+ view all" 6th card) */}
            <div
              id="iv-drips-grid"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {popularDripsData.map((drip: IVDrip, index: number) => (
                <GlassCard
                  key={drip.id}
                  id={`iv-drip-card-${index}`}
                  onClick={() => setSelectedDripDetails(drip)}
                  intensity="medium"
                  glowColor="neutral"
                  className="group p-6 flex flex-col justify-between cursor-pointer h-full"
                >
                  <div className="space-y-3">
                    {/* Tag & Price */}
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-cta-red bg-cta-red/10 px-2 py-0.5 rounded font-bold">
                        {drip.tag}
                      </span>
                      <span className="text-sm font-mono font-bold text-white bg-white/10 shadow-sm border border-white/10 px-2.5 py-0.5 rounded-full">
                        {drip.price}
                      </span>
                    </div>

                    {/* Drip Name */}
                    <h4
                      id={`iv-drip-name-${index}`}
                      className="text-display text-base font-bold text-white leading-snug group-hover:text-primary-red transition-colors duration-200"
                    >
                      {drip.name}
                    </h4>

                    {/* Drip Description */}
                    <p className="text-xs text-white/50 line-clamp-3 leading-relaxed">
                      {drip.description}
                    </p>
                  </div>

                  {/* Micro list of target benefits */}
                  <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap gap-1">
                    {drip.benefits.slice(0, 1).map((b, bIdx) => (
                      <span key={bIdx} className="text-[10px] font-medium text-white/70 bg-white/10 px-2 py-0.5 rounded-md flex items-center">
                        <Check className="w-3 h-3 text-emerald-600 mr-1" />
                        {b}
                      </span>
                    ))}
                    <span className="text-[10px] font-mono text-cta-red/80 font-bold ml-auto group-hover:translate-x-1 transition-transform">
                      Details →
                    </span>
                  </div>
                </GlassCard>
              ))}

              {/* 6th Highlighted Card: "+ view all" */}
              <GlassCard
                id="iv-drip-card-view-all"
                onClick={() => setIsDripCatalogOpen(true)}
                intensity="low"
                glowColor="blush"
                className="group p-6 flex flex-col items-center justify-center text-center cursor-pointer h-full border-dashed border-[#EDB7AF]/80"
              >
                <div className="w-11 h-11 rounded-full bg-white/80 flex items-center justify-center text-primary-red shadow-sm mb-3 group-hover:scale-105 transition-transform duration-300">
                  <Plus className="w-5.5 h-5.5 animate-pulse" />
                </div>
                <h4 className="text-display text-lg font-extrabold text-primary-red">
                  + View All
                </h4>
                <p className="text-xs text-white/50 px-4 mt-2">
                  Browse our full inventory of therapeutic vitamin boosts and target detox cocktails.
                </p>
                
                {/* Visual feedback glow hint */}
                <span className="text-[10px] font-mono tracking-widest text-[#CD3134] font-bold uppercase mt-4 group-hover:underline">
                  Open Catalog Menu
                </span>
              </GlassCard>

            </div>

          </div>

          {/* RIGHT SIDE (~35% width: Beauty Treatments Accordion) */}
          <div className="lg:col-span-4 flex flex-col space-y-6" id="beauty-treatments">
            
            {/* Title & Description of aesthetics section */}
            <div className="flex flex-col space-y-2">
              <h3
                id="beauty-treatments-title"
                className="text-display text-2xl sm:text-3.5xl font-extrabold text-white tracking-tight"
              >
                Featured Beauty Treatments
              </h3>
            </div>

            {/* Contained within an elegant non-interactive GlassCard box */}
            <GlassCard
              id="beauty-treatments-accordion-card"
              intensity="high"
              glowColor="blush"
              interactive={false}
              className="p-5 sm:p-6"
            >
              
              <div className="mb-6">
                <span className="text-xs font-mono font-bold tracking-wider text-[#CD3134] uppercase">
                  Science-Backed Beauty
                </span>
                <h4 className="text-display text-lg font-bold text-white mt-1">
                  Beauty, backed by science...
                </h4>
                <p className="text-xs text-white/50 mt-1.5 leading-relaxed">
                  Combining photothermal mechanics, neuromodulation, and clean deep dermis hydration for instant luminous cell profiles.
                </p>
              </div>

              {/* Accordion List Layout containing 4 items */}
              <div className="space-y-3" id="beauty-accordion">
                {beautyTreatmentsData.map((treatment: BeautyTreatment, index: number) => {
                  const isOpen = activeAccordion === treatment.id;
                  return (
                    <div
                      key={treatment.id}
                      id={`beauty-accordion-item-${index}`}
                      className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                        isOpen
                          ? "border-white/20 bg-transparent shadow-sm"
                          : "border-white/10 bg-transparent hover:border-white/30"
                      }`}
                    >
                      {/* Accordion header wrapper with + / - trigger */}
                      <button
                        onClick={() => toggleAccordion(treatment.id)}
                        className={`w-full text-left px-4 py-3 flex justify-between items-center transition-colors duration-200 cursor-pointer ${
                          isOpen ? "bg-white/5" : ""
                        }`}
                      >
                        <div className="flex flex-col text-left">
                          <span className={`text-[13px] sm:text-[14px] font-bold transition-colors ${
                            isOpen ? "text-primary-red" : "text-white/80"
                          }`}>
                            {treatment.name}
                          </span>
                          <span className="text-[10px] font-mono text-white/40 lowercase tracking-wide">
                            {treatment.tagline}
                          </span>
                        </div>
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                          isOpen
                            ? "bg-primary-red text-white rotate-180"
                            : "bg-white/10 text-white/70"
                        }`}>
                          {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                        </div>
                      </button>

                      {/* Expandable Body */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="bg-transparent"
                          >
                            <div className="p-4 border-t border-light-blush/10 flex flex-col space-y-3">
                              <p className="text-xs text-white/60 leading-relaxed">
                                {treatment.description}
                              </p>
                              
                              {/* Bullet list */}
                              <div className="pt-2 flex flex-col space-y-1.5 border-t border-white/10">
                                {treatment.benefits.map((b, bIdx) => (
                                  <div key={bIdx} className="flex items-start text-[11px] text-white/70">
                                    <Sparkles className="w-3.5 h-3.5 text-cta-red mr-1.5 flex-shrink-0 mt-0.5" />
                                    <span>{b}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* SECONDARY BUTTON - Refactored to premium Glass styling */}
              <button
                id="explore-full-beauty-menu"
                onClick={() => setIsDripCatalogOpen(true)}
                className="w-full bg-white/40 hover:bg-white/60 backdrop-blur-md border border-[#EDB7AF]/40 text-[#CD3134] mt-6 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 flex items-center justify-center space-x-1.5 cursor-pointer shadow-sm hover:shadow-[#CD3134]/10"
              >
                <span>Explore full menu</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </GlassCard>

          </div>

        </div>

      </div>

      {/* Interactive Catalog Screen / Overlay Modal when clicking "+ View All" */}
      <AnimatePresence>
        {isDripCatalogOpen && (
          <div
            id="full-clinic-catalog-overlay"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
          >
            {/* Backyard backdrop clickout */}
            <div className="absolute inset-0" onClick={() => setIsDripCatalogOpen(false)} />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 border border-light-blush/30 m-auto flex flex-col max-h-[85vh]"
            >
              
              {/* Header */}
              <div className="bg-cta-red p-6 text-white flex justify-between items-center flex-shrink-0">
                <div className="flex items-center space-x-2">
                  <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-white">
                    <Droplet className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-display text-lg sm:text-xl font-extrabold tracking-tight">
                      Therapeutic Treatment Menu
                    </h4>
                    <p className="text-[10px] sm:text-xs text-white/80 font-mono tracking-wider uppercase">
                      Comprehensive Protocols / Medical Grade 2026
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsDripCatalogOpen(false)}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-all cursor-pointer"
                  aria-label="Close Catalog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Content Body */}
              <div className="p-6 overflow-y-auto space-y-8 bg-white">
                
                {/* Drip Therapies */}
                <div className="space-y-4">
                  <h5 className="text-[11px] font-mono tracking-widest uppercase font-extrabold text-primary-red border-b border-light-blush/20 pb-1.5 flex items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary-red mr-2" />
                    Hydration & Nutrient Infusion protocols (IV Menu)
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {popularDripsData.map((drip, idx) => (
                      <div key={idx} className="bg-white p-5 rounded-2xl border border-light-blush/10 shadow-sm hover:border-cta-red/3s transition-all flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-center mb-1.5">
                            <span className="text-[9px] font-mono font-extrabold tracking-wider bg-primary-red/10 text-primary-red px-2 py-0.5 rounded uppercase">
                              {drip.tag}
                            </span>
                            <span className="text-xs font-mono font-extrabold text-neutral-900">{drip.price}</span>
                          </div>
                          <h6 className="text-sm font-bold text-neutral-950">{drip.name}</h6>
                          <p className="text-xs text-warm-muted mt-1 leading-relaxed">{drip.description}</p>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-1">
                          {drip.benefits.map((b, bIdx) => (
                            <span key={bIdx} className="text-[9px] text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded leading-none flex items-center">
                              <Check className="w-2.5 h-2.5 text-cta-red mr-1" />
                              {b}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Standard Clinic Facials & Booster protocols */}
                <div className="space-y-4">
                  <h5 className="text-[11px] font-mono tracking-widest uppercase font-extrabold text-primary-red border-b border-light-blush/20 pb-1.5 flex items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary-red mr-2" />
                    Advanced Aesthetic Dermatology Menu
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {beautyTreatmentsData.map((treatment, idx) => (
                      <div key={idx} className="bg-white p-5 rounded-2xl border border-light-blush/10 shadow-sm flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-center mb-1.5">
                            <span className="text-[9px] font-mono font-extrabold tracking-wider bg-[#CD3134]/15 text-[#CD3134] px-2 py-0.5 rounded uppercase">
                              Dermatology Grade
                            </span>
                          </div>
                          <h6 className="text-sm font-bold text-neutral-950">{treatment.name}</h6>
                          <span className="text-[9.5px] font-mono text-warm-muted/60 lowercase italic">{treatment.tagline}</span>
                          <p className="text-xs text-warm-muted mt-1.5 leading-relaxed">{treatment.description}</p>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-1">
                          {treatment.benefits.map((b, bIdx) => (
                            <span key={bIdx} className="text-[9px] text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded leading-none flex items-center">
                              <Sparkles className="w-2.5 h-2.5 text-cta-red mr-1" />
                              {b}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Catalog footer with warning */}
              <div className="bg-neutral-100 px-6 py-4 border-t border-neutral-200 text-center text-[10px] text-warm-muted flex items-center justify-center space-x-2 flex-shrink-0">
                <ShieldAlert className="w-3.5 h-3.5 text-primary-red mr-1 flex-shrink-0" />
                <span>
                  All formulations are prepared in sterile class II environments under laminar hoods. Personal results may vary based on laboratory screenings.
                </span>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Detail Showcase Modal for specific IV Drip Card Click */}
      <AnimatePresence>
        {selectedDripDetails && (
          <div
            id="drip-details-modal"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            {/* clickout wrapper */}
            <div className="absolute inset-0" onClick={() => setSelectedDripDetails(null)} />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-md bg-white border border-light-blush/20 rounded-2xl p-6 sm:p-8 z-10 shadow-2xl"
            >
              <button
                onClick={() => setSelectedDripDetails(null)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-950 transition-colors cursor-pointer text-xl"
              >
                ×
              </button>

              <div className="space-y-4">
                <span className="inline-flex px-3 py-1 rounded bg-[#CD3134]/10 text-xs font-mono font-extrabold text-[#CD3134]">
                  {selectedDripDetails.tag} infusion
                </span>
                <h4 className="text-display text-xl sm:text-2xl font-bold text-neutral-900 leading-tight">
                  {selectedDripDetails.name}
                </h4>
                
                <p className="text-xs sm:text-sm text-warm-muted leading-relaxed">
                  {selectedDripDetails.description}
                </p>

                <div className="pt-3 border-t border-neutral-100">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase font-semibold">
                    Signature Benefits
                  </span>
                  <div className="grid grid-cols-1 gap-2 mt-2">
                    {selectedDripDetails.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-xs text-neutral-700">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 mr-2 flex-shrink-0">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-neutral-100 mt-6">
                  <div className="flex flex-col">
                    <span className="text-[9.5px] font-mono text-warm-muted/70 uppercase">
                      Pricing Tier
                    </span>
                    <span className="text-lg font-mono font-extrabold text-neutral-900">
                      {selectedDripDetails.price}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedDripDetails(null);
                      const el = document.getElementById("reserve-your-slot");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="bg-[#CD3134] hover:bg-deep-red text-white py-2.5 px-5 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer"
                  >
                    Select & Book Drip
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
