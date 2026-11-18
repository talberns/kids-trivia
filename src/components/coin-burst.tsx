"use client";

import { useEffect, useRef } from "react";

interface CoinBurstProps {
  /** Change this value to fire a burst. 0 = idle. */
  readonly trigger: number;
  /** Bigger bursts for jackpots. */
  readonly intensity?: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  spin: number;
  angle: number;
  hue: number;
}

/** Canvas burst of gold coins and sparks. Does nothing when the player prefers reduced motion. */
export function CoinBurst({ trigger, intensity = 1 }: CoinBurstProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (trigger === 0) return;
    const canvas = canvasRef.current;
    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const count = Math.round(36 * intensity);
    const particles: Particle[] = Array.from({ length: count }, () => {
      const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 0.9;
      const speed = 7 + Math.random() * 9 * Math.sqrt(intensity);
      return {
        x: width / 2,
        y: height * 0.55,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        r: 5 + Math.random() * 6,
        spin: (Math.random() - 0.5) * 0.4,
        angle: Math.random() * Math.PI,
        hue: 40 + Math.random() * 15,
      };
    });

    let frame = 0;
    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.vy += 0.38;
        p.vx *= 0.99;
        p.x += p.vx;
        p.y += p.vy;
        p.angle += p.spin;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.scale(Math.abs(Math.cos(p.angle)) + 0.15, 1);
        ctx.beginPath();
        ctx.arc(0, 0, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${p.hue} 95% 58%)`;
        ctx.fill();
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = `hsl(${p.hue} 90% 80%)`;
        ctx.stroke();
        ctx.restore();
      }
      frame++;
      if (frame < 90) raf = requestAnimationFrame(draw);
      else ctx.clearRect(0, 0, width, height);
    };
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [trigger, intensity]);

  return <canvas ref={canvasRef} aria-hidden className="pointer-events-none fixed inset-0 z-50 h-full w-full" />;
}
