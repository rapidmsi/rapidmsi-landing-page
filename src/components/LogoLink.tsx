"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

interface LogoLinkProps {
  href?: string;
  className?: string;
  children: ReactNode;
  "aria-label"?: string;
}

export function LogoLink({
  href = "/",
  className = "",
  children,
  "aria-label": ariaLabel = "RAPIDMSI home",
}: LogoLinkProps) {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "";

  function handleClick(e: React.MouseEvent) {
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  if (isHome) {
    return (
      <a
        href={href}
        onClick={handleClick}
        className={className}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href="/" className={className} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
