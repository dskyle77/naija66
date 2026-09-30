"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import {
  buttonBase,
  buttonVariants,
  type ButtonVariant,
} from "@/lib/buttonVariants";

type TransitionLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
} & Omit<ComponentProps<typeof Link>, "href">;

export default function TransitionLink({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: TransitionLinkProps) {
  return (
    <Link
      href={href}
      className={`${buttonBase} ${buttonVariants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
