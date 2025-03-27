"use client"
import React from 'react'
import {StatCard} from "@/index"
import { motion } from "framer-motion"
import { montserratExtraBold, montserratRegular, DeliciousHandrawn } from "@/fonts/fonts"
import styles from './Statistics.module.css'; 

function Statistics() {
    const stats = [
        {
            id: 1,
            stat: "70%",
            title: "of parents feel they're not doing enough to support their child's emotional development.",
        },
        {
            id: 2,
            stat: "59%",
            title: "of parents say their children are too distracted to engage in family interactions.",
        },
        
        {
            id: 3,
            stat: "50%",
            title: "of children are addicted to their mobile devices",
        },
        {
            id: 4,
            stat: "40%",
            title: "of children in India struggle with anxiety, stress, depression.",
        },
        {
            id: 5,
            stat: "7%",
            title:"increase in suicide rates in the age group of 18-30"
        }
    ]
    return (
      <div className={`w-full ${styles.statisticsContainer} p-[5rem]`}>
      <div className={`flex flex-col h-auto md:flex-row  md:justify-evenly`}>
          <motion.div className='md:mr-8 mb-8 md:w-[30%]'>
              <h1 className={`mb-4 text-2xl md:text-5xl ${montserratExtraBold.className} ${styles.statisticsDescription}`}>Alarming trends!!!</h1>
              <p className={`${montserratRegular.className} text-base text-white ${styles.statisticsDescription}`}>These are concerning trends. Parents of children over 12-13 years old have come to realize they could have done a better job in their parenting. They&apos;ve also discovered that it becomes challenging to influence their child&apos;s EQ, AQ, SQ, and CQ once they reach their teenage years.</p>
          </motion.div>
          <div className='grid md:grid-cols-2 gap-8 md:w-[60%]'>
              {
                  stats.map((stat) => {
                      return <StatCard key={stat.id} stat={stat.stat} title={stat.title} ></StatCard>
                  })
              }
          </div>
    </div>
          <div className='mt-[3rem]'>
                <p className={`${DeliciousHandrawn.className} text-2xl md:text-4xl text-center text-white ${styles.statisticsDescription}`}>But, everybody{"\u00A0\u00A0"}thinks{"\u00A0\u00A0"}they will not be / aren’t part of such statistics. Then, who is?</p>
            </div>
            </div>
  )
}

export default Statistics