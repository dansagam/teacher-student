import React from "react";
import { twMerge } from "tailwind-merge";
import { IconButtonProps } from "@/shared/Button/type";

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, type, className, ...rest }, ref) => {
    return (
      <button
        type={type || "button"}
        ref={ref}
        {...rest}
        className={twMerge(
          ...[
            className,
            " focus:ring-1 focus:outline-none h-max focus:ring-gray-300 bg-inherit rounded-full p-1 hover:!bg-gray-400 text-common-white",
          ]
        )}
      >
        {children}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";

export default IconButton;
