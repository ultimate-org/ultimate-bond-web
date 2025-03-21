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
            title:"Needs Vs Wants",
            description: "Sit down with entire family for this one! A highly introspective activity that will encourage everyone to evaluate their belongings, and help to classify anything they wish to buy, into needs and wants. This is a very essential activity that will help children remain grounded in an otherwise materialistic world.",
            videoPath: "/videos/ultimate-sample/sample_eight.mp4"

        },
        {
            id: 2,
            title:"Shining Bee Jar",
            description: "Who doesn't love twinkling fairy lights? Let your child's imagination run wild in this hands on art activity that will help them create a forever keepsake as well as learn about creative uses of fairy lights! Such creative artworks are perfect for home decorations as well as gifting!",
            videoPath: "/videos/ultimate-sample/sample_two.mp4"
        },
        {
            id: 3,
            title:"Know your electricity bill",
            description: "How many of you study your electricity bill before paying the monthly amount? Learning to read this bill is an extremely valuable life skill. Through this activity you will learn to calculate as per units consumed, adding other charges, observing monthly trends in unit consumption and so much more! Become a smart kid with Ulti-mate!",
            videoPath: "/videos/ultimate-sample/sample_five.mp4"
        },
        {
            id: 4,
            title:"Sun Spinner",
            description: "Science is way more exciting and fun when you get to experiment on you own! In this hands on activity, child will get an opportunity to put their textbook learnings into art work! Learn about aerodynamics, air pressure, force and motion and speed and rotation; all while having some crafting fun!",
            videoPath: "/videos/ultimate-sample/sample_three.mp4"
        },
        {
            id: 5,
            title:"Green Building Concepts",
            description: "Unleash the creativity and thinking of your inner architect in this activity! Learn about a new concept and design your own green home. This activity will help you to understand concepts like energy efficiency, waste and water management, sustainable materials, and indoor environment quality.",
            videoPath: "/videos/ultimate-sample/sample_six.mp4"
        },
        {
            id: 6,
            title:"The Invisible Force",
            description: "Engage in this fun paper activity with your child where they will surely enjoy trying different methods to help balance matchboxes on a piece of paper suspended on two glasses. Through this activity they will get an insight of structural designs and shapes that help make a structure more strong and rigid.",
            videoPath: "/videos/ultimate-sample/sample_four.mp4"
        },
        {
            id: 7,
            title:"Home electrical wiring",
            description: "Ever wondered how all the gadgets and electrical devices in your home work? We all know that they function due to electricity, but just how does it get supplied? Learn the basics of electricity transmission, meters, and power switches in this realistic activity that will make you wonder and think about the power connections in your own homes!",
            videoPath: "/videos/ultimate-sample/sample_seven.mp4"
        },
        {
            id: 8,
            title:"Focus Station",
            description: "Engage in this brain gym activity that will help your child with whole brain development! Does not matter whether you are right or left handed, training your brain to use both hands simultaneously helps to improve focus, eye- hand co-ordination and boosts development of specific areas of the brain. With regular practice, you are bound to get better and better!",
            videoPath: "/videos/ultimate-sample/sample_one.mp4"
        },
        {
            id: 9,
            title:"Understanding Insurance",
            description: "In this activity, child is gently introduced to the concept of Insurance and some words related to it , like policy, premium, beneficiary, coverage, exclusions. You can further have a discussion with child about how to select the best kind of insurance that suits your needs.",
            videoPath: "/videos/ultimate-sample/sample_nine.mp4"
        }
    ];

    return (
        <div className={`py-[4rem] ${styles.ultimateSampleContainer}`}>
            <div>
                <h1 className={`text-center text-2xl md:text-5xl ${montserratBold.className} ${styles.ultimateSampleText}`}>Ulti-Mate&apos;s illustrative activities</h1>
            </div>
            <div className='w-full mt-[4rem]'>
                <Carousel className='w-[70%] md:w-[80%] mx-auto'>
                    <CarouselContent className="p-0">
                        {ultimateSample.map((sample) => (
                            <CarouselItem key={sample.id} className="flex flex-col md:flex-row justify-evenly items-center">
                                <div className='w-full md:w-[50%] md:p-2 mb-4'>
                                    <h2 className={`${montserratExtraBold.className} text-md md:text-2xl ${styles.ultimateSampleText}`}>{ sample.title }</h2>
                                    <div className='h-[0.1rem] w-full bg-slate-500 my-2'></div>
                                    <p className={`${montserratBold.className} text-sm md:text-md ${styles.ultimateSampleText}`}>{sample.description}</p>
                                </div>
                                <div className='w-full md:w-[50%]'>
                                    <video
                                        className="w-[90%] mx-auto aspect-video"
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