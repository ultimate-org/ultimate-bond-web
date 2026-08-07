"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import { Sun, Moon } from "lucide-react";
import { useTheme, type Theme } from "@/components/theme/ThemeProvider";

const TRACK_W = 68;
const TRACK_H = 40;
const THUMB = 32;
const PAD = 4;
const THUMB_TRAVEL = TRACK_W - THUMB - PAD * 2;

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const btnRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const isDark = theme === "dark";

  const handleClick = () => {
    const btn = btnRef.current;
    const root = document.documentElement;
    if (!btn) return;

    const next: Theme = isDark ? "light" : "dark";
    const reduce =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // thumb-icon spin-pop — restart the animation on every click
    const icon = btn.querySelector<HTMLElement>(".theme-toggle-icon");
    if (icon) {
      icon.classList.remove("theme-toggle-swapping");
      void icon.offsetWidth;
      icon.classList.add("theme-toggle-swapping");
      setTimeout(() => icon.classList.remove("theme-toggle-swapping"), 600);
    }

    if (typeof document.startViewTransition === "function" && !reduce) {
      const r = btn.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const fullRadius = Math.hypot(
        Math.max(cx, window.innerWidth - cx),
        Math.max(cy, window.innerHeight - cy)
      );

      // On the home page, confine the wipe to the hero section first —
      // it starts at the toggle and grows only far enough to cover the
      // hero — then a quick final burst converts the rest of the site.
      const heroEl = pathname === "/" ? document.getElementById("hero-section") : null;

      root.classList.add("vt-switch");
      const vt = document.startViewTransition(() => setTheme(next));
      vt.ready.then(() => {
        if (heroEl) {
          const hr = heroEl.getBoundingClientRect();
          const heroBottom = Math.max(hr.bottom, cy + 1);
          const heroRadius = Math.hypot(
            Math.max(cx, window.innerWidth - cx),
            heroBottom - cy
          );

          root.animate(
            {
              clipPath: [
                `circle(0px at ${cx}px ${cy}px)`,
                `circle(${heroRadius}px at ${cx}px ${cy}px)`,
                `circle(${fullRadius}px at ${cx}px ${cy}px)`,
              ],
              offset: [0, 0.72, 1],
            },
            {
              duration: 900,
              easing: "cubic-bezier(0.22, 1, 0.36, 1)",
              pseudoElement: "::view-transition-new(root)",
            }
          );
        } else {
          root.animate(
            {
              clipPath: [
                `circle(0px at ${cx}px ${cy}px)`,
                `circle(${fullRadius}px at ${cx}px ${cy}px)`,
              ],
            },
            {
              duration: 700,
              easing: "cubic-bezier(0.22, 1, 0.36, 1)",
              pseudoElement: "::view-transition-new(root)",
            }
          );
        }
      });
      vt.finished.finally(() => root.classList.remove("vt-switch"));
    } else {
      // fallback: color crossfade
      root.classList.add("theme-anim");
      setTimeout(() => root.classList.remove("theme-anim"), 650);
      setTheme(next);
    }
  };

  return (
    <button
      ref={btnRef}
      type="button"
      role="switch"
      aria-checked={isDark}
      onClick={handleClick}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={`relative inline-flex flex-shrink-0 cursor-pointer items-center rounded-full border transition-[border-color] duration-500 ease-smooth ${className}`}
      style={{
        width: TRACK_W,
        height: TRACK_H,
        borderColor: "var(--hero-toggle-border)",
        background: "var(--hero-toggle-bg)",
      }}
    >
      {/* dim static icons in the track */}
      <Sun
        size={16}
        className="pointer-events-none absolute left-[8px] top-1/2 -translate-y-1/2 transition-colors duration-500"
        style={{ color: "var(--hero-toggle-track-icon)" }}
      />
      <Moon
        size={15}
        className="pointer-events-none absolute right-[9px] top-1/2 -translate-y-1/2 transition-colors duration-500"
        style={{ color: "var(--hero-toggle-track-icon)" }}
      />

      {/* sliding thumb */}
      <span
        className="pointer-events-none absolute flex items-center justify-center rounded-full transition-transform duration-500 ease-smooth"
        style={{
          width: THUMB,
          height: THUMB,
          left: PAD,
          top: PAD,
          transform: `translateX(${isDark ? THUMB_TRAVEL : 0}px)`,
          background: "var(--hero-toggle-thumb-bg)",
          boxShadow: "0 1px 3px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.18)",
        }}
      >
        <span className="theme-toggle-icon inline-flex items-center justify-center">
          {isDark ? (
            <Moon size={16} style={{ color: "var(--hero-toggle-thumb-icon)" }} />
          ) : (
            <Sun size={16} style={{ color: "var(--hero-toggle-thumb-icon)" }} />
          )}
        </span>
      </span>
    </button>
  );
}
