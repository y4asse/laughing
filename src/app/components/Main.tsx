'use client'

import React, { useEffect, useRef, useState } from 'react'
import * as faceapi from 'face-api.js'
import { isMobile } from 'react-device-detect'
import Finish from './Finish'

const Main = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [error, setError] = useState<string | null>(null)
  const [happy, setHappy] = useState<number | null>(null)
  const [laugh, setLaugh] = useState(false)
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
        if (val > 0.9) {
          setLaugh(true)
        }
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
  if (isMobile) {
    return (
      <div className="p-3 text-center">
        <p className="text-red-500 font-bold" role="error message">
          このサイトはPCでのみご利用いただけます。
        </p>
      </div>
    )
  }
  if (error) {
    return (
      <div className="px-3 justify-center items-center flex flex-col h-screen gap-1 text-center">
        <p role="error message">カメラにアクセスできません。</p>
        <p role="error message">カメラをオンにしてからもう一度やり直してください。</p>
      </div>
    )
  }
  return (
    <div className="min-h-screen px-3">
      {laugh ? (
        <Finish />
      ) : (
        <div>
          <iframe
            className="w-full max-w-[800px] mx-auto aspect-[16/9]"
            src="https://www.youtube.com/embed/GoLpSJ8Bfpc"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={false}
          ></iframe>
          <div>
            <div className="mt-3">
              <div className="max-w-[800px] mx-auto border bg-gray-100 h-10">
                {happy && (
                  <div
                    style={{ width: `${Math.round(happy * 100)}%` }}
                    className={`bg-green-500 h-10 duration-500 transition-all`}
                  />
                )}
              </div>
              <div className="text-4xl text-center mt-1">
                {happy ? `笑い度 ${Math.round(happy * 100)} %` : '顔が検出できません'}
              </div>
            </div>
            <video hidden={true} ref={videoRef} autoPlay={true} className="mx-auto max-w-[300px] w-full" />
          </div>
        </div>
      )}
    </div>
  )
}

export default Main
