// Style
import "./IndexLabel.css";
// Utils
import { pad2 } from "@/domain/format";

interface IndexLabelProps {
  index: number;
  label: string;
  tone?: "light" | "dark";
}

export function IndexLabel({ index, label, tone = "light" }: IndexLabelProps) {
  return (
    <p className={`vt-index vt-index--${tone}`}>
      {pad2(index)} / {label}
    </p>
  );
}
