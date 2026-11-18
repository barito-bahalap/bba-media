// Style
import "./CapabilityItem.css";

interface CapabilityItemProps {
  number: string;
  title: string;
  body: string;
  active: boolean;
  onSelect: () => void;
}

export function CapabilityItem({
  number,
  title,
  body,
  active,
  onSelect,
}: CapabilityItemProps) {
  return (
    <div className={active ? "capability is-active" : "capability"}>
      <button
        type="button"
        className="capability__head"
        aria-expanded={active}
        onClick={onSelect}
      >
        <span className="capability__number">{number}</span>
        <span className="capability__title">{title}</span>
        <span className="capability__arrow" aria-hidden="true">
          &rarr;
        </span>
      </button>
      {active && <p className="capability__body">{body}</p>}
    </div>
  );
}
