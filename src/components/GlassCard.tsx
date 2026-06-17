import { ReactNode, HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  id?: string;
  intensity?: "low" | "medium" | "high";
  glowColor?: "red" | "blush" | "neutral" | "none";
  interactive?: boolean;
  onClick?: any;
  key?: any;
}

export default function GlassCard({
  children,
  className = "",
  id,
  intensity = "medium",
  glowColor = "neutral",
  interactive = true,
  onClick,
  ...props
}: GlassCardProps) {
  // Define backdrop blur and backgrounds based on requested intensity
  // Dark glass effect matching navbar: translucent black with backdrop blur
  const blurMap = {
    low: "bg-black/5 backdrop-blur-lg border-white/15",
    medium: "bg-black/10 backdrop-blur-xl border-white/20",
    high: "bg-black/15 backdrop-blur-xl border-white/25",
  };

  // Define glow colors — subtle shadow depth
  const glowMap = {
    red: "shadow-md shadow-primary-red/10",
    blush: "shadow-md shadow-soft-coral/10",
    neutral: "shadow-md shadow-black/10",
    none: "shadow-none",
  };

  const interactiveStyles = interactive
    ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer"
    : "transition-all duration-300";

  return (
    <div
      id={id}
      onClick={onClick}
      className={`
        relative 
        rounded-2xl 
        border 
        ${blurMap[intensity]} 
        ${glowMap[glowColor]} 
        ${interactiveStyles} 
        overflow-hidden
        ${className}
      `}
      {...props}
    >
      {/* Content slot */}
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
}
