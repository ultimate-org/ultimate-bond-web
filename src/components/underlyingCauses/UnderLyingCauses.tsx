import React from 'react'
import styles from './UnderLyingCauses.module.css'; 
import { montserratBold, montserratRegular, DeliciousHandrawn} from "@/fonts/fonts"

 

function UnderLyingCauses() {
    const underlyingCauses = [
        {
            id: 1,
            title: "Nuclear Families",
            description: "Often lead to limited social interactions."
        },
        {
            id: 2,
            title: "Quantity Vs Quality time",
            description: "Absence of meaningful interactions."
        },
        {
            id: 3,
            title: "Transactional Parenting",
            description: "Impacts emotional development and bonding."
        },
        {
            id: 4,
            title: "Excessive screen time",
            description: "Distracts parents and children from engaging in real-life interactions."
        }
    ]
  return (
        <div className={`${styles.underlyingCausesContainer}`}>
          <h1 className={`text-center ${montserratBold.className} text-2xl md:text-5xl ${styles.underlyingCauses}`}>Underlying Causes</h1>
          <div className='md:grid md:grid-cols-2 gap-2 justify-between mt-8 px-8 w-[80%] md:w-[60%] mx-auto mt-[4rem]'>
              {
                  underlyingCauses.map((causes) => {
                      return <div key={causes.id} className={`flex rounded-lg overflow-hidden p-4 justify-center w-[100%] md:mb-0 mb-4 mx-auto ${styles.underlyingCardContainer}`}>
                          <div>
                              <h1 className={`${montserratBold.className} text-xl text-center ${styles.underlyingCauses} `}>{causes.title}</h1>
                              <p className={`${montserratRegular.className} text-sm text-center  text-white mt-2  ${styles.underlyingCauses}`}>{causes.description}</p>
                          </div>
                      </div>
                  })
              }
          </div>
           <div className='mt-[3rem]'>
                        <p className={`${DeliciousHandrawn.className} text-2xl md:text-4xl text-center  ${styles.underlyingCauses}`}>Apparently, you see{"\u00A0"} these causes in everyday life, but who cares?</p>
                      </div>
    </div>
  )
}


export default UnderLyingCauses