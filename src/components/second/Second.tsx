import React from 'react'
import {DeliciousHandrawn} from "@/fonts/fonts"
function Second() {
   
  return (
      <div className='h-screen justify-center items-center pt-8  bg-stone-900  '>
          <div className='mt-8'>
              {/* <p className='text-center'>Research proves that IQ alone isn’t enough—Success = IQ + EQ + SQ + CQ + AQ.</p> */}
              <p className={`text-center text-white text-2xl`}>So, are we raising <span className={`${DeliciousHandrawn.className} text-4xl`}>happy, resilient, and emotionally</span> strong children,</p>
              <p  className='text-center text-white text-4xl'> or just pushing them toward grades?</p>
          </div>
    </div>
  )
}

export default Second