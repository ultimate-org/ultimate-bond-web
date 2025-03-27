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
import Link from 'next/link';

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
            <div className='w-[80%] mb-4 md:mb-0 md:w-[30%] mx-auto flex justify-end items-center md:ml-[4rem]'>
                <h1 className={`text-2xl md:text-4xl text-white text-center ${montserratBold.className} ${styles.parentTestimony}`}>
                Listen from other parents, not just from us!
                </h1>
            </div>
            <div className='flex flex-col md:flex-row justify-center mt-8 items-center mx-auto w-[70%]'>
                {parentTestimony.map((testimony) => (
                    <div key={testimony.id} className='w-[80%] md:w-[30%] border border-1 h-auto aspect-[14/16] md:aspect-[14/16] overflow-hidden rounded-lg shadow-lg my-4 md:mx-4'>
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
                             <Link
                                href={`https://apps.apple.com/in/app/ultimate-parenting/id6593687319`}
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
                            </Link>
                            <Link
                                href={`https://play.google.com/store/apps/details?id=com.ultimate_bond`}
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
                            </Link>
                        </div>
            
            </div>
    );
}

export default ParentTestimony;