"use client";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { HTMLMotionProps, motion } from "framer-motion";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium focus:outline-none disabled:cursor-not-allowed disabled:opacity-70 cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-black text-white hover:bg-gray-900",
        secondary:
          "bg-white text-black border border-black hover:bg-black hover:text-white",
        outline:
          "border border-black text-black hover:bg-black hover:text-white",
        ghost: "bg-gray-50 text-black hover:bg-gray-100",
      },

      size: {
        sm: "h-8 px-3 text-sm rounded-sm",
        md: "h-10 px-4 text-base rounded-md",
        lg: "h-12 px-6 text-lg rounded-lg",
      },

      loading: {
        true: "pointer-events-none opacity-70",
        false: "",
      },

      fullWidth: {
        true: "w-full",
        false: "",
      },
    },

    compoundVariants: [
      {
        variant: "ghost",
        loading: true,
        class: "hover:bg-transparent",
      },
    ],

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = HTMLMotionProps<"button"> &
  VariantProps<typeof buttonVariants>;

export default function Button2({
  className,
  variant,
  size,
  loading,
  fullWidth,
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      disabled={loading!}
      className={cn(
        buttonVariants({ variant, size, loading, fullWidth }),
        className,
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
