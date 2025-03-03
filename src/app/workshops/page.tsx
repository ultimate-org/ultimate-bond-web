"use client"

import React, { useEffect, useState } from 'react'
import { useToast } from "@/hooks/use-toast"
import Image from 'next/image';
import { anton } from '@/fonts/fonts';
import Link from 'next/link';

type workshop = { workshop_id: string; cover_image_path: string; image_path: string; workshop_video_link: string; }

function Workshops() {
    const [upcomingWorkshops, setUpcomingWorkshops] = useState([]);
    const [previousWorkshops, setPreviousWorkshops] = useState([]);
  const { toast } = useToast()


  // const getUpcomingWorkshops = async () => {
  //   try {
  //     const response = await fetch('/workshops/api');
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch data');
  //     }
  //     const data = await response.json();
  //     if (data.code === 200) {
  //       const upComingWorkshopArr = data.data.map((workShop: workshop) => ({
  //         id: workShop.workshop_id + 'ws',
  //         workshop_id: workShop?.workshop_id,
  //         imageSource: 
  //            workShop?.cover_image_path,
          
  //         imagePath: 
  //            workShop?.image_path,
          
  //         workshopLink: workShop?.workshop_video_link ,
  //       }));
  //       setUpcomingWorkshops(upComingWorkshopArr);
  //     }
  //   } catch (err) {
  //     console.error('Error while getting upcoming workshops', err);
  //     toast({
  //       description: "Something went wrong.",
  //       variant: "destructive"
  //     });
  //   }
  // };
    
  //     const getPreviousWorkshops = async () => {
  //       try {
  //         const response = await axios.get(`https://ultimate-bondqa.com/api/previous-workshops`);
  //         if (response.data.code === 200) {
  //           const previousWorkshopsArr = response.data.data.map(workShop => {
  //             return {
  //               id: workShop.workshop_id + 'ws',
  //               imageSource: {
  //                 uri: workShop?.cover_image_path,
  //               },
  //               imagePath: {
  //                 uri: workShop?.image_path,
  //               },
  //               workshopLink: {uri: workShop?.workshop_video_link},
  //             };
  //           });
    
  //           setPreviousWorkshops(previousWorkshopsArr);
  //         }
  //       } catch (err) {
  //         console.log('Error while getting previous workshops', err.response);
  //         toast({
  //           description: "Something went wrong.",
  //         })
  //       }
  //     };
  
  const getWorkshops = async () => {
    try {
        const response = await fetch('/workshops/api');
        if (!response.ok) {
            throw new Error('Failed to fetch workshops');
        }
        const data = await response.json();

        if (data.upcomingWorkshops) {
            const upComingWorkshopArr = data.upcomingWorkshops.map((workShop:workshop)=> ({
                id: workShop.workshop_id,
                workshop_id: workShop.workshop_id,
                imageSource: workShop.cover_image_path,
                imagePath: workShop.image_path,
                workshopLink: workShop.workshop_video_link,
            }));
            setUpcomingWorkshops(upComingWorkshopArr);
        }

        if (data.previousWorkshops) {
            const previousWorkshopsArr = data.previousWorkshops.map((workShop:workshop) => ({
                id: workShop.workshop_id,
                imageSource: workShop.cover_image_path,
                imagePath: workShop.image_path,
                workshopLink: workShop.workshop_video_link,
            }));
            setPreviousWorkshops(previousWorkshopsArr);
        }

    } catch (err) {
        console.error('Error while getting workshops', err);
        toast({
            description: "Something went wrong.",
            variant: "destructive",
        });
    }
};

useEffect(() => {
    getWorkshops();
}, []);


  return (
      <div>
      <div className='my-8'>
        <h1 className={`text-2xl ml-8 ${anton.className}`}>Upcoming Workshops</h1>
        <div className='grid md:grid-cols-3 gap-8 my-8'>
          {upcomingWorkshops.length>0 ? upcomingWorkshops.map((workshop:{id:string, imageSource:string, imagePath: string, workshopLink: string}) => {
            return <Link href={{
              pathname: `/workshops/${workshop.id}`,          
              query: {imageRoute: workshop.imagePath} // the data
            }}
              key={workshop?.id} className='w-[80%] h-[10rem] relative m-auto hover:scale-110 hover:drop-shadow-xl'>
              <Image src={workshop?.imageSource} alt={"workshop"} className='object-contain' fill></Image>
            </Link>
          }): <div className='col-span-3'><h1 className='text-center'>No Upcoming Workshops Available</h1></div>}
        </div>
      </div>
      <div className='my-8'>
        <h1 className={`text-2xl ml-8 ${anton.className}`}>Previous Workshops</h1>
        <div className='grid md:grid-cols-3 gap-8 my-8'>
          {previousWorkshops.length>0 ? previousWorkshops.map((workshop:{id:string, imageSource:string, imagePath: string, workshopLink: string}) => {
            return <button key={workshop?.id} className='w-[80%] h-[10rem] relative m-auto'>
              <Image src={workshop?.imageSource} alt={"workshop"} className='object-cover' fill></Image>
            </button>
          }): <div className='col-span-3'><h1 className='text-center'>No Previous Workshops Available</h1></div>}
        </div>
      </div>
    </div>
  )
}

export default Workshops