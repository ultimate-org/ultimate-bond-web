// "use client";

// import {
//   AlertDialog,
//   AlertDialogContent,
//   AlertDialogHeader,
//   AlertDialogTitle,
// //   AlertDialogFooter,
// } from "@/components/ui/alert-dialog"; // Import AlertDialog components
// import { Button } from "@/components/ui/button";
// import { useState } from "react";

// interface AddChildModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onAddAnother: () => void;
// }

// export function AddChildModal({
//   isOpen,
//   onClose,
//   onAddAnother,
// }: AddChildModalProps) {
//     const [maxAllowedChildren, setMaxAllowedChildren] = useState(false);

//     const getChildrenHandler = async () => {
//         const parentInfo = (localStorage.getItem("ParentInfo"));
//         const parentId = JSON.parse(parentInfo);
//         try {
//           const response = await fetch(
//             `${BASE_URL}/parent/child/${parentId}`,
//           );
//           if (response.data.code === 200) {
//             if (response.data.data.length >= 3) {
//               setMaxAllowedChildren(true);
//             } else {
//               setMaxAllowedChildren(false);
//             }
//           }
//         } catch (err) {
//           console.error('Error in add child modal', err);
//         }
//       };

//   return (
//     <AlertDialog open={isOpen} onOpenChange={onClose}>
//       <AlertDialogContent>
//         <AlertDialogHeader>
//           <AlertDialogTitle className="text-center">
//             Want to add another child?
//           </AlertDialogTitle>
//         </AlertDialogHeader>
//               {/* <AlertDialogFooter className="flex justify-center"> */}
//               <div className="flex justify-evenly">
//           <Button variant="outline" onClick={onClose}>
//             No
//           </Button>
//                   <Button onClick={onAddAnother}>Yes</Button>
//                   </div>
//         {/* </AlertDialogFooter> */}
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

interface AddChildModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddAnother: () => void;
}


export function AddChildModal({
  isOpen,
  onClose,
  onAddAnother,
}: AddChildModalProps) {
  const [maxAllowedChildren, setMaxAllowedChildren] = useState(false);
  const  router  = useRouter();
  const { toast } = useToast();
    

  const getChildrenDataHandler = async() => {
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
          if (childResponseData.data.length >= 3) {
            setMaxAllowedChildren(true)
          } else {
            setMaxAllowedChildren(false)
          }
      }catch(err){console.error(err)}
  }

  // Fetch the number of children when the modal opens
  useEffect(() => {
      if (isOpen) {
        getChildrenDataHandler();
    }
  }, [isOpen]);

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center">
            {maxAllowedChildren
              ? "You have reached the maximum number of children allowed."
              : "Want to add another child?"}
          </AlertDialogTitle>
        </AlertDialogHeader>
       { !maxAllowedChildren ? <div className="flex justify-evenly">
          <Button variant="outline" onClick={onClose}>
            No
          </Button>
            <Button onClick={onAddAnother}>Yes</Button>
              </div>
                  :
                  <div className="flex justify-evenly">
         
            <Button onClick={()=>router.replace("/home/childProfile")}>Continue</Button>
              </div>
        }
      </AlertDialogContent>
    </AlertDialog>
  );
}