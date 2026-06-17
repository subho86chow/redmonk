import { ServiceItem, StatItem, IVDrip, BeautyTreatment, TeamMember, Testimonial } from "./types";

export const servicesData: ServiceItem[] = [
  {
    id: "services-1",
    title: "IV Drips",
    description: "Intravenous therapies designed for maximum absorption of premium nutrients, hydration, and medical-grade recovery.",
    iconName: "Droplet"
  },
  {
    id: "services-2",
    title: "Vitamin Shots",
    description: "Quick intramuscular injections providing immediate therapeutic support for energy, metabolism, and localized immunity.",
    iconName: "Syringe"
  },
  {
    id: "services-3",
    title: "Beauty & Glow",
    description: "Scientific aesthetic care pairing anti-aging injectables with medical facials for timeless dermatological radiance.",
    iconName: "Sparkles"
  },
  {
    id: "services-4",
    title: "Wellness Plans",
    description: "Custom longevity protocols formulated by board-certified physicians using advanced diagnostic panels.",
    iconName: "HeartPulse"
  }
];

export const statsData: StatItem[] = [
  {
    id: "stat-1",
    value: "1000+",
    label: "drifts delivered"  // Following prompt request word "drips delivered" / "drifts delivered"
  },
  {
    id: "stat-2",
    value: "12+",
    label: "Signature Drips"
  },
  {
    id: "stat-3",
    value: "30+",
    label: "Medical grade beauty Treatments"
  },
  {
    id: "stat-4",
    value: "2000+",
    label: "Happy Customers"
  }
];

export const popularDripsData: IVDrip[] = [
  {
    id: "iv-1",
    name: "The Monk's Elixir (Myers' Cleanse)",
    description: "Our signature blend of high-potency Vitamin C, B-Complex, Magnesium, and Zinc to banish chronic fatigue and restore cell baseline.",
    price: "₹8,500",
    tag: "Signature",
    benefits: ["Cellular Detoxification", "Instant Energy Recovery", "Immunity Fortification"]
  },
  {
    id: "iv-2",
    name: "NAD+ Cellular Longevity",
    description: "Advanced coenzyme formulation that penetrates the blood-brain barrier to repair DNA, maximize mental focus, and slow aging.",
    price: "₹18,000",
    tag: "Longevity",
    benefits: ["DNA Sequence Repair", "Neuro-Regeneration", "Mitochondrial Activation"]
  },
  {
    id: "iv-3",
    name: "Glutathione Radiance Glow",
    description: "The ultimate antioxidant master key. Flushes skin toxicity, neutralizes free radicals, and supports systemic bright complexion.",
    price: "₹9,500",
    tag: "Aesthetics",
    benefits: ["Melanin Stabilization", "Systemic Liver Detox", "Hydrative Brilliance"]
  },
  {
    id: "iv-4",
    name: "Executive Focus & Haze Buster",
    description: "Tailored for high-performing professionals. Replaces dry brains with balanced electrolytes, Taurine, and specialized neurological aminos.",
    price: "₹7,200",
    tag: "Cognitive",
    benefits: ["Mental Fog Clearance", "Optimal Rehydration", "Endocrine Balance"]
  },
  {
    id: "iv-5",
    name: "Immune Shield Supercharge",
    description: "High-dose Glutathione, double Zinc, and Vitamin C complex designed to stimulate lymphatic response and block viral adhesion.",
    price: "₹8,000",
    tag: "Defense",
    benefits: ["Rapid Lymphocyte Boost", "Inflammatory Response Dampening", "Adrenal Reset"]
  }
];

export const beautyTreatmentsData: BeautyTreatment[] = [
  {
    id: "beauty-1",
    name: "Laser Skin Resurfacing",
    tagline: "Photothermal cellular activation",
    description: "Precision non-ablative laser technology targeting vascular and pigmented layers to trigger endogenous collagen deposition, reducing micro-scars and refining skin texture.",
    benefits: ["Stimulates Deep Neocollagenesis", "Reduces Hyperpigmentation", "Zero Social Downtime"]
  },
  {
    id: "beauty-2",
    name: "Microneedling with PRP",
    tagline: "Vampire facial rejuvenation",
    description: "Unleash autologous growth factors directly into micro-channels to initiate tissue remodeling, tightening dermis thickness and evening superficial pores dramatically.",
    benefits: ["Harnesses Natural Recovery Factors", "Regulates sebum production", "Tightens fine contours"]
  },
  {
    id: "beauty-3",
    name: "Anti-Wrinkle Botox Therapeutics",
    tagline: "Neuromodulation for smooth radiance",
    description: "Targeted administration of pure botulinum proteins to relax hyperactive sub-dermal fibers, ironing expressive wrinkles while maintaining complete natural mobility.",
    benefits: ["Softens Forehead & Crow's Feet", "FDA-Approved Medical Grade", "Results in 5-7 days"]
  },
  {
    id: "beauty-4",
    name: "Dermal Filler Sculpting",
    tagline: "Hyaluronic acid volume alignment",
    description: "Incorporate cross-linked hyaluronic matrices under cheek, chin, or nasolabial crevices to build structural symmetry and return youthful light refraction.",
    benefits: ["Instant structural volume", "Moisture-retaining matrix", "Natural biological degradation"]
  }
];

export const teamData: TeamMember[] = [
  {
    id: "member-1",
    name: "Mandavvi Maam",
    role: "Founder & Director of Clinical Aesthetics",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Visionary practitioner dedicated to merging mindfulness with avant-garde clinical aesthetic therapies."
  },
  {
    id: "member-2",
    name: "Kanishk Jain",
    role: "Co-Founder & Chief Operations Architect",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Pioneering premium health-tech operational structures ensuring sterile standards exceed global compliance."
  },
  {
    id: "member-3",
    name: "Dr. Ashim",
    role: "Chief Medical Officer (MD, FAGE)",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Board-certified internal physician specializing in metabolic therapy, cellular anti-aging, and diagnostic IV infusions."
  },
  {
    id: "member-4",
    name: "Deepak Das",
    role: "Lead Aesthetic & Infusion Nurse Practitioner",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Senior registered clinician with 8,000+ completed vascular access procedures and elite soft tissue precision."
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "review-1",
    patientName: "Aishwarya Sen",
    text: "The NAD+ drip completely restored my circadian rhythm and vanished the brain fog I suffered from for eighteen months. The sterile clinic is incredibly beautiful too.",
    rating: 5,
    treatment: "NAD+ Cellular Longevity",
    date: "May 2026"
  },
  {
    id: "review-2",
    patientName: "Vikram Malhotra",
    text: "Being a frequent international traveler, their Myers' Cleanse IV is my permanent secret weapon. I head straight here from Mumbai airport to avoid jetlag entirely.",
    rating: 5,
    treatment: "The Monk's Elixir (Myers')",
    date: "June 2026"
  },
  {
    id: "review-3",
    patientName: "Dr. Priya Chawla",
    text: "As a fellow medical professional, I'm extremely impressed by Dr. Ashim's patient pre-screening standards. The clinical sterile precision is absolutely flawless.",
    rating: 5,
    treatment: "Glutathione Radiance Drip",
    date: "April 2026"
  },
  {
    id: "review-4",
    patientName: "Rohit Roy",
    text: "The dermal fillers and PRP therapy by Mandavvi Maam restored natural fullness to my facial symmetry with zero bruising. Highly recommend their professional medical aesthetic hand.",
    rating: 5,
    treatment: "Dermal Fillers & PRP Facials",
    date: "June 2026"
  }
];

export const heroCarouselImages = [
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1000"
];
