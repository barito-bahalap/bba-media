// Style
import "./DefinitionList.css";

interface DefinitionListProps {
  rows: { term: string; value: string }[];
}

export function DefinitionList({ rows }: DefinitionListProps) {
  return (
    <dl className="deflist">
      {rows.map((row) => (
        <div className="deflist__row" key={row.term}>
          <dt className="deflist__term">{row.term}</dt>
          <dd className="deflist__value">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
