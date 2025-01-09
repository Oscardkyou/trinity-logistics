'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface NewsItem {
  id: string;
  title: string;
  content: string;
  image_url?: string;
}

const placeholderNews: NewsItem[] = [
  {
    id: '1',
    title: 'Обновление системы новостей',
    content: 'В настоящее время мы работаем над улучшением нашей новостной системы. Скоро здесь появятся актуальные новости о наших услугах и специальных предложениях.',
  },
  {
    id: '2',
    title: 'Следите за обновлениями',
    content: 'Мы постоянно работаем над улучшением качества наших услуг. В ближайшее время здесь появится информация о новых маршрутах и специальных предложениях для наших клиентов.',
  }
]

export default function NewsSection() {
  const [search, setSearch] = useState('')
  
  const filteredNews = placeholderNews.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.content.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Поиск новостей..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="space-y-4">
        {filteredNews.map(item => (
          <div key={item.id} className="border p-4 rounded bg-gray-50">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.content}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between">
        <Button 
          variant="outline" 
          disabled={true}
        >
          Предыдущая
        </Button>
        <Button 
          variant="outline" 
          disabled={true}
        >
          Следующая
        </Button>
      </div>
    </div>
  )
}
