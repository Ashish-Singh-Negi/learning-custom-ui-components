"use client";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { motion, HTMLMotionProps, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";

const modalVariants = cva("fixed inset-0 z-50 flex w-full bg-black/30 p-4", {
  variants: {
    size: {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
    },
    centered: {
      true: "items-center justify-center",
      false: "items-start justify-center",
    },
    blurBackground: {
      true: "backdrop-blur-sm",
      false: "",
    },
  },
  compoundVariants: [
    {
      size: "lg",
      centered: true,
      class: "p-8",
    },
  ],
  defaultVariants: {
    size: "md",
    centered: true,
    blurBackground: false,
  },
});

type ModalVariants = HTMLMotionProps<"div"> &
  VariantProps<typeof modalVariants>;

export default function ModalToggleBtn({
  className,
  size,
  centered,
  blurBackground,
  children,
  ...props
}: ModalVariants) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setIsOpen((prev) => !prev);
    }, 3000);

    return () => {
      clearInterval(id);
    };
  }, []);

  console.log(isOpen);

  return (
    <motion.div
      className={cn(
        modalVariants({ size, centered, blurBackground }),
        className,
      )}
      {...props}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="w-full bg-white rounded-lg shadow-lg"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
