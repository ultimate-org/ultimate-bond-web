"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { type ReactNode } from "react";

/* ─────────────────────────────────────────────
   .container  →  use this className anywhere
───────────────────────────────────────────── */
export const containerClass =
  "max-w-[1160px] mx-auto px-[6%]";

/* ─────────────────────────────────────────────
   <SectionTag>  →  .section-tag
───────────────────────────────────────────── */
export function SectionTag({ children }: { children: ReactNode }) {
  return (
    <span
      className="inline-block text-[0.72rem] font-bold tracking-[0.12em] uppercase text-[#f97316] mb-4 px-3 py-1 rounded-full"
      style={{
        border: "1px solid rgba(249,115,22,0.3)",
        background: "rgba(249,115,22,0.08)",
        fontFamily: "'Rubik', sans-serif",
      }}
    >
      {children}
    </span>
  );
}

/* ─────────────────────────────────────────────
   <SectionHeader>  →  .section-header
   Props:
     tag      — text inside <SectionTag>
     heading  — h2 content (can include JSX for orange accents)
     sub      — muted paragraph below
───────────────────────────────────────────── */
export function SectionHeader({
  tag,
  heading,
  sub,
}: {
  tag?: ReactNode;
  heading: ReactNode;
  sub?: ReactNode;
}) {
  return (
    <div className="mb-12">
      {tag && <SectionTag>{tag}</SectionTag>}
      <h2
        className="text-white font-black leading-[1.15] tracking-[-0.03em] mb-3"
        style={{
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontFamily: "'Rubik', sans-serif",
        }}
      >
        {heading}
      </h2>
      {sub && (
        <p className="text-[#9ca3af] text-[1rem] font-light max-w-[560px]">
          {sub}
        </p>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   <BtnPrimary>  →  .btn-primary
───────────────────────────────────────────── */
export function BtnPrimary({
  href,
  children,
  onClick,
}: {
  href?: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  const cls =
    "inline-flex items-center gap-2 bg-[#f97316] text-white px-[30px] py-[14px] rounded-full font-bold text-[0.95rem] no-underline transition-all duration-[250ms] hover:bg-[#ea6a0a] hover:-translate-y-[2px]";
  const style = {
    boxShadow: "0 0 30px rgba(249,115,22,0.35)",
    fontFamily: "'Rubik', sans-serif",
  };

  if (href) {
    return (
      <Link href={href} className={cls} style={style}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={cls} style={style}>
      {children}
    </button>
  );
}

/* ─────────────────────────────────────────────
   <BtnSecondary>  →  .btn-secondary
───────────────────────────────────────────── */
export function BtnSecondary({
  href,
  children,
  onClick,
}: {
  href?: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  const cls =
    "inline-flex items-center gap-2 border border-white/[0.12] text-white px-[28px] py-[14px] rounded-full font-medium text-[0.95rem] no-underline transition-all duration-[250ms] hover:border-[#f97316] hover:text-[#f97316]";

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

/* ─────────────────────────────────────────────
   useReveal()  →  .reveal / .reveal.visible
   Attach the returned ref to any element to get
   the scroll-triggered fade-up animation.
───────────────────────────────────────────── */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "none";
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    // set initial hidden state
    el.style.opacity = "0";
    el.style.transform = "translateY(28px)";
    el.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}