export interface NewsStory {
  id: string;
  href: string;
  title: string;
  kicker?: string | null;
  date: string;
  cover?: string | null;
  excerpt?: string | null;
  badge?: string;
}
