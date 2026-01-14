// components/LenisContext.tsx
"use client";

import Lenis from "@studio-freight/lenis";
import { createContext, useContext } from "react";

export const LenisContext = createContext<Lenis | null>(null);

export const useLenis = () => useContext(LenisContext);
