const pic = (seed: string, w: number, h: number) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const sampleStories = Array.from({ length: 8 }, (_, i) => ({
  id: `sample-${i + 1}`,
  slug: `sample-${i + 1}`,
  title: `Sample headline ${i + 1}: placeholder text for layout review`,
  category_name: i % 2 === 0 ? "Sample category" : "Sample topic",
  excerpt:
    "Placeholder summary used only in development to review the layout. Not real content.",
  cover_url: i < 3 ? pic(`bbm-sample-${i + 1}`, 1400, 900) : null,
}));
