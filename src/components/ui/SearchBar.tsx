import { useEffect, useId, useMemo, useRef, useState } from "react";
// Style
import "./SearchBar.css";
// Hooks
import { useLocale } from "@/hooks/useLocale";
// Utils
import type { LocaleCode } from "@/i18n/locales";

export interface SearchSuggestion {
  id: string;
  href: string;
  title: string;
  meta?: string;
}

interface SearchBarProps {
  value: string;
  suggestions: SearchSuggestion[];
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
  onSelect: (href: string) => void;
}

const COPY: Record<
  LocaleCode,
  {
    label: string;
    placeholder: string;
    clear: string;
    footer: string;
  }
> = {
  id: {
    label: "Cari artikel",
    placeholder: "Cari judul, kata kunci, kategori, atau slug",
    clear: "Hapus",
    footer: "Enter untuk melihat semua hasil",
  },
  en: {
    label: "Search articles",
    placeholder: "Search titles, keywords, categories, or slug",
    clear: "Clear",
    footer: "Press Enter to see all results",
  },
};

const escapeRegExp = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

function Highlight({ text, terms }: { text: string; terms: string[] }) {
  if (terms.length === 0) return <>{text}</>;
  const pattern = new RegExp(`(${terms.map(escapeRegExp).join("|")})`, "gi");
  return (
    <>
      {text.split(pattern).map((part, index) =>
        index % 2 ? (
          <mark key={index} className="search-bar__mark">
            {part}
          </mark>
        ) : (
          part
        ),
      )}
    </>
  );
}

export function SearchBar({
  value,
  suggestions,
  onChange,
  onSubmit,
  onSelect,
}: SearchBarProps) {
  const { locale } = useLocale();
  const copy = COPY[locale];
  const listId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);

  const terms = useMemo(
    () =>
      value
        .trim()
        .split(/\s+/)
        .filter((term) => term.length > 0),
    [value],
  );
  const expanded = open && suggestions.length > 0;

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "/" || event.metaKey || event.ctrlKey) return;
      const target = event.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }
      event.preventDefault();
      inputRef.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const select = (href: string) => {
    setOpen(false);
    setActive(-1);
    onSelect(href);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setOpen(true);
      setActive((index) => (index + 1) % Math.max(suggestions.length, 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setOpen(true);
      setActive((index) => (index <= 0 ? suggestions.length - 1 : index - 1));
    } else if (event.key === "Enter") {
      event.preventDefault();
      if (expanded && active >= 0) {
        select(suggestions[active].href);
      } else {
        setOpen(false);
        onSubmit(value);
      }
    } else if (event.key === "Escape") {
      if (expanded) setOpen(false);
      else onChange("");
    }
  };

  return (
    <div
      className="search-bar"
      role="search"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setOpen(false);
        }
      }}
    >
      <div className="search-bar__field">
        <svg
          className="search-bar__icon"
          viewBox="0 0 16 16"
          width="14"
          height="14"
          aria-hidden="true"
        >
          <circle
            cx="7"
            cy="7"
            r="4.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="m10.5 10.5 3.5 3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>

        <input
          ref={inputRef}
          className="search-bar__input"
          type="text"
          role="combobox"
          aria-label={copy.label}
          aria-expanded={expanded}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={
            expanded && active >= 0 ? `${listId}-${active}` : undefined
          }
          autoComplete="off"
          spellCheck={false}
          placeholder={copy.placeholder}
          value={value}
          onChange={(event) => {
            onChange(event.target.value);
            setOpen(true);
            setActive(-1);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
        />

        {value ? (
          <button
            type="button"
            className="search-bar__clear"
            aria-label={copy.clear}
            onClick={() => {
              onChange("");
              onSubmit("");
              inputRef.current?.focus();
            }}
          >
            {copy.clear}
          </button>
        ) : (
          <kbd className="search-bar__hint" aria-hidden="true">
            /
          </kbd>
        )}
      </div>

      {expanded && (
        <ul
          id={listId}
          className="search-bar__list"
          role="listbox"
          onMouseDown={(event) => event.preventDefault()}
        >
          {suggestions.map((item, index) => (
            <li
              key={item.id}
              id={`${listId}-${index}`}
              role="option"
              aria-selected={index === active}
              className={
                index === active
                  ? "search-bar__option is-active"
                  : "search-bar__option"
              }
              onMouseEnter={() => setActive(index)}
              onClick={() => select(item.href)}
            >
              <span className="search-bar__option-title">
                <Highlight text={item.title} terms={terms} />
              </span>
              {item.meta && (
                <span className="search-bar__option-meta">{item.meta}</span>
              )}
            </li>
          ))}
          <li className="search-bar__footer" aria-hidden="true">
            {copy.footer}
          </li>
        </ul>
      )}
    </div>
  );
}
