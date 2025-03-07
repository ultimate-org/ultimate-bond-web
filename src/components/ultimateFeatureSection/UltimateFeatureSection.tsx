



// // // "use client"

// // // import React from 'react'
// // // import { merienda } from "@/fonts/fonts"
// // // import {
// // //   Carousel,
// // //   CarouselContent,
// // //   CarouselItem,
// // //   CarouselNext,
// // //   CarouselPrevious,
// // // } from "@/components/ui/carousel"



// // // function UltimateFeatureSection() {
// // //   const ultimateFeatures = [
// // //     {
// // //       id: 1,
// // //       thumbnail: "/images/main-section-background.jpg",
// // //       videoPath:"/videos/dummy.mp4"
// // //     },
// // //     {
// // //       id: 2,
// // //       thumbnail: "/images/main-section-background.jpg",
// // //       videoPath:"/videos/dummy.mp4"
// // //     },
// // //     {
// // //       id: 3,
// // //       thumbnail: "/images/main-section-background.jpg",
// // //       videoPath:"/videos/dummy.mp4"
// // //     },
// // //     {
// // //       id: 4,
// // //       thumbnail: "/images/main-section-background.jpg",
// // //       videoPath:"/videos/dummy.mp4"
// // //     }
// // //   ]

// // //   return (
// // //     <div className={`bg-gradient-to-br from-slate-200 to-slate-500 py-[4rem] px-[2rem] md:px-[6rem]`}>
// // //       <h1 className={`text-center text-5xl ${merienda.className}`}>Ultimate&apos;s Feature</h1>
// // //       <div className={`  mt-[4rem]`}>
// // //       <Carousel>
// // //           <CarouselContent>
// // //           {ultimateFeatures.map((ultimateFeature) => {
// // //             return <CarouselItem key={ultimateFeature.id} className='lg:basis-1/3'>
// // //               <video autoPlay={false}>
// // //               <source src={ultimateFeature.videoPath} type="video/mp4" />
// // //       Your browser does not support the video tag.
// // //               </video>
// // //             </CarouselItem>

// // //         })}
// // //   </CarouselContent>
// // //   <CarouselPrevious />
// // //   <CarouselNext />
// // // </Carousel>
        
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // export default UltimateFeatureSection

// "use client";

// import React, { useEffect, useState } from "react";
// import { merienda } from "@/fonts/fonts";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { motion } from "framer-motion";
// import { type CarouselApi } from "@/components/ui/carousel"

// function UltimateFeatureSection() {
//   const ultimateFeatures = [
//     {
//       id: 1,
//       thumbnail: "/images/main-section-background.jpg",
//       videoPath: "/videos/dummy.mp4",
//     },
//     {
//       id: 2,
//       thumbnail: "/images/main-section-background.jpg",
//       videoPath: "/videos/dummy.mp4",
//     },
//     {
//       id: 3,
//       thumbnail: "/images/main-section-background.jpg",
//       videoPath: "/videos/dummy.mp4",
//     },
//     {
//       id: 4,
//       thumbnail: "/images/main-section-background.jpg",
//       videoPath: "/videos/dummy.mp4",
//     },
//   ];

//   const [activeIndex, setActiveIndex] = useState(1);
//   const [clickedVideo, setClickedVideo] = useState(1);
//   const [api, setApi] = React.useState<CarouselApi>()

//   // const { api } = useCarousel(); // Hook to access carousel API

//   // Handle video play/pause based on active index
//   useEffect(() => {
//     if (!api) return;

//     const handleSelect = () => {
//       const newIndex = api.selectedScrollSnap();
//       setActiveIndex(newIndex);
//     };

//     api.on("select", handleSelect);
//     return () => {
//       api.off("select", handleSelect);
//     };
//   }, [api]);

//   return (
//     <div
//       className={`bg-gradient-to-br from-slate-200 to-slate-500 py-[4rem] px-[2rem] md:px-[6rem]`}
//     >
//       <h1 className={`text-center text-5xl ${merienda.className}`}>
//         Ultimate&apos;s Feature
//       </h1>
//       <div className={`mt-[4rem]`}>
//         <Carousel
//           opts={{
//             loop: true, // Enable infinite scroll
//             align: "center", // Center the active slide
//           }}
//           className="w-full"
//           setApi={setApi}
//         >
//           <CarouselContent>
//             {ultimateFeatures.map((ultimateFeature, index) => (
//               <CarouselItem key={ultimateFeature.id} className="md:basis-1/2 lg:basis-1/3">
//                 <motion.div
//                   onClick={() => { setActiveIndex(ultimateFeature.id);  setClickedVideo(ultimateFeature.id)}}
//                   className="relative"
//                   initial={{ scale: 0.9 }}
//                   animate={{ scale: ultimateFeature.id == activeIndex ? 1.1 : 0.9 }} // Scale up the active slide
//                   transition={{ duration: 0.3 }}
//                 >
//                   <video
//                     autoPlay={ultimateFeature.id == clickedVideo} // Autoplay the active video
//                     // loop
//                     className="w-full h-full rounded-lg"
//                   >
//                     <source src={ultimateFeature.videoPath} type="video/mp4" />
//                     Your browser does not support the video tag.
//                   </video>
//                 </motion.div>
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

// export default UltimateFeatureSection;



"use client";

import React, { useEffect, useState } from "react";
import { merienda } from "@/fonts/fonts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { type CarouselApi } from "@/components/ui/carousel";

function UltimateFeatureSection() {
  const ultimateFeatures = [
    {
      id: 1,
      thumbnail: "/images/main-section-background.jpg",
      videoPath: "/videos/dummy.mp4",
    },
    {
      id: 2,
      thumbnail: "/images/main-section-background.jpg",
      videoPath: "/videos/dummy.mp4",
    },
    {
      id: 3,
      thumbnail: "/images/main-section-background.jpg",
      videoPath: "/videos/dummy.mp4",
    },
    {
      id: 4,
      thumbnail: "/images/main-section-background.jpg",
      videoPath: "/videos/dummy.mp4",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(1);
  const [clickedVideo, setClickedVideo] = useState<number | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const videoRefs = React.useRef<(HTMLVideoElement | null)[]>([]);

  // Handle video play/pause based on active index
  useEffect(() => {
    if (!api) return;
    const handleSelect = () => {
      const newIndex = api.selectedScrollSnap();
      setActiveIndex(newIndex);

      // Pause all videos except the active one
      videoRefs.current.forEach((video, index) => {
        if (video && index !== newIndex) {
          video.pause();
        }
      });
    };

    api.on("select", handleSelect);
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  // Handle video click
  const handleVideoClick = (index: number) => {
    const clickedVideoRef = videoRefs.current[index];

    if (clickedVideoRef) {
      if (clickedVideoRef.paused) {
        // If the video is paused, play it
        clickedVideoRef.play();
        setClickedVideo(index);

        // Pause all other videos
        videoRefs.current.forEach((video, i) => {
          if (video && i !== index) {
            video.pause();
          }
        });
      } else {
        // If the video is playing, pause it
        clickedVideoRef.pause();
        setClickedVideo(null); // Reset the clicked video state
      }
    }
  };

  return (
    <div
      className={`bg-gradient-to-br from-slate-200 to-slate-500 py-[4rem] px-[2rem] md:px-[6rem]`}
    >
      <h1 className={`text-center text-5xl ${merienda.className}`}>
        Ultimate&apos;s Feature
      </h1>
      <div className={`mt-[4rem]`}>
        <Carousel
          opts={{
            loop: true, // Enable infinite scroll
            align: "center", // Center the active slide
          }}
          className="w-full"
          setApi={setApi}
        >
          <CarouselContent >
            {ultimateFeatures.map((ultimateFeature) => (
              <CarouselItem key={ultimateFeature.id} className="md:basis-1/2 lg:basis-1/3 ">
                <motion.div
                  onClick={() => { handleVideoClick(ultimateFeature.id); setActiveIndex(ultimateFeature.id); }}
                  className="relative w-[80%]"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: ultimateFeature.id === activeIndex ? 1.1 : 0.9 }} // Scale up the active slide
                  transition={{ duration: 0.3 }}
                >
                  <video
                    // ref={(el: HTMLVideoElement | null) => (videoRefs.current[ultimateFeature.id - 1] = el)}
                    ref={(el: HTMLVideoElement | null) => (videoRefs.current[ultimateFeature.id] = el)}
                    autoPlay={ultimateFeature.id === clickedVideo} // Autoplay the clicked video
                    // muted
                    // loop
                    className="w-full h-full rounded-lg"
                  >
                    <source src={ultimateFeature.videoPath} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </motion.div>
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

export default UltimateFeatureSection;