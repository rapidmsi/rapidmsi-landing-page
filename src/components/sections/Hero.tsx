import { HeroContent } from "./HeroContent";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gradient-to-b from-surface/60 to-background py-16 md:py-20"
      aria-labelledby="hero-heading"
    >
      {/* Grid motif */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `linear-gradient(to right, #0066ff 1px, transparent 1px),
            linear-gradient(to bottom, #0066ff 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative mx-auto w-full max-w-6xl px-6 md:px-8">
        <HeroContent />
      </div>
    </section>
  );
}
