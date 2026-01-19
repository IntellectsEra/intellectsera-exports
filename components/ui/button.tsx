"use client";

import Link from "next/link";

interface ButtonProps {
  label: string;
  href?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  label,
  href,
  size = "md",
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold text-white transition bg-[#2459B9] hover:bg-[#1f4ea1]";

  const sizes = {
    sm: "px-4 py-2 text-sm",        // Header
    md: "px-6 py-2.5 text-base",    // Default
    lg: "px-8 py-3 text-lg",        // Hero CTA
  };

  const classes = `${base} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {label}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {label}
    </button>
  );
}
