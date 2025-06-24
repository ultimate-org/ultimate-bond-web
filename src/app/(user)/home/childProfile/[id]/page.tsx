/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */


// "use client"
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
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { montserratExtraBold } from '@/fonts/fonts';
// import { useParams } from 'next/navigation';

// // Define the schema using Zod
// const parentSchema = z.object({
//   firstname: z.string()
//     .min(1, { message: "First name is required." })
//     .regex(/^[a-zA-Z]+$/, { message: "First name must contain only letters." }),
//   lastname: z.string()
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
//   const { id } = useParams<{ id: string }>();
//   // const Toast = useToast();

//   // Initialize the form
//   const form = useForm<z.infer<typeof parentSchema>>({
//     resolver: zodResolver(parentSchema),
//     defaultValues: {
//       firstname: "",
//       lastname: "",
//       gender: "",
//       dateOfBirth: new Date(),
//       standard: "",
//     },
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`/home/childProfile/${id}/api?id=${id}`);
//         const data = await response.json();

//         // Set genders and standards
//         setGenders(data.genders);
//         setStandards(data.standard);

//         // Set profile image if available
//         setProfileImage(data?.child?.profileImagePath || null);

//         // Set form values
//         form.setValue('firstname', data?.child?.firstName || "");
//         form.setValue('lastname', data?.child?.lastName || "");
//         form.setValue('gender', String(data?.child?.gender) || ""); // Ensure gender is a string
//         form.setValue('dateOfBirth', new Date(data?.child?.dateOfBirth) || new Date());
//         form.setValue('standard', String(data?.child?.standard) || ""); // Ensure standard is a string

//         // Debugging: Log the form values after setting them
//       } catch (err) {
//         console.error('Failed to fetch child data:', err);
//       }
//     };

//     fetchData();
//   }, [form, id]);

//   // Handle form submission
//   async function handleProfileUpdate() {

//     const data = {
//       first_name: form.getValues("firstname"),
//       // last_name: values.lastname,

//       birth_date: form.getValues("dateOfBirth"),
//       gender_id: form.getValues("gender"), // Convert back to number
//       standard_id: form.getValues("standard"), // Convert back to number
//       updated_by: form.getValues("firstname"),
//     };

//     try {
//       const response = await fetch(`/home/childProfile/${id}/api?id=${id}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       const responseData = await response.json();

//       if (responseData.data.code === 200) {
        
//       } else {
//         console.error("Update failed:", responseData);
//       }
//     } catch (err) {
//       console.error("Error during update:", err);
//     }
//   }

//   // Handle profile image upload
//   const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfileImage(reader.result as string);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="min-h-screen w-full p-8">
//       <h1 className={`text-2xl font-bold mb-8 text-center md:text-left ${montserratExtraBold.className}`}>Child Profile Form</h1>
//       <Form {...form}>
//         <form  className="space-y-6">
//           {/* Profile Image */}
//           <div className="flex justify-center">
//             <div className="relative w-32 h-32 rounded-full border-2 border-gray-300">
//               {profileImage ? (
//                 <Image
//                   src={profileImage}
//                   alt="Profile"
//                   fill
//                   className="object-cover rounded-full"
//                 />
//               ) : (
//                 <div className="w-full h-full bg-gray-200 flex rounded-full items-center justify-center">
//                   <span className="text-gray-500">No Image</span>
//                 </div>
//               )}
//               {/* Custom "+" icon for file input */}
//               <label
//                 htmlFor="file-input"
//                 className="z-10 absolute bottom-0 right-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer"
//               >
//                 <span className="text-white text-2xl">+</span>
//               </label>
//               {/* Hidden file input */}
//               <input
//                 id="file-input"
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageUpload}
//                 className="hidden"
//               />
//             </div>
//           </div>

//           {/* Full Name Field */}
//           <div className='flex flex-col md:flex-row item-center justify-between'>
//             <FormField
//               control={form.control}
//               name="firstname"
//               render={({ field }) => (
//                 <FormItem className="mb-8 md:mb-0 w-[100%] md:w-[100%]">
//                   <FormLabel>First Name</FormLabel>
//                   <FormControl>
//                     <Input disabled placeholder="Enter your first name" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>

//           {/* Gender */}
//           <div className='mb-8 md:mb-0'>
//             <FormField
//               control={form.control}
//               name="gender"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Gender</FormLabel>
//                   <Select onValueChange={field.onChange} value={field.value}>
//                     <FormControl>
//                       <SelectTrigger>
//                         <SelectValue placeholder="Select Gender" />
//                       </SelectTrigger>
//                     </FormControl>
//                     <SelectContent>
//                       {genders.map((gender) => (
//                         <SelectItem key={gender.value} value={String(gender.value)}>
//                           {gender.label}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>

//           {/* Date of Birth */}
//           <div className='w-full'>
//             <FormField
//               control={form.control}
//               name="dateOfBirth"
//               render={({ field }) => (
//                 <FormItem className="flex flex-col">
//                   <FormLabel>Date of birth</FormLabel>
//                   <Popover>
//                     <PopoverTrigger asChild>
//                       <FormControl>
//                         <Button
//                           variant={"outline"}
//                           className={cn(
//                             "w-full pl-3 text-left font-normal",
//                             !field.value && "text-muted-foreground"
//                           )}
//                         >
//                           {field.value ? (
//                             format(field.value, "PPP")
//                           ) : (
//                             <span>Select the date</span>
//                           )}
//                           <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
//                         </Button>
//                       </FormControl>
//                     </PopoverTrigger>
//                     <PopoverContent className="w-auto p-0" align="start">
//                       <Calendar
//                         mode="single"
//                         selected={field.value}
//                         onSelect={field.onChange}
//                         disabled={(date) =>
//                           date > new Date() || date < new Date("1900-01-01")
//                         }
//                         initialFocus
//                       />
//                     </PopoverContent>
//                   </Popover>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>

//           {/* Standard */}
//           <div className='mb-8 md:mb-0'>
//             <FormField
//               control={form.control}
//               name="standard"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Standard/Class</FormLabel>
//                   <Select onValueChange={field.onChange} value={field.value}>
//                     <FormControl>
//                       <SelectTrigger>
//                         <SelectValue placeholder="Select Standard" />
//                       </SelectTrigger>
//                     </FormControl>
//                     <SelectContent>
//                       {standards.map((standard) => (
//                         <SelectItem key={standard.value} value={String(standard.value)}>
//                           {standard.label}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>

//           {/* Submit Button */}
//           <Button onClick={handleProfileUpdate} type="submit">Submit</Button>
//         </form>
//       </Form>
//     </div>
//   );
// }

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
import { CalendarIcon, Download } from 'lucide-react';
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
import { useParams } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import DownloadAppStrip from '@/components/downloadAppStrip/DownloadAppStrip';

// Define the schema using Zod
const childSchema = z.object({
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
  const [loading, setLoading] = useState(false);
  const [completionPercentage, setCompletionPercentage] = useState(0);
  const [pendingFields, setPendingFields] = useState(0);
  const [childUserId, setChildUserId] = useState('');
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();

  // Initialize the form
  const form = useForm<z.infer<typeof childSchema>>({
    resolver: zodResolver(childSchema),
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
        setLoading(true);
        const response = await fetch(`/home/childProfile/${id}/api?id=${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch child data');
        }
        
        const data = await response.json();

        // Set dropdown options
        setGenders(data.genders || []);
        setStandards(data.standard || []);
        // Set profile image if available
        setProfileImage(data?.child?.profileImagePath || null);
        setChildUserId(data?.child?.userId || '');
        // Set form values
        form.reset({
          firstname: data?.child?.firstName || "",
          lastname: data?.child?.lastName || "",
          gender: String(data?.child?.gender) || "",
          dateOfBirth: data?.child?.dateOfBirth ? new Date(data.child.dateOfBirth) : new Date(),
          standard: String(data?.child?.standard) || "",
        });

        calculateCompletion({
          ...data.child,
          gender: String(data.child.gender),
          standard: String(data.child.standard),
        });

      } catch (err) {
        console.error('Failed to fetch child data:', err);
        toast({
          title: "Error",
          description: "Failed to load child profile",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [form, id, toast]);


  const calculateCompletion = (values: any) => {
    const fields = [
      { name: 'firstname', value: values.firstName },
      { name: 'lastname', value: values.lastName },
      { name: 'gender', value: values.gender },
      { name: 'dateOfBirth', value: values.dateOfBirth },
      { name: 'standard', value: values.standard },
    ];

    const filledFieldsCount = fields.filter(
      field => field.value && field.value !== ''
    ).length;
    const totalFields = fields.length;
    const percentage = Math.round((filledFieldsCount / totalFields) * 100);
    
    setCompletionPercentage(percentage);
    setPendingFields(totalFields - filledFieldsCount);
  };

  // Handle form submission
  const handleProfileUpdate = async () => {
    try {
      setLoading(true);
      const values = form.getValues();
      
      const data = {
        first_name: values.firstname,
        last_name: values.lastname,
        birth_date: values.dateOfBirth.toISOString(),
        gender_id: Number(values.gender),
        standard_id: Number(values.standard),
        updated_by: values.firstname,
      };

      const response = await fetch(`/home/childProfile/${id}/api?id=${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      const responseData = await response.json();
      
      toast({
        title: "Success",
        description: "Profile updated successfully",
      });
      calculateCompletion(values);
    } catch (err) {
      console.error("Error during update:", err);
      toast({
        title: "Error",
        description: "Failed to update profile",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Handle profile image upload
  // const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];
  //   if (!file) return;

  //   try {
  //     setLoading(true);
  //     // Create FormData
  //     const formData = new FormData();
  //     formData.append('file', file);
  //     formData.append('child_id', id);

  //     const response = await fetch('/home/childProfile/profileImage/api', {
  //       method: 'POST',
  //       body: formData,
  //     });

  //     if (!response.ok) {
  //       throw new Error('Failed to upload image');
  //     }

  //     const data = await response.json();
  //     setProfileImage(data.profileImagePath);
      
  //     toast({
  //       title: "Success",
  //       description: "Profile image updated successfully",
  //     });
  //   } catch (err) {
  //     console.error("Error uploading image:", err);
  //     toast({
  //       title: "Error",
  //       description: "Failed to upload profile image",
  //       variant: "destructive",
  //     });
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setLoading(true);
      const parentInfo = JSON.parse(localStorage.getItem('ParentInfo') || '{}');
      const parentId = parentInfo?.parent_id;
      // const userId = parentInfo?.user_id;
      const userId = childUserId;
      const createdBy = parentInfo?.first_name;


      if (!parentId || !userId) {
        toast({
          title: "Error",
          description: "Parent ID or User ID not found",
          variant: "destructive",
        });
        return;
      }

      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "Error",
          description: "Image must be less than 5MB",
          variant: "destructive",
        });
        return;
      }

      // Check file type (only images)
      if (!file.type.match('image.*')) {
        toast({
          title: "Error",
          description: "Only image files are allowed",
          variant: "destructive",
        });
        return;
      }

      // Create FormData
      const formData = new FormData();
      formData.append('user_id', userId);
      formData.append('parent_id', parentId);
      formData.append('child_id', id);
      formData.append('created_by', createdBy);
      formData.append('file', file);

      // Upload to backend
      const response = await fetch(`/home/childProfile/${id}/profileImage/api`, {
        method: 'PUT',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to upload image");
      }

      const data = await response.json();
      
      toast({
        title: "Success",
        description: "Profile image updated successfully",
      });
      setProfileImage(data.profile_image_url);

    } catch (error) {
      console.error("Error uploading image:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to upload profile image",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full p-4 md:p-8">
      <DownloadAppStrip></DownloadAppStrip>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Child Profile</h1>
        
        <div className="flex flex-col items-center mb-8">
          {/* Profile Image */}
          <div className="relative w-32 h-32 rounded-full border-2 border-primary mb-4">
            {profileImage ? (
              <Image
                src={profileImage}
                alt="Profile"
                fill
                className="rounded-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-500">No Image</span>
              </div>
            )}
            <label className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center cursor-pointer">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <span className="text-white text-xl">+</span>
            </label>
          </div>

          <div className="flex flex-col items-center mb-4 text-center">
            <div className="flex flex-wrap justify-center gap-4 mb-2">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                {completionPercentage}% Completed
              </span>
              <span className="text-gray-600 text-sm">
                {pendingFields} Pending Actions
              </span>
            </div>
            <h2 className="text-xl font-semibold">
              {form.watch("firstname")} {form.watch("lastname")}
            </h2>
          </div>


        </div>
        <div className="border-t border-gray-200 pt-6">
        <h2 className="text-xl font-semibold mb-6 text-center">Edit Profile</h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleProfileUpdate)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="First name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Last Name */}
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Last name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Gender */}
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gender</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
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

              {/* Standard */}
              <FormField
                control={form.control}
                name="standard"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Standard/Class</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select standard" />
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

              {/* Date of Birth */}
              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date of Birth</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
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

            <div className="flex justify-center pt-4">
              <Button type="submit" className="w-full md:w-auto px-8" disabled={loading}>
                {loading ? "Updating..." : "Update Profile"}
              </Button>
            </div>
          </form>
          </Form>
          </div>
      </div>
    </div>
  );
}