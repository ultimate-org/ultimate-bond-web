// import { montserratBold, montserratRegular } from "@/fonts/fonts"
// import styles from "./UltimateFeature.module.css"

// import React from 'react'
// import Image from "next/image"

// function UltimateFeatureSection() {
//     const ultimateFeatures = [
//         {
//             id: 1,
//             title: "Hands on Activities",
//             description: "Age appropriate 1800 Life Skill enhancing activity videos for your child. Fun while learning basic concepts. Ensure better grades.",
//             imagePath:""
//         },
//         {
//             id: 2,
//             title: "Audio Stories",
//             description: "Access a rich collection of age-appropriate 1000’s of audio stories. Spark imagination. Meaningful conversations. Socratic style questions at the end of each story.",
//             imagePath:""
//         },
//         {
//             id: 3,
//             title: "Parenting Virtue Week",
//             description: "Only for parents! Weekly focus on building a parenting quality to instill positive values. E.g. Encouraging Independence, Setting Boundaries, Active Listening & many more",
//             imagePath:""
//         },
//         {
//             id: 4,
//             title: "Case Studies for Children",
//             description: "Case study-based, easy-to-understand learning inspired by Harvard studies designed to promote deeper understanding and practical application of key concepts.",
//             imagePath:""
//         },
//         {
//             id: 5,
//             title: "Reading Habit Tracker",
//             description: "Track & log daily reading minutes of your child. Improve love for reading. Reinforce consistent reading habits & reward.",
//             imagePath:""
//         },
//         {
//             id: 6,
//             title: "Build Portfolio",
//             description: "Easily record your child's extracurricular achievements across Sports, Academics, Arts & more. Platform allows to track and store milestones with photos and videos.",
//             imagePath:""
//         },
//         {
//             id: 7,
//             title: "Parenting Workshops",
//             description: "Expert-led workshops every month. Gain valuable insights & parenting strategies for parenting & child development to navigate the challenges of modern parenting.",
//             imagePath:""
//         },
//         {
//             id: 8,
//             title: "Shlok and Mudra Videos",
//             description: "Learn and recite hundreds of Shlokas and practice Mudras with simple video instructions. Enhance memory & speech, boost mental alertness, & reduce stress & anxiety.",
//             imagePath:""
//         },
//     ]
//   return (
//     <div className={`py-[4rem] ${styles.ultimateFeatureContainer}`}>
//       <h1 className={`text-center text-2xl md:text-5xl ${montserratBold.className} ${styles.ultimateFeatureText}`}>
//         Explore Ulti-Mate Features
//           </h1>

//           {/* Ultimate Features Container */}
//           <div className="w-full flex flex-row overflow-clip">
//               {
//                   ultimateFeatures.map((feature) => {
//                       return <div
//                       key={feature.id}
//                       className=" w-[20rem] bg-lime-500 flex flex-col lg:flex-row items-center p-4 m-2 rounded-lg shadow-md cursor-pointer"
//                   >
//                       <div className="w-[30%] h-20 flex items-center justify-center">
//                           <div className="relative w-full h-full rounded-lg bg-white shadow-lg overflow-hidden flex justify-between items-center">
//                               <div className='w-[40%] h-[40%] relative mx-auto'>
//                               <Image
//                                   src={feature.imagePath}
//                                   alt={feature.title}
//                                   fill
//                                   className="object-cover w-full h-full"
//                                   />
//                                   </div>
//                           </div>
//                       </div>
//                       <div className="lg:w-[70%] lg:ml-4 mt-4 lg:mt-0 text-center lg:text-left">
//                           <h2 className={`text-xl font-semibold ${montserratBold.className}`}>{feature.title}</h2>
//                           <p className={`text-sm mt-2 ${montserratRegular.className}`}>{feature.description}</p>
//                       </div>
//                   </div>
//                   })
//               }
//           </div>
//       </div>
//   )
// }

// export default UltimateFeatureSection


import { montserratBold, montserratRegular } from "@/fonts/fonts";
import styles from "./UltimateFeature.module.css";
import React from "react";
import Image from "next/image";

function UltimateFeatureSection() {
  const ultimateFeatures = [
    {
      id: 1,
      title: "Hands on Activities",
      description:
        "Age appropriate 1800 Life Skill enhancing activity videos for your child. Fun while learning basic concepts. Ensure better grades.",
      imagePath: "/images/ultimateFeature/1.png",
    },
    {
      id: 2,
      title: "Audio Stories",
      description:
        "Access a rich collection of age-appropriate 1000’s of audio stories. Spark imagination. Meaningful conversations. Socratic style questions at the end of each story.",
      imagePath:  "/images/ultimateFeature/2.png",
    },
    {
      id: 3,
      title: "Parenting Virtue Week",
      description:
        "Only for parents! Weekly focus on building a parenting quality to instill positive values. E.g. Encouraging Independence, Setting Boundaries, Active Listening & many more",
      imagePath:  "/images/ultimateFeature/3.png",
    },
    {
      id: 4,
      title: "Case Studies for Children",
      description:
        "Case study-based, easy-to-understand learning inspired by Harvard studies designed to promote deeper understanding and practical application of key concepts.",
      imagePath:  "/images/ultimateFeature/4.png",
    },
    {
      id: 5,
      title: "Reading Habit Tracker",
      description:
        "Track & log daily reading minutes of your child. Improve love for reading. Reinforce consistent reading habits & reward.",
      imagePath:  "/images/ultimateFeature/5.png",
    },
    {
      id: 6,
      title: "Build Portfolio",
      description:
        "Easily record your child's extracurricular achievements across Sports, Academics, Arts & more. Platform allows to track and store milestones with photos and videos.",
      imagePath:  "/images/ultimateFeature/6.png",
    },
    {
      id: 7,
      title: "Parenting Workshops",
      description:
        "Expert-led workshops every month. Gain valuable insights & parenting strategies for parenting & child development to navigate the challenges of modern parenting.",
      imagePath:  "/images/ultimateFeature/7.png",
    },
    {
      id: 8,
      title: "Shlok and Mudra Videos",
      description:
        "Learn and recite hundreds of Shlokas and practice Mudras with simple video instructions. Enhance memory & speech, boost mental alertness, & reduce stress & anxiety.",
      imagePath:  "/images/ultimateFeature/8.png",
    },
  ];

  // Duplicate the features array to create the infinite loop effect
  const duplicatedFeatures = [...ultimateFeatures, ...ultimateFeatures];

  return (
    <div className={`py-[4rem] ${styles.ultimateFeatureContainer}`}>
      <h1
        className={`text-center text-2xl md:text-5xl ${montserratBold.className} ${styles.ultimateFeatureText} mb-8`}
      >
        What&apos;s in the Ulti-Mate app
      </h1>

      {/* Slider Container */}
      <div className={styles.sliderContainer}>
        {duplicatedFeatures.map((feature, index) => (
          <div
            key={`${feature.id}-${index}`} // Unique key for duplicated items
            className="w-[20rem] md:w-[30rem] flex flex-col lg:flex-row items-center p-4 m-2 rounded-lg shadow-md cursor-pointer"
          >
            <div className="w-[30%] h-20 flex items-center justify-center">
              <div className="relative w-full h-full rounded-lg bg-white shadow-lg overflow-hidden flex justify-between items-center">
                <div className="w-[60%] h-[80%] relative mx-auto">
                  <Image
                    src={feature.imagePath}
                    alt={feature.title}
                    fill
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-[70%] lg:ml-4 mt-4 lg:mt-0 text-center lg:text-left">
              <h2 className={`text-xl font-semibold ${montserratBold.className}`}>
                {feature.title}
              </h2>
              <p className={`text-sm mt-2 ${montserratRegular.className}`}>
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UltimateFeatureSection;