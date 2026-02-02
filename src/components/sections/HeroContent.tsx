"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { ScrollToLink } from "@/components/ScrollToLink";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function HeroContent() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.2, once: false });

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="flex flex-col items-center text-center"
    >
      <motion.div variants={item} className="mb-8">
        <Image
          src="/rapidmsi-logo.png"
          alt=""
          width={96}
          height={96}
          className="h-20 w-20 md:h-24 md:w-24 object-contain"
          priority
          aria-hidden
        />
      </motion.div>
      <motion.h1
        id="hero-heading"
        variants={item}
        className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl"
      >
        Accelerating MSI with Intelligent Partial Acquisition
      </motion.h1>
      <motion.p
        variants={item}
        className="mt-6 max-w-2xl text-lg text-muted md:text-xl leading-relaxed"
      >
        RAPIDMSI reduces Mass Spectrometry Imaging acquisition time by{" "}
        <span className="inline-flex items-baseline rounded-md bg-primary/10 px-2 py-0.5 font-semibold text-primary">
          50-75%
        </span>{" "}
        using particle-based pixel sampling and machine-learning
        reconstruction.
      </motion.p>
      <motion.div variants={item} className="mt-10">
        <ScrollToLink
          targetId="contact"
          className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 ease-out bg-primary text-white hover:bg-primary-dark shadow-sm hover:scale-[1.02] active:scale-[0.98] focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          Request a Demo
        </ScrollToLink>
      </motion.div>
    </motion.div>
  );
}
