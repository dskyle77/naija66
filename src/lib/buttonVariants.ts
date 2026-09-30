export const buttonVariants = {
  primary: "bg-primary text-inverse hover:bg-primary-hover",

  secondary:
    "border border-border bg-surface text-foreground hover:bg-surface-muted",

  ghost: "text-foreground hover:bg-surface-muted",
} as const;

export type ButtonVariant = keyof typeof buttonVariants;

export const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:pointer-events-none disabled:opacity-50";
