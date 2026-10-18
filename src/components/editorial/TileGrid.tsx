import type { ReactNode } from "react";
// Style
import "./TileGrid.css";

interface TileGridProps {
  columns?: 2 | 3;
  children: ReactNode;
}

export function TileGrid({ columns = 2, children }: TileGridProps) {
  return <div className={`tile-grid tile-grid--${columns}`}>{children}</div>;
}
