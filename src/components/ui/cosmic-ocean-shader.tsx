import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Cosmic Ocean Shader — full-viewport animated WebGL background.
 *
 * Uses THREE.js directly (not @react-three/fiber) for a single
 * full-screen quad with a procedural FBM-noise-based fragment shader.
 *
 * The component renders its own <canvas> via THREE.WebGLRenderer,
 * driven by requestAnimationFrame. All GPU resources are disposed on unmount.
 */
export default function CosmicOceanShader() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // ── Scene setup ──────────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false });
    } catch (err) {
      console.error('WebGL not supported:', err);
      container.innerHTML =
        '<p style="color:#fff;text-align:center;padding:2rem">WebGL is not available.</p>';
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // ── Shaders ──────────────────────────────────────────────────
    const vertexShader = /* glsl */ `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = /* glsl */ `
      precision highp float;
      uniform vec2  iResolution;
      uniform float iTime;

      float hash(vec2 p) {
        p = fract(p * vec2(443.897, 441.423));
        p += dot(p, p.yx + 19.19);
        return fract((p.x + p.y) * p.x);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }

      float fbm(vec2 p) {
        float value = 0.0;
        float amp   = 0.5;
        for (int i = 0; i < 6; i++) {
          value += amp * noise(p);
          p    *= 2.0;
          amp  *= 0.5;
        }
        return value;
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy * 2.0 - iResolution.xy)
                 / min(iResolution.x, iResolution.y);

        float t = iTime * 0.5;

        // Animated FBM-on-FBM pattern
        vec2  p1      = uv * 2.0 + vec2(t * 0.7);
        float pattern  = fbm(p1 + fbm(p1 + vec2(t * 0.3)));

        // Red brand palette
        vec3 color1 = vec3(0.12, 0.0,  0.02);   // deep dark maroon
        vec3 color2 = vec3(0.65, 0.13, 0.14);   // brand crimson
        vec3 color3 = vec3(0.88, 0.36, 0.30);   // warm coral highlights

        // Animated sin-wave mask
        float sinWave     = sin(uv.y * 10.0 + t * 5.0) * 0.5 + 0.5;
        float wavePattern = smoothstep(0.4, 0.6, sinWave + pattern * 0.5);

        vec3 color = mix(color1, color2, wavePattern);

        // Bright highlights on noise peaks
        float highlights = smoothstep(0.8, 0.9, pattern);
        color = mix(color, color3, highlights);

        // Vignette
        float vig = 1.0 - length(uv) * 0.5;
        color *= vig;

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    // ── Material + Mesh ──────────────────────────────────────────
    const uniforms = {
      iTime:       { value: 0.0 },
      iResolution: { value: new THREE.Vector2() },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    scene.add(new THREE.Mesh(geometry, material));

    // ── Resize handler ───────────────────────────────────────────
    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h);
      uniforms.iResolution.value.set(w * renderer.getPixelRatio(), h * renderer.getPixelRatio());
    };
    resize();
    window.addEventListener('resize', resize);

    // ── Animation loop ───────────────────────────────────────────
    let rafId = 0;
    let startTime = performance.now();

    const tick = () => {
      // Use performance.now() directly for reliable timing
      uniforms.iTime.value = (performance.now() - startTime) / 1000.0;
      renderer.render(scene, camera);
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    // ── Cleanup ──────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    />
  );
}
