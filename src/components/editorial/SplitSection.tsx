import type { ReactNode } from "react";
// Style
import "./SplitSection.css";
// Components
import { Band } from "./Band";
import { IndexLabel } from "./IndexLabel";
import type { Tone } from "./tone";

interface SplitSectionProps {
  id?: string;
  tone?: Tone;
  index?: number;
  label?: string;
  title: string;
  body?: string;
  aside?: ReactNode;
  children?: ReactNode;
}

export function SplitSection({
  id,
  tone = "paper",
  index,
  label,
  title,
  body,
  aside,
  children,
}: SplitSectionProps) {
  return (
    <Band id={id} tone={tone}>
      <div className={children ? "split split--two" : "split"}>
        <div className="split__head">
          {index !== undefined && label && (
            <IndexLabel index={index} label={label} />
          )}
          <h2 className="split__title">{title}</h2>
          {body && <p className="split__body">{body}</p>}
          {aside}
        </div>
        {children && <div className="split__content">{children}</div>}
      </div>
    </Band>
  );
}
