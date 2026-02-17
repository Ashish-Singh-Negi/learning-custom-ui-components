"use client";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { HTMLMotionProps, motion } from "framer-motion";

const cardVariants = cva(
  "rounded-md transition-all duration-200 p-4 border-2 border-gray-200",
  {
    variants: {
      variant: {
        flat: "shadow-none",
        elevated: "shadow-xl",
      },
      tone: {
        default: "",
        danger: "border-red-200 bg-red-50",
        success: "border-emerald-500 bg-emerald-50",
      },
      interactive: {
        true: "hover:scale-105 cursor-pointer",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "elevated",
        interactive: true,
        class: "hover:shadow-2xl",
      },
    ],
    defaultVariants: {
      variant: "flat",
      tone: "default",
    },
  },
);

type CardProps = HTMLMotionProps<"div"> & VariantProps<typeof cardVariants>;

export default function Card({
  className,
  variant,
  tone,
  interactive,
  children,
  ...props
}: CardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      transition={{ duration: 0.3 }}
      className={cn(cardVariants({ variant, tone, interactive }), className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
