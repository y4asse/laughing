import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <nav className="p-3 text-center md:text-2xl md:pt-10">
      <div>
        <h1 className="font-bold">絶対に笑ってはいけないサイト</h1>
        <p className="mt-2 text-base">
          ※このサイトの詳細について知りたい方は
          <Link className="underline" href={'/about'}>
            こちら
          </Link>
          をご覧ください
        </p>
        <p className="mt-2 text-base">
          ※このサイトでは笑顔の感知にカメラを使用します。カメラの使用を許可し、顔が映るようにしてください
        </p>
      </div>
    </nav>
  )
}

export default Header
