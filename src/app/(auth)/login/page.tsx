"use client";
import Image from 'next/image';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from '@/hooks/use-toast';
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from 'input-otp'; // Import the regex for digits only
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import DownloadAppModal from '@/components/modal/DownloadAppModal';

// Define the form schema using zod
const formSchema = z.object({
  phoneNumber: z.string()
    .min(10, { message: "Phone number must be 10 digits." })
    .max(10, { message: "Phone number must be 10 digits." })
    .regex(/^\d+$/, { message: "Phone number must contain only numbers." }),
  passcode: z.string()
    .length(4, { message: "Passcode must be 4 digits." })
    .regex(/^\d+$/, { message: "Passcode must contain only numbers." }),
});


type userData = {
  contact_number: string,
  password: string,
};

function Login() {
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  // Initialize the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneNumber: "",
      passcode: "",
    },
  });

  // Handle form submission
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {

      const userData: userData = {
        contact_number: values.phoneNumber.trim(),
        password: values.passcode.trim(),
      };
      const loginResponse = await fetch('/login/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      
      const loggedUserInfo = await loginResponse.json();
      
      
      if (!loginResponse.ok) {
        throw new Error(loggedUserInfo.error || "Something went wrong.");
      }
      
      
            toast({
              description: "Logged in successfuly",
            });
      
            localStorage.setItem('ParentInfo', JSON.stringify(loggedUserInfo?.userInfo?.data));
            localStorage.setItem('UserInfo', JSON.stringify(loggedUserInfo?.userInfo?.data?.user));
            localStorage.setItem('isLoggedIn', "true");
      const response = await fetch(`/login/api?id=${loggedUserInfo?.userInfo?.data?.parent_id}`)

      if (!response.ok) {
        throw new Error(loggedUserInfo.error || "Something went wrong.");

      }

      const isChildAvailable = await response.json();
      if (isChildAvailable?.data.length > 0) {
        if (loggedUserInfo?.userInfo?.data?.trail_count > 0) {
          router.replace("/home/parentProfile")
        } else {
            router.replace("/trialSubscription")
        }
      } else {
        router.replace("/childDetails")
      }

     
      
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      console.error('Failed to submit passcode:', error);
      toast({
        description: error.message,
        variant: "destructive",
      });
    }
  
    
  }

  return (
    <div className='w-[80%] my-[2rem] h-screen md:px-8 px-4 py-[2rem] mx-auto shadow-lg rounded-md bg-[#ECFCFF]'>
      {/* Main container */}
      <div className='grid md:grid-cols-2 gap-8 h-full'>
        {/* Image Section */}
        <div className='size-full hidden md:block relative rounded-md overflow-hidden'>
          <Image src={"/images/authentication/login.jpg"} alt='Login' fill className='object-fill'></Image>
        </div>

        {/* Form Section */}
        <div className="w-[90%] sm:w-[60%] m-auto md:m-0 md:w-[100%]">
          {/* Heading Container */}
          <div className="mb-8">
            <h1 className="text-center md:text-left text-2xl font-bold">Existing User, please Login!</h1>
          </div>

          {/* Form Container */}
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Phone Number Field */}
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Enter Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          maxLength={10}
                          placeholder="Phone number"
                          {...field}
                          className="border-black bg-transparent h-10"
                          onInput={(e) => {
                            // Ensure only numbers are entered
                            e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '');
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* OTP Input for Passcode */}
                <FormField
                  control={form.control}
                  name="passcode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Enter Passcode</FormLabel>
                      <FormControl>
                        <InputOTP
                          maxLength={4}
                          pattern={REGEXP_ONLY_DIGITS} // Restrict input to digits only
                          {...field}
                        >
                          <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSeparator />
                            <InputOTPSlot index={1} />
                            <InputOTPSeparator />
                            <InputOTPSlot index={2} />
                            <InputOTPSeparator />
                            <InputOTPSlot index={3} />
                          </InputOTPGroup>
                        </InputOTP>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div>
                  <p>Use default password as 1234. Reset Password on <button onClick={()=>setShowDownloadModal(true)} className='text-decoration-line:underline text-decoration-color-blue-500 text-blue-500'>app</button></p>
                </div>
                {/* Submit Button */}
                <div className='flex justify-center md:justify-start'>
                <Button type="submit">Login</Button>
                </div>
              </form>
            </Form>
            <div className='text-center md:text-left mt-6'>
              <p>New to Ulti-Mate? Please {" "}<Link className='text-blue-500' href={"/signup"}>Sign up</Link></p>
            </div>
          </div>
        </div>
      </div>
      {
        showDownloadModal && (
          <DownloadAppModal isOpen={showDownloadModal} onClose={()=>setShowDownloadModal(false)}></DownloadAppModal>
        )
      }
    </div>
  );
}

export default Login;