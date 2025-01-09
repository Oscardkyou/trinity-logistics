import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './config';

// Создаем middleware для обработки локализации
export default createMiddleware({
  // Поддерживаемые локали
  locales: locales,
  // Локаль по умолчанию
  defaultLocale: defaultLocale,
  // Локализованные пути
  localePrefix: 'always'
});

export const config = {
  // Защищаем все маршруты, кроме API и статических файлов
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
