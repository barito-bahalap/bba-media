// Style
import "./FloatCard.css";

interface FloatCardProps {
  label: string;
  rows: { label: string; value: string }[];
}

export function FloatCard({ label, rows }: FloatCardProps) {
  return (
    <div className="float-card">
      <p className="float-card__label">{label}</p>
      <ul className="float-card__rows">
        {rows.map((row) => (
          <li className="float-card__row" key={row.label}>
            <span className="float-card__key">{row.label}</span>
            <span className="float-card__value">{row.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
