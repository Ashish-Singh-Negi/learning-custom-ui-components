"use client";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { motion, HTMLMotionProps } from "framer-motion";
import { useState } from "react";

const textareaVariants = cva(
  "h-12 w-60 rounded-md border p-2 outline-none resize-none",
  {
    variants: {
      tone: {
        default:
          "bg-gray-50 border-2 border-gray-400 focus:ring-gray-500 italic",
        mail: "bg-yellow-50 text-yellow-700 italic border-2 border-yellow-400 focus:border-yellow-500",
      },
    },
    defaultVariants: {
      tone: "default",
    },
  },
);

type TextareaProps = HTMLMotionProps<"textarea"> &
  VariantProps<typeof textareaVariants>;

export default function Textarea({
  className,
  children,
  placeholder,
  tone,
  ...props
}: TextareaProps) {
  const [focused, setFocused] = useState(false);

  return (
    <motion.textarea
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      initial={{ height: 48, width: 160 }}
      animate={{
        height: focused ? 180 : "auto",
        width: focused ? 360 : 180,
      }}
      transition={{ duration: 0.3 }}
      placeholder={placeholder}
      className={cn(textareaVariants({ tone }), className)}
      {...props}
    >
      {children}
    </motion.textarea>
  );
}
