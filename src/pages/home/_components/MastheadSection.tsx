import type { RefObject } from "react";
// Style
import "./MastheadSection.css";
// Components
import { Wordmark } from "@/components";

interface MastheadSectionProps {
  boxRef: RefObject<HTMLDivElement | null>;
  lines: string[];
  meta: string[];
}

export function MastheadSection({ boxRef, lines, meta }: MastheadSectionProps) {
  return (
    <section className="masthead">
      <div className="vt-wrap masthead__inner">
        <ul className="masthead__meta">
          {meta.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Wordmark boxRef={boxRef} lines={lines} />
      </div>
    </section>
  );
}
