'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/lib/auth-context'
import LanguageSwitcher from './language-switcher'

export default function Header() {
  const { user } = useAuth()

  return (
    <header className="bg-blue-900 text-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-yellow-500">Trinity Group</Link>
          
          <div className="flex items-center space-x-6">
            <div className="space-x-4">
              <Link href="/" className="text-white hover:text-yellow-500">Главная</Link>
              <Link href="/tracking" className="text-white hover:text-yellow-500">Отслеживание груза</Link>
              <Link href="/order" className="text-white hover:text-yellow-500">Рассчитать стоимость</Link>
              <Link href="/contacts" className="text-white hover:text-yellow-500">Контакты</Link>
            </div>

            <LanguageSwitcher />
            
            {user ? (
              <>
                <Link href="/orders" className="text-white hover:text-yellow-500">Мои заказы</Link>
                <Button asChild variant="secondary" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900">
                  <Link href="/profile">Личный кабинет</Link>
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
