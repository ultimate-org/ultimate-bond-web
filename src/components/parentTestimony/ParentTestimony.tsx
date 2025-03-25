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
import Image from 'next/image';

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
        <div className={`${styles.parentTestimonyContainer} py-8 `}>
        <div className={` flex flex-col md:flex-row justify-center`}>
            <div className='q-[80%] mb-4 md:mb-0 md:w-[30%] mx-auto flex justify-end items-center ml-[4rem]'>
                <h1 className={`text-2xl md:text-2xl text-white text-center ${montserratBold.className} ${styles.parentTestimony}`}>
                See what other parents are saying, not just us.
                </h1>
            </div>
            <div className='flex flex-col md:flex-row justify-center mt-8 items-center mx-auto gap-4 w-[70%]'>
                {parentTestimony.map((testimony) => (
                    <div key={testimony.id} className='w-[80%]  md:w-[30%] max-w-[300px] h-auto aspect-[14/16] md:aspect-[16/16] overflow-hidden rounded-lg shadow-lg mx-auto'>
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
            {/* app download links */}
             <div className='flex flex-col md:flex-row md:w-[40%] w-[90%] mx-auto my-10'>
                            {/* <div className='md:w-[48%] h-14 w-full my-2 relative overflow-hidden'><Image src={"/images/applink/app_store.png"} alt="App store" objectFit='contain' fill></Image></div>
                            <div  className='md:w-[48%] h-14 w-full my-2 relative overflow-hidden'><Image src={"/images/applink/play_store.png"} alt="Play store" objectFit='contain' fill></Image></div> */}
                             <a
                                href={process.env.APP_APPSTORE_SHARE_LINK}
                                target="_blank" // Opens link in a new tab
                                rel="noopener noreferrer" // Security best practice for external links
                                className='md:w-[48%] mx-4 h-14 w-full my-2 relative overflow-hidden'
                            >
                                <Image
                                    src="/images/applink/app_store_white.png"
                                    alt="App store"
                                    fill
                                    className="object-contain"
                                    priority // Add priority for above-the-fold images
                                />
                            </a>
                            <a
                                href={process.env.APP_PLAYSTORE_SHARE_LINK}
                                target="_blank" // Opens link in a new tab
                                rel="noopener noreferrer" // Security best practice for external links
                                className='md:w-[48%] mx-4 h-14 w-full my-2 relative overflow-hidden'
                            >
                                <Image
                                    src="/images/applink/play_store_white.png"
                                    alt="Play store"
                                    fill
                                    className="object-contain"
                                    priority // Add priority for above-the-fold images
                                />
                            </a>
                        </div>
            
            </div>
    );
}

export default ParentTestimony;