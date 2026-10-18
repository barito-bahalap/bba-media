import { useLayoutEffect, useRef } from "react";
import { splitLines } from "@/domain/format";

export function useWordmark(text: string, maxRem: number) {
  const boxRef = useRef<HTMLDivElement>(null);
  const lines = splitLines(text);
  const key = lines.join("|");

  useLayoutEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    let active = true;

    const fit = () => {
      if (!active) return;
      const rows = box.querySelectorAll<HTMLElement>("[data-line]");
      if (rows.length === 0) return;
      box.style.fontSize = "100px";
      const widest = Math.max(
        ...Array.from(rows, (row) => row.getBoundingClientRect().width),
      );
      if (widest === 0) return;
      const rem =
        parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
      const size = Math.min((box.clientWidth / widest) * 100, maxRem * rem);
      box.style.fontSize = `${size}px`;
      box.dataset.fit = "true";
    };

    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(box);
    document.fonts?.ready.then(fit);

    return () => {
      active = false;
      observer.disconnect();
    };
  }, [key, maxRem]);

  return { boxRef, lines };
}
