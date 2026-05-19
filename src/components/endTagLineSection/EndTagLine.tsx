import { DeliciousHandrawn, montserratBold } from '@/fonts/fonts'
import React from 'react'
import styles from "./EndTagLine.module.css"

function EndTagLine() {
  return (
    <div className='justify-center items-center'>
    <div className='py-[2rem] bg-gradient-to-tr from-[#020e25] via-[#04122e] to-[#004E6B]'>
  <div className=' relative'> 
                      <h2 className={`text-center text-xl md:text-5xl ${montserratBold.className} text-white `}>Be the <span className={`${DeliciousHandrawn.className}  ${styles.tagLine}`}>Ulti Mate</span> Parent in your Child&apos;s growth</h2>
                  {/* <h1 className={`text-center text-xl md:text-5xl ${montserratBold.className} text-white `}>Be the <span className={`${DeliciousHandrawn.className}  ${styles.tagLine}`}>Ulti Mate</span> of your Child</h1> */}
                  </div></div></div>
  )
}

export default EndTagLine