/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import { ChildSelection } from "@/index";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { useToast } from "@/hooks/use-toast";
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
// import {
//   InputOTP,
//   InputOTPGroup,
//   InputOTPSeparator,
//   InputOTPSlot,
// } from "@/components/ui/input-otp";
// import { REGEXP_ONLY_DIGITS } from "input-otp";
// import { FaCircleArrowLeft } from "react-icons/fa6";
// import { useRouter } from "next/navigation";

// const formSchema = z.object({
//   firstname: z
//     .string()
//     .min(1, { message: "First name is required." })
//     .regex(/^[a-zA-Z]+$/, { message: "First name must contain only letters." }),
//   standard: z.string().min(1, { message: "Please select Standard." }),
// });

// type Standard = {
//   name: string;
//   value: number;
// };

// type userData = {
//   first_name: string,
//   standard_id: string,
//   avatar_id: string,
//   parent_id: string,
//   gender_id: number,
//   user_id: string,
//   password: string
// }

// function ChildDetails() {
//   const [standardData, setStandardData] = useState<Standard[]>([]);
//   const [avatarData, setAvatarData] = useState([]);
//   const [enteringPasscode, setEnteringPasscode] = useState(false);
//   const [selectedAvatar, setSelectedAvatar] = useState("");
//   const [selectedAvatarType, setSelectedAvatarType] = useState("Boy");
//   const [passcode, setPasscode] = useState("");
//   const [confirmPasscode, setConfirmPasscode] = useState("");
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const [parentInfo, setParentInfo] = useState<any>('');
//   const { toast } = useToast();
//   const route = useRouter();

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       firstname: "",
//       standard: "",
//     },
//   });

//   const handlePasscodeSubmit = async () => {
//     if (passcode.length !== 4 || confirmPasscode.length !== 4) {
//       toast({
//         description: "Passcode must be 4 digits.",
//         variant: "destructive",
//       });
//       return;
//     }

//     if (passcode !== confirmPasscode) {
//       toast({
//         description: "Passcodes do not match.",
//         variant: "destructive",
//       });
//       return;
//     }

//     try {

//       const data:userData = {
//         first_name: form.getValues('firstname').trim(),
//         standard_id: form.getValues('standard'),
//         avatar_id: selectedAvatar,
//         parent_id: parentInfo?.parent_id,
//         gender_id: selectedAvatarType === "Boy" ? 1: 2,
//         user_id: parentInfo?.user_id,
//         password: passcode,
//       };
//         const response = await fetch('/childDetails/api', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(data),
//         });
//       console.log("RESPONSE", response)
    
//         // const childAddition = await response.json();
      
//       toast({
//         description: "Passcode set successfully!",
//         variant: "default",
//       });
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     }catch(error:any){console.error(error.msg)}
//     // Add your passcode submission logic here
//   };

//   const selectChildAvatarHandler = (avatarId: string, avatarType:string) => {
//     setSelectedAvatar(avatarId);
//     setSelectedAvatarType(avatarType);
//   };

//   function onSubmit(values: z.infer<typeof formSchema>) {
//     console.log(values)
//     if (!selectedAvatar) {
//       toast({
//         description: "Please select an avatar.",
//         variant: "destructive",
//       });
//       return;
//     }

//     // Add your form submission logic here
//     setEnteringPasscode(true);
//     setPasscode("");
//     setConfirmPasscode("");
//   }

//   useEffect(() => {
//     const isLoggedIn = localStorage.getItem("isLoggedIn");
//     const parentInfo = localStorage.getItem("ParentInfo");

//     // Parse parentInfo safely
//     let parsedParentInfo = null;
//     try {
//       parsedParentInfo = parentInfo ? JSON.parse(parentInfo) : null;
//     } catch (error) {
//       console.error("Failed to parse ParentInfo:", error);
//     }
//     setParentInfo(parsedParentInfo);

//     // Redirect to signup if not logged in
//     if (!isLoggedIn || JSON.parse(isLoggedIn) === false) {
//       route.replace("/signup");
//       return; // Exit early to avoid unnecessary fetch
//     }

//     // Fetch data from the API
//     const fetchData = async () => {
//       try {
//         const response = await fetch("childDetails/api"); // Adjust the endpoint path as needed

//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }

//         const result = await response.json();
//         // eslint-disable-next-line @typescript-eslint/no-explicit-any
//         const standardArr: Standard[] = result?.standard?.data.map((val: { value: any; standard_id: any; }) => ({
//           name: val.value,
//           value: val.standard_id,
//         }));
//         setStandardData(standardArr);
//         setAvatarData(result?.avatar?.data);
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//       } catch (error:any) {
//         console.error("Failed to fetch data:", error);
//         toast({
//           description: error.message,
//           variant: "destructive",
//         });
//       }
//     };

//     fetchData();
//   }, [route, toast]);

//   return (
//     <div className="w-full p-8">
//       <div className="grid md:grid-cols-2 gap-8 lg:h-screen md:4 md:mb-6">
//         {/* Left Image Container */}
//         <div className="hidden md:block relative">
//           <Image
//             src="/images/authentication/sign-up.jpeg"
//             alt="child-details"
//             className="size-full object-cover"
//             fill
//           />
//         </div>
//         {/* Child Addition Container */}
//         {!enteringPasscode ? (
//           <div>
//             <div className="mb-8">
//               <h1 className="text-2xl font-bold">
//                 HI, {parentInfo?.first_name || "Parent"}! Enter Child Details!
//               </h1>
//             </div>
//             {/* Child Avatar Selection */}
//             {standardData && (
//               <div className="mb-6">
//                 <h2 className="text-sm my-2">Choose Avatar</h2>
//                 <ChildSelection
//                   avatarData={avatarData}
//                   selectedChildAvatar={selectedAvatar}
//                   setSelectedChildAvatarHandler={selectChildAvatarHandler}
//                 />
//               </div>
//             )}
//             {/* Child Details Form */}
//             <div>
//               <Form {...form}>
//                 <form
//                   onSubmit={form.handleSubmit(onSubmit)}
//                   className="space-y-6"
//                 >
//                   {/* Full Name Field */}
//                   <FormField
//                     control={form.control}
//                     name="firstname"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>First Name</FormLabel>
//                         <FormControl>
//                           <Input placeholder="Enter your first name" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />

//                   {/* Standard Field */}
//                   <FormField
//                     control={form.control}
//                     name="standard"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Standard</FormLabel>
//                         <Select
//                           onValueChange={field.onChange}
//                           value={field.value}
//                         >
//                           <FormControl>
//                             <SelectTrigger>
//                               <SelectValue placeholder="Select Standard" />
//                             </SelectTrigger>
//                           </FormControl>
//                           <SelectContent>
//                             {standardData.map((standard) => (
//                               <SelectItem
//                                 key={standard.name}
//                                 value={String(standard.value)}
//                               >
//                                 {standard.name}
//                               </SelectItem>
//                             ))}
//                           </SelectContent>
//                         </Select>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />

//                   {/* Submit Button */}
//                   <Button type="submit">Add Child</Button>
//                 </form>
//               </Form>
//             </div>
//           </div>
//         ) : (
//           // Entering Passcode
//           <div>
//             <div className="mb-4">
//               <FaCircleArrowLeft onClick={() => setEnteringPasscode(false)} />
//             </div>
//             <p>
//               Hi {form.getValues("firstname")}! Please create your own passcode.
//             </p>
//             <div>
//               {/* Passcode Input */}
//               <div className="my-8">
//                 <p className="my-4">Enter Passcode</p>
//                 <InputOTP
//                   pattern={REGEXP_ONLY_DIGITS}
//                   maxLength={4}
//                   value={passcode}
//                   onChange={(value) => setPasscode(value)}
//                 >
//                   <InputOTPGroup>
//                     <InputOTPSlot index={0} />
//                     <InputOTPSeparator />
//                     <InputOTPSlot index={1} />
//                     <InputOTPSeparator />
//                     <InputOTPSlot index={2} />
//                     <InputOTPSeparator />
//                     <InputOTPSlot index={3} />
//                   </InputOTPGroup>
//                 </InputOTP>
//               </div>

//               {/* Confirm Passcode Input */}
//               <div className="my-8">
//                 <p className="my-4">Confirm Passcode</p>
//                 <InputOTP
//                   pattern={REGEXP_ONLY_DIGITS}
//                   maxLength={4}
//                   value={confirmPasscode}
//                   onChange={(value) => setConfirmPasscode(value)}
//                 >
//                   <InputOTPGroup>
//                     <InputOTPSlot index={0} />
//                     <InputOTPSeparator />
//                     <InputOTPSlot index={1} />
//                     <InputOTPSeparator />
//                     <InputOTPSlot index={2} />
//                     <InputOTPSeparator />
//                     <InputOTPSlot index={3} />
//                   </InputOTPGroup>
//                 </InputOTP>
//               </div>
//             </div>
//             <div>
//               <Button
//                 onClick={handlePasscodeSubmit}
//                 disabled={
//                   passcode.length !== 4 ||
//                   confirmPasscode.length !== 4 ||
//                   passcode !== confirmPasscode
//                 }
//               >
//                 Continue
//               </Button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ChildDetails;









"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ChildSelection } from "@/index";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { AddChildModal } from "@/index";
// import { AddAnotherChildDialog } from "./AddAnotherChildDialog"; // Import the dialog component

const formSchema = z.object({
  firstname: z
    .string()
    .min(1, { message: "First name is required." })
    .regex(/^[a-zA-Z]+$/, { message: "First name must contain only letters." }),
  standard: z.string().min(1, { message: "Please select Standard." }),
});

type Standard = {
  name: string;
  value: number;
};

type userData = {
  first_name: string;
  standard_id: string;
  avatar_id: string;
  parent_id: string;
  gender_id: number;
  user_id: string;
  password: string;
};

function ChildDetails() {
  const [standardData, setStandardData] = useState<Standard[]>([]);
  const [avatarData, setAvatarData] = useState([]);
  const [enteringPasscode, setEnteringPasscode] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const [selectedAvatarType, setSelectedAvatarType] = useState("Boy");
  const [passcode, setPasscode] = useState("");
  const [confirmPasscode, setConfirmPasscode] = useState("");
  const [parentInfo, setParentInfo] = useState<any>("");
  const [isDialogOpen, setIsDialogOpen] = useState(false); // State for dialog
  const { toast } = useToast();
  const route = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      standard: "",
    },
  });

  const handlePasscodeSubmit = async () => {
    if (passcode.length !== 4 || confirmPasscode.length !== 4) {
      toast({
        description: "Passcode must be 4 digits.",
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

    try {
      const data: userData = {
        first_name: form.getValues("firstname").trim(),
        standard_id: form.getValues("standard"),
        avatar_id: selectedAvatar,
        parent_id: parentInfo?.parent_id,
        gender_id: selectedAvatarType === "Boy" ? 1 : 2,
        user_id: parentInfo?.user_id,
        password: passcode,
      };
      const response = await fetch("/childDetails/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          description: "Child added successfully!",
          variant: "default",
        });
        setIsDialogOpen(true); // Open the dialog
      } else {
        throw new Error("Failed to add child");
      }
    } catch (error: any) {
      console.error(error.message);
      toast({
        description: "Something went wrong!",
        variant: "destructive",
      });
    }
  };

  const selectChildAvatarHandler = (avatarId: string, avatarType: string) => {
    setSelectedAvatar(avatarId);
    setSelectedAvatarType(avatarType);
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
    if (!selectedAvatar) {
      toast({
        description: "Please select an avatar.",
        variant: "destructive",
      });
      return;
    }
    setEnteringPasscode(true);
    setPasscode("");
    setConfirmPasscode("");
  };

  const handleAddAnother = () => {
    setIsDialogOpen(false); // Close the dialog
    form.reset(); // Reset the form
    setSelectedAvatar(""); // Reset the selected avatar
    setEnteringPasscode(false); // Reset the passcode screen
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false); // Close the dialog
    // route.push("/dashboard"); // Redirect to dashboard or another page
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const parentInfo = localStorage.getItem("ParentInfo");

    let parsedParentInfo = null;
    try {
      parsedParentInfo = parentInfo ? JSON.parse(parentInfo) : null;
    } catch (error) {
      console.error("Failed to parse ParentInfo:", error);
    }
    setParentInfo(parsedParentInfo);

    if (!isLoggedIn || JSON.parse(isLoggedIn) === false) {
      route.replace("/signup");
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch("childDetails/api");

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        const standardArr: Standard[] = result?.standard?.data.map(
          (val: { value: any; standard_id: any }) => ({
            name: val.value,
            value: val.standard_id,
          })
        );
        setStandardData(standardArr);
        setAvatarData(result?.avatar?.data);
      } catch (error: any) {
        console.error("Failed to fetch data:", error);
        toast({
          description: error.message,
          variant: "destructive",
        });
      }
    };

    fetchData();
  }, [route, toast]);

  return (
    <div className="w-full p-8">
      <div className="grid md:grid-cols-2 gap-8 lg:h-screen md:4 md:mb-6">
        {/* Left Image Container */}
        <div className="hidden md:block relative">
          <Image
            src="/images/authentication/sign-up.jpeg"
            alt="child-details"
            className="size-full object-cover"
            fill
          />
        </div>
        {/* Child Addition Container */}
        {!enteringPasscode ? (
          <div>
            <div className="mb-8">
              <h1 className="text-center md:text-left text-2xl font-bold">
                HI, {parentInfo?.first_name || "Parent"}! Enter Child Details!
              </h1>
            </div>
            {/* Child Avatar Selection */}
            {standardData && (
              <div className="mb-6">
                <h2 className="text-sm my-2">Choose Avatar</h2>
                <ChildSelection
                  avatarData={avatarData}
                  selectedChildAvatar={selectedAvatar}
                  setSelectedChildAvatarHandler={selectChildAvatarHandler}
                />
              </div>
            )}
            {/* Child Details Form */}
            <div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  {/* Full Name Field */}
                  <FormField
                    control={form.control}
                    name="firstname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your first name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Standard Field */}
                  <FormField
                    control={form.control}
                    name="standard"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Standard</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Standard" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {standardData.map((standard) => (
                              <SelectItem
                                key={standard.name}
                                value={String(standard.value)}
                              >
                                {standard.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <div className='flex justify-center md:justify-start'>
                    <Button type="submit">Add Child</Button>
                    </div>
                </form>
              </Form>
            </div>
          </div>
        ) : (
          // Entering Passcode
          <div className="space-y-8">
            <div className="mb-4">
              <FaCircleArrowLeft size={24} onClick={() => setEnteringPasscode(false)} />
            </div>
            <p className="text-center md:text-left text-2xl font-bold">
              Hi {form.getValues("firstname")}! Please create your own passcode.
            </p>
            <div>
              {/* Passcode Input */}
              <div className="my-8">
                <p className="my-4">Enter Passcode</p>
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
              <div className="my-8">
                <p className="my-4">Confirm Passcode</p>
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
                disabled={
                  passcode.length !== 4 ||
                  confirmPasscode.length !== 4 ||
                  passcode !== confirmPasscode
                }
              >
                Continue
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Add Another Child Dialog */}
      <AddChildModal
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        onAddAnother={handleAddAnother}
      />
    </div>
  );
}

export default ChildDetails;