import { useState } from "react";
// Style
import "./ShareBar.css";
// Components
import { Icon } from "@barito-bahalap/components";
// Types
import type { IconsType } from "@barito-bahalap/types";
import { useLocale } from "@/hooks";

interface ShareBarProps {
  url: string;
  title: string;
}

const TARGETS: {
  key: string;
  label: string;
  icon: IconsType;
  href: (url: string, title: string) => string;
}[] = [
  {
    key: "whatsapp",
    label: "Bagikan ke WhatsApp",
    icon: "whatsapp" as IconsType,
    href: (u, t) => `https://wa.me/?text=${encodeURIComponent(`${t} ${u}`)}`,
  },
  {
    key: "facebook",
    label: "Bagikan ke Facebook",
    icon: "facebook" as IconsType,
    href: (u) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(u)}`,
  },
  {
    key: "x",
    label: "Bagikan ke X",
    icon: "xElon" as IconsType,
    href: (u, t) =>
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(t)}&url=${encodeURIComponent(u)}`,
  },
  {
    key: "linkedin",
    label: "Bagikan ke LinkedIn",
    icon: "linkedin" as IconsType,
    href: (u) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(u)}`,
  },
  {
    key: "telegram",
    label: "Bagikan ke Telegram",
    icon: "telegram" as IconsType,
    href: (u, t) =>
      `https://t.me/share/url?url=${encodeURIComponent(u)}&text=${encodeURIComponent(t)}`,
  },
];

export function ShareBar({ url, title }: ShareBarProps) {
  const { locale } = useLocale();
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Salin tautan:", url);
    }
  };

  return (
    <section className="article__share" aria-label="Bagikan artikel">
      <p className="article__share-label">
        {locale === "id" ? "Bagikan" : "Share"}
      </p>
      <div className="article__share-list">
        {TARGETS.map((target) => (
          <a
            key={target.key}
            className="article__share-btn"
            data-brand={target.key}
            href={target.href(url, title)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={target.label}
            title={target.label}
          >
            <Icon iconName={target.icon} fill="currentColor" size={20} />
          </a>
        ))}
        <button
          type="button"
          className="article__share-btn"
          onClick={copyLink}
          aria-label="Salin tautan"
          title="Salin tautan"
        >
          <Icon iconName="link45deg" fill="currentColor" size={20} />
        </button>
        <span
          className="article__share-status"
          role="status"
          aria-live="polite"
        >
          {copied ? "Tautan disalin" : ""}
        </span>
      </div>
    </section>
  );
}
