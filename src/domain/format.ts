export const pad2 = (value: number): string => String(value).padStart(2, "0");

export const pickAt = <T>(items: readonly T[], index: number): T =>
  items[index % items.length];

export const formatDate = (iso: string, locale: string): string =>
  new Date(iso).toLocaleDateString(locale === "en" ? "en-GB" : "id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
