import * as React from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const GRADIENT_BUTTON_CLASS =
  "bg-gradient-to-r from-red-500 to-amber-500 hover:from-red-600 hover:to-amber-600 text-white border-0";

export const GradientButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <Button
      ref={ref}
      className={cn(GRADIENT_BUTTON_CLASS, className)}
      {...props}
    />
  )
);
GradientButton.displayName = "GradientButton";
