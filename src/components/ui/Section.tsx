import { AnimateIn } from "@/components/ui/AnimateIn";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  as?: "section" | "div";
  light?: boolean;
}

export function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
  as: Component = "section",
  light = false,
}: SectionProps) {
  const bg = light ? "bg-white" : "bg-surface/50";

  return (
    <Component
      id={id}
      className={`scroll-mt-0 pt-16 md:pt-20 ${bg} ${className}`.trim()}
      aria-labelledby={title ? `${id ?? "section"}-title` : undefined}
    >
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        {(title || subtitle) && (
          <AnimateIn amount={0.2}>
            <header className="mb-8 md:mb-10 text-center">
              {title && (
                <h2
                  id={id ? `${id}-title` : "section-title"}
                  className="text-2xl font-bold tracking-tight text-foreground md:text-3xl"
                >
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="mt-3 max-w-2xl mx-auto text-muted text-base md:text-lg">
                  {subtitle}
                </p>
              )}
            </header>
          </AnimateIn>
        )}
        {children}
      </div>
    </Component>
  );
}
