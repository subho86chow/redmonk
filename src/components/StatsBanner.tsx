import { ShieldCheck, Crosshair, Sparkles, Award } from "lucide-react";
import { statsData } from "../data";
import GlassCard from "./GlassCard";

export default function StatsBanner() {
  // Map icons to statistical items to add rich visual details
  const featureIcons = [
    <ShieldCheck className="w-5 h-5 text-primary-red/70 group-hover:text-primary-red transition-colors" />,
    <Crosshair className="w-5 h-5 text-primary-red/70 group-hover:text-primary-red transition-colors" />,
    <Sparkles className="w-5 h-5 text-primary-red/70 group-hover:text-primary-red transition-colors" />,
    <Award className="w-5 h-5 text-primary-red/70 group-hover:text-primary-red transition-colors" />,
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-20 bg-transparent border-y border-[#EDB7AF]/25 scroll-mt-14"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2
            id="stats-main-heading"
            className="text-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight"
          >
            Why Red Monk Wellness?
          </h2>
          <p className="text-xs sm:text-sm text-white/50 mt-3 leading-relaxed">
            We operate at the leading edge of functional cellular biology. Our protocols deliver high bioavailability with patient comfort at the core.
          </p>
        </div>

        {/* 4-column layout spanning the full width inside light-blush backdrop card */}
        <GlassCard
          id="stats-banner-container"
          intensity="medium"
          glowColor="blush"
          interactive={false}
          className="p-8 sm:p-12 relative overflow-hidden text-neutral-900"
        >
          {/* Faint design aesthetics representing medical blueprint grids */}
          <div className="absolute inset-0 grid grid-cols-4 pointer-events-none opacity-20">
            <div className="border-r border-white/10 h-full" />
            <div className="border-r border-white/10 h-full" />
            <div className="border-r border-white/10 h-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {statsData.map((stat, idx) => (
              <div
                key={stat.id}
                id={`stat-item-box-${idx}`}
                className="flex flex-col items-center text-center group"
              >
                {/* Micro Icon Holder */}
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300">
                  {featureIcons[idx] || featureIcons[0]}
                </div>

                {/* Number / Stat Value (Large, prominent, and colored in primary-red) */}
                <span
                  id={`stat-value-text-${idx}`}
                  className="font-mono text-4xl sm:text-5xl font-extrabold text-primary-red tracking-tight leading-none mb-2"
                >
                  {stat.value}
                </span>

                {/* Subtext divider line */}
                <div className="w-8 h-0.5 bg-soft-coral/40 group-hover:w-12 transition-all duration-300 my-1 rounded-full" />

                {/* Descriptive sub-text (Smaller underneath) */}
                <span
                  id={`stat-label-text-${idx}`}
                  className="text-xs sm:text-sm font-semibold text-white/60 tracking-wide capitalize mt-1 max-w-[200px]"
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </GlassCard>

      </div>
    </section>
  );
}
