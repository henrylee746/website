"use client";

import { useEffect, useRef } from "react";
import createGlobe, { COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "motion/react";

import { cn } from "@/lib/utils";

const MOVEMENT_DAMPING = 1400;

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    // Bangkok, Thailand
    { location: [13.7563, 100.5018], size: 0.08 },

    // Canada
    { location: [43.6532, -79.3832], size: 0.09 }, // Toronto
    { location: [49.2827, -123.1207], size: 0.09 }, // Vancouver
    { location: [45.5019, -73.5674], size: 0.08 }, // Montreal
    { location: [46.8139, -71.208], size: 0.07 }, // Quebec City
    { location: [45.4215, -75.6972], size: 0.08 }, // Ottawa
    { location: [42.9849, -81.2453], size: 0.07 }, // London, Ontario

    // United States
    { location: [37.7749, -122.4194], size: 0.09 }, // San Francisco
    { location: [41.8781, -87.6298], size: 0.08 }, // Chicago
    { location: [34.0522, -118.2437], size: 0.09 }, // Los Angeles
    { location: [36.1699, -115.1398], size: 0.08 }, // Las Vegas
    { location: [40.7128, -74.006], size: 0.09 }, // New York City
    { location: [40.7357, -74.1724], size: 0.07 }, // Newark
    { location: [39.2904, -76.6122], size: 0.08 }, // Baltimore

    // South Korea
    { location: [37.5665, 126.978], size: 0.09 }, // Seoul
    { location: [37.4563, 126.7052], size: 0.07 }, // Incheon
    { location: [35.1796, 129.0756], size: 0.08 }, // Busan

    // Japan
    { location: [35.6762, 139.6503], size: 0.09 }, // Tokyo
    { location: [34.6937, 135.5022], size: 0.08 }, // Osaka
    { location: [35.0116, 135.7681], size: 0.07 }, // Kyoto

    // Australia
    { location: [-27.4698, 153.0251], size: 0.08 }, // Brisbane

    // Vietnam
    { location: [10.8231, 106.6297], size: 0.08 }, // Ho Chi Minh City

    // Singapore
    { location: [1.3521, 103.8198], size: 0.08 }, // Singapore

    // Malaysia (Kuala Lumpur)
    { location: [3.139, 101.6869], size: 0.08 }, // Kuala Lumpur

    // Netherlands
    { location: [52.3676, 4.9041], size: 0.08 }, // Amsterdam

    // United Kingdom & Europe
    { location: [51.5074, -0.1278], size: 0.09 }, // London
    { location: [51.752, -1.2577], size: 0.07 }, // Oxford
    { location: [48.8566, 2.3522], size: 0.09 }, // Paris

    // Russia
    { location: [55.7558, 37.6173], size: 0.09 }, // Moscow

    // Philippines
    { location: [14.5995, 120.9842], size: 0.08 }, // Manila

    // China
    { location: [39.9042, 116.4074], size: 0.09 }, // Beijing
    { location: [31.2304, 121.4737], size: 0.09 }, // Shanghai

    // South America
    { location: [-12.0464, -77.0428], size: 0.08 }, // Lima, Peru
    { location: [-33.4489, -70.6693], size: 0.08 }, // Santiago, Chile

    // Middle East
    { location: [41.0082, 28.9784], size: 0.09 }, // Istanbul
    { location: [21.4858, 39.1925], size: 0.08 }, // Jeddah

    // Switzerland
    { location: [46.2044, 6.1432], size: 0.08 }, // Geneva
  ],
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender: (state) => {
        if (!pointerInteracting.current) phi += 0.005;
        state.phi = phi + rs.get();
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    setTimeout(() => (canvasRef.current!.style.opacity = "1"), 0);
    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [rs, config]);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}
