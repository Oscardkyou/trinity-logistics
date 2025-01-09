'use client'

import { usePathname, useRouter } from 'next/navigation'
import { locales, localeNames, type Locale } from '@/config'
import { Button } from '@/components/ui/button'
import { useParams } from 'next/navigation'

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const currentLocale = params.locale as Locale

  const handleLocaleChange = (newLocale: Locale) => {
    // Заменяем текущую локаль в URL на новую
    const newPathname = pathname.replace(`/${currentLocale}`, `/${newLocale}`)
    router.push(newPathname)
  }

  return (
    <div className="flex space-x-2">
      {locales.map((locale) => (
        <Button
          key={locale}
          variant={locale === currentLocale ? "secondary" : "ghost"}
          size="sm"
          onClick={() => handleLocaleChange(locale)}
          className="text-sm"
        >
          {localeNames[locale]}
        </Button>
      ))}
    </div>
  )
}
