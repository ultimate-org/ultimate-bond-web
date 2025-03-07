"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
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
    const router = useRouter();
    const headerNavItems = [
        {
            id: 1,
            item: "Workshops",
            route: "/workshops"
        },
        {
            id: 2,
            item: "Advisory Board",
            route: "/advisory-board"
        }
    ]
  return (
      <nav className={`w-full justify-between items-center flex flex-row absolute bg-transparent py-8 px-8 top-0 left-0 right-0 z-100`}>
          <div className='flex flex-row bg-white rounded-lg'>
              <Image src={"/images/logo/Ultimate-Logo.png"} width={80} height={80} alt='Ultimate Logo'></Image>
              <Image src={"/images/logo/Your-Parenting-Partner-Logo.png"} width={150} height={120} alt='Your Parenting Partner Logo' className='hidden md:block'></Image>

          </div>
          {/* showing this section for viewport larger than md */}
          <div className='hidden md:flex flex-row items-center'>
              {
                  headerNavItems.map((navItem) => { 
                      return <motion.div key={navItem.id} className='text-lg text-black mx-4 text-white' whileHover={{textDecoration:"underline", color:"purple"}} transition={{duration:0.8}}><Link href={navItem.route }  key={navItem.id} >{ navItem.item}</Link></motion.div>
                  })
              }

              <Button onClick={()=>router.push("/signup")} variant={"destructive"}>Get The App</Button>
          </div>
          {/* showing this section of smaller viewport */}
          <div className='flex md:hidden flex-row items-center'>
              
          <DropdownMenu>
  <DropdownMenuTrigger><FaBars></FaBars></DropdownMenuTrigger>
                  <DropdownMenuContent>
                  {
                  headerNavItems.map((navItem) => { 
                      return <DropdownMenuItem key={navItem.id}>{navItem.item}</DropdownMenuItem>
                  })
              }
                 <DropdownMenuItem><Button variant={"destructive"}>Get The App</Button></DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
          </div>
    </nav>
  )
}

export default Header