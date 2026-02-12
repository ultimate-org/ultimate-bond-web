"use client";

import Image from 'next/image';
import React, { use, useEffect, useState } from 'react';

import Header from '@/components/headerSection/Header';

interface blogDetails {
  carousel_content_id: number;
  file_path: string;
  click_url: string;
}

function Page({searchParams}:{searchParams:Promise<{name?:string}>}) {
    const {name} = use(searchParams)
  const [blogDetails, setBlogDetails] = useState<blogDetails | null>(null);

  const getBlogDetails = async () => {
    if (!name) return;

    try {
      const response = await fetch(`/blogs/blog-detail/api?name=${name}`);
      if (!response.ok) {
        throw new Error("Failed to fetch blog details");
      }
      const data = await response.json();
      setBlogDetails(data?.blogData);
      
    } catch (err) {
      console.error("Something Went Wrong", err);
    }
  };

  useEffect(() => {
    if (name) {
      getBlogDetails();
    }
  }, [name]);

  return (
    <div className="min-h-screen py-[5rem] justify-center items-center">
      <Header secondaryLogo="/images/logo/Your-Parenting-Partner-Logo1.png"></Header>
      {blogDetails ? (
        <div className="w-full my-10 px-2 md:px-4">
          {/* Image Section */}
          <div className='w-[100%] md:w-[70%] h-[20rem] md:h-[30rem] relative m-auto mb-8 hover:drop-shadow-xl rounded-xl overflow-hidden'>
            <Image
              alt="blog image"
              src={blogDetails.file_path}
              className='object-fill'
              fill
              priority
            />
          </div>
          
          {/* Rich Text Content Section */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blogDetails.click_url }}
          />
        </div>
      ) : (
        <div className='h-[100vh] w-full flex justify-center items-center'>
          <h1 className='text-center'>Loading...</h1>
        </div>
      )}
    </div>
  );
}

export default Page;