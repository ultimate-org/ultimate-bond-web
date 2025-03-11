"use client"
import React from 'react'
import { motion } from "framer-motion"
import {montserratExtraBold,  montserratBold, montserratRegular } from "@/fonts/fonts"
import styles from "./LifeChanging.module.css"

function LifeChanging() {
    const lifeChangingValues = [
        {
            id: 1,
            title: "Bridge the gap",
            description: "Relax your body and mind with custom meditations,nature and sleep music.",
            image:""
        },
        {
            id: 2,
            title: "Practical Application",
            description: "Relax your body and mind with custom meditations,nature and sleep music.",
            image:""
        },
        {
            id: 3,
            title: "Parenting Roadmap",
            description: "Relax your body and mind with custom meditations,nature and sleep music.",
            image:""
        }
    ]
  return (
      <div className={`${styles.lifeChangingContainer} flex flex-col justify-center py-8 `}>
          <div className='w-[80%] md:w-[60%] m-auto mt-4'>
              <h1 className={`text-2xl md:text-5xl text-white text-center ${montserratExtraBold.className}`}>Ultimate - a life-changing experience</h1>
              </div>
          <div className='flex justify-evenly items-center flex-wrap my-2 md:my-8'>
              {lifeChangingValues.map((lifeChanging) => {
                  return <motion.div initial={{opacity:0.2, scale:0.2}} whileInView={{opacity:1,scale:1}} transition={{duration:0.4}} viewport={{amount:0.8,once:true}} className=' p-[2rem] md:p-[5rem] md:w-2/4 lg:w-1/3' key={lifeChanging.id}>
                      <div>
                          <h1 className={`text-center text-white text-2xl mb-4 ${montserratBold.className}`}>{lifeChanging.title}</h1>
                          <p className={`text-center text-white text-base ${montserratRegular.className}`}>{lifeChanging.description}</p>
                          </div>
              </motion.div>
              })}
          </div>
    </div>
  )
}

export default LifeChanging



