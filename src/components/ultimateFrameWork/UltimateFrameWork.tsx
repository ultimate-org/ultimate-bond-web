import React from 'react';
import { DeliciousHandrawn, montserratBold, } from '@/fonts/fonts';
import styles from "./UltimateFrameWork.module.css"

function UltimateFrameWork() {
    return (
        <div className={`w-full px-4 md:px-8 py-[4rem] flex flex-col justify-center items-center ${styles.ultimateFrameworkContainer}`}>
            {/* Heading */}
            <div className="w-[80%] md:w-[70%] mx-auto md:mt-4">
                <h1 className={`text-2xl md:text-5xl text-center mb-2 ${montserratBold.className} ${styles.ultimateFrameworkText}`}>
                    <span className="text-[#F15A29] font-bold">We care</span> with the...
          </h1>
          <h1 className={`text-2xl md:text-5xl text-center ${montserratBold.className} ${styles.ultimateFrameworkText}`}>
                     &quot;Ulti-Mate&quot; framework
                </h1>
            </div>

            {/* Video Container */}
            <div className="md:w-[60%] sm:[w-80%] relative h-98 md:h-[25rem] mt-[4rem]">
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
              <p className={`${DeliciousHandrawn.className} text-xl md:text-4xl text-center ${styles.ultimateFrameworkText}`}>We guarantee that, there is no such One Stop Shop solution on parenting..!!!</p>
            </div>
        </div>
    );
}

export default UltimateFrameWork;