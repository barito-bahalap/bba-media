const pic = (seed: string, width: number, height: number) =>
  `https://picsum.photos/seed/${seed}/${width}/${height}`;

export const placeholders = {
  hero: pic("bbm-hero", 1400, 1200),
  services: Array.from({ length: 4 }, (_, i) =>
    pic(`bbm-service-${i + 1}`, 800, 1100),
  ),
  capabilities: Array.from({ length: 4 }, (_, i) =>
    pic(`bbm-capability-${i + 1}`, 800, 1100),
  ),
  cases: Array.from({ length: 6 }, (_, i) =>
    pic(`bbm-case-${i + 1}`, 1200, 800),
  ),
};
