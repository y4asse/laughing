'use client'

import React, { useEffect, useRef, useState } from 'react'
import * as faceapi from 'face-api.js'

const Main = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [error, setError] = useState<string | null>(null)
  const [happy, setHappy] = useState<number | null>(null)
  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = '/models'
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL)
      await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL)
      await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL)
    }

    const startVideo = () => {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream
          }
        })
        .catch((err) => {
          console.error('Error accessing media devices.', err)
          setError('カメラにアクセスできません。カメラをオンにしてからもう一度やり直してください。')
        })
    }

    loadModels().then(startVideo)

    let intervalId: NodeJS.Timeout
    setInterval(async () => {
      if (!videoRef.current) return
      const detections = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceExpressions()

      const resizedDetections = faceapi.resizeResults(detections, { width: 500, height: 400 })
      if (resizedDetections.length > 0) {
        const val = resizedDetections[0].expressions.happy
        setHappy(val)
      } else {
        setHappy(null)
      }
    }, 500)

    //クリーンアップ関数
    return () => {
      clearInterval(intervalId)
    }
  }, [])
  if (error) {
    return (
      <div className="px-3 justify-center items-center flex flex-col h-screen gap-1 text-center">
        <p role="error message">カメラにアクセスできません。</p>
        <p role="error message">カメラをオンにしてからもう一度やり直してください。</p>
      </div>
    )
  }
  return (
    <div className="h-screen px-3 bg-gray-100 pt-10">
      <video ref={videoRef} autoPlay={true} className="mx-auto max-w-[500px] w-full" />
      <div className="text-4xl text-center mt-5">{happy ? `${Math.round(happy * 100)} %` : '顔が検出できません'}</div>
      {happy && (
        <div className="max-w-[500px] mx-auto border border-green-500">
          <div
            style={{ width: `${Math.round(happy * 100)}%` }}
            className={`bg-green-500 h-10 duration-300 transition-all`}
          />
        </div>
      )}
    </div>
  )
}

export default Main
