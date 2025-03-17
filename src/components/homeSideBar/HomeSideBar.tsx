"use client"
import React from 'react'
import { usePathname, useRouter } from 'next/navigation'

function HomeSideBar() {
    const pathName = usePathname();
    const router = useRouter();
    const sideBarItems = [
        {
            id: 1,
            name: "My Account",
            route: "/home/parentProfile"
        },
        {
            id: 2,
            name: "Child Accounts",
            route: "/home/childProfile"
        }
    ]
  return (
      <div className='h-min-screen md:w-[20%] bg-slate-600'>
          
          <div className=''>
              {
                  sideBarItems.map((items) => {
                      return <button onClick={()=>{router.push(items.route)}} key={items.id} className={`px-2 py-4 my-3 w-full ${pathName == items.route && "bg-lime-500"}`}><p className='text-left'>{ items.name}</p></button>
                  })
              }
          </div>
    </div>
  )
}

export default HomeSideBar