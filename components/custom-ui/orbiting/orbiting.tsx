"use client";
import React, { useEffect, useState, memo } from "react";

// --- Type Definitions ---
type IconType =
  | "html"
  | "css"
  | "javascript"
  | "react"
  | "node"
  | "tailwind"
  | "django"
  | "visualStudio"
  | "SQL";

type GlowColor = "cyan" | "purple";

interface SkillIconProps {
  type: IconType;
}

interface SkillConfig {
  id: string;
  orbitRadius: number;
  size: number;
  speed: number;
  iconType: IconType;
  phaseShift: number;
  glowColor: GlowColor;
  label: string;
}

interface OrbitingSkillProps {
  config: SkillConfig;
  angle: number;
}

interface GlowingOrbitPathProps {
  radius: number;
  glowColor?: GlowColor;
  animationDelay?: number;
}

// --- Improved SVG Icon Components ---
const iconComponents: Record<
  IconType,
  { component: () => React.JSX.Element; color: string }
> = {
  html: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path
          d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
          fill="#E34F26"
        />
      </svg>
    ),
    color: "#E34F26",
  },
  css: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path
          d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.751L12 19.351l5.379-1.443.744-8.157z"
          fill="#1572B6"
        />
      </svg>
    ),
    color: "#1572B6",
  },
  javascript: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <rect width="24" height="24" fill="#F7DF1E" />
        <path
          d="M22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
          fill="#323330"
        />
      </svg>
    ),
    color: "#F7DF1E",
  },
  react: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <circle cx="12" cy="12" r="2.05" fill="#61DAFB" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" />
          <ellipse
            cx="12"
            cy="12"
            rx="11"
            ry="4.2"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="11"
            ry="4.2"
            transform="rotate(120 12 12)"
          />
        </g>
      </svg>
    ),
    color: "#61DAFB",
  },
  node: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path
          d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.602.065-.037.151-.023.218.017l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.135-.141.135-.241V6.921c0-.103-.055-.198-.137-.246l-8.791-5.072c-.081-.047-.189-.047-.273 0L2.075 6.675c-.084.048-.139.144-.139.246v10.146c0 .1.055.194.139.241l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L1.352 18.675C.533 18.215 0 17.352 0 16.43V6.284c0-.922.533-1.786 1.352-2.245L10.147-.963c.8-.452 1.866-.452 2.657 0l8.796 5.002c.819.459 1.352 1.323 1.352 2.245v10.146c0 .922-.533 1.783-1.352 2.245l-8.796 5.078c-.28.163-.601.247-.926.247zm2.717-6.993c-3.849 0-4.654-1.766-4.654-3.246 0-.14.114-.253.256-.253h1.136c.127 0 .232.091.252.215.173 1.164.686 1.752 3.01 1.752 1.852 0 2.639-.419 2.639-1.401 0-.566-.224-1.03-3.099-1.249-2.404-.184-3.89-.768-3.89-2.689 0-1.771 1.491-2.825 3.991-2.825 2.808 0 4.199.975 4.377 3.068.007.072-.019.141-.065.193-.047.049-.111.077-.178.077h-1.14c-.119 0-.225-.083-.248-.196-.276-1.224-.944-1.616-2.746-1.616-2.023 0-2.259.705-2.259 1.234 0 .641.278.827 3.006 1.19 2.7.359 3.982.866 3.982 2.771 0 1.922-1.603 3.024-4.399 3.024z"
          fill="#339933"
        />
      </svg>
    ),
    color: "#339933",
  },
  tailwind: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path
          d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
          fill="#06B6D4"
        />
      </svg>
    ),
    color: "#06B6D4",
  },
  django: {
    component: () => (
      <svg
        fill="currentColor"
        className="w-full h-full"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>django</title>
        <path d="M22.706 1.095h4.882v5.009h-4.882zM27.589 8.609v11.32c0.045 0.437 0.070 0.943 0.070 1.456 0 2.143-0.446 4.181-1.249 6.028l0.038-0.098c-0.871 1.637-2.259 2.903-3.943 3.596l-0.052 0.019-4.534-2.156c1.671-0.593 3.020-1.747 3.85-3.23l0.018-0.036c0.698-1.395 0.919-3.012 0.919-7.26v-9.64h4.882zM14.937 12.445c-0.462-0.162-0.996-0.255-1.55-0.255-0.034 0-0.069 0-0.103 0.001l0.005-0c-0.074-0.005-0.161-0.008-0.248-0.008-2.036 0-3.687 1.651-3.687 3.687 0 0.179 0.013 0.356 0.038 0.528l-0.002-0.020c-0.021 0.146-0.034 0.315-0.034 0.487 0 1.964 1.592 3.556 3.556 3.556 0.122 0 0.242-0.006 0.361-0.018l-0.015 0.001c0.593-0 1.175-0.046 1.743-0.135l-0.063 0.008v-7.832zM14.937 1.069h4.882v22.603c-1.901 0.411-4.089 0.653-6.331 0.666l-0.010 0c-5.961 0-9.068-2.695-9.068-7.864-0.008-0.134-0.013-0.29-0.013-0.447 0-4.302 3.488-7.79 7.79-7.79 0.22 0 0.438 0.009 0.653 0.027l-0.028-0.002c0.045-0.001 0.097-0.001 0.15-0.001 0.702 0 1.382 0.093 2.028 0.267l-0.055-0.012z"></path>
      </svg>
    ),
    color: "#06B6D4",
  },
  visualStudio: {
    component: () => (
      // <svg
      //   fill="currentColor"
      //   className="w-full h-full"
      //   viewBox="0 0 76 76"
      //   xmlns="http://www.w3.org/2000/svg"
      // >
      //   <path d="M 27.9586,38.6386L 24,34.8214L 24,42.3333L 27.9586,38.6386 Z M 19,30L 25,28L 32.7021,34.2114L 49,19L 56,24L 56,53L 47,57L 32.5427,43.0591L 24,50L 19,47L 19,30 Z M 38.0872,38.5542L 47,45.742L 47,31.3125L 38.0872,38.5542 Z " />
      // </svg>
      <svg
        fill="currentColor"
        className="w-full h-full"
        viewBox="0 0 24 24"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Visual Studio icon</title>
        <path d="M17.58.07a1.5 1.5 0 0 0-1.032.392 1.5 1.5 0 0 0-.001 0 .88.88 0 0 0-.05.045L8.53 9.317 3.88 5.504l-.407-.35A1 1 0 0 0 2.45 5a1 1 0 0 0-.012.005l-1.816.75a1 1 0 0 0-.077.035 1 1 0 0 0-.047.028 1 1 0 0 0-.038.022 1 1 0 0 0-.048.034 1 1 0 0 0-.031.024 1 1 0 0 0-.043.036 1 1 0 0 0-.036.033 1 1 0 0 0-.032.035 1 1 0 0 0-.033.038 1 1 0 0 0-.035.044 1 1 0 0 0-.024.034 1 1 0 0 0-.032.051 1 1 0 0 0-.02.034 1 1 0 0 0-.024.05 1 1 0 0 0-.02.045 1 1 0 0 0-.016.044 1 1 0 0 0-.016.047 1 1 0 0 0-.015.055 1 1 0 0 0-.01.04 1 1 0 0 0-.008.054 1 1 0 0 0-.006.05 1 1 0 0 0-.004.083V17.33a1 1 0 0 0 .615.917l1.816.763a1 1 0 0 0 1.034-.163l.408-.35 4.65-3.813 7.968 8.81a1.5 1.5 0 0 0 .072.065 1.5 1.5 0 0 0 .057.05 1.5 1.5 0 0 0 .058.042 1.5 1.5 0 0 0 .063.044 1.5 1.5 0 0 0 .065.038 1.5 1.5 0 0 0 .065.036 1.5 1.5 0 0 0 .068.031 1.5 1.5 0 0 0 .07.03 1.5 1.5 0 0 0 .073.025 1.5 1.5 0 0 0 .066.02 1.5 1.5 0 0 0 .08.02 1.5 1.5 0 0 0 .068.014 1.5 1.5 0 0 0 .075.01 1.5 1.5 0 0 0 .075.007 1.5 1.5 0 0 0 .073.003 1.5 1.5 0 0 0 .077 0 1.5 1.5 0 0 0 .078-.005 1.5 1.5 0 0 0 .067-.007 1.5 1.5 0 0 0 .087-.014 1.5 1.5 0 0 0 .06-.012 1.5 1.5 0 0 0 .08-.022 1.5 1.5 0 0 0 .068-.02 1.5 1.5 0 0 0 .07-.028 1.5 1.5 0 0 0 .089-.037l4.942-2.376a1.5 1.5 0 0 0 .475-.362 1.5 1.5 0 0 0 .09-.112 1.5 1.5 0 0 0 .004-.007 1.5 1.5 0 0 0 .08-.125 1.5 1.5 0 0 0 .062-.12 1.5 1.5 0 0 0 .009-.017 1.5 1.5 0 0 0 .041-.107 1.5 1.5 0 0 0 .014-.037 1.5 1.5 0 0 0 .03-.107 1.5 1.5 0 0 0 .009-.037 1.5 1.5 0 0 0 .017-.1 1.5 1.5 0 0 0 .008-.05 1.5 1.5 0 0 0 .006-.091 1.5 1.5 0 0 0 .004-.079V3.946a1.5 1.5 0 0 0 0-.002 1.5 1.5 0 0 0 0-.032 1.5 1.5 0 0 0-.01-.15 1.5 1.5 0 0 0-.84-1.17L18.203.217a1.5 1.5 0 0 0-.621-.146zm.417 6.852v10.157l-6.195-5.078zM3.005 8.576l3.097 3.425-3.097 3.424z" />
      </svg>
    ),
    color: "#06B6D4",
  },
  SQL: {
    component: () => (
      <svg
        fill="currentColor"
        className="w-full h-full"
        viewBox="-8.78 0 70 70"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m 852.97077,1013.9363 c -6.55238,-0.4723 -13.02857,-2.1216 -17.00034,-4.3296 -2.26232,-1.2576 -3.98589,-2.8032 -4.66223,-4.1807 l -0.4024,-0.8196 0,-25.70807 0,-25.7081 0.31843,-0.6465 c 1.42297,-2.889 5.96432,-5.4935 12.30378,-7.0562 2.15195,-0.5305 5.2586,-1.0588 7.79304,-1.3252 2.58797,-0.2721 9.44765,-0.2307 12.02919,0.073 6.86123,0.8061 12.69967,2.6108 16.29768,5.0377 1.38756,0.9359 2.81137,2.4334 3.29371,3.4642 l 0.41358,0.8838 -0.0354,25.6303 -0.0354,25.63047 -0.33195,0.6744 c -0.18257,0.3709 -0.73406,1.1007 -1.22553,1.6216 -2.99181,3.1715 -9.40919,5.5176 -17.8267,6.5172 -1.71567,0.2038 -9.16916,0.3686 -10.92937,0.2417 z m 12.07501,-22.02839 c -0.0252,-0.0657 -1.00472,-0.93831 -2.17671,-1.93922 -1.17199,-1.00091 -2.18138,-1.86687 -2.24309,-1.92436 -0.0617,-0.0575 0.15481,-0.26106 0.48117,-0.45237 0.32635,-0.19131 0.95163,-0.7235 1.3895,-1.18265 1.2805,-1.34272 1.88466,-3.00131 1.88466,-5.17388 0,-2.1388 -0.65162,-3.8645 -1.95671,-5.1818 -1.31533,-1.3278 -2.82554,-1.8983 -5.02486,-1.8983 -3.39007,0 -5.99368,1.9781 -6.82468,5.1851 -0.28586,1.1031 -0.28432,3.33211 0.003,4.31023 0.74941,2.55136 2.79044,4.40434 5.33062,4.83946 0.8596,0.14724 0.97605,0.21071 1.5621,0.85144 0.34829,0.38078 1.06301,1.14085 1.58827,1.68904 l 0.95501,0.9967 2.53878,0 c 1.39633,0 2.51816,-0.0537 2.49296,-0.11939 z m -8.70653,-7.10848 c -0.61119,-0.31868 -0.84225,-0.56599 -1.19079,-1.27453 -0.26919,-0.54724 -0.31522,-0.85851 -0.31824,-2.15197 -0.003,-1.3143 0.0388,-1.5983 0.31987,-2.169 0.45985,-0.9339 1.09355,-1.376 2.07384,-1.4469 1.36454,-0.099 2.15217,0.5707 2.56498,2.1801 0.50612,1.97321 -0.0504,4.07107 -1.26471,4.76729 -0.63707,0.36527 -1.58737,0.40659 -2.18495,0.095 z m -11.25315,3.66269 c 2.66179,-0.5048 4.1728,-2.0528 4.1728,-4.27495 0,-1.97137 -0.97548,-3.12004 -3.6716,-4.32364 -1.54338,-0.689 -2.10241,-1.1215 -2.10241,-1.6268 0,-0.4188 0.53052,-0.8777 1.14813,-0.993 0.60302,-0.1126 2.20237,0.1652 3.14683,0.5467 l 0.79167,0.3198 0,-1.7524 0,-1.7525 -0.85923,-0.1906 c -0.53103,-0.1178 -1.64689,-0.1885 -2.92137,-0.1849 -1.80528,0 -2.15881,0.044 -2.83818,0.3138 -1.98445,0.7878 -2.92613,2.1298 -2.91107,4.1485 0.0141,1.8898 1.01108,3.06864 3.49227,4.12912 1.46399,0.62572 2.05076,1.10218 2.05076,1.66522 0,1.1965 -1.99362,1.34375 -4.10437,0.30315 -0.57805,-0.28498 -1.09739,-0.54137 -1.1541,-0.56976 -0.0567,-0.0284 -0.10311,0.79023 -0.10311,1.81917 0,1.86239 0.002,1.87137 0.33919,1.99974 1.26979,0.48278 4.07626,0.69787 5.52379,0.42335 z m 30.4308,-1.72766 0,-1.58098 -2.40584,0 -2.40583,0 0,-5.43035 0,-5.4303 -2.13089,0 -2.13088,0 0,7.0113 0,7.01131 4.53672,0 4.53672,0 0,-1.58098 z m -14.84745,-27.70503 c 4.23447,-0.2937 7.4086,-0.8482 10.20178,-1.7821 2.78264,-0.9304 4.42643,-2.0562 4.79413,-3.2834 0.14166,-0.4729 0.13146,-0.6523 -0.0665,-1.1708 -0.88775,-2.3245 -5.84694,-4.1104 -13.42493,-4.8345 -3.24154,-0.3098 -9.13671,-0.2094 -12.22745,0.2081 -4.71604,0.6372 -8.54333,1.8208 -10.2451,3.1683 -3.44251,2.726 0.19793,5.7242 8.66397,7.1354 3.67084,0.6119 8.42674,0.828 12.30414,0.559 z"
          transform="translate(-830.906 -943.981)"
        />
      </svg>
    ),
    color: "#98C379",
  },
};

// --- Memoized Icon Component ---
const SkillIcon = memo(({ type }: SkillIconProps) => {
  const IconComponent = iconComponents[type]?.component;
  return IconComponent ? <IconComponent /> : null;
});
SkillIcon.displayName = "SkillIcon";

// --- Configuration for the Orbiting Skills ---
const skillsConfig: SkillConfig[] = [
  // Inner Orbit
  {
    id: "html",
    orbitRadius: 100,
    size: 40,
    speed: 1,
    iconType: "html",
    phaseShift: 0,
    glowColor: "cyan",
    label: "HTML5",
  },
  {
    id: "css",
    orbitRadius: 100,
    size: 45,
    speed: 1,
    iconType: "css",
    phaseShift: (2 * Math.PI) / 2,
    glowColor: "cyan",
    label: "CSS3",
  },
  {
    id: "javascript",
    orbitRadius: 100,
    size: 40,
    speed: 1,
    iconType: "javascript",
    phaseShift: (2 * Math.PI) / 5,
    glowColor: "cyan",
    label: "JavaScript",
  },

  // Outer Orbit
  {
    id: "react",
    orbitRadius: 180,
    size: 50,
    speed: -0.6,
    iconType: "react",
    phaseShift: 0,
    glowColor: "purple",
    label: "React",
  },
  {
    id: "django",
    orbitRadius: 180,
    size: 45,
    speed: -0.6,
    iconType: "django",
    phaseShift: (2 * Math.PI) / 3,
    glowColor: "cyan",
    label: "Django",
  },
  {
    id: "tailwind",
    orbitRadius: 180,
    size: 40,
    speed: -0.6,
    iconType: "tailwind",
    phaseShift: (4 * Math.PI) / 3,
    glowColor: "purple",
    label: "Tailwind CSS",
  },
  {
    id: "visualstudio",
    orbitRadius: 180,
    size: 45,
    speed: -0.6,
    iconType: "visualStudio",
    phaseShift: (9 * Math.PI) / 3,
    glowColor: "purple",
    label: "Visual Studio",
  },
  {
    id: "sql",
    orbitRadius: 100,
    size: 45,
    speed: 1,
    iconType: "SQL",
    phaseShift: (5 * Math.PI) / 3,
    glowColor: "cyan",
    label: "SQL",
  },
];

// --- Memoized Orbiting Skill Component ---
const OrbitingSkill = memo(({ config, angle }: OrbitingSkillProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { orbitRadius, size, iconType, label } = config;

  const x: number = Math.cos(angle) * orbitRadius || 0;
  const y: number = Math.sin(angle) * orbitRadius || 0;

  return (
    <div
      suppressHydrationWarning
      className="absolute top-1/2 left-1/2 transition-all duration-300 ease-out"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        zIndex: isHovered ? 20 : 10,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          relative w-full h-full p-2 bg-gray-800/90 backdrop-blur-sm
          rounded-full flex items-center justify-center
          transition-all duration-300 cursor-pointer
          ${isHovered ? "scale-125 shadow-2xl" : "shadow-lg hover:shadow-xl"}
        `}
        style={{
          boxShadow: isHovered
            ? `0 0 30px ${iconComponents[iconType]?.color}40, 0 0 60px ${iconComponents[iconType]?.color}20`
            : undefined,
          color: iconComponents[iconType]?.color,
        }}
      >
        <SkillIcon type={iconType} />
        {isHovered && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900/95 backdrop-blur-sm rounded text-xs text-white whitespace-nowrap pointer-events-none">
            {label}
          </div>
        )}
      </div>
    </div>
  );
});
OrbitingSkill.displayName = "OrbitingSkill";

// --- Optimized Orbit Path Component ---
const GlowingOrbitPath = memo(
  ({
    radius,
    glowColor = "cyan",
    animationDelay = 0,
  }: GlowingOrbitPathProps) => {
    const glowColors = {
      cyan: {
        primary: "rgba(6, 182, 212, 0.4)",
        secondary: "rgba(6, 182, 212, 0.2)",
        border: "rgba(6, 182, 212, 0.3)",
      },
      purple: {
        primary: "rgba(147, 51, 234, 0.4)",
        secondary: "rgba(147, 51, 234, 0.2)",
        border: "rgba(147, 51, 234, 0.3)",
      },
    };

    const colors = glowColors[glowColor] || glowColors.cyan;

    return (
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
          animationDelay: `${animationDelay}s`,
        }}
      >
        {/* Glowing background */}
        <div
          className="absolute inset-0 rounded-full animate-pulse"
          style={{
            background: `radial-gradient(circle, transparent 30%, ${colors.secondary} 70%, ${colors.primary} 100%)`,
            boxShadow: `0 0 60px ${colors.primary}, inset 0 0 60px ${colors.secondary}`,
            animation: "pulse 4s ease-in-out infinite",
            animationDelay: `${animationDelay}s`,
          }}
        />

        {/* Static ring for depth */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: `1px solid ${colors.border}`,
            boxShadow: `inset 0 0 20px ${colors.secondary}`,
          }}
        />
      </div>
    );
  }
);
GlowingOrbitPath.displayName = "GlowingOrbitPath";

// --- Main App Component ---
export default function OrbitingSkills() {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      setTime((prevTime) => prevTime + deltaTime);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const orbitConfigs: Array<{
    radius: number;
    glowColor: GlowColor;
    delay: number;
  }> = [
    { radius: 100, glowColor: "cyan", delay: 0 },
    { radius: 180, glowColor: "purple", delay: 1.5 },
  ];

  return (
    <main className="w-full flex flex-col items-center justify-center overflow-hidden py-3 md:flex-row">
      {/* Background pattern */}
      <header className="flex flex-col items-baseline mb-8">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
          Favorite <span className="text-violet-400">Tech Stack</span>
        </h1>
        <p>React, NextJs, Python, Javascript, Django</p>
      </header>

      <div
        className="relative w-[calc(100vw-40px)] h-[calc(100vw-40px)] md:w-[450px] md:h-[450px] flex items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Central "Code" Icon with enhanced glow */}
        <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center z-10 relative shadow-2xl">
          <div className="absolute inset-0 rounded-full bg-cyan-500/30 blur-xl animate-pulse"></div>
          <div
            className="absolute inset-0 rounded-full bg-purple-500/20 blur-2xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div className="relative z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#06B6D4" />
                  <stop offset="100%" stopColor="#9333EA" />
                </linearGradient>
              </defs>
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
        </div>

        {/* Render glowing orbit paths */}
        {orbitConfigs.map((config) => (
          <GlowingOrbitPath
            key={`path-${config.radius}`}
            radius={config.radius}
            glowColor={config.glowColor}
            animationDelay={config.delay}
          />
        ))}

        {/* Render orbiting skill icons */}
        {skillsConfig.map((config) => {
          const angle = time * config.speed + (config.phaseShift || 0);
          return (
            <OrbitingSkill key={config.id} config={config} angle={angle} />
          );
        })}
      </div>
    </main>
  );
}
