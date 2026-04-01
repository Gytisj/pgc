"use client";

import { useEffect, useRef } from "react";

export default function HeroWaveDivider() {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.02;

      const points: string[] = [];
      const segments = 100;

      for (let i = 0; i <= segments; i++) {
        const x = (i / segments) * 1440;
        const y =
          50 +
          Math.sin((i / segments) * Math.PI * 4 + time) * 15 +
          Math.sin((i / segments) * Math.PI * 2.5 + time * 1.3) * 10 +
          Math.cos((i / segments) * Math.PI * 3 + time * 0.7) * 8;
        points.push(`${x},${y}`);
      }

      const path = `M${points[0]} ${points.map((p) => `L${p}`).join(" ")} L1440,100 L0,100 Z`;

      const svg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 100' preserveAspectRatio='none'%3E%3Cpath d='${encodeURIComponent(path)}' fill='white'/%3E%3C/svg%3E")`;

      if (divRef.current) {
        divRef.current.style.maskImage = svg;
        divRef.current.style.webkitMaskImage = svg;
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div
      ref={divRef}
      className="relative z-20 -mt-[100px] h-[100px] w-full hero-wave-cover"
      style={{
        maskSize: "100% 100%",
        WebkitMaskSize: "100% 100%",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
      }}
    />
  );
}
