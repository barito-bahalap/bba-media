import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

export function useHeaderDrawer() {
  const { pathname } = useLocation();
  const [openedAt, setOpenedAt] = useState<string | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const restoreFocusRef = useRef(false);

  const open = openedAt === pathname;

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpenedAt(null);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) return;
    const root = document.getElementById("root");
    const trigger = triggerRef.current;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      restoreFocusRef.current = true;
      setOpenedAt(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.classList.add("no-scroll");
    root?.setAttribute("inert", "");
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("no-scroll");
      root?.removeAttribute("inert");
      if (restoreFocusRef.current) {
        restoreFocusRef.current = false;
        trigger?.focus();
      }
    };
  }, [open]);

  return {
    open,
    triggerRef,
    closeRef,
    openDrawer: () => setOpenedAt(pathname),
    closeDrawer: () => setOpenedAt(null),
    dismissDrawer: () => {
      restoreFocusRef.current = true;
      setOpenedAt(null);
    },
  };
}
