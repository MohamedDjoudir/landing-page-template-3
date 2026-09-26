import { useCallback, useEffect, useRef } from "react";
import { DROPDOWN_CLOSE_DELAY_MS } from "../constants";

/**
 * Opens on pointer enter and closes shortly after pointer leave, so the
 * pointer can travel between a trigger and its panel without flicker.
 */
export function useHoverIntent(onOpen: () => void, onClose: () => void) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancel = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  useEffect(() => cancel, [cancel]);

  const handleMouseEnter = useCallback(() => {
    cancel();
    onOpen();
  }, [cancel, onOpen]);

  const handleMouseLeave = useCallback(() => {
    cancel();
    timeoutRef.current = setTimeout(onClose, DROPDOWN_CLOSE_DELAY_MS);
  }, [cancel, onClose]);

  return { handleMouseEnter, handleMouseLeave };
}
