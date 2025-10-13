
"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";

export function InteractiveHero() {
  const mountRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;
    let renderer: THREE.WebGLRenderer | null = null;

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
      camera.position.z = 5;

      // Renderer
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      currentMount.appendChild(renderer.domElement);

      // Particles
      const particlesCount = 5000;
      const positions = new Float32Array(particlesCount * 3);

      for (let i = 0; i < particlesCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 10;
      }

      const particlesGeometry = new THREE.BufferGeometry();
      particlesGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );

      const particlesMaterial = new THREE.PointsMaterial({
        color: 0x2563eb, // A color from the primary palette
        size: 0.02,
        blending: THREE.AdditiveBlending,
        transparent: true,
        opacity: 0.7
      });

      const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particleSystem);
      
      // Mouse move handler
      const handleMouseMove = (event: MouseEvent) => {
          const rect = currentMount.getBoundingClientRect();
          mouse.current.x = ((event.clientX - rect.left) / currentMount.clientWidth) * 2 - 1;
          mouse.current.y = -(((event.clientY - rect.top) / currentMount.clientHeight) * 2 - 1);
      };
      window.addEventListener("mousemove", handleMouseMove);

      // Animation
      const clock = new THREE.Clock();
      const animate = () => {
        if (!renderer) return;
        requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        // Animate particles
        particleSystem.rotation.y = elapsedTime * 0.05;
        
        // Animate camera based on mouse
        camera.position.x += (mouse.current.x * 0.5 - camera.position.x) * 0.05;
        camera.position.y += (mouse.current.y * 0.5 - camera.position.y) * 0.05;
        camera.lookAt(scene.position);


        renderer.render(scene, camera);
      };

      animate();

      // Handle resize
      const handleResize = () => {
        if (!renderer) return;
        camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
      };
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("mousemove", handleMouseMove);
        if (currentMount && renderer) {
          currentMount.removeChild(renderer.domElement);
          renderer.dispose();
        }
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
