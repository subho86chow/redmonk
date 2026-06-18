import { Star, Quote, Heart } from "lucide-react";
import { motion } from "motion/react";
import { testimonialsData } from "../data";
import { Testimonial } from "../types";
import GlassCard from "./GlassCard";

const EASE_OUT = [0.22, 0.61, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
};

export default function Testimonials() {
  return (
    <section
      id="journal"
      className="py-16 sm:py-24 bg-transparent border-y border-[#EDB7AF]/20 scroll-mt-14"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Headline */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2
            id="testimonials-main-heading"
            className="text-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Aesthetic & Wellness Testimonials
          </h2>
          <p className="text-sm text-white/50 leading-relaxed max-w-lg mx-auto">
            Real guest logs highlighting the safety standards and life-changing improvements in cognitive focus and youth retention.
          </p>
        </div>

        {/* 4-column Grid of Rectangular Testimonial Cards */}
        <motion.div
          id="testimonials-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={containerVariants}
        >
          {testimonialsData.map((review: Testimonial, index: number) => (
            <motion.div key={review.id} variants={cardVariants}>
            <GlassCard
              id={`testimonial-card-${index}`}
              intensity="medium"
              glowColor="blush"
              className="p-6 flex flex-col justify-between relative group h-full"
            >
              
              {/* Decorative top quote icon */}
              <div className="absolute top-5 right-5 text-[#EDB7AF]/20 group-hover:text-primary-red/15 transition-colors">
                <Quote className="w-8 h-8 transform rotate-180" />
              </div>

              <div className="space-y-4">
                
                {/* Five-star rating indicators */}
                <div className="flex space-x-1" id={`rating-star-group-${index}`}>
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#CD3134] text-[#CD3134]"
                    />
                  ))}
                </div>

                {/* Patient Quote / Review Text */}
                <p
                  id={`testimonial-text-${index}`}
                  className="text-xs sm:text-[13px] text-neutral-700 leading-relaxed font-light italic"
                >
                  "{review.text}"
                </p>

              </div>

              {/* Card Footer Metadata details */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-1">
                    <span
                      id={`testimonial-author-${index}`}
                      className="text-xs font-bold text-neutral-900"
                    >
                      {review.patientName}
                    </span>
                    <Heart className="w-3 h-3 text-primary-red fill-current opacity-80" />
                  </div>
                  
                  {/* Verified Treatment Tag */}
                  <span className="block text-[9.5px] font-mono text-primary-red/80 font-bold mt-0.5 uppercase tracking-wide">
                    {review.treatment}
                  </span>
                </div>

                <span className="text-[10px] font-mono text-neutral-400">
                  {review.date}
                </span>
              </div>

            </GlassCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
