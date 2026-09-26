import { Logo } from "@/components/Logo";

export function HeaderLogo() {
  return (
    <Logo
      className="gap-1.5 sm:gap-2 relative z-10"
      markClassName="w-8 h-8 sm:w-10 sm:h-10"
      innerClassName="inset-[2.5px] sm:inset-[3px]"
      nameClassName="text-xl sm:text-2xl"
    />
  );
}
