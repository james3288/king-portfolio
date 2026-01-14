import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
const useSmoothScroll = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    lenisRef.current = new Lenis();
  }, []);

  const scrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (!target || !lenisRef.current) return;

    lenisRef.current.scrollTo(target, {
      offset: -80, // adjust if nav is fixed
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  };
  return { scrollTo };
};

export default useSmoothScroll;
