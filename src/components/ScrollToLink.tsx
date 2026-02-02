"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const HEADER_OFFSET = 64; // h-16

interface ScrollToLinkProps {
  targetId: string;
  className?: string;
  children: ReactNode;
}

export function ScrollToLink({
  targetId,
  className = "",
  children,
}: ScrollToLinkProps) {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "";

  function handleClick(e: React.MouseEvent) {
    if (!isHome) return;
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      const y =
        el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }

  if (isHome) {
    return (
      <button
        type="button"
        onClick={handleClick}
        className={`cursor-pointer border-none p-0 font-inherit ${className}`.trim()}
      >
        {children}
      </button>
    );
  }

  return (
    <a href="/" className={className}>
      {children}
    </a>
  );
}
