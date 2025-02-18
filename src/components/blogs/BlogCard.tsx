// import Image from 'next/image'
// import React from 'react'

// type blogCard = {
//     blogImageRoute: string,
//     blogTitle:string
// }

// function BlogCard({blogImageRoute, blogTitle}:blogCard) {
//   return (
//       <div
//           className='w-1/2 h-[40vh] bg-red-500 m-8'
//       >
//           <div className='w-full h-3/4 relative'>
//               <Image src={blogImageRoute} alt={''} fill={true} ></Image>
//               </div>
//           <div>
//               <p>{blogTitle}</p>
//           </div>
          
//       </div>
//   )
// }

// export default BlogCard



import Image from 'next/image';
import React from 'react';

type blogCard = {
  blogImageRoute: string;
  blogTitle: string;
};

function BlogCard({ blogImageRoute, blogTitle }: blogCard) {
  return (
    <div className="w-1/2 sm:w-1/3 md:w-1/4 xl:w-1/5 p-4">
      <div className="relative w-full h-[40vh] bg-gray-200 rounded-lg overflow-hidden">
        <Image src={blogImageRoute} alt={blogTitle} layout="fill" objectFit="cover" />
      </div>
      <p className="mt-4 text-center font-semibold text-lg">{blogTitle}</p>
    </div>
  );
}

export default BlogCard;
