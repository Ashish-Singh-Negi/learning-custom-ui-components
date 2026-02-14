import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { BadgeAlert } from "lucide-react";
import { HTMLAttributes } from "react";

const alertVarients = cva(
  "px-3 py-1 rounded-md text-white font-medium flex items-center",
  {
    variants: {
      type: {
        success: "bg-green-500 border-2 border-green-800",
        error: "bg-red-500 border-2 border-red-800",
        warning: "bg-amber-500 border-2 border-amber-800",
      },
      withIcon: {
        true: "pl-3 gap-1",
        false: "",
      },
      dismissible: {
        true: "pr-3",
        false: "",
      },
    },
  },
);

type AlertProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof alertVarients> & {
    alertMessage: string;
  };

export default function Alert({
  className,
  type,
  withIcon,
  dismissible,
  alertMessage,
  ...props
}: AlertProps) {
  return (
    <div
      className={cn(alertVarients({ type, withIcon, dismissible }), className)}
      {...props}
    >
      {withIcon && <BadgeAlert className="size-5" />} {alertMessage}
    </div>
  );
}
