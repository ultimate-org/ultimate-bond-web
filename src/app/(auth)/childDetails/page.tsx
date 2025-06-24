/* eslint-disable @typescript-eslint/no-explicit-any */
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
// import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import {
//   InputOTP,
//   InputOTPGroup,
//   InputOTPSeparator,
//   InputOTPSlot,
// } from "@/components/ui/input-otp";
// import { REGEXP_ONLY_DIGITS } from "input-otp";
// import { FaCircleArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { AddChildModal } from "@/index";
import { Input } from "@/components/ui/input";
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
  // password: string;
};

function ChildDetails() {
  const [standardData, setStandardData] = useState<Standard[]>([]);
  const [avatarData, setAvatarData] = useState([]);
  // const [enteringPasscode, setEnteringPasscode] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const [selectedAvatarType, setSelectedAvatarType] = useState("Boy");
  const [selectedAvatarUrl, setSelectedAvatarUrl] = useState("");
  // const [passcode, setPasscode] = useState("");
  // const [confirmPasscode, setConfirmPasscode] = useState("");
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
    // if (passcode.length !== 4 || confirmPasscode.length !== 4) {
    //   toast({
    //     description: "Passcode must be 4 digits.",
    //     variant: "destructive",
    //   });
    //   return;
    // }

    // if (passcode !== confirmPasscode) {
    //   toast({
    //     description: "Passcodes do not match.",
    //     variant: "destructive",
    //   });
    //   return;
    // }

    try {
      const data: userData = {
        first_name: form.getValues("firstname").trim(),
        standard_id: form.getValues("standard"),
        avatar_id: selectedAvatar,
        parent_id: parentInfo?.parent_id,
        gender_id: selectedAvatarType === "Boy" ? 1 : 2,
        user_id: parentInfo?.user_id,
        // password: passcode,
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

  const selectChildAvatarHandler = (avatarId: string, avatarType: string, avatarUrl:string) => {
    setSelectedAvatar(avatarId);
    setSelectedAvatarType(avatarType);
    setSelectedAvatarUrl(avatarUrl)

  };

  const onSubmit = () => {
    if (!selectedAvatar) {
      toast({
        description: "Please select an avatar.",
        variant: "destructive",
      });
      return;
    }
    handlePasscodeSubmit()
    // setEnteringPasscode(true);
    // setPasscode("");
    // setConfirmPasscode("");
  };

  const handleAddAnother = () => {
    setIsDialogOpen(false); // Close the dialog
    form.reset(); // Reset the form
    // setSelectedAvatar(""); // Reset the selected avatar
    // setEnteringPasscode(false); // Reset the passcode screen
  };

  // const handleCloseDialog = () => {
  //   setIsDialogOpen(false); // Close the dialog
  //   route.push("/home/subscriptionPlans"); // Redirect to dashboard or another page
  // };

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
      // route.replace("/signup");
      route.replace("/")
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
    <div className="w-[80%] my-[2rem] h-full md:px-8 px-4 py-[2rem] mx-auto shadow-lg rounded-md bg-[#ECFCFF]">
      <div className="grid md:grid-cols-2 gap-8  h-full">
        {/* Left Image Container */}
        {/* <div className="hidden md:block relative">
          <Image
            src="/images/authentication/sign-up.jpeg"
            alt="child-details"
            className="size-full object-cover"
            fill
          />
        </div> */}
        <div className="size-full hidden md:block relative rounded-md overflow-hidden">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="size-full object-cover"
  >
    <source src="/videos/user-onboarding/child-details-addition.mp4" type="video/mp4" />
    {/* Fallback for browsers that don't support the video element */}
    {/* <Image
      src="/images/authentication/sign-up.jpeg"
      alt="child-details"
      className="size-full object-cover"
      fill
    /> */}
  </video>
</div>
        {/* Child Addition Container */}
        {/* {!enteringPasscode ? ( */}
          <div className="w-[90%] sm:w-[60%] m-auto md:m-0 md:w-[100%] flex flex-col justify-center">
            <div className="mb-8">
              <h1 className="text-center md:text-left text-2xl font-bold">
                Enter Child Details!
              </h1>
          </div>
          
           {/* Selected Avatar Preview */}
           {selectedAvatarUrl && (
            <div className="mb-2 flex flex-col items-center align-center w-full">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary mx-auto">
                <Image
                  src={selectedAvatarUrl}
                  alt="Selected Avatar"
                  width={60}
                  height={60}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          )}

            {/* Child Avatar Selection */}
            {standardData && (
              <div className="mb-6">
                <h2 className="text-md my-2 font-bold">Select avatar of your choice</h2>
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
                <div className="flex flex-col md:flex-row justify-start items-center gap-4">
                  <div className="w-full md:w-1/2">
                {/* Full Name Field  */}
                  <FormField
                    control={form.control}
                    name="firstname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input className="border-black bg-transparent h-10" placeholder="Enter first name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  </div>
                  {/* Standard Field */}
                  <div className="w-full md:w-1/2">
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
                            <SelectTrigger className="border-black bg-transparent h-10">
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
                    </div>
                </div>

                  {/* Avatar Selection */}
                  {/* Submit Button */}
                  <div className='flex justify-center md:justify-start'>
                    <Button type="submit">Submit</Button>
                    </div>
                </form>
              </Form>
            </div>
          </div>
        {/* ) : ( */}
          {/* // Entering Passcode
          <div className="space-y-8">
            <div className="mb-4">
              <FaCircleArrowLeft size={24} onClick={() => setEnteringPasscode(false)} />
            </div>
            <p className="text-center md:text-left text-2xl font-bold">
              Hi {form.getValues("firstname")}! Please create your own passcode.
            </p>
            <div>
              {/* Passcode Input */}
              {/* <div className="my-8">
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
              </div> */} 

              {/* Confirm Passcode Input */}
              {/* <div className="my-8">
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
        )} */}
      </div>

      {/* Add Another Child Dialog */}
      <AddChildModal
        isOpen={isDialogOpen}
        onAddAnother={handleAddAnother}
      />
    </div>
  );
}

export default ChildDetails;