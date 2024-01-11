import React from 'react'
import Footer from '../components/Footer'

const Page = () => {
  return (
    <>
      <div className="max-w-[1000px] mx-auto py-10 text-xl px-5">
        <h1 className="text-2xl font-bold">このサイトについて</h1>
        <p className="mt-2">
          「絶対に笑ってはいけないサイト」へようこそ！当サイトは、皆さんの日常に笑いと楽しさを提供することを目指しています。ここでは、ユーモア溢れるコンテンツを通じて、皆さんが日々のストレスを忘れ、心から笑う瞬間を楽しむことができます。
        </p>
        <h1 className="text-2xl font-bold mt-10">カメラの使用について</h1>
        <p className="mt-2">
          当サイトでは、笑顔を検知するためにカメラを使用しています。顔がはっきりと映るようにしてください。
        </p>
        <p>
          ただし笑顔の情報のみ使用するので安心してご利用下さい。また、このサイトはオープンソースで開発されているので、安心してご利用いただけます。
        </p>
        <h1 className="text-2xl font-bold mt-10">プライバシーへの配慮</h1>
        <p className="mt-2">
          当サイトでは、ユーザーのプライバシーを最優先に考えています。収集したデータは、サイトの改善とユーザー体験の向上のみを目的として使用され、それ以外の目的での使用や外部への共有は行いません。
        </p>
        <h1 className="text-2xl font-bold mt-10">お問い合わせ</h1>
        <p className="mt-2">
          もしご質問やご不明点があれば、お気軽にお問い合わせください。皆さんが安心して楽しめる環境を提供することが、私たちの最大の願いです。
          皆さんの笑顔を心からお待ちしています！
          <a className="underline" href="https://twitter.com/y4isse">
            開発者
          </a>
        </p>
      </div>
      <Footer />
    </>
  )
}

export default Page
