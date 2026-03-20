// "use client";

// import Image from 'next/image';
// import React, { use, useEffect, useState } from 'react';

// import Header from '@/components/headerSection/Header';

// interface blogDetails {
//   carousel_content_id: number;
//   file_path: string;
//   click_url: string;
// }

// function Page({searchParams}:{searchParams:Promise<{name?:string}>}) {
//     const {name} = use(searchParams)
//   const [blogDetails, setBlogDetails] = useState<blogDetails | null>(null);

//   const getBlogDetails = async () => {
//     if (!name) return;

//     try {
//       const response = await fetch(`/blogs/blog-detail/api?name=${name}`);
//       if (!response.ok) {
//         throw new Error("Failed to fetch blog details");
//       }
//       const data = await response.json();
//       setBlogDetails(data?.blogData);
//       console.log("Blog Details:", data?.blogData?.click_url);
      
//     } catch (err) {
//       console.error("Something Went Wrong", err);
//     }
//   };

//   useEffect(() => {
//     if (name) {
//       getBlogDetails();
//     }
//   }, [name]);

//   return (
//     <div className="min-h-screen py-[5rem] justify-center items-center">
//       <Header></Header>
//       {blogDetails ? (
//         <div className="w-full my-10 px-2 md:px-4">
//           {/* Image Section */}
//           <div className='w-[100%] md:w-[40%] h-[20rem] md:h-[30rem] relative m-auto mb-8 hover:drop-shadow-xl rounded-xl overflow-hidden'>
//             <Image
//               alt="blog image"
//               src={blogDetails.file_path}
//               className='object-fill'
//               fill
//               priority
//             />
//           </div>
          
//           {/* Rich Text Content Section */}
//           <div 
//             className="prose prose-invert prose-lg max-w-none"
//             dangerouslySetInnerHTML={{ __html: blogDetails.click_url }}
//           />
//         </div>
//       ) : (
//         <div className='h-[100vh] w-full flex justify-center items-center'>
//           <h1 className='text-center'>Loading...</h1>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Page;


// "use client";

// import Image from "next/image";
// import React, { use, useEffect, useState } from "react";
// import Header from "@/components/headerSection/Header";

// interface BlogDetails {
//   carousel_content_id: number;
//   file_path: string;
//   click_url: string;
// }

// function Page({ searchParams }: { searchParams: Promise<{ name?: string }> }) {
//   const { name } = use(searchParams);
//   const [blogDetails, setBlogDetails] = useState<BlogDetails | null>(null);

//   const getBlogDetails = async () => {
//     if (!name) return;
//     try {
//       const response = await fetch(`/blogs/blog-detail/api?name=${name}`);
//       if (!response.ok) throw new Error("Failed to fetch blog details");
//       const data = await response.json();
//       setBlogDetails(data?.blogData);
//     } catch (err) {
//       console.error("Something went wrong", err);
//     }
//   };

//   useEffect(() => {
//     if (name) getBlogDetails();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [name]);

//   return (
//     <div
//       className="min-h-screen"
//       style={{ background: "#04060f", color: "#fff" }}
//     >
//       <Header />

//       {blogDetails ? (
//         <div className="max-w-[860px] mx-auto px-[6%] pt-[120px] pb-[100px]">

//           {/* Hero image */}
//           <div className="relative w-full rounded-[20px] overflow-hidden mb-10"
//             style={{ aspectRatio: "16/9" }}>
//             <Image
//               alt={name || "Blog image"}
//               src={blogDetails.file_path}
//               className="object-cover"
//               fill
//               priority
//             />
//           </div>

//           {/* Title from URL param */}
//           {name && (
//             <h1
//               className="text-white font-black leading-[1.15] tracking-[-0.03em] mb-8"
//               style={{
//                 fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
//                 fontFamily: "'Rubik', sans-serif",
//               }}
//             >
//               {decodeURIComponent(name)}
//             </h1>
//           )}

//           {/* Rich text content — override inline styles from backend HTML */}
//           <style>{`
//             .blog-content, .blog-content * {
//               color: inherit !important;
//               background: transparent !important;
//               font-family: inherit !important;
//             }
//             .blog-content { color: #ffffff !important; }
//             .blog-content h1,
//             .blog-content h2,
//             .blog-content h3,
//             .blog-content h4,
//             .blog-content h5,
//             .blog-content h6 { color: #FF8C00 !important; font-weight: 800; line-height: 1.25; margin: 1.8rem 0 0.75rem; }
//             .blog-content h1 { font-size: clamp(1.6rem, 3vw, 2.2rem); }
//             .blog-content h2 { font-size: clamp(1.25rem, 2.5vw, 1.6rem); }
//             .blog-content h3 { font-size: 1.1rem; }
//             .blog-content p  { color: #ffffff !important; line-height: 1.85; margin: 0.9rem 0; font-weight: 300; }
//             .blog-content .lead { color: rgba(255,255,255,0.8) !important; font-size: 1.05rem; }
//             .blog-content .note { color: rgba(255,255,255,0.6) !important; }
//             .blog-content strong { color: #ffffff !important; font-weight: 600; }
//             .blog-content em    { color: #f97316 !important; font-style: italic; }
//             .blog-content a     { color: #f97316 !important; text-decoration: none; }
//             .blog-content a:hover { text-decoration: underline; }
//             .blog-content ul,
//             .blog-content ol   { color: #ffffff !important; padding-left: 1.4rem; margin: 0.75rem 0; }
//             .blog-content li   { color: #ffffff !important; margin: 0.4rem 0; line-height: 1.8; }
//             .blog-content .divider,
//             .blog-content hr   { border: none; height: 1px; background: rgba(255,255,255,0.08) !important; margin: 1.5rem 0; }
//             .blog-content main { max-width: none !important; margin: 0 !important; padding: 0 !important; background: transparent !important; }
//             .blog-content body { background: transparent !important; color: inherit !important; }
//           `}</style>
//           <div
//             className="blog-content"
//             dangerouslySetInnerHTML={{ __html: blogDetails.click_url }}
//           />
//         </div>
//       ) : (
//         <div className="h-screen w-full flex justify-center items-center">
//           <p className="text-[#9ca3af] text-[1rem] animate-pulse">
//             Loading article...
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Page;


"use client";

import Image from "next/image";
import React, { use, useEffect, useState } from "react";
import Header from "@/components/headerSection/Header";

interface BlogDetails {
  carousel_content_id: number;
  file_path: string;
  click_url: string;
}

function Page({ searchParams }: { searchParams: Promise<{ name?: string }> }) {
  const { name } = use(searchParams);
  const [blogDetails, setBlogDetails] = useState<BlogDetails | null>(null);

  const getBlogDetails = async () => {
    if (!name) return;
    try {
      const response = await fetch(`/blogs/blog-detail/api?name=${name}`);
      if (!response.ok) throw new Error("Failed to fetch blog details");
      const data = await response.json();
      setBlogDetails(data?.blogData);
    } catch (err) {
      console.error("Something went wrong", err);
    }
  };

  useEffect(() => {
    if (name) getBlogDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  return (
    <div
      className="min-h-screen relative z-[1]"
      style={{ background: "#04060f", color: "#fff" }}
    >
      <Header />

      {blogDetails ? (
        <div className="max-w-[860px] mx-auto px-[6%] pt-[120px] pb-[100px]">

          {/* Hero image */}
          <div className="relative w-full rounded-[20px] overflow-hidden mb-10"
            style={{ aspectRatio: "16/9" }}>
            <Image
              alt={name || "Blog image"}
              src={blogDetails.file_path}
              className="object-cover"
              fill
              priority
            />
          </div>

          {/* Title from URL param */}
          {/* {name && (
            <h1
              className="text-white font-black leading-[1.15] tracking-[-0.03em] mb-8"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontFamily: "'Rubik', sans-serif",
              }}
            >
              {decodeURIComponent(name)}
            </h1>
          )} */}

          {/* Rich text content — override inline styles from backend HTML */}
          <style>{`
            .blog-content, .blog-content * {
              color: inherit !important;
              background: transparent !important;
              font-family: inherit !important;
              z-index: 1;
            }
            .blog-content { color: #ffffff !important; }
            .blog-content h1,
            .blog-content h2,
            .blog-content h3,
            .blog-content h4,
            .blog-content h5,
            .blog-content h6 { color: #FF8C00 !important; font-weight: 800; line-height: 1.25; margin: 1.8rem 0 0.75rem; }
            .blog-content h1 { font-size: clamp(1.6rem, 3vw, 2.2rem); }
            .blog-content h2 { font-size: clamp(1.25rem, 2.5vw, 1.6rem); }
            .blog-content h3 { font-size: 1.1rem; }
            .blog-content p  { color: #ffffff !important; line-height: 1.85; margin: 0.9rem 0; font-weight: 300; }
            .blog-content .lead { color: rgba(255,255,255,0.8) !important; font-size: 1.05rem; }
            .blog-content .note { color: rgba(255,255,255,0.6) !important; }
            .blog-content strong { color: #ffffff !important; font-weight: 600; }
            .blog-content em    { color: #f97316 !important; font-style: italic; }
            .blog-content a     { color: #f97316 !important; text-decoration: none; }
            .blog-content a:hover { text-decoration: underline; }
            .blog-content ul,
            .blog-content ol   { color: #ffffff !important; padding-left: 1.4rem; margin: 0.75rem 0; }
            .blog-content li   { color: #ffffff !important; margin: 0.4rem 0; line-height: 1.8; }
            .blog-content .divider,
            .blog-content hr   { border: none; height: 1px; background: rgba(255,255,255,0.08) !important; margin: 1.5rem 0; }
            .blog-content main { max-width: none !important; margin: 0 !important; padding: 0 !important; background: transparent !important; }
            .blog-content body { background: transparent !important; color: inherit !important; }
          `}</style>
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: blogDetails.click_url }}
          />
        </div>
      ) : (
        <div className="h-screen w-full flex justify-center items-center">
          <p className="text-[#9ca3af] text-[1rem] animate-pulse">
            Loading article...
          </p>
        </div>
      )}
    </div>
  );
}

export default Page;
