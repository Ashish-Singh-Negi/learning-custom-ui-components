import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

const dataRowVariants = cva("transition-colors border-l-4 p-2", {
  variants: {
    selected: {
      true: "bg-blue-100",
      false: "",
    },

    striped: {
      true: "bg-gray-50",
      false: "",
    },

    clickable: {
      true: "cursor-pointer hover:bg-gray-100",
      false: "",
    },

    status: {
      success: "border-green-500",
      warning: "border-amber-500",
      error: "border-red-500",
      none: "border-transparent",
    },
  },

  compoundVariants: [
    {
      striped: true,
      selected: true,
      class: "bg-blue-100",
    },
    {
      clickable: true,
      selected: true,
      class: "hover:bg-blue-200",
    },
    {
      selected: true,
      status: ["success", "warning", "error"],
      class: "bg-blue-100 ring-1 ring-offset-1",
    },
  ],

  defaultVariants: {
    selected: false,
    striped: false,
    clickable: false,
    status: "none",
  },
});

type DataTableRowProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof dataRowVariants>;

export function DataTableRow({
  className,
  selected,
  striped,
  clickable,
  status,
  children,
  ...props
}: DataTableRowProps) {
  return (
    <div
      className={cn(
        dataRowVariants({ selected, striped, clickable, status }),
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
