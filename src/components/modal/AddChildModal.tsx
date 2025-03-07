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
import { useState, useEffect } from "react";

interface AddChildModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddAnother: () => void;
}

const BASE_URL = "http://192.168.29.64:8000/api"; // Replace with your actual base URL

export function AddChildModal({
  isOpen,
  onClose,
  onAddAnother,
}: AddChildModalProps) {
  const [maxAllowedChildren, setMaxAllowedChildren] = useState(false);

  const getChildrenHandler = async () => {
    const parentInfo = localStorage.getItem("ParentInfo");
    const parentId = JSON.parse(parentInfo)?.parent_id; // Ensure you're accessing the correct field
    try {
      const response = await fetch(
        `${BASE_URL}/parent/child/${parentId}`,
      );
      const data = await response.json(); // Parse the response as JSON

      if (data.code === 200) {
        if (data.data.length >= 3) {
          setMaxAllowedChildren(true);
        } else {
          setMaxAllowedChildren(false);
        }
      }
    } catch (err) {
      console.error("Error in add child modal", err);
    }
  };

  // Fetch the number of children when the modal opens
  useEffect(() => {
    if (isOpen) {
      getChildrenHandler();
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
         
            <Button onClick={onAddAnother}>Continue</Button>
              </div>
        }
      </AlertDialogContent>
    </AlertDialog>
  );
}