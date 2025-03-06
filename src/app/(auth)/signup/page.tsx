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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Checkbox } from '@/components/ui/checkbox';
import { FaCircleArrowLeft } from "react-icons/fa6";
import { REGEXP_ONLY_DIGITS } from 'input-otp';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Define the form schema using zod
const formSchema = z.object({
  firstname: z.string()
    .min(1, { message: "First name is required." })
    .regex(/^[a-zA-Z]+$/, { message: "First name must contain only letters." }),
    lastname: z.string()
    .min(1, { message: "Last name is required." })
    .regex(/^[a-zA-Z]+$/, { message: "Last name must contain only letters." }),
  countryCode: z.string().min(1, { message: "Country code is required." }),
  phoneNumber: z.string()
    .min(10, { message: "Phone number must be 10 digits." })
    .max(10, { message: "Phone number must be 10 digits." })
    .regex(/^\d+$/, { message: "Phone number must contain only numbers." }),
  isLegalDependent: z.boolean()
    .refine(val => val === true, { message: "You must confirm that you are 18 or older and will only add children who are your legal dependents." }),
  agreeToTermsandPolices: z.boolean()
    .refine(val => val === true, { message: "You must agree to the terms and policies." })
});

// Define the type for country codes
type CountryCode = {
  code: string;
  value: number;
};


type userData = {
  first_name: string,
  last_name:string,
  contact_number: string,
  contact_country_code: string,
  password: string
}

function SignUp() {
  const [countryCodeData, setCountryCodeData] = useState<CountryCode[]>([]);
  const [enteringPasscode, setEnteringPasscode] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [confirmPasscode, setConfirmPasscode] = useState('');
  const { toast } = useToast();
  const router = useRouter();

  // Initialize the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname:"",
      countryCode: "",
      phoneNumber: "",
      isLegalDependent: false,
      agreeToTermsandPolices: false
    },
  });

  // Fetch country codes from API
  useEffect(() => {
    const fetchCountryCodes = async () => {
      try {
        const response = await fetch('/signup/api');
        if (!response.ok) {
          throw new Error('Failed to fetch country codes');
        }
        const data = await response.json();
        const codeArr: CountryCode[] = data.data.map((val: { phone_code: string; country_id: string; }) => ({
          code: val.phone_code,
          value: val.country_id,
        }));
        setCountryCodeData(codeArr);

        // Set the default value for countryCode after fetching
        if (codeArr.length > 0) {
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

  // Handle form submission
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // Add your form submission logic here
    setEnteringPasscode(true);
    setPasscode('');
    setConfirmPasscode('')
  }

  // Handle passcode submission
  const handlePasscodeSubmit = async () => {
    if (passcode.length !== 4 || confirmPasscode.length !== 4) {
      toast({
        description: "Please enter a 4-digit passcode.",
        variant: "destructive",
      });
      return;
    }

    if (passcode !== confirmPasscode) {
      toast({
        description: "Passcodes do not match.",
        variant: "destructive",
      });
      return;
    }

    // Passcodes match, proceed with sign-up logic
   
   
    try {
      const data:userData = {
        first_name: form.getValues('firstname').trim(),
        last_name: form.getValues('lastname').trim(),
        contact_number: form.getValues('phoneNumber').trim(),
        contact_country_code: form.getValues('countryCode'),
        password: passcode,
      };
        const response = await fetch('/signup/api', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
    
        const signupRegistration = await response.json();
    
      if (!response.ok) {
          setEnteringPasscode(false)
          throw new Error(signupRegistration.error || "Something went wrong.");
        }
      localStorage.setItem('ParentInfo', JSON.stringify(signupRegistration?.data?.parent));
      localStorage.setItem('UserInfo', JSON.stringify(signupRegistration?.data?.user));
      localStorage.setItem('isLoggedIn', "true");
        router.push("/childDetails")
        toast({
          description: "Sign up successful!",
        });
        
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error:any) {
        console.error('Failed to submit passcode:', error);
        toast({
          description: error.message,
          variant: "destructive",
        });
      }
    
  };

  return (
    <div className='w-full p-8'>
      {/* Main container */}
      <div className='grid md:grid-cols-2 gap-8 md:h-screen'>
        {/* Image Section */}
        <div className='size-full hidden md:block relative'>
          <Image src={"/images/authentication/sign-up.jpeg"} alt='Sign up' fill className='object-cover'></Image>
        </div>

        {/* Form Section */}
        {!enteringPasscode ? (
          <div className="">
            {/* Heading Container */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold">Sign up to start your journey!</h1>
            </div>

            {/* Form Container */}
            <div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Full Name Field */}
                  <div className='flex md:flex-row item-center justify-between'>
                    <FormField
                    control={form.control}
                    name="firstname"
                    render={({ field }) => (
                      <FormItem className="md:w-[49%]">
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your first name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="lastname"
                    render={({ field }) => (
                      <FormItem  className="md:w-[49%]">
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your last name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                    </div>

                  {/* Country Code and Phone Number Fields */}
                  <div className='flex flex-row gap-4'>
                    <div className='w-[20%]'>
                      <FormField
                        control={form.control}
                        name="countryCode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Country Code</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger>
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
                    <div className='w-[80%]'>
                      <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input type="tel" maxLength={10} placeholder="Enter your phone number" {...field}  onInput={(e) => {
                            // Ensure only numbers are entered
                            e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '');
                          }}/>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Legal Dependent Checkbox */}
                  <FormField
                    control={form.control}
                    name="isLegalDependent"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 px-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormDescription>
                            I am 18 or older, and will only add children to my account who are under 18 and are my legal dependents
                          </FormDescription>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  {/* Agree to Terms and Policies Checkbox */}
                  <FormField
                    control={form.control}
                    name="agreeToTermsandPolices"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 px-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormDescription>
                            I agree to Ulti-mate&apos;s{" "}
                            <Link className='text-blue-500 underline' href="/terms-and-conditions">Terms and Policies</Link>
                          </FormDescription>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <Button type="submit">Continue</Button>
                </form>
              </Form>
              <div className='mt-6'>
                <p>Already have an account? <Link className='text-blue-500' href={"/login"}>Log in</Link></p>
              </div>
            </div>
          </div>
        ) : (
          // Passcode Entering
          <div>
            <div className='mb-4'>
              <FaCircleArrowLeft onClick={() => setEnteringPasscode(false)} />
            </div>
            <p>Hi {form.getValues('firstname')}! Please create your own passcode.</p>
            <div>
              {/* Passcode Input */}
              <div className='my-8'>
                <p className='my-4'>Enter Passcode</p>
                <InputOTP
                  pattern={REGEXP_ONLY_DIGITS}
                  maxLength={4}
                  value={passcode}
                  onChange={(value) => setPasscode(value)}
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
              </div>

              {/* Confirm Passcode Input */}
              <div className='my-8'>
                <p className='my-4'>Confirm Passcode</p>
                <InputOTP
                  pattern={REGEXP_ONLY_DIGITS}
                  maxLength={4}
                  value={confirmPasscode}
                  onChange={(value) => setConfirmPasscode(value)}
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
              </div>
            </div>
            <div>
              <Button
                onClick={handlePasscodeSubmit}
                // disabled={passcode.length !== 4 || confirmPasscode.length !== 4 || passcode !== confirmPasscode}
              >
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SignUp;