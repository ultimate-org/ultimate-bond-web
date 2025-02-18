"use client"
import React from 'react'
import { philosopher } from '@/fonts/fonts'
import { motion } from "framer-motion"
import { comicNeue } from '@/fonts/fonts'

const transition = {
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  }

function Main() {
    const pointsArr = [
        "✔️ Emotional regulation in tough situations?",
"✔️ Conflict resolution & collaboration in relationships?",
"✔️ Financial literacy to make smart life decisions?",
"✔️ Networking & leadership to unlock new opportunities?",
"✔️ Resilience to handle setbacks?"
    ]
  return (
      <div className='justify-center items-center py-[8rem]  bg-slate-50  '>
          <h1 className={`text-center text-6xl ${philosopher.className} text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500`}>The Future Starts Now</h1>
          <h2 className={`text-center text-2xl ${philosopher.className} text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500`}>Prepare Your Child for the Unknown</h2>

          <div className='justify-center mt-8 '>
              <div>
              <p className='text-center text-xl'>Traditional education prepares children for <span className='underline underline-offset-2'>Tests, Degrees, and Careers</span></p>
              <p className='text-center mt-4 text-2xl'>But does it prepare them for:</p>
              </div>
              {/* <p className='text-center text-xl'>Traditional education prepares children for <span className='underline underline-offset-2'>Tests, Degrees, and Careers</span> <br /><span className=' mt-4 text-2xl'>But does it prepare them for:</span></p> */}
              <div className='mt-8'>
              {
                  pointsArr.map((point,index) => {
                      return <motion.p key={point} className={`text-center text-xl my-1 ${comicNeue.className}`} initial={{scale:0, opacity:0}} whileInView={{scale:1, opacity:1}} viewport={{amount:1, once:true}} transition={{
                        ...transition,
                        delay: transition.delay + index * 0.5, // Add delay based on index
                      }} >{ point}</motion.p>
                  })
                  }
                  </div>
          </div>
          
    </div>
  )
}

export default Main