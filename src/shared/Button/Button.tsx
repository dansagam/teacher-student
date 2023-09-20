"use client";
import React from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { ButtonProps } from "@/shared/Button/type";
import { classVariable } from "@/utils/classUtils";
import CircularProgress from "../CircularProgress";

export const btnVariant = cva("focus:ring-4 focus:outline-none flex items-center", {
  variants: {
    variant: {
      outline: "",
      contained: "",
      text: "",
    },
    color: {
      primary: "bg-primary-main text-common-white",
      secondary: "",
      warning: "",
      success: "bg-success-500 text-common-white",
      error: "bg-error-critical text-error",
    },
  },
});

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      onClick,
      variant,
      color,
      className,
      startArdornment,
      endArdornment,
      childrenClassName,
      loading,
      ...rest
    },
    ref
  ) => {
    return (
      <button
        data-testid="shared-button"
        onClick={
          loading
            ? () => {
                return;
              }
            : onClick
        }
        {...rest}
        ref={ref}
        className={classVariable(btnVariant({ className, variant, color }))}
      >
        {startArdornment && !loading && <>{startArdornment}</>}
        {loading && <CircularProgress />}
        <div className={twMerge("pl-2 pr-2 flex-1 text-center", childrenClassName)}>{children}</div>
        {endArdornment && !loading && <>{endArdornment}</>}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
