'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Как рассчитывается стоимость перевозки?',
    answer: 'Стоимость перевозки зависит от нескольких факторов: расстояния, веса и объема груза, типа транспорта, срочности доставки. Для точного расчета воспользуйтесь нашим онлайн-калькулятором или свяжитесь с менеджером.',
    category: 'Цены'
  },
  {
    question: 'Какие документы нужны для международной перевозки?',
    answer: 'Для международной перевозки требуются: инвойс, упаковочный лист, CMR, сертификат происхождения товара, при необходимости - фитосанитарный сертификат и другие разрешительные документы в зависимости от типа груза.',
    category: 'Документы'
  },
  {
    question: 'Как отследить местоположение груза?',
    answer: 'Вы можете отследить груз через личный кабинет на нашем сайте или в мобильном приложении. Также мы отправляем SMS-уведомления о статусе доставки.',
    category: 'Отслеживание'
  },
  {
    question: 'Осуществляете ли вы страхование грузов?',
    answer: 'Да, мы предоставляем услуги по страхованию грузов. Стоимость страховки зависит от типа груза и его стоимости. Это дает дополнительную гарантию сохранности вашего груза.',
    category: 'Безопасность'
  },
  {
    question: 'Какие сроки доставки?',
    answer: 'Сроки доставки зависят от маршрута и типа транспорта. В среднем: автомобильные перевозки по СНГ - 3-7 дней, железнодорожные перевозки - 7-14 дней, доставка в Европу - 7-10 дней.',
    category: 'Сроки'
  },
  {
    question: 'Работаете ли вы с негабаритными грузами?',
    answer: 'Да, мы осуществляем перевозку негабаритных грузов. У нас есть специальный транспорт и все необходимые разрешения для таких перевозок.',
    category: 'Услуги'
  }
];

const categories = Array.from(new Set(faqData.map(item => item.category)));

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredFAQ = faqData.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
          Часто задаваемые вопросы
        </h2>

        {/* Поиск и фильтры */}
        <div className="mb-8 space-y-4">
          <input
            type="text"
            placeholder="Поиск по вопросам..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full ${
                !selectedCategory
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Все
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Список вопросов */}
        <div className="space-y-4">
          {filteredFAQ.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50"
              >
                <span className="font-medium text-gray-900">{item.question}</span>
                <span className={`transform transition-transform ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}>
                  ▼
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-4 bg-gray-50 border-t">
                      <p className="text-gray-700">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Форма для нового вопроса */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Не нашли ответ на свой вопрос?</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ваш вопрос
              </label>
              <textarea
                rows={4}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Опишите ваш вопрос..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email для ответа
              </label>
              <input
                type="email"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="your@email.com"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Отправить вопрос
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
