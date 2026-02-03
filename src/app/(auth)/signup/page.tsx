/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from '@/hooks/use-toast';
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { sendGAEvent } from '@next/third-parties/google';
// Dynamic form schema based on country code
const getFormSchema = (countryCode: string) => {
  return z.object({
    countryCode: z.string().min(1, { message: "Country code is required." }),
    phoneNumber: z.string()
      .min(9, { message: "Phone number must be 10 digits." })
      .max(10, { message: "Phone number must be 10 digits." })
      .regex(/^\d+$/, { message: "Phone number must contain only numbers." }),
    userName: countryCode === '1' 
      ? z.string().optional() 
      : z.string().min(1, { message: "Email is required" }).email({ message: "Enter valid email address" }),
    agreeToTermsandPolices: z.boolean()
      .refine(val => val === true, { message: "You must agree to the terms and policies." })
  });
};

type CountryCode = {
  code: string;
  value: number;
};

type UserData = {
  contact_number: string;
  contact_country_code: string;
  userName?: string;
}

function SignUp() {
  const [countryCodeData, setCountryCodeData] = useState<CountryCode[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const message = [
    // {
    //   id: 1,
    //   title:"An easy, structured approach to parenting WITH PURPOSE.",
    //   description:"Research backed life skill development for kids from nursery to 7th"
    // },
    {
      id: 2,
      title:"Smart, simple parenting for Busy lives and Growing Kids. ",
      description:"Develop 21st-century skills, multiple intelligences, and build strong character from nursery through grade 7."
    },
    // {
    //   id: 3,
    //   title:"A Simple research-backed parenting syllabus to foster life skills from nursery to 7th grade.",
    //   description:"Easy-to-follow, age-appropriate, and designed to foster critical life skills."
    // }
  ]

  // Initialize with default country code '1' (US)
  const [currentCountryCode, setCurrentCountryCode] = useState('1');
  const formSchema = getFormSchema(currentCountryCode);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      countryCode: "1", // Default to US
      phoneNumber: "",
      userName: "",
      agreeToTermsandPolices: false
    },
  });

  // Watch country code changes
  const watchedCountryCode = form.watch('countryCode');

  useEffect(() => {
    if (watchedCountryCode) {
      setCurrentCountryCode(watchedCountryCode);
    }
  }, [watchedCountryCode]);

  useEffect(() => {
    const fetchCountryCodes = async () => {
      try {
        const response = await fetch('/signup/api');
        if (!response.ok) {
          throw new Error('Failed to fetch country codes');
        }
        const data = await response.json();
        const codeArr: CountryCode[] = data.data.map((val: { phone_code: string; country_id: string; short_name: string }) => ({
          code: `${val.phone_code} ${val.short_name}`,
          value: val.country_id,
        }));
        setCountryCodeData(codeArr);

        // Set default country code to US (1) if available
        const usCode = codeArr.find(code => code.value === 1);
        if (usCode) {
          form.setValue("countryCode", String(usCode.value));
        } else if (codeArr.length > 0) {
          form.setValue("countryCode", String(codeArr[0].value));
        }
      } catch (error) {
        console.error('Failed to fetch country codes:', error);
        toast({
          description: "Something went wrong.",
          variant: "destructive",
        });
      }
    };

    fetchCountryCodes();
  }, [form, toast]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const data: UserData = {
        contact_number: values.phoneNumber.trim(),
        contact_country_code: values.countryCode,
      };


      // Only include email if country code is not US (1)
      if (values.countryCode !== '1' && values.userName) {
        data.userName = values.userName.trim();
      }
      
      const response = await fetch('/signup/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Something went wrong.");
      }
      
      const signupRegistration = await response.json();
      localStorage.setItem('ParentInfo', JSON.stringify(signupRegistration?.data?.parent));
      localStorage.setItem('UserInfo', JSON.stringify(signupRegistration?.data?.user));
      localStorage.setItem('isLoggedIn', "true");
      sendGAEvent({ event: 'SignUp', value: signupRegistration?.data?.user?.user_id })
      toast({
        description: "Sign up successful!",
      });
      router.push("/childDetails");
      
    } catch (error: any) {
      console.error('Failed to submit form:', error);
      toast({
        description: error.message || "Failed to submit form",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='w-full h-screen bg-[url(/images/authentication/auth-bg.png)] bg-cover bg-center flex items-center justify-center'>
    <div className='w-[80%] my-[2rem] h-screen md:px-8 px-4 py-[2rem] mx-auto shadow-lg rounded-md '>
      <div className='grid md:grid-cols-2 gap-8  md:h-full'>
        <div className='size-full hidden md:block relative rounded-md overflow-hidden'>
          <Image src={"/images/authentication/sign-up.png"} alt='Sign up' fill className='object-contain'></Image>
        </div>

        <div className='w-[90%] sm:w-[60%] m-auto md:m-0 md:w-[100%] flex flex-col justify-center'>
          <div className="mb-4">
            <h1 className="text-center md:text-left text-2xl font-bold text-[#E4781A]">Get started with Ulti-Mate!</h1>
          </div>
          
          {
            message.map((msg) => (
              <div key={msg.id} className='mb-6'>
                <h3 className="text-center md:text-left text-lg text-white">{msg.title}</h3>
                <p className="text-center md:text-left text-sm text-white">{msg.description}</p>
              </div>
            ))
          }
          {/* <div className="mb-2">
            <h3 className="text-center md:text-left text-lg">We help you raise happy, resilient and emotionally strong children.</h3>
            <h3 className="text-center md:text-left text-lg">A one stop solution for all your parenting needs.</h3>
          </div> */}

          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className='flex flex-col w-full sm:flex-row justify-start'>
                  <div className='mb-8 md:mb-0 sm:w-[35%] md:w-[30%] md:mr-4'>
                    <FormField
                      control={form.control}
                      name="countryCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className='text-white'>Country Code</FormLabel>
                          <Select 
                            onValueChange={(value) => {
                              form.setValue('phoneNumber', ''); 
                              field.onChange(value);
                              setCurrentCountryCode(value);
                            }} 
                            value={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="border-white bg-transparent h-10 text-white">
                                <SelectValue placeholder="Country code" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {countryCodeData.map((country) => (
                                <SelectItem key={country.code} value={String(country.value)}>
                                  {country.code}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className='sm:w-[40%] md:w-[45%]'>
                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className='text-white'>Phone Number</FormLabel>
                          <FormControl>
                            <Input 
                              type="tel" 
                              maxLength={currentCountryCode == '4' ? 9 : 10} 
                              placeholder="Enter your phone number" 
                              {...field}  
                              className="border-white bg-transparent h-10 text-white"
                              onInput={(e) => {
                                e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '');
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {currentCountryCode !== '1' && (
                  <FormField
                    control={form.control}
                    name="userName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='text-white'>Email</FormLabel>
                        <FormControl>
                          <Input 
                            className="border-white bg-transparent h-10 text-white"
                            type="email"
                            placeholder="Enter your email address" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                <FormField
                  control={form.control}
                  name="agreeToTermsandPolices"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 ">
                      <FormControl>
                        <Checkbox
                          className="border-white"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormDescription className='text-white'>
                          I am 18 years or older and I agree to Ulti-Mate&apos;s{" "}
                          <Link className='text-blue-500 underline' href="/terms-and-conditions">Terms and Policies</Link>
                        </FormDescription>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <div className='flex justify-center md:justify-start'>
                  <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto bg-[#E4781A] hover:bg-[#E4781A]">
                    {isSubmitting ? "Processing..." : "Create my account"}
                  </Button>
                </div>
              </form>
            </Form>
              <div className='text-center md:text-left mt-6 flex flex-row justify-center md:justify-between items-start   '>
                  <div>
              <p className='text-white'>Already have an account? <Link className='text-blue-500 font-bold' href={"/login"}>Log in</Link></p>
              </div>
              <div className='w-[100px] h-[100px] relative '>
          <Image src={"/images/appQR/app-qr.jpeg"} alt='Sign up' fill className='object-fill'></Image>
                </div>
                </div>
          </div>
        </div>
      </div>
      </div>
      </div>
  );
}

export default SignUp;




