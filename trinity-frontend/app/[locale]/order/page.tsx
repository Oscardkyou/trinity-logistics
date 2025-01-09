'use client';

import { useTranslations } from 'next-intl';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from 'lucide-react';

export default function OrderPage() {
  const t = useTranslations('order');

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

        {/* Пример расчета */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-medium mb-4">Пример расчета стоимости</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Маршрут:</span>
              <span>Алматы → Москва</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Вес груза:</span>
              <span>500 кг</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Объем:</span>
              <span>2 м³</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Тип доставки:</span>
              <span>Авиаперевозка</span>
            </div>
            <div className="pt-3 border-t">
              <div className="flex justify-between font-semibold">
                <span>Стоимость:</span>
                <span className="text-blue-600">от 450 000 ₸</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">* Примерная стоимость. Точную стоимость уточняйте у менеджеров</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
