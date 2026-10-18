import type { ReactNode } from "react";
// Style
import "./PageHeader.css";
// Components
import { IndexLabel } from "./IndexLabel";
import { toneClass, type Tone } from "./tone";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  body?: string;
  tone?: Tone;
  children?: ReactNode;
}

export function PageHeader({
  eyebrow,
  title,
  body,
  tone = "tint",
  children,
}: PageHeaderProps) {
  return (
    <header className={`page-header ${toneClass(tone)}`}>
      <div className="vt-wrap page-header__inner">
        <IndexLabel index={1} label={eyebrow} />
        <h1 className="page-header__title">{title}</h1>
        {(body || children) && (
          <div className="page-header__side">
            {body && <p className="page-header__body">{body}</p>}
            {children}
          </div>
        )}
      </div>
    </header>
  );
}
