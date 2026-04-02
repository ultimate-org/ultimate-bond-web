// // // // // // // "use client"

// // // // // // // import React from 'react'
// // // // // // // import Image from 'next/image'
// // // // // // // // import Link from 'next/link'
// // // // // // // // import { useRouter, usePathname } from 'next/navigation'
// // // // // // // import { useRouter } from 'next/navigation'
// // // // // // // import { sendGAEvent } from "@next/third-parties/google";


// // // // // // // // import { motion } from "framer-motion"
// // // // // // // import { Button } from "@/components/ui/button"
// // // // // // // import {FaBars} from "react-icons/fa6"
// // // // // // // import {
// // // // // // //     DropdownMenu,
// // // // // // //     DropdownMenuContent,
// // // // // // //     // DropdownMenuItem,
// // // // // // //     // DropdownMenuLabel,
// // // // // // //     // DropdownMenuSeparator,
// // // // // // //     DropdownMenuTrigger,
// // // // // // //   } from "@/components/ui/dropdown-menu"
// // // // // // // // import DownloadAppModal from '../modal/DownloadAppModal';
  

// // // // // // // function Header({ secondaryLogo }: { secondaryLogo: string }) {
// // // // // // //     // const [isLoggedIn, setIsLoggedIn] = React.useState(false);
// // // // // // //     // const [showDownloadModal, setShowDownloadModal] = React.useState(false)
// // // // // // //     const router = useRouter();
// // // // // // //     // const pathName = usePathname();
// // // // // // //     // const headerNavItems = [
        
// // // // // // //     //     {
// // // // // // //     //         id: 1,
// // // // // // //     //         item: "Workshops",
// // // // // // //     //         route: "/workshops"
// // // // // // //     //     },
// // // // // // //     // ]

// // // // // // //     // useEffect(() => {
// // // // // // //     //     const parentInfo = localStorage.getItem("ParentInfo");
// // // // // // //     //     const parent = parentInfo ? JSON.parse(parentInfo) : null;
// // // // // // //     //     if (!parent || !parent?.parent_id) {
// // // // // // //     //         setIsLoggedIn(false)
// // // // // // //     //         // router.push("/signup");
// // // // // // //     //     } else {
// // // // // // //     //         setIsLoggedIn(true);
// // // // // // //     //         // router.push("/home/parentProfile");
// // // // // // //     //     }
// // // // // // //     //     // eslint-disable-next-line react-hooks/exhaustive-deps
// // // // // // //     // },[])
// // // // // // //   return (
// // // // // // //       <nav className={`w-full justify-between items-start flex flex-row absolute bg-transparent py-8 px-8 top-0 left-0 right-0 z-[100]`}>
// // // // // // //           <div className='flex flex-row'>
// // // // // // //               <Image onClick={()=>router.push("/")} src={"/images/logo/Ultimate-Logo.png"} className='object-cover' width={70} height={70} alt='Ultimate Logo'></Image>
// // // // // // //               <Image src={secondaryLogo} width={150} height={120} alt='Your Parenting Partner Logo' className='hidden md:block'></Image>

// // // // // // //           </div>
// // // // // // //           {/* showing this section for viewport larger than md */}
          
// // // // // // //           <div className='hidden md:flex flex-row items-center'>
// // // // // // //             <Button className='mx-2' onClick={()=> { sendGAEvent('event', 'blog_button_click', {  value: 'Blogs', });
// // // // // // //             router.push("/blogs")}} variant={"destructive"}>Blogs</Button>  
// // // // // // //               {/* <Button onClick={() => { return isLoggedIn ? router.push("/home/parentProfile") : router.push("/signup") }} variant={"destructive"}>{isLoggedIn ? "My Account" : "Get The App"}</Button>  */}
// // // // // // //             <Button onClick={() => { router.push("/download-app")}} variant={"destructive"}>{"Get The App"}</Button> 

// // // // // // //            </div> 
// // // // // // //            {/* showing this section of smaller viewport */} 
// // // // // // //           <div className='flex md:hidden flex-row items-center'>
              
// // // // // // //           <DropdownMenu>
// // // // // // //   <DropdownMenuTrigger><FaBars color='white'></FaBars></DropdownMenuTrigger>
// // // // // // //                   <DropdownMenuContent> 
// // // // // // //                   {/* {
// // // // // // //                   headerNavItems.map((navItem) => { 
// // // // // // //                       return <DropdownMenuItem onClick={()=>router.push(navItem.route)} key={navItem.id}>{navItem.item}</DropdownMenuItem>
// // // // // // //                   })
// // // // // // //               }  */}
// // // // // // //                           <Button onClick={() => { router.push("/download-app")}} variant={"destructive"}>{"Get The App"}</Button> 

// // // // // // //                  {/* <DropdownMenuItem><Button onClick={()=>router.push("/signup")} variant={"destructive"}>{isLoggedIn ? "My Account" : "Get The App"}</Button></DropdownMenuItem> */}
// // // // // // //  </DropdownMenuContent>
// // // // // // // </DropdownMenu>
// // // // // // //           </div>
// // // // // // // {/* {
// // // // // // //     showDownloadModal && <DownloadAppModal isOpen={showDownloadModal} onClose={()=>setShowDownloadModal(false)}/>
// // // // // // // } */}
// // // // // // //     </nav>
// // // // // // //   )
// // // // // // // }

// // // // // // // export default Header



// // // // // // "use client";

// // // // // // import Link from "next/link";
// // // // // // import { useState } from "react";
// // // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // // import { Menu, X } from "lucide-react";

// // // // // // const NAV_LINKS = [
// // // // // //   { label: "Home", href: "/" },
// // // // // //   { label: "Features", href: "#features" },
// // // // // //   { label: "Pricing", href: "#pricing" },
// // // // // //   { label: "About", href: "#about" },
// // // // // //   { label: "Contact", href: "#contact" },
// // // // // // ];

// // // // // // export default function Navbar() {
// // // // // //   const [menuOpen, setMenuOpen] = useState(false);

// // // // // //   return (
// // // // // //     <>
// // // // // //       <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[6%] py-4 bg-[rgba(4,6,15,0.88)] backdrop-blur-[16px] border-b border-white/10">
// // // // // //         {/* Logo */}
// // // // // //         <Link
// // // // // //           href="/"
// // // // // //           className="text-xl font-black text-white tracking-tight no-underline"
// // // // // //           style={{ fontFamily: "'Rubik', sans-serif" }}
// // // // // //         >
// // // // // //           Ultimate<span className="text-[#f97316]">.</span>
// // // // // //         </Link>

// // // // // //         {/* Desktop Links */}
// // // // // //         <ul className="hidden md:flex gap-8 list-none">
// // // // // //           {NAV_LINKS.map((link) => (
// // // // // //             <li key={link.href}>
// // // // // //               <Link
// // // // // //                 href={link.href}
// // // // // //                 className="text-[#9ca3af] text-[0.85rem] font-medium tracking-wide no-underline transition-colors duration-200 hover:text-white"
// // // // // //               >
// // // // // //                 {link.label}
// // // // // //               </Link>
// // // // // //             </li>
// // // // // //           ))}
// // // // // //         </ul>

// // // // // //         {/* Desktop CTA */}
// // // // // //         <Link
// // // // // //           href="#get-started"
// // // // // //           className="hidden md:inline-block bg-[#f97316] text-white px-[22px] py-[9px] rounded-full text-[0.85rem] font-bold no-underline transition-all duration-200 hover:bg-[#ea6a0a] hover:-translate-y-[1px]"
// // // // // //           style={{
// // // // // //             boxShadow: "0 0 20px rgba(249,115,22,0.45)",
// // // // // //             fontFamily: "'Rubik', sans-serif",
// // // // // //           }}
// // // // // //         >
// // // // // //           Get Started
// // // // // //         </Link>

// // // // // //         {/* Mobile hamburger */}
// // // // // //         <button
// // // // // //           className="md:hidden text-white p-1"
// // // // // //           onClick={() => setMenuOpen((v) => !v)}
// // // // // //           aria-label="Toggle menu"
// // // // // //         >
// // // // // //           {menuOpen ? <X size={22} /> : <Menu size={22} />}
// // // // // //         </button>
// // // // // //       </nav>

// // // // // //       {/* Mobile Menu Drawer */}
// // // // // //       <AnimatePresence>
// // // // // //         {menuOpen && (
// // // // // //           <motion.div
// // // // // //             key="mobile-menu"
// // // // // //             initial={{ opacity: 0, y: -12 }}
// // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // //             exit={{ opacity: 0, y: -12 }}
// // // // // //             transition={{ duration: 0.22, ease: "easeOut" }}
// // // // // //             className="fixed top-[65px] left-0 right-0 z-[99] bg-[rgba(4,6,15,0.97)] backdrop-blur-[16px] border-b border-white/10 flex flex-col px-[6%] py-6 gap-5 md:hidden"
// // // // // //           >
// // // // // //             {NAV_LINKS.map((link) => (
// // // // // //               <Link
// // // // // //                 key={link.href}
// // // // // //                 href={link.href}
// // // // // //                 onClick={() => setMenuOpen(false)}
// // // // // //                 className="text-[#9ca3af] text-[0.95rem] font-medium tracking-wide no-underline transition-colors duration-200 hover:text-white"
// // // // // //               >
// // // // // //                 {link.label}
// // // // // //               </Link>
// // // // // //             ))}
// // // // // //             <Link
// // // // // //               href="#get-started"
// // // // // //               onClick={() => setMenuOpen(false)}
// // // // // //               className="mt-2 self-start bg-[#f97316] text-white px-[22px] py-[10px] rounded-full text-[0.85rem] font-bold no-underline"
// // // // // //               style={{
// // // // // //                 boxShadow: "0 0 20px rgba(249,115,22,0.45)",
// // // // // //                 fontFamily: "'Rubik', sans-serif",
// // // // // //               }}
// // // // // //             >
// // // // // //               Get Started
// // // // // //             </Link>
// // // // // //           </motion.div>
// // // // // //         )}
// // // // // //       </AnimatePresence>
// // // // // //     </>
// // // // // //   );
// // // // // // }


// // // // // // "use client";

// // // // // // import Link from "next/link";
// // // // // // import { useState } from "react";
// // // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // // import { Menu, X } from "lucide-react";

// // // // // // const NAV_LINKS = [
// // // // // //   { label: "Problem",   href: "#problem"   },
// // // // // //   { label: "Solution",  href: "#solution"  },
// // // // // //   { label: "Journey",   href: "#journey"   },
// // // // // //   { label: "Features",  href: "#features"  },
// // // // // //   { label: "AI",        href: "#ai"        },
// // // // // //   { label: "Advisors",  href: "#advisors"  },
// // // // // //   { label: "Blog",      href: "#blog"      },
// // // // // // ];

// // // // // // export default function Navbar() {
// // // // // //   const [menuOpen, setMenuOpen] = useState(false);

// // // // // //   return (
// // // // // //     <>
// // // // // //       {/* nav */}
// // // // // //       <nav
// // // // // //         className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[6%] py-4"
// // // // // //         style={{
// // // // // //           background: "rgba(4,6,15,0.88)",
// // // // // //           backdropFilter: "blur(16px)",
// // // // // //           borderBottom: "1px solid rgba(255,255,255,0.08)",
// // // // // //         }}
// // // // // //       >
// // // // // //         {/* .nav-logo — Ulti<span>Mate</span> */}
// // // // // //         <Link
// // // // // //           href="#"
// // // // // //           className="text-[1.25rem] font-black text-white tracking-[-0.02em] no-underline"
// // // // // //           style={{ fontFamily: "'Rubik', sans-serif" }}
// // // // // //         >
// // // // // //           Ulti<span className="text-[#f97316]">Mate</span>
// // // // // //         </Link>

// // // // // //         {/* .nav-links — desktop only */}
// // // // // //         <ul className="hidden md:flex gap-8 list-none m-0 p-0">
// // // // // //           {NAV_LINKS.map((link) => (
// // // // // //             <li key={link.href}>
// // // // // //               <Link
// // // // // //                 href={link.href}
// // // // // //                 className="text-[#9ca3af] text-[0.85rem] font-medium tracking-[0.02em] no-underline transition-colors duration-200 hover:text-white"
// // // // // //               >
// // // // // //                 {link.label}
// // // // // //               </Link>
// // // // // //             </li>
// // // // // //           ))}
// // // // // //         </ul>

// // // // // //         {/* .nav-cta — desktop */}
// // // // // //         <Link
// // // // // //           href="#cta"
// // // // // //           className="hidden md:inline-block text-white text-[0.85rem] font-bold no-underline px-[22px] py-[9px] rounded-full transition-all duration-200 hover:bg-[#ea6a0a] hover:-translate-y-[1px]"
// // // // // //           style={{
// // // // // //             background: "#f97316",
// // // // // //             boxShadow: "0 0 20px rgba(249,115,22,0.35)",
// // // // // //             fontFamily: "'Rubik', sans-serif",
// // // // // //           }}
// // // // // //         >
// // // // // //           Get the App
// // // // // //         </Link>

// // // // // //         {/* Mobile hamburger */}
// // // // // //         <button
// // // // // //           className="md:hidden text-white p-1"
// // // // // //           onClick={() => setMenuOpen((v) => !v)}
// // // // // //           aria-label="Toggle menu"
// // // // // //         >
// // // // // //           {menuOpen ? <X size={22} /> : <Menu size={22} />}
// // // // // //         </button>
// // // // // //       </nav>

// // // // // //       {/* Mobile drawer */}
// // // // // //       <AnimatePresence>
// // // // // //         {menuOpen && (
// // // // // //           <motion.div
// // // // // //             key="mobile-menu"
// // // // // //             initial={{ opacity: 0, y: -12 }}
// // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // //             exit={{ opacity: 0, y: -12 }}
// // // // // //             transition={{ duration: 0.22, ease: "easeOut" }}
// // // // // //             className="fixed top-[65px] left-0 right-0 z-[99] flex flex-col px-[6%] py-6 gap-5 md:hidden"
// // // // // //             style={{
// // // // // //               background: "rgba(4,6,15,0.97)",
// // // // // //               backdropFilter: "blur(16px)",
// // // // // //               borderBottom: "1px solid rgba(255,255,255,0.08)",
// // // // // //             }}
// // // // // //           >
// // // // // //             {NAV_LINKS.map((link) => (
// // // // // //               <Link
// // // // // //                 key={link.href}
// // // // // //                 href={link.href}
// // // // // //                 onClick={() => setMenuOpen(false)}
// // // // // //                 className="text-[#9ca3af] text-[0.95rem] font-medium tracking-[0.02em] no-underline transition-colors duration-200 hover:text-white"
// // // // // //               >
// // // // // //                 {link.label}
// // // // // //               </Link>
// // // // // //             ))}

// // // // // //             {/* CTA in mobile drawer */}
// // // // // //             <Link
// // // // // //               href="#cta"
// // // // // //               onClick={() => setMenuOpen(false)}
// // // // // //               className="self-start text-white text-[0.85rem] font-bold no-underline px-[22px] py-[9px] rounded-full mt-2"
// // // // // //               style={{
// // // // // //                 background: "#f97316",
// // // // // //                 boxShadow: "0 0 20px rgba(249,115,22,0.35)",
// // // // // //                 fontFamily: "'Rubik', sans-serif",
// // // // // //               }}
// // // // // //             >
// // // // // //               Get the App
// // // // // //             </Link>
// // // // // //           </motion.div>
// // // // // //         )}
// // // // // //       </AnimatePresence>
// // // // // //     </>
// // // // // //   );
// // // // // // }






// // // // // // "use client";

// // // // // // import Link from "next/link";
// // // // // // import { useState } from "react";
// // // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // // import { Menu, X } from "lucide-react";

// // // // // // // Blog removed from the main link list — it lives next to the CTA button now
// // // // // // const NAV_LINKS = [
// // // // // //   { label: "Problem",  href: "#problem"  },
// // // // // //   { label: "Solution", href: "#solution" },
// // // // // //   { label: "Journey",  href: "#journey"  },
// // // // // //   { label: "Features", href: "#features" },
// // // // // //   { label: "AI",       href: "#ai"       },
// // // // // //   { label: "Advisors", href: "#advisors" },
// // // // // // ];

// // // // // // export default function Navbar() {
// // // // // //   const [menuOpen, setMenuOpen] = useState(false);

// // // // // //   return (
// // // // // //     <>
// // // // // //       {/* nav */}
// // // // // //       <nav
// // // // // //         className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[6%] py-4"
// // // // // //         style={{
// // // // // //           background: "rgba(4,6,15,0.88)",
// // // // // //           backdropFilter: "blur(16px)",
// // // // // //           borderBottom: "1px solid rgba(255,255,255,0.08)",
// // // // // //         }}
// // // // // //       >
// // // // // //         {/* Logo */}
// // // // // //         <Link
// // // // // //           href="#"
// // // // // //           className="text-[1.25rem] font-black text-white tracking-[-0.02em] no-underline"
// // // // // //           style={{ fontFamily: "'Rubik', sans-serif" }}
// // // // // //         >
// // // // // //           Ulti<span className="text-[#f97316]">Mate</span>
// // // // // //         </Link>

// // // // // //         {/* Desktop nav links */}
// // // // // //         <ul className="hidden md:flex gap-8 list-none m-0 p-0">
// // // // // //           {NAV_LINKS.map((link) => (
// // // // // //             <li key={link.href}>
// // // // // //               <Link
// // // // // //                 href={link.href}
// // // // // //                 className="text-[#9ca3af] text-[0.85rem] font-medium tracking-[0.02em] no-underline transition-colors duration-200 hover:text-white"
// // // // // //               >
// // // // // //                 {link.label}
// // // // // //               </Link>
// // // // // //             </li>
// // // // // //           ))}
// // // // // //         </ul>

// // // // // //         {/* Desktop right-side buttons: Blog (ghost) + Get the App (solid) */}
// // // // // //         <div className="hidden md:flex items-center gap-3">
// // // // // //           {/* Blog — ghost bordered button */}
// // // // // //           <Link
// // // // // //             href="/blogs"
// // // // // //             className="text-[#f97316] text-[0.85rem] font-bold no-underline px-[20px] py-[8px] rounded-full transition-all duration-200 hover:bg-[rgba(249,115,22,0.08)] hover:-translate-y-[1px]"
// // // // // //             style={{
// // // // // //               border: "1px solid rgba(249,115,22,0.5)",
// // // // // //               fontFamily: "'Rubik', sans-serif",
// // // // // //             }}
// // // // // //           >
// // // // // //             Blog
// // // // // //           </Link>

// // // // // //           {/* Get the App — solid orange */}
// // // // // //           <Link
// // // // // //             href="#cta"
// // // // // //             className="text-white text-[0.85rem] font-bold no-underline px-[22px] py-[9px] rounded-full transition-all duration-200 hover:bg-[#ea6a0a] hover:-translate-y-[1px]"
// // // // // //             style={{
// // // // // //               background: "#f97316",
// // // // // //               boxShadow: "0 0 20px rgba(249,115,22,0.35)",
// // // // // //               fontFamily: "'Rubik', sans-serif",
// // // // // //             }}
// // // // // //           >
// // // // // //             Get the App
// // // // // //           </Link>
// // // // // //         </div>

// // // // // //         {/* Mobile hamburger */}
// // // // // //         <button
// // // // // //           className="md:hidden text-white p-1"
// // // // // //           onClick={() => setMenuOpen((v) => !v)}
// // // // // //           aria-label="Toggle menu"
// // // // // //         >
// // // // // //           {menuOpen ? <X size={22} /> : <Menu size={22} />}
// // // // // //         </button>
// // // // // //       </nav>

// // // // // //       {/* Mobile drawer */}
// // // // // //       <AnimatePresence>
// // // // // //         {menuOpen && (
// // // // // //           <motion.div
// // // // // //             key="mobile-menu"
// // // // // //             initial={{ opacity: 0, y: -12 }}
// // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // //             exit={{ opacity: 0, y: -12 }}
// // // // // //             transition={{ duration: 0.22, ease: "easeOut" }}
// // // // // //             className="fixed top-[65px] left-0 right-0 z-[99] flex flex-col px-[6%] py-6 gap-5 md:hidden"
// // // // // //             style={{
// // // // // //               background: "rgba(4,6,15,0.97)",
// // // // // //               backdropFilter: "blur(16px)",
// // // // // //               borderBottom: "1px solid rgba(255,255,255,0.08)",
// // // // // //             }}
// // // // // //           >
// // // // // //             {NAV_LINKS.map((link) => (
// // // // // //               <Link
// // // // // //                 key={link.href}
// // // // // //                 href={link.href}
// // // // // //                 onClick={() => setMenuOpen(false)}
// // // // // //                 className="text-[#9ca3af] text-[0.95rem] font-medium tracking-[0.02em] no-underline transition-colors duration-200 hover:text-white"
// // // // // //               >
// // // // // //                 {link.label}
// // // // // //               </Link>
// // // // // //             ))}

// // // // // //             {/* Mobile CTA row: Blog ghost + Get the App solid */}
// // // // // //             <div className="flex items-center gap-3 mt-2 flex-wrap">
// // // // // //               {/* Blog — ghost bordered */}
// // // // // //               <Link
// // // // // //                 href="/blogs"
// // // // // //                 onClick={() => setMenuOpen(false)}
// // // // // //                 className="text-[#f97316] text-[0.85rem] font-bold no-underline px-[20px] py-[8px] rounded-full"
// // // // // //                 style={{
// // // // // //                   border: "1px solid rgba(249,115,22,0.5)",
// // // // // //                   fontFamily: "'Rubik', sans-serif",
// // // // // //                 }}
// // // // // //               >
// // // // // //                 Blog
// // // // // //               </Link>

// // // // // //               {/* Get the App — solid */}
// // // // // //               <Link
// // // // // //                 href="#cta"
// // // // // //                 onClick={() => setMenuOpen(false)}
// // // // // //                 className="text-white text-[0.85rem] font-bold no-underline px-[22px] py-[9px] rounded-full"
// // // // // //                 style={{
// // // // // //                   background: "#f97316",
// // // // // //                   boxShadow: "0 0 20px rgba(249,115,22,0.35)",
// // // // // //                   fontFamily: "'Rubik', sans-serif",
// // // // // //                 }}
// // // // // //               >
// // // // // //                 Get the App
// // // // // //               </Link>
// // // // // //             </div>
// // // // // //           </motion.div>
// // // // // //         )}
// // // // // //       </AnimatePresence>
// // // // // //     </>
// // // // // //   );
// // // // // // }






// // // // // // "use client";

// // // // // // import Link from "next/link";
// // // // // // import { useState } from "react";
// // // // // // import { usePathname } from "next/navigation";
// // // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // // import { Menu, X } from "lucide-react";

// // // // // // const NAV_LINKS = [
// // // // // //   { label: "Problem",  href: "#problem"  },
// // // // // //   { label: "Solution", href: "#solution" },
// // // // // //   { label: "Journey",  href: "#journey"  },
// // // // // //   { label: "Features", href: "#features" },
// // // // // //   { label: "AI",       href: "#ai"       },
// // // // // //   { label: "Advisors", href: "#advisors" },
// // // // // // ];

// // // // // // export default function Navbar() {
// // // // // //   const [menuOpen, setMenuOpen] = useState(false);
// // // // // //   const pathname = usePathname();
// // // // // //   const isHome = pathname === "/";

// // // // // //   return (
// // // // // //     <>
// // // // // //       <nav
// // // // // //         className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[6%] py-4"
// // // // // //         style={{
// // // // // //           background: "rgba(4,6,15,0.88)",
// // // // // //           backdropFilter: "blur(16px)",
// // // // // //           borderBottom: "1px solid rgba(255,255,255,0.08)",
// // // // // //         }}
// // // // // //       >
// // // // // //         {/* Logo */}
// // // // // //         <Link
// // // // // //           href="/"
// // // // // //           className="text-[1.25rem] font-black text-white tracking-[-0.02em] no-underline"
// // // // // //           style={{ fontFamily: "'Rubik', sans-serif" }}
// // // // // //         >
// // // // // //           Ulti<span className="text-[#f97316]">Mate</span>
// // // // // //         </Link>

// // // // // //         {/* Desktop nav links — home only */}
// // // // // //         {isHome && (
// // // // // //           <ul className="hidden md:flex gap-8 list-none m-0 p-0">
// // // // // //             {NAV_LINKS.map((link) => (
// // // // // //               <li key={link.href}>
// // // // // //                 <Link
// // // // // //                   href={link.href}
// // // // // //                   className="text-[#9ca3af] text-[0.85rem] font-medium tracking-[0.02em] no-underline transition-colors duration-200 hover:text-white"
// // // // // //                 >
// // // // // //                   {link.label}
// // // // // //                 </Link>
// // // // // //               </li>
// // // // // //             ))}
// // // // // //           </ul>
// // // // // //         )}

// // // // // //         {/* Desktop right buttons — always visible */}
// // // // // //         <div className="hidden md:flex items-center gap-3">
// // // // // //           <Link
// // // // // //             href="/blogs"
// // // // // //             className="text-[#f97316] text-[0.85rem] font-bold no-underline px-[20px] py-[8px] rounded-full transition-all duration-200 hover:bg-[rgba(249,115,22,0.08)] hover:-translate-y-[1px]"
// // // // // //             style={{
// // // // // //               border: "1px solid rgba(249,115,22,0.5)",
// // // // // //               fontFamily: "'Rubik', sans-serif",
// // // // // //             }}
// // // // // //           >
// // // // // //             Blog
// // // // // //           </Link>

// // // // // //           <Link
// // // // // //             href="#cta"
// // // // // //             className="text-white text-[0.85rem] font-bold no-underline px-[22px] py-[9px] rounded-full transition-all duration-200 hover:bg-[#ea6a0a] hover:-translate-y-[1px]"
// // // // // //             style={{
// // // // // //               background: "#f97316",
// // // // // //               boxShadow: "0 0 20px rgba(249,115,22,0.35)",
// // // // // //               fontFamily: "'Rubik', sans-serif",
// // // // // //             }}
// // // // // //           >
// // // // // //             Get the App
// // // // // //           </Link>
// // // // // //         </div>

// // // // // //         {/* Mobile hamburger */}
// // // // // //         <button
// // // // // //           className="md:hidden text-white p-1"
// // // // // //           onClick={() => setMenuOpen((v) => !v)}
// // // // // //           aria-label="Toggle menu"
// // // // // //         >
// // // // // //           {menuOpen ? <X size={22} /> : <Menu size={22} />}
// // // // // //         </button>
// // // // // //       </nav>

// // // // // //       {/* Mobile drawer */}
// // // // // //       <AnimatePresence>
// // // // // //         {menuOpen && (
// // // // // //           <motion.div
// // // // // //             key="mobile-menu"
// // // // // //             initial={{ opacity: 0, y: -12 }}
// // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // //             exit={{ opacity: 0, y: -12 }}
// // // // // //             transition={{ duration: 0.22, ease: "easeOut" }}
// // // // // //             className="fixed top-[65px] left-0 right-0 z-[99] flex flex-col px-[6%] py-6 gap-5 md:hidden"
// // // // // //             style={{
// // // // // //               background: "rgba(4,6,15,0.97)",
// // // // // //               backdropFilter: "blur(16px)",
// // // // // //               borderBottom: "1px solid rgba(255,255,255,0.08)",
// // // // // //             }}
// // // // // //           >
// // // // // //             {/* Nav links — home only */}
// // // // // //             {isHome &&
// // // // // //               NAV_LINKS.map((link) => (
// // // // // //                 <Link
// // // // // //                   key={link.href}
// // // // // //                   href={link.href}
// // // // // //                   onClick={() => setMenuOpen(false)}
// // // // // //                   className="text-[#9ca3af] text-[0.95rem] font-medium tracking-[0.02em] no-underline transition-colors duration-200 hover:text-white"
// // // // // //                 >
// // // // // //                   {link.label}
// // // // // //                 </Link>
// // // // // //               ))}

// // // // // //             {/* CTA row — always visible */}
// // // // // //             <div className="flex items-center gap-3 flex-wrap">
// // // // // //               <Link
// // // // // //                 href="/blogs"
// // // // // //                 onClick={() => setMenuOpen(false)}
// // // // // //                 className="text-[#f97316] text-[0.85rem] font-bold no-underline px-[20px] py-[8px] rounded-full"
// // // // // //                 style={{
// // // // // //                   border: "1px solid rgba(249,115,22,0.5)",
// // // // // //                   fontFamily: "'Rubik', sans-serif",
// // // // // //                 }}
// // // // // //               >
// // // // // //                 Blog
// // // // // //               </Link>

// // // // // //               <Link
// // // // // //                 href="#cta"
// // // // // //                 onClick={() => setMenuOpen(false)}
// // // // // //                 className="text-white text-[0.85rem] font-bold no-underline px-[22px] py-[9px] rounded-full"
// // // // // //                 style={{
// // // // // //                   background: "#f97316",
// // // // // //                   boxShadow: "0 0 20px rgba(249,115,22,0.35)",
// // // // // //                   fontFamily: "'Rubik', sans-serif",
// // // // // //                 }}
// // // // // //               >
// // // // // //                 Get the App
// // // // // //               </Link>
// // // // // //             </div>
// // // // // //           </motion.div>
// // // // // //         )}
// // // // // //       </AnimatePresence>
// // // // // //     </>
// // // // // //   );
// // // // // // }





// // // // // "use client";

// // // // // import Link from "next/link";
// // // // // import Image from "next/image";
// // // // // import { useState, useEffect } from "react";
// // // // // import { usePathname } from "next/navigation";
// // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // import { Menu, X } from "lucide-react";
// // // // // import { sendGAEvent } from "@next/third-parties/google";
// // // // // import { useRouter } from 'next/navigation'

// // // // // const NAV_LINKS = [
// // // // //   { label: "Problem",  href: "#problem"  },
// // // // //   // { label: "Solution", href: "#solution" },
// // // // //   { label: "Journey",  href: "#journey"  },
// // // // //   { label: "Features", href: "#features" },
// // // // //   { label: "Ulti-Bot",       href: "#ai"       },
// // // // //   { label: "Advisors", href: "#advisors" },
// // // // // ];

// // // // // export default function Navbar() {
// // // // //   const [menuOpen, setMenuOpen] = useState(false);
// // // // //   const [scrolled, setScrolled] = useState(false);
// // // // //   const pathname = usePathname();
// // // // //   const isHome = pathname === "/";
// // // // //   const router = useRouter();

// // // // //   useEffect(() => {
// // // // //     const onScroll = () => setScrolled(window.scrollY > 50);
// // // // //     window.addEventListener("scroll", onScroll, { passive: true });
// // // // //     return () => window.removeEventListener("scroll", onScroll);
// // // // //   }, []);

// // // // //   return (
// // // // //     <>
// // // // //       <nav
// // // // //         className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[6%] py-4"
// // // // //         style={{
// // // // //           background: scrolled ? "rgba(4,6,15,0.97)" : "rgba(4,6,15,0.88)",
// // // // //           backdropFilter: "blur(16px)",
// // // // //           borderBottom: "1px solid rgba(255,255,255,0.08)",
// // // // //         }}
// // // // //       >
// // // // //         {/* Logo */}
// // // // //         <Link href="/" className="no-underline flex items-center">
// // // // //           <Image
// // // // //             src="/images/logo/Ultimate-Logo.png"
// // // // //             alt="UltiMate"
// // // // //             width={60}
// // // // //             height={20}
// // // // //             className=" w-auto object-contain"
// // // // //             priority
// // // // //           />
// // // // //         </Link>

// // // // //         {/* Desktop nav links — home only */}
// // // // //         {isHome && (
// // // // //           <ul className="hidden md:flex gap-8 list-none m-0 p-0">
// // // // //             {NAV_LINKS.map((link) => (
// // // // //               <li key={link.href}>
// // // // //                 <Link
// // // // //                   href={link.href}
// // // // //                   className="text-[#9ca3af] text-[0.85rem] font-medium tracking-[0.02em] no-underline transition-colors duration-200 hover:text-white"
// // // // //                 >
// // // // //                   {link.label}
// // // // //                 </Link>
// // // // //               </li>
// // // // //             ))}
// // // // //           </ul>
// // // // //         )}

// // // // //         {/* Desktop right buttons — always visible */}
// // // // //         <div className="hidden md:flex items-center gap-3">
// // // // //           <Link
// // // // //           href="/blogs"
// // // // //           onClick={()=> { sendGAEvent('event', 'blog_button_click', {  value: 'Blogs', })}}
// // // // //             className="text-[#f97316] text-[0.85rem] font-bold no-underline px-[20px] py-[8px] rounded-full transition-all duration-200 hover:bg-[rgba(249,115,22,0.08)] hover:-translate-y-[1px]"
// // // // //             style={{
// // // // //               border: "1px solid rgba(249,115,22,0.5)",
// // // // //               fontFamily: "'Rubik', sans-serif",
// // // // //             }}
// // // // //           >
// // // // //             Blog
// // // // //           </Link>

// // // // //           <button
// // // // //             // href="#cta"
// // // // //             onClick={() => {router.push("/download-app");}}
// // // // //             className="text-white text-[0.85rem] font-bold no-underline px-[22px] py-[9px] rounded-full transition-all duration-200 hover:bg-[#ea6a0a] hover:-translate-y-[1px]"
// // // // //             style={{
// // // // //               background: "#f97316",
// // // // //               boxShadow: "0 0 20px rgba(249,115,22,0.35)",
// // // // //               fontFamily: "'Rubik', sans-serif",
// // // // //             }}
// // // // //           >
// // // // //             Get the App
// // // // //           </button>
// // // // //         </div>

// // // // //         {/* Mobile hamburger */}
// // // // //         <button
// // // // //           className="md:hidden text-white p-1"
// // // // //           onClick={() => setMenuOpen((v) => !v)}
// // // // //           aria-label="Toggle menu"
// // // // //         >
// // // // //           {menuOpen ? <X size={22} /> : <Menu size={22} />}
// // // // //         </button>
// // // // //       </nav>

// // // // //       {/* Mobile drawer */}
// // // // //       <AnimatePresence>
// // // // //         {menuOpen && (
// // // // //           <motion.div
// // // // //             key="mobile-menu"
// // // // //             initial={{ opacity: 0, y: -12 }}
// // // // //             animate={{ opacity: 1, y: 0 }}
// // // // //             exit={{ opacity: 0, y: -12 }}
// // // // //             transition={{ duration: 0.22, ease: "easeOut" }}
// // // // //             className="fixed top-[65px] left-0 right-0 z-[99] flex flex-col px-[6%] py-6 gap-5 md:hidden"
// // // // //             style={{
// // // // //               background: "rgba(4,6,15,0.97)",
// // // // //               backdropFilter: "blur(16px)",
// // // // //               borderBottom: "1px solid rgba(255,255,255,0.08)",
// // // // //             }}
// // // // //           >
// // // // //             {/* Nav links — home only */}
// // // // //             {isHome &&
// // // // //               NAV_LINKS.map((link) => (
// // // // //                 <Link
// // // // //                   key={link.href}
// // // // //                   href={link.href}
// // // // //                   onClick={() => setMenuOpen(false)}
// // // // //                   className="text-[#9ca3af] text-[0.95rem] font-medium tracking-[0.02em] no-underline transition-colors duration-200 hover:text-white"
// // // // //                 >
// // // // //                   {link.label}
// // // // //                 </Link>
// // // // //               ))}

// // // // //             {/* CTA row — always visible */}
// // // // //             <div className="flex items-center gap-3 flex-wrap">
// // // // //               <Link
// // // // //                 href="/blogs"
// // // // //                 onClick={() => {setMenuOpen(false); sendGAEvent('event', 'blog_button_click', {  value: 'Blogs', })}}
// // // // //                 className="text-[#f97316] text-[0.85rem] font-bold no-underline px-[20px] py-[8px] rounded-full"
// // // // //                 style={{
// // // // //                   border: "1px solid rgba(249,115,22,0.5)",
// // // // //                   fontFamily: "'Rubik', sans-serif",
// // // // //                 }}
// // // // //               >
// // // // //                 Blog
// // // // //               </Link>

// // // // //               <button
// // // // //                 // href="#cta"
// // // // //                 onClick={() => {router.push("/download-app"); setMenuOpen(false)}}
// // // // //                 className="text-white text-[0.85rem] font-bold no-underline px-[22px] py-[9px] rounded-full"
// // // // //                 style={{
// // // // //                   background: "#f97316",
// // // // //                   boxShadow: "0 0 20px rgba(249,115,22,0.35)",
// // // // //                   fontFamily: "'Rubik', sans-serif",
// // // // //                 }}
// // // // //               >
// // // // //                 Get the App
// // // // //               </button>
// // // // //             </div>
// // // // //           </motion.div>
// // // // //         )}
// // // // //       </AnimatePresence>
// // // // //     </>
// // // // //   );
// // // // // }




// // // // "use client";

// // // // import Link from "next/link";
// // // // import Image from "next/image";
// // // // import { useState, useEffect } from "react";
// // // // import { useRouter } from "next/navigation";
// // // // import { usePathname } from "next/navigation";
// // // // import { motion, AnimatePresence } from "framer-motion";
// // // // import { Menu, X } from "lucide-react";

// // // // const NAV_LINKS = [
// // // //   { label: "Challenge",  href: "#problem"  },
// // // //   // { label: "Solution", href: "#solution" },
// // // //   { label: "Journey",  href: "#journey"  },
// // // //   { label: "Transformations", href: "#transformations" },
// // // //   { label: "Features", href: "#features" },
// // // //   { label: "Ulti-Bot",       href: "#ai"       },
// // // //   // { label: "Advisors", href: "#advisors" },
// // // // ];

// // // // const PG_CATEGORIES = [
// // // //   { id: "child_behaviour",      label: "Child Behaviour",      subtopics: ["Why Children Lie","Why Kids Talk Back","Stubborn Children","Discipline Without Punishment","Aggressive Behaviour","Why Children Refuse to Listen","Sibling Fights","Tantrums","Teaching Respect","Setting Boundaries"] },
// // // //   { id: "emotional_development", label: "Emotional Development", subtopics: ["Building Emotional Resilience","Emotional Intelligence","Helping Children Express Emotions","Helping Children Overcome Fear","Helping Kids Deal with Frustration","Helping Kids Handle Disappointment","Managing Tantrums (Age 3–6)","Raising Emotionally Strong Children","Teaching Patience","Why Children Get Angry"] },
// // // //   { id: "habits_discipline",    label: "Habits & Discipline",  subtopics: ["Building Reading Habits","Daily Routines","Helping Kids Stay Organized","How Children Develop Habits","Morning Routines","Teaching Responsibility at Home","Teaching Self Discipline","Teaching Time Management","Screen Time Balance","Why Routines Help Children"] },
// // // //   { id: "school_life",          label: "School Life",          subtopics: ["Bullying in Primary Schools","Encouraging Curiosity","Helping Children Focus on Studies","Helping Kids Deal with Teasing","Helping Kids Develop Reading Habits","Helping Kids Make Friends","Homework Struggles","Signs Your Child Is Being Bullied","Reducing School Stress","School Anxiety in Children"] },
// // // //   { id: "family_resources",     label: "Family Resources",     subtopics: ["Age-Wise Behaviour Guide","Emotional Development Chart","Habit Tracker for Kids","Parenting Checklist","Parenting Tools for Modern Parents","School Readiness Guide"] },
// // // // ];

// // // // export default function Navbar() {
// // // //   const [menuOpen, setMenuOpen] = useState(false);
// // // //   const [scrolled, setScrolled] = useState(false);
// // // //   const [pgOpen, setPgOpen] = useState(false);
// // // //   const [pgHovered, setPgHovered] = useState("child_behaviour");
// // // //   const router = useRouter();
// // // //   const pathname = usePathname();
// // // //   const isHome = pathname === "/";

// // // //   useEffect(() => {
// // // //     const onScroll = () => setScrolled(window.scrollY > 50);
// // // //     window.addEventListener("scroll", onScroll, { passive: true });
// // // //     return () => window.removeEventListener("scroll", onScroll);
// // // //   }, []);

// // // //   return (
// // // //     <>
// // // //       <nav
// // // //         className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[6%] py-4"
// // // //         style={{
// // // //           background: scrolled ? "rgba(4,6,15,0.97)" : "rgba(4,6,15,0.88)",
// // // //           backdropFilter: "blur(16px)",
// // // //           borderBottom: "1px solid rgba(255,255,255,0.08)",
// // // //         }}
// // // //       >
// // // //         {/* Logo */}
// // // //         <Link href="/" className="no-underline flex items-center">
// // // //           <Image
// // // //             src="/logo.png"
// // // //             alt="UltiMate"
// // // //             width={140}
// // // //             height={40}
// // // //             className="h-10 w-auto object-contain"
// // // //             priority
// // // //           />
// // // //         </Link>

// // // //         {/* Desktop nav links — home only */}
// // // //         {isHome && (
// // // //           <ul className="hidden md:flex gap-8 list-none m-0 p-0 items-center">
// // // //             {NAV_LINKS.map((link) => (
// // // //               <li key={link.href}>
// // // //                 <Link
// // // //                   href={link.href}
// // // //                   className="text-[#9ca3af] text-[0.85rem] font-medium tracking-[0.02em] no-underline transition-colors duration-200 hover:text-white"
// // // //                 >
// // // //                   {link.label}
// // // //                 </Link>
// // // //               </li>
// // // //             ))}

// // // //             {/* ── Parenting Guide mega-menu ── */}
// // // //             <li className="relative h-full flex items-center"
// // // //               onMouseEnter={() => setPgOpen(true)}
// // // //               onMouseLeave={() => setPgOpen(false)}
// // // //             >
// // // //               <button
// // // //                 onClick={() => router.push("/parenting-guide")}
// // // //                 className="flex items-center gap-1 text-[#9ca3af] text-[0.85rem] font-medium tracking-[0.02em] transition-colors duration-200 hover:text-white"
// // // //               >
// // // //                 Parenting Guide
// // // //                 <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" className={`transition-transform duration-200 ${pgOpen ? "rotate-180" : ""}`}><path d="M1 3l4 4 4-4"/></svg>
// // // //               </button>

// // // //               {pgOpen && (
// // // //                 <div
// // // //                   className="absolute top-full left-0 flex shadow-2xl z-[200] rounded-b-2xl overflow-hidden"
// // // //                   style={{ background:"#fff", border:"1px solid rgba(249,115,22,0.2)", borderTop:"3px solid #f97316", minWidth:"560px", marginTop:"0px" }}
// // // //                 >
// // // //                   {/* Categories */}
// // // //                   <div className="w-[200px] border-r border-gray-100 py-2">
// // // //                     {PG_CATEGORIES.map((cat) => (
// // // //                       <div
// // // //                         key={cat.id}
// // // //                         className="flex items-center justify-between px-4 py-2.5 cursor-pointer transition-all duration-150 text-[0.88rem]"
// // // //                         style={{ background: pgHovered===cat.id?"#f8f9fb":"transparent", borderLeft: pgHovered===cat.id?"3px solid #f97316":"3px solid transparent", color: pgHovered===cat.id?"#f97316":"#374151", fontWeight: 500 }}
// // // //                         onMouseEnter={() => setPgHovered(cat.id)}
// // // //                         onClick={() => { router.push(`/parenting-guide?cat=${cat.id}`); setPgOpen(false); }}
// // // //                       >
// // // //                         <span>{cat.label}</span>
// // // //                         <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 2l4 3-4 3"/></svg>
// // // //                       </div>
// // // //                     ))}
// // // //                   </div>

// // // //                   {/* Subtopics */}
// // // //                   <div className="flex-1 py-2 px-1 overflow-y-auto max-h-[320px]">
// // // //                     {PG_CATEGORIES.find(c=>c.id===pgHovered)?.subtopics.map((sub) => (
// // // //                       <div
// // // //                         key={sub}
// // // //                         className="px-4 py-1.5 text-[0.82rem] text-gray-600 cursor-pointer rounded-md transition-all duration-100 hover:text-[#f97316]"
// // // //                         onMouseEnter={e=>(e.currentTarget.style.background="rgba(249,115,22,0.04)")}
// // // //                         onMouseLeave={e=>(e.currentTarget.style.background="transparent")}
// // // //                         onClick={() => { router.push(`/parenting-guide?cat=${pgHovered}&topic=${encodeURIComponent(sub)}`); setPgOpen(false); }}
// // // //                       >
// // // //                         {sub}
// // // //                       </div>
// // // //                     ))}
// // // //                   </div>
// // // //                 </div>
// // // //               )}
// // // //             </li>
// // // //           </ul>
// // // //         )}

// // // //         {/* Desktop right buttons — always visible */}
// // // //         <div className="hidden md:flex items-center gap-3">
// // // //           <Link
// // // //             href="/blogs"
// // // //             className="text-[#f97316] text-[0.85rem] font-bold no-underline px-[20px] py-[8px] rounded-full transition-all duration-200 hover:bg-[rgba(249,115,22,0.08)] hover:-translate-y-[1px]"
// // // //             style={{
// // // //               border: "1px solid rgba(249,115,22,0.5)",
// // // //               fontFamily: "'Rubik', sans-serif",
// // // //             }}
// // // //           >
// // // //             Blog
// // // //           </Link>

// // // //           <Link
// // // //             href="#cta"
// // // //             className="text-white text-[0.85rem] font-bold no-underline px-[22px] py-[9px] rounded-full transition-all duration-200 hover:bg-[#ea6a0a] hover:-translate-y-[1px]"
// // // //             style={{
// // // //               background: "#f97316",
// // // //               boxShadow: "0 0 20px rgba(249,115,22,0.35)",
// // // //               fontFamily: "'Rubik', sans-serif",
// // // //             }}
// // // //           >
// // // //             Get the App
// // // //           </Link>
// // // //         </div>

// // // //         {/* Mobile hamburger */}
// // // //         <button
// // // //           className="md:hidden text-white p-1"
// // // //           onClick={() => setMenuOpen((v) => !v)}
// // // //           aria-label="Toggle menu"
// // // //         >
// // // //           {menuOpen ? <X size={22} /> : <Menu size={22} />}
// // // //         </button>
// // // //       </nav>

// // // //       {/* Mobile drawer */}
// // // //       <AnimatePresence>
// // // //         {menuOpen && (
// // // //           <motion.div
// // // //             key="mobile-menu"
// // // //             initial={{ opacity: 0, y: -12 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             exit={{ opacity: 0, y: -12 }}
// // // //             transition={{ duration: 0.22, ease: "easeOut" }}
// // // //             className="fixed top-[65px] left-0 right-0 z-[99] flex flex-col px-[6%] py-6 gap-5 md:hidden"
// // // //             style={{
// // // //               background: "rgba(4,6,15,0.97)",
// // // //               backdropFilter: "blur(16px)",
// // // //               borderBottom: "1px solid rgba(255,255,255,0.08)",
// // // //             }}
// // // //           >
// // // //             {/* Nav links — home only */}
// // // //             {isHome &&
// // // //               NAV_LINKS.map((link) => (
// // // //                 <Link
// // // //                   key={link.href}
// // // //                   href={link.href}
// // // //                   onClick={() => setMenuOpen(false)}
// // // //                   className="text-[#9ca3af] text-[0.95rem] font-medium tracking-[0.02em] no-underline transition-colors duration-200 hover:text-white"
// // // //                 >
// // // //                   {link.label}
// // // //                 </Link>
// // // //               ))}

// // // //             {/* Parenting Guide — mobile */}
// // // //             {isHome && (
// // // //               <Link
// // // //                 href="/parenting-guide"
// // // //                 onClick={() => setMenuOpen(false)}
// // // //                 className="text-[#9ca3af] text-[0.95rem] font-medium tracking-[0.02em] no-underline transition-colors duration-200 hover:text-white"
// // // //               >
// // // //                 Parenting Guide
// // // //               </Link>
// // // //             )}

// // // //             {/* CTA row — always visible */}
// // // //             <div className="flex items-center gap-3 flex-wrap">
// // // //               <Link
// // // //                 href="/blogs"
// // // //                 onClick={() => setMenuOpen(false)}
// // // //                 className="text-[#f97316] text-[0.85rem] font-bold no-underline px-[20px] py-[8px] rounded-full"
// // // //                 style={{
// // // //                   border: "1px solid rgba(249,115,22,0.5)",
// // // //                   fontFamily: "'Rubik', sans-serif",
// // // //                 }}
// // // //               >
// // // //                 Blog
// // // //               </Link>

// // // //               <Link
// // // //                 href="#cta"
// // // //                 onClick={() => setMenuOpen(false)}
// // // //                 className="text-white text-[0.85rem] font-bold no-underline px-[22px] py-[9px] rounded-full"
// // // //                 style={{
// // // //                   background: "#f97316",
// // // //                   boxShadow: "0 0 20px rgba(249,115,22,0.35)",
// // // //                   fontFamily: "'Rubik', sans-serif",
// // // //                 }}
// // // //               >
// // // //                 Get the App
// // // //               </Link>
// // // //             </div>
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>
// // // //     </>
// // // //   );
// // // // }


// // // "use client";

// // // import Link from "next/link";
// // // import Image from "next/image";
// // // import { useState, useEffect } from "react";
// // // import { useRouter } from "next/navigation";
// // // import { usePathname } from "next/navigation";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import { Menu, X } from "lucide-react";

// // // const NAV_LINKS = [
// // //   { label: "Challenge",  href: "#problem"  },
// // //   // { label: "Solution", href: "#solution" },
// // //   { label: "Journey",  href: "#journey"  },
// // //   { label: "Transformations", href: "#transformations" },
// // //   { label: "Features", href: "#features" },
// // //   { label: "Ulti-Bot",       href: "#ai"       },
// // //   // { label: "Advisors", href: "#advisors" },
// // // ];

// // // const PG_CATEGORIES = [
// // //   { id: "child_behaviour",      label: "Child Behaviour",      subtopics: ["Why Children Lie","Why Kids Talk Back","Stubborn Children","Discipline Without Punishment","Aggressive Behaviour","Why Children Refuse to Listen","Sibling Fights","Tantrums","Teaching Respect","Setting Boundaries"] },
// // //   { id: "emotional_development", label: "Emotional Development", subtopics: ["Building Emotional Resilience","Emotional Intelligence","Helping Children Express Emotions","Helping Children Overcome Fear","Helping Kids Deal with Frustration","Helping Kids Handle Disappointment","Managing Tantrums (Age 3–6)","Raising Emotionally Strong Children","Teaching Patience","Why Children Get Angry"] },
// // //   { id: "habits_discipline",    label: "Habits & Discipline",  subtopics: ["Building Reading Habits","Daily Routines","Helping Kids Stay Organized","How Children Develop Habits","Morning Routines","Teaching Responsibility at Home","Teaching Self Discipline","Teaching Time Management","Screen Time Balance","Why Routines Help Children"] },
// // //   { id: "school_life",          label: "School Life",          subtopics: ["Bullying in Primary Schools","Encouraging Curiosity","Helping Children Focus on Studies","Helping Kids Deal with Teasing","Helping Kids Develop Reading Habits","Helping Kids Make Friends","Homework Struggles","Signs Your Child Is Being Bullied","Reducing School Stress","School Anxiety in Children"] },
// // //   { id: "family_resources",     label: "Family Resources",     subtopics: ["Age-Wise Behaviour Guide","Emotional Development Chart","Habit Tracker for Kids","Parenting Checklist","Parenting Tools for Modern Parents","School Readiness Guide"] },
// // // ];

// // // export default function Navbar() {
// // //   const [menuOpen, setMenuOpen] = useState(false);
// // //   const [scrolled, setScrolled] = useState(false);
// // //   const [pgOpen, setPgOpen] = useState(false);
// // //   const [pgHovered, setPgHovered] = useState("child_behaviour");
// // //   const router = useRouter();
// // //   const pathname = usePathname();
// // //   const isHome = pathname === "/";

// // //   useEffect(() => {
// // //     const onScroll = () => setScrolled(window.scrollY > 50);
// // //     window.addEventListener("scroll", onScroll, { passive: true });
// // //     return () => window.removeEventListener("scroll", onScroll);
// // //   }, []);

// // //   return (
// // //     <>
// // //       <nav
// // //         className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[6%] py-4"
// // //         style={{
// // //           background: scrolled ? "rgba(4,6,15,0.97)" : "rgba(4,6,15,0.88)",
// // //           backdropFilter: "blur(16px)",
// // //           borderBottom: "1px solid rgba(255,255,255,0.08)",
// // //         }}
// // //       >
// // //         {/* Logo */}
// // //         <Link href="/" className="no-underline flex items-center">
// // //           <Image
// // //             src="/logo.png"
// // //             alt="UltiMate"
// // //             width={140}
// // //             height={40}
// // //             className="h-10 w-auto object-contain"
// // //             priority
// // //           />
// // //         </Link>

// // //         {/* Desktop nav links — home only */}
// // //         {isHome && (
// // //           <ul className="hidden md:flex gap-8 list-none m-0 p-0 items-center">
// // //             {NAV_LINKS.map((link) => (
// // //               <li key={link.href}>
// // //                 <Link
// // //                   href={link.href}
// // //                   className="text-[#9ca3af] text-[0.85rem] font-medium tracking-[0.02em] no-underline transition-colors duration-200 hover:text-white"
// // //                 >
// // //                   {link.label}
// // //                 </Link>
// // //               </li>
// // //             ))}

// // //             {/* ── Parenting Guide mega-menu ── */}
// // //             <li
// // //               className="relative h-full flex items-center"
// // //               onMouseEnter={() => setPgOpen(true)}
// // //               onMouseLeave={() => setPgOpen(false)}
// // //             >
// // //               {/* Clicking the label itself goes to the landing page */}
// // //               <button
// // //                 onClick={() => {
// // //                   setPgOpen(false);
// // //                   router.push("/parenting-guide");
// // //                 }}
// // //                 className="flex items-center gap-1 text-[#9ca3af] text-[0.85rem] font-medium tracking-[0.02em] transition-colors duration-200 hover:text-white"
// // //               >
// // //                 Parenting Guide
// // //                 <svg
// // //                   width="10"
// // //                   height="10"
// // //                   viewBox="0 0 10 10"
// // //                   fill="currentColor"
// // //                   className={`transition-transform duration-200 ${pgOpen ? "rotate-180" : ""}`}
// // //                 >
// // //                   <path d="M1 3l4 4 4-4"/>
// // //                 </svg>
// // //               </button>

// // //               {/* Dropdown */}
// // //               {pgOpen && (
// // //                 <div
// // //                   className="absolute top-full left-0 flex shadow-2xl z-[200] rounded-b-2xl overflow-hidden"
// // //                   style={{
// // //                     background: "#fff",
// // //                     border: "1px solid rgba(249,115,22,0.2)",
// // //                     borderTop: "3px solid #f97316",
// // //                     minWidth: "560px",
// // //                     marginTop: "0px",
// // //                   }}
// // //                 >
// // //                   {/* Left: categories — hover to show subtopics */}
// // //                   <div className="w-[200px] border-r border-gray-100 py-2">
// // //                     {PG_CATEGORIES.map((cat) => (
// // //                       <div
// // //                         key={cat.id}
// // //                         className="flex items-center justify-between px-4 py-2.5 cursor-pointer transition-all duration-150 text-[0.88rem]"
// // //                         style={{
// // //                           background: pgHovered === cat.id ? "#f8f9fb" : "transparent",
// // //                           borderLeft: pgHovered === cat.id ? "3px solid #f97316" : "3px solid transparent",
// // //                           color: pgHovered === cat.id ? "#f97316" : "#374151",
// // //                           fontWeight: 500,
// // //                         }}
// // //                         onMouseEnter={() => setPgHovered(cat.id)}
// // //                         onClick={() => {
// // //                           router.push(`/parenting-guide?cat=${cat.id}`);
// // //                           setPgOpen(false);
// // //                         }}
// // //                       >
// // //                         <span>{cat.label}</span>
// // //                         <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
// // //                           <path d="M3 2l4 3-4 3"/>
// // //                         </svg>
// // //                       </div>
// // //                     ))}
// // //                   </div>

// // //                   {/* Right: subtopics for hovered category */}
// // //                   <div className="flex-1 py-2 px-1 overflow-y-auto max-h-[320px]">
// // //                     {PG_CATEGORIES.find(c => c.id === pgHovered)?.subtopics.map((sub) => (
// // //                       <div
// // //                         key={sub}
// // //                         className="px-4 py-1.5 text-[0.82rem] text-gray-600 cursor-pointer rounded-md transition-all duration-100 hover:text-[#f97316]"
// // //                         onMouseEnter={e => (e.currentTarget.style.background = "rgba(249,115,22,0.04)")}
// // //                         onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
// // //                         onClick={() => {
// // //                           router.push(`/parenting-guide?cat=${pgHovered}&topic=${encodeURIComponent(sub)}`);
// // //                           setPgOpen(false);
// // //                         }}
// // //                       >
// // //                         {sub}
// // //                       </div>
// // //                     ))}
// // //                   </div>
// // //                 </div>
// // //               )}
// // //             </li>
// // //           </ul>
// // //         )}

// // //         {/* Desktop right buttons — always visible */}
// // //         <div className="hidden md:flex items-center gap-3">
// // //           <Link
// // //             href="/blogs"
// // //             className="text-[#f97316] text-[0.85rem] font-bold no-underline px-[20px] py-[8px] rounded-full transition-all duration-200 hover:bg-[rgba(249,115,22,0.08)] hover:-translate-y-[1px]"
// // //             style={{
// // //               border: "1px solid rgba(249,115,22,0.5)",
// // //               fontFamily: "'Rubik', sans-serif",
// // //             }}
// // //           >
// // //             Blog
// // //           </Link>

// // //           <Link
// // //             href="#cta"
// // //             className="text-white text-[0.85rem] font-bold no-underline px-[22px] py-[9px] rounded-full transition-all duration-200 hover:bg-[#ea6a0a] hover:-translate-y-[1px]"
// // //             style={{
// // //               background: "#f97316",
// // //               boxShadow: "0 0 20px rgba(249,115,22,0.35)",
// // //               fontFamily: "'Rubik', sans-serif",
// // //             }}
// // //           >
// // //             Get the App
// // //           </Link>
// // //         </div>

// // //         {/* Mobile hamburger */}
// // //         <button
// // //           className="md:hidden text-white p-1"
// // //           onClick={() => setMenuOpen((v) => !v)}
// // //           aria-label="Toggle menu"
// // //         >
// // //           {menuOpen ? <X size={22} /> : <Menu size={22} />}
// // //         </button>
// // //       </nav>

// // //       {/* Mobile drawer */}
// // //       <AnimatePresence>
// // //         {menuOpen && (
// // //           <motion.div
// // //             key="mobile-menu"
// // //             initial={{ opacity: 0, y: -12 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             exit={{ opacity: 0, y: -12 }}
// // //             transition={{ duration: 0.22, ease: "easeOut" }}
// // //             className="fixed top-[65px] left-0 right-0 z-[99] flex flex-col px-[6%] py-6 gap-5 md:hidden"
// // //             style={{
// // //               background: "rgba(4,6,15,0.97)",
// // //               backdropFilter: "blur(16px)",
// // //               borderBottom: "1px solid rgba(255,255,255,0.08)",
// // //             }}
// // //           >
// // //             {/* Nav links — home only */}
// // //             {isHome &&
// // //               NAV_LINKS.map((link) => (
// // //                 <Link
// // //                   key={link.href}
// // //                   href={link.href}
// // //                   onClick={() => setMenuOpen(false)}
// // //                   className="text-[#9ca3af] text-[0.95rem] font-medium tracking-[0.02em] no-underline transition-colors duration-200 hover:text-white"
// // //                 >
// // //                   {link.label}
// // //                 </Link>
// // //               ))}

// // //             {/* Parenting Guide — mobile, goes to landing */}
// // //             {isHome && (
// // //               <Link
// // //                 href="/parenting-guide"
// // //                 onClick={() => setMenuOpen(false)}
// // //                 className="text-[#9ca3af] text-[0.95rem] font-medium tracking-[0.02em] no-underline transition-colors duration-200 hover:text-white"
// // //               >
// // //                 Parenting Guide
// // //               </Link>
// // //             )}

// // //             {/* CTA row */}
// // //             <div className="flex items-center gap-3 flex-wrap">
// // //               <Link
// // //                 href="/blogs"
// // //                 onClick={() => setMenuOpen(false)}
// // //                 className="text-[#f97316] text-[0.85rem] font-bold no-underline px-[20px] py-[8px] rounded-full"
// // //                 style={{
// // //                   border: "1px solid rgba(249,115,22,0.5)",
// // //                   fontFamily: "'Rubik', sans-serif",
// // //                 }}
// // //               >
// // //                 Blog
// // //               </Link>

// // //               <Link
// // //                 href="#cta"
// // //                 onClick={() => setMenuOpen(false)}
// // //                 className="text-white text-[0.85rem] font-bold no-underline px-[22px] py-[9px] rounded-full"
// // //                 style={{
// // //                   background: "#f97316",
// // //                   boxShadow: "0 0 20px rgba(249,115,22,0.35)",
// // //                   fontFamily: "'Rubik', sans-serif",
// // //                 }}
// // //               >
// // //                 Get the App
// // //               </Link>
// // //             </div>
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>
// // //     </>
// // //   );
// // // }


// // "use client";

// // import Link from "next/link";
// // import Image from "next/image";
// // import { useState, useEffect } from "react";
// // import { useRouter } from "next/navigation";
// // import { usePathname } from "next/navigation";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { Menu, X } from "lucide-react";

// // const NAV_LINKS = [
// //   { label: "Challenge",  href: "#problem"  },
// //   // { label: "Solution", href: "#solution" },
// //   { label: "Journey",  href: "#journey"  },
// //   { label: "Transformations", href: "#transformations" },
// //   { label: "Features", href: "#features" },
// //   { label: "Ulti-Bot",       href: "#ai"       },
// //   // { label: "Advisors", href: "#advisors" },
// // ];

// // const PG_CATEGORIES = [
// //   { id: "child_behaviour",      label: "Child Behaviour",      subtopics: ["Why Children Lie","Why Kids Talk Back","Stubborn Children","Discipline Without Punishment","Aggressive Behaviour","Why Children Refuse to Listen","Sibling Fights","Tantrums","Teaching Respect","Setting Boundaries"] },
// //   { id: "emotional_development", label: "Emotional Development", subtopics: ["Building Emotional Resilience","Emotional Intelligence","Helping Children Express Emotions","Helping Children Overcome Fear","Helping Kids Deal with Frustration","Helping Kids Handle Disappointment","Managing Tantrums (Age 3–6)","Raising Emotionally Strong Children","Teaching Patience","Why Children Get Angry"] },
// //   { id: "habits_discipline",    label: "Habits & Discipline",  subtopics: ["Building Reading Habits","Daily Routines","Helping Kids Stay Organized","How Children Develop Habits","Morning Routines","Teaching Responsibility at Home","Teaching Self Discipline","Teaching Time Management","Screen Time Balance","Why Routines Help Children"] },
// //   { id: "school_life",          label: "School Life",          subtopics: ["Bullying in Primary Schools","Encouraging Curiosity","Helping Children Focus on Studies","Helping Kids Deal with Teasing","Helping Kids Develop Reading Habits","Helping Kids Make Friends","Homework Struggles","Signs Your Child Is Being Bullied","Reducing School Stress","School Anxiety in Children"] },
// //   { id: "family_resources",     label: "Family Resources",     subtopics: ["Age-Wise Behaviour Guide","Emotional Development Chart","Habit Tracker for Kids","Parenting Checklist","Parenting Tools for Modern Parents","School Readiness Guide"] },
// // ];

// // export default function Navbar() {
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const [scrolled, setScrolled] = useState(false);
// //   const [pgOpen, setPgOpen] = useState(false);
// //   const [pgHovered, setPgHovered] = useState("child_behaviour");
// //   const router = useRouter();
// //   const pathname = usePathname();
// //   const isHome = pathname === "/";

// //   useEffect(() => {
// //     const onScroll = () => setScrolled(window.scrollY > 50);
// //     window.addEventListener("scroll", onScroll, { passive: true });
// //     return () => window.removeEventListener("scroll", onScroll);
// //   }, []);

// //   return (
// //     <>
// //       <nav
// //         className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[6%] py-4"
// //         style={{
// //           background: scrolled ? "rgba(4,6,15,0.97)" : "rgba(4,6,15,0.88)",
// //           backdropFilter: "blur(16px)",
// //           borderBottom: "1px solid rgba(255,255,255,0.08)",
// //         }}
// //       >
// //         {/* Logo */}
// //         <Link href="/" className="no-underline flex items-center">
// //           <Image
// //             src="/logo.png"
// //             alt="UltiMate"
// //             width={140}
// //             height={40}
// //             className="h-10 w-auto object-contain"
// //             priority
// //           />
// //         </Link>

// //         {/* Desktop nav links — home only */}
// //         {isHome && (
// //           <ul className="hidden md:flex gap-8 list-none m-0 p-0 items-center">
// //             {NAV_LINKS.map((link) => (
// //               <li key={link.href}>
// //                 <Link
// //                   href={link.href}
// //                   className="text-[#9ca3af] text-[0.85rem] font-medium tracking-[0.02em] no-underline transition-colors duration-200 hover:text-white"
// //                 >
// //                   {link.label}
// //                 </Link>
// //               </li>
// //             ))}

// //             {/* ── Parenting Guide mega-menu ── */}
// //             <li
// //               className="relative h-full flex items-center"
// //               onMouseEnter={() => setPgOpen(true)}
// //               onMouseLeave={() => setPgOpen(false)}
// //             >
// //               {/* Clicking the label itself goes to the landing page */}
// //               <button
// //                 onClick={() => {
// //                   setPgOpen(false);
// //                   router.push("/parenting-guide");
// //                 }}
// //                 className="flex items-center gap-1 text-[#9ca3af] text-[0.85rem] font-medium tracking-[0.02em] transition-colors duration-200 hover:text-white"
// //               >
// //                 Parenting Guide
// //                 <svg
// //                   width="10"
// //                   height="10"
// //                   viewBox="0 0 10 10"
// //                   fill="currentColor"
// //                   className={`transition-transform duration-200 ${pgOpen ? "rotate-180" : ""}`}
// //                 >
// //                   <path d="M1 3l4 4 4-4"/>
// //                 </svg>
// //               </button>

// //               {/* Dropdown */}
// //               {pgOpen && (
// //                 <div
// //                   className="absolute top-full left-0 flex shadow-2xl z-[200] rounded-b-2xl overflow-hidden"
// //                   style={{
// //                     background: "#fff",
// //                     border: "1px solid rgba(249,115,22,0.2)",
// //                     borderTop: "3px solid #f97316",
// //                     minWidth: "560px",
// //                     marginTop: "0px",
// //                   }}
// //                 >
// //                   {/* Left: categories — hover to show subtopics */}
// //                   <div className="w-[200px] border-r border-gray-100 py-2">
// //                     {PG_CATEGORIES.map((cat) => (
// //                       <div
// //                         key={cat.id}
// //                         className="flex items-center justify-between px-4 py-2.5 cursor-pointer transition-all duration-150 text-[0.88rem]"
// //                         style={{
// //                           background: pgHovered === cat.id ? "#f8f9fb" : "transparent",
// //                           borderLeft: pgHovered === cat.id ? "3px solid #f97316" : "3px solid transparent",
// //                           color: pgHovered === cat.id ? "#f97316" : "#374151",
// //                           fontWeight: 500,
// //                         }}
// //                         onMouseEnter={() => setPgHovered(cat.id)}
// //                         onClick={() => {
// //                           router.push(`/parenting-guide?cat=${cat.id}`);
// //                           setPgOpen(false);
// //                         }}
// //                       >
// //                         <span>{cat.label}</span>
// //                         <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
// //                           <path d="M3 2l4 3-4 3"/>
// //                         </svg>
// //                       </div>
// //                     ))}
// //                   </div>

// //                   {/* Right: subtopics for hovered category */}
// //                   <div className="flex-1 py-2 px-1 overflow-y-auto max-h-[320px]">
// //                     {PG_CATEGORIES.find(c => c.id === pgHovered)?.subtopics.map((sub) => (
// //                       <div
// //                         key={sub}
// //                         className="px-4 py-1.5 text-[0.82rem] text-gray-600 cursor-pointer rounded-md transition-all duration-100 hover:text-[#f97316]"
// //                         onMouseEnter={e => (e.currentTarget.style.background = "rgba(249,115,22,0.04)")}
// //                         onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
// //                         onClick={() => {
// //                           router.push(`/parenting-guide?cat=${pgHovered}&topic=${encodeURIComponent(sub)}`);
// //                           setPgOpen(false);
// //                         }}
// //                       >
// //                         {sub}
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>
// //               )}
// //             </li>
// //           </ul>
// //         )}

// //         {/* Desktop right buttons — always visible */}
// //         <div className="hidden md:flex items-center gap-3">
// //           <Link
// //             href="/blogs"
// //             className="text-[#f97316] text-[0.85rem] font-bold no-underline px-[20px] py-[8px] rounded-full transition-all duration-200 hover:bg-[rgba(249,115,22,0.08)] hover:-translate-y-[1px]"
// //             style={{
// //               border: "1px solid rgba(249,115,22,0.5)",
// //               fontFamily: "'Rubik', sans-serif",
// //             }}
// //           >
// //             Blog
// //           </Link>

// //           <Link
// //             href="#cta"
// //             className="text-white text-[0.85rem] font-bold no-underline px-[22px] py-[9px] rounded-full transition-all duration-200 hover:bg-[#ea6a0a] hover:-translate-y-[1px]"
// //             style={{
// //               background: "#f97316",
// //               boxShadow: "0 0 20px rgba(249,115,22,0.35)",
// //               fontFamily: "'Rubik', sans-serif",
// //             }}
// //           >
// //             Get the App
// //           </Link>
// //         </div>

// //         {/* Mobile hamburger */}
// //         <button
// //           className="md:hidden text-white p-1"
// //           onClick={() => setMenuOpen((v) => !v)}
// //           aria-label="Toggle menu"
// //         >
// //           {menuOpen ? <X size={22} /> : <Menu size={22} />}
// //         </button>
// //       </nav>

// //       {/* Mobile drawer */}
// //       <AnimatePresence>
// //         {menuOpen && (
// //           <motion.div
// //             key="mobile-menu"
// //             initial={{ opacity: 0, y: -12 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             exit={{ opacity: 0, y: -12 }}
// //             transition={{ duration: 0.22, ease: "easeOut" }}
// //             className="fixed top-[65px] left-0 right-0 z-[99] flex flex-col px-[6%] py-6 gap-5 md:hidden"
// //             style={{
// //               background: "rgba(4,6,15,0.97)",
// //               backdropFilter: "blur(16px)",
// //               borderBottom: "1px solid rgba(255,255,255,0.08)",
// //             }}
// //           >
// //             {/* Nav links — home only */}
// //             {isHome &&
// //               NAV_LINKS.map((link) => (
// //                 <Link
// //                   key={link.href}
// //                   href={link.href}
// //                   onClick={() => setMenuOpen(false)}
// //                   className="text-[#9ca3af] text-[0.95rem] font-medium tracking-[0.02em] no-underline transition-colors duration-200 hover:text-white"
// //                 >
// //                   {link.label}
// //                 </Link>
// //               ))}

// //             {/* Parenting Guide — mobile, goes to landing */}
// //             {isHome && (
// //               <Link
// //                 href="/parenting-guide"
// //                 onClick={() => setMenuOpen(false)}
// //                 className="text-[#9ca3af] text-[0.95rem] font-medium tracking-[0.02em] no-underline transition-colors duration-200 hover:text-white"
// //               >
// //                 Parenting Guide
// //               </Link>
// //             )}

// //             {/* CTA row */}
// //             <div className="flex items-center gap-3 flex-wrap">
// //               <Link
// //                 href="/blogs"
// //                 onClick={() => setMenuOpen(false)}
// //                 className="text-[#f97316] text-[0.85rem] font-bold no-underline px-[20px] py-[8px] rounded-full"
// //                 style={{
// //                   border: "1px solid rgba(249,115,22,0.5)",
// //                   fontFamily: "'Rubik', sans-serif",
// //                 }}
// //               >
// //                 Blog
// //               </Link>

// //               <Link
// //                 href="#cta"
// //                 onClick={() => setMenuOpen(false)}
// //                 className="text-white text-[0.85rem] font-bold no-underline px-[22px] py-[9px] rounded-full"
// //                 style={{
// //                   background: "#f97316",
// //                   boxShadow: "0 0 20px rgba(249,115,22,0.35)",
// //                   fontFamily: "'Rubik', sans-serif",
// //                 }}
// //               >
// //                 Get the App
// //               </Link>
// //             </div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </>
// //   );
// // }



// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { usePathname } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";

// const NAV_LINKS = [
//   { label: "Challenge",  href: "#problem"  },
//   // { label: "Solution", href: "#solution" },
//   { label: "Journey",  href: "#journey"  },
//   { label: "Transformations", href: "#transformations" },
//   { label: "Features", href: "#features" },
//   { label: "Ulti-Bot",       href: "#ai"       },
//   // { label: "Advisors", href: "#advisors" },
// ];
// const PG_CATEGORIES = [
//   {
//     id: "child_behaviour",
//     label: "Child Behaviour",
//     subtopics: [
//       { id: "cb_01", label: "Why Children Lie" },
//       { id: "cb_02", label: "Why Kids Talk Back" },
//       { id: "cb_03", label: "Stubborn Children" },
//       { id: "cb_04", label: "Discipline Without Punishment" },
//       { id: "cb_05", label: "Aggressive Behaviour" },
//       { id: "cb_06", label: "Why Children Refuse to Listen" },
//       { id: "cb_07", label: "Sibling Fights" },
//       { id: "cb_08", label: "Tantrums" },
//       { id: "cb_09", label: "Teaching Respect" },
//       { id: "cb_10", label: "Setting Boundaries" },
//     ],
//   },
//   {
//     id: "emotional_development",
//     label: "Emotional Development",
//     subtopics: [
//       { id: "ed_01", label: "Building Emotional Resilience" },
//       { id: "ed_02", label: "Emotional Intelligence in Children" },
//       { id: "ed_03", label: "Helping Children Express Emotions" },
//       { id: "ed_04", label: "Helping Children Overcome Fear" },
//       { id: "ed_05", label: "Helping Kids Deal with Frustration" },
//       { id: "ed_06", label: "Helping Kids Handle Disappointment" },
//       { id: "ed_07", label: "Managing Tantrums (Age 3–6)" },
//       { id: "ed_08", label: "Raising Emotionally Strong Children" },
//       { id: "ed_09", label: "Teaching Patience to Children" },
//       { id: "ed_10", label: "Why Children Get Angry" },
//     ],
//   },
//   {
//     id: "habits_discipline",
//     label: "Habits & Discipline",
//     subtopics: [
//       { id: "hd_01", label: "Building Reading Habits" },
//       { id: "hd_02", label: "Daily Routines for Children" },
//       { id: "hd_03", label: "Helping Kids Stay Organized" },
//       { id: "hd_04", label: "How Children Develop Habits" },
//       { id: "hd_05", label: "Morning Routines for Kids" },
//       { id: "hd_06", label: "Teaching Responsibility at Home" },
//       { id: "hd_07", label: "Teaching Self Discipline" },
//       { id: "hd_08", label: "Teaching Time Management" },
//       { id: "hd_09", label: "Screen Time Balance for Kids" },
//       { id: "hd_10", label: "Why Routines Help Children" },
//     ],
//   },
//   {
//     id: "school_life",
//     label: "School Life",
//     subtopics: [
//       { id: "sl_01", label: "Bullying in Primary Schools" },
//       { id: "sl_02", label: "Encouraging Curiosity in Kids" },
//       { id: "sl_03", label: "Helping Children Focus on Studies" },
//       { id: "sl_04", label: "Helping Kids Deal with Teasing" },
//       { id: "sl_05", label: "Helping Kids Develop Reading Habits" },
//       { id: "sl_06", label: "Helping Kids Make Friends" },
//       { id: "sl_07", label: "Homework Struggles in Children" },
//       { id: "sl_08", label: "Signs Your Child Is Being Bullied" },
//       { id: "sl_09", label: "Reducing School Stress" },
//       { id: "sl_10", label: "School Anxiety in Children" },
//     ],
//   },
//   {
//     id: "family_resources",
//     label: "Family Resources",
//     subtopics: [
//       { id: "fr_01", label: "Age-Wise Behaviour Guide" },
//       { id: "fr_02", label: "Emotional Development Chart" },
//       { id: "fr_03", label: "Habit Tracker for Kids" },
//       { id: "fr_04", label: "Parenting Checklist" },
//       { id: "fr_05", label: "Parenting Tools for Modern Parents" },
//       { id: "fr_06", label: "School Readiness Guide" },
//     ],
//   },
// ];

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [pgOpen, setPgOpen] = useState(false);
//   const [pgHovered, setPgHovered] = useState("child_behaviour");
//   const router = useRouter();
//   const pathname = usePathname();
//   const isHome = pathname === "/";

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <>
//       <nav
//         className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[6%] py-4"
//         style={{
//           background: scrolled ? "rgba(4,6,15,0.97)" : "rgba(4,6,15,0.88)",
//           backdropFilter: "blur(16px)",
//           borderBottom: "1px solid rgba(255,255,255,0.08)",
//         }}
//       >
//         {/* Logo */}
//         <Link href="/" className="no-underline flex items-center">
//        <Image
//           src="/images/logo/Ultimate-Logo.png"
//          alt="UltiMate"
//           width={60}
//            height={20}
//             className=" w-auto object-contain"
//            priority
//           />
//        </Link>


//         {/* Desktop nav links — home only */}
//         {isHome && (
//           <ul className="hidden md:flex gap-8 list-none m-0 p-0 items-center">
//             {NAV_LINKS.map((link) => (
//               <li key={link.href}>
//                 <Link
//                   href={link.href}
//                   className="text-[#9ca3af] text-[0.85rem] font-medium tracking-[0.02em] no-underline transition-colors duration-200 hover:text-white"
//                 >
//                   {link.label}
//                 </Link>
//               </li>
//             ))}

//             {/* Parenting Guide mega-menu */}
//             <li
//               className="relative h-full flex items-center"
//               onMouseEnter={() => setPgOpen(true)}
//               onMouseLeave={() => setPgOpen(false)}
//             >
//               {/* Clicking label → parenting guide landing page */}
//               <button
//                 onClick={() => {
//                   setPgOpen(false);
//                   router.push("/parenting-guide");
//                 }}
//                 className="flex items-center gap-1 text-[#9ca3af] text-[0.85rem] font-medium tracking-[0.02em] transition-colors duration-200 hover:text-white"
//               >
//                 Parenting Guide
//                 <svg
//                   width="10"
//                   height="10"
//                   viewBox="0 0 10 10"
//                   fill="currentColor"
//                   className={`transition-transform duration-200 ${pgOpen ? "rotate-180" : ""}`}
//                 >
//                   <path d="M1 3l4 4 4-4" />
//                 </svg>
//               </button>

//               {/* Dropdown */}
//               {pgOpen && (
//                 <div
//                   className="absolute top-full left-0 flex shadow-2xl z-[200] rounded-b-2xl overflow-hidden"
//                   style={{
//                     background: "#fff",
//                     border: "1px solid rgba(249,115,22,0.2)",
//                     borderTop: "3px solid #f97316",
//                     minWidth: "560px",
//                     marginTop: "0px",
//                   }}
//                 >
//                   {/* Left: categories — hover shows subtopics, click goes to category page */}
//                   <div className="w-[200px] border-r border-gray-100 py-2">
//                     {PG_CATEGORIES.map((cat) => (
//                       <div
//                         key={cat.id}
//                         className="flex items-center justify-between px-4 py-2.5 cursor-pointer transition-all duration-150 text-[0.88rem]"
//                         style={{
//                           background: pgHovered === cat.id ? "#f8f9fb" : "transparent",
//                           borderLeft: pgHovered === cat.id ? "3px solid #f97316" : "3px solid transparent",
//                           color: pgHovered === cat.id ? "#f97316" : "#374151",
//                           fontWeight: 500,
//                         }}
//                         onMouseEnter={() => setPgHovered(cat.id)}
//                         onClick={() => {
//                           router.push(`/parenting-guide?cat=${cat.id}`);
//                           setPgOpen(false);
//                         }}
//                       >
//                         <span>{cat.label}</span>
//                         <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
//                           <path d="M3 2l4 3-4 3" />
//                         </svg>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Right: subtopics — click goes directly to article page */}
//                   <div className="flex-1 py-2 px-1 overflow-y-auto max-h-[320px]">
//                     {PG_CATEGORIES.find((c) => c.id === pgHovered)?.subtopics.map((sub) => (
//                       <div
//                         key={sub.id}
//                         className="px-4 py-1.5 text-[0.82rem] text-gray-600 cursor-pointer rounded-md transition-all duration-100 hover:text-[#f97316]"
//                         onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(249,115,22,0.04)")}
//                         onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
//                         onClick={() => {
//                           router.push(`/parenting-guide?cat=${pgHovered}&artId=${sub.id}`);
//                           setPgOpen(false);
//                         }}
//                       >
//                         {sub.label}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </li>
//           </ul>
//         )}

//         {/* Desktop right buttons */}
//         <div className="hidden md:flex items-center gap-3">
//           <Link
//             href="/blogs"
//             className="text-[#f97316] text-[0.85rem] font-bold no-underline px-[20px] py-[8px] rounded-full transition-all duration-200 hover:bg-[rgba(249,115,22,0.08)] hover:-translate-y-[1px]"
//             style={{
//               border: "1px solid rgba(249,115,22,0.5)",
//               fontFamily: "'Rubik', sans-serif",
//             }}
//           >
//             Blog
//           </Link>

//           <Link
//             href="#cta"
//             className="text-white text-[0.85rem] font-bold no-underline px-[22px] py-[9px] rounded-full transition-all duration-200 hover:bg-[#ea6a0a] hover:-translate-y-[1px]"
//             style={{
//               background: "#f97316",
//               boxShadow: "0 0 20px rgba(249,115,22,0.35)",
//               fontFamily: "'Rubik', sans-serif",
//             }}
//           >
//             Get the App
//           </Link>
//         </div>

//         {/* Mobile hamburger */}
//         <button
//           className="md:hidden text-white p-1"
//           onClick={() => setMenuOpen((v) => !v)}
//           aria-label="Toggle menu"
//         >
//           {menuOpen ? <X size={22} /> : <Menu size={22} />}
//         </button>
//       </nav>

//       {/* Mobile drawer */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             key="mobile-menu"
//             initial={{ opacity: 0, y: -12 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -12 }}
//             transition={{ duration: 0.22, ease: "easeOut" }}
//             className="fixed top-[65px] left-0 right-0 z-[99] flex flex-col px-[6%] py-6 gap-5 md:hidden"
//             style={{
//               background: "rgba(4,6,15,0.97)",
//               backdropFilter: "blur(16px)",
//               borderBottom: "1px solid rgba(255,255,255,0.08)",
//             }}
//           >
//             {isHome &&
//               NAV_LINKS.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   onClick={() => setMenuOpen(false)}
//                   className="text-[#9ca3af] text-[0.95rem] font-medium tracking-[0.02em] no-underline transition-colors duration-200 hover:text-white"
//                 >
//                   {link.label}
//                 </Link>
//               ))}

//             {isHome && (
//               <Link
//                 href="/parenting-guide"
//                 onClick={() => setMenuOpen(false)}
//                 className="text-[#9ca3af] text-[0.95rem] font-medium tracking-[0.02em] no-underline transition-colors duration-200 hover:text-white"
//               >
//                 Parenting Guide
//               </Link>
//             )}

//             <div className="flex items-center gap-3 flex-wrap">
//               <Link
//                 href="/blogs"
//                 onClick={() => setMenuOpen(false)}
//                 className="text-[#f97316] text-[0.85rem] font-bold no-underline px-[20px] py-[8px] rounded-full"
//                 style={{
//                   border: "1px solid rgba(249,115,22,0.5)",
//                   fontFamily: "'Rubik', sans-serif",
//                 }}
//               >
//                 Blog
//               </Link>

//               <Link
//                 href="#cta"
//                 onClick={() => setMenuOpen(false)}
//                 className="text-white text-[0.85rem] font-bold no-underline px-[22px] py-[9px] rounded-full"
//                 style={{
//                   background: "#f97316",
//                   boxShadow: "0 0 20px rgba(249,115,22,0.35)",
//                   fontFamily: "'Rubik', sans-serif",
//                 }}
//               >
//                 Get the App
//               </Link>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }



"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Challenge",  href: "#problem"  },
  // { label: "Solution", href: "#solution" },
  { label: "Journey",  href: "#journey"  },
  { label: "Transformations", href: "#transformations" },
  { label: "Features", href: "#features" },
  { label: "Ulti-Bot",       href: "#ai"       },
  // { label: "Advisors", href: "#advisors" },
];

const PG_CATEGORIES = [
  {
    id: "child_behaviour",
    label: "Child Behaviour",
    subtopics: [
      { id: "cb_01", label: "Why Children Lie" },
      { id: "cb_02", label: "Why Kids Talk Back" },
      { id: "cb_03", label: "Stubborn Children" },
      { id: "cb_04", label: "Discipline Without Punishment" },
      { id: "cb_05", label: "Aggressive Behaviour" },
      { id: "cb_06", label: "Why Children Refuse to Listen" },
      { id: "cb_07", label: "Sibling Fights" },
      { id: "cb_08", label: "Tantrums" },
      { id: "cb_09", label: "Teaching Respect" },
      { id: "cb_10", label: "Setting Boundaries" },
    ],
  },
  {
    id: "emotional_development",
    label: "Emotional Development",
    subtopics: [
      { id: "ed_01", label: "Building Emotional Resilience" },
      { id: "ed_02", label: "Emotional Intelligence in Children" },
      { id: "ed_03", label: "Helping Children Express Emotions" },
      { id: "ed_04", label: "Helping Children Overcome Fear" },
      { id: "ed_05", label: "Helping Kids Deal with Frustration" },
      { id: "ed_06", label: "Helping Kids Handle Disappointment" },
      { id: "ed_07", label: "Managing Tantrums (Age 3–6)" },
      { id: "ed_08", label: "Raising Emotionally Strong Children" },
      { id: "ed_09", label: "Teaching Patience to Children" },
      { id: "ed_10", label: "Why Children Get Angry" },
    ],
  },
  {
    id: "habits_discipline",
    label: "Habits & Discipline",
    subtopics: [
      { id: "hd_01", label: "Building Reading Habits" },
      { id: "hd_02", label: "Daily Routines for Children" },
      { id: "hd_03", label: "Helping Kids Stay Organized" },
      { id: "hd_04", label: "How Children Develop Habits" },
      { id: "hd_05", label: "Morning Routines for Kids" },
      { id: "hd_06", label: "Teaching Responsibility at Home" },
      { id: "hd_07", label: "Teaching Self Discipline" },
      { id: "hd_08", label: "Teaching Time Management" },
      { id: "hd_09", label: "Screen Time Balance for Kids" },
      { id: "hd_10", label: "Why Routines Help Children" },
    ],
  },
  {
    id: "school_life",
    label: "School Life",
    subtopics: [
      { id: "sl_01", label: "Bullying in Primary Schools" },
      { id: "sl_02", label: "Encouraging Curiosity in Kids" },
      { id: "sl_03", label: "Helping Children Focus on Studies" },
      { id: "sl_04", label: "Helping Kids Deal with Teasing" },
      { id: "sl_05", label: "Helping Kids Develop Reading Habits" },
      { id: "sl_06", label: "Helping Kids Make Friends" },
      { id: "sl_07", label: "Homework Struggles in Children" },
      { id: "sl_08", label: "Signs Your Child Is Being Bullied" },
      { id: "sl_09", label: "Reducing School Stress" },
      { id: "sl_10", label: "School Anxiety in Children" },
    ],
  },
  {
    id: "family_resources",
    label: "Family Resources",
    subtopics: [
      { id: "fr_01", label: "Age-Wise Behaviour Guide" },
      { id: "fr_02", label: "Emotional Development Chart" },
      { id: "fr_03", label: "Habit Tracker for Kids" },
      { id: "fr_04", label: "Parenting Checklist" },
      { id: "fr_05", label: "Parenting Tools for Modern Parents" },
      { id: "fr_06", label: "School Readiness Guide" },
    ],
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pgOpen, setPgOpen] = useState(false);
  const [pgHovered, setPgHovered] = useState("child_behaviour");
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[6%] py-4"
        style={{
          background: scrolled ? "rgba(4,6,15,0.97)" : "rgba(4,6,15,0.88)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
       {/* Logo */}
         <Link href="/" className="no-underline flex items-center">
       <Image
           src="/images/logo/Ultimate-Logo.png"
          alt="UltiMate"
         width={60}
          height={20}
           className=" w-auto object-contain"
          priority
          />
       </Link>

        {/* Desktop nav links — home only */}
        {isHome && (
          <ul className="hidden md:flex gap-8 list-none m-0 p-0 items-center">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[#9ca3af] text-[0.85rem] font-medium tracking-[0.02em] no-underline transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Parenting Guide mega-menu */}
            <li
              className="relative h-full flex items-center"
              onMouseEnter={() => setPgOpen(true)}
              onMouseLeave={() => setPgOpen(false)}
            >
              {/* Click "Parenting Guide" → go to landing page */}
              <button
                onClick={() => {
                  setPgOpen(false);
                  router.push("/parenting-guide");
                }}
                className="flex items-center gap-1 text-[#9ca3af] text-[0.85rem] font-medium tracking-[0.02em] transition-colors duration-200 hover:text-white"
              >
                Parenting Guide
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="currentColor"
                  className={`transition-transform duration-200 ${pgOpen ? "rotate-180" : ""}`}
                >
                  <path d="M1 3l4 4 4-4" />
                </svg>
              </button>

              {pgOpen && (
                <div
                  className="absolute top-full left-0 flex shadow-2xl z-[200] rounded-b-2xl overflow-hidden"
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(249,115,22,0.2)",
                    borderTop: "3px solid #f97316",
                    minWidth: "560px",
                    marginTop: "0px",
                  }}
                >
                  {/* Left: categories — hover shows subtopics, click shows category article */}
                  <div className="w-[200px] border-r border-gray-100 py-2">
                    {PG_CATEGORIES.map((cat) => (
                      <div
                        key={cat.id}
                        className="flex items-center justify-between px-4 py-2.5 cursor-pointer transition-all duration-150 text-[0.88rem]"
                        style={{
                          background: pgHovered === cat.id ? "#f8f9fb" : "transparent",
                          borderLeft: pgHovered === cat.id ? "3px solid #f97316" : "3px solid transparent",
                          color: pgHovered === cat.id ? "#f97316" : "#374151",
                          fontWeight: 500,
                        }}
                        onMouseEnter={() => setPgHovered(cat.id)}
                        onClick={() => {
                          // Click category name → show that category's article from CONTENT
                          router.push(`/parenting-guide?artId=${cat.id}`);
                          setPgOpen(false);
                        }}
                      >
                        <span>{cat.label}</span>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M3 2l4 3-4 3" />
                        </svg>
                      </div>
                    ))}
                  </div>

                  {/* Right: subtopics — click shows that subtopic's article */}
                  <div className="flex-1 py-2 px-1 overflow-y-auto max-h-[320px]">
                    {PG_CATEGORIES.find((c) => c.id === pgHovered)?.subtopics.map((sub) => (
                      <div
                        key={sub.id}
                        className="px-4 py-1.5 text-[0.82rem] text-gray-600 cursor-pointer rounded-md transition-all duration-100 hover:text-[#f97316]"
                        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(249,115,22,0.04)")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                        onClick={() => {
                          router.push(`/parenting-guide?artId=${sub.id}`);
                          setPgOpen(false);
                        }}
                      >
                        {sub.label}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          </ul>
        )}

        {/* Desktop right buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/blogs"
            className="text-[#f97316] text-[0.85rem] font-bold no-underline px-[20px] py-[8px] rounded-full transition-all duration-200 hover:bg-[rgba(249,115,22,0.08)] hover:-translate-y-[1px]"
            style={{
              border: "1px solid rgba(249,115,22,0.5)",
              fontFamily: "'Rubik', sans-serif",
            }}
          >
            Blogs
          </Link>

          <Link
            href="#cta"
            className="text-white text-[0.85rem] font-bold no-underline px-[22px] py-[9px] rounded-full transition-all duration-200 hover:bg-[#ea6a0a] hover:-translate-y-[1px]"
            style={{
              background: "#f97316",
              boxShadow: "0 0 20px rgba(249,115,22,0.35)",
              fontFamily: "'Rubik', sans-serif",
            }}
          >
            Get the App
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed top-[65px] left-0 right-0 z-[99] flex flex-col px-[6%] py-6 gap-5 md:hidden"
            style={{
              background: "rgba(4,6,15,0.97)",
              backdropFilter: "blur(16px)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {isHome &&
              NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[#9ca3af] text-[0.95rem] font-medium tracking-[0.02em] no-underline transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}

            {isHome && (
              <Link
                href="/parenting-guide"
                onClick={() => setMenuOpen(false)}
                className="text-[#9ca3af] text-[0.95rem] font-medium tracking-[0.02em] no-underline transition-colors duration-200 hover:text-white"
              >
                Parenting Guide
              </Link>
            )}

            <div className="flex items-center gap-3 flex-wrap">
              <Link
                href="/blogs"
                onClick={() => setMenuOpen(false)}
                className="text-[#f97316] text-[0.85rem] font-bold no-underline px-[20px] py-[8px] rounded-full"
                style={{
                  border: "1px solid rgba(249,115,22,0.5)",
                  fontFamily: "'Rubik', sans-serif",
                }}
              >
                Blog
              </Link>

              <Link
                href="#cta"
                onClick={() => setMenuOpen(false)}
                className="text-white text-[0.85rem] font-bold no-underline px-[22px] py-[9px] rounded-full"
                style={{
                  background: "#f97316",
                  boxShadow: "0 0 20px rgba(249,115,22,0.35)",
                  fontFamily: "'Rubik', sans-serif",
                }}
              >
                Get the App
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}