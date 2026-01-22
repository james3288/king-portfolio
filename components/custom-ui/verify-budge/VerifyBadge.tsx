"use client";
import React from "react";
import { cn } from "@/lib/utils";

// Custom SVG Icons for Verification Badges
const BasicVerifyIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      d="M12 2L4 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-8-4z"
      fill="currentColor"
      fillOpacity="0.1"
    />
    <path
      d="M12 2L4 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-8-4z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="m9 12 2 2 4-4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GoldVerifyIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <circle
      cx="12"
      cy="12"
      r="11"
      fill="url(#goldGradient)"
      fillOpacity="0.2"
    />
    <circle
      cx="12"
      cy="12"
      r="11"
      stroke="url(#goldGradient)"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M12 3.5L5.5 6.5v5.5c0 4.44 3.07 8.59 7.2 9.6 4.13-1.01 7.2-5.16 7.2-9.6V6.5l-6.5-3z"
      fill="url(#goldGradient)"
      fillOpacity="0.3"
    />
    <path
      d="M12 3.5L5.5 6.5v5.5c0 4.44 3.07 8.59 7.2 9.6 4.13-1.01 7.2-5.16 7.2-9.6V6.5l-6.5-3z"
      stroke="url(#goldGradient)"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M8 10l1.5-2L12 9.5 14.5 8 16 10l-1 3H9l-1-3z"
      fill="url(#goldGradient)"
      fillOpacity="0.6"
    />
    <path
      d="m9.5 13.5 1.5 1.5 3-3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="25%" stopColor="#FFA500" />
        <stop offset="50%" stopColor="#FFD700" />
        <stop offset="75%" stopColor="#FFED4A" />
        <stop offset="100%" stopColor="#FFA500" />
      </linearGradient>
    </defs>
  </svg>
);

const PremiumVerifyIcon = ({
  className = "w-5 h-5",
}: {
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <circle
      cx="12"
      cy="12"
      r="11"
      fill="url(#premiumGradient)"
      fillOpacity="0.1"
    />
    <circle
      cx="12"
      cy="12"
      r="11"
      stroke="url(#premiumGradient)"
      strokeWidth="2"
      fill="none"
      strokeDasharray="2 2"
      className="animate-spin"
      style={{ animationDuration: "8s" }}
    />
    <path
      d="M12 2L8 8h8l-4-6zM8 8l4 14 4-14H8z"
      fill="url(#premiumGradient)"
      fillOpacity="0.4"
    />
    <path
      d="M12 2L8 8h8l-4-6zM8 8l4 14 4-14H8z"
      stroke="url(#premiumGradient)"
      strokeWidth="1.5"
      fill="none"
    />
    <g fill="url(#premiumGradient)" fillOpacity="0.8">
      <circle cx="7" cy="5" r="0.8" />
      <circle cx="17" cy="5" r="0.8" />
      <circle cx="19" cy="12" r="0.8" />
      <circle cx="5" cy="12" r="0.8" />
      <circle cx="7" cy="19" r="0.8" />
      <circle cx="17" cy="19" r="0.8" />
    </g>
    <circle
      cx="12"
      cy="12"
      r="3"
      fill="url(#premiumGradient)"
      fillOpacity="0.6"
    />
    <path
      d="m10.5 12 1 1 2-2"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id="premiumGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="25%" stopColor="#A855F7" />
        <stop offset="50%" stopColor="#EC4899" />
        <stop offset="75%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#10B981" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  </svg>
);

const GithubIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={cn(className)}
  >
    <path d="m12.301 0h.093c2.242 0 4.34.613 6.137 1.68l-.055-.031c1.871 1.094 3.386 2.609 4.449 4.422l.031.058c1.04 1.769 1.654 3.896 1.654 6.166 0 5.406-3.483 10-8.327 11.658l-.087.026c-.063.02-.135.031-.209.031-.162 0-.312-.054-.433-.144l.002.001c-.128-.115-.208-.281-.208-.466 0-.005 0-.01 0-.014v.001q0-.048.008-1.226t.008-2.154c.007-.075.011-.161.011-.249 0-.792-.323-1.508-.844-2.025.618-.061 1.176-.163 1.718-.305l-.076.017c.573-.16 1.073-.373 1.537-.642l-.031.017c.508-.28.938-.636 1.292-1.058l.006-.007c.372-.476.663-1.036.84-1.645l.009-.035c.209-.683.329-1.468.329-2.281 0-.045 0-.091-.001-.136v.007c0-.022.001-.047.001-.072 0-1.248-.482-2.383-1.269-3.23l.003.003c.168-.44.265-.948.265-1.479 0-.649-.145-1.263-.404-1.814l.011.026c-.115-.022-.246-.035-.381-.035-.334 0-.649.078-.929.216l.012-.005c-.568.21-1.054.448-1.512.726l.038-.022-.609.384c-.922-.264-1.981-.416-3.075-.416s-2.153.152-3.157.436l.081-.02q-.256-.176-.681-.433c-.373-.214-.814-.421-1.272-.595l-.066-.022c-.293-.154-.64-.244-1.009-.244-.124 0-.246.01-.364.03l.013-.002c-.248.524-.393 1.139-.393 1.788 0 .531.097 1.04.275 1.509l-.01-.029c-.785.844-1.266 1.979-1.266 3.227 0 .025 0 .051.001.076v-.004c-.001.039-.001.084-.001.13 0 .809.12 1.591.344 2.327l-.015-.057c.189.643.476 1.202.85 1.693l-.009-.013c.354.435.782.793 1.267 1.062l.022.011c.432.252.933.465 1.46.614l.046.011c.466.125 1.024.227 1.595.284l.046.004c-.431.428-.718 1-.784 1.638l-.001.012c-.207.101-.448.183-.699.236l-.021.004c-.256.051-.549.08-.85.08-.022 0-.044 0-.066 0h.003c-.394-.008-.756-.136-1.055-.348l.006.004c-.371-.259-.671-.595-.881-.986l-.007-.015c-.198-.336-.459-.614-.768-.827l-.009-.006c-.225-.169-.49-.301-.776-.38l-.016-.004-.32-.048c-.023-.002-.05-.003-.077-.003-.14 0-.273.028-.394.077l.007-.003q-.128.072-.08.184c.039.086.087.16.145.225l-.001-.001c.061.072.13.135.205.19l.003.002.112.08c.283.148.516.354.693.603l.004.006c.191.237.359.505.494.792l.01.024.16.368c.135.402.38.738.7.981l.005.004c.3.234.662.402 1.057.478l.016.002c.33.064.714.104 1.106.112h.007c.045.002.097.002.15.002.261 0 .517-.021.767-.062l-.027.004.368-.064q0 .609.008 1.418t.008.873v.014c0 .185-.08.351-.208.466h-.001c-.119.089-.268.143-.431.143-.075 0-.147-.011-.214-.032l.005.001c-4.929-1.689-8.409-6.283-8.409-11.69 0-2.268.612-4.393 1.681-6.219l-.032.058c1.094-1.871 2.609-3.386 4.422-4.449l.058-.031c1.739-1.034 3.835-1.645 6.073-1.645h.098-.005zm-7.64 17.666q.048-.112-.112-.192-.16-.048-.208.032-.048.112.112.192.144.096.208-.032zm.497.545q.112-.08-.032-.256-.16-.144-.256-.048-.112.08.032.256.159.157.256.047zm.48.72q.144-.112 0-.304-.128-.208-.272-.096-.144.08 0 .288t.272.112zm.672.673q.128-.128-.064-.304-.192-.192-.32-.048-.144.128.064.304.192.192.32.044zm.913.4q.048-.176-.208-.256-.24-.064-.304.112t.208.24q.24.097.304-.096zm1.009.08q0-.208-.272-.176-.256 0-.256.176 0 .208.272.176.256.001.256-.175zm.929-.16q-.032-.176-.288-.144-.256.048-.224.24t.288.128.225-.224z" />
  </svg>
);

const WakaTimeIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    fill="currentColor"
    preserveAspectRatio="xMidYMid"
    className={cn(className)}
  >
    <path d="M128,0 C57.308,0 0,57.308 0,128 C0,198.693 57.308,256 128,256 C198.693,256 256,198.693 256,128 C256,57.308 198.693,0 128,0 M128,33.805 C179.939,33.805 222.195,76.061 222.195,128 C222.195,179.94 179.939,222.195 128,222.195 C76.061,222.195 33.805,179.94 33.805,128 C33.805,76.061 76.061,33.805 128,33.805 M115.4993,155.6431 L115.3873,155.6431 C113.4353,155.6081 111.6083,154.6751 110.4343,153.1151 L81.5593,114.7321 C79.4553,111.9351 80.0173,107.9611 82.8143,105.8561 C85.6123,103.7511 89.5853,104.3131 91.6903,107.1111 L115.6833,139.0051 L122.5463,130.5271 C123.7493,129.0411 125.5603,128.1771 127.4723,128.1771 L127.4803,128.1771 C129.3973,128.1791 131.2093,129.0471 132.4103,130.5411 L139.0003,138.7281 L176.6923,90.1341 C178.8353,87.3681 182.8173,86.8651 185.5843,89.0111 C188.3493,91.1561 188.8533,95.1371 186.7073,97.9041 L144.1003,152.8371 C142.9143,154.3681 141.0883,155.2721 139.1503,155.2901 L139.0933,155.2901 C137.1743,155.2901 135.3583,154.4221 134.1553,152.9261 L127.4583,144.6071 L120.4253,153.2931 C119.2213,154.7811 117.4103,155.6431 115.4993,155.6431" />
  </svg>
);

const DailyDevIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="currentColor"
    className={cn(className)}
  >
    {/* Circle background */}
    <circle cx="32" cy="32" r="32" fill="currentColor" fillOpacity={0.3} />

    {/* Play symbol */}
    <path
      d="M42.5,42c-0.7,0-1.3-0.3-1.7-1c-0.6-0.9-0.3-2.2,0.7-2.8l10.1-6.2c0,0,0-0.1,0-0.1l-10.1-6.2
          c-0.9-0.6-1.2-1.8-0.7-2.8c0.6-0.9,1.8-1.2,2.8-0.7l10.6,6.6l0.2,0.2c1.6,1.6,1.6,4.3,0,6l-0.2,0.2l-10.6,6.6
          C43.2,41.9,42.8,42,42.5,42z"
      fill="currentColor"
    />
    <path
      d="M21.5,42c-0.4,0-0.7-0.1-1-0.3L9.9,35.1L9.7,35c-1.6-1.6-1.6-4.3,0-6l0.2-0.2l10.6-6.6
          c0.9-0.6,2.2-0.3,2.8,0.7c0.6,0.9,0.3,2.2-0.7,2.8l-10.1,6.2c0,0,0,0.1,0,0.1l10.1,6.2c0.9,0.6,1.2,1.8,0.7,2.8
          C22.9,41.7,22.2,42,21.5,42z"
      fill="currentColor"
    />
    <path
      d="M25.5,51c-0.2,0-0.5,0-0.7-0.1c-1-0.4-1.5-1.6-1.2-2.6l13-34c0.4-1,1.6-1.5,2.6-1.2c1,0.4,1.5,1.6,1.2,2.6
          l-13,34C27.1,50.5,26.3,51,25.5,51z"
      fill="currentColor"
    />
  </svg>
);

// Verification Badge Types
type VerifyBadgeType = "basic" | "gold" | "premium";

interface VerifyBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  type: VerifyBadgeType;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  showLabel?: boolean;
  animate?: boolean;
}

// Badge Configuration
const badgeConfig = {
  basic: {
    icon: WakaTimeIcon,
    label: "Wakatime",
    colors: {
      bg: "bg-blue-50/80 dark:bg-blue-900/20",
      border: "border-blue-200/50 dark:border-blue-600/30",
      text: "text-blue-700 dark:text-blue-300",
      glow: "shadow-blue-500/20",
    },
  },
  gold: {
    icon: DailyDevIcon,
    label: "Daily.dev",
    colors: {
      bg: "bg-yellow-50/80 dark:bg-yellow-900/20",
      border: "border-yellow-300/50 dark:border-yellow-600/30",
      text: "text-yellow-700 dark:text-yellow-300",
      glow: "shadow-yellow-500/30",
    },
  },
  premium: {
    icon: GithubIcon,
    label: "Github",
    colors: {
      bg: "bg-purple-50/80 dark:bg-purple-900/20",
      border: "border-purple-300/50 dark:border-purple-600/30",
      text: "text-white dark:text-slate-200",
      glow: "shadow-purple-500/30",
    },
  },
};

// Size configurations
const sizeConfig = {
  xs: {
    badge: "px-2 py-1 text-xs",
    icon: "w-3 h-3",
    gap: "gap-1",
  },
  sm: {
    badge: "px-2.5 py-1.5 text-xs",
    icon: "w-4 h-4",
    gap: "gap-1.5",
  },
  md: {
    badge: "px-3 py-2 text-sm",
    icon: "w-5 h-5",
    gap: "gap-2",
  },
  lg: {
    badge: "px-4 py-2.5 text-base",
    icon: "w-6 h-6",
    gap: "gap-2",
  },
  xl: {
    badge: "px-5 py-3 text-lg",
    icon: "w-7 h-7",
    gap: "gap-2.5",
  },
};

// Main VerifyBadge Component
const VerifyBadge = React.forwardRef<HTMLDivElement, VerifyBadgeProps>(
  (
    {
      type,
      size = "md",
      showLabel = true,
      animate = true,
      className,
      ...props
    },
    ref,
  ) => {
    const config = badgeConfig[type];
    const sizes = sizeConfig[size];
    const IconComponent = config.icon;

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full font-medium transition-all duration-300",
          "backdrop-blur-md border shadow-lg",
          animate && "hover:scale-105 hover:shadow-xl hover:rotate-1",
          sizes.badge,
          sizes.gap,
          config.colors.bg,
          config.colors.border,
          config.colors.text,
          config.colors.glow,
          className,
        )}
        role={props.onClick ? "button" : undefined}
        tabIndex={props.onClick ? 0 : undefined}
        {...props}
      >
        <IconComponent className={sizes.icon} />
        {showLabel && <span className="font-semibold">{config.label}</span>}
      </div>
    );
  },
);
VerifyBadge.displayName = "VerifyBadge";

// Icon-only variant
const VerifyIcon = React.forwardRef<
  HTMLDivElement,
  Omit<VerifyBadgeProps, "showLabel">
>((props, ref) => <VerifyBadge {...props} showLabel={false} ref={ref} />);
VerifyIcon.displayName = "VerifyIcon";

// Floating Badge variant
interface FloatingVerifyBadgeProps extends VerifyBadgeProps {
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
}
const FloatingVerifyBadge = React.forwardRef<
  HTMLDivElement,
  FloatingVerifyBadgeProps
>(({ position = "top-right", className, ...props }, ref) => {
  const positionClasses = {
    "top-right": "absolute -top-1 -right-1",
    "top-left": "absolute -top-1 -left-1",
    "bottom-right": "absolute -bottom-1 -right-1",
    "bottom-left": "absolute -bottom-1 -left-1",
  };

  return (
    <VerifyBadge
      ref={ref}
      {...props}
      className={cn(positionClasses[position], "z-10", className)}
    />
  );
});
FloatingVerifyBadge.displayName = "FloatingVerifyBadge";

export { VerifyBadge, VerifyIcon, FloatingVerifyBadge };
