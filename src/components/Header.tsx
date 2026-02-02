import Image from "next/image";
import { LogoLink } from "./LogoLink";
import { ScrollToLink } from "./ScrollToLink";

export function Header() {
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
        <nav
          className="flex items-center gap-4 overflow-x-auto py-2 md:py-0 md:overflow-visible shrink-0"
          aria-label="Main navigation"
        >
          <ScrollToLink
            targetId="about"
            className="whitespace-nowrap bg-transparent text-sm font-medium text-muted hover:text-foreground transition-all duration-200 focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary rounded px-1"
          >
            About
          </ScrollToLink>
          <ScrollToLink
            targetId="how-it-works"
            className="whitespace-nowrap bg-transparent text-sm font-medium text-muted hover:text-foreground transition-all duration-200 focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary rounded px-1"
          >
            How It Works
          </ScrollToLink>
          <ScrollToLink
            targetId="contact"
            className="whitespace-nowrap bg-transparent text-sm font-semibold text-primary hover:text-primary-dark transition-all duration-200 focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary rounded px-1"
          >
            Request Demo
          </ScrollToLink>
        </nav>
      </div>
    </header>
  );
}
