import Image from "next/image";
import { LogoLink } from "./LogoLink";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-border bg-foreground text-white"
      role="contentinfo"
    >
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-8 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-3">
            <LogoLink
              className="flex items-center gap-2 focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary rounded"
              aria-label="RAPIDMSI home"
            >
              <Image
                src="/r-logo.png"
                alt=""
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
                aria-hidden
              />
              <span className="text-lg text-white tracking-tight">
                <span className="font-bold">RAPID</span>
                <span className="font-light">MSI</span>
              </span>
            </LogoLink>
          </div>
          <div className="max-w-md">
            <p className="text-sm text-slate-300 leading-relaxed">
              Accelerating Mass Spectrometry Imaging through intelligent
              partial acquisition and machine-learning reconstruction-faster
              science without compromising validity.
            </p>
            <p className="mt-4 text-sm text-slate-400">
              Contact:{" "}
              <a
                href="mailto:contact@rapidmsi.com"
                className="text-primary-light hover:underline focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                contact@rapidmsi.com
              </a>
            </p>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
          © {year} RAPIDMSI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
