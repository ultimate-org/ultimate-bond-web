// import React from 'react'
// import { shadowsIntoLight } from '@/fonts/fonts'
// import Image from 'next/image'

// function UltimateFrameWork() {
//   return (
//       <div className='w-full p-8 justify-center items-center'>
//           <div className='w-[60%] m-auto'>
//               <h1 className={`text-6xl text-center ${shadowsIntoLight.className} font-bold`}>But, we are changing this with Ulti-Mate framework</h1>
//           </div>
//           <div className='w-full relative h-96'>
//           <video
//                     className="w-full h-full rounded-lg"
//                   >
//                     <source src={"/videos/ultimate-framework/Ultimate-FrameWork.mp4"} type="video/mp4" />
//                     Your browser does not support the video tag.
//                   </video>
//           </div>
//     </div>
//   )
// }

// export default UltimateFrameWork


import React from 'react';
import { shadowsIntoLight } from '@/fonts/fonts';

function UltimateFrameWork() {
    return (
        <div className="w-full p-8 flex flex-col justify-center items-center">
            {/* Heading */}
            <div className="w-full md:w-[60%] mx-auto mb-8">
                <h1 className={`text-4xl md:text-6xl text-center ${shadowsIntoLight.className} font-bold`}>
                    But, we are changing this with Ulti-Mate framework
                </h1>
            </div>

            {/* Video Container */}
            <div className=" lg:w-[50%] md:w-[60%] sm:[w-80%] relative h-96">
                <video
                    className="w-full h-full rounded-lg object-cover"
                    controls
                    autoPlay
                    aria-label="Ulti-Mate Framework Video"
                >
                    <source src="/videos/ultimate-framework/Ultimate-FrameWork.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}

export default UltimateFrameWork;