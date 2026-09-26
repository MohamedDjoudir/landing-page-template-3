import { useTranslations } from "next-intl";
import { GradientButton } from "@/components/GradientButton";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AuthButtonsProps {
  className?: string;
  loginClassName?: string;
  loginVariant?: "ghost" | "outline";
  signUpClassName?: string;
}

export function AuthButtons({
  className,
  loginClassName,
  loginVariant = "ghost",
  signUpClassName,
}: AuthButtonsProps) {
  const t = useTranslations("header");

  return (
    <div className={className}>
      <Button variant={loginVariant} className={loginClassName}>
        {t("login")}
      </Button>
      <GradientButton
        className={cn("shadow-lg shadow-amber-500/20", signUpClassName)}
      >
        {t("getStarted")}
      </GradientButton>
    </div>
  );
}
