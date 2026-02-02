import Image from "next/image";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-surface/60 to-background px-6 py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `linear-gradient(to right, #0066ff 1px, transparent 1px),
            linear-gradient(to bottom, #0066ff 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative flex flex-col items-center text-center">
        <Image
          src="/r-logo.png"
          alt=""
          width={64}
          height={64}
          className="mb-6 h-16 w-16 object-contain opacity-80"
        />
        <h1 className="text-6xl font-bold tracking-tight text-foreground md:text-8xl">
          404
        </h1>
        <p className="mt-4 max-w-md text-lg text-muted">
          This page could not be found.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary-dark hover:scale-[1.02] active:scale-[0.98] focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          Back to home
        </a>
      </div>
    </main>
  );
}
