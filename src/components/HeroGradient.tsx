"use client";

import { ShaderGradient, ShaderGradientCanvas } from "shadergradient";

export default function HeroGradient() {
  return (
    <ShaderGradientCanvas
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
      pixelDensity={0.5}
      fov={50}
    >
      <ShaderGradient
        animate="on"
        brightness={1.2}
        cAzimuthAngle={180}
        cDistance={2.5}
        cPolarAngle={90}
        cameraZoom={1}
        color1="#ffffff"
        color2="#deffff"
        color3="#00d4f5"
        envPreset="city"
        grain="off"
        lightType="3d"
        positionX={-1.4}
        positionY={0}
        positionZ={0}
        reflection={0.1}
        rotationX={0}
        rotationY={10}
        rotationZ={50}
        shader="defaults"
        type="waterPlane"
        uAmplitude={1}
        uDensity={1}
        uFrequency={5.5}
        uSpeed={0.4}
        uStrength={1}
        uTime={0}
        wireframe={false}
      />
    </ShaderGradientCanvas>
  );
}
