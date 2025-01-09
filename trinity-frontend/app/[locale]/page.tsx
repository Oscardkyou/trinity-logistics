import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('home');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="hero-section text-center">
          <h1 className="text-4xl font-bold mb-4">{t('hero.title')}</h1>
          <p className="text-xl mb-8">{t('hero.subtitle')}</p>
        </div>
      </div>
    </main>
  );
}
