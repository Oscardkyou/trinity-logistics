'use client';

import { useTranslations } from 'next-intl';

export default function ContactsPage() {
  const t = useTranslations('contacts');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-12">{t('title')}</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Офисы и реквизиты */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-6">{t('offices.title')}</h2>
          
          {/* Алматы */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">{t('offices.almaty.title')}</h3>
            <p className="mb-2">{t('offices.almaty.address')}</p>
            <p className="mb-4">Индекс: {t('offices.almaty.index')}</p>
          </div>

          {/* Астана */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">{t('offices.astana.title')}</h3>
            <p className="mb-4">{t('offices.astana.address')}</p>
          </div>

          {/* Реквизиты компании */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">{t('requisites.title')}</h3>
            <div className="space-y-2">
              <p>
                <span className="font-medium">{t('requisites.company')}: </span>
                {t('requisites.company')}
              </p>
              <p>
                <span className="font-medium">{t('requisites.bin')}: </span>
                {t('requisites.bin_value')}
              </p>
              <p>
                <span className="font-medium">{t('requisites.bank')}: </span>
                {t('requisites.bank_name')}
              </p>
              <p>
                <span className="font-medium">{t('requisites.bik')}: </span>
                {t('requisites.bik_value')}
              </p>
              <p>
                <span className="font-medium">{t('requisites.accounts.kzt')}: </span>
                {t('requisites.accounts.kzt_value')}
              </p>
              <p>
                <span className="font-medium">{t('requisites.accounts.rub')}: </span>
                {t('requisites.accounts.rub_value')}
              </p>
              <p>
                <span className="font-medium">{t('requisites.director')}: </span>
                {t('requisites.director_name')}
              </p>
            </div>
          </div>
        </div>

        {/* Форма обратной связи */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">{t('form.title')}</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">{t('form.name')}</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">{t('form.email')}</label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">{t('form.message')}</label>
              <textarea
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              {t('form.submit')}
            </button>
          </form>
        </div>
      </div>

      {/* Google Maps */}
      <div className="mt-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.0437967840584!2d76.85862731544775!3d43.25982797913591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388369a3a0f6a705%3A0x45e5a87c5b0f5b2a!2z0YPQuy4g0JHQtdC60LzQsNGF0LDQvdC-0LLQsCwg0JDQu9C80LDRgtGL!5e0!3m2!1sru!2skz!4v1620000000000!5m2!1sru!2skz"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        />
      </div>
    </div>
  );
}
