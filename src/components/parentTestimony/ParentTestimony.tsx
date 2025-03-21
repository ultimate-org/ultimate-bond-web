// import React from 'react'
// import styles from "./ParentTestimony.module.css"
// import { montserratBold } from '@/fonts/fonts'

// function ParentTestimony() {
//     const parentTestimony = [
//         {
//             id: 1,
//             videoPath:"/videos/parent-testimony/Arun_Testimonial.mp4"
//         },
//         {
//             id: 2,
//             videoPath:"/videos/parent-testimony/Teju.mp4"
//         }
//     ]
//   return (
//     <div className={`${styles.parentTestimonyContainer} py-8`}>
//         <div className=''>
//             <h1 className={`text-2xl md:text-5xl text-white text-center ${montserratBold.className} ${styles.parentTestimony}`}>Parent Testimony</h1>
//           </div>
//           <div className='flex md:flex-row justify-center mt-[3rem]'>
//               {parentTestimony.map((testimony) => {
//                   return <div key={testimony.id} className='w-[30%] border-2 h-[20rem] bg-lime-500'>
//                       <video
//                                         className="w-[70%] cover"
//                                         controls
//                                     >
//                                         <source src={testimony.videoPath} type="video/mp4" />
//                                         Your browser does not support the video tag.
//                                     </video>
//                   </div>
//               })}
//           </div>
//     </div>
//   )
// }

// export default ParentTestimony


import React from 'react';
import styles from "./ParentTestimony.module.css";
import { montserratBold } from '@/fonts/fonts';

function ParentTestimony() {
    const parentTestimony = [
        {
            id: 1,
            videoPath: "/videos/parent-testimony/Arun_Testimonial.mp4"
        },
        {
            id: 2,
            videoPath: "/videos/parent-testimony/Teju_Testimonial.mp4"
        }
    ];

    return (
        <div className={`${styles.parentTestimonyContainer} py-8 flex md:flex-row justify-center`}>
            <div className='w-[30%] mx-auto flex justify-end items-center ml-[4rem]'>
                <h1 className={`text-2xl md:text-2xl text-white text-center ${montserratBold.className} ${styles.parentTestimony}`}>
                See what other parents are saying, not just us.
                </h1>
            </div>
            <div className='flex md:flex-row justify-center  gap-4 w-[70%]'>
                {parentTestimony.map((testimony) => (
                    <div key={testimony.id} className='w-[30%] max-w-[300px] h-auto aspect-[16/16] overflow-hidden rounded-lg shadow-lg'>
                        <video
                            className="w-full h-full object-contain"
                            controls
                        >
                            <source src={testimony.videoPath} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ParentTestimony;