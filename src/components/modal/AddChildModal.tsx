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
  onAddAnother: () => void;
}

export function AddChildModal({
  isOpen,
  onAddAnother,
}: AddChildModalProps) {
  const [maxAllowedChildren, setMaxAllowedChildren] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const getChildrenDataHandler = async () => {
    try {
      const parentInfo = JSON.parse(localStorage.getItem('ParentInfo') || '{}');
      const parentId = parentInfo?.parent_id;
      if (!parentInfo) {
        router.replace("/signup");
        return;
      }

      const response = await fetch(`/home/childProfile/api?id=${parentId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        toast({
          description: "Something went wrong!",
          variant: "destructive"
        });
        return;
      }
      
      const childResponseData = await response.json();
      setMaxAllowedChildren(childResponseData.data.length >= 3);
    } catch(err) {
      console.error(err);
    }
  }

  const continueButtonHandler = async() => {
    try {
      const parentInfo = localStorage.getItem("ParentInfo");
      const parent = parentInfo ? JSON.parse(parentInfo) : null;
      const res = await fetch(`/home/subscriptionPlans/user/${parent?.parent_id}/api`);
      const response = await res.json();
      if (response.code === 200) {
          if (response.data.trail_count > 0) {
              router.replace("/home/parentProfile")
          } else {
            router.replace("/trialSubscription")
          }
      }
  } catch (err) {
      console.error("Error while getting parent details", err);
      toast({
          title: "Something Went Wrong!",
          variant: "destructive",
      });
  }
   }

  useEffect(() => {
    if (isOpen) {
      getChildrenDataHandler();
    }
  }, [isOpen]);

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[40%] mx-auto">
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
                className="w-full sm:w-auto px-6 py-3 text-sm sm:text-base"
              >
                No
              </Button>
              <Button 
                onClick={onAddAnother}
                className="w-full sm:w-auto px-6 py-3 text-sm sm:text-base"
              >
                Add Child
              </Button>
            </>
          ) : (
            <Button 
              onClick={() => continueButtonHandler()}
              className="w-full sm:w-auto px-6 py-3 text-sm sm:text-base"
            >
              Continue
            </Button>
          )}
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}