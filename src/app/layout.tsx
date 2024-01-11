import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '絶対に笑ってはいけないサイト',
  description: 'このサイトは、カメラを用いて笑いを検知します。サイト内にある動画を見て笑わないように頑張りましょう。',
  openGraph: {
    images: 'https://dont-laugh.pages.dev//imgs/warai.png'
  },
  twitter: {
    title: '絶対に笑ってはいけないサイト',
    images: 'https://dont-laugh.pages.dev/imgs/warai.png',
    card: 'summary'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
