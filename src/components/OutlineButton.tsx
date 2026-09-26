import * as React from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const OutlineButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <Button
      ref={ref}
      variant="outline"
      className={cn("border-white/20 text-white hover:bg-white/10", className)}
      {...props}
    />
  )
);
OutlineButton.displayName = "OutlineButton";
