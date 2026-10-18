export const pad2 = (value: number): string => String(value).padStart(2, "0");

export const pickAt = <T>(items: readonly T[], index: number): T =>
  items[index % items.length];

export const formatDate = (iso: string, locale: string): string =>
  new Date(iso).toLocaleDateString(locale === "en" ? "en-GB" : "id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

export const splitLines = (text: string): string[] => {
  const clean = text.trim();
  const words = clean.split(/\s+/);
  if (words.length < 3 || clean.length <= 8) return [clean];

  let best = [clean];
  let bestMax = clean.length;
  for (let i = 2; i < words.length; i += 1) {
    const head = words.slice(0, i).join(" ");
    const tail = words.slice(i).join(" ");
    const longest = Math.max(head.length, tail.length);
    if (longest < bestMax) {
      bestMax = longest;
      best = [head, tail];
    }
  }
  return best;
};

export const formatLongDate = (iso: string, locale: string): string =>
  new Date(iso).toLocaleDateString(locale === "en" ? "en-GB" : "id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
