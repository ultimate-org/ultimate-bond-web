/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Calendar } from "@/components/ui/calendar";
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// import { CalendarIcon } from "lucide-react";
// import { format } from "date-fns";
// import { cn } from "@/lib/utils";
// import Image from "next/image";
// import { Textarea } from "@/components/ui/textarea";
// import { useToast } from '@/hooks/use-toast';
// import { useEffect, useState } from "react";
// // import Link from "next/link";
// import { useRouter } from "next/navigation";

// const formSchema = z.object({
//   firstName: z.string()
//     .min(1, "First name is required")
//     .regex(/^[a-zA-Z]+$/, "First name must contain only letters"),
//   lastName: z.string()
//     .min(1, "Last name is required")
//     .regex(/^[a-zA-Z]+$/, "Last name must contain only letters"),
//   userName: z.string()
//     .min(1, "Email is required")
//     .email("Enter a valid email address"),
//   role: z.string().min(1, "Role is required"),
//   gender: z.string().min(1, "Gender is required"),
//   dateOfBirth: z.date(),
//   religion: z.string().min(1, "Religion is required"),
//   motherTongue: z.string().min(1, "Mother tongue is required"),
//   pincode: z.string()
//     .min(6, "Pincode must be 6 digits")
//     .regex(/^\d+$/, "Pincode must contain only numbers"),
//   state: z.string().min(1, "State is required"),
//   address: z.string().min(1, "Address is required"),
// });

// type DropdownOption = {
//   label: string;
//   value: number;
// };

// export default function ParentProfile() {
//   const { toast } = useToast();
//   const router = useRouter();
//   const [loading, setLoading] = useState(true);
//   const [profileImage, setProfileImage] = useState<string | null>(null);
//   const [countryCode, setCountryCode] = useState("");
//   const [contactNumber, setContactNumber] = useState("");
//   // const [userId, setUserId] = useState("");
//   const [roles, setRoles] = useState<DropdownOption[]>([]);
//   const [genders, setGenders] = useState<DropdownOption[]>([]);
//   const [religions, setReligions] = useState<DropdownOption[]>([]);
//   const [languages, setLanguages] = useState<DropdownOption[]>([]);
//   const [states, setStates] = useState<DropdownOption[]>([]);
//   const [completionPercentage, setCompletionPercentage] = useState(0);
//   const [pendingFields, setPendingFields] = useState(0);

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       firstName: "",
//       lastName: "",
//       userName: "",
//       role: "",
//       gender: "",
//       dateOfBirth: new Date(),
//       religion: "",
//       motherTongue: "",
//       pincode: "",
//       state: "",
//       address: "",
//     },
//   });

//   // Fetch parent data and dropdown options
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const parentInfo = JSON.parse(localStorage.getItem('ParentInfo') || '{}');
//         const parentId = parentInfo?.parent_id;

//         if (!parentId) {
//           toast({
//             title: "Error",
//             description: "Parent ID not found",
//             variant: "destructive",
//           });
//           router.push("/login");
//           return;
//         }
//         const response = await fetch(`/home/parentProfile/api?id=${parentId}`);
//         //         const data = await response.json();
        
//         // const response = await fetch(`/api/parent-profile?id=${parentId}`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch parent data");
//         }

//         const data = await response.json();
        
//         // Set form values
//         form.reset({
//           firstName: data.parent.firstName,
//           lastName: data.parent.lastName,
//           userName: data.parent.userName,
//           role: String(data.parent.role),
//           gender: String(data.parent.gender),
//           dateOfBirth: new Date(data.parent.dateOfBirth),
//           religion: String(data.parent.religion),
//           motherTongue: String(data.parent.motherTongue),
//           pincode: data.parent.pincode,
//           state: String(data.parent.state),
//           address: data.parent.address,
//         });

//         // Set other state values
//         setCountryCode(data.parent.countryCode);
//         setContactNumber(data.parent.contactNumber);
//         setProfileImage(data.parent.profileImagePath);
//         // setUserId(data.parent.userId);
//         setRoles(data.roles);
//         setGenders(data.genders);
//         setReligions(data.religions);
//         setLanguages(data.languages);
//         setStates(data.states);

//         // Calculate completion percentage
//         calculateCompletion({
//           ...data.parent,
//           role: String(data.parent.role),
//           gender: String(data.parent.gender),
//           religion: String(data.parent.religion),
//           motherTongue: String(data.parent.motherTongue),
//           state: String(data.parent.state),
//         });

//       } catch (error) {
//         console.error("Error fetching parent data:", error);
//         toast({
//           title: "Error",
//           description: "Failed to load parent profile",
//           variant: "destructive",
//         });
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [form, router, toast]);

//   const calculateCompletion = (values: any) => {
//     const fields = [
//       { name: 'firstName', value: values.firstName },
//       { name: 'lastName', value: values.lastName },
//       { name: 'userName', value: values.userName },
//       { name: 'gender', value: values.gender },
//       { name: 'role', value: values.role },
//       { name: 'dateOfBirth', value: values.dateOfBirth },
//       { name: 'religion', value: values.religion },
//       { name: 'motherTongue', value: values.motherTongue },
//       { name: 'pincode', value: values.pincode },
//       { name: 'state', value: values.state },
//       { name: 'address', value: values.address }
//     ];

//     const filledFieldsCount = fields.filter(
//       field => field.value && field.value !== ''
//     ).length;
//     const totalFields = fields.length;
//     const percentage = Math.round((filledFieldsCount / totalFields) * 100);
    
//     setCompletionPercentage(percentage);
//     setPendingFields(totalFields - filledFieldsCount);
//   };

//   const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (!file) return;

//     try {
//       setLoading(true);
//       const parentInfo = JSON.parse(localStorage.getItem('ParentInfo') || '{}');
//       const parentId = parentInfo?.parent_id;
//       const userId = parentInfo?.user_id;

//       if (!parentId || !userId) {
//         toast({
//           title: "Error",
//           description: "Parent ID or User ID not found",
//           variant: "destructive",
//         });
//         return;
//       }

//       // Check file size (max 5MB)
//       if (file.size > 5 * 1024 * 1024) {
//         toast({
//           title: "Error",
//           description: "Image must be less than 5MB",
//           variant: "destructive",
//         });
//         return;
//       }

//       // Check file type (only images)
//       if (!file.type.match('image.*')) {
//         toast({
//           title: "Error",
//           description: "Only image files are allowed",
//           variant: "destructive",
//         });
//         return;
//       }

//       // Create FormData
//       const formData = new FormData();
//       formData.append('user_id', userId);
//       formData.append('parent_id', parentId);
//       formData.append('created_by', 'admin');
//       formData.append('file', file);

//       // Upload to backend
//       const response = await fetch('/home/parentProfile/profileImage/api', {
//         method: 'PUT',
//         body: formData,
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || "Failed to upload image");
//       }

//       const data = await response.json();
      
//       toast({
//         title: "Success",
//         description: "Profile image updated successfully",
//       });

//       return data.profileImagePath; // Return the new image path if needed

//     } catch (error) {
//       console.error("Error uploading image:", error);
//       toast({
//         title: "Error",
//         description: error instanceof Error ? error.message : "Failed to upload profile image",
//         variant: "destructive",
//       });
//       throw error; // Re-throw if you want to handle the error in the component
//     } finally {
//       setLoading(false);
//     }
//   };


//   const onSubmit = async (values: z.infer<typeof formSchema>) => {
//     try {
//       setLoading(true);
//       const parentInfo = JSON.parse(localStorage.getItem('ParentInfo') || '{}');
//       const parentId = parentInfo?.parent_id;

//       if (!parentId) {
//         toast({
//           title: "Error",
//           description: "Parent ID not found",
//           variant: "destructive",
//         });
//         return;
//       }

//       const formData = new FormData();
//       // formData.append('parentId', parentId);
//       formData.append('first_name', values.firstName);
//       formData.append('last_name', values.lastName);
//       formData.append('username', values.userName);
//       formData.append('parent_role_id', values.role);
//       formData.append('gender_id', values.gender);
//       formData.append('birth_date', values.dateOfBirth.toISOString());
//       formData.append('religion_id', values.religion);
//       formData.append('mother_tounge_id', values.motherTongue);
//       formData.append('pincode', values.pincode);
//       formData.append('state_id', values.state);
//       formData.append('address', values.address);

//       const response = await fetch(`/home/parentProfile/${parentId}/api`, {
//         method: 'POST',
//         body: formData,
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || "Failed to update profile");
//       }

//       const updatedParent = await response.json();
      
//       // Update local storage with new data
//       localStorage.setItem('ParentInfo', JSON.stringify({
//         ...parentInfo,
//         ...updatedParent
//       }));

//       toast({
//         title: "Success",
//         description: "Profile updated successfully",
//       });

//       // Recalculate completion percentage
//       calculateCompletion(values);

//     } catch (error) {
//       console.error("Error updating profile:", error);
//       toast({
//         title: "Error",
//         description: error instanceof Error ? error.message : "Failed to update profile",
//         variant: "destructive",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-white p-4 md:p-8">
//       <h1 className="text-2xl font-bold mb-6 text-center md:text-left">Parent Profile</h1>
      
//       {/* Profile Header */}
//       <div className="flex flex-col items-center mb-8">
//         <div className="relative w-32 h-32 rounded-full border-2 border-primary mb-4">
//           {profileImage ? (
//             <Image
//               src={profileImage}
//               alt="Profile"
//               fill
//               className="rounded-full object-cover"
//             />
//           ) : (
//             <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
//               <span className="text-gray-500">No Image</span>
//             </div>
//           )}
//           <label className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center cursor-pointer">
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageUpload}
//               className="hidden"
//             />
//             <span className="text-white text-xl">+</span>
//           </label>
//         </div>

//         <div className="flex flex-col items-center mb-4">
//           <div className="flex items-center gap-4 mb-2">
//             <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
//               {completionPercentage}% Completed
//             </span>
//             <span className="text-gray-600 text-sm">
//               {pendingFields} Pending Actions
//             </span>
//           </div>
//           <h2 className="text-xl font-semibold">
//             {form.watch("firstName")} {form.watch("lastName")}
//           </h2>
//           <div className="text-gray-600 text-sm">
//             {countryCode} {contactNumber}
//           </div>
//           <div className="text-gray-600 text-sm">
//             {form.watch("userName")}
//           </div>
//         </div>
//       </div>

//       <div className="border-t border-gray-200 pt-6">
//         <h2 className="text-xl font-semibold mb-6 text-center">Edit Profile</h2>
        
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//             {/* Full Name */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <FormField
//                 control={form.control}
//                 name="firstName"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>First Name</FormLabel>
//                     <FormControl>
//                       <Input placeholder="First Name" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="lastName"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Last Name</FormLabel>
//                     <FormControl>
//                       <Input placeholder="Last Name" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>

//             {/* Email */}
//             <FormField
//               control={form.control}
//               name="userName"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Email</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Email Address" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             {/* Role */}
//             <FormField
//               control={form.control}
//               name="role"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Role</FormLabel>
//                   <Select onValueChange={field.onChange} value={field.value}>
//                     <FormControl>
//                       <SelectTrigger>
//                         <SelectValue placeholder="Select Role" />
//                       </SelectTrigger>
//                     </FormControl>
//                     <SelectContent>
//                       {roles.map((role) => (
//                         <SelectItem key={role.value} value={String(role.value)}>
//                           {role.label}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             {/* Gender */}
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

//             {/* Date of Birth */}
//             <FormField
//               control={form.control}
//               name="dateOfBirth"
//               render={({ field }) => (
//                 <FormItem className="flex flex-col">
//                   <FormLabel>Date of Birth</FormLabel>
//                   <Popover>
//                     <PopoverTrigger asChild>
//                       <FormControl>
//                         <Button
//                           variant={"outline"}
//                           className={cn(
//                             "pl-3 text-left font-normal",
//                             !field.value && "text-muted-foreground"
//                           )}
//                         >
//                           {field.value ? (
//                             format(field.value, "PPP")
//                           ) : (
//                             <span>Pick a date</span>
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

//             {/* Religion */}
//             <FormField
//               control={form.control}
//               name="religion"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Religion</FormLabel>
//                   <Select onValueChange={field.onChange} value={field.value}>
//                     <FormControl>
//                       <SelectTrigger>
//                         <SelectValue placeholder="Select Religion" />
//                       </SelectTrigger>
//                     </FormControl>
//                     <SelectContent>
//                       {religions.map((religion) => (
//                         <SelectItem key={religion.value} value={String(religion.value)}>
//                           {religion.label}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             {/* Mother Tongue */}
//             <FormField
//               control={form.control}
//               name="motherTongue"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Mother Tongue</FormLabel>
//                   <Select onValueChange={field.onChange} value={field.value}>
//                     <FormControl>
//                       <SelectTrigger>
//                         <SelectValue placeholder="Select Mother Tongue" />
//                       </SelectTrigger>
//                     </FormControl>
//                     <SelectContent>
//                       {languages.map((language) => (
//                         <SelectItem key={language.value} value={String(language.value)}>
//                           {language.label}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             {/* Pincode */}
//             <FormField
//               control={form.control}
//               name="pincode"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Pincode</FormLabel>
//                   <FormControl>
//                     <Input
//                       placeholder="Pincode"
//                       {...field}
//                       onChange={(e) => {
//                         const value = e.target.value;
//                         if (/^\d*$/.test(value)) {
//                           field.onChange(value);
//                         }
//                       }}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             {/* State */}
//             <FormField
//               control={form.control}
//               name="state"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>State</FormLabel>
//                   <Select onValueChange={field.onChange} value={field.value}>
//                     <FormControl>
//                       <SelectTrigger>
//                         <SelectValue placeholder="Select State" />
//                       </SelectTrigger>
//                     </FormControl>
//                     <SelectContent>
//                       {states.map((state) => (
//                         <SelectItem key={state.value} value={String(state.value)}>
//                           {state.label}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             {/* Address */}
//             <FormField
//               control={form.control}
//               name="address"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Address</FormLabel>
//                   <FormControl>
//                     <Textarea
//                       placeholder="Enter your address"
//                       className="min-h-[100px]"
//                       {...field}
//                     />
//                   </FormControl>
//                   <p className="text-sm text-muted-foreground">
//                     *Please enter correct address for material kit delivery
//                   </p>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//               {/* <Link
//                 href={`/forgot-password?userId=${userId}`}
//                 className="text-primary hover:underline text-sm"
//               >
//                 Update Password
//               </Link> */}
              
//               <Button type="submit" className="w-full md:w-auto">
//                 Update Profile
//               </Button>
//             </div>
//           </form>
//         </Form>
//       </div>
//     </div>
//   );
// }

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from '@/hooks/use-toast';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DownloadAppStrip from "@/components/downloadAppStrip/DownloadAppStrip";

const formSchema = z.object({
  firstName: z.string()
    .min(1, "First name is required")
    .regex(/^[a-zA-Z]+$/, "First name must contain only letters"),
  lastName: z.string()
    .min(1, "Last name is required")
    .regex(/^[a-zA-Z]+$/, "Last name must contain only letters"),
  userName: z.string()
    .min(1, "Email is required")
    .email("Enter a valid email address"),
  role: z.string().min(1, "Role is required"),
  gender: z.string().min(1, "Gender is required"),
  dateOfBirth: z.date(),
  religion: z.string().min(1, "Religion is required"),
  motherTongue: z.string().min(1, "Mother tongue is required"),
  pincode: z.string()
    .min(6, "Pincode must be 6 digits")
    .regex(/^\d+$/, "Pincode must contain only numbers"),
  state: z.string().min(1, "State is required"),
  address: z.string().optional(),
});

type DropdownOption = {
  label: string;
  value: number;
};

export default function ParentProfile() {
  const { toast } = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [countryCode, setCountryCode] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [roles, setRoles] = useState<DropdownOption[]>([]);
  const [genders, setGenders] = useState<DropdownOption[]>([]);
  const [religions, setReligions] = useState<DropdownOption[]>([]);
  const [languages, setLanguages] = useState<DropdownOption[]>([]);
  const [states, setStates] = useState<DropdownOption[]>([]);
  const [completionPercentage, setCompletionPercentage] = useState(0);
  const [pendingFields, setPendingFields] = useState(0);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      userName: "",
      role: "",
      gender: "",
      dateOfBirth: new Date(),
      religion: "",
      motherTongue: "",
      pincode: "",
      state: "",
      address: "",
    },
  });

  // Fetch parent data and dropdown options
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const parentInfo = JSON.parse(localStorage.getItem('ParentInfo') || '{}');
        const parentId = parentInfo?.parent_id;

        if (!parentId) {
          toast({
            title: "Error",
            description: "Parent ID not found",
            variant: "destructive",
          });
          router.push("/login");
          return;
        }
        const response = await fetch(`/home/parentProfile/api?id=${parentId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch parent data");
        }

        const data = await response.json();
        
        // Set form values
        form.reset({
          firstName: data.parent.firstName,
          lastName: data.parent.lastName,
          userName: data.parent.userName,
          role: String(data.parent.role),
          gender: String(data.parent.gender),
          dateOfBirth: new Date(data.parent.dateOfBirth),
          religion: String(data.parent.religion),
          motherTongue: String(data.parent.motherTongue),
          pincode: data.parent.pincode,
          state: String(data.parent.state),
          address: data.parent.address,
        });

        // Set other state values
        setCountryCode(data.parent.countryCode);
        setContactNumber(data.parent.contactNumber);
        setProfileImage(data.parent.profileImagePath);
        setRoles(data.roles);
        setGenders(data.genders);
        setReligions(data.religions);
        setLanguages(data.languages);
        setStates(data.states);

        // Calculate completion percentage
        calculateCompletion({
          ...data.parent,
          role: String(data.parent.role),
          gender: String(data.parent.gender),
          religion: String(data.parent.religion),
          motherTongue: String(data.parent.motherTongue),
          state: String(data.parent.state),
        });

      } catch (error) {
        console.error("Error fetching parent data:", error);
        toast({
          title: "Error",
          description: "Failed to load parent profile",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [form, router, toast]);

  const calculateCompletion = (values: any) => {
    const fields = [
      { name: 'firstName', value: values.firstName },
      { name: 'lastName', value: values.lastName },
      { name: 'userName', value: values.userName },
      { name: 'gender', value: values.gender },
      { name: 'role', value: values.role },
      { name: 'dateOfBirth', value: values.dateOfBirth },
      { name: 'religion', value: values.religion },
      { name: 'motherTongue', value: values.motherTongue },
      { name: 'pincode', value: values.pincode },
      { name: 'state', value: values.state },
      { name: 'address', value: values.address }
    ];

    const filledFieldsCount = fields.filter(
      field => field.value && field.value !== ''
    ).length;
    const totalFields = fields.length;
    const percentage = Math.round((filledFieldsCount / totalFields) * 100);
    
    setCompletionPercentage(percentage);
    setPendingFields(totalFields - filledFieldsCount);
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setLoading(true);
      const parentInfo = JSON.parse(localStorage.getItem('ParentInfo') || '{}');
      const parentId = parentInfo?.parent_id;
      const userId = parentInfo?.user_id;
      const createdBy = parentInfo?.created_by

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
      formData.append('created_by', createdBy);
      formData.append('file', file);

      // Upload to backend
      const response = await fetch('/home/parentProfile/profileImage/api', {
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

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      const parentInfo = JSON.parse(localStorage.getItem('ParentInfo') || '{}');
      const parentId = parentInfo?.parent_id;

      if (!parentId) {
        toast({
          title: "Error",
          description: "Parent ID not found",
          variant: "destructive",
        });
        return;
      }

      const formData = new FormData();
      formData.append('first_name', values.firstName);
      formData.append('last_name', values.lastName);
      formData.append('username', values.userName);
      formData.append('parent_role_id', values.role);
      formData.append('gender_id', values.gender);
      formData.append('birth_date', values.dateOfBirth.toISOString());
      formData.append('religion_id', values.religion);
      formData.append('mother_tounge_id', values.motherTongue);
      formData.append('pincode', values.pincode);
      formData.append('state_id', values.state);
      formData.append('address', values?.address || "");

      const response = await fetch(`/home/parentProfile/${parentId}/api`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update profile");
      }

      const updatedParent = await response.json();
      
      // Update local storage with new data
      localStorage.setItem('ParentInfo', JSON.stringify({
        ...parentInfo,
        ...updatedParent
      }));

      toast({
        title: "Success",
        description: "Profile updated successfully",
      });

      // Recalculate completion percentage
      calculateCompletion(values);

    } catch (error) {
      console.error("Error updating profile:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to update profile",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center gap-4 ">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        <p className="text-gray-600">Loading profile information...</p>
      </div>
    );
  }

  return (
    <div className="max-h-screen bg-white p-4 md:p-8">
      <DownloadAppStrip></DownloadAppStrip>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">My Profile</h1>
        
        {/* Profile Header */}
        <div className="flex flex-col items-center mb-8">
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
              {form.watch("firstName")} {form.watch("lastName")}
            </h2>
            <div className="text-gray-600 text-sm">
              {countryCode} {contactNumber}
            </div>
            <div className="text-gray-600 text-sm">
              {form.watch("userName")}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h2 className="text-xl font-semibold mb-6 text-center">Edit Profile</h2>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Full Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="First Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name*</FormLabel>
                      <FormControl>
                        <Input placeholder="Last Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Email */}
              <FormField
                control={form.control}
                name="userName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email*</FormLabel>
                    <FormControl>
                      <Input placeholder="Email Address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Role */}
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
                          <SelectItem key={role.value} value={String(role.value)}>
                            {role.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
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
                    <FormLabel>Gender*</FormLabel>
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

              {/* Religion */}
              <FormField
                control={form.control}
                name="religion"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Religion*</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Religion" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {religions.map((religion) => (
                          <SelectItem key={religion.value} value={String(religion.value)}>
                            {religion.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Mother Tongue */}
              <FormField
                control={form.control}
                name="motherTongue"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mother Tongue*</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Mother Tongue" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {languages.map((language) => (
                          <SelectItem key={language.value} value={String(language.value)}>
                            {language.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Pincode */}
              <FormField
                control={form.control}
                name="pincode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pincode*</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Pincode" 
                        {...field} 
                        onChange={(e) => {
                          const value = e.target.value;
                          if (/^\d*$/.test(value)) {
                            field.onChange(value);
                          }
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* State */}
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select State" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {states.map((state) => (
                          <SelectItem key={state.value} value={String(state.value)}>
                            {state.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Address */}
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter your address"
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    {/* <p className="text-sm text-muted-foreground">
                      *Please enter correct address for material kit delivery
                    </p> */}
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-center py-4">
                <Button type="submit" className="w-full md:w-auto px-8">
                  Update Profile
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}