"use client"

import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {FaBars} from "react-icons/fa6"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    // DropdownMenuLabel,
    // DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  

function Header() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const router = useRouter();
    const pathName = usePathname();
    const headerNavItems = [
        
        {
            id: 1,
            item: "Workshops",
            route: "/workshops"
        },
    ]

    useEffect(() => {
        const parentInfo = localStorage.getItem("ParentInfo");
        const parent = parentInfo ? JSON.parse(parentInfo) : null;
        if (!parent || !parent?.parent_id) {
            setIsLoggedIn(false)
            // router.push("/signup");
        } else {
            setIsLoggedIn(true);
            // router.push("/home/parentProfile");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
      <nav className={`w-full justify-between items-start flex flex-row absolute bg-transparent py-8 px-8 top-0 left-0 right-0 z-100`}>
          <div className='flex flex-row'>
              <Image onClick={()=>router.push("/")} src={"/images/logo/Ultimate-Logo.png"} className='object-cover' width={70} height={70} alt='Ultimate Logo'></Image>
              <Image src={"/images/logo/Your-Parenting-Partner-Logo.png"} width={150} height={120} alt='Your Parenting Partner Logo' className='hidden md:block'></Image>

          </div>
          {/* showing this section for viewport larger than md */}
          <div className='hidden md:flex flex-row items-center'>
              {
                 headerNavItems.length>0 && headerNavItems.map((navItem) => { 
                      return <motion.div key={navItem.id} className='text-lg text-black mx-4 text-white' whileHover={{textDecoration:"underline", color:"purple"}} transition={{duration:0.8}}><Link href={navItem.route}  key={navItem.id} className={`${pathName == "/" ? "text-white": "text-black"}`} >{ navItem.item}</Link></motion.div>
                  })
              } 

              <Button onClick={()=> {return isLoggedIn ? router.push("/home/parentProfile") : router.push("/signup")}} variant={"destructive"}>{isLoggedIn ? "My Account" : "Get The App"}</Button> 
           </div> 
           {/* showing this section of smaller viewport */} 
          <div className='flex md:hidden flex-row items-center'>
              
          <DropdownMenu>
  <DropdownMenuTrigger><FaBars color='white'></FaBars></DropdownMenuTrigger>
                  <DropdownMenuContent> 
                  {
                  headerNavItems.map((navItem) => { 
                      return <DropdownMenuItem onClick={()=>router.push(navItem.route)} key={navItem.id}>{navItem.item}</DropdownMenuItem>
                  })
              } 
                 <DropdownMenuItem><Button onClick={()=>router.push("/signup")} variant={"destructive"}>{isLoggedIn ? "My Account" : "Get The App"}</Button></DropdownMenuItem>
 </DropdownMenuContent>
</DropdownMenu>
          </div>
    </nav>
  )
}

export default Header