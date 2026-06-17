import { ReactNode } from "react";
import LiquidGlass from "liquid-glass-react";

interface LiquidGlassButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
}

export default function LiquidGlassButton({
  children,
  onClick,
  href,
  target,
  rel,
  className = "",
}: LiquidGlassButtonProps) {
  const inner = (
    <LiquidGlass
      displacementScale={40}
      blurAmount={0.08}
      saturation={130}
      aberrationIntensity={1.5}
      elasticity={0.35}
      cornerRadius={9999}
      padding="12px 24px"
      onClick={onClick}
      style={{ display: "inline-flex", cursor: "pointer" }}
    >
      <div className={`flex items-center justify-center gap-2 text-white font-semibold ${className}`}>
        {children}
      </div>
    </LiquidGlass>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} style={{ textDecoration: "none" }}>
        {inner}
      </a>
    );
  }

  return inner;
}
