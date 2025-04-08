import React from 'react';
import { DeliciousHandrawn, montserratBold, } from '@/fonts/fonts';
import styles from "./UltimateFrameWork.module.css"
import Link from 'next/link';
import Image from 'next/image';

function UltimateFrameWork() {
    return (
        <div className={`w-full px-4 md:px-8 py-[4rem] flex flex-col justify-center items-center ${styles.ultimateFrameworkContainer}`}>
            {/* Heading */}
            <div className="w-[80%] md:w-[70%] mx-auto md:mt-4">
                <h1 className={`text-2xl md:text-5xl text-center mb-2 ${montserratBold.className} ${styles.ultimateFrameworkText}`}>
                    <span className="text-[#F15A29] font-bold">We care</span> with the...
          </h1>
          <h1 className={`text-2xl md:text-5xl text-center ${montserratBold.className} ${styles.ultimateFrameworkText}`}>
                    <span className={`${styles.ultimateText}`}>&quot;Ulti-Mate&quot;</span>  framework
                </h1>
            </div>

            {/* Video Container */}
            <div className="md:w-[80%] sm:[w-80%] relative h-98 md:h-[35rem] mt-[4rem]">
                <video
                    className="w-full h-full rounded-lg object-fill"
                    controls
                    aria-label="Ulti-Mate Framework Video"
                >
                    <source src="/videos/ultimate-framework/Ultimate-FrameWork.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
        </div>
        <div className='mt-[3rem]'>
              <p className={`${DeliciousHandrawn.className} text-2xl md:text-4xl text-center ${styles.ultimateFrameworkText}`}>We guarantee that, there is no such One Stop Shop solution on parenting..!!!</p>
            </div>
            <div className='flex flex-col md:flex-row md:w-[40%] w-[90%] mx-auto my-10'>
                                       {/* <div className='md:w-[48%] h-14 w-full my-2 relative overflow-hidden'><Image src={"/images/applink/app_store.png"} alt="App store" objectFit='contain' fill></Image></div>
                                       <div  className='md:w-[48%] h-14 w-full my-2 relative overflow-hidden'><Image src={"/images/applink/play_store.png"} alt="Play store" objectFit='contain' fill></Image></div> */}
                                        <Link
                                           href={`https://apps.apple.com/in/app/ultimate-parenting/id6593687319`}
                                           target="_blank" // Opens link in a new tab
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

export default UltimateFrameWork;