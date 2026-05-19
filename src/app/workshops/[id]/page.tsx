"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/headerSection/Header';


interface WorkshopDetails {
  workshop_id: number;
  title: string;
  cover_image_path: string;
  image_path: string;
  workshop_date: string;
  workshop_time: string;
  workshop_speaker_id: string;
  meeting_link: string;
  meeting_id: string;
  // Add other properties as needed
}

function Workshop({ params }: { params: Promise<{ id: string }> }) {
  const [id, setId] = useState<string | null>(null);
  const [workshopDetails, setWorkshopDetails] = useState<WorkshopDetails | null>(null);
  const router = useRouter(); // Initialize the router
  const { toast } = useToast();


  useEffect(() => {
    const resolveParams = async () => {
      try {
        const resolvedParams = await params;
        setId(resolvedParams.id);
      } catch (err) {
        console.error("Failed to resolve params", err);
      }
    };

    resolveParams();
  }, [params]);

  const getWorkshopDetails = async () => {
    if (!id) return;

    try {
      const response = await fetch(`/workshops/${id}/api/`);
      if (!response.ok) {
        throw new Error("Failed to fetch workshop details");
      }
      const data = await response.json();
      setWorkshopDetails(data?.workshopData);
    } catch (err) {
      console.error("Something Went Wrong", err);
    }
  };

  useEffect(() => {
    if (id) {
      getWorkshopDetails();
    }
  }, [id]);

  const handleRegister = async () => {
    if (!workshopDetails) return;

    try {
      // Get user_id from local storage
      const userInfo = JSON.parse(localStorage.getItem('UserInfo') || '{}');
      const userId = userInfo?.user_id;

      // Check if the user is logged in
      if (!userId) {
        // Redirect to the signup page if the user is not logged in
        router.push('/signup');
        return;
      }

      // Prepare the request body
      const requestBody = {
        user_id: userId,
        workshop_id: workshopDetails.workshop_id,
      };

      // Call the POST API
      const response = await fetch(`/workshops/${id}/api/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const responseData = await response.json();

      if (response.ok) {
        toast({
          description: responseData.message,
        });
      } else {
        console.error('Registration failed:', responseData.error);
        toast({
          description: (responseData.error || 'Failed to register for the workshop'),
          variant:"destructive"
        });
       
      }
    } catch (error) {
      console.error('Error during registration:', error);
      toast({
        description: 'Something went wrong. Please try again.',
        variant:"destructive"
      });
      
    }
  };

  return (
    <div className="w-full flex justify-center items-center pt-[5rem]">
      <Header secondaryLogo="/images/logo/Your-Parenting-Partner-Logo1.png"></Header>
      {workshopDetails && (
        <button
          onClick={handleRegister}
          className="w-full h-[30rem] md:w-[40%] md:h-[35rem] rounded-lg bg-gray-500 relative overflow-hidden my-4"
        >
          <Image
            alt="Workshop image"
            src={workshopDetails.image_path}
            layout="fill"
            objectFit="fill"
            className="rounded-lg"
          />
        </button>
      )}
    </div>
  );
}

export default Workshop;