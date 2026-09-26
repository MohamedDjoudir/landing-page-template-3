import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  markClassName?: string;
  innerClassName?: string;
  nameClassName?: string;
}

export function Logo({
  className,
  markClassName,
  innerClassName,
  nameClassName,
}: LogoProps) {
  const t = useTranslations("brand");
  const name = t("name");

  return (
    <Link href="/" className={cn("flex items-center", className)}>
      <div className={cn("relative w-10 h-10", markClassName)}>
        <div className="absolute inset-0 bg-gradient-to-tr from-red-500 to-amber-500 rounded-lg rotate-45 transform origin-center"></div>
        <div
          className={cn(
            "absolute inset-[3px] bg-black rounded-lg flex items-center justify-center text-white font-bold",
            innerClassName
          )}
        >
          {name.charAt(0)}
        </div>
      </div>
      <span
        className={cn(
          "text-2xl font-bold bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent",
          nameClassName
        )}
      >
        {name}
      </span>
    </Link>
  );
}
