// Style
import "./CategoryFilter.css";
// Components
import { SmartLink } from "@barito-bahalap/components";

interface CategoryFilterProps {
  label: string;
  items: { label: string; href: string; active: boolean }[];
}

export function CategoryFilter({ label, items }: CategoryFilterProps) {
  return (
    <nav className="filter" aria-label={label}>
      {items.map((item) => (
        <SmartLink
          key={item.href}
          href={item.href}
          className={item.active ? "filter__pill is-active" : "filter__pill"}
          aria-current={item.active ? "true" : undefined}
        >
          {item.label}
        </SmartLink>
      ))}
    </nav>
  );
}
