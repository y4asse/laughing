'use client'

import dynamic from 'next/dynamic'
import Header from './components/Header'
const Main = dynamic(() => import('@/app/components/Main'), { ssr: false })

export default function Home() {
  return (
    <>
      <Header />
      <Main />
    </>
  )
}
