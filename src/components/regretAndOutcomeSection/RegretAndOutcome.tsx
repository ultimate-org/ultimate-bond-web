

"use client"

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { montserratBold, montserratRegular, DeliciousHandrawn} from "@/fonts/fonts"

function RegretAndOutcome() {
    const tryThis = [
        {
            id: 1,
            title: "Maximised Potential",
            description: "Better performance by child in every aspect of life, be it school or in social life",
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
            title: "Resilient and Confident",
            description: "Physical, Mental, Social well-being, hence confident and resilient child",
            imagePath:"/images/regretandoutcome/Physical_mental.png"
        },
        {
            id: 4,
            title: "Life Long Learner",
            description: "Life-long learner which is key in Fast Paced changing world",
            imagePath:"/images/regretandoutcome/Life_long_learner.png"
        },
        {
            id: 5,
            title: "Highly Adaptive",
            description: "Improved Financial, Digital Literacy and 21st Century Skills",
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
                <div className='w-[90%] md:w-[70%] lg:w-[60%] mx-auto'>
                <h3 className={`text-center text-2xl md:text-5xl font-semibold mb-2 ${montserratBold.className}`}>
                    How will the
                    </h3>
                    <h3 className={`text-center text-2xl md:text-5xl font-semibold mb-8 ${montserratBold.className}`}>
                    <span className='font-bold text-[#F15A29]'>Ulti-Mate child</span> be?
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
                                <h2 className={`text-md md:text-lg font-semibold ${montserratBold.className}`}>{item.title}</h2>
                                <p className={`md:text-base text-xs mt-2 ${montserratRegular.className}`}>{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className='mt-[3rem]'>
              <p className={`${DeliciousHandrawn.className} text-4xl text-center`}>“IQ gets you into the race, EQ makes you win it”</p>
            </div>
                       
        </div>
    );
}

export default RegretAndOutcome;