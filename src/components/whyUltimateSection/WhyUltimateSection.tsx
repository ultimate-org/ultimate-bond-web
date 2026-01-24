"use client"
import React from 'react'
import {  montserratBold} from '@/fonts/fonts'
import Image from 'next/image'
import styles from "./WhyUltimate.module.css"

function WhyUltimateSection() {
    return (
        <div className={`w-full ${styles.whyUltimateContainer}`}>
            {/* <h1 className={`text-2xl md:text-5xl text-center ${montserratBold.className} ${styles.whyUltimateText}`}>How <span className={`${styles.weText} font-bold`}>we</span> are different</h1> */}
            <div className='w-[100%] md:w-[100%] mt-8 mx-auto h-[20rem] md:h-[45rem] relative'>
                <Image src="/images/howwearedifferent/web.png" alt="how we are different" fill objectFit='fill'></Image>
            </div>
            </div>
  )
}

export default WhyUltimateSection



