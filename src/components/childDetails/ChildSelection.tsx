
// "use client";
// import Image from 'next/image';
// import React, { useMemo, useState } from 'react';
// import { FaCheck } from "react-icons/fa6";


// // Define the type for the avatar data
// interface Avatar {
//   avatar_id: string;
//   avatar_type: string;
//   file_path: string;
// }

// interface ChildSelectionProps {
//     avatarData: Avatar[];// Array of avatar objects passed as a prop
//     selectedChildAvatar: string,
//     setSelectedChildAvatarHandler :(type:string, avatarType:string)=> void
// }

// function ChildSelection({ avatarData, selectedChildAvatar, setSelectedChildAvatarHandler }: ChildSelectionProps) {
//   const [childType, setChildType] = useState('Boy');

//   // Memoize the filtered avatar data based on selected child type
//   const avatarToDisplay = useMemo(() => {
//     return avatarData.filter((val) => val?.avatar_type?.trim() === childType.trim());
//   }, [childType, avatarData]); // Correct dependency array

//   return (
//       <div className="w-[90%] md:w-[90%] lg:w-[70%] rounded-md overflow-hidden">
        
//       <div className="flex flex-row round">
//         <button
//                   onClick={() => { setSelectedChildAvatarHandler("",childType); setChildType('Boy')}}
//           className={`w-1/2 font-bold py-1 ${childType == "Boy" ? 'bg-blue-500':" bg-gray-100"}`}
//         >
//           Boy
//         </button>
//         <button
//           onClick={() =>{ setSelectedChildAvatarHandler("",childType); setChildType('Girl')}}
//           className={`w-1/2 font-bold py-1 ${childType == "Girl"  ? 'bg-pink-500':" bg-gray-100"}`}
//         >
//           Girl
//         </button>
//       </div>
//       <div className="grid grid-cols-4">
//         {avatarToDisplay && avatarToDisplay.map((avatar) => {
//           return (
//             <button onClick={()=>setSelectedChildAvatarHandler(avatar?.avatar_id,childType)} className="relative w-[50px] h-[50px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] rounded-full overflow-hidden m-2" key={avatar.avatar_id}>
// {selectedChildAvatar == avatar.avatar_id && (
//                      <div className="absolute inset-0 z-10 bg-black bg-opacity-50 flex items-center justify-center">
//                      <FaCheck color="green" size={24} /> 
//                    </div>
//   )}                    <Image
//                     alt={avatar.avatar_type}
//                     src={avatar.file_path}
//                     fill
//                     className="object-cover bg-gray-500"
//                     />
                
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default ChildSelection;


"use client";
import Image from 'next/image';
import React, {  useEffect, useMemo, useState } from 'react';
import { FaCheck } from "react-icons/fa6";

interface Avatar {
  avatar_id: string;
  avatar_type: string;
  file_path: string;
}

interface ChildSelectionProps {
    avatarData: Avatar[];
    selectedChildAvatar: string,
    setSelectedChildAvatarHandler: (type:string, avatarType:string, avatarUrl:string)=> void
}

function ChildSelection({ avatarData, selectedChildAvatar, setSelectedChildAvatarHandler }: ChildSelectionProps) {
  const [childType, setChildType] = useState("Boy");
  const [isClicking, setIsClicking] = useState(false);
  const [clickedButton, setClickedButton] = useState('');

  const avatarToDisplay = useMemo(() => {
     return avatarData.filter((val) => val?.avatar_type?.trim() === childType.trim());
  }, [childType, avatarData]);

  const handleButtonClick = (type: string) => {
    setChildType(type);
    setClickedButton(type);
    const defaultAvatar = avatarData.find(avatar => avatar?.avatar_type == type);
    setSelectedChildAvatarHandler(defaultAvatar?.avatar_id || "", type, defaultAvatar?.file_path || "");
    setIsClicking(true);

    
    // Reset the click state after animation completes
    setTimeout(() => {
      setIsClicking(false);
    }, 300);
  };

  useEffect(() => {
    if (avatarData) {
      const defaultAvatar = avatarData.find(avatar => avatar?.avatar_type == 'Boy');
      setSelectedChildAvatarHandler(defaultAvatar?.avatar_id || "", 'Boy', defaultAvatar?.file_path || "");
    }
  },[avatarData])

  return (
    <div className="w-[100%] md:w-[90%] lg:w-[100%] rounded-md overflow-hidden mx-auto">
      <div className="flex flex-row round">
        <button
          onClick={() => handleButtonClick('Boy')}
          className={`w-1/2 font-bold py-1 transition-all duration-300 ${
            childType === "Boy" 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-100 hover:bg-gray-200'
          } ${
            isClicking && clickedButton === 'Boy' 
              ? 'transform scale-95' 
              : ''
          }`}
        >
          Boy
        </button>
        <button
          onClick={() => handleButtonClick('Girl')}
          className={`w-1/2 font-bold py-1 transition-all duration-300 ${
            childType === "Girl" 
              ? 'bg-pink-500 text-white' 
              : 'bg-gray-100 hover:bg-gray-200'
          } ${
            isClicking && clickedButton === 'Girl' 
              ? 'transform scale-95' 
              : ''
          }`}
        >
          Girl
        </button>
      </div>
      <div className="grid grid-cols-4">
        {avatarToDisplay && avatarToDisplay.map((avatar) => {
          return (
            <button 
              onClick={() => setSelectedChildAvatarHandler(avatar?.avatar_id, childType, avatar?.file_path)} 
              className="relative w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] rounded-full overflow-hidden m-2 transition-transform duration-200 hover:scale-110 active:scale-95"
              key={avatar.avatar_id}
            >
              {selectedChildAvatar == avatar.avatar_id && (
                <div className="absolute inset-0 z-10 bg-black bg-opacity-50 flex items-center justify-center">
                  <FaCheck color="green" size={24} /> 
                </div>
              )}
              <Image
                alt={avatar?.avatar_type}
                src={avatar?.file_path}
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