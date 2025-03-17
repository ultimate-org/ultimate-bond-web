"use client"
import React from 'react'
import { montserratExtraBold, montserratBold} from '@/fonts/fonts'
// import Image from 'next/image'
import styles from "./WhyUltimate.module.css"

function WhyUltimateSection() {
    return (
        <div className={`w-full p-8 ${styles.whyUltimateContainer}`}>
            <h1 className={`text-2xl md:text-5xl text-center ${montserratExtraBold.className} ${styles.whyUltimateText}`}>Why &quot;Ulti-Mate&quot;</h1>
      <div className='grid md:grid-cols-4 gap-4  mt-[4rem]'>
                <div className='grid md:grid-rows-3 col-span-1'>
                    <div className='my-8'>
                    <p className={`text-center ${montserratBold.className} ${styles.whyUltimateText}`}>Parents get readily well thought through Child&apos;s life skill development content on a periodic basis.</p>

                    </div>
                    <div className='my-8'>
                        <p className={`text-center ${montserratBold.className} ${styles.whyUltimateText}`}>Offline engaging activities reduces Screen time for child. No need for child to use mobile.</p>
                    </div>
                    <div className='my-8'>
                    <p className={`text-center ${montserratBold.className} ${styles.whyUltimateText}`}>Simplified content and very easy to follow. Catch up with past activities and stories</p>
                    </div>
                </div>
                {/* Image Container */}
                <div className='col-span-2'>
                <div className='w-full h-full bg-gray-300'>
                        <p className="text-center text-xl">Image or video goes here</p>
                    </div>
                </div>
                {/* Third Section */}
                <div className='grid md:grid-rows-3 col-span-1  '>
                <div className='my-8'>
                        <p className={`text-center ${montserratBold.className} ${styles.whyUltimateText}`}>KYC – “Know Your Child” through 100&apos;s of dialogue based activities.</p>
                    </div>
                    <div className='my-8'>
                    <p className={`text-center ${montserratBold.className} ${styles.whyUltimateText}`}>Very high probability of learning varied life skills by child while following UltiMate.</p>
                    </div>
                    <div className='my-8'>
                        <p className={`text-center ${montserratBold.className} ${styles.whyUltimateText}`}>No such parenting aid available at one place.</p>
                   </div>
                    </div>
            </div>
            </div>
  )
}

export default WhyUltimateSection



