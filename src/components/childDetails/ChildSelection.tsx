
"use client";
import Image from 'next/image';
import React, { useMemo, useState } from 'react';
import { FaCheck } from "react-icons/fa6";


// Define the type for the avatar data
interface Avatar {
  avatar_id: string;
  avatar_type: string;
  file_path: string;
}

interface ChildSelectionProps {
    avatarData: Avatar[];// Array of avatar objects passed as a prop
    selectedChildAvatar: string,
    setSelectedChildAvatarHandler :(type:string, avatarType:string)=> void
}

function ChildSelection({ avatarData, selectedChildAvatar, setSelectedChildAvatarHandler }: ChildSelectionProps) {
  const [childType, setChildType] = useState('Boy');

  // Memoize the filtered avatar data based on selected child type
  const avatarToDisplay = useMemo(() => {
    return avatarData.filter((val) => val?.avatar_type?.trim() === childType.trim());
  }, [childType, avatarData]); // Correct dependency array

  return (
      <div className="w-[90%] md:w-[90%] lg:w-[70%] rounded-md overflow-hidden">
        
      <div className="flex flex-row round">
        <button
                  onClick={() => { setSelectedChildAvatarHandler("",childType); setChildType('Boy')}}
          className={`w-1/2 font-bold py-1 ${childType == "Boy" ? 'bg-blue-500':" bg-gray-100"}`}
        >
          Boy
        </button>
        <button
          onClick={() =>{ setSelectedChildAvatarHandler("",childType); setChildType('Girl')}}
          className={`w-1/2 font-bold py-1 ${childType == "Girl"  ? 'bg-blue-500':" bg-gray-100"}`}
        >
          Girl
        </button>
      </div>
      <div className="grid grid-cols-4">
        {avatarToDisplay && avatarToDisplay.map((avatar) => {
          return (
            <button onClick={()=>setSelectedChildAvatarHandler(avatar?.avatar_id,childType)} className="relative w-[50px] h-[50px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] rounded-full overflow-hidden m-2" key={avatar.avatar_id}>
{selectedChildAvatar == avatar.avatar_id && (
                     <div className="absolute inset-0 z-10 bg-black bg-opacity-50 flex items-center justify-center">
                     <FaCheck color="green" size={24} /> 
                   </div>
  )}                    <Image
                    alt={avatar.avatar_type}
                    src={avatar.file_path}
                    fill
                    className="object-cover bg-gray-500"
                    />
                
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ChildSelection;


