"use client"
import React from 'react'
import { motion } from "framer-motion"
import {montserratExtraBold,  montserratBold, montserratRegular, DeliciousHandrawn } from "@/fonts/fonts"
import styles from "./LifeChanging.module.css"
import Image from 'next/image'

function LifeChanging() {
    const lifeChangingValues = [
        {
            id: 1,
            title: "Small Wins, Big Impact",
            description: "Daily 20-25 mins of child engagement. We have thought on your behalf so you can just spend quality time with your child.",
            image:"/images/lifechanging/small_wins_big_impact.jpg"
        },
        {
            id: 2,
            title: "No Theory Only Practical",
            description: "Philosophy is available everywhere, but you can achieve your goal only after practicing it. 1800+ hands on Parent-Child Life skill enhancing practical activities.",
             image:"/images/lifechanging/theory_practice.png"
        },
        {
            id: 3,
            title: "Parenting Roadmap",
            description: "Child age appropriate customised schedule. Practice Parenting Virtues every week. And many more aids.",
            image:"/images/lifechanging/road_map.png"
        }
    ]
  return (
      <div className={`${styles.lifeChangingContainer} flex flex-col justify-center py-8 `}>
          <div className='w-[80%] md:w-[60%] m-auto mt-4'>
              <h1 className={`text-2xl md:text-5xl text-white text-center ${montserratExtraBold.className} ${styles.lifeChangingText}`}>How we have solved it..!</h1>
              </div>
          <div className='flex justify-evenly items-center flex-wrap '>
              {lifeChangingValues.map((lifeChanging) => {
                  return <motion.div initial={{opacity:0.2, scale:0.2}} whileInView={{opacity:1,scale:1}} transition={{duration:0.4}} viewport={{amount:0.8,once:true}} className=' p-[2rem] md:p-[5rem] md:w-2/4 lg:w-1/3'  key={lifeChanging.id}>
                      <div className='w-[50%] mx-auto h-[8rem] mb-4 relative rounded-lg overflow-hidden'>
                          <Image alt={lifeChanging.title} src={lifeChanging.image} fill objectFit='cover'></Image>
                        </div>
                      <div className='h-20'>
                          <h1 className={`text-center text-white text-xl mb-4 ${montserratBold.className} ${styles.lifeChangingText}`}>{lifeChanging.title}</h1>
                          <p className={`text-center text-white text-sm ${montserratRegular.className} ${styles.lifeChangingText}`}>{lifeChanging.description}</p>
                      </div>
                      <div>
                      </div>
              </motion.div>
              })}
              <h2 className={`${DeliciousHandrawn.className} text-center text-white text-4xl`}>Just follow us, we assure you 100% results..!!</h2>
          </div>
    </div>
  )
}

export default LifeChanging



