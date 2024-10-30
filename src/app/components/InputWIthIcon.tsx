import * as React from "react";
import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
};

type InputWithIconProps = React.ComponentPropsWithoutRef<"input"> & {
  startIcon?: React.ComponentType<IconProps>;
  endIcon?: React.ReactNode;
  onStartIconClick?: React.MouseEventHandler<HTMLButtonElement>;
  onEndIconClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const InputWithIcon = React.forwardRef<
  React.ElementRef<"input">,
  InputWithIconProps
>(
  (
    {
      className,
      type,
      startIcon: StartIcon,
      endIcon: EndIcon,
      onStartIconClick,
      onEndIconClick,
      ...props
    },
    ref
  ) => {
    return (
      <div className="w-full relative flex items-center">
        {StartIcon && (
          <button
            className=" absolute left-3 text-center transition-all disabled:pointer-events-none opacity-50"
            type="button"
            onClick={onStartIconClick}
          >
            <StartIcon className={"w-5 h-5 text-foreground-faded"} />
          </button>
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
          <button
            className="absolute right-3 text-center transition-all disabled:pointer-events-none disabled:opacity-50"
            type="button"
            onClick={onEndIconClick}
          >
            {EndIcon}
          </button>
        )}
      </div>
    );
  }
);

InputWithIcon.displayName = "InputWithIcon";
export { InputWithIcon };
