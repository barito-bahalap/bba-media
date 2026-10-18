const pic = (seed: string, width: number, height: number) =>
  `https://picsum.photos/seed/${seed}/${width}/${height}`;

export const homeImages = {
  hero: pic("bbm-hero", 1200, 1400),
  banner: pic("bbm-banner", 1800, 900),
  capabilities: Array.from({ length: 8 }, (_, i) =>
    pic(`bbm-capability-${i + 1}`, 1400, 900),
  ),
  journal: Array.from({ length: 3 }, (_, i) =>
    pic(`bbm-journal-${i + 1}`, 900, 600),
  ),
};
