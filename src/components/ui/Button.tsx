import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-dark focus:bg-primary-dark shadow-sm",
  secondary:
    "bg-surface text-foreground hover:bg-slate-200 focus:bg-slate-200 border border-border",
  outline:
    "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white focus:bg-primary focus:text-white",
  ghost:
    "text-primary hover:bg-primary/10 focus:bg-primary/10",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  href,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 ease-out focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none hover:scale-[1.02] active:scale-[0.98]";

  const combined = `${base} ${variantStyles[variant]} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={combined}>
        {children}
      </a>
    );
  }

  return (
    <button type={props.type ?? "button"} className={combined} {...props}>
      {children}
    </button>
  );
}
