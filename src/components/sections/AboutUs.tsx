import { Section } from "@/components/ui/Section";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { AnimateStagger, AnimateStaggerItem } from "@/components/ui/AnimateStagger";

const pillars = [
  {
    label: "Faster",
    text: "50-75% reduction in acquisition time without sacrificing resolution.",
    icon: "▸",
  },
  {
    label: "Rigorous",
    text: "Scientifically validated output-high-fidelity MSI you can trust.",
    icon: "◉",
  },
  {
    label: "Scalable",
    text: "Research, pharma, and clinical labs can scale MSI workflows.",
    icon: "⊞",
  },
];

export function AboutUs() {
  return (
    <Section
      id="about"
      title="About Us"
      subtitle="Deep-tech meets Mass Spectrometry Imaging."
      light
    >
      <div>
        <AnimateIn>
          <p className="mx-auto max-w-2xl text-center text-lg font-medium text-foreground md:text-xl">
            We reduce the time and cost of MSI by combining{" "}
            <span className="text-primary font-semibold">partial sampling</span>{" "}
            with{" "}
            <span className="text-primary font-semibold">ML reconstruction</span>{" "}
            so you get full-resolution molecular imaging in a fraction of the time.
          </p>
        </AnimateIn>

        <AnimateStagger className="mt-12 grid gap-6 sm:grid-cols-3">
          {pillars.map((item) => (
            <AnimateStaggerItem key={item.label}>
              <article
                className="group rounded-xl border border-border bg-white p-6 text-center shadow-sm transition-all duration-200 hover:border-primary/30 hover:shadow-md hover:scale-[1.01]"
              >
              <span
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-xl text-primary transition-colors group-hover:bg-primary/20"
                aria-hidden
              >
                {item.icon}
              </span>
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {item.label}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {item.text}
              </p>
            </article>
            </AnimateStaggerItem>
          ))}
        </AnimateStagger>

        <AnimateIn delay={0.2}>
          <p className="mt-10 text-center text-sm font-medium text-muted">
          Our mission: make MSI faster, more accessible, and scientifically
          rigorous.
          </p>
        </AnimateIn>
      </div>
    </Section>
  );
}
