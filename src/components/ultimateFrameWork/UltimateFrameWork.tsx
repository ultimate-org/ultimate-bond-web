import React from 'react'
import { shadowsIntoLight } from '@/fonts/fonts'
import Image from 'next/image'

function UltimateFrameWork() {
  return (
      <div className='w-full p-8 justify-center items-center'>
          <div className='w-[60%] m-auto'>
              <h1 className={`text-6xl text-center ${shadowsIntoLight.className} font-bold`}>But, we are changing this with Ulti-Mate framework</h1>
          </div>
          <div className='w-full relative h-96'>
              <Image src={"/framework/Ultimate_Framework2.jpg"} className='w-full object-contain h-auto' alt='Ultimate framework' fill={true}></Image>
          </div>
    </div>
  )
}

export default UltimateFrameWork