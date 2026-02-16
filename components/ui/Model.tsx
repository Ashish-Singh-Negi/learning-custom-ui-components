import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";

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

type ModalVariants = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof modalVariants>;

export default function Modal({
  className,
  size,
  centered,
  blurBackground,
  children,
  ...props
}: ModalVariants) {
  return (
    <div
      className={cn(
        modalVariants({ size, centered, blurBackground }),
        className,
      )}
      {...props}
    >
      <div className="w-full bg-white rounded-lg shadow-lg">{children}</div>
    </div>
  );
}
