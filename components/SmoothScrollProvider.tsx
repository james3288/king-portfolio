"use client";

import Lenis from "@studio-freight/lenis";
import { createContext, useContext, useEffect, useRef, ReactNode } from "react";

type ScrollToOptions = Parameters<Lenis["scrollTo"]>[1];

type LenisContextType = {
  scrollTo: (
    target: string | number | HTMLElement,
    options?: ScrollToOptions,
  ) => void;
};

const LenisContext = createContext<LenisContextType | null>(null);

export const useLenis = () => {
  const ctx = useContext(LenisContext);
  if (!ctx) {
    throw new Error("useLenis must be used within SmoothScrollProvider");
  }
  return ctx;
};

export default function SmoothScrollProvider({
  children,
}: {
  children: ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (lenisRef.current) return;

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollTo = (
    target: string | number | HTMLElement,
    options?: ScrollToOptions,
  ) => {
    lenisRef.current?.scrollTo(target, options);
  };

  return (
    <LenisContext.Provider value={{ scrollTo }}>
      {children}
    </LenisContext.Provider>
  );
}
