
"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";

export function InteractiveHero() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;
    let renderer: THREE.WebGLRenderer | null = null;
    let animationFrameId: number;

    try {
      // Scene
      const scene = new THREE.Scene();

      // Camera
      const camera = new THREE.PerspectiveCamera(
        75,
        currentMount.clientWidth / currentMount.clientHeight,
        0.1,
        1000
      );
      camera.position.z = 70;

      // Renderer
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      currentMount.appendChild(renderer.domElement);

      // Digital Rain Particles
      const particlesCount = 10000;
      const positions = new Float32Array(particlesCount * 3);
      const velocities = new Float32Array(particlesCount);
      const colors = new Float32Array(particlesCount * 3);
      const primaryColor = new THREE.Color("hsl(var(--primary))");

      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        positions[i3] = (Math.random() - 0.5) * 200; // x
        positions[i3 + 1] = Math.random() * 150;     // y
        positions[i3 + 2] = (Math.random() - 0.5) * 50;  // z
        
        velocities[i] = 0.2 + Math.random() * 0.3; // speed

        const intensity = Math.random() * 0.5 + 0.5;
        colors[i3] = primaryColor.r * intensity;
        colors[i3 + 1] = primaryColor.g * intensity;
        colors[i3 + 2] = primaryColor.b * intensity;
      }

      const particlesGeometry = new THREE.BufferGeometry();
      particlesGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
       particlesGeometry.setAttribute(
        "color",
        new THREE.BufferAttribute(colors, 3)
      );

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.5,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        transparent: true,
        opacity: 0.8
      });

      const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particleSystem);
      
      // Animation
      const animate = () => {
        if (!renderer) return;
        animationFrameId = requestAnimationFrame(animate);
        
        const positions = particleSystem.geometry.attributes.position.array as Float32Array;

        for (let i = 0; i < particlesCount; i++) {
            positions[i * 3 + 1] -= velocities[i];
            if (positions[i * 3 + 1] < -75) {
                positions[i * 3 + 1] = 75;
            }
        }
        
        particleSystem.geometry.attributes.position.needsUpdate = true;
        particleSystem.rotation.y += 0.0001;

        renderer.render(scene, camera);
      };

      animate();

      // Handle resize
      const handleResize = () => {
        if (!renderer) return;
        const width = currentMount.clientWidth;
        const height = currentMount.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        cancelAnimationFrame(animationFrameId);
        if (currentMount && renderer) {
          currentMount.removeChild(renderer.domElement);
        }
        renderer?.dispose();
      };
    } catch (error) {
      console.error("Failed to initialize WebGL for InteractiveHero:", error);
      if (renderer && currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
    }
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0 opacity-40" />;
}
