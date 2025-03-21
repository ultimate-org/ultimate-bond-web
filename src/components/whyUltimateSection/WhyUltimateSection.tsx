"use client"
import React from 'react'
import {  montserratBold} from '@/fonts/fonts'
import Image from 'next/image'
import styles from "./WhyUltimate.module.css"

function WhyUltimateSection() {
    return (
        <div className={`w-full p-8 ${styles.whyUltimateContainer}`}>
            <h1 className={`text-2xl md:text-5xl text-center ${montserratBold.className} ${styles.whyUltimateText}`}>How we are different</h1>
            <div className='w-[60%] mx-auto h-[30rem] relative'>
                <Image src="/images/howwearedifferent/web.png" alt="how we are different" fill objectFit='contain'></Image>
            </div>
            </div>
  )
}

export default WhyUltimateSection



