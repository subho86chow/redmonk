import { useState, useEffect } from "react";
import { Play, ChevronLeft, ChevronRight, Volume2, Sparkles, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { heroCarouselImages } from "../data";

interface HeroProps {
  onBookDripClick: () => void;
}

export default function Hero({ onBookDripClick }: HeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Auto-scroll carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroCarouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroCarouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroCarouselImages.length) % heroCarouselImages.length);
  };

  return (
    <section
      id="home"
      className="relative pt-24 pb-16 lg:pt-36 lg:pb-28 bg-transparent overflow-hidden"
    >
      {/* Absolute decorative accent to matches requested Soft Medical Background (White, Blush, Soft Coral combo) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-light-blush/30 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-soft-coral/15 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-6 flex flex-col space-y-6 text-left" id="hero-content-column">
            

            {/* Main Headline */}
            <h1
              id="hero-main-heading"
              className="text-display text-5xl sm:text-6xl lg:text-9xl font-black tracking-tighter leading-[0.95] text-white"
            >
              <span className="block">SADA</span>
              <span className="block">SUNDAR</span>
              <span className="block">RAHO</span>
            </h1>


            {/* Horizontal Button Alignments */}
            <div className="flex flex-wrap gap-4 pt-3" id="hero-button-group">
              <button
                id="hero-book-now-btn"
                onClick={onBookDripClick}
                className="bg-cta-red hover:bg-deep-red text-white font-bold px-8 py-4 rounded-full text-sm sm:text-base tracking-wide shadow-lg shadow-primary-red/20 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center space-x-2"
              >
                <span>Book Now!</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button
                id="hero-watch-experience-btn"
                onClick={() => setIsVideoModalOpen(true)}
                className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-semibold px-6 py-4 rounded-full text-sm sm:text-base tracking-wide transition-all duration-300 flex items-center justify-center space-x-2.5 cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-white">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>Watch the Experience</span>
              </button>
            </div>

          </div>

          {/* Right Column: Media Carousel */}
          <div className="lg:col-span-6 relative w-full" id="hero-media-column">
            
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full bg-light-blush/20 rounded-2xl sm:rounded-3xl border-4 border-white shadow-xl shadow-deep-red/5 overflow-hidden">
              
              {/* Carousel Track */}
              <div className="absolute inset-0 w-full h-full">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={heroCarouselImages[currentImageIndex]}
                    alt={`Wellness Therapy ${currentImageIndex + 1}`}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>

              {/* Gradient Overlay for luxury style */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-primary-red flex items-center justify-center shadow-md hover:scale-105 transition-all cursor-pointer z-10"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-primary-red flex items-center justify-center shadow-md hover:scale-105 transition-all cursor-pointer z-10"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Indicators / Dot bar */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {heroCarouselImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      currentImageIndex === idx ? "w-7 bg-cta-red" : "bg-white/60 hover:bg-white"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Embedded Floating Clinic Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl flex items-center space-x-2 shadow-sm border border-light-blush/40 pointer-events-none">
                <Clock className="w-4 h-4 text-cta-red animate-pulse" />
                <span className="text-[10px] font-mono font-bold tracking-wider text-warm-muted uppercase">
                  Session: 45 min
                </span>
              </div>

            </div>

            {/* Circular glowing backup underlay */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-highlight-red/30 rounded-full blur-xl -z-10" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-soft-coral/40 rounded-full blur-2xl -z-10" />

          </div>

        </div>
      </div>

      {/* Experience Video Modal Setup */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <div
            id="video-experience-modal"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          >
            {/* Modal clickout backdrop */}
            <div className="absolute inset-0" onClick={() => setIsVideoModalOpen(false)} />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-3xl bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl z-10"
            >
              {/* Modal close header */}
              <div className="flex justify-between items-center px-4 py-3 bg-neutral-900 border-b border-neutral-800">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 bg-cta-red rounded-full animate-ping" />
                  <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest flex items-center">
                    <Volume2 className="w-3.5 h-3.5 mr-1" />
                    Live Clinical Showcase
                  </span>
                </div>
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="text-neutral-400 hover:text-white transition-colors text-sm font-bold uppercase cursor-pointer"
                >
                  Close ×
                </button>
              </div>

              {/* Video Simulator Area */}
              <div className="relative aspect-video w-full bg-neutral-900 flex items-center justify-center">
                {/* Beautiful looping visual background placeholder for video */}
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200"
                  alt="Clinical Environment"
                  className="absolute inset-0 w-full h-full object-cover opacity-40 filter grayscale contrast-125"
                />
                
                {/* Simulated playback details */}
                <div className="absolute inset-0 bg-radial-gradient from-transparent to-neutral-950/80 pointer-events-none" />
                
                <div className="relative flex flex-col items-center justify-center p-6 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-cta-red text-white flex items-center justify-center shadow-lg shadow-cta-red/30 animate-pulse">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                  <div className="max-w-md">
                    <h4 className="text-display text-lg font-bold text-white tracking-wide">
                      Red Monk Aesthetic Infusions
                    </h4>
                    <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                      Discover our sterile laminar flow environments, patient relaxation lounges, and the clean science that drives our intravenous molecular deliveries.
                    </p>
                  </div>
                  
                  {/* Fake Controls */}
                  <div className="flex items-center space-x-4 bg-black/60 px-4 py-2 rounded-full border border-neutral-800 text-[10px] font-mono text-neutral-300">
                    <span className="text-mono">0:24 / 2:15</span>
                    <span className="text-neutral-600">|</span>
                    <span className="hover:text-cta-red transition-colors cursor-pointer">HD 1080p</span>
                    <span className="text-neutral-600">|</span>
                    <span className="text-cta-red font-bold">Auto-Muted</span>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
