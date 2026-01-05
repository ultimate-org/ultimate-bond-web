// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import { useState, useEffect, useRef } from "react";
// import { useRouter } from "next/navigation";
// import { useToast } from '@/hooks/use-toast';
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Separator } from "@/components/ui/separator";
// import { Loader2 } from "lucide-react";
// import { SubscriptionPlanCard } from "@/index";
// import { Textarea } from "@/components/ui/textarea";
// import Script from "next/script";

// interface Child {
//   childId: string;
//   childName: string;
//   imageRoute: {
//     uri: string;
//   };
// }

// interface SubscriptionPlan {
//   subscription_plan_id: number;
//   name: string;
//   label: string;
//   final_cost: number;
//   kit_included: boolean;
//   currency: {
//     is_prefix: boolean;
//     symbol: string;
//   };
//   // Add other properties as needed
// }

// interface State {
//   label: string;
//   value: string;
// }

// export default function SubscriptionPlans() {
//     const router = useRouter();
//     const { toast } = useToast();
//     const scrollViewRef = useRef<HTMLDivElement>(null);

//     const [children, setChildren] = useState<Child[]>([]);
//     const [subscribedChildren, setSubscribedChildren] = useState<any[]>([]);
//     const [subscriptionPlans, setSubscriptionPlans] = useState<Record<string, SubscriptionPlan[]>>({});
//     const [filteredSubscriptionPlans, setFilteredSubscriptionPlans] = useState<SubscriptionPlan[]>([]);
//     const [selectedSubscriptionPlan, setSelectedSubscriptionPlan] = useState<SubscriptionPlan | null>(null);
//     const [selectedSubscriptionPlanDuration, setSelectedSubscriptionPlanDuration] = useState("");
//     const [selectedSubscriptionKit, setSelectedSubscriptionKit] = useState(1);
//     const [selectedChild, setSelectedChild] = useState<Child[]>([]);
//     const [stateData, setStateData] = useState<State[]>([]);
//     const [selectedState, setSelectedState] = useState("");
//     const [deliveryAddress, setDeliveryAddress] = useState("");
//     const [pincode, setPincode] = useState("");
//     const [couponCode, setCouponCode] = useState("");
//     const [couponDiscountType, setCouponDiscountType] = useState("");
//     const [couponDiscount, setCouponDiscount] = useState(0);
//     const [appliedCouponId, setAppliedCouponId] = useState("");
//     const [totalAmount, setTotalAmount] = useState(0);
//     const [payableAmount, setPayableAmount] = useState(0);
//     const [couponErrMsg, setCouponErrMsg] = useState("");
//     const [parentDetails, setParentDetails] = useState<any>(null);
//     const [loading, setLoading] = useState(false);
//     const [loadingMessage, setLoadingMessage] = useState("");
//     const [razorpayLoaded, setRazorpayLoaded] = useState(false);

//     const kitButtons = [
//         { id: 1, button: "Without Kit" },
//         { id: 2, button: "With Kit" },
//     ];

//     const handleScrollDown = () => {
//         scrollViewRef.current?.scrollTo({
//             top: scrollViewRef.current.scrollHeight,
//             behavior: "smooth",
//         });
//     };

//     const childSelectionForSubscriptionHandler = (child: Child) => {
//         setCouponErrMsg("");
//         if (selectedChild.some((val) => val.childId == child.childId)) {
//             setSelectedChild(selectedChild.filter((val) => val.childId != child.childId));
//         } else {
//             setSelectedChild([...selectedChild, child]);
//         }
//     };

//     const couponCodeHandler = (val: string) => {
//         setCouponErrMsg("");
//         setCouponCode(val);
//     };

//     const validateCouponHandler = async () => {
//         try {
//             setLoading(true);
//             setLoadingMessage("Validating Coupon Code...");
//             const userInfo = localStorage.getItem("UserInfo");
//             const user = userInfo ? JSON.parse(userInfo) : null;

//             if (!selectedSubscriptionPlan) {
//                 setCouponErrMsg("Select subscription plan first");
//                 return;
//             }
//             if (selectedChild.length == 0) {
//                 setCouponErrMsg("Select child first");
//                 return;
//             }
//             if (!couponCode) {
//                 setCouponErrMsg("Enter Valid Coupon Code");
//                 return;
//             }
//             if (!/^[A-Z0-9]+$/.test(couponCode)) {
//                 setCouponErrMsg("Invalid Coupon Code");
//                 return;
//             }

//             const data = {
//                 coupon_code: couponCode.toUpperCase(),
//                 user_id: user?.user_id,
//                 subscription_plan_id: parseInt(selectedSubscriptionPlan.subscription_plan_id.toString()),
//             };

//             const res = await fetch('/home/subscriptionPlans/coupon/api', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(data),
//             });
//             const response = await res.json();
      
//             if (response.code === 200) {
//                 toast({
//                     title: "Coupon Applied Successfully!",
//                     variant: "default",
//                 });
//                 setCouponDiscountType(response?.data?.discount_type);
//                 setCouponDiscount(response?.data?.discount_value);
//                 setAppliedCouponId(response?.data?.coupon_id);
//             }
//         } catch (err: any) {
//             console.error("Error while applying coupon", err);
      
//             if (err.code === 404) {
//                 toast({
//                     title: "Coupon doesn't exist",
//                     variant: "destructive",
//                 });
//                 return;
//             }
//             if (err.code === 403) {
//                 toast({
//                     title: "Coupon is not valid for you",
//                     variant: "destructive",
//                 });
//                 return;
//             }
//             if (err.code === 400) {
//                 toast({
//                     title: "Invalid Coupon",
//                     variant: "destructive",
//                 });
//                 return;
//             }
      
//             toast({
//                 title: "Something Went Wrong!",
//                 variant: "destructive",
//             });
//         } finally {
//             setLoading(false);
//             setLoadingMessage("");
//         }
//     };

//     const updateParent = async (selectedState: string, deliveryAddress: string, pincode: string) => {
//         try {
//             const parentInfo = JSON.parse(localStorage.getItem('ParentInfo') || '{}');
//       const parentId = parentInfo?.parent_id;
//             const formData = new FormData();
            
//             formData.append('pincode', pincode);
//             formData.append('state_id', selectedState);
//             formData.append('address', deliveryAddress);
      
//             const response = await fetch(`/home/parentProfile/${parentId}/api`, {
//               method: 'POST',
//               body: formData,
//             });

//             if (!response.ok) {
//                 const errorData = await response.json();
//                 throw new Error(errorData.message || "Failed to update profile");
//               }
        
//               const updatedParent = await response.json();
              
//               // Update local storage with new data
//               localStorage.setItem('ParentInfo', JSON.stringify({
//                 ...parentInfo,
//                 ...updatedParent
//               }));
      
//         } catch (err) {
//             console.error("Error While Updating Parent Information", err);
//         }
//     };

//     const makeSubscriptionPaymentHandler = async () => {
//         try {
//             if (!selectedSubscriptionPlan) {
//                 toast({
//                     title: "Please select a subscription plan",
//                     variant: "destructive",
//                 });
//                 return;
//             }

//             if (selectedChild.length <= 0) {
//                 toast({
//                     title: "Please select a child",
//                     variant: "destructive",
//                 });
//                 return;
//             }

//             if (selectedSubscriptionKit == 2 && !deliveryAddress) {
//                 toast({
//                     title: "Please provide delivery address",
//                     variant: "destructive",
//                 });
//                 return;
//             }

//             if (selectedSubscriptionKit == 2 && !pincode) {
//                 toast({
//                     title: "Please provide pincode",
//                     variant: "destructive",
//                 });
//                 return;
//             }

//             if (!selectedState) {
//                 toast({
//                     title: "Please select a state",
//                     variant: "destructive",
//                 });
//                 return;
//             }

//             if (payableAmount <= 0) {
//                 return;
//             }

//             await updateParent(selectedState, deliveryAddress, pincode);

//             const selectedChildrens = selectedChild.map((child) =>
//                 parseInt(child.childId)
//             );
        
//             const userInfo = localStorage.getItem("UserInfo");
//             const user = userInfo ? JSON.parse(userInfo) : null;

//             const data = {
//                 subscription_plan_id: parseInt(selectedSubscriptionPlan.subscription_plan_id.toString()),
//                 user_id: parseInt(user?.user_id || "0"),
//                 child_ids: selectedChildrens,
//                 coupon_id: parseInt(appliedCouponId) || null,
//                 state_id: parseInt(selectedState),
//                 created_by: user?.first_name || "",
//             };

//             setLoading(true);
//             setLoadingMessage("Creating order...");
//             const res = await fetch("/home/subscriptionPlans/subscription/api", {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(data),
//             });

//             const response = await res.json();

//             if (response && response.code === 201) {
//                 // Initialize Razorpay payment
//                 const options = {
//                     key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//                     amount: payableAmount * 100, // Razorpay expects amount in paise
//                     currency: 'INR',
//                     name: 'Ultimate',
//                     description: selectedSubscriptionPlan.name,
//                     order_id: response.razorpay_order_id,
//                     handler: async function (response: any) {
//                         // Handle successful payment
//                         console.log('Payment successful:', response);
                        
//                         try {
//                             setLoading(true);
//                             setLoadingMessage(
//                                 `Please wait while we prepare your subscription features! It will take a moment...`
//                             );
                            
//                             // Verify payment on your server
//                             // const verificationRes = await fetch('/api/verify-payment', {
//                             //     method: 'POST',
//                             //     headers: {
//                             //         'Content-Type': 'application/json',
//                             //     },
//                             //     body: JSON.stringify({
//                             //         razorpay_payment_id: response.razorpay_payment_id,
//                             //         razorpay_order_id: response.razorpay_order_id,
//                             //         razorpay_signature: response.razorpay_signature,
//                             //         amount: payableAmount,
//                             //         subscription_data: data
//                             //     }),
//                             // });
                            
//                             // const verificationData = await verificationRes.json();
                            
//                             // if (verificationData.success) {
//                                 // toast({
//                                 //     title: "Payment successful! Subscription activated.",
//                                 //     variant: "default",
//                                 // });
//                                 //  else {
//                             //     toast({
//                             //         title: "Payment verification failed",
//                             //         description: "Please contact support",
//                             //         variant: "destructive",
//                             //     });
//                             // }
//                         // }
//                             const featureAssignmentRes = await fetch('/home/featureAssignment/subscription/api', {
//                                 method:"POST",
//                                 headers: {
//                                     'Content-Type': 'application/json',
//                                 },
//                                 body: JSON.stringify({
//                                     child_ids: selectedChildrens,
//                                     user_id: parseInt(user?.user_id || "0"),
//                                 }),
//                             });

//                             const featureAssignmentResponse = await featureAssignmentRes.json();
//                             if (featureAssignmentResponse.code === 200) {
//                                 router.push("/")
//                             } else {
//                                 toast({
//                                     title: "Error while assigning Features, contact Ulti-Mate",
//                                     variant: "destructive",
//                                 });
//                                 return;
//                             }
                                
//                                 // router.push("/dashboard");
//                         }
                            
//                         catch (error) {
//                             console.log("Error during payment verification:", error);
//                             console.error("Payment verification error:", error);
//                             toast({
//                                 title: "Payment verification error",
//                                 description: "Please contact support",
//                                 variant: "destructive",
//                             });
//                         } finally {
//                             setLoading(false);
//                             setLoadingMessage("");
//                         }
//                     },
//                     prefill: {
//                         name: `${user?.first_name} ${user?.last_name}`,
//                         email: user?.username,
//                         contact: user?.contact_number,
//                     },
//                     notes: {
//                         address: deliveryAddress,
//                         subscription_plan: selectedSubscriptionPlan.name,
//                         children_count: selectedChild.length,
//                     },
//                     theme: {
//                         color: '#3399cc',
//                     },
//                     modal: {
//                         ondismiss: function() {
//                             toast({
//                                 title: "Payment cancelled",
//                                 variant: "default",
//                             });
//                             setLoading(false);
//                         }
//                     }
//                 };

//                 if (razorpayLoaded) {
//                     const rzp = new (window as any).Razorpay(options);
//                     rzp.open();
//                 } else {
//                     toast({
//                         title: "Payment gateway is still loading",
//                         description: "Please try again in a moment",
//                         variant: "destructive",
//                     });
//                 }
//             } else {
//                 throw new Error(response.message || "Failed to create order");
//             }
//         } catch (err: any) {
//             console.error("Error while making payment in subscription", err);
//             toast({
//                 title: "Something went wrong! Please try again later.",
//                 description: err.message,
//                 variant: "destructive",
//             });
//         } finally {
//             setLoading(false);
//             setLoadingMessage("");
//         }
//     };

//     const getParentChildren = async () => {
//         try {
//             const childrenArr: Child[] = [];
//             const parentInfo = localStorage.getItem("ParentInfo");
//             const parent = parentInfo ? JSON.parse(parentInfo) : null;
//             const res = await fetch(`/home/subscriptionPlans/subscribedChildren/api?id=${parent?.parent_id}`);
//             const response = await res.json();
//             if (response.status == 200) {
//                 response?.parentChildrenData?.forEach((child: any) => {
//                     const childInfo = {
//                         childId: child?.child_id,
//                         childName: child?.first_name,
//                         imageRoute: {
//                             uri: child?.file_path,
//                         },
//                     };
//                     childrenArr.push(childInfo);
//                 });
//                 setChildren([...childrenArr]);
//             }
//         } catch (err) {
//             console.error("Error getting children data in subscription plan", err);
//             toast({
//                 title: "Something went wrong!",
//                 variant: "destructive",
//             });
//         }
//     };

//     const getSubscribedChildrenHandler = async () => {
//         try {
//             const parentInfo = localStorage.getItem("ParentInfo");
//             const parent = parentInfo ? JSON.parse(parentInfo) : null;
//             const res = await fetch(`/home/subscriptionPlans/subscribedChildren/api?id=${parent?.parent_id}`);
//             const response = await res.json();
//             if (response.status == 200) {
//                 setSubscribedChildren(response?.subscribedChildrenData);
//             }
//         } catch (err) {
//             console.error("Error in getting subscribed children in subscription plan", err);
//             toast({
//                 title: "Something went wrong!",
//                 variant: "destructive",
//             });
//         }
//     };

//     const getSubscriptionPlans = async () => {
//         try {
//             const userInfo = localStorage.getItem("UserInfo");
//             const user = userInfo ? JSON.parse(userInfo) : null;
//             setLoading(true);
//             setLoadingMessage("Getting Subscription Plans...");
            
//             if (!user) {
//                 router.push("/login");
//                 return;
//             }
            
//             const platform = "web"; // Assuming web for Next.js
//             const res = await fetch(
//                 `/home/subscriptionPlans/api?platform=${platform}&country_code=${user?.contact_country_code}`
//             );
            
//             const response = await res.json();
        
//             if (response?.code === 200) {
//                 setLoading(false);
//                 setLoadingMessage("");
                
//                 const subscriptionPlanObject: Record<string, SubscriptionPlan[]> = {};
//                 response?.data?.forEach((subscriptionPlan: SubscriptionPlan) => {
//                     if (!subscriptionPlanObject[subscriptionPlan?.label]) {
//                         subscriptionPlanObject[subscriptionPlan?.label] = [];
//                     }
//                     subscriptionPlanObject[subscriptionPlan?.label].push(subscriptionPlan);
//                 });
                
//                 setSubscriptionPlans(subscriptionPlanObject);
//                 setSelectedSubscriptionPlanDuration(() => {
//                     return Object.entries(subscriptionPlanObject).length > 0
//                         ? Object.entries(subscriptionPlanObject)[0][0]
//                         : "";
//                 });
//             }
//         } catch (err: any) {
//             console.error("Error while getting subscription plans", err);
            
//             if (err.response?.data?.code === 404) {
//                 toast({
//                     title: "Subscription Plan unavailable",
//                     variant: "destructive",
//                 });
//                 return;
//             }
            
//             toast({
//                 title: "Could not fetch subscription Plans!",
//                 variant: "destructive",
//             });
//         } finally {
//             setLoading(false);
//             setLoadingMessage("");
//         }
//     };

//     const getStateData = async () => {
//         try {
//             const res = await fetch(`/state/api`);
//             const response = await res.json();
//             if (response.code === 200) {
//                 console.log(response)
//                 interface StateResponse {
//                     name: string;
//                     state_id: string;
//                 }

//                 const stateArr: State[] = response?.data.map((val: StateResponse) => ({
//                     label: val.name,
//                     value: val.state_id,
//                 }));
//                 setStateData(stateArr);
//             }
//         } catch (err) {
//             console.error("Error while fetching states", err);
//             toast({
//                 title: "Something Went Wrong!",
//                 variant: "destructive",
//             });
//         }
//     };

//     const getParentDetail = async () => {
//         try {
//             setLoading(true);
//             setLoadingMessage("Fetching Parent Details...");
//             const parentInfo = localStorage.getItem("ParentInfo");
//             const parent = parentInfo ? JSON.parse(parentInfo) : null;
//             const res = await fetch(`/home/subscriptionPlans/user/${parent?.parent_id}/api`);
//             const response = await res.json();
//             if (response.code === 200) {
//                 setParentDetails(response.data);
//                 setSelectedState(response?.data?.state_id || "");
//                 setDeliveryAddress(response?.data?.address || "");
//                 setPincode(response?.data?.pincode || "");
//             }
//         } catch (err) {
//             console.error("Error while getting parent details", err);
//             toast({
//                 title: "Something Went Wrong!",
//                 variant: "destructive",
//             });
//         } finally {
//             setLoading(false);
//             setLoadingMessage("");
//         }
//     };

//     useEffect(() => {
//         if (selectedChild.length === 0) {
//             setTotalAmount(0);
//             setPayableAmount(0);
//             setCouponDiscount(0);
//             return;
//         }

//         const baseTotalAmount =
//             Math.trunc(selectedSubscriptionPlan?.final_cost || 0) * selectedChild.length;

//         let discountedAmount = baseTotalAmount;

//         if (couponDiscountType === "PERCENTAGE") {
//             const discountAmount = (couponDiscount / 100) * baseTotalAmount;
//             discountedAmount = baseTotalAmount - discountAmount;
//         } else if (couponDiscountType === "FIXED_AMOUNT") {
//             discountedAmount = baseTotalAmount - couponDiscount * selectedChild.length;
//         }
        
//         const calPayableAmount = discountedAmount;
//         setTotalAmount(baseTotalAmount);
//         setPayableAmount(calPayableAmount);
//     }, [selectedSubscriptionPlan, couponDiscount, couponDiscountType, selectedChild]);

//     const handleKitSelection = (kit: number) => {
//         setSelectedSubscriptionPlan(null);
//         setSelectedChild([]);
//         setCouponCode("");
//         setAppliedCouponId("");
//         setTotalAmount(0);
//         setPayableAmount(0);
//         setCouponDiscount(0);
//         setCouponDiscountType("");
//         setSelectedSubscriptionKit(kit);
//     };

//     const handleDurationSelection = (duration: string) => {
//         setSelectedSubscriptionPlan(null);
//         setSelectedChild([]);
//         setCouponCode("");
//         setAppliedCouponId("");
//         setTotalAmount(0);
//         setPayableAmount(0);
//         setCouponDiscount(0);
//         setCouponDiscountType("");
//         setSelectedSubscriptionPlanDuration(duration);
//     };
        
//     useEffect(() => {
//         setLoading(true);
//         setLoadingMessage("");
//         getStateData();
//         getParentDetail(); // Only fetch once
//     }, []);
    
//     useEffect(() => {
//         if (parentDetails) {
//             getParentChildren();
//             getSubscribedChildrenHandler();
//             getSubscriptionPlans();
//         }
//     }, [parentDetails]);

//     useEffect(() => {
//         if (Object.entries(subscriptionPlans).length > 0 && selectedSubscriptionPlanDuration) {
//             const subscriptionPlansAccordingToDuration = subscriptionPlans[selectedSubscriptionPlanDuration];
//             setFilteredSubscriptionPlans(
//                 subscriptionPlansAccordingToDuration.filter((plan) => {
//                     if (selectedSubscriptionKit === 1) {
//                         return plan.kit_included == false;
//                     } else {
//                         return plan.kit_included == true;
//                     }
//                 })
//             );
//         }
//     }, [subscriptionPlans, selectedSubscriptionKit, selectedSubscriptionPlanDuration]);

//     return (
//         <div className="min-h-screen bg-white">
//             {/* Load Razorpay script */}
//             <Script
//                 id="razorpay-script"
//                 src="https://checkout.razorpay.com/v1/checkout.js"
//                 onLoad={() => setRazorpayLoaded(true)}
//                 onError={() => {
//                     toast({
//                         title: "Failed to load payment gateway",
//                         variant: "destructive",
//                     });
//                 }}
//             />
            
//             {loading ? (
//                 <div className="flex flex-col items-center justify-center h-screen">
//                     <Loader2 className="w-8 h-8 animate-spin text-primary" />
//                     {loadingMessage && <p className="mt-4 text-sm text-gray-600">{loadingMessage}</p>}
//                 </div>
//             ) : (
//                 <div className="w-full md:w-[80%] lg:w-[70%] px-4 py-8 mx-auto" ref={scrollViewRef}>
//                     {/* Subscription Plan Duration Selector */}
//                     {Object.keys(subscriptionPlans).length > 0 && (
//                         <div className="flex flex-row justify-evenly items-center p-2 mb-4">
//                             {Object.entries(subscriptionPlans).map(([duration]) => (
//                                 <Button
//                                     key={duration}
//                                     variant="ghost"
//                                     onClick={() => handleDurationSelection(duration)}
//                                     className={`px-4 py-2 rounded-none ${
//                                         selectedSubscriptionPlanDuration === duration
//                                             ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
//                                             : "text-gray-700"
//                                     }`}
//                                 >
//                                     {duration}
//                                 </Button>
//                             ))}
//                         </div>
//                     )}

//                     {/* Kit Selection */}
//                     <div className="flex flex-row justify-start items-center space-x-2 mb-6">
//                         {kitButtons.map((button) => (
//                             <Button
//                                 key={button.id}
//                                 variant={button.id === selectedSubscriptionKit ? "default" : "outline"}
//                                 onClick={() => handleKitSelection(button.id)}
//                                 className="min-w-[30%]"
//                             >
//                                 {button.button}
//                             </Button>
//                         ))}
//                     </div>

//                     {/* Subscription Plan Cards */}
//                     {/* {filteredSubscriptionPlans.length > 0 ? (
//                         <div className="mb-8">
//                             <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth space-x-4 pb-4">
//                                 {filteredSubscriptionPlans.length >0 && filteredSubscriptionPlans.map((plan) => (
//                                     <div key={plan.subscription_plan_id} className="flex-none snap-center w-full max-w-md">
//                                         <SubscriptionPlanCard
//                                             planDetails={plan}
//                                             scrollHandler={handleScrollDown}
//                                             selectedSubscriptionPlan={selectedSubscriptionPlan}
//                                             setSubscriptionPlan={setSelectedSubscriptionPlan}
//                                         />
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     ) : (
//                         <div className="flex justify-center items-center py-8">
//                             <p className="text-gray-500">No Plan Available</p>
//                         </div>
//                     )} */}
                        
//                         {filteredSubscriptionPlans.length > 0 ? (
//                         <div className="mb-8">
//                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
//                                 {filteredSubscriptionPlans.map((plan) => (
//                                     <div key={plan.subscription_plan_id} className="w-full">
//                                         <SubscriptionPlanCard
//                                             planDetails={plan}
//                                             scrollHandler={handleScrollDown}
//                                             selectedSubscriptionPlan={selectedSubscriptionPlan}
//                                             setSubscriptionPlan={setSelectedSubscriptionPlan}
//                                         />
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     ) : (
//                         <div className="flex justify-center items-center py-8">
//                             <p className="text-gray-500">No Plan Available</p>
//                         </div>
//                     )}

//                     {/* Select Child Section */}
//                     <div className="mb-8">
//                         <h2 className="text-lg font-semibold mb-1">Select Child</h2>
//                         <p className="text-sm text-gray-600 mb-4">
//                             Select your child to continue with payment.
//                         </p>
                        
//                         <div className="flex flex-wrap gap-3">
//                             {children.map((child) => {
//                                 const subscribed = subscribedChildren.some(
//                                     (val) => val.child_id == child.childId
//                                 );
//                                 const isSelected = selectedChild.some(
//                                     (val) => val.childId === child.childId
//                                 );

//                                 return (
//                                     <button
//                                         key={child.childId}
//                                         onClick={() => {
//                                             if (!subscribed) {
//                                                 if (selectedSubscriptionPlan) {
//                                                     childSelectionForSubscriptionHandler(child);
//                                                 } else {
//                                                     toast({
//                                                         title: "Select subscription plan",
//                                                         variant: "destructive",
//                                                     });
//                                                 }
//                                             }
//                                         }}
//                                         className="relative w-16 h-16 rounded-full overflow-hidden"
//                                     >
//                                         {(subscribed || isSelected) && (
//                                             <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
//                                                 <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
//                                                     <svg
//                                                         xmlns="http://www.w3.org/2000/svg"
//                                                         className="h-5 w-5 text-white"
//                                                         viewBox="0 0 20 20"
//                                                         fill="currentColor"
//                                                     >
//                                                         <path
//                                                             fillRule="evenodd"
//                                                             d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                                                             clipRule="evenodd"
//                                                         />
//                                                     </svg>
//                                                 </div>
//                                             </div>
//                                         )}
//                                         <img
//                                             src={child.imageRoute.uri}
//                                             alt={child.childName}
//                                             className="w-full h-full object-cover"
//                                         />
//                                     </button>
//                                 );
//                             })}
//                         </div>
//                     </div>

//                     {/* Coupon Code Section */}
//                     <div className="mb-8">
//                         <h2 className="text-lg font-semibold mb-4">Coupon Code</h2>
//                         <div className="flex flex-col sm:flex-row gap-4">
//                             <div className="flex-1">
//                                 <Input
//                                     value={couponCode}
//                                     onChange={(e) => couponCodeHandler(e.target.value)}
//                                     placeholder="Coupon Code"
//                                     maxLength={12}
//                                     className={couponErrMsg ? "border-red-500" : ""}
//                                 />
//                                 {couponErrMsg && (
//                                     <p className="mt-1 text-sm text-red-500">{couponErrMsg}</p>
//                                 )}
//                             </div>
//                             <Button onClick={validateCouponHandler}>Apply</Button>
//                         </div>
//                     </div>

//                     <Separator className="my-4" />

//                     {/* Delivery Address (only for With Kit option) */}
//                     {selectedSubscriptionKit == 2 && (
//                         <div className="mb-8">
//                             <h2 className="text-lg font-semibold mb-2">Delivery Address*</h2>
//                             <Textarea
//                                 value={deliveryAddress}
//                                 onChange={(e) => setDeliveryAddress(e.target.value)}
//                                 placeholder="Enter your address"
//                                 maxLength={250}
//                                 className="min-h-[90px]"
//                             />
//                             <p className="mt-1 text-sm text-gray-500">
//                                 *Please enter correct address for material kit delivery
//                             </p>
//                         </div>
//                     )}

//                     {/* Pincode (only for With Kit option) */}
//                     {selectedSubscriptionKit == 2 && (
//                         <div className="mb-8">
//                             <h2 className="text-lg font-semibold mb-2">Pincode*</h2>
//                             <Input
//                                 value={pincode}
//                                 onChange={(e) => {
//                                     if (!isNaN(Number(e.target.value))) {
//                                         setPincode(e.target.value);
//                                     }
//                                 }}
//                                 placeholder="Pincode"
//                                 maxLength={6}
//                             />
//                         </div>
//                     )}

//                     {/* State Selection */}
//                     <div className="mb-8">
//                         <h2 className="text-lg font-semibold mb-2">Select State*</h2>
//                         <Select
//                             value={selectedState}
//                             onValueChange={setSelectedState}
//                         >
//                             <SelectTrigger className="w-full">
//                                 <SelectValue placeholder="Select State" />
//                             </SelectTrigger>
//                             <SelectContent>
//                                 {stateData.length > 0 && stateData.map((state) => {
//                                     return  <SelectItem key={state.value} value={String(state.value)}>
//                                             {state.label}
//                                         </SelectItem>
//                                 })}
//                             </SelectContent>
//                         </Select>
//                     </div>

//                     <Separator className="my-4" />

//                     {/* Price Breakdown */}
//                     <div className="p-6 mb-8">
//                         <h2 className="text-lg font-semibold mb-4">Price Details</h2>
                        
//                         <div className="space-y-3">
//                             {selectedSubscriptionPlan && (
//                                 <div className="flex justify-between">
//                                     <span className="font-semibold">
//                                         {`${selectedSubscriptionPlan.name} - ${
//                                             selectedSubscriptionPlan.label.split(" ")[0]
//                                         }`}
//                                     </span>
//                                     <span>
//                                         {selectedSubscriptionPlan?.currency?.is_prefix
//                                             ? `${selectedSubscriptionPlan?.currency?.symbol} ${Math.trunc(
//                                                 selectedSubscriptionPlan?.final_cost
//                                             )}`
//                                             : `${Math.trunc(
//                                                 selectedSubscriptionPlan?.final_cost
//                                             )} ${selectedSubscriptionPlan?.currency.symbol}`}
//                                     </span>
//                                 </div>
//                             )}

//                             <div className="flex justify-between">
//                                 <span>Number of Child</span>
//                                 <span>{selectedChild.length}</span>
//                             </div>

//                             <div className="flex justify-between">
//                                 <span>Total Amount</span>
//                                 <span>
//                                     {selectedSubscriptionPlan
//                                         ? selectedSubscriptionPlan?.currency?.is_prefix
//                                             ? `${selectedSubscriptionPlan?.currency?.symbol} ${Math.trunc(
//                                                 totalAmount
//                                             )}`
//                                             : `${Math.trunc(totalAmount)} ${
//                                                 selectedSubscriptionPlan?.currency?.symbol
//                                             }`
//                                         : 0}
//                                 </span>
//                             </div>

//                             <div className="flex justify-between">
//                                 <span>Coupon Discount Per Child</span>
//                                 <span>
//                                     {couponDiscount && couponDiscountType === "PERCENTAGE"
//                                         ? `${Math.trunc(couponDiscount)}%`
//                                         : couponDiscountType === "FIXED_AMOUNT"
//                                         ? selectedSubscriptionPlan?.currency?.is_prefix
//                                             ? `${selectedSubscriptionPlan?.currency?.symbol} ${Math.trunc(
//                                                 couponDiscount
//                                             )}`
//                                             : `${Math.trunc(couponDiscount)} ${
//                                                 selectedSubscriptionPlan?.currency?.symbol
//                                             }`
//                                         : couponDiscountType === "DURATION_INCREASE"
//                                         ? `${Math.trunc(couponDiscount)} days`
//                                         : 0}
//                                 </span>
//                             </div>

//                             <Separator className="my-2" />

//                             <div className="flex justify-between font-semibold">
//                                 <span>Payable Amount</span>
//                                 <span>
//                                     {selectedSubscriptionPlan && payableAmount
//                                         ? selectedSubscriptionPlan?.currency?.is_prefix
//                                             ? `${selectedSubscriptionPlan?.currency?.symbol} ${Math.trunc(
//                                                 payableAmount
//                                             )}`
//                                             : `${Math.trunc(payableAmount)} ${
//                                                 selectedSubscriptionPlan?.currency?.symbol
//                                             }`
//                                         : 0}
//                                 </span>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Refund Policy Link */}
//                     <div className="text-right mb-6">
//                         <button
//                             onClick={() => router.push("/refund-policy")}
//                             className="text-sm text-blue-500 hover:underline"
//                         >
//                             Refund Policy*
//                         </button>
//                     </div>

//                     {/* Payment Button */}
//                     <div className="flex justify-center">
//                         <Button
//                             onClick={makeSubscriptionPaymentHandler}
//                             size="lg"
//                             className="w-full max-w-xs"
//                             disabled={!razorpayLoaded}
//                         >
//                             {razorpayLoaded ? "Make Payment" : "Loading Payment..."}
//                         </Button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// Disabled monthly and with kit and non kit filter to show subscription plan card

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useToast } from '@/hooks/use-toast';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from 'next/image';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Loader2 } from "lucide-react";
import {  DownloadAppModal, FAQAccordian, FeatureListCard, SubscriptionPlanCard } from "@/index";
import { Textarea } from "@/components/ui/textarea";
import Script from "next/script";
import { poppinsBold, poppinsRegular } from "@/fonts/fonts";
// import { set } from "date-fns";

interface Child {
  childId: string;
  childName: string;
  imageRoute: {
    uri: string;
  };
}

interface SubscriptionPlan {
  subscription_plan_id: number;
  name: string;
    label: string;
    description: string,
  final_cost: number;
  kit_included: boolean;
  currency: {
    is_prefix: boolean;
    symbol: string;
    };
    features: [];
  // Add other properties as needed
}

interface State {
  label: string;
  value: string;
}

export default function SubscriptionPlans() {
    const router = useRouter();
    const { toast } = useToast();
    const scrollViewRef = useRef<HTMLDivElement>(null);

    const [children, setChildren] = useState<Child[]>([]);
    const [subscribedChildren, setSubscribedChildren] = useState<any[]>([]);
    // const [subscriptionPlans, setSubscriptionPlans] = useState<Record<string, SubscriptionPlan[]>>({});
    // const [subscriptionPlans, setSubscriptionPlans] = useState< SubscriptionPlan[]>([]);
    const [filteredSubscriptionPlans, setFilteredSubscriptionPlans] = useState<SubscriptionPlan[]>([]);
    const [selectedSubscriptionPlan, setSelectedSubscriptionPlan] = useState<SubscriptionPlan | null>(null);
    // const [selectedSubscriptionPlanDuration, setSelectedSubscriptionPlanDuration] = useState("");
    // const [selectedSubscriptionKit, setSelectedSubscriptionKit] = useState(1);
    const [selectedChild, setSelectedChild] = useState<Child[]>([]);
    const [stateData, setStateData] = useState<State[]>([]);
    const [selectedState, setSelectedState] = useState("");
    const [deliveryAddress, setDeliveryAddress] = useState("");
    const [pincode, setPincode] = useState("");
    const [couponCode, setCouponCode] = useState("");
    const [couponDiscountType, setCouponDiscountType] = useState("");
    const [couponDiscount, setCouponDiscount] = useState(0);
    const [appliedCouponId, setAppliedCouponId] = useState("");
    const [totalAmount, setTotalAmount] = useState(0);
    const [payableAmount, setPayableAmount] = useState(0);
    const [couponErrMsg, setCouponErrMsg] = useState("");
    const [parentDetails, setParentDetails] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState("");
    const [razorpayLoaded, setRazorpayLoaded] = useState(false);
    const [showAppDownloadModal, setShowAppDownloadModal] = useState(false);
    

    // const kitButtons = [
    //     { id: 1, button: "Without Kit" },
    //     { id: 2, button: "With Kit" },
    // ];

    const handleScrollDown = () => {
        scrollViewRef.current?.scrollTo({
            top: scrollViewRef.current.scrollHeight,
            behavior: "smooth",
        });
    };

    const childSelectionForSubscriptionHandler = (child: Child) => {
        setCouponErrMsg("");
        if (selectedChild.some((val) => val.childId == child.childId)) {
            setSelectedChild(selectedChild.filter((val) => val.childId != child.childId));
        } else {
            setSelectedChild([...selectedChild, child]);
        }
    };

    const couponCodeHandler = (val: string) => {
        setCouponErrMsg("");
        setCouponCode(val);
    };

    const validateCouponHandler = async () => {
        try {
            setLoading(true);
            setLoadingMessage("Validating Coupon Code...");
            const userInfo = localStorage.getItem("UserInfo");
            const user = userInfo ? JSON.parse(userInfo) : null;

            if (!selectedSubscriptionPlan) {
                setCouponErrMsg("Select subscription plan first");
                return;
            }
            if (selectedChild.length == 0) {
                setCouponErrMsg("Select child first");
                return;
            }
            if (!couponCode) {
                setCouponErrMsg("Enter Valid Coupon Code");
                return;
            }
            if (!/^[A-Z0-9]+$/.test(couponCode)) {
                setCouponErrMsg("Invalid Coupon Code");
                return;
            }

            const data = {
                coupon_code: couponCode.toUpperCase(),
                user_id: user?.user_id,
                subscription_plan_id: parseInt(selectedSubscriptionPlan.subscription_plan_id.toString()),
            };

            const res = await fetch('/home/subscriptionPlans/coupon/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const response = await res.json();

            if (response.code === 400) {
                toast({
                    title: "Invalid Coupon",
                    variant: "destructive",
                });
                return;
            }
            
            if (response.code === 403) {
                toast({
                    title: "Coupon not valid for you",
                    variant: "destructive",
                });
                return;
            }
            
            if (response.code === 404) {
                toast({
                    title: "Coupon doesn't exist",
                    variant: "destructive",
                });
                return;
             }
      
            if (response.code === 200) {
                toast({
                    title: "Coupon Applied Successfully!",
                    variant: "default",
                });
                setCouponDiscountType(response?.data?.discount_type);
                setCouponDiscount(response?.data?.discount_value);
                setAppliedCouponId(response?.data?.coupon_id);
            }
        } catch (err: any) {
            console.error("Error while applying coupon", err);
      
            if (err.code === 404) {
                toast({
                    title: "Coupon doesn't exist",
                    variant: "destructive",
                });
                return;
            }
            if (err.code === 403) {
                toast({
                    title: "Coupon is not valid for you",
                    variant: "destructive",
                });
                return;
            }
            if (err.code === 400) {
                toast({
                    title: "Invalid Coupon",
                    variant: "destructive",
                });
                return;
            }
      
            toast({
                title: "Something Went Wrong!",
                variant: "destructive",
            });
        } finally {
            setLoading(false);
            setLoadingMessage("");
        }
    };

    const updateParent = async (selectedState: string, deliveryAddress: string, pincode: string) => {
        try {
            const parentInfo = JSON.parse(localStorage.getItem('ParentInfo') || '{}');
      const parentId = parentInfo?.parent_id;
            const formData = new FormData();
            
            formData.append('pincode', pincode);
            formData.append('state_id', selectedState);
            formData.append('address', deliveryAddress);
      
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
      
        } catch (err) {
            console.error("Error While Updating Parent Information", err);
        }
    };

    const makeSubscriptionPaymentHandler = async () => {
        try {
            if (!selectedSubscriptionPlan) {
                toast({
                    title: "Please select a subscription plan",
                    variant: "destructive",
                });
                return;
            }

            if (selectedChild.length <= 0) {
                toast({
                    title: "Please select a child",
                    variant: "destructive",
                });
                return;
            }

            // if (selectedSubscriptionKit == 2 && !deliveryAddress) {
            //     toast({
            //         title: "Please provide delivery address",
            //         variant: "destructive",
            //     });
            //     return;
            // }

            // if (selectedSubscriptionKit == 2 && !pincode) {
            //     toast({
            //         title: "Please provide pincode",
            //         variant: "destructive",
            //     });
            //     return;
            // }

            if (selectedSubscriptionPlan?.kit_included  && !deliveryAddress) {
                toast({
                    title: "Please provide delivery address",
                    variant: "destructive",
                });
                return;
            }

            if (selectedSubscriptionPlan?.kit_included && !pincode) {
                toast({
                    title: "Please provide pincode",
                    variant: "destructive",
                });
                return;
            }

            if (parentDetails?.contact_country_code == 1 && !selectedState) {
                toast({
                    title: "Please select a state",
                    variant: "destructive",
                });
                return;
            }

            if (payableAmount <= 0) {
                return;
            }

            await updateParent(selectedState, deliveryAddress, pincode);

            const selectedChildrens = selectedChild.map((child) =>
                parseInt(child.childId)
            );
        
            const userInfo = localStorage.getItem("UserInfo");
            const user = userInfo ? JSON.parse(userInfo) : null;

            const data = {
                subscription_plan_id: parseInt(selectedSubscriptionPlan.subscription_plan_id.toString()),
                user_id: parseInt(user?.user_id || "0"),
                child_ids: selectedChildrens,
                coupon_id: parseInt(appliedCouponId) || null,
                state_id: parseInt(selectedState),
                created_by: user?.first_name || "",
            };

            setLoading(true);
            setLoadingMessage("Creating order...");
            const res = await fetch("/home/subscriptionPlans/subscription/api", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const response = await res.json();

            if (response && response.code === 201) {
                // Initialize Razorpay payment
                const options = {
                    key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                    amount: payableAmount * 100, // Razorpay expects amount in paise
                    currency: 'INR',
                    name: 'Adeptify Technologies Pvt Ltd',
                    description: selectedSubscriptionPlan.name,
                    order_id: response.razorpay_order_id,
                    handler: async function (response: any) {
                        // Handle successful payment
                        console.log('Payment successful:', response);
                        
                        try {
                            setLoading(true);
                            setLoadingMessage(
                                `Please wait while we prepare your subscription features! It will take a moment...`
                            );
                            
                            // Verify payment on your server
                            // const verificationRes = await fetch('/api/verify-payment', {
                            //     method: 'POST',
                            //     headers: {
                            //         'Content-Type': 'application/json',
                            //     },
                            //     body: JSON.stringify({
                            //         razorpay_payment_id: response.razorpay_payment_id,
                            //         razorpay_order_id: response.razorpay_order_id,
                            //         razorpay_signature: response.razorpay_signature,
                            //         amount: payableAmount,
                            //         subscription_data: data
                            //     }),
                            // });
                            
                            // const verificationData = await verificationRes.json();
                            
                            // if (verificationData.success) {
                                // toast({
                                //     title: "Payment successful! Subscription activated.",
                                //     variant: "default",
                                // });
                                //  else {
                            //     toast({
                            //         title: "Payment verification failed",
                            //         description: "Please contact support",
                            //         variant: "destructive",
                            //     });
                            // }
                            // } 
                            
                            await fetch('/home/featureAssignment/subscription/activity/api', {
                                method:"POST",
                                headers: {  
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    child_ids: selectedChildrens,
                                    is_trial : false
                                }),
                            })

                            await fetch('/home/featureAssignment/subscription/caseStudy/api', {
                                method:"POST",
                                headers: {  
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    child_ids: selectedChildrens,
                                    is_trial : false
                                }),
                            })

                            await fetch('/home/featureAssignment/subscription/riddle/api', {
                                method:"POST",
                                headers: {  
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    user_id: parseInt(user?.user_id)
                                }),
                            }) 

                            await fetch('/home/featureAssignment/subscription/shlok/api', {
                                method:"POST",
                                headers: {  
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    child_ids: selectedChildrens
                                }),
                            }) 

                            await fetch('/home/featureAssignment/subscription/story/api', {
                                method:"POST",
                                headers: {  
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    child_ids: selectedChildrens,
                                    is_trial: false
                                }),
                            }) 

                            await fetch('/home/featureAssignment/subscription/virtue/api', {
                                method:"POST",
                                headers: {  
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    user_id: parseInt(user?.user_id),
                                    is_trial: false
                                }),
                            }) 

                            await fetch('/home/featureAssignment/subscription/wordle/api', {
                                method:"POST",
                                headers: {  
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    child_ids: selectedChildrens
                                }),
                            })

                            await fetch('/home/featureAssignment/subscription/kyc/api', {
                                method:"POST",
                                headers: {  
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    parent_id: parseInt(parentDetails?.parent_id),
                                    child_ids: selectedChildrens,
                                    is_trial: false
                                }),
                            }) 

                            await fetch('/home/featureAssignment/subscription/wonderchat/api', {
                                method:"POST",
                                headers: {  
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    parent_id: parseInt(parentDetails?.parent_id),
                                    child_ids: selectedChildrens,
                                    is_trial: false
                                }),
                            }) 

                            setShowAppDownloadModal(true);
                            // const featureAssignmentRes = await fetch('/home/featureAssignment/subscription/api', {
                            //     method:"POST",
                            //     headers: {  
                            //         'Content-Type': 'application/json',
                            //     },
                            //     body: JSON.stringify({
                            //         child_ids: selectedChildrens,
                            //         user_id: parseInt(user?.user_id || "0"),
                            //         parent_id: parseInt(user?.parent?.parent_id || "0")
                            //     }),
                            // });

                            // const featureAssignmentResponse = await featureAssignmentRes.json();
                            // console.log("FEATURE ASSINGMENT RESPONSE", featureAssignmentResponse)
                            // if (featureAssignmentResponse.code === 200) {
                            //     router.push("/")
                            // } else {
                            //     toast({
                            //         title: "Error while assigning Features, contact Ulti-Mate",
                            //         variant: "destructive",
                            //     });
                            //     return;
                            // }
                                
                                // router.push("/dashboard");
                        }
                            
                        catch (error) {
                            console.error("Payment verification error:", error);
                            toast({
                                title: "Payment verification error",
                                description: "Please contact support",
                                variant: "destructive",
                            });
                        } finally {
                            setLoading(false);
                            setLoadingMessage("");
                        }
                    },
                    // prefill: {
                    //     email: user?.username,
                    //     contact: user?.contact_number,
                    // },
                    notes: {
                        address: deliveryAddress,
                        subscription_plan: selectedSubscriptionPlan.name,
                        children_count: selectedChild.length,
                    },
                    theme: {
                        color: '#3399cc',
                    },
                    modal: {
                        ondismiss: function() {
                            toast({
                                title: "Payment cancelled",
                                variant: "default",
                            });
                            setLoading(false);
                        }
                    }
                };

                if (razorpayLoaded) {
                    const rzp = new (window as any).Razorpay(options);
                    rzp.open();
                } else {
                    toast({
                        title: "Payment gateway is still loading",
                        description: "Please try again in a moment",
                        variant: "destructive",
                    });
                }
            } else {
                throw new Error(response.message || "Failed to create order");
            }
        } catch (err: any) {
            console.error("Error while making payment in subscription", err);
            toast({
                title: "Something went wrong! Please try again later.",
                description: err.message,
                variant: "destructive",
            });
        } finally {
            setLoading(false);
            setLoadingMessage("");
        }
    };

    const getParentChildren = async () => {
        try {
            const childrenArr: Child[] = [];
            const parentInfo = localStorage.getItem("ParentInfo");
            const parent = parentInfo ? JSON.parse(parentInfo) : null;
            const res = await fetch(`/home/subscriptionPlans/subscribedChildren/api?id=${parent?.parent_id}`);
            const response = await res.json();
            if (response.status == 200) {
                response?.parentChildrenData?.forEach((child: any) => {
                    const childInfo = {
                        childId: child?.child_id,
                        childName: child?.first_name,
                        imageRoute: {
                            uri: child?.file_path,
                        },
                    };
                    childrenArr.push(childInfo);
                });
                setChildren([...childrenArr]);
            }
        } catch (err) {
            console.error("Error getting children data in subscription plan", err);
            toast({
                title: "Something went wrong!",
                variant: "destructive",
            });
        }
    };

    const getSubscribedChildrenHandler = async () => {
        try {
            const parentInfo = localStorage.getItem("ParentInfo");
            const parent = parentInfo ? JSON.parse(parentInfo) : null;
            const res = await fetch(`/home/subscriptionPlans/subscribedChildren/api?id=${parent?.parent_id}`);
            const response = await res.json();
            if (response.status == 200) {
                setSubscribedChildren(response?.subscribedChildrenData);
            }
        } catch (err) {
            console.error("Error in getting subscribed children in subscription plan", err);
            toast({
                title: "Something went wrong!",
                variant: "destructive",
            });
        }
    };

    const getSubscriptionPlans = async () => {
        try {
            const userInfo = localStorage.getItem("UserInfo");
            const user = userInfo ? JSON.parse(userInfo) : null;
            setLoading(true);
            setLoadingMessage("Getting Subscription Plans...");
            
            if (!user) {
                router.push("/login");
                return;
            }
            
            const platform = "web"; // Assuming web for Next.js
            const res = await fetch(
                `/home/subscriptionPlans/api?platform=${platform}&country_code=${user?.contact_country_code}`
            );
            
            const response = await res.json();
        
            if (response?.code === 200) {
                setLoading(false);
                setLoadingMessage("");
                
                // const subscriptionPlanObject: Record<string, SubscriptionPlan[]> = {};
                // response?.data?.forEach((subscriptionPlan: SubscriptionPlan) => {
                //     if (!subscriptionPlanObject[subscriptionPlan?.label]) {
                //         subscriptionPlanObject[subscriptionPlan?.label] = [];
                //     }
                //     subscriptionPlanObject[subscriptionPlan?.label].push(subscriptionPlan);
                // });
                
                // setSubscriptionPlans(subscriptionPlanObject);
                // setSelectedSubscriptionPlanDuration(() => {
                //     return Object.entries(subscriptionPlanObject).length > 0 
                //         ? Object.entries(subscriptionPlanObject)[0][0] 
                //         : "";
                // });
                
                setFilteredSubscriptionPlans(response?.data || []);
                setSelectedSubscriptionPlan(response?.data[0] || null);
            }
        } catch (err: any) {
            console.error("Error while getting subscription plans", err);
            
            if (err.response?.data?.code === 404) {
                toast({
                    title: "Subscription Plan unavailable",
                    variant: "destructive",
                });
                return;
            }
            
            toast({
                title: "Could not fetch subscription Plans!",
                variant: "destructive",
            });
        } finally {
            setLoading(false);
            setLoadingMessage("");
        }
    };

    const getStateData = async () => {
        try {
            const res = await fetch(`/state/api`);
            const response = await res.json();
            if (response.code === 200) {
                interface StateResponse {
                    name: string;
                    state_id: string;
                }

                const stateArr: State[] = response?.data.map((val: StateResponse) => ({
                    label: val.name,
                    value: val.state_id,
                }));
                setStateData(stateArr);
            }
        } catch (err) {
            console.error("Error while fetching states", err);
            toast({
                title: "Something Went Wrong!",
                variant: "destructive",
            });
        }
    };

    const getParentDetail = async () => {
        try {
            setLoading(true);
            setLoadingMessage("Fetching Parent Details...");
            const parentInfo = localStorage.getItem("ParentInfo");
            const parent = parentInfo ? JSON.parse(parentInfo) : null;
            const res = await fetch(`/home/subscriptionPlans/user/${parent?.parent_id}/api`);
            const response = await res.json();
            if (response.code === 200) {
                setParentDetails(response.data);
                setSelectedState(response?.data?.state_id || "");
                setDeliveryAddress(response?.data?.address || "");
                setPincode(response?.data?.pincode || "");
            }
        } catch (err) {
            console.error("Error while getting parent details", err);
            toast({
                title: "Something Went Wrong!",
                variant: "destructive",
            });
        } finally {
            setLoading(false);
            setLoadingMessage("");
        }
    };

    useEffect(() => {
        if (selectedChild.length === 0) {
            setTotalAmount(0);
            setPayableAmount(0);
            setCouponDiscount(0);
            return;
        }

        const baseTotalAmount =
            Math.trunc(selectedSubscriptionPlan?.final_cost || 0) * selectedChild.length;

        let discountedAmount = baseTotalAmount;

        if (couponDiscountType === "PERCENTAGE") {
            const discountAmount = (couponDiscount / 100) * baseTotalAmount;
            discountedAmount = baseTotalAmount - discountAmount;
        } else if (couponDiscountType === "FIXED_AMOUNT") {
            discountedAmount = baseTotalAmount - couponDiscount * selectedChild.length;
        }
        
        const calPayableAmount = discountedAmount;
        setTotalAmount(baseTotalAmount);
        setPayableAmount(calPayableAmount);
    }, [selectedSubscriptionPlan, couponDiscount, couponDiscountType, selectedChild]);

    // const handleKitSelection = (kit: number) => {
    //     setSelectedSubscriptionPlan(null);
    //     setSelectedChild([]);
    //     setCouponCode("");
    //     setAppliedCouponId("");
    //     setTotalAmount(0);
    //     setPayableAmount(0);
    //     setCouponDiscount(0);
    //     setCouponDiscountType("");
    //     setSelectedSubscriptionKit(kit);
    // };

    // const handleDurationSelection = (duration: string) => {
    //     setSelectedSubscriptionPlan(null);
    //     setSelectedChild([]);
    //     setCouponCode("");
    //     setAppliedCouponId("");
    //     setTotalAmount(0);
    //     setPayableAmount(0);
    //     setCouponDiscount(0);
    //     setCouponDiscountType("");
    //     setSelectedSubscriptionPlanDuration(duration);
    // };
        
    useEffect(() => {
        setLoading(true);
        setLoadingMessage("");
        getStateData();
        getParentDetail(); // Only fetch once
    }, []);
    
    useEffect(() => {
        if (parentDetails) {
            getParentChildren();
            getSubscribedChildrenHandler();
            getSubscriptionPlans();
        }
    }, [parentDetails]);

    // useEffect(() => {
    //     if (Object.entries(subscriptionPlans).length > 0 && selectedSubscriptionPlanDuration) {
    //         const subscriptionPlansAccordingToDuration = subscriptionPlans[selectedSubscriptionPlanDuration];
    //         setFilteredSubscriptionPlans(
    //             subscriptionPlansAccordingToDuration.filter((plan) => {
    //                 if (selectedSubscriptionKit === 1) {
    //                     return plan.kit_included == false;
    //                 } else {
    //                     return plan.kit_included == true;
    //                 }
    //             })
    //         );
    //     }
    // }, [subscriptionPlans, selectedSubscriptionKit, selectedSubscriptionPlanDuration]);

    return (
        <div className="min-h-screen bg-white">
            {/* Load Razorpay script */}
            <Script
                id="razorpay-script"
                src="https://checkout.razorpay.com/v1/checkout.js"
                onLoad={() => setRazorpayLoaded(true)}
                onError={() => {
                    toast({
                        title: "Failed to load payment gateway",
                        variant: "destructive",
                    });
                }}
            />
            
            {loading ? (
                <div className="flex flex-col items-center justify-center h-screen">
                    <Loader2 className="w-8 h-8 animate-spin text-primary" />
                    {loadingMessage && <p className="mt-4 text-sm text-gray-600">{loadingMessage}</p>}
                </div>
            ) : (
                    <div className="w-full md:w-[80%] lg:w-[70%] px-4 py-8 mx-auto" ref={scrollViewRef}>
                        <h1 className={`${poppinsBold.className} text-center md:text-xl text-md text-black`}>Invest in Better Parenting — One Subscription at a Time</h1>
                        <div className="w-[80%] lg:w-[70%] mx-auto text-center my-4">
                            <p className={`${poppinsRegular.className} text-center md:text-md text-sm text-black`}>Join thousands of Indian parents building stronger bonds and brighter futures with our expert-backed parenting tools.</p>
                        </div>
                    {/* Subscription Plan Duration Selector */}
                    {/* {Object.keys(subscriptionPlans).length > 0 && (
                        <div className="flex flex-row justify-evenly items-center p-2 mb-4">
                            {Object.entries(subscriptionPlans).map(([duration]) => (
                                <Button
                                    key={duration}
                                    variant="ghost"
                                    onClick={() => handleDurationSelection(duration)}
                                    className={`px-4 py-2 rounded-none ${
                                        selectedSubscriptionPlanDuration === duration
                                            ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
                                            : "text-gray-700"
                                    }`}
                                >
                                    {duration}
                                </Button>
                            ))}
                        </div>
                    )} */}

                    {/* Kit Selection */}
                    {/* <div className="flex flex-row justify-start items-center space-x-2 mb-6">
                        {kitButtons.map((button) => (
                            <Button
                                key={button.id}
                                variant={button.id === selectedSubscriptionKit ? "default" : "outline"}
                                onClick={() => handleKitSelection(button.id)}
                                className="min-w-[30%]"
                            >
                                {button.button}
                            </Button>
                        ))}
                    </div> */}

                        
                        {/* {filteredSubscriptionPlans.length > 0 ? (
                        <div className="mb-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                                {filteredSubscriptionPlans.map((plan) => (
                                    <div key={plan.subscription_plan_id} className="w-full">
                                        <SubscriptionPlanCard
                                            planDetails={plan}
                                            scrollHandler={handleScrollDown}
                                            selectedSubscriptionPlan={selectedSubscriptionPlan}
                                            setSubscriptionPlan={setSelectedSubscriptionPlan}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="flex justify-center items-center py-8">
                            <p className="text-gray-500">No Plan Available</p>
                        </div>
                    )} */}
                        
                        {/* <div className="w-full md:w-[80%] lg:w-[70%] px-4 py-8 mx-auto" ref={scrollViewRef}> */}
                        {/* <div className="flex flex-col lg:flex-row gap-8 lg:h-['40vh'] my-8"> */}
                        <div className="flex flex-col lg:flex-row gap-8 my-8">
  {/* Features Section - Left side on large screens */}
  <div className="lg:w-[50%]">
    {selectedSubscriptionPlan && selectedSubscriptionPlan.features.length > 0 && (
      <div className="rounded-lg bg-[#F3FCFF] border border-[#00BBFF] shadow-md h-full flex flex-col">
        {/* Features List with Show More toggle - now with constrained height and scroll */}
        <div className="lg:overflow-y-auto lg:flex-grow lg:max-h-[55vh]"> 
          <FeatureListCard features={selectedSubscriptionPlan.features} maxHeight="none" />
        </div>
      </div>
    )}
  </div>

  {/* Plan Cards Section - Right side on large screens */}
  <div className="w-full lg:w-[50%] ">
    <div className="w-full  md:grid md:grid-cols-1 gap-2 h-full">
      {filteredSubscriptionPlans.map((plan) => (
        <div key={plan.subscription_plan_id} className="w-full h-full">
          <SubscriptionPlanCard
            planDetails={plan}
            scrollHandler={handleScrollDown}
            selectedSubscriptionPlan={selectedSubscriptionPlan}
            setSubscriptionPlan={setSelectedSubscriptionPlan}
          />
        </div>
      ))}
    </div>
  </div>
</div>



                    {/* Select Child Section */}
                    <div className="mb-8">
                        <h2 className="text-lg font-semibold mb-1">Select Child</h2>
                        <p className="text-sm text-gray-600 mb-4">
                            Select your child to continue with payment.
                        </p>
                        
                        <div className="flex flex-wrap gap-3">
                            {children.map((child) => {
                                const subscribed = subscribedChildren.some(
                                    (val) => val.child_id == child.childId
                                );
                                const isSelected = selectedChild.some(
                                    (val) => val.childId === child.childId
                                );

                                return (
                                    <button
                                        key={child.childId}
                                        onClick={() => {
                                            if (!subscribed) {
                                                if (selectedSubscriptionPlan) {
                                                    childSelectionForSubscriptionHandler(child);
                                                } else {
                                                    toast({
                                                        title: "Select subscription plan",
                                                        variant: "destructive",
                                                    });
                                                }
                                            }
                                        }}
                                        className="relative w-16 h-16 rounded-full overflow-hidden"
                                    >
                                        {(subscribed || isSelected) && (
                                            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                                                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5 text-white"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        )}
                                        
                                        <Image
                                            src={child.imageRoute.uri}
                                            alt={child.childName}
                                            width={64} // Adjust width as needed
                                            height={64} // Adjust height as needed
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Coupon Code Section */}
                    <div className="mb-8">
                        <h2 className="text-lg font-semibold mb-4">Coupon Code</h2>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1">
                                <Input
                                    value={couponCode}
                                    onChange={(e) => couponCodeHandler(e.target.value.toUpperCase())}
                                    placeholder="Coupon Code"
                                    maxLength={12}
                                    className={couponErrMsg ? "border-red-500" : ""}
                                />
                                {couponErrMsg && (
                                    <p className="mt-1 text-sm text-red-500">{couponErrMsg}</p>
                                )}
                            </div>
                            <Button onClick={validateCouponHandler}>Apply</Button>
                        </div>
                    </div>

                    <Separator className="my-4" />

                    {/* Delivery Address (only for With Kit option) */}
                    {/* {selectedSubscriptionKit == 2 && (
                        <div className="mb-8">
                            <h2 className="text-lg font-semibold mb-2">Delivery Address*</h2>
                            <Textarea
                                value={deliveryAddress}
                                onChange={(e) => setDeliveryAddress(e.target.value)}
                                placeholder="Enter your address"
                                maxLength={250}
                                className="min-h-[90px]"
                            />
                            <p className="mt-1 text-sm text-gray-500">
                                *Please enter correct address for material kit delivery
                            </p>
                        </div>
                    )} */}
                        
                        {selectedSubscriptionPlan?.kit_included && (
                        <div className="mb-8">
                            <h2 className="text-lg font-semibold mb-2">Delivery Address*</h2>
                            <Textarea
                                value={deliveryAddress}
                                onChange={(e) => setDeliveryAddress(e.target.value)}
                                placeholder="Enter your address"
                                maxLength={250}
                                className="min-h-[90px]"
                            />
                            <p className="mt-1 text-sm text-gray-500">
                                *Please enter correct address for material kit delivery
                            </p>
                        </div>
                    )}

                    {/* Pincode (only for With Kit option) */}
                    {/* {selectedSubscriptionKit == 2 && (
                        <div className="mb-8">
                            <h2 className="text-lg font-semibold mb-2">Pincode*</h2>
                            <Input
                                value={pincode}
                                onChange={(e) => {
                                    if (!isNaN(Number(e.target.value))) {
                                        setPincode(e.target.value);
                                    }
                                }}
                                placeholder="Pincode"
                                maxLength={6}
                            />
                        </div>
                    )} */}
                        
                        {selectedSubscriptionPlan?.kit_included && (
                        <div className="mb-8">
                            <h2 className="text-lg font-semibold mb-2">Pincode*</h2>
                            <Input
                                value={pincode}
                                onChange={(e) => {
                                    if (!isNaN(Number(e.target.value))) {
                                        setPincode(e.target.value);
                                    }
                                }}
                                placeholder="Pincode"
                                maxLength={6}
                            />
                        </div>
                    )}

                    {/* State Selection */}
                   {parentDetails?.contact_country_code == 1 && <div className="mb-8">
                        <h2 className="text-lg font-semibold mb-2">Select State*</h2>
                        <Select
                            value={selectedState}
                            onValueChange={setSelectedState}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select State" />
                            </SelectTrigger>
                            <SelectContent>
                                {stateData.length > 0 && stateData.map((state) => {
                                    return  <SelectItem key={state.value} value={String(state.value)}>
                                            {state.label}
                                        </SelectItem>
                                })}
                            </SelectContent>
                        </Select>
                    </div>
}
                    <Separator className="my-4" />

                    {/* Price Breakdown */}
                    <div className="p-6 mb-8">
                        <h2 className="text-lg font-semibold mb-4">Price Details</h2>
                        
                        <div className="space-y-3">
                            {selectedSubscriptionPlan && (
                                <div className="flex justify-between">
                                    <span className="font-semibold">
                                        {`${selectedSubscriptionPlan?.description}`}
                                    </span>
                                    <span>
                                        {selectedSubscriptionPlan?.currency?.is_prefix
                                            ? `${selectedSubscriptionPlan?.currency?.symbol} ${Math.trunc(
                                                selectedSubscriptionPlan?.final_cost
                                            )}`
                                            : `${Math.trunc(
                                                selectedSubscriptionPlan?.final_cost
                                            )} ${selectedSubscriptionPlan?.currency.symbol}`}
                                    </span>
                                </div>
                            )}

                            <div className="flex justify-between">
                                <span>Number of Child</span>
                                <span>{selectedChild.length}</span>
                            </div>

                            <div className="flex justify-between">
                                <span>Total Amount</span>
                                <span>
                                    {selectedSubscriptionPlan
                                        ? selectedSubscriptionPlan?.currency?.is_prefix
                                            ? `${selectedSubscriptionPlan?.currency?.symbol} ${Math.trunc(
                                                totalAmount
                                            )}`
                                            : `${Math.trunc(totalAmount)} ${
                                                selectedSubscriptionPlan?.currency?.symbol
                                            }`
                                        : 0}
                                </span>
                            </div>

                            {couponDiscount > 0 && <div className="flex justify-between">
                                <span>Total Coupon Discount</span>
                                <span>
                                    {couponDiscount && couponDiscountType === "PERCENTAGE"
                                        ? `${Math.trunc(couponDiscount) * selectedChild.length}%`
                                        : couponDiscountType === "FIXED_AMOUNT"
                                        ? selectedSubscriptionPlan?.currency?.is_prefix
                                            ? `${selectedSubscriptionPlan?.currency?.symbol} ${Math.trunc(
                                                couponDiscount
                                            ) * selectedChild.length}`
                                            : `${Math.trunc(couponDiscount)} ${
                                                selectedSubscriptionPlan?.currency?.symbol
                                            }`
                                        : couponDiscountType === "DURATION_INCREASE"
                                        ? `${Math.trunc(couponDiscount) * selectedChild.length} days`
                                        : 0}
                                </span>
                            </div>}

                            <Separator className="my-2" />

                            <div className="flex justify-between font-semibold">
                                <span>Payable Amount</span>
                                <span>
                                    {selectedSubscriptionPlan && payableAmount
                                        ? selectedSubscriptionPlan?.currency?.is_prefix
                                            ? `${selectedSubscriptionPlan?.currency?.symbol} ${Math.trunc(
                                                payableAmount
                                            )}`
                                            : `${Math.trunc(payableAmount)} ${
                                                selectedSubscriptionPlan?.currency?.symbol
                                            }`
                                        : 0}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Refund Policy Link */}
                    <div className="text-right mb-6">
                        <button
                            onClick={() => router.push("/refund-and-cancellation-policy")}
                            className="text-sm text-blue-500 hover:underline"
                        >
                            Refund Policy*
                        </button>
                    </div>

                    {/* Payment Button */}
                    <div className="flex justify-center">
                        <Button
                            onClick={makeSubscriptionPaymentHandler}
                            size="lg"
                            className="w-full max-w-xs"
                            disabled={!razorpayLoaded}
                        >
                            {razorpayLoaded ? "Make Payment" : "Loading Payment..."}
                        </Button>
                    </div>
                    </div>
                    
                   
            )}

           <FAQAccordian></FAQAccordian>
          {  showAppDownloadModal && (
                <DownloadAppModal isOpen={showAppDownloadModal} onClose={function (): void {
                    setShowAppDownloadModal(false);
                    router.replace("/home/parentProfile")
            } }></DownloadAppModal>)}
        </div>
    );
}