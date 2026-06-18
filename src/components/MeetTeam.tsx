import { useState } from "react";
import { Plus, Minus, HeartHandshake, ShieldCheck, Mail, Linkedin } from "lucide-react";
import { teamData } from "../data";
import { TeamMember } from "../types";
import { motion, AnimatePresence } from "motion/react";
import GlassCard from "./GlassCard";

const EASE_OUT = [0.22, 0.61, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
};

export default function MeetTeam() {
  const [expandedMemberId, setExpandedMemberId] = useState<string | null>(null);

  const toggleExpandedMember = (id: string) => {
    setExpandedMemberId(expandedMemberId === id ? null : id);
  };

  return (
    <section
      id="team"
      className="py-16 sm:py-24 bg-transparent border-t border-[#EDB7AF]/25 relative scroll-mt-14"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Headline */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2
            id="team-main-heading"
            className="text-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Meet the Team
          </h2>
          <p className="text-sm text-white/50 leading-relaxed font-light">
            Our wellness specialists combine rigorous clinical medicine training with aesthetic design guidelines to protect your cell baseline.
          </p>
        </div>

        {/* 4-column Grid of Profile Cards */}
        <motion.div
          id="team-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={containerVariants}
        >
          {teamData.map((member: TeamMember, index: number) => {
            const isExpanded = expandedMemberId === member.id;
            return (
              <motion.div key={member.id} variants={cardVariants}>
              <GlassCard
                id={`team-card-${index}`}
                intensity="medium"
                glowColor="blush"
                className={`p-6 flex flex-col items-center text-center h-full ${
                  isExpanded ? "border-[#EDB7AF]/60 bg-white/75" : ""
                }`}
              >
                {/* Profile Portrait Outer Ring with subtle medical color scheme */}
                <div className="relative w-28 h-28 sm:w-32 h-32 mb-5 group-hover:scale-105 transition-transform duration-300">
                  
                  {/* Outer decorative ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-primary-red/20 group-hover:border-primary-red scale-105 transition-colors duration-300" />
                  
                  {/* Large Circular Portrait Placeholders */}
                  <div className="w-full h-full rounded-full overflow-hidden bg-neutral-100 border-2 border-white shadow-inner">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Micro medical verification check on portrait corner */}
                  <div className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-cta-red text-white flex items-center justify-center border-2 border-white shadow">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Name */}
                <h3
                  id={`team-member-name-${index}`}
                  className="text-display text-base sm:text-lg font-bold text-neutral-900 group-hover:text-primary-red transition-colors"
                >
                  {member.name}
                </h3>

                {/* Position / Role beneath the name */}
                <p
                  id={`team-member-role-${index}`}
                  className="text-xs font-semibold text-[#CD3134] tracking-wide mt-1 h-8 flex items-center justify-center px-4"
                >
                  {member.role}
                </p>

                {/* Mini clinical verify bullet */}
                <div className="flex items-center space-x-1 mt-1 text-[10px] font-mono text-warm-muted/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Verified Practitioner</span>
                </div>

                {/* Expandable bio segment with motion */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden w-full text-center"
                    >
                      <div className="pt-4 mt-4 border-t border-white/10 space-y-3">
                        <p className="text-xs text-warm-muted leading-relaxed font-light">
                          {member.bio}
                        </p>
                        
                        {/* Interactive contact shortcut keys */}
                        <div className="flex justify-center space-x-3 pt-2">
                          <a href="#" className="p-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 transition-colors">
                            <Mail className="w-3.5 h-3.5" />
                          </a>
                          <a href="#" className="p-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 transition-colors">
                            <Linkedin className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Spacer block */}
                <div className="h-6" />

                {/* Small '+' icon at the bottom of the card */}
                <button
                  id={`team-expand-btn-${index}`}
                  onClick={() => toggleExpandedMember(member.id)}
                  className={`absolute bottom-4 w-8 h-8 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                    isExpanded
                      ? "bg-primary-red border-primary-red text-white"
                      : "bg-white/80 border-[#EDB7AF]/30 text-warm-muted hover:bg-primary-red hover:text-white"
                  }`}
                  aria-label="Expand bio details"
                >
                  {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </button>

              </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
