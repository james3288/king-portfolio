"use client";
import React from "react";
import FloatingLines from "@/components/floating-line/FloatingLines";
import TrueFocus from "../true-focus/TrueFocus";
import ChromaGrid from "../chroma/ChromaGrid";
import ShimmerButton from "../modern-buttons/shimmerButton";

const Hero3: React.FC = () => {
  return (
    <div className="w-full relative min-h-screen">
      <div className="absolute ">
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          // Array - specify line count per wave; Number - same count for all waves
          lineCount={[1, 3, 1]}
          // Array - specify line distance per wave; Number - same distance for all waves
          lineDistance={[8, 6, 4]}
          bendRadius={1.0}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
        />
        <div className="absolute bottom-0 bg-gradient-to-t from-[#0A0A0A] to-[#150E16]/5 w-full h-[50px]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:py-32 flex flex-col items-center justify-center md:flex-row">
          <div className="flex-1">
            <ChromaGrid />
          </div>

          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white leading-tight">
              <span className="text-gray-600 dark:text-gray-400">I`m King</span>
            </h1>
            <TrueFocus
              sentence="Software Developer"
              manualMode={false}
              blurAmount={3}
              borderColor="red"
              animationDuration={0.5}
              pauseBetweenAnimations={1}
            />

            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I’m a software developer with a strong foundation in enterprise
              systems, now focused on building modern web applications using
              Django and React to deliver reliable, high-quality products.
            </p>
            <div className="mt-8">
              <ShimmerButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
