import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from 'lucide-react';
import { PlaneTakeoff, Truck, Train } from 'lucide-react';

export default function Home() {
  const t = useTranslations('home');

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700">
          <div className="absolute inset-0 opacity-30">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
              <rect width="100" height="100" fill="url(#grid)"/>
            </svg>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">{t('hero.title')}</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">{t('hero.subtitle')}</p>
            <Link 
              href="/order" 
              className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              {t('hero.cta')}
            </Link>
          </div>
        </div>
      </section>

      {/* Development Notice */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Alert variant="warning" className="mb-8">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>{t('development.notice')}</AlertTitle>
            <AlertDescription>
              {t('development.description')}
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('services.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Авиаперевозки */}
            <div className="bg-blue-900 text-white rounded-lg p-8 text-center transition-transform hover:scale-105">
              <div className="flex justify-center mb-6">
                <PlaneTakeoff className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{t('services.air.title')}</h3>
              <p className="text-gray-200">{t('services.air.description')}</p>
            </div>

            {/* Автоперевозки */}
            <div className="bg-blue-900 text-white rounded-lg p-8 text-center transition-transform hover:scale-105">
              <div className="flex justify-center mb-6">
                <Truck className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{t('services.auto.title')}</h3>
              <p className="text-gray-200">{t('services.auto.description')}</p>
            </div>

            {/* ЖД перевозки */}
            <div className="bg-blue-900 text-white rounded-lg p-8 text-center transition-transform hover:scale-105">
              <div className="flex justify-center mb-6">
                <Train className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{t('services.rail.title')}</h3>
              <p className="text-gray-200">{t('services.rail.description')}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
