'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { news } from '@/lib/api'

interface NewsItem {
  id: string;
  title: string;
  content: string;
  image_url: string;
}

export default function NewsSection() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const limit = 10

  useEffect(() => {
    fetchNews()
  }, [page, search])

  const fetchNews = async () => {
    try {
      setLoading(true)
      const skip = (page - 1) * limit
      const data = await news.getAll({ skip, limit, search })
      setNewsItems(data)
      setError(null)
    } catch (err) {
      setError('Failed to load news')
      console.error('Error fetching news:', err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="flex justify-center p-4">Loading...</div>
  }

  if (error) {
    return <div className="text-red-500 p-4">{error}</div>
  }

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search news..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="space-y-4">
        {newsItems.map(item => (
          <div key={item.id} className="border p-4 rounded">
            {item.image_url && (
              <img 
                src={item.image_url} 
                alt={item.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
            )}
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between">
        <Button 
          variant="outline" 
          onClick={() => setPage(p => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          Previous
        </Button>
        <Button 
          variant="outline" 
          onClick={() => setPage(p => p + 1)}
          disabled={newsItems.length < limit}
        >
          Next
        </Button>
      </div>
    </div>
  )
}
