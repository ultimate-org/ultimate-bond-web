// "use client"

// import React from 'react'
// import { merienda, robotoSerif } from "@/fonts/fonts"
// import {motion} from "framer-motion"

// function UltimateFeatureSection() {
//     return (
//         <div  className={`bg-gradient-to-br from-slate-200 to-slate-500 py-[4rem] px-[2rem] md:px-[6rem]`}>
//             <h1 className={`text-center text-5xl ${merienda.className}`}>Ultimate&apos;s Feature</h1>
//       <div className={` grid md:grid-cols-2 gap-8 mt-[4rem]`}>
//           <motion.div initial={{opacity:0.1, translateX:-100}} whileInView={{opacity:1, translateX:0}} viewport={{amount:0.4, once:true}} transition={{duration:0.5}} className="flex justify-center items-center w-full bg-lime-500">
//         <video controls autoPlay={false} loop muted className="w-full md:w-[60%] h-full max-w-lg rounded-lg">
//           <source src="/videos/dummy.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </motion.div>
//           <motion.div initial={{opacity:0.1, translateX:100}} whileInView={{opacity:1, translateX:0}} viewport={{amount:0.4, once:true}} transition={{duration:0.5}}  className='justify-center item-center'>
//               <p className={`${robotoSerif.className} text:md lg:text-xl`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, tenetur. Enim, beatae exercitationem. Ratione, asperiores fugit iusto ea ad maxime magni sit tenetur nobis commodi, ipsum enim recusandae aspernatur nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolore hic cupiditate officiis adipisci laborum explicabo! Modi voluptates recusandae qui iure sunt quam rem numquam quas eos amet, nam possimus?</p>
//           </motion.div>
//             </div>
//             </div>
//   )
// }

// export default UltimateFeatureSection



"use client"

import React from 'react'
import { merienda, robotoSerif } from "@/fonts/fonts"
import {motion} from "framer-motion"

function UltimateFeatureSection() {
  return (
    <div className={`bg-gradient-to-br from-slate-200 to-slate-500 py-[4rem] px-[2rem] md:px-[6rem]`}>
      <h1 className={`text-center text-5xl ${merienda.className}`}>Ultimate&apos;s Feature</h1>
      <div className={`grid md:grid-cols-2 gap-8 mt-[4rem] md:h-[25rem]`}>
        {/* Video Section */}
        <motion.div 
          initial={{opacity: 0.1, translateX: -100}} 
          whileInView={{opacity: 1, translateX: 0}} 
          viewport={{amount: 0.4, once: true}} 
          transition={{duration: 0.5}} 
          className="flex justify-center items-center w-full"
              >
                  <div  className="flex justify-center items-center w-full md:w-[55%] h-full">
          <video
            controls
            autoPlay={false}
            loop
            muted={false}
            className="w-full lg:w-full h-full max-w-lg lg:max-w-none rounded-lg object-fill"
          >
            <source src="/videos/dummy.mp4" type="video/mp4" />
            Your browser does not support the video tag.
                      </video>
                      </div>
        </motion.div>

        {/* Text Section */}
        <motion.div 
          initial={{opacity: 0.1, translateX: 100}} 
          whileInView={{opacity: 1, translateX: 0}} 
          viewport={{amount: 0.4, once: true}} 
          transition={{duration: 0.5}} 
          className='justify-center items-center'
        >
          <p className={`${robotoSerif.className} text-md lg:text-xl`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, tenetur. Enim, beatae exercitationem. Ratione, asperiores fugit iusto ea ad maxime magni sit tenetur nobis commodi, ipsum enim recusandae aspernatur nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolore hic cupiditate officiis adipisci laborum explicabo! Modi voluptates recusandae qui iure sunt quam rem numquam quas eos amet, nam possimus?
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default UltimateFeatureSection
