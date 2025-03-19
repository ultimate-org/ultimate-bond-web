// "use client"
// import React from 'react'
// import { philosopher } from '@/fonts/fonts'
// import { motion } from "framer-motion"
// import { comicNeue } from '@/fonts/fonts'
// import { DeliciousHandrawn , montserratRegular, montserratBold} from "@/fonts/fonts"



// const transition = {
//     duration: 0.8,
//     delay: 0.5,
//     ease: [0, 0.71, 0.2, 1.01],
//   }

// function Main() {
//     const pointsArr = [
//         "Emotional regulation in tough situations?",
// "Conflict resolution & collaboration in relationships?",
// "Financial literacy to make smart life decisions?",
// "Networking & leadership to unlock new opportunities?",
// "Resilience to handle setbacks?"
//     ]
//   return (
//       <div className='justify-center items-center  bg-cover' style={{ backgroundImage: "url('/images/main-section-background.jpg')" }}>
//           <div className='pt-[8rem] pb-[5rem] bg-black/100'>
//           {/* <h1 className={`text-center text-6xl ${philosopher.className} text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500`}>The Future Starts Now</h1>
//           <h2 className={`text-center text-2xl ${philosopher.className} text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500`}>Prepare Your Child for the Unknown</h2> */}
//            <h1 className={`text-center text-6xl ${philosopher.className} text-transparent bg-clip-text bg-[#06A5D8]`}>The Future Starts Now</h1>
//            <h2 className={`text-center text-2xl ${philosopher.className} text-transparent bg-clip-text bg-[#06A5D8]`}>Prepare Your Child for the Unknown</h2>
//           <div className='justify-center mt-8 '>
//               <div>
//             <p className={`text-center text-xl text-white ${montserratRegular.className} `}>Traditional education prepares children for <span className='underline underline-offset-2'>Tests, Grades, Degrees</span></p>
//             <p className={`text-center mt-6 text-2xl text-white  ${montserratBold.className}`}>But does it prepare them for:</p>
//               </div>
//               {/* <p className='text-center text-xl'>Traditional education prepares children for <span className='underline underline-offset-2'>Tests, Degrees, and Careers</span> <br /><span className=' mt-4 text-2xl'>But does it prepare them for:</span></p> */}
//               <div className='mt-4'>
//               {
//                   pointsArr.map((point,index) => {
//                       return <motion.p key={point} className={`text-xl my-1 text-white ${montserratRegular.className} text-center`} initial={{scale:0, opacity:0}} whileInView={{scale:1, opacity:1}} viewport={{amount:1, once:true}} transition={{
//                         ...transition,
//                         delay: transition.delay + index * 0.5, // Add delay based on index
//                       }} >{ point}</motion.p>
//                   })
//                   }
//                   </div>
//           </div>
      
//        <div className='mt-8'>
//                     {/* <p className='text-center'>Research proves that IQ alone isn’t enough—Success = IQ + EQ + SQ + CQ + AQ.</p> */}
//                     <p className={`text-center text-white text-3xl ${DeliciousHandrawn.className}`}>So, are we raising <span className={`${DeliciousHandrawn.className} text-4xl`}>happy, resilient, and emotionally</span> strong children?</p>
//         </div>
//         </div>
//     </div>
//   )
// }

// export default Main


// "use client";
// import React from 'react';
// import { philosopher, comicNeue } from '@/fonts/fonts';
// import { motion } from 'framer-motion';
// import Image from 'next/image';

// const transition = {
//   duration: 0.8,
//   delay: 0.5,
//   ease: [0, 0.71, 0.2, 1.01],
// };

// function Main() {
//   const pointsArr = [
//     "✔️ Emotional regulation in tough situations?",
//     "✔️ Conflict resolution & collaboration in relationships?",
//     "✔️ Financial literacy to make smart life decisions?",
//     "✔️ Networking & leadership to unlock new opportunities?",
//     "✔️ Resilience to handle setbacks?",
//   ];

//   return (
//     <div
//       className="justify-center items-center  bg-slate-50 bg-cover"
//       style={{ backgroundImage: "url('/images/main-section-background.jpg')", }}
//       >
//           <div className='pt-[8rem]'>
//       <h1 className={`text-center text-6xl ${philosopher.className} text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500`}>
//         The Future Starts Now
//       </h1>
//       <h2 className={`text-center text-2xl ${philosopher.className} text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500`}>
//         Prepare Your Child for the Unknown
//       </h2>
//       </div>
//       <div className="justify-center mt-8">
//         <div>
//           <p className="text-center text-xl">
//             Traditional education prepares children for{' '}
//             <span className="underline underline-offset-2">Tests, Degrees, and Careers</span>
//           </p>
//           <p className="text-center mt-4 text-2xl">But does it prepare them for:</p>
//         </div>
//         <div className="mt-8">
//           {pointsArr.map((point, index) => (
//             <motion.p
//               key={point}
//               className={`text-center text-xl  ${comicNeue.className}`}
//               initial={{ scale: 0, opacity: 0 }}
//               whileInView={{ scale: 1, opacity: 1 }}
//               viewport={{ amount: 1, once: true }}
//               transition={{
//                 ...transition,
//                 delay: transition.delay + index * 0.5, // Add delay based on index
//               }}
//             >
//               {point}
//             </motion.p>
//           ))}
//         </div>
//        </div>
//     </div>
//   );
// }

// export default Main;

// --------------------------------------------------------

"use client"
import React from 'react'
import { philosopher } from '@/fonts/fonts'
import { motion } from "framer-motion"
import { comicNeue } from '@/fonts/fonts'
import { DeliciousHandrawn , montserratRegular, montserratBold} from "@/fonts/fonts"
import styles from "./Main.module.css"


const transition = {
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  }

function Main() {
    const pointsArr = [
        "Emotional regulation in tough situations?",
"Conflict resolution & collaboration in relationships?",
"Financial literacy to make smart life decisions?",
"Networking & leadership to unlock new opportunities?",
"Resilience to handle setbacks?"
    ]
  return (
      <div className='justify-center items-center'>
          <div className='pt-[8rem] pb-[5rem] bg-[#020e25]'>
          {/* <h1 className={`text-center text-6xl ${philosopher.className} text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500`}>The Future Starts Now</h1>
          <h2 className={`text-center text-2xl ${philosopher.className} text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500`}>Prepare Your Child for the Unknown</h2> */}
           <h1 className={`text-center text-6xl ${philosopher.className} text-transparent bg-clip-text bg-[#06A5D8]`}>The Future Starts Now</h1>
           <h2 className={`text-center text-2xl ${philosopher.className} text-transparent bg-clip-text bg-[#06A5D8]`}>Prepare Your Child for the Unknown</h2>
          <div className='justify-center my-8 '>
              <div>
            <p className={`text-center text-xl text-white ${montserratRegular.className} ${styles.mainTextColor}`}>Traditional education prepares children for <span className={`underline underline-offset-2 ${styles.mainTextColor}`}>Tests, Grades, Degrees</span></p>
            <p className={`text-center mt-6 text-2xl text-white  ${montserratBold.className} ${styles.mainTextColor}`}>But does it prepare them for:</p>
              </div>
              {/* <p className='text-center text-xl'>Traditional education prepares children for <span className='underline underline-offset-2'>Tests, Degrees, and Careers</span> <br /><span className=' mt-4 text-2xl'>But does it prepare them for:</span></p> */}
              <div className='mt-4'>
              {
                  pointsArr.map((point,index) => {
                      return <motion.p key={point} className={`text-xl my-1 text-white ${montserratRegular.className} text-center ${styles.mainTextColor}`} initial={{scale:0, opacity:0}} whileInView={{scale:1, opacity:1}} viewport={{amount:1, once:true}} transition={{
                        ...transition,
                        delay: transition.delay + index * 0.5, // Add delay based on index
                      }} >{ point}</motion.p>
                  })
                  }
                  </div>
          </div>
      
       <div className='mt-8'>
                    {/* <p className='text-center'>Research proves that IQ alone isn’t enough—Success = IQ + EQ + SQ + CQ + AQ.</p> */}
                    <p className={`text-center text-white text-3xl ${DeliciousHandrawn.className} ${styles.mainTextColor}`}>So, are we raising <span className={`${DeliciousHandrawn.className} text-4xl`}>happy, resilient, and emotionally</span> strong children?</p>
        </div>
        </div>
    </div>
  )
}

export default Main
