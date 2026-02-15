import { translations, defaultLang, type Lang, type TranslationKey } from './translations';

/**
 * Get translation for a key in the given language.
 */
export function t(lang: Lang, key: TranslationKey): string {
  return translations[lang][key] ?? translations[defaultLang][key] ?? key;
}

/**
 * Get the current language from a URL pathname.
 * /en/... → 'en', everything else → 'zh'
 */
export function getLangFromUrl(pathname: string): Lang {
  if (pathname.startsWith('/en/') || pathname === '/en') {
    return 'en';
  }
  return 'zh';
}

/**
 * Get the URL prefix for a language. 
 * 'zh' → '' (default, no prefix), 'en' → '/en'
 */
export function getLangPrefix(lang: Lang): string {
  return lang === defaultLang ? '' : `/${lang}`;
}

/**
 * Get the equivalent URL in the other language.
 * e.g. /about → /en/about, /en/blog → /blog
 */
export function getAlternateUrl(pathname: string): string {
  const currentLang = getLangFromUrl(pathname);
  if (currentLang === 'en') {
    // Remove /en prefix
    const stripped = pathname.replace(/^\/en/, '') || '/';
    return stripped;
  } else {
    // Add /en prefix
    return `/en${pathname === '/' ? '/' : pathname}`;
  }
}

/**
 * Get the alternate language label for the toggle button.
 */
export function getAlternateLangLabel(lang: Lang): string {
  return lang === 'zh' ? 'EN' : '中';
}

export { type Lang, type TranslationKey, defaultLang } from './translations';
