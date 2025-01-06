'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function TrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState('')
  const [trackingResult, setTrackingResult] = useState<null | {
    status: string
    location: string
    lastUpdate: string
  }>(null)

  const handleTracking = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulated tracking result
    setTrackingResult({
      status: 'В пути',
      location: 'Алматы, Казахстан',
      lastUpdate: new Date().toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-900">Отследить груз</h1>
      
      <div className="max-w-md mx-auto">
        <form onSubmit={handleTracking} className="space-y-4 bg-blue-100 p-6 rounded-lg shadow-lg">
          <div>
            <Label htmlFor="tracking" className="text-blue-900">Номер отслеживания</Label>
            <Input
              id="tracking"
              type="text"
              placeholder="Введите номер отслеживания"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              className="w-full border-blue-300 focus:border-blue-500"
            />
          </div>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            Отследить
          </Button>
        </form>

        {trackingResult && (
          <div className="mt-8 p-6 bg-white rounded-lg shadow-lg border border-blue-200">
            <h2 className="text-xl font-semibold mb-4 text-blue-900">Результаты отслеживания</h2>
            <div className="space-y-3">
              <p>
                <span className="font-medium text-blue-800">Статус:</span>{' '}
                <span className="text-blue-600">{trackingResult.status}</span>
              </p>
              <p>
                <span className="font-medium text-blue-800">Местоположение:</span>{' '}
                {trackingResult.location}
              </p>
              <p>
                <span className="font-medium text-blue-800">Последнее обновление:</span>{' '}
                {trackingResult.lastUpdate}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
