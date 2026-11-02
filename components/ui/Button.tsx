import { cn } from "@/lib/utils";
import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          "inline-flex items-center justify-center font-display font-semibold transition-all duration-200 rounded-full focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]",
          {
            primary:
              "bg-gx-vermilion text-gx-warmWhite hover:bg-gx-clay shadow-[0_8px_25px_rgba(198,91,61,0.28)] hover:shadow-[0_12px_32px_rgba(198,91,61,0.45)] border border-gx-vermilion/40",
            secondary:
              "bg-gx-carbon text-gx-warmWhite border border-gx-border hover:bg-gx-graphite hover:border-gx-chalk/30 transition-colors",
            outline:
              "bg-transparent text-gx-chalk border border-gx-chalk/30 hover:border-gx-citron hover:text-gx-citron hover:bg-gx-carbon/40",
            danger:
              "bg-gx-clay text-gx-warmWhite hover:bg-red-700 shadow-[0_8px_25px_rgba(169,71,50,0.3)]",
            ghost:
              "bg-transparent text-gx-mineral hover:text-gx-warmWhite hover:bg-gx-carbon/60",
          }[variant],
          {
            sm: "text-xs px-3.5 py-1.5 gap-1.5",
            md: "text-sm px-5 py-2.5 gap-2",
            lg: "text-base px-6 py-3.5 gap-2.5",
          }[size],
          className
        )}
        {...props}
      >
        {isLoading && (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
