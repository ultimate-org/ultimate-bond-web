"use client";

import Link from "next/link";
import { type ReactNode } from "react";

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
    "inline-flex items-center gap-2 border border-[var(--site-ghost-border)] text-[var(--site-ghost-text)] px-[28px] py-[14px] rounded-full font-medium text-[0.95rem] no-underline transition-all hover:border-[var(--site-ghost-hover)] hover:text-[var(--site-ghost-hover)]";

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
