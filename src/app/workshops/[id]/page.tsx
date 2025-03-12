// "use client";

// // import Image from 'next/image'
// import React, { useEffect } from 'react'

// function Workshop({params}:{params:Promise<{id: string}>}) {
//   const { id } = (params);
  
//   const getWorkshopDetails = async () => {
//     try {
//       const response = fetch(`/workshops/api/${id}`);
//     } catch (err) {
//       console.error("Something Went Wrong",err)
//     }
//   }

//   useEffect(() => {
//     getWorkshopDetails();
//   },[id])

//   return (
//     <div className="h-screen flex justify-center items-center gb-lime-500">
//       <div className='md:w-[50%] height-[50%] rounded-lg bg-gray-500'>
//         {/* <Image alt="Workshop image"></Image> */}
//       </div>
//     </div>
//   )
// }

// export default Workshop


"use client";

import React, { useEffect, useState } from 'react';

function Workshop({ params }: { params: Promise<{ id: string }> }) {
  const [id, setId] = useState<string | null>(null);

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

  const getWorkshopDetails = async () => {
    if (!id) return;

    try {
      const response = await fetch(`/workshops/api/${id}`);
      const data = await response.json();
      console.log(data); // Handle the data as needed
    } catch (err) {
      console.error("Something Went Wrong", err);
    }
  };

  useEffect(() => {
    if (id) {
      getWorkshopDetails();
    }
  }, [id]);

  return (
    <div className="h-screen flex justify-center items-center bg-lime-500">
      <div className='md:w-[50%] h-[50%] rounded-lg bg-gray-500'>
        {/* <Image alt="Workshop image"></Image> */}
      </div>
    </div>
  );
}

export default Workshop;