import createMiddleware from 'next-intl/middleware';
import { locales } from './config';

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,
  
  // Used when no locale matches
  defaultLocale: 'ru',
  
  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  localePrefix: 'always'
});

export const config = {
  // Match all pathnames except for
  // - API routes
  // - Static files
  // - _next
  // - Other internal paths
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
