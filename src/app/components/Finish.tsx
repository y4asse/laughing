import { FaXTwitter } from 'react-icons/fa6'

const Finish = () => {
  const text = '「絶対に笑ってはいけないサイト」で笑ってしまいました\n\n'
  const url = 'https://laughing.pages.dev'
  const hashtags = '絶対に笑ってはいけないサイト'
  return (
    <div className="mx-auto max-w-[1000px]">
      <div>
        <p className="text-5xl text-center mt-10">敗北！！！</p>
        <div className="flex items-center justify-center mt-10 text-5xl">
          <a
            href={`https://twitter.com/share?text=${encodeURIComponent(text)}&url=${url}&hashtags=${hashtags}`}
            target="_blank"
            className="flex items-center justify-center bg-gray-900 text-white rounded-full px-5 py-3"
          >
            <FaXTwitter className="inline" />
            で共有
          </a>
        </div>
      </div>
    </div>
  )
}

export default Finish
