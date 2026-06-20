import { ShieldCheck, Crosshair, Sparkles, Award } from "lucide-react";
import { motion } from "motion/react";
import { statsData } from "../data";
import GlassCard from "./GlassCard";
import CountUp from "./CountUp";

const EASE_OUT = [0.22, 0.61, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
};

export default function StatsBanner() {

  return (
    <section
      id="about"
      className="pt-[20vh] pb-16 sm:pb-20 rounded-3xl relative scroll-mt-14 overflow-hidden"
    >
      {/* Section background video — autoplay, loop, muted */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover rounded-3xl"
        src="/hero-video.webm"
      />
      <div className="w-full p-10 !pt-20">
        

        {/* 4-column layout spanning the full width inside light-blush backdrop card */}
        <GlassCard
          id="stats-banner-container"
          intensity="medium"
          glowColor="blush"
          interactive={false}
          className="p-8 sm:p-12 relative overflow-hidden"
        >
          <h2
            id="stats-main-heading-inner"
            className="text-center pb-10 text-2xl sm:text-3xl lg:text-4xl font-normal text-white tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
          >
            Why Red Monk Wellness?
          </h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={containerVariants}
          >
            {statsData.map((stat, idx) => (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                id={`stat-item-box-${idx}`}
                className="flex flex-col items-center text-center group"
              >

                {/* Number / Stat Value (Large, prominent, and colored in primary-red) */}
                <CountUp
                  value={stat.value}
                  className="font-mono text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-none mb-2"
                  duration={2000}
                />

                {/* Descriptive sub-text (Smaller underneath) */}
                <span
                  id={`stat-label-text-${idx}`}
                  className="text-xs sm:text-sm font-semibold text-white tracking-wide capitalize mt-1 max-w-[200px]"
                >
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

        </GlassCard>

      </div>
    </section>
  );
}
