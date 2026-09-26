"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { User } from "lucide-react";

import { cn } from "@/lib/utils";

interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
  src?: string;
  alt?: string;
  fallback?: React.ReactNode;
}

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, src, alt = "", fallback, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  >
    {src && (
      <AvatarPrimitive.Image
        src={src}
        alt={alt}
        className="aspect-square h-full w-full object-cover"
      />
    )}
    <AvatarPrimitive.Fallback className="flex h-full w-full items-center justify-center rounded-full bg-muted text-muted-foreground">
      {fallback ?? <User className="h-1/2 w-1/2" aria-hidden="true" />}
    </AvatarPrimitive.Fallback>
  </AvatarPrimitive.Root>
));
Avatar.displayName = "Avatar";

export { Avatar };
