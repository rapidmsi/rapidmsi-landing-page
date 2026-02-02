"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { LogoLink } from "./LogoLink";
import { ScrollToLink } from "./ScrollToLink";

const navLinks: { targetId: string; label: string; primary?: boolean }[] = [
  { targetId: "about", label: "About" },
  { targetId: "how-it-works", label: "How It Works" },
  { targetId: "contact", label: "Request Demo", primary: true },
];

const linkBase =
  "whitespace-nowrap bg-transparent text-sm font-medium text-muted hover:text-foreground transition-all duration-200 focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary rounded px-1";
const linkPrimary =
  "text-sm font-semibold text-primary hover:text-primary-dark transition-all duration-200 focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary rounded px-1";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className="sticky top-0 z-50 border-b border-border/80 bg-white/90 backdrop-blur-sm"
      role="banner"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-8">
        <LogoLink
          className="flex items-center gap-2 transition-transform duration-200 hover:scale-105 focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded active:scale-95"
          aria-label="RAPIDMSI home"
        >
          <Image
            src="/r-logo.png"
            alt="RAPIDMSI"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
            priority
          />
          <span className="text-lg text-foreground tracking-tight">
            <span className="font-bold">RAPID</span>
            <span className="font-light">MSI</span>
          </span>
        </LogoLink>

        {/* Desktop nav — hidden on mobile */}
        <nav
          className="hidden md:flex items-center gap-4 overflow-x-auto py-2 md:py-0 md:overflow-visible shrink-0"
          aria-label="Main navigation"
        >
          {navLinks.map(({ targetId, label, primary }) => (
            <ScrollToLink
              key={targetId}
              targetId={targetId}
              className={primary ? linkPrimary : linkBase}
            >
              {label}
            </ScrollToLink>
          ))}
        </nav>

        {/* Mobile: hamburger button */}
        <button
          type="button"
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`block h-0.5 w-6 bg-foreground transition-all duration-200 ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-all duration-200 my-1 ${
              menuOpen ? "opacity-0 scale-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-all duration-200 ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile: slide-out overlay + panel (portal so it's on top with solid background) */}
      {mounted &&
        menuOpen &&
        createPortal(
          <div className="md:hidden" role="presentation">
            {/* Opaque dimmed overlay */}
            <div
              className="fixed inset-0 z-[100] bg-black/60"
              aria-hidden
              onClick={closeMenu}
            />
            {/* Solid opaque menu panel */}
            <nav
              className="fixed top-0 right-0 z-[101] h-full w-[min(18rem,85vw)] flex flex-col border-l-2 border-border bg-[#ffffff] pt-6 px-5 pb-6 shadow-[0_0_40px_rgba(0,0,0,0.15)]"
              style={{ backgroundColor: "#ffffff" }}
              aria-label="Mobile navigation"
            >
              {/* Top row: logo (clickable → home) + close button */}
              <div className="flex items-center justify-between gap-4 pb-5 border-b border-border">
                <div onClick={closeMenu}>
                  <LogoLink
                    className="flex items-center gap-2 transition-transform duration-200 hover:scale-105 focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded active:scale-95"
                    aria-label="RAPIDMSI home"
                  >
                    <Image
                      src="/r-logo.png"
                      alt=""
                      width={36}
                      height={36}
                      className="h-9 w-9 object-contain"
                    />
                    <span className="text-base text-foreground tracking-tight">
                      <span className="font-bold">RAPID</span>
                      <span className="font-light">MSI</span>
                    </span>
                  </LogoLink>
                </div>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="relative flex items-center justify-center w-10 h-10 rounded text-foreground hover:bg-surface focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  aria-label="Close menu"
                >
                  <span className="absolute h-0.5 w-5 bg-current rotate-45" />
                  <span className="absolute h-0.5 w-5 bg-current -rotate-45" />
                </button>
              </div>
              <div className="flex flex-col gap-0 pt-4">
                {navLinks.map(({ targetId, label, primary }) => (
                  <div key={targetId} onClick={closeMenu}>
                    <ScrollToLink
                      targetId={targetId}
                      className={`block py-4 px-3 rounded-lg text-base ${
                        primary ? linkPrimary : linkBase
                      }`}
                    >
                      {label}
                    </ScrollToLink>
                  </div>
                ))}
              </div>
            </nav>
          </div>,
          document.body
        )}
    </header>
  );
}
