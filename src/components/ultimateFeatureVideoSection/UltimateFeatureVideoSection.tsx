"use client";

import React from "react";
import { montserratBold, montserratExtraBold } from "@/fonts/fonts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import styles from "./UltimateFeatureVideo.module.css";
import Image from "next/image";
import Link from "next/link";

function UltimateFeatureVideoSection() {
  const ultimateFeatures = [
    {
      id: 1,
      title: "Hands on Activities",
      description: "Hands-on activities provide children with real-world experiences, helping them develop problem-solving, teamwork, and decision-making skills. These activities foster creativity and confidence, equipping children with essential life skills for the future. Engage in activities",
      listOptions: [{id:1,value:"Personal Growth"},{id:2,value:"Life Hacks"},{id:3,value:"Interpersonal Growth"},{id:1,value:"Explore N Learn"}],
      videoPath: "/videos/ultimate-feature/Pg_feature.mp4",
    },
    {
      id: 2,
      title: "Parenting Virtues",
      description: "Listen to our experts valuable guidance on navigating the challenges of each stage of your child's growth, from handling tantrums to addressing issues like bullying, social media, and developing healthy habits. With practical advice tailored to every phase, parents can feel more confident in managing these sensitive topics and supporting their child's emotional and social development",
      listOptions:[],
      videoPath: "/videos/ultimate-feature/Parenting_virtue_feature.mp4",
    },
    {
      id: 3,
      title: "Stories",
      description: "Access a rich collection of 1000's of age-appropriate audio stories designed to spark imagination and encourage meaningful conversations",
      listOptions:[],
      videoPath: "/videos/ultimate-feature/Story_feature.mp4",
    },
    {
      id: 4,
      title: "Self Child Assessment",
      description: "Track and understand your child's growth with Quarterly Assessment tool to gain valuable insights of your child's strengths and areas for improvement. We render customised content as per the assessment results",
      listOptions:[],
      videoPath: "/videos/ultimate-feature/Assessment_feature.mp4",
    },
    {
      id: 5,
      title: "Build Child Portfolio",
      description: "A dedicated space to record your child's achievements to ensure special moments are never lost. By uploading photos and videos, you can create a growing portfolio that captures even the smallest milestones, preserving your childs progress over time. Celebrate your childs journey and watch the growth unfold",
      listOptions:[],
      videoPath: "/videos/ultimate-feature/Portfolio_feature.mp4",
    },
    {
      id: 6,
      title: "Habit Up Activities",
      description: "Encourage regular physical, mental, and disciplinary habits, crucial for building consistency and self-discipline",
      listOptions:[],
      videoPath: "/videos/ultimate-feature/Habitup_feature.mp4",
    },
    {
      id: 7,
      title: "Reading Log",
      description: "Monitor daily reading minutes, and see progress, stay consistent to benefit your child's academic and personal growth for years to come. Each minute earns him points",
      listOptions:[],
      videoPath: "/videos/ultimate-feature/Reading_feature.mp4",
    },
    {
      id: 8,
      title: "Rewards",
      description: "Motivates your child with rewards for earned points for completed activities, encouraging consistent effort and growth",
      listOptions:[],
      videoPath: "/videos/ultimate-feature/Rewards_feature.mp4",
    },
    {
      id: 9,
      title: "Roots n Traditions",
      description: "Learn and recite over 100's of Shlok Audios and perform Mudras by following step by step video instructions. Improve memory, concentration, speech and mental clarity",
      listOptions:[],
      videoPath: "/videos/ultimate-feature/Mudra_and_shlok_feature.mp4",
    },
    {
      id: 10,
      title: "Create Own Activity",
      description: "Create custom activities to suit your child's needs and interests. And then Assign as per desired frequency",
      listOptions:[],
      videoPath: "/videos/ultimate-feature/Create_task_feature.mp4",
    },
   
   
   
   
   
    
   
  ];


 
  return (
    <div className={`py-[4rem] ${styles.ultimateFeatureContainer}`}>
    <div>
        <h1 className={`text-center text-2xl md:text-5xl ${montserratBold.className} ${styles.ultimateFeatureText}`}>Explore Ulti-Mate Features</h1>
    </div>
    <div className='w-full mt-[4rem]'>
        <Carousel className='w-[70%] md:w-[80%] mx-auto'>
            <CarouselContent className="p-0">
                {ultimateFeatures.map((feature) => (
                    <CarouselItem key={feature.id} className="flex flex-col md:flex-row justify-evenly items-center">
                        <div className='w-full md:w-[50%] md:p-2 mb-4'>
                            <h2 className={`${montserratExtraBold.className} text-md md:text-3xl ${styles.ultimateFeatureText}`}>{ feature.title }</h2>
                            <div className='h-[0.1rem] w-full bg-slate-500 my-2'></div>
                      <p className={`${montserratBold.className} text-sm md:text-lg ${styles.ultimateFeatureText}`}>{feature.description}</p>
                      {
                        feature.listOptions.length > 0 && <ul className="mt-4 ml-8">
                          {
                            feature.listOptions.map((option) => {
                              return <li className={`${montserratBold.className} list-disc text-sm md:text-lg ${styles.ultimateFeatureText}`} key={option.id}>{ option.value }</li>
                            })
                          }
                        </ul>
                        }
                        </div>
                        <div className='w-full md:w-[32%] h-[33rem]'>
                            <video
                                className="w-full h-full object-fill "
                        controls
                        
                            >
                                <source src={feature.videoPath} type="video/mp4" />
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
      <div className='flex flex-col md:flex-row md:w-[40%] w-[90%] mx-auto my-10'>
                                       {/* <div className='md:w-[48%] h-14 w-full my-2 relative overflow-hidden'><Image src={"/images/applink/app_store.png"} alt="App store" objectFit='contain' fill></Image></div>
                                       <div  className='md:w-[48%] h-14 w-full my-2 relative overflow-hidden'><Image src={"/images/applink/play_store.png"} alt="Play store" objectFit='contain' fill></Image></div> */}
                                        <Link
                                           href={`${process.env.APP_APPSTORE_SHARE_LINK}`}
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

export default UltimateFeatureVideoSection;

// "use client";

// import React from "react";
// import { montserratBold, montserratExtraBold } from "@/fonts/fonts";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import styles from "./UltimateFeatureVideo.module.css";

// function UltimateFeatureVideoSection() {
//   const ultimateFeatures = [
//     {
//       id: 1,
//       title: "Parenting Virtues",
//       description: "Listen to our experts valuable guidance on navigating the challenges of each stage of your child's growth, from handling tantrums to addressing issues like bullying, social media, and developing healthy habits. With practical advice tailored to every phase, parents can feel more confident in managing these sensitive topics and supporting their child's emotional and social development",
//       videoPath: "/videos/ultimate-feature/Parenting_virtue_feature.mp4",
//     },
//     // ... (keep other feature objects the same)
//   ];

//   return (
//     <div className={`py-[4rem] ${styles.ultimateFeatureContainer}`}>
//       <div>
//         <h1 className={`text-center text-2xl md:text-5xl ${montserratBold.className} ${styles.ultimateFeatureText}`}>Explore Ulti-Mate Features</h1>
//       </div>
//       <div className='w-full mt-[4rem]'>
//         <Carousel className='w-[70%] md:w-[80%] mx-auto'>
//           <CarouselContent className="p-0">
//             {ultimateFeatures.map((feature) => (
//               <CarouselItem key={feature.id} className="flex flex-col md:flex-row justify-evenly items-center">
//                 <div className='w-full md:w-[50%] md:p-2 mb-4'>
//                   <h2 className={`${montserratExtraBold.className} text-md md:text-2xl ${styles.ultimateFeatureText}`}>{ feature.title }</h2>
//                   <div className='h-[0.1rem] w-full bg-slate-500 my-2'></div>
//                   <p className={`${montserratBold.className} text-sm md:text-md ${styles.ultimateFeatureText}`}>{feature.description}</p>
//                 </div>
//                 <div className='w-full md:w-[45%] h-[25rem] relative'>
//                   <video
//                     className="w-full h-full object-contain"
//                     autoPlay
//                     loop
//                     muted
//                     playsInline
//                   >
//                     <source src={feature.videoPath} type="video/mp4" />
//                     Your browser does not support the video tag.
//                   </video>
//                 </div>
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//           <CarouselPrevious />
//           <CarouselNext />
//         </Carousel>
//       </div>
//     </div>
//   );
// }

// export default UltimateFeatureVideoSection;