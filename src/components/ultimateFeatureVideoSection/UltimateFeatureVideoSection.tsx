"use client";

import React, { useEffect, useState } from "react";
import { montserratBold } from "@/fonts/fonts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import styles from "./UltimateFeatureVideo.module.css";

function UltimateFeatureVideoSection() {
  const ultimateFeatures = [
    {
      id: 1,
      title: "Parenting Virtues",
      description: "Sample Description",
      videoPath: "/videos/ultimate-feature/Parenting_virtue_feature.mp4",
    },
    {
      id: 2,
      title: "Reading Log",
      description: "Sample Description",
      videoPath: "/videos/ultimate-feature/Reading_feature.mp4",
    },
    {
      id: 3,
      title: "Create Own Activity",
      description: "Sample Description",
      videoPath: "/videos/ultimate-feature/Create_task_feature.mp4",
    },
    {
      id: 4,
      title: "Habit Up Activities",
      description: "Sample Description",
      videoPath: "/videos/ultimate-feature/Habitup_feature.mp4",
    },
    {
      id: 5,
      title: "Roots n Traditions",
      description: "Sample Description",
      videoPath: "/videos/ultimate-feature/Mudra_and_shlok_feature.mp4",
    },
    {
      id: 6,
      title: "Hands on Activities",
      description: "Sample Description",
      videoPath: "/videos/ultimate-feature/Pg_feature.mp4",
    },
    {
      id: 7,
      title: "Build Child Portfolio",
      description: "Sample Description",
      videoPath: "/videos/ultimate-feature/Portfolio_feature.mp4",
    },
    {
      id: 8,
      title: "Rewards",
      description: "Sample Description",
      videoPath: "/videos/ultimate-feature/Rewards_feature.mp4",
    },
    {
      id: 9,
      title: "Self Child Assessment",
      description: "Sample Description",
      videoPath: "/videos/ultimate-feature/Assessment_feature.mp4",
    },
    {
      id: 10,
      title: "Stories",
      description: "Sample Description",
      videoPath: "/videos/ultimate-feature/Story_feature.mp4",
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
    <div className={`py-[4rem] ${styles.ultimateFeatureContainer}`}>
      <h1 className={`text-center text-2xl md:text-5xl ${montserratBold.className} ${styles.ultimateFeatureText}`}>
        Explore Ulti-Mate Features
      </h1>
      <div className={`mt-[4rem] w-[70%] mx-auto`}>
        <Carousel
          opts={{
            // loop: true, // Enable infinite scroll
          }}
          className="w-full p-0"
          setApi={setApi}
        >
          <CarouselContent className="p-0 flex items-center h-[28rem]">
            {ultimateFeatures.map((ultimateFeature) => (
              <CarouselItem
                key={ultimateFeature.id}
                onClick={() => {
                  handleVideoClick(ultimateFeature.id);
                  setActiveIndex(ultimateFeature.id);
                }}
                className={`md:basis-1/2 lg:basis-1/3  rounded-lg p-0 overflow-hidden transition-all duration-300 ${
                  activeIndex === ultimateFeature.id ? "h-full" : "h-[85%]"
                }`}
              >
                <video
                  ref={(el: HTMLVideoElement | null) => {
                    if (el) {
                      videoRefs.current[ultimateFeature.id] = el;
                    }
                  }}
                  autoPlay={ultimateFeature.id === clickedVideo} // Autoplay the clicked video
                  className={`${activeIndex === ultimateFeature.id ? "w-[90%]" : "w-[80%]"} mx-auto h-full object-fill rounded-lg `}
                >
                  <source src={ultimateFeature.videoPath} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
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