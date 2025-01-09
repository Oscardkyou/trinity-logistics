import {getRequestConfig} from 'next-intl/server';
import {requestLocale} from 'next-intl/server';
import {locales} from './config';
 
export default async function getConfig() {
  const locale = await requestLocale();
  if (!locales.includes(locale as any)) throw new Error(`Locale ${locale} is not supported`);
 
  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
    timeZone: 'Asia/Almaty'
  };
}
