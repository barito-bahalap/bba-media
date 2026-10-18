// Style
import "./BulletList.css";

interface BulletListProps {
  items: readonly string[];
}

export function BulletList({ items }: BulletListProps) {
  return (
    <ul className="bullets">
      {items.map((item) => (
        <li className="bullets__item" key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}
