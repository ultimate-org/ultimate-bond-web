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

function UltimateFeatureVideoSection() {
  const ultimateFeatures = [
    {
      id: 1,
      title: "Parenting Virtues",
      description: "Listen to our experts valuable guidance on navigating the challenges of each stage of your child's growth, from handling tantrums to addressing issues like bullying, social media, and developing healthy habits. With practical advice tailored to every phase, parents can feel more confident in managing these sensitive topics and supporting their child's emotional and social development",
      videoPath: "/videos/ultimate-feature/Parenting_virtue_feature.mp4",
    },
    {
      id: 2,
      title: "Reading Log",
      description: "Monitor daily reading minutes, and see progress, stay consistent to benefit your child's academic and personal growth for years to come. Each minute earns him points",
      videoPath: "/videos/ultimate-feature/Reading_feature.mp4",
    },
    {
      id: 3,
      title: "Create Own Activity",
      description: "Create custom activities to suit your child's needs and interests. And then Assign as per desired frequency",
      videoPath: "/videos/ultimate-feature/Create_task_feature.mp4",
    },
    {
      id: 4,
      title: "Habit Up Activities",
      description: "Encourage regular physical, mental, and disciplinary habits, crucial for building consistency and self-discipline",
      videoPath: "/videos/ultimate-feature/Habitup_feature.mp4",
    },
    {
      id: 5,
      title: "Roots n Traditions",
      description: "Learn and recite over 100's of Shlok Audios and perform Mudras by following step by step video instructions. Improve memory, concentration, speech and mental clarity",
      videoPath: "/videos/ultimate-feature/Mudra_and_shlok_feature.mp4",
    },
    {
      id: 6,
      title: "Hands on Activities",
      description: "Hands-on activities provide children with real-world experiences, helping them develop problem-solving, teamwork, and decision-making skills. These activities foster creativity and confidence, equipping children with essential life skills for the future",
      videoPath: "/videos/ultimate-feature/Pg_feature.mp4",
    },
    {
      id: 7,
      title: "Build Child Portfolio",
      description: "A dedicated space to record your child's achievements to ensure special moments are never lost. By uploading photos and videos, you can create a growing portfolio that captures even the smallest milestones, preserving your childs progress over time. Celebrate your childs journey and watch the growth unfold",
      videoPath: "/videos/ultimate-feature/Portfolio_feature.mp4",
    },
    {
      id: 8,
      title: "Rewards",
      description: "Motivates your child with rewards for earned points for completed activities, encouraging consistent effort and growth",
      videoPath: "/videos/ultimate-feature/Rewards_feature.mp4",
    },
    {
      id: 9,
      title: "Self Child Assessment",
      description: "Track and understand your child's growth with Quarterly Assessment tool to gain valuable insights of your child's strengths and areas for improvement. We render customised content as per the assessment results",
      videoPath: "/videos/ultimate-feature/Assessment_feature.mp4",
    },
    {
      id: 10,
      title: "Stories",
      description: "Access a rich collection of 1000's of age-appropriate audio stories designed to spark imagination and encourage meaningful conversations",
      videoPath: "/videos/ultimate-feature/Story_feature.mp4",
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
                            <h2 className={`${montserratExtraBold.className} text-md md:text-2xl ${styles.ultimateFeatureText}`}>{ feature.title }</h2>
                            <div className='h-[0.1rem] w-full bg-slate-500 my-2'></div>
                            <p className={`${montserratBold.className} text-sm md:text-md ${styles.ultimateFeatureText}`}>{feature.description}</p>
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