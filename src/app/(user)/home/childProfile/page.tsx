"use client";
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';
import { FaUserPlus } from "react-icons/fa6";
import { montserratExtraBold, montserratBold, montserratRegular } from '@/fonts/fonts';

interface Child {
    child_id: string;
    file_path: string;
      first_name: string;
      last_name: string
  }

function ChildProfile() {
    const [children, setChildren] = useState<Child[]>([]);
    const router = useRouter();
    const { toast } = useToast();
    

    const getChildrenData = async() => {
        try {
            const parentInfo = JSON.parse(localStorage.getItem('ParentInfo') || '{}');
            const parentId = parentInfo?.parent_id;
            if (!parentInfo) {
                router.replace("/signup");
                return;
            }

            const response = await fetch(`/home/childProfile/api?id=${parentId}`, {
                method: 'GET', // Use GET method
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                toast({
                    description: "Something went wrong!",
                    variant:"destructive"
                })
                return;
            }
            const childResponseData = await response.json();
            if (childResponseData.data.length > 0) {
                setChildren(childResponseData.data)
            } else {
                router.replace("/childDetails")
            }
        }catch(err){console.error(err)}
    }

    useEffect(() => {
       getChildrenData()
    },[])

  return (
      <div className='min-h-screen relative w-full p-8'>
          <div>
          <h1 className={`text-2xl font-bold mb-8 text-center md:text-left ${montserratExtraBold.className}`}>Child Accounts</h1>
          </div>
          <div className='w-full md:w-[70%] md:flex md:flex-row justify-between mx-auto'>
          {
                  children && children.length > 0 && children.map((child, i) => {
                      return <button key={i} onClick={()=>{router.push(`/home/childProfile/${child?.child_id}`)}} className='border border-1 rounded-lg px-6 py-1 flex justify-center items-center shadow-xl'>
                          <div className='w-16 h-16 rounded-full relative overflow-hidden mr-4'>
                              <Image src={child?.file_path} alt={child?.child_id} fill></Image>
                          </div>
                          <div>
                              <h2 className={`${montserratBold.className}`}>{child.first_name} {child.last_name}</h2>
                          </div>
                  </button>
              })
              }
          </div>
         {children && children.length<3 &&  <div className='absolute bottom-10 right-10 flex flex-col justify-center items-center'>
              <button onClick={()=>router.push("/childDetails")} className='p-4 justify-center items-center rounded-full bg-blue-500 mb-2'>
                    <FaUserPlus color='white' size={20}/>
              </button>
              <p className={`${montserratRegular.className} text-center`}>Add Child</p>
          </div>}
    </div>
  )
}

export default ChildProfile