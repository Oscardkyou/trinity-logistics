export const locales = ['ru', 'ky', 'en'] as const;
export const defaultLocale = 'ru' as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  ru: 'Русский',
  ky: 'Кыргызча',
  en: 'English'
};
