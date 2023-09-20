import type { VariantProps } from "class-variance-authority";
import { btnVariant } from "@/shared/Button/Button";

interface ButtonFormProps {
  startArdornment?: React.ReactNode;
  endArdornment?: React.ReactNode;
}

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    ButtonFormProps,
    VariantProps<typeof btnVariant> {
  loading?: boolean;
  childrenClassName?: string;
}

export interface IconButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  loading?: boolean;
}
