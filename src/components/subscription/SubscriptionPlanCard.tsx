// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import { useState, useRef, Key } from "react";
// import { motion } from "framer-motion";
// import { Check } from "lucide-react";

// // interface Feature {
// //   sf_name: string;
// //   sf_description: string;
// // }

// // interface Currency {
// //   symbol: string;
// //   is_prefix: boolean;
// // }

// // interface PlanDetails {
// //   subscription_plan_id: number;
// //   name: string;
// //   label: string;
// //   description: string;
// //   original_cost: number;
// //   final_cost: number;
// //   per_month_cost: number;
// //   discount_percentage: number;
// //   currency: Currency;
// //   features: Feature[];
// //   kit_included: boolean;
// // }

// // interface SubscriptionPlanCardProps {
// //   planDetails: PlanDetails;
// //   setSubscriptionPlan: (plan: PlanDetails) => void;
// //   scrollHandler?: () => void;
// //   selectedSubscriptionPlan: PlanDetails | null;
// // }

// export default function SubscriptionPlanCard({
//   planDetails,
//   setSubscriptionPlan,
//   scrollHandler,
//   selectedSubscriptionPlan,
// }:any) {
//   const [isHovered, setIsHovered] = useState(false);
//   const buttonRef = useRef<HTMLButtonElement>(null);

//   const handleSubscribe = () => {
//     setSubscriptionPlan(planDetails);
//     if (scrollHandler) {
//       setTimeout(scrollHandler, 300);
//     }
//   };

//   const isPlanSelected =
//     selectedSubscriptionPlan?.subscription_plan_id ===
//     planDetails.subscription_plan_id;

//   return (
//     <div
//       className={`w-full max-w-md rounded-2xl border-2 bg-white p-4 transition-all ${
//         isPlanSelected ? "border-blue-500" : "border-blue-300"
//       } ${isHovered ? "shadow-lg" : "shadow-md"}`}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Plan Name */}
//       <h3 className="text-center text-lg font-bold text-blue-500 md:text-xl">
//         {planDetails.description}
//       </h3>

//       {/* Pricing Section */}
//       <div className="my-4">
//         {/* Final Price */}
//         <div className="text-center">
//           <span className="text-3xl font-bold text-black md:text-4xl">
//             {planDetails.currency.is_prefix
//               ? `${planDetails.currency.symbol}${(planDetails.final_cost)}`
//               : `${(planDetails.final_cost)}${planDetails.currency.symbol}`}
//           </span>
//         </div>

//         {/* Original Price and Discount */}
//         <div className="flex items-center justify-center gap-2">
//           <span className="text-sm font-semibold text-blue-500 line-through">
//             {planDetails.currency.is_prefix
//               ? `${planDetails.currency.symbol}${Math.trunc(planDetails.original_cost)}`
//               : `${Math.trunc(planDetails.original_cost)}${planDetails.currency.symbol}`}
//           </span>
//           <span className="text-md font-semibold text-red-500">
//             ({Math.trunc(planDetails.discount_percentage)}% OFF)
//           </span>
//         </div>

//         {/* Per Month Price */}
//         <p className="text-center text-sm text-black">
//           {planDetails.currency.is_prefix
//             ? `${planDetails.currency.symbol}${Math.trunc(
//                 planDetails.per_month_cost
//               )} / month`
//             : `${Math.trunc(planDetails.per_month_cost)}${
//                 planDetails.currency.symbol
//               } /month`}
//         </p>

//         {/* Inclusive Tax */}
//         <p className="text-right text-xs text-gray-700">*Inclusive of all taxes</p>
//       </div>

//       {/* Features Section */}
//       {planDetails.features.length > 0 && (
//         <div className="my-4">
//           <h4 className="mb-2 text-sm font-semibold text-gray-800">
//             Features you&apos;ll love:
//           </h4>
//           <ul className="space-y-2">
//             {planDetails.features.map((feature: { sf_name: string ; sf_description: string  }, i: Key) => (
//               <li key={i} className="flex items-start">
//                 <Check className="mr-2 h-4 w-4 flex-shrink-0 text-black" />
//                 <span className="text-sm text-gray-800">
//                   <span className="font-semibold">{feature.sf_name}:</span>{" "}
//                   <span className="font-normal">{feature.sf_description}</span>
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Select Button */}
//       <div className="mt-6 flex justify-center">
//         <motion.button
//           ref={buttonRef}
//           onClick={handleSubscribe}
//           whileTap={{ scale: 0.95 }}
//           className={`flex items-center justify-center rounded-md border px-6 py-2 text-sm font-semibold transition-colors ${
//             isPlanSelected
//               ? "border-green-500 text-green-500"
//               : "border-blue-500 text-blue-500 hover:bg-blue-50"
//           }`}
//         >
//           {isPlanSelected ? "Selected" : "Buy this Plan"}
//           {isPlanSelected && (
//             <Check className="ml-2 h-5 w-5 text-green-500" />
//           )}
//         </motion.button>
//       </div>
//     </div>
//   );
// }

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {  comicNeue, poppinsRegular, roboto } from "@/fonts/fonts";
// import { Key } from "react";
// import { Check } from "lucide-react";
import Image from "next/image";

export default function SubscriptionPlanCard({
  planDetails,
  setSubscriptionPlan,
  selectedSubscriptionPlan,
}: any) {
  const isPlanSelected =
    selectedSubscriptionPlan?.subscription_plan_id ===
    planDetails?.subscription_plan_id;

  const handleSubscribe = () => {
    setSubscriptionPlan(planDetails);
  };

  const formatPrice = (value: number) => {
    return value % 1 === 0 ? Math.trunc(value).toString() : value.toFixed(2);
  };

  return (
    <div
      className={`relative w-[100%]  rounded-xl border px-4 py-2 transition-all ${
        isPlanSelected
          ? "border-[#00BBFF] bg-[#F3FCFF] shadow-md"
          : "border-[#9C9C9C] bg-white"
      }`}
      onClick={handleSubscribe}
    >
      {/* Most Popular Badge  */}
      {planDetails?.is_most_popular && (
        <div className="absolute -top-7 left-1 h-16 w-12">
          <Image
            src="/images/popular.png" // Update with your actual image path
            alt="Most Popular"
            width={50}
            height={60}
            className="h-full w-full object-contain"
          />
        </div>
      )}
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        {/* Plan Name and Radio Button */}
        <div className="flex items-center space-x-3">
          {/* Radio Button */}
          <div
            className={`flex h-4 w-4 items-center justify-center rounded-full border ${
              isPlanSelected ? "border-[#00BBFF]" : "border-black"
            }`}
          >
            {isPlanSelected && (
              <div className="h-2 w-2 rounded-full bg-[#00BBFF]"></div>
            )}
          </div>

          <div className=" gap-2">
            <span className={`text-xs text-[#000] ${poppinsRegular.className}`}>
              {planDetails.description}
            </span>

            {/* Discount Badge */}
            <div className="flex items-center">

               {/* Original Price */}
            <div className={` ${poppinsRegular.className} text-[0.6rem] text-[#000] text-decoration-color-[#5C5C5C] line-through`}>
              {planDetails.currency.is_prefix
                ? `${planDetails.currency.symbol}${Math.trunc(
                    planDetails.original_cost
                  )}`
                : `${Math.trunc(planDetails.original_cost)}${
                    planDetails.currency.symbol
                  }`}
              </div> 

            <div className={`rounded-lg bg-[#E55050] px-1 ml-2 ${poppinsRegular.className}`}>
              <p className="text-[0.5rem] text-[#FFF]">
                - {Math.trunc(planDetails.discount_percentage)}%
              </p>
            </div>

           
              </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mt-2 sm:mt-0 sm:text-right">
          {/* Final Price */}
          <div className="flex items-baseline justify-end">
            <span className={`text-md ${roboto.className} text-black`}>
              {planDetails.currency.is_prefix
                ? `${planDetails.currency.symbol}${formatPrice(
                    planDetails.final_cost
                  )}`
                : `${formatPrice(planDetails.final_cost)}${
                    planDetails.currency.symbol
                  }`}
            </span>
            <span className={`${roboto.className} ml-1 text-xs text-black`}> /child</span>
          </div>

          {/* Per Month Price */}
          <span className={`${comicNeue.className} text-xs text-black`}>
            {planDetails.currency.is_prefix
              ? `${planDetails.currency.symbol}${Math.trunc(
                  planDetails.per_month_cost
                )}/ Mon`
              : `${Math.trunc(planDetails.per_month_cost)}${
                  planDetails.currency.symbol
                }/ Mon`}
          </span>
        </div>
      </div>      

     
    </div>
  );
}