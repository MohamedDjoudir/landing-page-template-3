import { useEffect, type RefObject } from "react";

export function useClickOutside(
  refs: RefObject<HTMLElement | null>[],
  enabled: boolean,
  onOutside: () => void
) {
  useEffect(() => {
    if (!enabled) return;

    const handleMouseDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (refs.every((ref) => ref.current && !ref.current.contains(target))) {
        onOutside();
      }
    };

    document.addEventListener("mousedown", handleMouseDown);
    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, [refs, enabled, onOutside]);
}
