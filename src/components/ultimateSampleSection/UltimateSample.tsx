// import React from 'react'
// import { montserratExtraBold, montserratBold } from '@/fonts/fonts'
// import styles from "./UltimateSample.module.css"
// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
//   } from "@/components/ui/carousel";
// //   import { type CarouselApi } from "@/components/ui/carousel";

// function UltimateSample() {
//     const ultimateSample = [
//         {
//             id: 1,
//             description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perferendis quam ullam libero officia praesentium iure necessitatibus possimus et? Repudiandae repellendus ratione obcaecati mollitia voluptatibus sapiente nihil corrupti hic aliquid?",
//             videoPath : "/videos/ultimate-sample/sample-one.mp4"
//         },
//         {
//             id: 2,
//             description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perferendis quam ullam libero officia praesentium iure necessitatibus possimus et? Repudiandae repellendus ratione obcaecati mollitia voluptatibus sapiente nihil corrupti hic aliquid?",
//             videoPath : "/videos/ultimate-sample/sample-two.mp4"
//         },
//         {
//             id: 3,
//             description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perferendis quam ullam libero officia praesentium iure necessitatibus possimus et? Repudiandae repellendus ratione obcaecati mollitia voluptatibus sapiente nihil corrupti hic aliquid?",
//             videoPath : "/videos/ultimate-sample/sample-three.mp4"
//         },
//         {
//             id: 4,
//             description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perferendis quam ullam libero officia praesentium iure necessitatibus possimus et? Repudiandae repellendus ratione obcaecati mollitia voluptatibus sapiente nihil corrupti hic aliquid?",
//             videoPath : "/videos/ultimate-sample/sample-four.mp4"
//         },
//         {
//             id: 5,
//             description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perferendis quam ullam libero officia praesentium iure necessitatibus possimus et? Repudiandae repellendus ratione obcaecati mollitia voluptatibus sapiente nihil corrupti hic aliquid?",
//             videoPath : "/videos/ultimate-sample/sample-five.mp4"
//         },
//         {
//             id: 6,
//             description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perferendis quam ullam libero officia praesentium iure necessitatibus possimus et? Repudiandae repellendus ratione obcaecati mollitia voluptatibus sapiente nihil corrupti hic aliquid?",
//              videoPath : "/videos/ultimate-sample/sample-six.mp4"
//         },
//         {
//             id: 7,
//             description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perferendis quam ullam libero officia praesentium iure necessitatibus possimus et? Repudiandae repellendus ratione obcaecati mollitia voluptatibus sapiente nihil corrupti hic aliquid?",
//              videoPath : "/videos/ultimate-sample/sample-seven.mp4"
//         },
//         {
//             id: 8,
//             description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perferendis quam ullam libero officia praesentium iure necessitatibus possimus et? Repudiandae repellendus ratione obcaecati mollitia voluptatibus sapiente nihil corrupti hic aliquid?",
//              videoPath : "/videos/ultimate-sample/sample-eight.mp4"
//         },
//         {
//             id: 9,
//             description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perferendis quam ullam libero officia praesentium iure necessitatibus possimus et? Repudiandae repellendus ratione obcaecati mollitia voluptatibus sapiente nihil corrupti hic aliquid?",
//              videoPath : "/videos/ultimate-sample/sample-nine.mp4"
//         },
//         {
//             id: 10,
//             description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perferendis quam ullam libero officia praesentium iure necessitatibus possimus et? Repudiandae repellendus ratione obcaecati mollitia voluptatibus sapiente nihil corrupti hic aliquid?",
//              videoPath : "/videos/ultimate-sample/sample-nine.mp4"
//         }
//     ]
//   return (
//       <div className={`py-[4rem] ${styles.ultimateSampleContainer}`}>
//           <div>
//               <h1 className={`text-center text-2xl md:text-5xl ${montserratExtraBold.className}`}>Ultimate Sample Videos</h1>
//           </div>
//           <div>
//               <Carousel>
//                   <CarouselContent className="p-0 flex items-center">
//                       <CarouselItem>
//                           {
//                               ultimateSample.map((sample) => {
//                                   return <div key={sample.id} className='flex flex-col md:flex-row justify-evenly items-center'>
//                                       <div className='w-full md:w-[40%] p-2'>
//                                           <p className={`${montserratBold.className} text-lg md:text-xl`}>{sample.description}</p>
//                                       </div>
//                                       <div className='w-full md:w-[60%]'>
//                                       <video
//                   className="w-[80%] mx-auto h-full object-fill rounded-lg"
//                 >
//                   <source src={sample.videoPath} type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//                                       </div>
//                                   </div>
//                               })
//                           }
//                       </CarouselItem>
//                   </CarouselContent>
//                    <CarouselPrevious />
//                             <CarouselNext />
//               </Carousel>
//           </div>
//     </div>
//   )
// }

// export default UltimateSample


import React from 'react';
import { montserratExtraBold, montserratBold } from '@/fonts/fonts';
import styles from "./UltimateSample.module.css";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

function UltimateSample() {
    const ultimateSample = [
        {
            id: 1,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perferendis quam ullam libero officia praesentium iure necessitatibus possimus et? Repudiandae repellendus ratione obcaecati mollitia voluptatibus sapiente nihil corrupti hic aliquid?",
            videoPath: "/videos/ultimate-sample/sample_eight.mp4"

        },
        {
            id: 2,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perferendis quam ullam libero officia praesentium iure necessitatibus possimus et? Repudiandae repellendus ratione obcaecati mollitia voluptatibus sapiente nihil corrupti hic aliquid?",
            videoPath: "/videos/ultimate-sample/sample_two.mp4"
        },
        {
            id: 3,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perferendis quam ullam libero officia praesentium iure necessitatibus possimus et? Repudiandae repellendus ratione obcaecati mollitia voluptatibus sapiente nihil corrupti hic aliquid?",
            videoPath: "/videos/ultimate-sample/sample_three.mp4"
        },
        {
            id: 4,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perferendis quam ullam libero officia praesentium iure necessitatibus possimus et? Repudiandae repellendus ratione obcaecati mollitia voluptatibus sapiente nihil corrupti hic aliquid?",
            videoPath: "/videos/ultimate-sample/sample_four.mp4"
        },
        {
            id: 5,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perferendis quam ullam libero officia praesentium iure necessitatibus possimus et? Repudiandae repellendus ratione obcaecati mollitia voluptatibus sapiente nihil corrupti hic aliquid?",
            videoPath: "/videos/ultimate-sample/sample_five.mp4"
        },
        {
            id: 6,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perferendis quam ullam libero officia praesentium iure necessitatibus possimus et? Repudiandae repellendus ratione obcaecati mollitia voluptatibus sapiente nihil corrupti hic aliquid?",
            videoPath: "/videos/ultimate-sample/sample_six.mp4"
        },
        {
            id: 7,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perferendis quam ullam libero officia praesentium iure necessitatibus possimus et? Repudiandae repellendus ratione obcaecati mollitia voluptatibus sapiente nihil corrupti hic aliquid?",
            videoPath: "/videos/ultimate-sample/sample_seven.mp4"
        },
        {
            id: 8,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perferendis quam ullam libero officia praesentium iure necessitatibus possimus et? Repudiandae repellendus ratione obcaecati mollitia voluptatibus sapiente nihil corrupti hic aliquid?",
            videoPath: "/videos/ultimate-sample/sample_one.mp4"
        },
        {
            id: 9,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perferendis quam ullam libero officia praesentium iure necessitatibus possimus et? Repudiandae repellendus ratione obcaecati mollitia voluptatibus sapiente nihil corrupti hic aliquid?",
            videoPath: "/videos/ultimate-sample/sample_nine.mp4"
        }
    ];

    return (
        <div className={`py-[4rem] ${styles.ultimateSampleContainer}`}>
            <div>
                <h1 className={`text-center text-2xl md:text-5xl ${montserratExtraBold.className} ${styles.ultimateSampleText}`}>Ulti-Mate&apos;s Illustrative Activities</h1>
            </div>
            <div className='w-full mt-[4rem]'>
                <Carousel className='w-[70%] md:w-[80%] mx-auto'>
                    <CarouselContent className="p-0">
                        {ultimateSample.map((sample) => (
                            <CarouselItem key={sample.id} className="flex flex-col md:flex-row justify-evenly items-center">
                                <div className='w-full md:w-[50%] md:p-2 mb-4'>
                                    <p className={`${montserratBold.className} text-sm md:text-md text-white ${styles.ultimateSampleText}`}>{sample.description}</p>
                                </div>
                                <div className='w-full md:w-[50%]'>
                                    <video
                                        className="w-[90%] mx-auto rounded-lg aspect-video"
                                        controls
                                    >
                                        <source src={sample.videoPath} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    );
}

export default UltimateSample;