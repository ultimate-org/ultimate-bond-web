"use client"
import React from 'react'
import { motion } from "framer-motion"
import {  montserratBold, montserratRegular, DeliciousHandrawn } from "@/fonts/fonts"
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
            description: "Philosophy surrounds us, but practice makes progress. 1800+ hands on Parent-Child Life skill enhancing practical activities.",
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
      <div className={`${styles.lifeChangingContainer} flex flex-col justify-center py-[4rem] `}>
          <div className='w-[80%] md:w-[60%] m-auto mt-4'>
              <h1 className={`text-2xl md:text-5xl text-white text-center ${montserratBold.className} ${styles.lifeChangingText}`}>How we have solved it!</h1>
              </div>
          <div className='flex flex-col md:flex-row my-8 md:my-[3rem] w-[80%] mx-auto'>
              {lifeChangingValues.map((lifeChanging) => {
                  return <motion.div initial={{opacity:0.2, scale:0.2}} whileInView={{opacity:1,scale:1}} transition={{duration:0.4}} viewport={{amount:0.8,once:true}} className=' p-[1rem] w-[90%] md:w-[30%] mx-auto '  key={lifeChanging.id}>
                      <div className='w-[8rem] mx-auto h-[8rem] mb-4 relative rounded-lg overflow-hidden'>
                          <Image alt={lifeChanging.title} src={lifeChanging.image} fill objectFit='cover'></Image>
                        </div>
                      <div >
                          <h1 className={`text-center text-xl mb-4 ${montserratBold.className} text-orange-600`}>{lifeChanging.title}</h1>
                          <p className={`text-center text-white text-sm ${montserratRegular.className} ${styles.lifeChangingText}`}>{lifeChanging.description}</p>
                      </div>
                      <div>
                      </div>
              </motion.div>
              })}
          </div>
              <h2 className={`${DeliciousHandrawn.className} text-xl text-center text-white md:text-4xl`}>Just follow us, we assure you 100% results..!!</h2>
    </div>
  )
}

export default LifeChanging



