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
    "inline-flex items-center gap-2 border border-white/[0.12] text-white px-[28px] py-[14px] rounded-full font-medium text-[0.95rem] no-underline transition-all hover:border-[#f97316] hover:text-[#f97316]";

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
