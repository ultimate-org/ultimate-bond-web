"use client";

import Link from "next/link";
import { type ReactNode } from "react";

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
    "inline-flex items-center gap-2 bg-[#f97316] text-white px-[30px] py-[14px] rounded-full font-bold text-[0.95rem] no-underline transition-all hover:bg-[#ea6a0a] hover:-translate-y-[2px]";
  const style = {
    boxShadow: "0 0 30px rgba(249,115,22,0.35)",
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
