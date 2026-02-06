// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import DownloadAppModal from "@/components/modal/DownloadAppModal";
// import { Button } from "@/components/ui/button";
// import { useToast } from "@/hooks/use-toast";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function Page() {
//     const [showappdownloadModal, setShowappdownloadModal] = useState(false);
//     const router = useRouter();
//     const { toast } = useToast();
    
//     const getParentDetail = async () => {
//         try {
//             const parentInfo = localStorage.getItem("ParentInfo");
//             const parent = parentInfo ? JSON.parse(parentInfo) : null;
//             const res = await fetch(`/home/subscriptionPlans/user/${parent?.parent_id}/api`);
//             const response = await res.json();
//             if (response.code === 200) {
//                 if (response.data.trail_count > 0) {
//                     router.replace("/home/parentProfile")
//                 }
//             }
//         } catch (err) {
//             console.error("Error while getting parent details", err);
//             toast({
//                 title: "Something Went Wrong!",
//                 variant: "destructive",
//             });
//         }
//     };


//   const handleUpgrade = () => {
//     router.replace("/home/subscriptionPlans");
//   };

//   const handleTrial = () => {
//       setShowappdownloadModal(true);
//     };
    
//     useEffect(() => {
//         const isLoggedIn = localStorage.getItem("isLoggedIn");
    
//         if (!isLoggedIn || JSON.parse(isLoggedIn) === false) {
//           // route.replace("/signup");
//           router.replace("/")
//           return;
//         }
    
//         getParentDetail();
    
//       }, [router, toast]);

//   return (
//     <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 bg-gradient-to-b from-white to-gray-100">
//       <div className="max-w-4xl w-full text-center space-y-8">
//         <div className="space-y-2">
//           <h1 className="text-xl md:text-2xl font-bold text-gray-900">
//             Choose Your Option!
//           </h1>
//         </div>

//         <div className="relative w-full h-68 md:h-96 mx-auto">
//           <Image
//             src="/images/Burger_Add.png"
//             alt="Premium options illustration"
//             fill
//             className="object-contain"
//             priority
//           />
//         </div>

//         <div className="flex flex-col md:flex-row gap-4 justify-center">
//           <Button
//             onClick={handleUpgrade}
//             className="w-full md:w-auto px-6 py-4 text-lg bg-primary hover:bg-primary/90 transition-colors"
//           >
//             Upgrade to Premium!
//           </Button>
//           <Button
//             onClick={handleTrial}
//             variant="outline"
//             className="w-full md:w-auto px-6 py-4 text-lg border-primary text-primary hover:bg-primary/10 transition-colors"
//           >
//             Start 3-Day Trial!
//           </Button>
//         </div>

//           </div>
//           {
//               showappdownloadModal && <DownloadAppModal isOpen={showappdownloadModal} onClose={() => { setShowappdownloadModal(false);  router.replace("/home/parentProfile")}}></DownloadAppModal>
//           }
//     </div>
//   );
// }


/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import DownloadAppModal from "@/components/modal/DownloadAppModal";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { sendGAEvent } from "@next/third-parties/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
    const [showappdownloadModal, setShowappdownloadModal] = useState(false);
    const router = useRouter();
    const { toast } = useToast();
    
    const getParentDetail = async () => {
        try {
            const parentInfo = localStorage.getItem("ParentInfo");
            const parent = parentInfo ? JSON.parse(parentInfo) : null;
            sendGAEvent('event', 'trial_page_viewed',{value:parent?.parent_id});
            const res = await fetch(`/home/subscriptionPlans/user/${parent?.parent_id}/api`);
            const response = await res.json();
            if (response.code === 200) {
                if (response.data.trail_count > 0) {
                    router.replace("/home/parentProfile")
                }
            }
        } catch (err) {
            console.error("Error while getting parent details", err);
            toast({
                title: "Something Went Wrong!",
                variant: "destructive",
            });
        }
    };

    const handleUpgrade = () => {
        sendGAEvent('event', 'view_plans_clicked');
        router.replace("/home/subscriptionPlans"); 
    };

    const handleTrial = async () => {
        try {
            const parentInfo = localStorage.getItem("ParentInfo");
            const parent = parentInfo ? JSON.parse(parentInfo) : null;
            sendGAEvent('event', 'start_trial_clicked',{value:parent?.parent_id});
            const response = await fetch(`/home/parentProfile/${parent?.parent_id}/api`,{method:"PUT", headers:{"Content-Type":"application/json"}});
            const res = await response.json();
            if (res.code !== 200) {
                toast({
                    title: "Something Went Wrong!",
                    variant: "destructive",
                });
                return;
            }
            sendGAEvent('event', 'trial_started',{value:parent?.parent_id});

            setShowappdownloadModal(true);
        }catch(err)
    {
                console.error("Error while starting trial", err);
                toast({
                    title: "Something Went Wrong!",
                    variant: "destructive",
                });
            }
       
    };
    
    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        

        if (!isLoggedIn || JSON.parse(isLoggedIn) === false) {
            router.replace("/")
            return;
        }
    
        getParentDetail();
    }, [router, toast]);

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 bg-gradient-to-b from-white to-gray-100">
            <div className="max-w-4xl w-full text-center space-y-4">
                <div className="space-y-2">
                    <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                        Choose Your Option!
                    </h1>
                </div>

                {/* Improved image container */}
                <div className="relative w-full aspect-video mx-auto max-h-[400px]">
                    <Image
                        src="/images/Burger_Add.png"
                        alt="Premium options illustration"
                        fill
                        className="object-contain"
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                    />
                </div>

                <div className="flex flex-col gap-4 justify-center">
                    <Button
                        onClick={handleUpgrade}
                        className="mx-auto w-[40%]  md:w-auto px-6 py-4 text-lg bg-primary hover:bg-primary/90 transition-colors"
                    >
                        See Available Plans!
                    </Button>
                    <Button
                        onClick={handleTrial}
                        variant="outline"
                        className="mx-auto w-[40%]  md:w-auto px-6 py-4 text-lg border-primary text-primary hover:bg-primary/10 transition-colors"
                    >
                        Start 3-Day Trial!
                    </Button>
                </div>
            </div>
            {showappdownloadModal && (
                <DownloadAppModal 
                    isOpen={showappdownloadModal} 
                    onClose={() => { 
                        setShowappdownloadModal(false);  
                        router.replace("/home/parentProfile");
                    }}
                />
            )}
        </div>
    );
}