export const locales = ['ru', 'en'] as const;
export type Locale = typeof locales[number];

export const localeNames: Record<Locale, string> = {
  ru: 'РУС',
  en: 'ENG'
};

export const defaultLocale: Locale = 'ru';
