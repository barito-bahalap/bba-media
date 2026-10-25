// Style
import "./SectionHead.css";
// Components
import { IndexLabel } from "@/components";

interface SectionHeadProps {
  index: number;
  label: string;
  title: string;
}

export function SectionHead({ index, label, title }: SectionHeadProps) {
  return (
    <div className="section-head">
      <IndexLabel index={index} label={label} />
      <h2 className="section-head__title">{title}</h2>
    </div>
  );
}
