"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

const buttonVarients = cva(
  "rounded-md font-medium transition-colors focus:outline-none",
  {
    variants: {
      variant: {
        primary:
          "bg-blue-600 text-white hover:bg-blue-700 active:scale-95 transition-transform cursor-pointer",
        secondry:
          "bg-gray-600 text-white hover:bg-gray-700 active:scale-95 transition-transform cursor-pointer",
        outline:
          "border border-gray-400 active:scale-95 transition-transform cursor-pointer",
      },
      size: {
        sm: "px-2 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
      loading: {
        true: "opacity-70 pointer-events-none",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "outline",
        size: "lg",
        class: "bg-green-700",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVarients>;

export default function Button({
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVarients({ variant, size }), className)}
      {...props}
    >
      {variant}
    </button>
  );
}
