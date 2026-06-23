import { defaultLang, type Lang } from "./translations";

/** Base path from astro.config.mjs — keep in sync if it changes */
const BASE = "/feri-informatika-web";

/**
 * Builds a URL for the given path and locale.
 *
 * Examples (defaultLang = "sl", prefixDefaultLocale = false):
 *   localePath("sl", "/news")      → "/feri-informatika-web/news"
 *   localePath("en", "/news")      → "/feri-informatika-web/en/news"
 *   localePath("sl", "/")          → "/feri-informatika-web/"
 *   localePath("en", "/")          → "/feri-informatika-web/en/"
 */
export function localePath(lang: Lang, path: string): string {
  const prefix = lang === defaultLang ? "" : `/${lang}`;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${BASE}${prefix}${cleanPath}`;
}

/**
 * Given the current URL, returns the equivalent URL in the other language.
 * Used by the language switcher in the header.
 *
 * Examples:
 *   /feri-informatika-web/news     → /feri-informatika-web/en/news
 *   /feri-informatika-web/en/news  → /feri-informatika-web/news
 */
export function getAlternateUrl(currentUrl: URL, currentLang: Lang): string {
  const targetLang: Lang = currentLang === "sl" ? "en" : "sl";

  // Strip the base to get the raw path
  let path = currentUrl.pathname.replace(BASE, "") || "/";

  // If currently in English, strip the /en prefix
  if (currentLang === "en") {
    path = path.replace(/^\/en/, "") || "/";
  }

  return localePath(targetLang, path);
}

/**
 * Returns nav links with hrefs resolved for the given locale.
 * Call this in Base.astro to build the <nav>.
 */
export function getNavLinks(lang: Lang) {
  return [
    { key: "nav.about",         href: localePath(lang, "/about") },
    { key: "nav.researchGroup", href: localePath(lang, "/research-group") },
    { key: "nav.research",      href: localePath(lang, "/research") },
    { key: "nav.studies",       href: localePath(lang, "/studies") },
    { key: "nav.conferences",   href: localePath(lang, "/conferences") },
    { key: "nav.industry",      href: localePath(lang, "/industry") },
    { key: "nav.achievements",  href: localePath(lang, "/achievements") },
    { key: "nav.news",          href: localePath(lang, "/news") },
  ] as const;
}

/**
 * Detects the current language from the request URL.
 * Use this at the top of every page:
 *
 *   import { getLangFromUrl, useTranslations } from "@/i18n/translations";
 *   import { getAlternateUrl, getNavLinks, localePath } from "@/i18n/utils";
 *
 *   const lang = getLangFromUrl(Astro.url, "/feri-informatika-web");
 *   const t = useTranslations(lang);
 *   const alternateUrl = getAlternateUrl(Astro.url, lang);
 *   const navLinks = getNavLinks(lang);
 */