import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { InputHTMLAttributes } from "react";

const inputVariants = cva(
  "w-80 bg-white rounded-md outline-none border-2 border-black focus:border-blue-500 caret-blue-500",
  {
    variants: {
      size: {
        sm: "h-10 px-2",
        md: "h-11 px-3",
        lg: "h-12 px-4",
      },
      error: {
        true: "border-red-500 focus:border-red-600 caret-red-500",
        false: "",
      },
      disabled: {
        true: "border-transparent bg-gray-300 cursor-not-allowed",
        false: "",
      },
    },
    compoundVariants: [
      {
        error: true,
        disabled: true,
        class: "",
      },
    ],
    defaultVariants: {
      size: "sm",
    },
  },
);

type InputProps = InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputVariants>;

export default function Input({
  className,
  size,
  error,
  disabled,
  placeholder,
  children,
  ...props
}: InputProps) {
  return (
    <input
      disabled={disabled}
      placeholder={placeholder}
      className={cn(inputVariants({ size, error, disabled }), className)}
      {...props}
    >
      {children}
    </input>
  );
}
