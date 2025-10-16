// "use client";

// import Image from 'next/image';
// import React, { useEffect, useState } from 'react';

// import Header from '@/components/headerSection/Header';


// interface blogDetails {
//   carousel_content_id: number;
//   file_path: string;
//   click_url: string;
// }

// function Blog({ params }: { params: Promise<{ id: string }> }) {
//   const [id, setId] = useState<string | null>(null);
//   const [blogDetails, setBlogDetails] = useState<blogDetails | null>(null);


//   useEffect(() => {
//     const resolveParams = async () => {
//       try {
//         const resolvedParams = await params;
//         setId(resolvedParams.id);
//       } catch (err) {
//         console.error("Failed to resolve params", err);
//       }
//     };

//     resolveParams();
//   }, [params]);

//   const getBlogDetails = async () => {
//     if (!id) return;

//     try {
//       const response = await fetch(`/blogs/${id}/api/`);
//       if (!response.ok) {
//         throw new Error("Failed to fetch blog details");
//       }
//       const data = await response.json();
//       setBlogDetails(data?.blogData);
//     } catch (err) {
//       console.error("Something Went Wrong", err);
//     }
//   };

//   useEffect(() => {
//     if (id) {
//       getBlogDetails();
//     }
//   }, [id]);


//   return (
//     <div className="w-full flex justify-center items-center pt-[5rem]">
//       <Header secondaryLogo="/images/logo/Your-Parenting-Partner-Logo1.png"></Header>
//       {blogDetails ? (
       
//               <div>
//                   <div className='w-[80%] h-[20rem] relative m-auto hover:drop-shadow-xl rounded-xl overflow-hidden'>
//           <Image
//             alt="blog image"
//             src={blogDetails?.file_path}
//             className='object-cover'
//             fill
//             />
//             </div>
//       </div>
//       ) : <div className='h-[100vh] w-full justify-center items-center'><h1 className='text-center'>Loading...</h1></div>}
//     </div>
//   );
// }

// export default Blog;


"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import Header from '@/components/headerSection/Header';

interface blogDetails {
  carousel_content_id: number;
  file_path: string;
  click_url: string;
}

function Blog({ params }: { params: Promise<{ id: string }> }) {
  const [id, setId] = useState<string | null>(null);
  const [blogDetails, setBlogDetails] = useState<blogDetails | null>(null);

  useEffect(() => {
    const resolveParams = async () => {
      try {
        const resolvedParams = await params;
        setId(resolvedParams.id);
      } catch (err) {
        console.error("Failed to resolve params", err);
      }
    };

    resolveParams();
  }, [params]);

  const getBlogDetails = async () => {
    if (!id) return;

    try {
      const response = await fetch(`/blogs/${id}/api/`);
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
    if (id) {
      getBlogDetails();
    }
  }, [id]);

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
          { (
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: blogDetails.click_url }}
            />
          )}
        </div>
      ) : (
        <div className='h-[100vh] w-full flex justify-center items-center'>
          <h1 className='text-center'>Loading...</h1>
        </div>
      )}
    </div>
  );
}

export default Blog;