"use client";

import { useState, type FormEvent } from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { AnimateIn } from "@/components/ui/AnimateIn";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;

    try {
      // Frontend-only: no backend; simulate success
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section id="contact" title="Request a Demo" light className="pb-14 md:pb-20">
      <AnimateIn className="mx-auto w-full max-w-xl">
        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-xl border border-border bg-white p-6 shadow-sm md:p-8"
          noValidate
          aria-label="Request a demo"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground">
              Full name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-light focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Jane Smith"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-light focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="jane@company.com"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-foreground">
              Company / Institution
            </label>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-light focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Acme Research"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="mt-1.5 w-full resize-y rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-light focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Tell us about your MSI workflow and goals..."
            />
          </div>
          {status === "sent" && (
            <p className="text-sm font-medium text-primary" role="status">
              Thank you. We&apos;ll be in touch soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm font-medium text-red-600" role="alert">
              Something went wrong. Please try again.
            </p>
          )}
          <Button
            type="submit"
            variant="primary"
            className="w-full md:w-auto"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Contact Us"}
          </Button>
        </form>
      </AnimateIn>
    </Section>
  );
}
