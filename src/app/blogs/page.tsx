/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import Header from '@/components/headerSection/Header';
import { anton } from '@/fonts/fonts';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState, } from 'react'

type blog = { carousel_content_id: number; carousel_type_id: number, file_path: string; click_url: string; }


function Blogs() {

   const [blogs, setBlogs] = useState<blog[]>([]);
  const { toast } = useToast()

  const getBlogs = async () => {
    try {
        const response = await fetch('/blogs/api');
        if (!response.ok) {
            throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();

      if (data.blogsData) {
          console.log("BLOG DATA", data.blogsData);
        const blogArr: blog[] = data.blogsData.map((blog: any) => ({ carousel_content_id: blog?.carousel_content_id, carousel_type_id: blog?.carousel_type_id, file_path: blog?.file_path, click_url: blog?.click_url }));
      setBlogs(blogArr);}

    } catch (err) {
        console.error('Error while getting workshops', err);
        toast({
            description: "Something went wrong.",
            variant: "destructive",
        });
    }
};

  useEffect(() => {
  console.log("USE EFFECT CALLED");
    getBlogs();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);


  return (
    <div className='min-h-screen py-[5rem] '>
      <Header secondaryLogo="/images/logo/Your-Parenting-Partner-Logo1.png"></Header>
      <div className='my-10'>
        <h1 className={`text-2xl ml-8 ${anton.className}`}>Blogs</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-8 my-8'>
          {blogs.length>0 ? blogs.map((blog:blog) => {
            return <Link href={{
              pathname: `/blogs/${blog.carousel_content_id}`,          
            }}
              key={blog?.carousel_content_id} className='w-[90%] md:w-[80%] h-[15rem] md:h-[20rem] relative m-auto hover:scale-110 hover:drop-shadow-xl rounded-xl overflow-hidden'>
              <Image src={blog?.file_path} alt={"workshop"} className='object-fill' fill></Image>
              </Link> 
          }): <div className='col-span-3'><h1 className='text-center'>No Blogs Available</h1></div>}
        </div>
      </div>
      </div>
  )
}

export default Blogs