import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import { cn } from "@/lib/utils";

interface Service3DCardProps {
  service: {
    title: string;
    description: string;
    iconName: string;
  };
  index: number;
}

// Glass effect presets — exact copy from GlassCard component
const blurMap: Record<string, string> = {
  low: "bg-white/20 backdrop-blur-xl border-white/30",
  medium: "bg-white/10 backdrop-blur-2xl border-white/40",
  high: "bg-white/20 backdrop-blur-2xl border-white/30",
};

const glowMap: Record<string, string> = {
  red: "shadow-md shadow-primary-red/10",
  blush: "shadow-md shadow-soft-coral/10",
  neutral: "shadow-md shadow-black/10",
  none: "shadow-none",
};

// Interactive styles — same pattern as GlassCard (minus hover:-translate-y-1 since 3D tilt handles motion)
const interactiveStyles = "transition-all duration-300 cursor-pointer";

// Service-specific imagery
const serviceImages: Record<string, string> = {
  "IV Drips":
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600&h=400",
  "Vitamin Shots":
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600&h=400",
  "Beauty & Glow":
    "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=600&h=400",
  "Wellness Plans":
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=600&h=400",
};

export default function Service3DCard({ service, index }: Service3DCardProps) {
  const imageSrc = serviceImages[service.title] ?? "";

  return (
    <CardContainer>
      <CardBody
        className={cn(
          "!p-5 relative group/card rounded-2xl p-0 sm:p-12 flex flex-col items-center text-center h-full w-full",
          "border overflow-hidden",
          blurMap.medium,
          glowMap.blush,
          interactiveStyles,
        )}
      >

        {/* Title — moderate Z-depth */}
        <CardItem translateZ="40" className="mb-3">
          <h2 className="text-display text-xl font-extrabold text-white group-hover/card:text-white/90 transition-colors duration-200">
            {service.title}
          </h2>
        </CardItem>

        {/* Description — deepest Z-depth for maximum float */}
        <CardItem translateZ="60" as="p" className="mb-6">
          <p className="text-xs sm:text-sm text-white leading-relaxed font-light">
            {service.description}
          </p>
        </CardItem>

        {/* Service Image — strongest Z-depth for dramatic float */}
        {imageSrc && (
          <CardItem translateZ="100" className="w-full mb-6">
            <img
              src={imageSrc}
              height="600"
              width="600"
              className="h-56 sm:h-64 w-full object-cover rounded-xl group-hover/card:shadow-xl transition-shadow duration-300"
              alt={service.title}
            />
          </CardItem>
        )}

        {/* Bottom action row — subtle Z-depth */}
        <div className="flex justify-between items-center w-full mt-auto">
          <CardItem
            translateZ={20}
            as="a"
            href="#services"
            className="px-4 py-2 rounded-xl text-xs font-normal text-warm-muted group-hover/card:text-primary-red transition-colors duration-200"
          >
            Learn more →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-primary-red hover:bg-cta-red text-white text-xs font-bold transition-colors duration-200"
          >
            Book now
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
