'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertTriangle, Package, Truck } from 'lucide-react';

export default function TrackingPage() {
  const t = useTranslations('tracking');
  const [trackingNumber, setTrackingNumber] = useState('');
  const [showDemo, setShowDemo] = useState(false);

  const handleTracking = (e: React.FormEvent) => {
    e.preventDefault();
    setShowDemo(true);
  };

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

        <form onSubmit={handleTracking} className="space-y-4">
          <div className="flex gap-4">
            <Input
              type="text"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              placeholder={t('placeholder')}
              className="flex-1"
            />
            <Button type="submit">{t('button')}</Button>
          </div>
        </form>

        {showDemo && (
          <div className="mt-8 p-6 border rounded-lg bg-white shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">{t('demo.title')}</h3>
              <span className="text-sm text-gray-500">{t('demo.tracking_number')}</span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-green-600">
                <Truck className="h-5 w-5" />
                <span className="font-medium">{t('demo.status')}</span>
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <Package className="h-5 w-5" />
                <span>{t('demo.location')}</span>
              </div>

              <p className="text-sm text-gray-500 mt-4">
                {t('demo.updated')}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
