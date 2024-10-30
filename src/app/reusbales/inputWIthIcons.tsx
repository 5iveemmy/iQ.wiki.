import * as React from "react";
import { cn } from "@/lib/utils";

type InputWithIconProps = React.ComponentPropsWithoutRef<"input"> & {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

const InputWithIcon = React.forwardRef<
  React.ElementRef<"input">,
  InputWithIconProps
>(
  (
    { className, type, startIcon: StartIcon, endIcon: EndIcon, ...props },
    ref
  ) => {
    return (
      <div className="w-full relative flex items-center">
        {StartIcon && (
          <div className="absolute left-3 text-center transition-all disabled:pointer-events-none opacity-50">
            {StartIcon}
          </div>
        )}
        <input
          type={type}
          className={cn(
            "w-full py-2 rounded-xl bg-background placeholder:text-sm placeholder:text-gray-600 border border-border-faded transition duration-300 ease focus:outline-none focus:border-border-primary",
            StartIcon && "pl-10",
            EndIcon && "pr-9",
            className
          )}
          ref={ref}
          {...props}
        />
        {EndIcon && (
          <div className="absolute right-3 text-center transition-all disabled:pointer-events-none disabled:opacity-50">
            {EndIcon}
          </div>
        )}
      </div>
    );
  }
);

InputWithIcon.displayName = "InputWithIcon";

export { InputWithIcon };
