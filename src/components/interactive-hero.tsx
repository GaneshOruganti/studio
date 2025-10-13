
"use client";

import { useRef, useEffect } from "react";

export function InteractiveHero() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.error("Canvas 2D context is not supported.");
      return;
    }

    currentMount.appendChild(canvas);

    let width = currentMount.clientWidth;
    let height = currentMount.clientHeight;
    canvas.width = width;
    canvas.height = height;
    
    let animationFrameId: number;
    const particles: Particle[] = [];
    const particleCount = 100;

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 60,
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      density: number;
      color: string;
      vx: number;
      vy: number;

      constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        this.size = 2.5;
        this.density = Math.random() * 20 + 5;
        this.color = color;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        // Cursor attraction
        const dxMouse = mouse.x - this.x;
        const dyMouse = mouse.y - this.y;
        const distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        
        if (distanceMouse < mouse.radius * 2) { // Increased radius for attraction
          const force = (mouse.radius * 2 - distanceMouse) / (mouse.radius * 2);
          const forceDirectionX = dxMouse / distanceMouse;
          const forceDirectionY = dyMouse / distanceMouse;
          this.x += forceDirectionX * force * 3.5;
          this.y += forceDirectionY * force * 3.5;
        } else {
            // Add autonomous movement
            this.x += this.vx;
            this.y += this.vy;
        }

        // Boundary check
        if (this.x < 0 || this.x > width) {
            this.vx *= -1;
        }
        if (this.y < 0 || this.y > height) {
            this.vy *= -1;
        }
      }
    }

    function init() {
      particles.length = 0;
      const primaryColor = `hsl(${getComputedStyle(document.documentElement).getPropertyValue('--primary')})`;
      const accentColor = `hsl(${getComputedStyle(document.documentElement).getPropertyValue('--accent')})`;
      
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const color = Math.random() > 0.2 ? primaryColor : accentColor;
        particles.push(new Particle(x, y, color));
      }
    }

    function connect() {
      if (!ctx) return;
      let opacityValue = 1;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            opacityValue = 1 - distance / 120;
            const primaryColorValues = getComputedStyle(document.documentElement).getPropertyValue('--primary').split(' ');
            const h = parseFloat(primaryColorValues[0]);
            const s = parseFloat(primaryColorValues[1]);
            const l = parseFloat(primaryColorValues[2]);
            ctx.strokeStyle = `hsla(${h}, ${s}, ${l}, ${opacityValue})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }
    
    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (const particle of particles) {
        particle.update();
        particle.draw();
      }
      connect();
      animationFrameId = requestAnimationFrame(animate);
    }
    
    const handleMouseMove = (event: MouseEvent) => {
      const rect = currentMount.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };
    
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      width = currentMount.clientWidth;
      height = currentMount.clientHeight;
      canvas.width = width;
      canvas.height = height;
      init();
    };

    window.addEventListener("resize", handleResize);
    currentMount.addEventListener("mousemove", handleMouseMove);
    currentMount.addEventListener("mouseleave", handleMouseLeave);
    
    init();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (currentMount) {
          currentMount.removeEventListener("mousemove", handleMouseMove);
          currentMount.removeEventListener("mouseleave", handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
      if (currentMount && canvas) {
        currentMount.removeChild(canvas);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0 opacity-70" />;
}
