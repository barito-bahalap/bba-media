import type { ReactNode } from "react";
// Style
import "./Band.css";
// Components
import { toneClass, type Tone } from "./tone";

interface BandProps {
  id?: string;
  tone?: Tone;
  children: ReactNode;
}

export function Band({ id, tone = "paper", children }: BandProps) {
  return (
    <section id={id} className={`band ${toneClass(tone)}`}>
      <div className="vt-wrap band__inner">{children}</div>
    </section>
  );
}
