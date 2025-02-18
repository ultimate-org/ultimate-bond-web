"use client"

import React from 'react'
import { motion } from "framer-motion"
import {fjallaOne} from "@/fonts/fonts"
type prop = {
    stat: string,
    title: string,
}

function StatCard({stat, title}:prop) {
  return (
      <motion.div initial={{translateX:-100, opacity:0}} whileInView={{translateX:0, opacity:1}} viewport={{amount:0.7, once:true}} transition={{duration:0.7}}>
          <h1 className={`text-5xl text-orange-500 mb-4 ${fjallaOne.className}`}>{stat}</h1>
          <h2 className={`text-lg ${fjallaOne.className}`}>{title}</h2>
          
      </motion.div>
   
  )
}

export default StatCard 