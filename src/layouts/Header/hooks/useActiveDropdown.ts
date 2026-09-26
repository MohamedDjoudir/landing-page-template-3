import { useCallback, useState } from "react";

export function useActiveDropdown() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const close = useCallback(() => setActiveId(null), []);
  const open = useCallback((id: string) => setActiveId(id), []);
  const closeIfActive = useCallback(
    (id: string) => setActiveId((current) => (current === id ? null : current)),
    []
  );
  const toggle = useCallback(
    (id: string) => setActiveId((current) => (current === id ? null : id)),
    []
  );

  return { activeId, open, close, closeIfActive, toggle };
}
