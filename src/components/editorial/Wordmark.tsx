import type { CSSProperties } from "react";
// Style
import "./Wordmark.css";

interface WordmarkProps {
  text: string;
  tone?: "navy" | "light";
}

export function Wordmark({ text, tone = "navy" }: WordmarkProps) {
  const style = { "--vt-chars": text.length } as CSSProperties;

  return (
    <div className={`vt-wordmark vt-wordmark--${tone}`} aria-hidden="true">
      <span className="vt-wordmark__text" style={style}>
        {text}
      </span>
    </div>
  );
}
