// --------------------------------------------------------

"use client"
import React from 'react'
import { philosopher } from '@/fonts/fonts'
import { motion } from "framer-motion"
import { DeliciousHandrawn , montserratRegular, montserratBold} from "@/fonts/fonts"
import styles from "./Main.module.css"
import Image from 'next/image'


const transition = {
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  }

function Main() {
  const pointsArr = [
    { normal: "Emotional regulation", bold: "in tough situations?" },
    { normal: "Conflict resolution & decision making", bold: "in relationships?" },
    { normal: "Financial literacy to make", bold: "smart life decisions?" },
    { normal: "Networking & leadership to", bold: "unlock new opportunities?" },
    { normal: "Resilience to", bold: "handle setbacks?" }
];
  return (
    <div className='justify-center items-center'>
          <div className='pt-[8rem] pb-[7rem] bg-gradient-to-tr from-[#020e25] via-[#04122e] to-[#004E6B]'>
        <div className=' pt-[7rem] pb-[10rem] relative'>
        <h1 className={`text-center text-8xl ${philosopher.className} ${styles.title}`}>The Future Starts Now!</h1>
          <div className='flex flex-row mt-8 w-[90%] mx-auto'>
          <div className='relative mx-auto'>
          <h2 className={`text-center text-4xl ${philosopher.className} text-transparent bg-clip-text bg-[#06A5D8] `}>Prepare Your Child for the <div className='w-auto inline-block'><h2 className={`text-center text-4xl ${philosopher.className} text-transparent bg-clip-text bg-[#06A5D8]`}>Unknown</h2><div className='w-full h-3  relative'>
            <Image src="/images/stroke.png" alt="stroke" fill objectFit='cover'></Image>
            </div></div></h2>
            </div>
            </div>
        </div>
          <div className='justify-center my-8 bg-[#020e25] pt-[6rem]'>
              <div>
            <p className={`text-center text-2xl text-white ${montserratRegular.className} ${styles.mainTextColor}`}>Traditional education prepares children for <span className={`underline underline-offset-2 ${styles.mainTextColor}`}>Tests, Grades, Degrees</span></p>
            <p className={`text-center mt-[3rem] text-5xl text-white  ${montserratBold.className} ${styles.mainTextColor}`}>But does it prepare them for...</p>
              </div>
          <div className='my-[4rem] flex flex-col md:flex-row justify-center bg-[#020e25] items-center px-8'>
              {
                  pointsArr.map((point,index) => {
                      return <motion.div key={index} className={`border border-1 mb-2 w-[80%] md:w-[18%] h-[8rem] mx-1 rounded-md flex items-center justify-center bg-[#CCDBEE] p-4`} initial={{scale:0, opacity:0}} whileInView={{scale:1, opacity:1}} viewport={{amount:1, once:true}} transition={{
                        ...transition,
                        delay:  index == 0 ?  0 : transition.delay + index * 0.5 , // Add delay based on index
                      }} >
                        <p className={`text-lg my-1 text-[#020e25] ${montserratBold.className} text-center`}>
                {point.normal} <strong>{point.bold}</strong>
            </p>
                      </motion.div>
                  })
                  }
                  </div>
       <div className='mt-6 bg-[#020e25]'>
                    <p className={`text-center text-white text-xl md:text-4xl ${DeliciousHandrawn.className} ${styles.mainTextColor}`}>So, are we raising <span className={`${DeliciousHandrawn.className} text-4xl`}>happy, resilient, and emotionally</span> strong children?</p>
        </div>
          </div>
      
        </div>
    </div>
  )
}

export default Main


