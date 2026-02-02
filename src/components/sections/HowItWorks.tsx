import { Section } from "@/components/ui/Section";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { AnimateStagger, AnimateStaggerItem } from "@/components/ui/AnimateStagger";

const steps = [
  {
    title: "Tissue Grid",
    subtitle: "100% Potential Area",
    description: "Full spatial area available for scanning-every pixel is a potential acquisition point.",
    visual: "tissue-grid",
  },
  {
    title: "Partial Scan",
    subtitle: "~50% Acquired",
    description: "Intelligent sampling acquires approximately half the pixels, capturing the most informative regions.",
    visual: "partial-scan",
  },
  {
    title: "ML Model",
    subtitle: "Reconstruction",
    description: "Rapid1.0 machine learning model reconstructs full spatial-spectral data from the partial scan.",
    visual: "ml-model",
  },
  {
    title: "High-Fidelity MSI",
    subtitle: "100% Resolution",
    description: "Full-resolution ion image output with validated scientific accuracy-as if every pixel was acquired.",
    visual: "high-fidelity",
  },
];

const ION_IMAGE_COLORS = [
  "bg-slate-300",
  "bg-primary/40",
  "bg-primary/70",
  "bg-primary",
  "bg-primary-light/80",
  "bg-emerald-400/80",
  "bg-emerald-500/70",
  "bg-sky-400/70",
  "bg-slate-400",
];

function StepVisual({ type }: { type: string }) {
  const cell = "aspect-square min-w-0 rounded-sm";
  const gridClass = "grid grid-cols-6 gap-0.5 w-full max-w-[140px] mx-auto";

  if (type === "tissue-grid") {
    return (
      <div className={`${gridClass} aspect-square`} aria-hidden>
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={i} className={`${cell} bg-slate-200`} />
        ))}
      </div>
    );
  }

  if (type === "partial-scan") {
    return (
      <div className={`${gridClass} aspect-square`} aria-hidden>
        {Array.from({ length: 36 }).map((_, i) => {
          const row = Math.floor(i / 6);
          const col = i % 6;
          const filled = (row + col) % 2 === 0;
          return (
            <div
              key={i}
              className={`${cell} ${filled ? "bg-primary/70" : "bg-slate-200"}`}
            />
          );
        })}
      </div>
    );
  }

  if (type === "ml-model") {
    return (
      <div
        className="flex items-center justify-center w-full max-w-[140px] mx-auto aspect-square rounded-lg bg-primary/10 border border-primary/20"
        aria-hidden
      >
        <div className="flex flex-col items-center gap-1">
          <div className="h-6 w-10 rounded bg-primary/50" />
          <div className="flex gap-1">
            <div className="h-4 w-6 rounded bg-primary/40" />
            <div className="h-4 w-6 rounded bg-primary/40" />
          </div>
          <div className="flex gap-0.5 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
            <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
            <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "high-fidelity") {
    return (
      <div className={`${gridClass} aspect-square`} aria-hidden>
        {Array.from({ length: 36 }).map((_, i) => (
          <div
            key={i}
            className={`${cell} ${ION_IMAGE_COLORS[i % ION_IMAGE_COLORS.length]}`}
          />
        ))}
      </div>
    );
  }

  return null;
}

export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      title="How It Works"
      subtitle="From partial acquisition to full-fidelity imaging."
      light
    >
      <AnimateIn>
        <p className="mx-auto max-w-3xl text-center text-muted leading-relaxed mb-12 md:mb-16">
          We start with the full tissue grid as the potential scan area, then
          acquire only a fraction of pixels through intelligent partial sampling.
          Our Rapid1.0 ML model reconstructs the full spatial-spectral data from
          this partial scan, delivering high-fidelity MSI output at 100% resolution
          in a fraction of the time. The four steps below illustrate this
          pipeline.
        </p>
      </AnimateIn>
      <AnimateStagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <AnimateStaggerItem key={i}>
            <article className="flex h-full min-w-0 flex-col rounded-xl border border-border bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.02]">
              <div className="flex min-h-[120px] flex-shrink-0 items-center justify-center">
                <StepVisual type={step.visual} />
              </div>
              <span className="mt-5 text-xs font-semibold uppercase tracking-wider text-primary">
                Step {i + 1}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm font-medium text-primary/90">{step.subtitle}</p>
              <p className="mt-2 flex-1 text-sm text-muted leading-relaxed">
                {step.description}
              </p>
            </article>
          </AnimateStaggerItem>
        ))}
      </AnimateStagger>
    </Section>
  );
}
