// Style
import "./InsightBar.css";
// Components
import { SmartLink } from "@barito-bahalap/components";

interface InsightBarProps {
  title: string;
  caption: string;
  items: { href: string; title: string }[];
}

export function InsightBar({ title, caption, items }: InsightBarProps) {
  return (
    <div className="insight-bar">
      <div className="insight-bar__label">
        <h1 className="insight-bar__title">{title}</h1>
        <span className="insight-bar__caption">{caption}</span>
      </div>

      <nav className="insight-bar__track" aria-label={caption}>
        {items.map((item) => (
          <SmartLink
            key={item.href}
            href={item.href}
            className="insight-bar__item"
          >
            {item.title}
          </SmartLink>
        ))}
      </nav>
    </div>
  );
}
