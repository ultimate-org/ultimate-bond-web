// "use client";

// import { useState, useRef } from "react";
// import { ChevronDown, ChevronUp } from "lucide-react";

// interface Feature {
//   sf_name: string;
//   sf_description: string;
// }

// interface FeatureListProps {
//   features: Feature[];
//   defaultVisibleCount?: number;
//   maxHeight?: string; // Optional max height prop
// }

// export const FeatureListCard = ({
//   features,
//   defaultVisibleCount = 3,
//   maxHeight = "100%" // Default max height
// }: FeatureListProps) => {
//   const [showAllFeatures, setShowAllFeatures] = useState(false);
//   const featuresContainerRef = useRef<HTMLDivElement>(null);
  
//   const visibleFeatures = showAllFeatures
//     ? features
//     : features.slice(0, defaultVisibleCount);

//   return (
//     <div className="flex flex-col h-full">
//       <h2 className="text-xl font-bold mb-4">Plan Features</h2>
      
//       {/* Scrollable container with fixed height */}
//       <div
//         ref={featuresContainerRef}
//         className="overflow-y-auto pr-2" // Add padding to prevent scrollbar overlap
//         style={{ maxHeight }}
//       >
//         <ul className="space-y-3">
//           {visibleFeatures.map((feature, index) => (
//             <li key={index} className="flex items-start">
//               <div className="flex-shrink-0 h-5 w-5 text-green-500 mr-2 mt-0.5">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </div>
//               <div>
//                 <span className="font-medium">{feature.sf_name}:</span>{" "}
//                 <span className="text-gray-700">{feature.sf_description}</span>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {features.length > defaultVisibleCount && (
//         <button
//           onClick={() => setShowAllFeatures(!showAllFeatures)}
//           className="mt-3 absolute r:5 b:5 text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium"
//         >
//           {showAllFeatures ? (
//             <>
//               <ChevronUp className="h-4 w-4 mr-1" />
//               Show Less
//             </>
//           ) : (
//             <>
//               <ChevronDown className="h-4 w-4 mr-1" />
//               Show More
//             </>
//           )}
//         </button>
//       )}
//     </div>
//   );
// };


"use client";

import { useState, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import {  montserratBold, montserratRegular } from "@/fonts/fonts";

interface Feature {
  sf_name: string;
  sf_description: string;
}

interface FeatureListProps {
  features: Feature[];
  defaultVisibleCount?: number;
  maxHeight?: string; // Optional max height prop
}

export const FeatureListCard = ({ 
  features, 
  defaultVisibleCount = 3,
  maxHeight = "100%" // Default max height
}: FeatureListProps) => {
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const featuresContainerRef = useRef<HTMLDivElement>(null);
  
  const visibleFeatures = showAllFeatures 
    ? features 
    : features.slice(0, defaultVisibleCount);

  return (
    <div className="flex flex-col h-full  rounded-lg py-4 px-2">
      <h2 className="text-xl font-bold mb-4">What&apos;s included</h2>
      
      {/* Scrollable container with fixed height */}
      <div 
        ref={featuresContainerRef}
        className="overflow-y-auto pr-2 flex-grow" // Add padding to prevent scrollbar overlap
        style={{ maxHeight }}
      >
        <ul className="space-y-3">
          {visibleFeatures.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 text-green-500 mr-2 mt-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <span className={`${montserratBold.className} text-sm font-bold`}>{feature.sf_name}:</span>{" "}
                <span className={`${montserratRegular.className} text-sm`}>{feature.sf_description}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

          {features.length > defaultVisibleCount && (
               <div className="flex justify-end">
        <button
          onClick={() => setShowAllFeatures(!showAllFeatures)}
          className="mt-3 text-[#00BBFF] hover:text-[#0095cc] flex items-center text-sm font-medium self-start"
        >
          {showAllFeatures ? (
            <>
              <ChevronUp className="h-4 w-4 mr-1" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4 mr-1" />
              Show More
            </>
          )}
                  </button>
                  </div>
      )}
    </div>
  );
};