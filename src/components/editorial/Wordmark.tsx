import type { RefObject } from "react";
// Style
import "./Wordmark.css";

interface WordmarkProps {
  boxRef: RefObject<HTMLDivElement | null>;
  lines: string[];
  tone?: "navy" | "light" | "teal";
}

export function Wordmark({ boxRef, lines, tone = "navy" }: WordmarkProps) {
  return (
    <div
      ref={boxRef}
      className={`vt-wordmark vt-wordmark--${tone}`}
      aria-hidden="true"
    >
      {lines.map((line) => (
        <span key={line} className="vt-wordmark__line" data-line>
          {line}
        </span>
      ))}
    </div>
  );
}
