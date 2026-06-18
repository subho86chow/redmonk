import { motion } from "motion/react";
import { servicesData } from "../data";
import { ServiceItem } from "../types";
import Service3DCard from "./Service3DCard";

const EASE_OUT = [0.22, 0.61, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};

// Icon mapper removed — icons removed from Service3DCard

export default function Services() {
  return (
    <section
      id="services"
      className="py-16 sm:py-24 bg-transparent border-y border-[#EDB7AF]/20 relative scroll-mt-14"
    >
      <div className="px-4 sm:px-6 lg:px-8">
        
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

        {/* 2-column Grid Layout for 3D Service Cards */}
        <motion.div
          id="services-grid"
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={containerVariants}
        >
          {servicesData.slice(0, 2).map((service: ServiceItem, index: number) => (
              <motion.div key={service.id} variants={cardVariants}>
                <Service3DCard service={service} index={index} />
              </motion.div>
            ))}
        </motion.div>

      </div>
    </section>
  );
}
