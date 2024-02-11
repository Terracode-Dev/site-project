import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const str = `${inter.className} p-0`;

export const metadata: Metadata = {
  title: 'Terracode .',
  description: 'Developed By Terracode Inc',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={str}>{children}</body>
    </html>
  )
}
