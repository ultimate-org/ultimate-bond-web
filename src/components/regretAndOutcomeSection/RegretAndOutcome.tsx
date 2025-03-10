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
import {comicNeue,ubuntuCondensed} from "@/fonts/fonts"

function RegretAndOutcome() {
    const tryThis = [
        {
            id: 1,
            title: "Title1",
            description: "Better performance by child in every aspect of life, be it school or in social circle"
        },
        {
            id: 2,
            title: "Title2",
            description: "Critical thinker who sees things differently"
        },
        {
            id: 3,
            title: "Title3",
            description: "Physical, mental, Social well-being, hence confident and resilient child"
        },
        {
            id: 4,
            title: "Title4",
            description: "Life-long learner which is key in Fast Pace Tech changing world"
        },
        {
            id: 5,
            title: "Title5",
            description: "Improved Financial and Digital Literacy"
        },
        {
            id: 6,
            title: "Title6",
            description: "Improved family bonding and HAPPY & SUCCESSFUL CHILD."
        }
    ];

    return (
        <div className="w-full p-8">
            <div className="my-4">
                <h3 className={`text-center text-2xl font-semibold mb-8 ${ubuntuCondensed.className}`}>
                    Instead, let’s try UltiMate, you can expect below:
                </h3>
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
                            <div className="w-28 h-28 flex items-center justify-center">
                                <div className="relative w-full h-full rounded-lg bg-white shadow-lg overflow-hidden">
                                    <Image
                                        src="/images/main-section-background.jpg"
                                        alt={item.title}
                                        width={80}
                                        height={80}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>
                            <div className="lg:w-[70%] lg:ml-4 mt-4 lg:mt-0 text-center lg:text-left">
                                <h2 className={`text-xl font-semibold ${ubuntuCondensed.className}`}>{item.title}</h2>
                                <p className={`text-sm mt-2 ${comicNeue.className}`}>{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="my-8 text-center">
                <h2 className="text-2xl font-semibold italic">
                    “IQ gets you into the race, EQ makes you win it”
                </h2>
            </div>
        </div>
    );
}

export default RegretAndOutcome;