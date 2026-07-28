"use client";

import { Cloud, Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  /** "md" for roomy placements (desktop nav), "sm" for tight spots (mobile nav row). */
  size?: "sm" | "md";
}

const SIZES = {
  md: {
    track: "h-7 w-14",
    knob: "h-[22px] w-[22px]",
    travel: "translate-x-[28px]",
    icon: 13,
    dot: "h-[3px] w-[3px]",
  },
  sm: {
    track: "h-6 w-11",
    knob: "h-[18px] w-[18px]",
    travel: "translate-x-[20px]",
    icon: 10,
    dot: "h-[2.5px] w-[2.5px]",
  },
} as const;

/**
 * Day/night sliding pill toggle — the track morphs between a blue sky
 * (with a drifting cloud) and a starry night, while a sun/moon knob
 * slides across on a springy ease.
 */
export default function ThemeToggle({ className = "", size = "md" }: ThemeToggleProps) {
  const { theme, toggleTheme, mounted } = useTheme();
  const isDark = theme === "dark";
  const s = SIZES[size];

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={toggleTheme}
      className={cn(
        "relative inline-flex shrink-0 cursor-pointer items-center rounded-full p-[3px] transition-[background,box-shadow] duration-500 ease-smooth",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7a18]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
        s.track,
        className
      )}
      style={{
        background: isDark
          ? "linear-gradient(135deg,#0b1023 0%,#161b36 55%,#2c2560 100%)"
          : "linear-gradient(135deg,#7dd3fc 0%,#4fb8f5 55%,#5b9bf5 100%)",
        boxShadow: isDark
          ? "inset 0 0 0 1px rgba(255,255,255,0.08)"
          : "inset 0 0 0 1px rgba(255,255,255,0.35)",
      }}
    >
      {/* stars — fade in on dark */}
      <span
        className={`pointer-events-none absolute inset-0 overflow-hidden rounded-full transition-opacity duration-500 ${
          mounted && isDark ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className={cn("absolute left-[7px] top-[5px] rounded-full bg-white/90", s.dot)} />
        <span className={cn("absolute left-[11px] top-[13px] rounded-full bg-white/70", s.dot)} />
        <span className={cn("absolute left-[5px] top-[16px] rounded-full bg-white/60", s.dot)} />
      </span>

      {/* cloud — fades in on light, drifts slightly */}
      <Cloud
        size={size === "md" ? 11 : 9}
        strokeWidth={2.5}
        className={`pointer-events-none absolute right-[6px] top-1/2 -translate-y-1/2 text-white transition-all duration-500 ease-smooth ${
          mounted && !isDark ? "translate-x-0 opacity-90" : "translate-x-1 opacity-0"
        }`}
      />

      {/* sliding knob */}
      <span
        className={cn(
          "relative z-10 flex items-center justify-center rounded-full bg-white transition-transform duration-500 ease-spring",
          s.knob,
          mounted && isDark ? s.travel : "translate-x-0"
        )}
        style={{
          boxShadow: isDark
            ? "0 0 6px 1px rgba(180,190,255,0.55)"
            : "0 0 6px 1px rgba(255,200,90,0.7)",
        }}
      >
        <span
          className={`absolute inset-0 flex items-center justify-center transition-all duration-400 ease-smooth ${
            mounted && isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"
          }`}
        >
          <Moon size={s.icon} strokeWidth={2.5} className="text-[#312e81]" fill="#4338ca" />
        </span>
        <span
          className={`absolute inset-0 flex items-center justify-center transition-all duration-400 ease-smooth ${
            mounted && !isDark ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-50 opacity-0"
          }`}
        >
          <Sun size={s.icon} strokeWidth={2.5} className="text-[#f59e0b]" fill="#fbbf24" />
        </span>
      </span>
    </button>
  );
}
