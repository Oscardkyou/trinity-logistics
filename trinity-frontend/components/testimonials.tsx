'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface Testimonial {
  id: number;
  name: string;
  company: string;
  image: string;
  rating: number;
  text: string;
  date: string;
}

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Алексей Петров",
    company: "Tech Solutions Ltd",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
    text: "Работаем с Trinity Group уже более года. Очень довольны качеством сервиса и скоростью доставки. Особенно ценим их профессиональный подход к решению нестандартных задач.",
    date: "2024-01-02"
  },
  {
    id: 2,
    name: "Мария Иванова",
    company: "Global Trade Co",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
    text: "Надежный партнер в сфере международных перевозок. Груз всегда доставляется вовремя и в отличном состоянии. Рекомендую!",
    date: "2024-01-01"
  },
  {
    id: 3,
    name: "Бакыт Асанов",
    company: "Silk Road Trading",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 4,
    text: "Отличная компания для работы с Китаем. Все документы оформляются быстро, груз проходит таможню без задержек.",
    date: "2023-12-28"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialData.length) % testimonialData.length);
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
          Отзывы наших клиентов
        </h2>

        {/* Карусель отзывов */}
        {!showAll && (
          <div className="relative">
            <div className="flex justify-center items-center">
              <button
                onClick={handlePrev}
                className="absolute left-0 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100"
              >
                ←
              </button>
              
              <div className="bg-white rounded-xl shadow-lg p-8 mx-12 max-w-2xl">
                <div className="flex items-center mb-6">
                  <Image
                    src={testimonialData[activeIndex].image}
                    alt={testimonialData[activeIndex].name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg">{testimonialData[activeIndex].name}</h3>
                    <p className="text-gray-600">{testimonialData[activeIndex].company}</p>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(testimonialData[activeIndex].rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic">{testimonialData[activeIndex].text}</p>
                <p className="text-gray-500 text-sm mt-4">{testimonialData[activeIndex].date}</p>
              </div>

              <button
                onClick={handleNext}
                className="absolute right-0 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100"
              >
                →
              </button>
            </div>
          </div>
        )}

        {/* Сетка всех отзывов */}
        {showAll && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialData.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700">{testimonial.text}</p>
                <p className="text-gray-500 text-sm mt-4">{testimonial.date}</p>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-8">
          <Button
            variant="outline"
            onClick={() => setShowAll(!showAll)}
            className="mx-auto"
          >
            {showAll ? 'Показать карусель' : 'Показать все отзывы'}
          </Button>
        </div>
      </div>
    </div>
  )
}
