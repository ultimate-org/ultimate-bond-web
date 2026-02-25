"use client"

import React from 'react'
import Image from 'next/image'
// import Link from 'next/link'
// import { useRouter, usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { sendGAEvent } from "@next/third-parties/google";


// import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {FaBars} from "react-icons/fa6"
import {
    DropdownMenu,
    DropdownMenuContent,
    // DropdownMenuItem,
    // DropdownMenuLabel,
    // DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
// import DownloadAppModal from '../modal/DownloadAppModal';
  

function Header({ secondaryLogo }: { secondaryLogo: string }) {
    // const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    // const [showDownloadModal, setShowDownloadModal] = React.useState(false)
    const router = useRouter();
    // const pathName = usePathname();
    // const headerNavItems = [
        
    //     {
    //         id: 1,
    //         item: "Workshops",
    //         route: "/workshops"
    //     },
    // ]

    // useEffect(() => {
    //     const parentInfo = localStorage.getItem("ParentInfo");
    //     const parent = parentInfo ? JSON.parse(parentInfo) : null;
    //     if (!parent || !parent?.parent_id) {
    //         setIsLoggedIn(false)
    //         // router.push("/signup");
    //     } else {
    //         setIsLoggedIn(true);
    //         // router.push("/home/parentProfile");
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // },[])
  return (
      <nav className={`w-full justify-between items-start flex flex-row absolute bg-transparent py-8 px-8 top-0 left-0 right-0 z-[100]`}>
          <div className='flex flex-row'>
              <Image onClick={()=>router.push("/")} src={"/images/logo/Ultimate-Logo.png"} className='object-cover' width={70} height={70} alt='Ultimate Logo'></Image>
              <Image src={secondaryLogo} width={150} height={120} alt='Your Parenting Partner Logo' className='hidden md:block'></Image>

          </div>
          {/* showing this section for viewport larger than md */}
          
          <div className='hidden md:flex flex-row items-center'>
            <Button className='mx-2' onClick={()=> { sendGAEvent('event', 'blog_button_click', {  value: 'Blogs', });
            router.push("/blogs")}} variant={"destructive"}>Blogs</Button>  
              {/* <Button onClick={() => { return isLoggedIn ? router.push("/home/parentProfile") : router.push("/signup") }} variant={"destructive"}>{isLoggedIn ? "My Account" : "Get The App"}</Button>  */}
            <Button onClick={() => { router.push("/download-app")}} variant={"destructive"}>{"Get The App"}</Button> 

           </div> 
           {/* showing this section of smaller viewport */} 
          <div className='flex md:hidden flex-row items-center'>
              
          <DropdownMenu>
  <DropdownMenuTrigger><FaBars color='white'></FaBars></DropdownMenuTrigger>
                  <DropdownMenuContent> 
                  {/* {
                  headerNavItems.map((navItem) => { 
                      return <DropdownMenuItem onClick={()=>router.push(navItem.route)} key={navItem.id}>{navItem.item}</DropdownMenuItem>
                  })
              }  */}
                          <Button onClick={() => { router.push("/download-app")}} variant={"destructive"}>{"Get The App"}</Button> 

                 {/* <DropdownMenuItem><Button onClick={()=>router.push("/signup")} variant={"destructive"}>{isLoggedIn ? "My Account" : "Get The App"}</Button></DropdownMenuItem> */}
 </DropdownMenuContent>
</DropdownMenu>
          </div>
{/* {
    showDownloadModal && <DownloadAppModal isOpen={showDownloadModal} onClose={()=>setShowDownloadModal(false)}/>
} */}
    </nav>
  )
}

export default Header