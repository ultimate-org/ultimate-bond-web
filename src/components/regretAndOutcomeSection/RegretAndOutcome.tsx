

"use client"

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import {montserratExtraBold, montserratBold, montserratRegular, DeliciousHandrawn} from "@/fonts/fonts"

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
            <div className='mt-[3rem]'>
              <p className={`${DeliciousHandrawn.className} text-4xl text-center`}>“IQ gets you into the race, EQ makes you win it”</p>
            </div>
            <div className='md:flex flex-cols md:w-[40%] w-[90%] mx-auto my-8'>
                <div className='md:w-[48%] h-12 w-full my-2 relative overflow-hidden'><Image src={"/images/applink/app_store.png"} alt="App store" objectFit='contain' fill></Image></div>
                <div className='md:w-[48%] h-12 w-full my-2 relative overflow-hidden'><Image src={"/images/applink/play_store.png"} alt="Play store" objectFit='contain' fill></Image></div>
            </div>
        </div>
    );
}

export default RegretAndOutcome;