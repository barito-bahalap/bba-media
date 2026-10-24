// Generates public/sitemap.xml and public/rss.xml from published articles at build time.
// Needs VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY (and optional SITE_URL) in the build env.
import { mkdirSync, writeFileSync } from "node:fs";

const SITE = (
  process.env.SITE_URL ?? "https://media.baritobahalap.com"
).replace(/\/$/, "");
const URL_ = process.env.VITE_SUPABASE_URL;
const KEY = process.env.VITE_SUPABASE_ANON_KEY;

const staticPaths = ["/", "/about", "/contact", "/insight"];

const esc = (s = "") =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

let articles = [];
if (URL_ && KEY) {
  const res = await fetch(
    `${URL_}/rest/v1/published_articles?select=slug,title,excerpt,published_at,updated_at,author_name,category_name&order=published_at.desc&limit=200`,
    { headers: { apikey: KEY, Authorization: `Bearer ${KEY}` } },
  );
  if (res.ok) articles = await res.json();
  else console.warn("feeds: could not fetch articles", res.status);
} else {
  console.warn("feeds: Supabase env missing, generating static sitemap only");
}

const urls = [
  ...staticPaths.map((p) => `<url><loc>${SITE}${p}</loc></url>`),
  ...articles.map(
    (a) =>
      `<url><loc>${SITE}/insight/${a.slug}</loc><lastmod>${a.updated_at.slice(0, 10)}</lastmod></url>`,
  ),
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;

const items = articles.map(
  (a) =>
    `<item><title>${esc(a.title)}</title><link>${SITE}/insight/${a.slug}</link><guid>${SITE}/insight/${a.slug}</guid><pubDate>${new Date(a.published_at).toUTCString()}</pubDate>${a.category_name ? `<category>${esc(a.category_name)}</category>` : ""}<description>${esc(a.excerpt ?? "")}</description></item>`,
);
const rss = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel><title>Barito Bahalap Media</title><link>${SITE}/insight</link><description>Insight dari BBM</description><language>id</language>\n${items.join("\n")}\n</channel></rss>\n`;

mkdirSync("public", { recursive: true });
writeFileSync("public/sitemap.xml", sitemap);
writeFileSync("public/rss.xml", rss);
writeFileSync(
  "public/robots.txt",
  `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`,
);
console.log(`feeds: ${articles.length} articles`);
