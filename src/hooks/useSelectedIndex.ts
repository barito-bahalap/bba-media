import { useState } from "react";

export function useSelectedIndex(initial = 0) {
  const [index, setIndex] = useState(initial);
  return { index, select: setIndex };
}
