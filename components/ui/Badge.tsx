import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

const badgeVariants = cva("font-medium", {
  variants: {
    variant: {
      success: "bg-emerald-500 text-white",
      error: "bg-red-500 text-white",
      warning: "bg-amber-500 text-white",
      info: "bg-blue-500 text-white",
    },
    size: {
      sm: "text-sm px-2 py-0.5",
      md: "text-md px-4 py-1",
    },
    rounded: {
      true: "font-bold rounded-full",
      false: "",
    },
  },
  defaultVariants: {
    variant: "success",
    size: "md",
  },
});

type BadgeProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof badgeVariants>;

export default function Badge({
  className,
  variant,
  size,
  rounded,
  ...props
}: BadgeProps) {
  return (
    <button
      className={cn(badgeVariants({ variant, size, rounded }), className)}
      {...props}
    >
      {variant}
    </button>
  );
}
