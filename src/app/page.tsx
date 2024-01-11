'use client'

import dynamic from 'next/dynamic'
import Header from './components/Header'
import Footer from './components/Footer'
const Main = dynamic(() => import('@/app/components/Main'), { ssr: false })

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}
