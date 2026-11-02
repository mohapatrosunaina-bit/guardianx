import { cn } from "@/lib/utils";
import React from "react";

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  titleAccent,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-3xl",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.16em] text-gx-mint mb-3.5",
            align === "center" && "justify-center"
          )}
        >
          <span className="w-6 h-[1px] bg-gx-emerald/60" />
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-gx-text leading-[1.08]">
        {title}{" "}
        {titleAccent && (
          <span className="text-gx-mint text-transparent bg-clip-text bg-gradient-to-r from-gx-mint via-gx-emerald to-gx-lime">
            {titleAccent}
          </span>
        )}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-gx-muted leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
