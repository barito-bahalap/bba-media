import * as en from "./en";
import * as id from "./id";
import type { LocaleCode } from "@/i18n/locales";
import type { ContentBundle } from "@/i18n/types";

// The type annotation makes `id` fail to compile if it drifts from `en`.
const bundles: Record<LocaleCode, ContentBundle> = { en, id };

export function getContent(locale: LocaleCode): ContentBundle {
  return bundles[locale];
}

export { HOLDING_URL, LOCATION } from "./constants";
export { HOME_LABELS } from "./labels";
