import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { getContent } from "@/data";
import {
  DEFAULT_LOCALE,
  LOCALES,
  isEnabledLocale,
  localizeHref,
  type LocaleCode,
} from "@/i18n/locales";
import { localizeContent } from "@/i18n/localize";

export function useLocale() {
  const { pathname } = useLocation();
  const segment = pathname.split("/")[1];
  const locale: LocaleCode = isEnabledLocale(segment) ? segment : DEFAULT_LOCALE;

  useEffect(() => {
    document.documentElement.lang = LOCALES[locale].htmlLang;
  }, [locale]);

  const content = useMemo(
    () => localizeContent(getContent(locale), locale),
    [locale],
  );

  const href = useMemo(
    () => (path: string, target: LocaleCode = locale) =>
      localizeHref(path, target),
    [locale],
  );

  return { locale, content, href };
}
