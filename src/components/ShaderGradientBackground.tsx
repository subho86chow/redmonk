import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

export default function ShaderGradientBackground() {
  return (
    <ShaderGradientCanvas
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
      pixelDensity={2}
      fov={45}
    >
      <ShaderGradient
        animate="on"
        brightness={1}
        cAzimuthAngle={180}
        cDistance={3.6}
        cPolarAngle={90}
        cameraZoom={1}
        color1="#A62125"
        color2="#B77770"
        color3="#EDB7AF"
        envPreset="city"
        grain="off"
        lightType="3d"
        range="enabled"
        rangeEnd={40}
        rangeStart={0}
        reflection={0.5}
        type="waterPlane"
        uAmplitude={1}
        uDensity={1.2}
        uFrequency={5.5}
        uSpeed={0.3}
        uStrength={1.9}
        wireframe={false}
      />
    </ShaderGradientCanvas>
  );
}
