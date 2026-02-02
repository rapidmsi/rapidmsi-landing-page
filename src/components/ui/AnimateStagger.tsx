"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface AnimateStaggerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  amount?: number;
  once?: boolean;
}

export function AnimateStagger({
  children,
  className = "",
  staggerDelay = 0.08,
  amount = 0.1,
  once = false,
}: AnimateStaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount, once });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: { staggerChildren: staggerDelay, delayChildren: 0.1 },
        },
        hidden: {},
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface AnimateStaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function AnimateStaggerItem({ children, className = "" }: AnimateStaggerItemProps) {
  return (
    <motion.div
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
      }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`min-w-0 ${className}`.trim()}
    >
      {children}
    </motion.div>
  );
}
