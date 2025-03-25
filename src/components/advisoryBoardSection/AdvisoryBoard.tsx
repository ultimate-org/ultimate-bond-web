import React from 'react'
import {  montserratBold } from '@/fonts/fonts'
import Image from 'next/image'
import styles from "./AdvisoryBoard.module.css"

function AdvisoryBoard() {
    const advisoryBoard = [
        {
            id: 1,
            name: "Dr. Nandita Babu",
            profession: "HoD, Psychology",
            school:"Delhi University",
            quote: "Parenting: were the smallest moments becomes the biggest memories",
            image: "/images/advisoryBoard/nandita-babu.jpg"
        },
        {
            id: 2,
            name: "Mr. Sudhir Panse",
            profession: "Mentor and Life Coach",
            school:"IIT Alumini",
            quote: "Parenting: were the smallest moments becomes the biggest memories",
            image: "/images/advisoryBoard/sudhir-panse.jpeg"

        },
        {
            id: 3,
            name: "Dr. Naina Athalye",
            profession: "Ph.D. Psychology",
            school:"Pune University",
            quote: "Parenting: were the smallest moments becomes the biggest memories",
            image: "/images/advisoryBoard/naina-athalye.jpeg"

        },
    ]
  return (
      <div className= {`${styles.advisoryBoardContainer}`}>
            <div className='py-8'>
                        <div className='my-2'>
                            <h1 className={`text-center text-2xl md:text-5xl ${montserratBold.className} ${styles.adivisoryBoardText}`}>Our Advisors</h1>
                        </div>
                        <div className='flex flex-col md:flex-row items-center justify-center my-4 md:my-8'>
                            {
                                advisoryBoard.map((advisors) => {
                                    return <div key={advisors.id} className='w-[50%] md:w-[20%] justify-center items-center' >
                                        {/* Image */}
                                        <div className='h-[8rem]  w-[8rem] m-auto my-4 relative rounded-lg overflow-hidden drop-shadow-2xl'>
                                            <Image src={advisors.image} alt='advisor'  className='object-cover' fill></Image>
                                        </div>
                                        {/* Info */}
                                        <div className='justify-center items-center'>
                                            <div className='my-1'>   
                                            <h2 className={`text-center text-lg ${montserratBold.className} font-bold text-white`}>{advisors.name}</h2>
                                            </div>
                                            <div className='flex flex-col justify-evenly'>
                                                <div className='h-[3rem]'>
                                                <h4 className={`text-center text-sm ${montserratBold.className} text-white`}>{advisors.profession}</h4>
                                                
                                                <h4 className={`text-center text-sm ${montserratBold.className} text-white`}>{advisors.school}</h4> 
                                                </div>
                                                
                                                {/* <div className='w-[80%] mx-auto'>
                                                    <blockquote className={`text-center text-[0.7rem] ${montserratRegular.className} text-gray-500`}>{`"${advisors.quote}"`}</blockquote>
                                                    </div> */}
                                                </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
          
          
                   
    </div>
  )
}

export default AdvisoryBoard