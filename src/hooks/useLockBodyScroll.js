import { useEffect } from "react";

// Empêche le scroll de la page pendant qu'un overlay (menu mobile) est ouvert
export function useLockBodyScroll(locked) {
  useEffect(() => {
    if (!locked) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [locked]);
}
