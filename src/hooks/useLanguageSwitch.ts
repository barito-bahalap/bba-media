import { useLocation } from "react-router-dom";
import {
  ENABLED_LOCALES,
  LOCALES,
  localizeHref,
  stripLocalePrefix,
} from "@/i18n/locales";
import { useLocale } from "./useLocale";

export interface LanguageItem {
  code: string;
  short: string;
  label: string;
  lang: string;
  href: string;
  active: boolean;
}

export function useLanguageSwitch(): LanguageItem[] {
  const { pathname, search, hash } = useLocation();
  const { locale } = useLocale();
  const base = stripLocalePrefix(pathname);

  return ENABLED_LOCALES.map((code) => ({
    code,
    short: LOCALES[code].short,
    label: LOCALES[code].label,
    lang: LOCALES[code].htmlLang,
    href: `${localizeHref(base, code)}${search}${hash}`,
    active: code === locale,
  }));
}
