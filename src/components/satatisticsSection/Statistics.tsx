"use client"
import React from 'react'
import {StatCard} from "@/index"
import { motion } from "framer-motion"
import {  montserratBold, montserratRegular } from "@/fonts/fonts"
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
            stat: "40%",
            title: "of children in India struggle with anxiety, stress, depression.",
        },
        {
            id: 3,
            stat: "50%",
            title: "of children are addicted to their mobile devices",
        },
        {
            id: 4,
            stat: "59%",
            title: "of parents say their children are too distracted to engage in family interactions.",
        },
        {
            id: 5,
            stat: "34%",
            title:"Suicides in the age group of 18-30"
        }
    ]
  return (
      <div className={`flex flex-col h-auto md:flex-row w-full ${styles.statisticsContainer} p-[5rem] md:justify-evenly`}>
          <motion.div className='md:mr-8 mb-8 md:w-[30%]'>
              <h1 className={`mb-4 text-2xl md:text-5xl ${montserratBold.className}`}>General trend seen around..!!!</h1>
              <p className={`${montserratRegular.className} text-base`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur error porro, quae minima natus eum aperiam possimus inventore. Iusto at nihil architecto, totam ut iure excepturi! Sint explicabo numquam magni.</p>
          </motion.div>
          <div className='grid md:grid-cols-2 gap-8 md:w-[60%]'>
              {
                  stats.map((stat) => {
                      return <StatCard key={stat.id} stat={stat.stat} title={stat.title} ></StatCard>
                  })
              }
          </div>
    </div>
  )
}

export default Statistics