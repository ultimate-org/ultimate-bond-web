"use client"

import React from 'react'
import { motion } from "framer-motion"
import { montserratBold, montserratRegular } from "@/fonts/fonts"
import styles from "./Statistics.module.css"

type prop = {
    stat: string,
    title: string,
}

function StatCard({stat, title}:prop) {
  return (
      <motion.div initial={{translateX:-100, opacity:0}} whileInView={{translateX:0, opacity:1}} viewport={{amount:0.7, once:true}} transition={{duration:0.7}}>
          <h3 className={`text-2xl md:text-5xl text-[#F15A29] mb-4 ${montserratBold.className}`}>{stat}</h3>
          <h3 className={`text-base ${montserratRegular.className} ${styles.statisticsDescription}`}>{title}</h3>
          
      </motion.div>
   
  )
}

export default StatCard 