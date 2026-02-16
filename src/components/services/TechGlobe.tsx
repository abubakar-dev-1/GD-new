"use client";

import { useEffect, useRef, type ReactNode } from "react";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiGithub,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiGraphql,
  SiKotlin,
  SiFlutter,
  SiFirebase,
  SiFigma,
  SiVercel,
  SiTailwindcss,
  SiAndroid,
  SiAmazonwebservices,
  SiCypress,
  SiSass,
  SiSwift,
} from "react-icons/si";

// ─── Technology Definitions ──────────────────────────────────────────────────
interface TechItem {
  name: string;
  icon: ReactNode;
  bg: string;
  iconColor: string;
  border?: string;
  size: number;
  iconSize: number;
}

const technologies: TechItem[] = [
  { name: "Next.js", icon: <SiNextdotjs />, bg: "#000000", iconColor: "#FFFFFF", border: "#555", size: 54, iconSize: 28 },
  { name: "React", icon: <SiReact />, bg: "#20232A", iconColor: "#61DAFB", size: 52, iconSize: 28 },
  { name: "Node.js", icon: <SiNodedotjs />, bg: "#339933", iconColor: "#FFFFFF", size: 50, iconSize: 26 },
  { name: "JavaScript", icon: <SiJavascript />, bg: "#F7DF1E", iconColor: "#000000", size: 48, iconSize: 26 },
  { name: "TypeScript", icon: <SiTypescript />, bg: "#3178C6", iconColor: "#FFFFFF", size: 48, iconSize: 26 },
  { name: "GitHub", icon: <SiGithub />, bg: "#181717", iconColor: "#FFFFFF", border: "#444", size: 46, iconSize: 24 },
  { name: "Docker", icon: <SiDocker />, bg: "#0D63A5", iconColor: "#2496ED", size: 44, iconSize: 24 },
  { name: "PostgreSQL", icon: <SiPostgresql />, bg: "#336791", iconColor: "#FFFFFF", size: 44, iconSize: 24 },
  { name: "MongoDB", icon: <SiMongodb />, bg: "#023430", iconColor: "#47A248", size: 42, iconSize: 22 },
  { name: "Redis", icon: <SiRedis />, bg: "#1A0A0A", iconColor: "#DC382D", size: 40, iconSize: 22 },
  { name: "GraphQL", icon: <SiGraphql />, bg: "#1C1024", iconColor: "#E10098", size: 42, iconSize: 22 },
  { name: "Kotlin", icon: <SiKotlin />, bg: "#1B1033", iconColor: "#7F52FF", size: 40, iconSize: 22 },
  { name: "Flutter", icon: <SiFlutter />, bg: "#02569B", iconColor: "#54C5F8", size: 40, iconSize: 22 },
  { name: "Firebase", icon: <SiFirebase />, bg: "#1A1207", iconColor: "#FFCA28", size: 42, iconSize: 22 },
  { name: "Figma", icon: <SiFigma />, bg: "#1A0D0A", iconColor: "#F24E1E", size: 40, iconSize: 22 },
  { name: "Vercel", icon: <SiVercel />, bg: "#000000", iconColor: "#FFFFFF", border: "#555", size: 40, iconSize: 22 },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, bg: "#0B1120", iconColor: "#06B6D4", size: 40, iconSize: 22 },
  { name: "Android", icon: <SiAndroid />, bg: "#0A1A0F", iconColor: "#3DDC84", size: 38, iconSize: 20 },
  { name: "AWS", icon: <SiAmazonwebservices />, bg: "#1A1207", iconColor: "#FF9900", size: 40, iconSize: 20 },
  { name: "Cypress", icon: <SiCypress />, bg: "#17202C", iconColor: "#69D3A7", size: 36, iconSize: 18 },
  { name: "Sass", icon: <SiSass />, bg: "#1A0D14", iconColor: "#CC6699", size: 36, iconSize: 18 },
  { name: "Swift", icon: <SiSwift />, bg: "#1A0E08", iconColor: "#FA7343", size: 38, iconSize: 20 },
];

export default function TechGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const logos = container.querySelectorAll<HTMLElement>(".globe-logo");
    const count = logos.length;
    if (count === 0) return;

    // ── Fibonacci sphere: evenly distribute points on a unit sphere ──
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    const spherePoints: { x: number; y: number; z: number }[] = [];

    for (let i = 0; i < count; i++) {
      const y = 1 - (2 * i) / (count - 1);
      const r = Math.sqrt(1 - y * y);
      const theta = goldenAngle * i;
      spherePoints.push({
        x: r * Math.cos(theta),
        y,
        z: r * Math.sin(theta),
      });
    }

    // ── Animation constants ──
    const PERSPECTIVE = 800;
    const TILT = 0.2;
    const cosTilt = Math.cos(TILT);
    const sinTilt = Math.sin(TILT);
    const SPEED = 0.003;

    let angle = 0;
    let isVisible = true;

    const animate = () => {
      if (!isVisible) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      angle += SPEED;
      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);

      const rect = container.getBoundingClientRect();
      const radius = Math.min(rect.width, rect.height) * 0.36;

      for (let i = 0; i < count; i++) {
        const p = spherePoints[i];

        // Rotate around Y axis
        let x = p.x * cosA - p.z * sinA;
        let z = p.x * sinA + p.z * cosA;
        let y = p.y;

        // Tilt around X axis
        const y2 = y * cosTilt - z * sinTilt;
        const z2 = y * sinTilt + z * cosTilt;
        y = y2;
        z = z2;

        // Perspective projection
        const scale = PERSPECTIVE / (PERSPECTIVE + z * radius);
        const projX = x * radius * scale;
        const projY = y * radius * scale;

        // Depth-based opacity
        const opacity = Math.max(0.12, 0.2 + 0.8 * ((z + 1) / 2));

        const el = logos[i];
        el.style.transform = `translate(-50%,-50%) translate(${projX}px,${projY}px) scale(${scale})`;
        el.style.opacity = `${opacity}`;
        el.style.zIndex = `${Math.round((z + 1) * 100)}`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Pause animation when off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(container);

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative w-full" style={{ aspectRatio: "1 / 1" }}>
      {/* Subtle radial glow */}
      <div
        className="absolute inset-[5%] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(208,255,113,0.06) 0%, rgba(208,255,113,0.02) 40%, transparent 70%)",
        }}
      />

      {/* Wireframe ring hint */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: "72%",
          height: "72%",
          border: "1px solid rgba(255,255,255,0.04)",
        }}
      />

      {/* Logo container */}
      <div
        ref={containerRef}
        className="absolute inset-0"
        style={{ perspective: "800px" }}
      >
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="globe-logo absolute left-1/2 top-1/2 flex items-center justify-center rounded-full will-change-transform select-none"
            style={{
              width: tech.size,
              height: tech.size,
              backgroundColor: tech.bg,
              border: tech.border ? `2px solid ${tech.border}` : "none",
              boxShadow: "0 2px 12px rgba(0,0,0,0.5)",
              color: tech.iconColor,
              fontSize: tech.iconSize,
              opacity: 0,
            }}
            title={tech.name}
          >
            {tech.icon}
          </div>
        ))}
      </div>
    </div>
  );
}
