import React from 'react'
import styles from './UnderLyingCauses.module.css'; 
import {fjallaOne} from "@/fonts/fonts"

 

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
          <h1 className={`text-center ${fjallaOne.className} md:text-2xl`}>Underlying Causes</h1>
          <div className='md:grid md:grid-cols-2 gap-4 justify-evenly mt-8'>
              {
                  underlyingCauses.map((causes) => {
                      return <div key={causes.id} className='flex rounded-lg overflow-hidden my-4 border border-white py-4'>
                          <div className='w-32 flex justify-center items-center mr-4'>
                              <div className='w-[50%] h-[90%] flex items-center justify-center bg-red-500 rounded-lg'><p className={`${fjallaOne.className} text-sm text-white`}>{causes.id}</p></div>
                          </div>
                          <div className='w-[80%]'>
                              <h1 className={`${fjallaOne.className} text-md`}>{causes.title}</h1>
                              <p className={`${fjallaOne.className} text-sm`}>{causes.description}</p>
                          </div>
                      </div>
                  })
              }
          </div>
    </div>
  )
}


export default UnderLyingCauses