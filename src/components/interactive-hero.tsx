
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
      if (!window.WebGLRenderingContext) {
        console.warn("WebGL is not supported in this browser.");
        return;
      }
       // Scene
      const scene = new THREE.Scene();

      // Camera
      const camera = new THREE.PerspectiveCamera(
        75,
        currentMount.clientWidth / currentMount.clientHeight,
        0.1,
        1000
      );
      camera.position.z = 50;

      // Renderer
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      currentMount.appendChild(renderer.domElement);

      // Mouse
      const mouse = new THREE.Vector2(-10, -10);
      const handleMouseMove = (event: MouseEvent) => {
        if (!currentMount) return;
        const rect = currentMount.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      };
      window.addEventListener('mousemove', handleMouseMove);

      // Particle Geometry
      const particlesCount = 5000;
      const positions = new Float32Array(particlesCount * 3);
      const originalPositions = new Float32Array(particlesCount * 3);
      const colors = new Float32Array(particlesCount * 3);
      const primaryColor = new THREE.Color("hsl(var(--primary))");
      const accentColor = new THREE.Color("hsl(var(--accent))");

      const grid = { width: 100, height: 100 };
      let i = 0;
      for (let x = 0; x < grid.width; x++) {
        for (let y = 0; y < grid.height; y++) {
          if (i >= particlesCount) break;
          const i3 = i * 3;
          const xPos = (x - grid.width / 2) * 1.5;
          const yPos = (y - grid.height / 2) * 1.5;
          
          positions[i3] = xPos;
          positions[i3 + 1] = yPos;
          positions[i3 + 2] = 0;

          originalPositions[i3] = xPos;
          originalPositions[i3 + 1] = yPos;
          originalPositions[i3 + 2] = 0;

          const color = Math.random() > 0.1 ? primaryColor : accentColor;
          const intensity = Math.random() * 0.5 + 0.5;
          colors[i3] = color.r * intensity;
          colors[i3 + 1] = color.g * intensity;
          colors[i3 + 2] = color.b * intensity;
          i++;
        }
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
        size: 0.8,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        transparent: true,
        opacity: 0.9,
      });

      const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particleSystem);
      
      const clock = new THREE.Clock();
      
      // Animation
      const animate = () => {
        if (!renderer) return;
        animationFrameId = requestAnimationFrame(animate);
        
        const elapsedTime = clock.getElapsedTime();
        const positions = particleSystem.geometry.attributes.position.array as Float32Array;
        
        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, camera);
        const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
        const mouseWorld = new THREE.Vector3();
        raycaster.ray.intersectPlane(plane, mouseWorld);

        for (let i = 0; i < particlesCount; i++) {
            const i3 = i * 3;
            
            const dx = mouseWorld.x - originalPositions[i3];
            const dy = mouseWorld.y - originalPositions[i3 + 1];
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            const force = Math.max(0, 10 - dist);
            const angle = Math.atan2(dy, dx);

            const targetX = originalPositions[i3] + Math.cos(angle) * force;
            const targetY = originalPositions[i3+1] + Math.sin(angle) * force;
            const targetZ = -force * 2;

            positions[i3] += (targetX - positions[i3]) * 0.05;
            positions[i3 + 1] += (targetY - positions[i3 + 1]) * 0.05;
            positions[i3 + 2] += (targetZ - positions[i3 + 2]) * 0.05;
        }
        
        particleSystem.geometry.attributes.position.needsUpdate = true;
        particleSystem.rotation.y += 0.0001;
        particleSystem.rotation.x += 0.0001;

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
        window.removeEventListener('mousemove', handleMouseMove);
        cancelAnimationFrame(animationFrameId);
        if (currentMount && renderer?.domElement) {
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

  return <div ref={mountRef} className="absolute inset-0 z-0 opacity-60" />;
}
