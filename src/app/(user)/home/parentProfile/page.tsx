/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea"


// Define the schema using Zod
const parentSchema = z.object({
    firstname: z.string()
    .min(1, { message: "First name is required." })
    .regex(/^[a-zA-Z]+$/, { message: "First name must contain only letters." }),
    lastname: z.string()
    .min(1, { message: "Last name is required." })
    .regex(/^[a-zA-Z]+$/, { message: "Last name must contain only letters." }),
  countryCode: z.string().min(1, 'Country code is required'),
  contactNumber: z.string().min(10, 'Contact number must be at least 10 digits'),
  userName: z.string().min(1, 'Username is required'),
  role: z.string().min(1, 'Role is required'),
  gender: z.string().min(1, 'Gender is required'),
  dateOfBirth: z.date(),
  religion: z.string().min(1, 'Religion is required'),
  motherTongue: z.string().min(1, 'Mother tongue is required'),
  pincode: z.string().min(6, 'Pincode must be 6 digits'),
  state: z.string().min(1, 'State is required'),
  address: z.string().min(1, 'Address is required'),
  profileImagePath: z.string().optional(),
  userId: z.string().optional(),
});

 
export default function Page() {
  const [roles, setRoles] = useState<{ label: string; value: number }[]>([]);
  const [genders, setGenders] = useState<{ label: string; value: number }[]>([]);
  const [religions, setReligions] = useState<{ label: string; value: number }[]>([]);
  const [languages, setLanguages] = useState<{ label: string; value: number }[]>([]);
  const [states, setStates] = useState<{ label: string; value: number }[]>([]);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  

// Initialize the form
const form = useForm<z.infer<typeof parentSchema>>({
    resolver: zodResolver(parentSchema),
    defaultValues: {
      firstname: "",
      lastname:"",
      countryCode: "",
      contactNumber: "",
      userName: "",
      role: "",
      gender: "",
      dateOfBirth: new Date(),
      religion: "",
      motherTongue:"",
      pincode: "",
      state: "",
      address:""
    },
  });

  // Fetch initial data (roles, genders, religions, languages, states)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/home/parentProfile/api?id=${2}`);
          const data = await response.json();
        setRoles(data.roles);
        setGenders(data.genders);
        setReligions(data.religions);
        setLanguages(data.languages);
        setStates(data.states);
          setProfileImage(data?.parent?.profileImagePath || null); // Set profile image if available
          form.setValue('firstname', data?.parent?.firstName || "");
          form.setValue('lastname', data?.parent?.lastName || "");
          form.setValue("countryCode", data?.parent?.countryCode || "");
          form.setValue("contactNumber", data?.parent?.contactNumber || "");
          form.setValue("userName", data?.parent?.userName || "");
          form.setValue("role", String(data?.parent?.role) || "");
          form.setValue("gender", String(data?.parent?.gender) || "");
          form.setValue("dateOfBirth", (data?.parent?.dateOfBirth) || new Date());
          form.setValue("religion", String(data?.parent?.religion) || "");
          form.setValue("motherTongue", String(data?.parent?.motherTongue) || "");
          form.setValue("pincode", data?.parent?.pincode || "");
          form.setValue("state", String(data?.parent?.state) || "");
          form.setValue("address", data?.parent?.address || "");
      } catch (err) {
        console.error('Failed to fetch data:', err);
      }
    };

    fetchData();
  }, [form]);


//   // Handle form submission
// Handle form submission
  function onSubmit(values: z.infer<typeof parentSchema>) {
    console.log(values)
    // Add your form submission logic here
  }

  // Handle profile image upload
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
        // setValue('profileImagePath', reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };



  return (
    <div className="min-h-screen w-full p-8">
          <h1 className="text-2xl font-bold mb-8">Parent Profile Form</h1>
          <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Profile Image */}
        {/* <div className="flex justify-center">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-gray-300">
            {profileImage ? (
              <Image
                src={profileImage}
                alt="Profile"
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">No Image</span>
              </div>
            )}
                      </div>
                      <div className="flex justify-center absolute bottom-0 right-0">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mt-4"
          />
        </div>
        </div> */}
                  
                  <div className="flex justify-center">
  <div className="relative w-32 h-32 rounded-full  border-2 border-gray-300">
                          {profileImage ? (
                              
      <Image
        src={profileImage}
        alt="Profile"
        fill
        className="object-cover rounded-full"
      />
    ) : (
      <div className="w-full h-full bg-gray-200 flex rounded-full items-center justify-center">
        <span className="text-gray-500">No Image</span>
      </div>
                          )}
                           {/* Custom "+" icon for file input */}
  <label
    htmlFor="file-input"
    className="z-10 absolute bottom-0 right-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer"
  >
    <span className="text-white text-2xl">+</span>
  </label>

  {/* Hidden file input */}
  <input
    id="file-input"
    type="file"
    accept="image/*"
    onChange={handleImageUpload}
    className="hidden"
  />
  </div>

 
</div>
        

         {/* Full Name Field */}
                          <div className='flex flex-col md:flex-row item-center justify-between'>
                            <FormField
                            control={form.control}
                            name="firstname"
                            render={({ field }) => (
                              <FormItem className="mb-8 md:mb-0 w-[100%] md:w-[49%]">
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
                              <FormItem  className=" w-[100%] md:w-[49%]">
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter your last name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                            </div>
        
        {/* Username */}
         <div className='flex flex-col md:flex-row item-center justify-between'>
                            <FormField
                            control={form.control}
                            name="userName"
                            render={({ field }) => (
                              <FormItem className="mb-8 md:mb-0 w-[100%]">
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter your first name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
        </div>

        {/* Role */}
       <div className='mb-8 md:mb-0'>
                             <FormField
                               control={form.control}
                               name="role"
                               render={({ field }) => (
                                 <FormItem>
                                   <FormLabel>Role*</FormLabel>
                                   <Select onValueChange={field.onChange} value={field.value}>
                                     <FormControl>
                                       <SelectTrigger>
                                         <SelectValue placeholder="Select Role" />
                                       </SelectTrigger>
                                     </FormControl>
                                     <SelectContent>
                                       {roles.map((role) => (
                                         <SelectItem key={role.label} value={String(role.value)}>
                                           {role.label}
                                         </SelectItem>
                                       ))}
                                     </SelectContent>
                                   </Select>
                                   <FormMessage />
                                 </FormItem>
                               )}
                             />
                           </div>

        {/* Gender */}
        <div className='mb-8 md:mb-0'>
                             <FormField
                               control={form.control}
                               name="gender"
                               render={({ field }) => (
                                 <FormItem>
                                   <FormLabel>Gender</FormLabel>
                                   <Select onValueChange={field.onChange} value={field.value}>
                                     <FormControl>
                                       <SelectTrigger>
                                         <SelectValue placeholder="Select Gender" />
                                       </SelectTrigger>
                                     </FormControl>
                                     <SelectContent>
                                       {genders.map((gender) => (
                                         <SelectItem key={gender.label} value={String(gender.value)}>
                                           {gender.label}
                                         </SelectItem>
                                       ))}
                                     </SelectContent>
                                   </Select>
                                   <FormMessage />
                                 </FormItem>
                               )}
                             />
                           </div>

        {/* Date of Birth */}
        <div className='w-full'>
        <FormField
          control={form.control}
          name="dateOfBirth"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date of birth</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                              >
                                
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Select the date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                              initialFocus
                               
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>

        {/* Religion */}
        <div className='mb-8 md:mb-0'>
                             <FormField
                               control={form.control}
                               name="religion"
                               render={({ field }) => (
                                 <FormItem>
                                   <FormLabel>Religion</FormLabel>
                                   <Select onValueChange={field.onChange} value={field.value}>
                                     <FormControl>
                                       <SelectTrigger>
                                         <SelectValue placeholder="Select Religion" />
                                       </SelectTrigger>
                                     </FormControl>
                                     <SelectContent>
                                       {religions.map((religion) => (
                                         <SelectItem key={religion.label} value={String(religion.value)}>
                                           {religion.label}
                                         </SelectItem>
                                       ))}
                                     </SelectContent>
                                   </Select>
                                   <FormMessage />
                                 </FormItem>
                               )}
                             />
                           </div>

        {/* Mother Tongue */}
        <div className='mb-8 md:mb-0'>
                             <FormField
                               control={form.control}
                               name="motherTongue"
                               render={({ field }) => (
                                 <FormItem>
                                   <FormLabel>Mother Tongue</FormLabel>
                                   <Select onValueChange={field.onChange} value={field.value}>
                                     <FormControl>
                                       <SelectTrigger>
                                         <SelectValue placeholder="Select Mother Tongue" />
                                       </SelectTrigger>
                                     </FormControl>
                                     <SelectContent>
                                       {languages.map((language) => (
                                         <SelectItem key={language.label} value={String(language.value)}>
                                           {language.label}
                                         </SelectItem>
                                       ))}
                                     </SelectContent>
                                   </Select>
                                   <FormMessage />
                                 </FormItem>
                               )}
                             />
                           </div>

        {/* Pincode */}
        <div className='flex flex-col md:flex-row item-center justify-between'>
                            <FormField
                            control={form.control}
                            name="pincode"
                            render={({ field }) => (
                              <FormItem className="mb-8 md:mb-0 w-[100%]">
                                <FormLabel>Pincode</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter Pincode" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
        </div>

        {/* State */}
        <div className='mb-8 md:mb-0'>
                             <FormField
                               control={form.control}
                               name="state"
                               render={({ field }) => (
                                 <FormItem>
                                   <FormLabel>Select State</FormLabel>
                                   <Select onValueChange={field.onChange} value={field.value}>
                                     <FormControl>
                                       <SelectTrigger>
                                         <SelectValue placeholder="Select State*" />
                                       </SelectTrigger>
                                     </FormControl>
                                     <SelectContent>
                                       {states.map((state) => (
                                         <SelectItem key={state.label} value={String(state.value)}>
                                           {state.label}
                                         </SelectItem>
                                       ))}
                                     </SelectContent>
                                   </Select>
                                   <FormMessage />
                                 </FormItem>
                               )}
                             />
                           </div>

        {/* Address */}
        <div className='mb-8 md:mb-0'>
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Please enter correct address for material kit delivery.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>

        {/* Submit Button */}
        <Button type="submit">Submit</Button>
              </form>
              </Form>
    </div>
  );
}
