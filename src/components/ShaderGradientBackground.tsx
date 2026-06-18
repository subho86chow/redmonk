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
  axesHelper="off"
  brightness={0.9}
  cAzimuthAngle={18}
  cDistance={2.7}
  cPolarAngle={92}
  cameraZoom={1}
  color1="#E05C5C"
  color2="#E05C5C"
  color3="#edd3d3"
  destination="onCanvas"
  embedMode="off"
  envPreset="city"
  format="gif"
  fov={45}
  frameRate={10}
  gizmoHelper="hide"
  grain="off"
  lightType="3d"
  pixelDensity={0.1}
  positionX={-1.4}
  positionY={0}
  positionZ={0}
  range="disabled"
  rangeEnd={40}
  rangeStart={0}
  reflection={0.1}
  rotationX={0}
  rotationY={10}
  rotationZ={50}
  shader="defaults"
  type="waterPlane"
  uAmplitude={1}
  uDensity={1.4}
  uFrequency={5.5}
  uSpeed={1.1}
  uStrength={0.5}
  uTime={0}
  wireframe={false}
/>
    </ShaderGradientCanvas>
  );
}
