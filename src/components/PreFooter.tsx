import { useState, FormEvent } from "react";
import {
  MapPin,
  Calendar,
  Clock,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Send,
  Compass,
  CheckCircle,
  Sparkles,
  PhoneCall,
  Activity
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import GlassCard from "./GlassCard";

export default function PreFooter() {
  // Booking Form State
  const [formData, setFormData] = useState({
    fullName: "",
    emailAdd: "",
    mobilePhone: "",
    selectedService: "Myers' Cleanse IV",
    preferredLocation: "Mumbai - Bandra West",
    preferredDate: "",
    notes: "",
  });

  const [bookingConfirmation, setBookingConfirmation] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmitBooking = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.mobilePhone || !formData.preferredDate) {
      setFormError("Please fill in all mandatory fields containing *.");
      return;
    }
    
    setFormError(null);
    // Simulate successful clinical receipt
    const voucherCode = `RM-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingConfirmation(voucherCode);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      emailAdd: "",
      mobilePhone: "",
      selectedService: "Myers' Cleanse IV",
      preferredLocation: "Mumbai - Bandra West",
      preferredDate: "",
      notes: "",
    });
    setBookingConfirmation(null);
  };

  return (
    <section
      id="reserve-your-slot"
      className="py-16 sm:py-24 bg-transparent relative scroll-mt-14"
    >
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Reserve Your Slot (Contact Form) */}
          <div className="lg:col-span-5 w-full flex flex-col space-y-6" id="reserve-slot-column">
            
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-white/70">
                Reserve Your Slot
              </span>
              <h3 className="text-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Schedule Infusion
              </h3>
              <p className="text-xs text-white/50 leading-relaxed">
                Complete our rapid intake query. A cellular specialist will call within 12 minutes to screen your health history.
              </p>
            </div>

            {/* Form Placeholder Container block */}
            <GlassCard
              intensity="high"
              glowColor="blush"
              interactive={false}
              className="p-6 relative text-neutral-900"
            >
              <AnimatePresence mode="wait">
                {!bookingConfirmation ? (
                  <motion.form
                    key="booking-form"
                    onSubmit={handleSubmitBooking}
                    className="space-y-4 text-left"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {formError && (
                      <div className="p-3 text-xs bg-red-50 border border-primary-red/20 text-primary-red rounded-lg font-medium">
                        {formError}
                      </div>
                    )}
                    <div>
                      <label className="block text-[11px] font-mono uppercase text-warm-muted/80 font-bold mb-1">
                        Full Name <span className="text-primary-red">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Shreya Sharma"
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-light-blush/30 bg-white text-neutral-900 placeholder:text-neutral-300 focus:outline-none focus:border-cta-red ring-cta-red/10 transition-all font-sans"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-mono uppercase text-warm-muted/80 font-bold mb-1">
                          Phone Number <span className="text-primary-red">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.mobilePhone}
                          onChange={(e) => setFormData({ ...formData, mobilePhone: e.target.value })}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-light-blush/30 bg-white text-neutral-900 placeholder:text-neutral-300 focus:outline-none focus:border-cta-red transition-all font-sans"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono uppercase text-warm-muted/80 font-bold mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.emailAdd}
                          onChange={(e) => setFormData({ ...formData, emailAdd: e.target.value })}
                          placeholder="e.g. name@domain.com"
                          className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-light-blush/30 bg-white text-neutral-900 placeholder:text-neutral-300 focus:outline-none focus:border-cta-red transition-all font-sans"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-mono uppercase text-warm-muted/80 font-bold mb-1">
                          Select Service
                        </label>
                        <select
                          value={formData.selectedService}
                          onChange={(e) => setFormData({ ...formData, selectedService: e.target.value })}
                          className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-light-blush/30 bg-white text-neutral-900 placeholder:text-neutral-300 focus:outline-none focus:border-cta-red transition-all"
                        >
                          <option>Myers' Cleanse IV (The Monk's Elixir)</option>
                          <option>NAD+ Cellular Longevity (Premium)</option>
                          <option>Glutathione Skin Radiance</option>
                          <option>Vitamin Shots Injection</option>
                          <option>Laser Resurfacing Treatment</option>
                          <option>Anti-Wrinkle Botox Suite</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono uppercase text-warm-muted/80 font-bold mb-1">
                          Clinic Location
                        </label>
                        <select
                          value={formData.preferredLocation}
                          onChange={(e) => setFormData({ ...formData, preferredLocation: e.target.value })}
                          className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-light-blush/30 bg-white text-neutral-900 placeholder:text-neutral-300 focus:outline-none focus:border-cta-red transition-all"
                        >
                          <option>Mumbai - Bandra West</option>
                          <option>Kolkata - Salt Lake Sec V</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase text-warm-muted/80 font-bold mb-1">
                        Select Appointment Date <span className="text-primary-red">*</span>
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-light-blush/30 bg-white text-neutral-900 placeholder:text-neutral-300 focus:outline-none focus:border-cta-red transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase text-warm-muted/80 font-bold mb-1">
                        Clinician Notes (Allergies or target goals)
                      </label>
                      <textarea
                        rows={2}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="State any specific health goals or vascular concerns..."
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-light-blush/30 bg-white text-neutral-900 placeholder:text-neutral-300 focus:outline-none focus:border-cta-red transition-all font-sans resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-cta-red hover:bg-deep-red text-white py-3.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer shadow-md shadow-cta-red/10"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Secure Booking Intake</span>
                    </button>
                    
                    <p className="text-[10px] text-center text-neutral-400">
                      🔒 HIPPA compliant. We protect client physiological parameters.
                    </p>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-prompt"
                    className="py-12 px-4 flex flex-col items-center justify-center text-center space-y-5"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <div>
                      <h4 className="text-display text-lg font-bold text-neutral-900">
                        Vascular Intake Successful!
                      </h4>
                      <p className="text-xs text-warm-muted mt-2 leading-relaxed">
                        Thank you, <strong className="text-neutral-950">{formData.fullName}</strong>. Your clinical request has been registered under medical priority queue.
                      </p>
                    </div>

                    <div className="bg-neutral-50 px-5 py-4 rounded-xl border border-neutral-100 max-w-sm w-full divide-y divide-neutral-100 space-y-1">
                      <div className="flex justify-between items-center text-xs py-1.5">
                        <span className="text-neutral-500">Security Slip ID:</span>
                        <strong className="font-mono text-primary-red">{bookingConfirmation}</strong>
                      </div>
                      <div className="flex justify-between items-center text-xs py-1.5">
                        <span className="text-neutral-500">Clinic Choice:</span>
                        <span className="font-semibold text-neutral-950 text-right">{formData.preferredLocation}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs py-1.5">
                        <span className="text-neutral-500">Scheduled Date:</span>
                        <span className="font-mono font-semibold text-neutral-950">{formData.preferredDate}</span>
                      </div>
                    </div>

                    <p className="text-[11px] text-warm-muted max-w-xs leading-normal">
                      A certified Aesthetic Practitioner will dial <strong className="text-neutral-950">{formData.mobilePhone}</strong> shortly to align pre-Screen testing requirements.
                    </p>

                    <button
                      onClick={handleReset}
                      className="text-xs text-primary-red font-bold hover:underline cursor-pointer"
                    >
                      Book Another Protocol
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>

          </div>

          {/* MIDDLE COLUMN: Social Platforms */}
          <div className="lg:col-span-3 w-full flex flex-col space-y-6" id="social-platforms-column">
            
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-white/70">
                Social Channels
              </span>
              <h3 className="text-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Our Platforms
              </h3>
              <p className="text-xs text-white/50 leading-relaxed">
                Gain educational wellness briefs, cellular bio-hack routines, and behind-the-scenes laboratory sterile disclosures.
              </p>
            </div>

            {/* Contains 4 circular placeholders in a horizontal row */}
            <GlassCard
              intensity="medium"
              glowColor="none"
              interactive={false}
              className="p-6 flex flex-col space-y-5 justify-center items-center"
            >
              
              <div id="social-circles-container" className="flex flex-wrap items-center justify-center gap-4">
                {[
                  { icon: Instagram, href: "https://instagram.com", name: "Instagram", color: "#E1306C" },
                  { icon: Facebook, href: "https://facebook.com", name: "Facebook", color: "#1877F2" },
                  { icon: Linkedin, href: "https://linkedin.com", name: "LinkedIn", color: "#0077B5" },
                  { icon: Youtube, href: "https://youtube.com", name: "YouTube", color: "#FF0000" }
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-full bg-light-blush/10 hover:bg-white text-warm-muted hover:text-primary-red flex items-center justify-center border border-white/10 hover:border-cta-red/30 shadow-sm transition-all duration-300 hover:scale-115 cursor-pointer hover:shadow-md hover:shadow-deep-red/10 group"
                  >
                    <item.icon className="w-5 h-5 group-hover:stroke-primary-red group-hover:scale-105 transition-transform" />
                  </a>
                ))}
              </div>

              <div className="w-full text-center space-y-3 pt-4 border-t border-white/10">
                <span className="text-[10px] uppercase font-mono tracking-widest text-white/50 font-bold block">
                  Weekly Bio-Briefs
                </span>
                
                <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                  <span className="text-[14px] font-bold text-neutral-900 block leading-tight">
                    34,200+ Subscriber base
                  </span>
                  <p className="text-[10px] text-warm-muted leading-snug mt-1.5">
                    Subscribe to receive cellular biohacking protocols directly from our chief medical office.
                  </p>
                  
                  {/* Micro Newsletter form */}
                  <form onSubmit={(e) => { e.preventDefault(); alert("Successfully added to Newsletter queue."); }} className="mt-3 flex space-x-1.5">
                    <input
                      type="email"
                      required
                      placeholder="Email info..."
                      className="bg-white border border-neutral-200 text-[10px] px-2 py-1.5 rounded-lg focus:outline-none w-full text-neutral-900 placeholder:text-neutral-300"
                    />
                    <button type="submit" className="bg-[#CD3134] text-white px-2.5 py-1.5 rounded-lg text-[10px] font-bold cursor-pointer">
                      Join
                    </button>
                  </form>
                </div>
              </div>

            </GlassCard>

          </div>

          {/* RIGHT COLUMN: Our Experience Clinics (Maps) */}
          <div className="lg:col-span-4 w-full flex flex-col space-y-6" id="clinics-maps-column">
            
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-white/70">
                Location Network
              </span>
              <h3 className="text-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Experience Clinics
              </h3>
              <p className="text-xs text-white/50 leading-relaxed">
                Step into high-end clinical lounges styled for silence and full vascular refreshment.
              </p>
            </div>

            {/* Contains two stacked rectangular placeholders for maps */}
            <div className="flex flex-col space-y-5" id="stacked-clinics-maps">
              
              {/* Clinique 1: MUMBAI */}
              <GlassCard
                id="mumbai-map-placeholder"
                intensity="medium"
                glowColor="neutral"
                className="p-5 flex flex-col justify-between relative group"
              >
                {/* Visual grid blueprint accent in background to symbolize elegant Map layout */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-15 pointer-events-none group-hover:scale-110 transition-transform">
                  <Compass className="w-full h-full text-primary-red" />
                </div>

                <div className="relative z-10 flex flex-col justify-between h-full space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-primary-red/10 flex items-center justify-center text-primary-red flex-shrink-0">
                      <MapPin className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-neutral-900 tracking-wide">
                        Google Map Mumbai
                      </h4>
                      <p className="text-[11px] text-warm-muted mt-0.5 font-light leading-relaxed">
                        Bandra Clinic: Hill View Chambers, Off Carter Road, Bandra West, Mumbai - 400050.
                      </p>
                    </div>
                  </div>

                  {/* Micro clinic details */}
                  <div className="flex flex-wrap gap-2 text-[10px] text-neutral-500 pt-1 border-t border-neutral-100">
                    <span className="flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1 text-[#CD3134]" />
                      09:00 AM – 09:00 PM
                    </span>
                    <span className="flex items-center">
                      <PhoneCall className="w-3.5 h-3.5 mr-1 text-[#CD3134]" />
                      +91 22 8493 0221
                    </span>
                  </div>

                  {/* Route Trigger */}
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white/30 hover:bg-primary-red hover:text-white px-3 py-2 rounded-lg text-[11px] font-bold text-primary-red mt-2 transition-all flex items-center justify-center space-x-1 border border-[#EDB7AF]/40 cursor-pointer shadow-sm shadow-black/5"
                  >
                    <span>Get Route Directions</span>
                    <Compass className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </GlassCard>

              {/* Clinique 2: KOLKATA */}
              <GlassCard
                id="kolkata-map-placeholder"
                intensity="medium"
                glowColor="neutral"
                className="p-5 flex flex-col justify-between relative group"
              >
                {/* Visual compass icon */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-15 pointer-events-none group-hover:scale-110 transition-transform">
                  <Activity className="w-full h-full text-primary-red" />
                </div>

                <div className="relative z-10 flex flex-col justify-between h-full space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-primary-red/10 flex items-center justify-center text-primary-red flex-shrink-0">
                      <MapPin className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-neutral-900 tracking-wide">
                        Google Map Kolkata
                      </h4>
                      <p className="text-[11px] text-warm-muted mt-0.5 font-light leading-relaxed">
                        Salt Lake Clinic: Infinity Benchmark, Sector V, Salt Lake City, Kolkata - 700091.
                      </p>
                    </div>
                  </div>

                  {/* Micro clinic details */}
                  <div className="flex flex-wrap gap-2 text-[10px] text-neutral-500 pt-1 border-t border-neutral-100">
                    <span className="flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1 text-[#CD3134]" />
                      10:00 AM – 08:30 PM
                    </span>
                    <span className="flex items-center">
                      <PhoneCall className="w-3.5 h-3.5 mr-1 text-[#CD3134]" />
                      +91 33 4902 8114
                    </span>
                  </div>

                  {/* Route Trigger */}
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white/30 hover:bg-primary-red hover:text-white px-3 py-2 rounded-lg text-[11px] font-bold text-primary-red mt-2 transition-all flex items-center justify-center space-x-1 border border-[#EDB7AF]/40 cursor-pointer shadow-sm shadow-black/5"
                  >
                    <span>Get Route Directions</span>
                    <Compass className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </GlassCard>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
