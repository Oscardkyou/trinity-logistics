'use client';

import { useTranslations } from 'next-intl';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, Instagram } from 'lucide-react';

export default function ContactsPage() {
  const t = useTranslations('contacts');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">{t('title')}</h1>

      <Alert variant="warning" className="mb-8">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>{t('development.notice')}</AlertTitle>
        <AlertDescription>
          {t('development.description')}
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Контактная информация */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">{t('offices.title')}</h2>
          
          {/* Алматы */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-2">{t('offices.almaty.title')}</h3>
            <p className="text-gray-600">{t('offices.almaty.address')}</p>
            <p className="text-gray-600">Индекс: {t('offices.almaty.index')}</p>
          </div>

          {/* Астана */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-2">{t('offices.astana.title')}</h3>
            <p className="text-gray-600">{t('offices.astana.address')}</p>
          </div>

          {/* Социальные сети */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">{t('social.title')}</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <a 
                href="https://www.instagram.com/trinity.logistic/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
              >
                <Instagram className="h-5 w-5" />
                {t('social.instagram')}
              </a>
            </div>
          </div>
        </div>

        {/* Реквизиты */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">{t('requisites.title')}</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="space-y-2">
              <p><strong>{t('requisites.company')}</strong></p>
              <p><strong>{t('requisites.bin_title')}:</strong> {t('requisites.bin_value')}</p>
              <p><strong>{t('requisites.bank_name')}</strong></p>
              <p><strong>{t('requisites.iik_title')}:</strong> {t('requisites.iik_value')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
