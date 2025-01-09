import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { AuthProvider } from '@/lib/auth-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Trinity Group - International Logistics',
  description: 'Professional logistics solutions for your business',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
