import React from 'react'
import { text } from 'stream/consumers'

const ErrorComponent = ({ text }: { text: string }) => {
  return (
    <div>
      <h1 className="text-center text-3xl">{text}</h1>
    </div>
  )
}

export default ErrorComponent
