// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import { useToast } from '@/hooks/use-toast';
// import { poppinsBold, poppinsRegular } from '@/fonts/fonts';

// const MySubscriptions = () => {
//   const [loading, setLoading] = useState(false);
//   const [subscriptions, setSubscriptions] = useState<any[]>([]);
//     const router = useRouter();
//     const { toast } = useToast();

//   const getUserSubscriptionsDetails = async () => {
//     try {
//       setLoading(true);
// const parentInfo = JSON.parse(localStorage.getItem('ParentInfo') || '{}');
//         const userId = parentInfo?.user_id;
//         const isLoggedIn = localStorage.getItem('isLoggedIn');
//      if (!isLoggedIn) {
//         router.push('/login');
//         return;
//       }

//       const response = await axios.get(
//         `activeSubscription/${userId}/api`,
//       );
//       if (response.data.code === 200) {
//         setSubscriptions(response.data.data);
//       }
//     } catch (err) {
//       console.error('Error while getting user subscription details', err);
//         toast({
//             description: "Something went wrong",
//             variant: "destructive",
//         });
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getUserSubscriptionsDetails();
//   }, []);

//   return (
//     <div className="min-h-screen bg-white p-4">
//       {!loading && (
//         <>
//           <h1 className={`${poppinsBold.className} text-md text-center text-gray-800 mb-4`}>
//             {subscriptions.length > 0
//               ? ("Your active plans")
//               : ("You don't have any active plans yet")}
//           </h1>

//           {subscriptions.length > 0 && (
//             <div className="space-y-4">
//               {/* Mobile Carousel */}
//               <div className="md:hidden relative">
//                 <div className="overflow-x-auto snap-x snap-mandatory scroll-smooth flex space-x-4 pb-4">
//                   {subscriptions.map((item) => (
//                     <div key={item.user_subscription_id} className="flex-shrink-0 snap-center w-[95%]">
//                       <UserSubscriptionDetailCard data={item} />
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Desktop Grid */}
//               <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
//                 {subscriptions.map((item) => (
//                   <div key={item.user_subscription_id}>
//                     <UserSubscriptionDetailCard data={item} />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </>
//       )}
      
//       {loading && (
//         <div className="flex justify-center items-center h-screen">
//           <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
//         </div>
//       )}
//     </div>
//   );
// };

// const UserSubscriptionDetailCard = ({ data }: { data: any }) => {
//     return (
//       <div className="px-4 py-6 rounded-lg border border-gray-300 w-full h-full flex flex-col justify-evenly bg-blue-50 shadow-sm">
//         <h2 className={`${poppinsBold.className} text-base text-black`}>Your Current Plan</h2>
//         <div>
//                 <p className={`${poppinsBold.className} text-sm text-blue-500 mb-1`}>
//             {data?.subscription_plan?.description}
//           </p>
//           <div className="flex justify-between items-center">
//             <p className={`${poppinsRegular.className} text-xs text-gray-500`}>Premium Plan applied to: </p>
//             <p className={`${poppinsRegular.className} text-xs text-black`}>
//               {data?.child?.first_name}
//             </p>
//           </div>
//           <p className={`${poppinsRegular.className} text-xs text-gray-500`}>
//             {data?.subscription_plan?.label} | Access to all features
//           </p>
//         </div>
//         <div className="w-1/2 mx-auto border-t border-black my-2"></div>
//         <div className="flex justify-between items-center">
//           <div>
//             <p className={`${poppinsRegular.className} text-sm text-gray-500`}>
//               Start Date:{' '}
//               {new Date(data?.start_date).toLocaleDateString('en-GB', {
//                 day: '2-digit',
//                 month: '2-digit',
//                 year: 'numeric',
//               })}
//             </p>
//             <p className={`${poppinsRegular.className} text-xs text-gray-500`}>(dd/mm/yyyy)</p>
//           </div>
//           <div>
//             <p className={`${poppinsRegular.className} text-sm text-gray-500`}>
//               End Date:{' '}
//               {new Date(data?.end_date).toLocaleDateString('en-GB', {
//                 day: '2-digit',
//                 month: '2-digit',
//                 year: 'numeric',
//               })}
//             </p>
//             <p className={`${poppinsRegular.className} text-xs text-gray-500`}>(dd/mm/yyyy)</p>
//           </div>
//         </div>
//       </div>
//     );
//   };

// export default MySubscriptions;


/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { poppinsBold, poppinsRegular } from '@/fonts/fonts';

const MySubscriptions = () => {
  const [loading, setLoading] = useState(false);
  const [subscriptions, setSubscriptions] = useState<any[]>([]);
  const router = useRouter();
  const { toast } = useToast();

  const getUserSubscriptionsDetails = async () => {
    try {
      setLoading(true);
      const parentInfo = JSON.parse(localStorage.getItem('ParentInfo') || '{}');
      const userId = parentInfo?.user_id;     
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      
      if (!isLoggedIn) {
        router.push('/login');
        return;
      }

      const response = await axios.get(
        `activeSubscription/${userId}/api`,
      );
      if (response.data.code === 200) {
        setSubscriptions(response.data.data);
      }
    } catch (err) {
      console.error('Error while getting user subscription details', err);
      toast({
        description: "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserSubscriptionsDetails();
  }, []);

  return (
    <div className="min-h-screen bg-white p-4">
      {!loading && (
        <>
          <h1 className={`${poppinsBold.className} text-md text-center text-gray-800 mb-4`}>
            {subscriptions.length > 0 
              ? ("Your active plans") 
              : ("You don't have any active plans yet")}
          </h1>

          {subscriptions.length > 0 && (
            <div className="space-y-4">
              {/* Mobile - Vertical Stack */}
              <div className="md:hidden flex flex-col space-y-4">
                {subscriptions.map((item) => (
                  <div key={item.user_subscription_id}>
                    <UserSubscriptionDetailCard data={item} />
                  </div>
                ))}
              </div>

              {/* Desktop Grid */}
              <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {subscriptions.map((item) => (
                  <div key={item.user_subscription_id}>
                    <UserSubscriptionDetailCard data={item} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
      
      {loading && (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
    </div>
  );
};

const UserSubscriptionDetailCard = ({ data }: { data: any }) => {
  return (
    <div className="px-4 py-6 rounded-lg border border-gray-300 w-full h-full flex flex-col justify-evenly bg-blue-50 shadow-sm">
      <h2 className={`${poppinsBold.className} text-base text-black`}>Your Current Plan</h2>
      <div>
        <p className={`${poppinsBold.className} text-sm text-blue-500 mb-1`}>
          {data?.subscription_plan?.description}
        </p>
        <div className="flex justify-between items-center">
          <p className={`${poppinsRegular.className} text-xs text-gray-500`}>Premium Plan applied to: </p>
          <p className={`${poppinsRegular.className} text-xs text-black`}>
            {data?.child?.first_name}
          </p>
        </div>
        <p className={`${poppinsRegular.className} text-xs text-gray-500`}>
          {data?.subscription_plan?.label} | Access to all features
        </p>
      </div>
      <div className="w-1/2 mx-auto border-t border-black my-2"></div>
      <div className="flex justify-between items-center">
        <div>
          <p className={`${poppinsRegular.className} text-sm text-gray-500`}>
            Start Date:{' '}
            {new Date(data?.start_date).toLocaleDateString('en-GB', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            })}
          </p>
          <p className={`${poppinsRegular.className} text-xs text-gray-500`}>(dd/mm/yyyy)</p>
        </div>
        <div>
          <p className={`${poppinsRegular.className} text-sm text-gray-500`}>
            End Date:{' '}
            {new Date(data?.end_date).toLocaleDateString('en-GB', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            })}
          </p>
          <p className={`${poppinsRegular.className} text-xs text-gray-500`}>(dd/mm/yyyy)</p>
        </div>
      </div>
    </div>
  );
};

export default MySubscriptions;