// import Image from 'next/image'
// import React from 'react'
// import { motion } from "framer-motion"


// function RegretAndOutcome() {
//     const tryThis = [
//         {
//             id: 1,
//             title: "Title1",
//             description: "Better performance by child in every aspect of life, be it school or in social circle"
//         },
//         {
//             id: 2,
//             title: "Title2",
//             description: "Critical thinker who sees things differently"
//         },
//         {
//             id: 3,
//             title: "Title3",
//             description:"Physical, mental, Social well-being, hence confident and resilient child"
//         },
//         {
//             id: 4,
//             title: "Title4",
//             description:"Life-long learner which is key in Fast Pace Tech changing world"
//         },
//         {
//             id: 5,
//             title: "Title5",
//             description:"Improved Financial and Digital Literacy"
//         },
//         {
//             id: 6,
//             title: "Title6",
//             description:"Improved family bonding and HAPPY & SUCCESSFUL CHILD."
//         }
//     ]
//   return (
//       <div className='w-full p-8'>
//           <div className='my-4'>
//               <h3 className='text-center text-2xl'>Instead, let’s try UltiMate, you can expect below:</h3>
//               <div className=' grid md:grid-cols-2 lg:grid-cols-3' >
//                   {
//                       tryThis.map((item) => {
//                           return <motion.div
//                               initial = {{scale:1}}
//                               whileHover={ {scale:1.1}}
//                               transition={{duration:0.4}}
//                               key={item.id} className=' lg:flex items-center py-4 m-2 hover:bg-gradient-to-r from-slate-50 to-blue-300 rounded-lg px-2'>
//                               <div className=' w-28 h-28 flex items-center justify-center m-auto'>
//                                   <div className='relative p-4 rounded-lg bg-white flex justify-center item-center bg-white-400 w-[90%] h-[90%] shadow-xl overflow-hidden'>
//                                   <Image src={"/images/main-section-background.jpg"} className='object-cover' alt={"image"} width={80} height={40} ></Image>
//                                   </div>
//                                   </div>
//                               <div className='lg:w-[70%] lg:flex lg:flex-col item-center justify-evenly ml-2'>
//                                   <h2 className='lg:text-xl md:text-lg sm:text-md text-center lg:text-left'>{item.title}</h2>
//                                   <p  className='text-sm text-center lg:text-left'>{ item.description }</p>
//                               </div>
//                           </motion.div>
//                       })
//                   }
//               </div>
//           </div>
//           <div className='my-4'>
//               <h2 className='text-2xl text-center'>“IQ gets you into the race, EQ makes you win it”</h2>
//           </div>
//     </div>
//   )
// }

// export default RegretAndOutcome


"use client"

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import {montserratExtraBold, montserratBold, montserratRegular} from "@/fonts/fonts"

function RegretAndOutcome() {
    const tryThis = [
        {
            id: 1,
            title: "Maximising Child Potential",
            description: "Better performance by child in every aspect of life, be it school or in social circle",
            imagePath:"/images/regretandoutcome/Better_performance.png"
        },
        {
            id: 2,
            title: "Critical Thinker",
            description: "Critical, Logical and Lateral thinker focusing on solutions than problems",
            imagePath:"/images/regretandoutcome/Critical_thinker.png"
        },
        {
            id: 3,
            title: "Fostering Resilience & Confidence",
            description: "Physical, mental, Social well-being, hence confident and resilient child",
            imagePath:"/images/regretandoutcome/Physical_mental.png"
        },
        {
            id: 4,
            title: "Life Long Learner",
            description: "Life-long learner which is key in Fast Pace Tech changing world",
            imagePath:"/images/regretandoutcome/Life_long_learner.png"
        },
        {
            id: 5,
            title: "21st Century Skills",
            description: "Improved Financial and Digital Literacy",
            imagePath:"/images/regretandoutcome/Improved_Financial.png"
        },
        {
            id: 6,
            title: "Building Stronger Connections",
            description: "Improved family bonding and HAPPY & SUCCESSFUL CHILD.",
            imagePath:"/images/regretandoutcome/Improved_family_bonding.png"
        }
    ];

    return (
        <div className="w-full p-8">
            <div className="my-4">
                <div className='w-[80%] md:w-[70%] lg:w-[60%] mx-auto'>
                <h3 className={`text-center text-2xl md:text-5xl font-semibold mb-8 ${montserratExtraBold.className}`}>
                    With Ulti-Mate, you can expect
                    </h3>
                    </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {tryThis.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col lg:flex-row items-center p-4 m-2 hover:bg-gradient-to-r from-slate-50 to-blue-300 rounded-lg shadow-md cursor-pointer"
                        >
                            <div className="w-20 h-20 flex items-center justify-center">
                                <div className="relative w-full h-full rounded-lg bg-white shadow-lg overflow-hidden flex justify-between items-center">
                                    <div className='w-[40%] h-[40%] relative mx-auto'>
                                    <Image
                                        src={item.imagePath}
                                        alt={item.title}
                                        fill
                                        className="object-cover w-full h-full"
                                        />
                                        </div>
                                </div>
                            </div>
                            <div className="lg:w-[70%] lg:ml-4 mt-4 lg:mt-0 text-center lg:text-left">
                                <h2 className={`text-xl font-semibold ${montserratBold.className}`}>{item.title}</h2>
                                <p className={`text-sm mt-2 ${montserratRegular.className}`}>{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="my-8 text-center">
                <h2 className={`text-2xl font-semibold italic ${montserratBold.className}`}>
                    “IQ gets you into the race, EQ makes you win it”
                </h2>
            </div>
        </div>
    );
}

export default RegretAndOutcome;