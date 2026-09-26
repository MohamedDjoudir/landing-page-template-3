import { useTranslations } from "next-intl";

interface StepsPaginationProps {
  selectedIndex: number;
  total: number;
  onSelect: (index: number) => void;
}

export function StepsPagination({
  selectedIndex,
  total,
  onSelect,
}: StepsPaginationProps) {
  const t = useTranslations("howItWorks");

  return (
    <div className="flex justify-center mt-8 sm:hidden">
      {Array.from({ length: total }, (_, index) => (
        <button
          key={index}
          type="button"
          className={`h-1 rounded-full mx-1 ${
            selectedIndex === index
              ? "w-5 bg-gradient-to-r from-red-500 to-amber-500"
              : "w-2 bg-white/20"
          }`}
          onClick={() => onSelect(index)}
          aria-label={t("goToStep", { number: index + 1 })}
        />
      ))}
    </div>
  );
}
