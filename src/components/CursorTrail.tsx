import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  vx: number;
  vy: number;
}

export const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number>();
  const isTouchInput = useRef<boolean>(false);
  const maxParticles = useRef<number>(100);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Detect input type (touch vs mouse)
    const detectInputType = () => {
      const supportsTouch =
        "ontouchstart" in window || navigator.maxTouchPoints > 0 || (navigator as any).msMaxTouchPoints > 0;
      isTouchInput.current = supportsTouch;
      // Lower particle count on touch devices for performance
      maxParticles.current = supportsTouch ? 60 : 100;
    };
    detectInputType();

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      for (let i = 0; i < 2; i++) {
        particles.current.push({
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 3 + 1,
          opacity: 1,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        });
      }

      if (particles.current.length > maxParticles.current) {
        particles.current = particles.current.slice(-maxParticles.current);
      }
    };

    // Track touch position
    const handleTouchMove = (e: TouchEvent) => {
      if (!e.touches || e.touches.length === 0) return;
      const touch = e.touches[0];
      mousePos.current = { x: touch.clientX, y: touch.clientY };

      // Slightly fewer particles per move for mobile
      const particlesToAdd = 1;
      for (let i = 0; i < particlesToAdd; i++) {
        particles.current.push({
          x: touch.clientX,
          y: touch.clientY,
          size: Math.random() * 2 + 1,
          opacity: 1,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
        });
      }

      if (particles.current.length > maxParticles.current) {
        particles.current = particles.current.slice(-maxParticles.current);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (!e.touches || e.touches.length === 0) return;
      const touch = e.touches[0];
      mousePos.current = { x: touch.clientX, y: touch.clientY };
    };

    const handleTouchEnd = () => {
      // Optionally fade out trail naturally; no action required
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw glow around cursor
      const gradient = ctx.createRadialGradient(
        mousePos.current.x,
        mousePos.current.y,
        0,
        mousePos.current.x,
        mousePos.current.y,
        60
      );
      gradient.addColorStop(0, "rgba(0, 255, 255, 0.15)");
      gradient.addColorStop(1, "rgba(0, 255, 255, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.current = particles.current.filter((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.opacity -= 0.02;

        if (particle.opacity <= 0) return false;

        // Draw particle with glow
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        
        // Outer glow
        const particleGradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 3
        );
        particleGradient.addColorStop(0, "rgba(0, 255, 255, 0.8)");
        particleGradient.addColorStop(1, "rgba(0, 255, 255, 0)");
        ctx.fillStyle = particleGradient;
        ctx.fillRect(
          particle.x - particle.size * 3,
          particle.y - particle.size * 3,
          particle.size * 6,
          particle.size * 6
        );

        // Core particle
        ctx.fillStyle = "#00FFFF";
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();

        return true;
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove as any);
      window.removeEventListener("touchstart", handleTouchStart as any);
      window.removeEventListener("touchmove", handleTouchMove as any);
      window.removeEventListener("touchend", handleTouchEnd as any);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: "screen" }}
    />
  );
};
