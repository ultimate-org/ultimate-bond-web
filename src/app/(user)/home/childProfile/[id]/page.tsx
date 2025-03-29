// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import React, { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { z } from 'zod';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Calendar } from '@/components/ui/calendar';
// import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
// import { CalendarIcon } from 'lucide-react';
// import { format } from 'date-fns';
// import { cn } from '@/lib/utils';
// import Image from 'next/image';
// import {
//     Form,
//     FormControl,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage,
// } from "@/components/ui/form";
// import { montserratExtraBold } from '@/fonts/fonts';
// import { useParams } from 'next/navigation'
// import { headers } from 'next/headers';

// // Define the schema using Zod
// const parentSchema = z.object({
//     firstname: z.string()
//     .min(1, { message: "First name is required." })
//     .regex(/^[a-zA-Z]+$/, { message: "First name must contain only letters." }),
//     lastname: z.string()
//     .min(1, { message: "Last name is required." })
//     .regex(/^[a-zA-Z]+$/, { message: "Last name must contain only letters." }),
//   gender: z.string().min(1, 'Gender is required'),
//   dateOfBirth: z.date(),
//   standard: z.string().min(1, 'Standard is required'),

// });

 
// export default function ChildProfile() {
//   const [genders, setGenders] = useState<{ label: string; value: number }[]>([]);
//   const [standards, setStandards] = useState<{ label: string; value: number }[]>([]);
//   const [profileImage, setProfileImage] = useState<string | null>(null);
//   const { id } = useParams< { id: string }>();
  

// // Initialize the form
// const form = useForm<z.infer<typeof parentSchema>>({
//     resolver: zodResolver(parentSchema),
//     defaultValues: {
//       firstname: "",
//       lastname:"",
//       gender: "",
//       dateOfBirth: new Date(),
//       standard: ""
//     },
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`/home/childProfile/${id}/api?id=${id}`);
//         const data = await response.json();
//         setGenders(data.genders);
//         setStandards(data?.standard)
//           setProfileImage(data?.parent?.profileImagePath || null); // Set profile image if available
//           form.setValue('firstname', data?.child?.firstName || "");
//           form.setValue('lastname', data?.child?.lastName || "");
//           form.setValue("gender", String(data?.child?.gender) || "");
//           form.setValue("dateOfBirth", (data?.child?.dateOfBirth) || new Date());
//           form.setValue("standard", String(data?.child?.standard) || "")
//       } catch (err) {
//         console.error('Failed to fetch child data:', err);
//       }
//     };

//     fetchData();
//   }, [form, id]);


// //   // Handle form submission
// // Handle form submission
//   async function onSubmit(values: z.infer<typeof parentSchema>) {
//     console.log(values)
//     const data = {
//       first_name: form.getValues("firstname"),
//       // last_name: lastName,
//       birth_date: form.getValues("dateOfBirth"),
//       gender_id: form.getValues("gender"),
//       standard_id: form.getValues("standard"),
//       updated_by: form.getValues("firstname"),
//     };

//     const response = await fetch(`/home/childProfile/${id}/api?id=${id}`, { method: "PUT",{headers:"Content-type":"application/json"},body:JSON.stringify(data)})
    
//     const responseData = response.json();
// console.log("RESPONSE DATAAA", responseData)
//     // if (responseData.data.code === 200) {
      
//     // }
//   }

//   // Handle profile image upload
//   const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfileImage(reader.result as string);
//         // setValue('profileImagePath', reader.result as string);
//       };
//       reader.readAsDataURL(file);
//     }
//   };



//   return (
//     <div className="min-h-screen w-full p-8">
//           <h1 className={`text-2xl font-bold mb-8 text-center md:text-left ${montserratExtraBold.className}`}>Child Profile Form</h1>
//           <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//         {/* Profile Image */}
//                   <div className="flex justify-center">
//   <div className="relative w-32 h-32 rounded-full  border-2 border-gray-300">
//                           {profileImage ? (
                              
//       <Image
//         src={profileImage}
//         alt="Profile"
//         fill
//         className="object-cover rounded-full"
//       />
//     ) : (
//       <div className="w-full h-full bg-gray-200 flex rounded-full items-center justify-center">
//         <span className="text-gray-500">No Image</span>
//       </div>
//                           )}
//                            {/* Custom "+" icon for file input */}
//   <label
//     htmlFor="file-input"
//     className="z-10 absolute bottom-0 right-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer"
//   >
//     <span className="text-white text-2xl">+</span>
//   </label>

//   {/* Hidden file input */}
//   <input
//     id="file-input"
//     type="file"
//     accept="image/*"
//     onChange={handleImageUpload}
//     className="hidden"
//   />
//   </div>

 
//                   </div>
                  
//                   <div className='flex flex-col justify-center items-center'>
//                       <h2 className='text-xl md:text-2xl'>{form.getValues("firstname")} {form.getValues("lastname")}</h2>
//                   </div>
        

//          {/* Full Name Field */}
//                           <div className='flex flex-col md:flex-row item-center justify-between'>
//                             <FormField
//                             control={form.control}
//                             name="firstname"
//                             render={({ field }) => (
//                               <FormItem className="mb-8 md:mb-0 w-[100%] md:w-[100%]">
//                                 <FormLabel>First Name</FormLabel>
//                                 <FormControl>
//                                   <Input disabled placeholder="Enter your first name" {...field} />
//                                 </FormControl>
//                                 <FormMessage />
//                               </FormItem>
//                             )}
//                           />
//                            {/* <FormField
//                             control={form.control}
//                             name="lastname"
//                             render={({ field }) => (
//                               <FormItem  className=" w-[100%] md:w-[49%]">
//                                 <FormLabel>Last Name</FormLabel>
//                                 <FormControl>
//                                   <Input placeholder="Enter your last name" {...field} />
//                                 </FormControl>
//                                 <FormMessage />
//                               </FormItem>
//                             )}
//                           /> */}
//                             </div>


//         {/* Gender */}
//         <div className='mb-8 md:mb-0'>
//                              <FormField
//                                control={form.control}
//                                name="gender"
//                                render={({ field }) => (
//                                  <FormItem>
//                                    <FormLabel>Gender</FormLabel>
//                                    <Select onValueChange={field.onChange} value={field.value}>
//                                      <FormControl>
//                                        <SelectTrigger>
//                                          <SelectValue placeholder="Select Gender" />
//                                        </SelectTrigger>
//                                      </FormControl>
//                                      <SelectContent>
//                                        {genders.map((gender) => (
//                                          <SelectItem key={gender.label} value={String(gender.value)}>
//                                            {gender.label}
//                                          </SelectItem>
//                                        ))}
//                                      </SelectContent>
//                                    </Select>
//                                    <FormMessage />
//                                  </FormItem>
//                                )}
//                              />
//                            </div>

//         {/* Date of Birth */}
//         <div className='w-full'>
//         <FormField
//           control={form.control}
//           name="dateOfBirth"
//           render={({ field }) => (
//             <FormItem className="flex flex-col">
//               <FormLabel>Date of birth</FormLabel>
//               <Popover>
//                 <PopoverTrigger asChild>
//                   <FormControl>
//                     <Button
//                       variant={"outline"}
//                       className={cn(
//                         "w-full pl-3 text-left font-normal",
//                         !field.value && "text-muted-foreground"
//                       )}
//                               >
                                
//                       {field.value ? (
//                         format(field.value, "PPP")
//                       ) : (
//                         <span>Select the date</span>
//                       )}
//                       <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
//                     </Button>
//                   </FormControl>
//                 </PopoverTrigger>
//                 <PopoverContent className="w-auto p-0" align="start">
//                   <Calendar
//                     mode="single"
//                     selected={field.value}
//                     onSelect={field.onChange}
//                     disabled={(date) =>
//                       date > new Date() || date < new Date("1900-01-01")
//                     }
//                               initialFocus
                               
//                   />
//                 </PopoverContent>
//               </Popover>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//           </div>
          
//            {/* Role */}
//        <div className='mb-8 md:mb-0'>
//                              <FormField
//                                control={form.control}
//                                name="standard"
//                                render={({ field }) => (
//                                  <FormItem>
//                                    <FormLabel>Standard/Class</FormLabel>
//                                    <Select onValueChange={field.onChange} value={field.value}>
//                                      <FormControl>
//                                        <SelectTrigger>
//                                          <SelectValue placeholder="Select Standard" />
//                                        </SelectTrigger>
//                                      </FormControl>
//                                      <SelectContent>
//                                        {standards.map((standard) => (
//                                          <SelectItem key={standard.label} value={String(standard.value)}>
//                                            {standard.label}
//                                          </SelectItem>
//                                        ))}
//                                      </SelectContent>
//                                    </Select>
//                                    <FormMessage />
//                                  </FormItem>
//                                )}
//                              />
//                            </div>

//         {/* Submit Button */}
//         <Button type="submit">Submit</Button>
//               </form>
//               </Form>
//     </div>
//   );
// }

"use client"
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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { montserratExtraBold } from '@/fonts/fonts';
import { useParams } from 'next/navigation';

// Define the schema using Zod
const parentSchema = z.object({
  firstname: z.string()
    .min(1, { message: "First name is required." })
    .regex(/^[a-zA-Z]+$/, { message: "First name must contain only letters." }),
  lastname: z.string()
    .min(1, { message: "Last name is required." })
    .regex(/^[a-zA-Z]+$/, { message: "Last name must contain only letters." }),
  gender: z.string().min(1, 'Gender is required'),
  dateOfBirth: z.date(),
  standard: z.string().min(1, 'Standard is required'),
});

export default function ChildProfile() {
  const [genders, setGenders] = useState<{ label: string; value: number }[]>([]);
  const [standards, setStandards] = useState<{ label: string; value: number }[]>([]);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const { id } = useParams<{ id: string }>();
  // const Toast = useToast();

  // Initialize the form
  const form = useForm<z.infer<typeof parentSchema>>({
    resolver: zodResolver(parentSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      gender: "",
      dateOfBirth: new Date(),
      standard: "",
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/home/childProfile/${id}/api?id=${id}`);
        const data = await response.json();
        console.log("Fetched Data:", data);

        // Set genders and standards
        setGenders(data.genders);
        setStandards(data.standard);

        // Set profile image if available
        setProfileImage(data?.child?.profileImagePath || null);

        // Set form values
        form.setValue('firstname', data?.child?.firstName || "");
        form.setValue('lastname', data?.child?.lastName || "");
        form.setValue('gender', String(data?.child?.gender) || ""); // Ensure gender is a string
        form.setValue('dateOfBirth', new Date(data?.child?.dateOfBirth) || new Date());
        form.setValue('standard', String(data?.child?.standard) || ""); // Ensure standard is a string

        // Debugging: Log the form values after setting them
        console.log("Form Values After Setting:", form.getValues());
      } catch (err) {
        console.error('Failed to fetch child data:', err);
      }
    };

    fetchData();
  }, [form, id]);

  // Handle form submission
  async function handleProfileUpdate() {

    const data = {
      first_name: form.getValues("firstname"),
      // last_name: values.lastname,

      birth_date: form.getValues("dateOfBirth"),
      gender_id: form.getValues("gender"), // Convert back to number
      standard_id: form.getValues("standard"), // Convert back to number
      updated_by: form.getValues("firstname"),
    };

    try {
      console.log("Api hit before")
      const response = await fetch(`/home/childProfile/${id}/api?id=${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log("Response Data:", response);
      const responseData = await response.json();

      if (responseData.data.code === 200) {
        
      } else {
        console.error("Update failed:", responseData);
      }
    } catch (err) {
      console.error("Error during update:", err);
    }
  }

  // Handle profile image upload
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen w-full p-8">
      <h1 className={`text-2xl font-bold mb-8 text-center md:text-left ${montserratExtraBold.className}`}>Child Profile Form</h1>
      <Form {...form}>
        <form  className="space-y-6">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative w-32 h-32 rounded-full border-2 border-gray-300">
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
                <FormItem className="mb-8 md:mb-0 w-[100%] md:w-[100%]">
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input disabled placeholder="Enter your first name" {...field} />
                  </FormControl>
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
                        <SelectItem key={gender.value} value={String(gender.value)}>
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

          {/* Standard */}
          <div className='mb-8 md:mb-0'>
            <FormField
              control={form.control}
              name="standard"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Standard/Class</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Standard" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {standards.map((standard) => (
                        <SelectItem key={standard.value} value={String(standard.value)}>
                          {standard.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Submit Button */}
          <Button onClick={handleProfileUpdate} type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}