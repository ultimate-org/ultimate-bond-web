// "use client";

// import {
//   AlertDialog,
//   AlertDialogContent,
//   AlertDialogHeader,
//   AlertDialogTitle,
// } from "@/components/ui/alert-dialog";
// import { Button } from "@/components/ui/button";
// import { useToast } from "@/hooks/use-toast";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

// interface AddChildModalProps {
//   isOpen: boolean;
//   onAddAnother: () => void;
// }

// export function AddChildModal({
//   isOpen,
//   onAddAnother,
// }: AddChildModalProps) {
//   const [maxAllowedChildren, setMaxAllowedChildren] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();
//   const { toast } = useToast();

//   const getChildrenDataHandler = async () => {
//     try {
//       const parentInfo = JSON.parse(localStorage.getItem('ParentInfo') || '{}');
//       const parentId = parentInfo?.parent_id;
//       if (!parentInfo) {
//         router.replace("/signup");
//         return;
//       }
//       setLoading(true);
//       const response = await fetch(`/home/childProfile/api?id=${parentId}`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
      
//       if (!response.ok) {
//         toast({
//           description: "Something went wrong!",
//           variant: "destructive"
//         });
//         return;
//       }
      
//       const childResponseData = await response.json();
//       setMaxAllowedChildren(childResponseData.data.length >= 3);
//     } catch(err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   }

//   const continueButtonHandler = async() => {
//     try {
//       const parentInfo = localStorage.getItem("ParentInfo");
//       const parent = parentInfo ? JSON.parse(parentInfo) : null;
//       const res = await fetch(`/home/subscriptionPlans/user/${parent?.parent_id}/api`);
//       const response = await res.json();
//       if (response.code === 200) {
//           if (response.data.trail_count > 0) {
//               router.replace("/home/parentProfile")
//           } else {
//             router.replace("/trialSubscription")
//           }
//       }
//   } catch (err) {
//       console.error("Error while getting parent details", err);
//       toast({
//           title: "Something Went Wrong!",
//           variant: "destructive",
//       });
//   }
//    }

//   useEffect(() => {
//     if (isOpen) {
//       getChildrenDataHandler();
//     }
//   }, [isOpen]);

//   return (
//     <AlertDialog open={isOpen}>
//       <AlertDialogContent className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[40%] mx-auto">
//       {
//             loading ? <h2>Loading</h2> : <AlertDialogHeader>
          
//           <AlertDialogTitle className="text-center text-lg sm:text-xl md:text-2xl">
//             {maxAllowedChildren
//               ? "You have reached the maximum number of children allowed."
//               : "Want to add another child?"}
//           </AlertDialogTitle>
//         </AlertDialogHeader>
        
//         <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 sm:px-0">
//           {!maxAllowedChildren ? (
//             <>
//               <Button
//                 variant="outline"
//                 onClick={continueButtonHandler}
//                 className="w-full sm:w-auto px-6 py-3 text-sm sm:text-base"
//               >
//                 No
//               </Button>
//               <Button
//                 onClick={onAddAnother}
//                 className="w-full sm:w-auto px-6 py-3 text-sm sm:text-base"
//               >
//                 Add Child
//               </Button>
//             </>
//           ) : (
//             <Button
//               onClick={() => continueButtonHandler()}
//               className="w-full sm:w-auto px-6 py-3 text-sm sm:text-base"
//             >
//               Continue
//             </Button>
//           )}
//         </div>
            
//           }
//       </AlertDialogContent>
//     </AlertDialog>
//   );
// }


"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

interface AddChildModalProps {
  isOpen: boolean;
  onAddAnother: () => void;
}

export function AddChildModal({ isOpen, onAddAnother }: AddChildModalProps) {
  const [maxAllowedChildren, setMaxAllowedChildren] = useState(false);
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const getParentInfo = () => {
    try {
      const parentInfo = JSON.parse(localStorage.getItem("ParentInfo") || "{}");
      if (!parentInfo?.parent_id) {
        router.replace("/signup");
        return null;
      }
      return parentInfo;
    } catch (err) {
      console.error("Error parsing parent info:", err);
      toast({
        title: "Session Error",
        description: "Please sign in again",
        variant: "destructive",
      });
      router.replace("/signup");
      return null;
    }
  };

  const getChildrenDataHandler = async () => {
    try {
      const parentInfo = getParentInfo();
      if (!parentInfo) return;

      setLoading(true);
      const response = await fetch(
        `/home/childProfile/api?id=${parentInfo.parent_id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const { data } = await response.json();
      setMaxAllowedChildren(data.length >= 3);
    } catch (err) {
      console.error("Failed to fetch children data:", err);
      toast({
        title: "Error",
        description: "Failed to load children data",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const continueButtonHandler = async () => {
    try {
      setActionLoading(true);
      const parentInfo = getParentInfo();
      if (!parentInfo) return;

      const res = await fetch(
        `/home/subscriptionPlans/user/${parentInfo.parent_id}/api`
      );
      const response = await res.json();

      if (response.code !== 200) {
        throw new Error(response.message || "Invalid response from server");
      }

      router.replace(
        response.data.trail_count > 0
          ? "/home/parentProfile"
          : "/trialSubscription"
      );
    } catch (err) {
      console.error("Error in continue handler:", err);
      toast({
        title: "Error",
        description: "Failed to process your request",
        variant: "destructive",
      });
    } finally {
      setActionLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      getChildrenDataHandler();
    }
  }, [isOpen]);

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[40%] mx-auto">
        {loading ? (
          <div className="flex flex-col items-center justify-center gap-4 py-8">
            <Loader2 className="h-8 w-8 animate-spin" />
            <p>Loading...</p>
          </div>
        ) : (
          <>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-center text-lg sm:text-xl md:text-2xl">
                {maxAllowedChildren
                  ? "You have reached the maximum number of children allowed."
                  : "Want to add another child?"}
              </AlertDialogTitle>
            </AlertDialogHeader>

            <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 sm:px-0">
              {!maxAllowedChildren ? (
                <>
                  <Button
                    variant="outline"
                    onClick={continueButtonHandler}
                    disabled={actionLoading}
                    className="w-full sm:w-auto px-6 py-3 text-sm sm:text-base"
                  >
                    {actionLoading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : null}
                    No
                  </Button>
                  <Button
                    onClick={onAddAnother}
                    disabled={actionLoading}
                    className="w-full sm:w-auto px-6 py-3 text-sm sm:text-base"
                  >
                    {actionLoading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : null}
                    Add Child
                  </Button>
                </>
              ) : (
                <Button
                  onClick={continueButtonHandler}
                  disabled={actionLoading}
                  className="w-full sm:w-auto px-6 py-3 text-sm sm:text-base"
                >
                  {actionLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : null}
                  Continue
                </Button>
              )}
            </div>
          </>
        )}
      </AlertDialogContent>
    </AlertDialog>
  );
}