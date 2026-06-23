"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AosProvider({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    const init = async () => {
      const mod = await import("aos");
      const AOS = mod.default;
      AOS.init({
        duration: 800,
        easing: "ease-out-cubic",
        once: false,
        offset: 80,
        delay: 0,
        anchorPlacement: "top-bottom",
      });
    };

    init();
  }, []);

  useEffect(() => {
    let cancelled = false;

    const refresh = async () => {
      const mod = await import("aos");
      if (!cancelled) mod.default.refresh();
    };

    refresh();

    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return children;
}
