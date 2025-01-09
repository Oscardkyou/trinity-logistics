'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Statistic {
  label: string;
  value: number;
  suffix: string;
  duration: number;
}

const statistics: Statistic[] = [
  { label: 'Успешных доставок', value: 15000, suffix: '+', duration: 2 },
  { label: 'Довольных клиентов', value: 1000, suffix: '+', duration: 2 },
  { label: 'Стран доставки', value: 25, suffix: '', duration: 1.5 },
  { label: 'Лет опыта', value: 10, suffix: '+', duration: 1 }
];

const advantages = [
  {
    icon: '🌍',
    title: 'Международная сеть',
    description: 'Надежные партнеры в ключевых точках маршрутов для быстрой и безопасной доставки'
  },
  {
    icon: '🚛',
    title: 'Современный автопарк',
    description: 'Собственный парк современных грузовых автомобилей, соответствующих экологическим стандартам'
  },
  {
    icon: '📱',
    title: 'Онлайн отслеживание',
    description: 'Отслеживание груза в реальном времени через мобильное приложение или веб-сайт'
  },
  {
    icon: '📦',
    title: 'Любые грузы',
    description: 'Перевозка всех типов грузов: от обычных до негабаритных и требующих специальных условий'
  },
  {
    icon: '🏆',
    title: 'Гарантия качества',
    description: 'Страхование грузов и гарантия сохранности на всем пути следования'
  },
  {
    icon: '💰',
    title: 'Выгодные цены',
    description: 'Конкурентные цены и гибкая система скидок для постоянных клиентов'
  }
];

function Counter({ value, suffix, duration }: Statistic) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(value * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [value, duration]);

  return (
    <span className="text-4xl font-bold text-blue-900">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Advantages() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-16">
          Почему выбирают Trinity Group
        </h2>

        {/* Статистика */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <Counter {...stat} />
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Преимущества */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{advantage.icon}</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {advantage.title}
              </h3>
              <p className="text-gray-600">{advantage.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Карта маршрутов будет добавлена позже */}
      </div>
    </div>
  );
}
