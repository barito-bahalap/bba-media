// Style
import "./Tile.css";
// Components
import { toneClass, type Tone } from "./tone";

interface TileProps {
  number?: string | number;
  title: string;
  body: string;
  tone?: Tone;
}

export function Tile({ number, title, body, tone = "tint" }: TileProps) {
  return (
    <article className={`tile ${toneClass(tone)}`}>
      {number !== undefined && <span className="tile__number">{number}</span>}
      <div className="tile__text">
        <h3 className="tile__title">{title}</h3>
        <p className="tile__body">{body}</p>
      </div>
    </article>
  );
}
