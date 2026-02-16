"use client";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes, useEffect } from "react";

const toastVariants = cva(
  "fixed z-50 rounded-md border px-4 py-2 shadow-md transition-all",
  {
    variants: {
      position: {
        ["top-right"]: "top-4 right-4",
        ["bottom-left"]: "bottom-4 left-4",
      },
      type: {
        success: "bg-green-50 border-green-500",
        error: "bg-red-50 border-red-500",
        info: "bg-blue-50 border-blue-500",
      },
      dismissible: {
        true: "pr-10",
        false: "",
      },
    },
    compoundVariants: [
      {
        type: "error",
        dismissible: true,
        class: "border-2",
      },
    ],
    defaultVariants: {
      position: "top-right",
      type: "info",
      dismissible: true,
    },
  },
);

type ToastProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof toastVariants>;

export default function Toast({
  className,
  position,
  type,
  dismissible,
  children,
  ...props
}: ToastProps) {
  return (
    <div
      className={cn(toastVariants({ position, type, dismissible }), className)}
      {...props}
    >
      {children}
    </div>
  );
}
