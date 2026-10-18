// Style
import "./CapabilitiesSection.css";
// Components
import { IndexLabel } from "@/components";
import { CapabilityItem } from "./CapabilityItem";
// Utils
import { pickAt } from "@/domain/format";

interface CapabilitiesSectionProps {
  eyebrow: string;
  heading: string;
  items: readonly {
    readonly number: string | number;
    readonly title: string;
    readonly body: string;
  }[];
  images: readonly string[];
  selected: number;
  onSelect: (index: number) => void;
}

export function CapabilitiesSection({
  eyebrow,
  heading,
  items,
  images,
  selected,
  onSelect,
}: CapabilitiesSectionProps) {
  const active = pickAt(items, selected);

  return (
    <section className="capabilities">
      <div className="vt-wrap capabilities__inner">
        <div className="capabilities__head">
          <IndexLabel index={4} label={eyebrow} />
          <h2 className="capabilities__title">{heading}</h2>
        </div>

        <div className="capabilities__grid">
          <div className="capabilities__list">
            {items.map((item, index) => (
              <CapabilityItem
                key={item.number}
                number={String(item.number)}
                title={item.title}
                body={item.body}
                active={index === selected}
                onSelect={() => onSelect(index)}
              />
            ))}
          </div>

          <figure className="capabilities__figure">
            <img
              className="capabilities__img"
              src={pickAt(images, selected)}
              alt=""
              loading="lazy"
            />
            <figcaption className="capabilities__caption">
              {active.number} / {active.title}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
