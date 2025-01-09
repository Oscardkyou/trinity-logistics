'use client';

import { useTranslations } from 'next-intl';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from 'lucide-react';

export default function NewsPage() {
  const t = useTranslations('news');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">{t('title')}</h1>
      <p className="text-gray-600 text-center mb-8">{t('subtitle')}</p>

      <div className="max-w-xl mx-auto">
        <Alert variant="warning" className="mb-8">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>{t('development.notice')}</AlertTitle>
          <AlertDescription>
            {t('development.description')}
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
