'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/lib/auth-context'

export default function Header() {
  const { user } = useAuth()

  return (
    <header className="bg-blue-900 text-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-yellow-500">LogiTrans</Link>
          <div className="space-x-4">
            <Link href="/" className="text-white hover:text-yellow-500">Главная</Link>
            <Link href="/tracking" className="text-white hover:text-yellow-500">Отследить</Link>
            <Link href="/order" className="text-white hover:text-yellow-500">Заказать</Link>
            <Link href="/contacts" className="text-white hover:text-yellow-500">Контакты</Link>
            
            {user ? (
              <>
                <Link href="/todos" className="text-white hover:text-yellow-500">Задачи</Link>
                <Link href="/notes" className="text-white hover:text-yellow-500">Заметки</Link>
                <Button asChild variant="secondary" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900">
                  <Link href="/profile">Профиль</Link>
                </Button>
              </>
            ) : (
              <>
                <Button asChild variant="secondary" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900">
                  <Link href="/login">Войти</Link>
                </Button>
                <Button asChild variant="outline" className="text-yellow-500 border-yellow-500 hover:bg-yellow-500 hover:text-blue-900">
                  <Link href="/register">Регистрация</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}
