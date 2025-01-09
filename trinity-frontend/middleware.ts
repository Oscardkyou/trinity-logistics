import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { locales, defaultLocale } from './config';

export default async function middleware(request: NextRequest) {
  const handleI18nRouting = createMiddleware({
    locales,
    defaultLocale,
    localePrefix: 'always'
  });

  const response = await handleI18nRouting(request);
  return response;
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
