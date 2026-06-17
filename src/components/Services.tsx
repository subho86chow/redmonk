import { Droplet, Syringe, Sparkles, HeartPulse, LucideIcon } from "lucide-react";
import { servicesData } from "../data";
import { ServiceItem } from "../types";
import GlassCard from "./GlassCard";

// Icon mapper
const iconComponents: Record<string, LucideIcon> = {
  Droplet: Droplet,
  Syringe: Syringe,
  Sparkles: Sparkles,
  HeartPulse: HeartPulse,
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-16 sm:py-24 bg-transparent border-y border-[#EDB7AF]/20 relative scroll-mt-14"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2
            id="services-heading"
            className="text-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Our Services
          </h2>
          <p className="text-sm sm:text-base text-white/50 leading-relaxed font-normal">
            Every clinical formulation in our repertoire is selected to maximize intracellular solubility and target active physiological pathways under medical surveillance.
          </p>
        </div>

        {/* 4-column Grid Layout for Service Cards */}
        <div
          id="services-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {servicesData.map((service: ServiceItem, index: number) => {
            const IconComponent = iconComponents[service.iconName] || Sparkles;
            return (
              <GlassCard
                key={service.id}
                id={`service-card-${index}`}
                intensity="medium"
                glowColor="blush"
                className="group p-8 flex flex-col items-center text-center h-full"
              >
                {/* Decorative background circle on card hover */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#EDB7AF]/10 rounded-bl-3xl rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Circular Icon Placeholder */}
                <div
                  id={`service-icon-wrapper-${index}`}
                  className="w-16 h-16 rounded-full bg-[#EDB7AF]/15 group-hover:bg-[#CD3134] flex items-center justify-center text-[#CD3134] group-hover:text-white transition-all duration-300 shadow-inner mb-6 relative"
                >
                  <IconComponent className="w-7 h-7 transform group-hover:rotate-6 transition-transform duration-300" />
                  
                  {/* Subtle pulsing orbit loop */}
                  <div className="absolute inset-0 rounded-full border border-[#CD3134]/10 group-hover:border-[#CD3134]/45 scale-110 group-hover:scale-125 transition-all duration-500 animate-pulse" />
                </div>

                {/* Title */}
                <h3
                  id={`service-title-${index}`}
                  className="text-display text-lg font-bold text-white mb-3 group-hover:text-primary-red transition-colors duration-200"
                >
                  {service.title}
                </h3>

                {/* Description Paragraph */}
                <p
                  id={`service-description-${index}`}
                  className="text-xs sm:text-sm text-white/60 leading-relaxed font-light"
                >
                  {service.description}
                </p>

                {/* Tiny stylized bottom anchor line */}
                <div className="w-6 group-hover:w-16 h-0.5 bg-white/30 group-hover:bg-[#CD3134] mt-6 transition-all duration-300 rounded-full" />
              </GlassCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
