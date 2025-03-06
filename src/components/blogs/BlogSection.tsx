"use client";
import React from "react";
import { useTranslations } from "next-intl";
import BlogCard from "./BlogCard";

// Import Swiper and Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

function BlogSection() {
  const t = useTranslations("BlogSection");

  const blogTopics = [
    {
      id: 1,
      blogImageRoute: "/blogs/Trending-topic-01.jpg",
      blogTitle: "Blog Title 1",
    },
    {
      id: 2,
      blogImageRoute: "/blogs/Trending-topic-02.jpg",
      blogTitle: "Blog Title 2",
    },
    {
      id: 3,
      blogImageRoute: "/blogs/Trending-topic-03.jpg",
      blogTitle: "Blog Title 3",
    },
    {
      id: 4,
      blogImageRoute: "/blogs/Trending-topic-04.jpg",
      blogTitle: "Blog Title 4",
    },
    {
      id: 5,
      blogImageRoute: "/blogs/Trending-topic-05.jpg",
      blogTitle: "Blog Title 5",
    },
    {
      id: 6,
      blogImageRoute: "/blogs/Trending-topic-06.jpg",
      blogTitle: "Blog Title 6",
    },
    {
      id: 7,
      blogImageRoute: "/blogs/Trending-topic-07.jpg",
      blogTitle: "Blog Title 7",
    },
    {
      id: 8,
      blogImageRoute: "/blogs/Trending-topic-08.jpg",
      blogTitle: "Blog Title 8",
    },
  ];

  return (
    <div className="w-full bg-slate-200 py-10">
      <div className="bg-lime-500 py-6">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold">
          {t("Check Out The Latest Posts")}
        </h1>
      </div>
      <div className="text-center px-4 mt-6">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
          {"Keep yourself informed with our newest blog posts, the ultimate source for staying updated on vital aspects of parenting and invaluable insights. Explore the latest trends in parenting, carefully crafted and curated by experts in the field, crucial for enhancing the well-being and development of your child."}
        </p>
      </div>

      {/* For larger screens (md and up), 3 cards per row */}
      <div className="mt-8 px-4 flex flex-wrap justify-center gap-8 md:gap-4 md:flex-row">
        {blogTopics.map((blogTopic) => (
          <BlogCard
            key={blogTopic.id}
            blogImageRoute={blogTopic.blogImageRoute}
            blogTitle={blogTopic.blogTitle}
          />
        ))}
      </div>

      {/* For smaller screens, use Swiper.js for carousel */}
      <div className="mt-8 w-full md:hidden px-4">
        <Swiper
          spaceBetween={10} // Space between slides
          slidesPerView={1} // One card per view on mobile
          loop={true} // Infinite loop for carousel
          autoplay={{ delay: 3000 }} // Optional: auto-swiping every 3 seconds
        >
          {blogTopics.map((blogTopic) => (
            <SwiperSlide key={blogTopic.id}>
              <BlogCard
                blogImageRoute={blogTopic.blogImageRoute}
                blogTitle={blogTopic.blogTitle}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default BlogSection;
