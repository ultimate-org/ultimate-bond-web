

// "use client"
// import React, { useState } from 'react'
// import { usePathname, useRouter } from 'next/navigation'
// import { FiMenu, FiX } from 'react-icons/fi'

// function HomeSideBar() {
//     const pathName = usePathname();
//     const router = useRouter();
//     const [isOpen, setIsOpen] = useState(false);
    
//     const sideBarItems = [
//         {
//             id: 1,
//             name: "Home",
//             route: "/"
//         },
//         {
//             id: 2,
//             name: "My Account",
//             route: "/home/parentProfile"
//         },
//         {
//             id: 3,
//             name: "Child Accounts",
//             route: "/home/childProfile"
//         },
//         {
//             id: 4,
//             name: "Subscription Plans",
//             route: "/home/subscriptionPlans"
//         }
//     ]
    
//     const toggleSidebar = () => {
//         setIsOpen(!isOpen);
//     }
    
//     const navigateTo = (route: string) => {
//         router.push(route);
//         setIsOpen(false); // Close sidebar after navigation on mobile
//     }

//     return (
//         <>
//             {/* Mobile Menu Button */}
//             <button
//                 onClick={toggleSidebar}
//                 className="md:hidden fixed top-4 left-4 z-30 p-2 rounded-md bg-slate-600 text-white"
//                 aria-label="Toggle menu"
//             >
//                 {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//             </button>

//             {/* Sidebar */}
//             <div className={`fixed inset-y-0 left-0 z-20 w-64 bg-slate-600 transition-transform duration-300 ease-in-out
//                             ${isOpen ? 'translate-x-0' : '-translate-x-full'}
//                             md:translate-x-0 md:relative md:w-[20%]`}>
                
//                 {/* Content container with overflow control */}
//                 <div className='flex flex-col h-full'>
//                     <div className='flex-1 flex flex-col p-2 space-y-1 pt-16 md:pt-4 overflow-y-auto'>
//                         {
//                             sideBarItems.map((item) => {
//                                 return (
//                                     <button
//                                         onClick={() => navigateTo(item.route)}
//                                         key={item.id}
//                                         className={`px-4 py-3 rounded-md w-full text-left transition-colors duration-200
//                                             ${pathName === item.route
//                                                 ? "bg-lime-500 text-white font-medium"
//                                                 : "text-gray-100 hover:bg-slate-500"}`}
//                                     >
//                                         {item.name}
//                                     </button>
//                                 )
//                             })
//                         }
//                     </div>
//                 </div>
//             </div>
            
//             {/* Overlay for mobile */}
//             {isOpen && (
//                 <div
//                     className="md:hidden fixed inset-0 z-10 bg-black bg-opacity-50"
//                     onClick={toggleSidebar}
//                 />
//             )}
//         </>
//     )
// }

// export default HomeSideBar


// "use client"
// import React, { useState } from 'react'
// import { usePathname, useRouter } from 'next/navigation'
// import { FiMenu, FiX, FiLogOut } from 'react-icons/fi'
// import Image from 'next/image'

// function HomeSideBar() {
//     const pathName = usePathname();
//     const router = useRouter();
//     const [isOpen, setIsOpen] = useState(false);
    
//     const sideBarItems = [
//         {
//             id: 1,
//             name: "Home",
//             route: "/"
//         },
//         {
//             id: 2,
//             name: "My Account",
//             route: "/home/parentProfile"
//         },
//         {
//             id: 3,
//             name: "Child Accounts",
//             route: "/home/childProfile"
//         },
//         {
//             id: 4,
//             name: "Subscription Plans",
//             route: "/home/subscriptionPlans"
//         }
//     ]
    
//     const toggleSidebar = () => {
//         setIsOpen(!isOpen);
//     }
    
//     const navigateTo = (route: string) => {
//         router.push(route);
//         setIsOpen(false); // Close sidebar after navigation on mobile
//     }

//     const handleLogout = () => {
//         // Add your logout logic here
//         console.log("User logged out");
//         router.push("/login");
//     }

//     return (
//         <>
//             {/* Mobile Menu Button */}
//             <button
//                 onClick={toggleSidebar}
//                 className="md:hidden fixed top-4 left-4 z-30 p-2 rounded-md bg-slate-600 text-white"
//                 aria-label="Toggle menu"
//             >
//                 {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//             </button>

//             {/* Sidebar */}
//             <div className={`fixed inset-y-0 left-0 z-20 w-64 bg-slate-600 transition-transform duration-300 ease-in-out
//                             ${isOpen ? 'translate-x-0' : '-translate-x-full'}
//                             md:translate-x-0 md:relative md:w-[20%]`}>
//             {/* <div className={`fixed inset-y-0 left-0 z-20 w-64 bg-slate-600 transition-transform duration-300 ease-in-out
// //                             ${isOpen ? 'translate-x-0' : '-translate-x-full'}
// //                             md:translate-x-0 md:relative md:w-[20%]`}> */}
                
//                 {/* Content container with overflow control */}
//                 <div className='flex flex-col h-full'>
//                     {/* Logo at the top */}
//                     <div className='p-4 w-10 h-10 mx-auto flex items-center justify-center border-b border-slate-500'>
//                         <Image
//                             src="/images/logo/Ultimate-Logo.png" // Update this path to your actual logo
//                             alt="Company Logo"
//                             fill
//                             className='object-contain'
//                         />
//                     </div>
                    
//                     {/* Navigation items */}
//                     <div className='flex-1 flex flex-col p-2 space-y-1 overflow-y-auto'>
//                         {
//                             sideBarItems.map((item) => {
//                                 return (
//                                     <button
//                                         onClick={() => navigateTo(item.route)}
//                                         key={item.id}
//                                         className={`px-4 py-3 rounded-md w-full text-left transition-colors duration-200
//                                             ${pathName === item.route
//                                                 ? "bg-lime-500 text-white font-medium"
//                                                 : "text-gray-100 hover:bg-slate-500"}`}
//                                     >
//                                         {item.name}
//                                     </button>
//                                 )
//                             })
//                         }
//                     </div>
                    
//                     {/* Logout button at the bottom */}
//                     <div className='p-4 border-t border-slate-500'>
//                         <button
//                             onClick={handleLogout}
//                             className="flex items-center justify-center w-full px-4 py-3 rounded-md text-gray-100 hover:bg-slate-500 transition-colors duration-200"
//                         >
//                             <FiLogOut className="mr-2" />
//                             Logout
//                         </button>
//                     </div>
//                 </div>
//             </div>
            
//             {/* Overlay for mobile */}
//             {isOpen && (
//                 <div
//                     className="md:hidden fixed inset-0 z-10 bg-black bg-opacity-50"
//                     onClick={toggleSidebar}
//                 />
//             )}
//         </>
//     )
// }

// export default HomeSideBar

"use client"
import React, { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { FiMenu, FiX, FiLogOut } from 'react-icons/fi'
import Image from 'next/image'

function HomeSideBar() {
    const pathName = usePathname();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    
    
    const sideBarItems = [
        {
            id: 1,
            name: "Home",
            route: "/",
            icon: "🏠" // Optional: you can add icons here
        },
        {
            id: 2,
            name: "My Account",
            route: "/home/parentProfile",
            icon: "👤"
        },
        {
            id: 3,
            name: "Child Accounts",
            route: "/home/childProfile",
            icon: "👶"
        },
        {
            id: 4,
            name: "Subscription Plans",
            route: "/home/subscriptionPlans",
            icon: "💳"
        },
        {
            id: 5,
            name: "Active Subscription",
            route: `/home/subscriptionPlans/activeSubscription`,
            icon: "💳"
        }
    ]
    
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }
    
    const navigateTo = (route: string) => {
        router.push(route);
        setIsOpen(false); // Close sidebar after navigation on mobile
    }

    const handleLogout = () => {
        try {
          // Clear user data from localStorage
          localStorage.removeItem('ParentInfo');
          localStorage.removeItem('UserInfo');
          localStorage.removeItem('isLoggedIn');
          
          // Optionally clear any other related data
          // localStorage.removeItem('otherUserData');
          
          // Redirect to login page
          router.replace("/");
          
          // Optional: Refresh the page to ensure clean state
          router.refresh();
          
        } catch (error) {
          console.error('Error during logout:', error);
          // Handle error (e.g., show toast notification)
        }
      }

    return (
        <>
            {/* Mobile Menu Button */}
            <button 
                onClick={toggleSidebar}
                className="md:hidden fixed top-4 left-4 z-30 p-2 rounded-md bg-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
            >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            {/* Sidebar */}
            <aside 
                className={`fixed inset-y-0 left-0 z-20 w-64 bg-slate-600 transition-transform duration-300 ease-in-out
                          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
                          md:translate-x-0 md:relative md:w-64`}
                aria-label="Sidebar"
            >
                <div className='flex flex-col h-full pt-4'>
                    {/* Logo at the top */}
                    <div className='p-4 h-16 flex items-center justify-center border-b border-slate-500'>
                        <div className='relative w-32 h-14'>
                            <Image 
                                src="/images/logo/Ultimate-Logo.png"
                                alt="Company Logo"
                                fill
                                className='object-contain'
                                priority
                            />
                        </div>
                    </div>
                    
                    {/* Navigation items */}
                    <nav className='flex-1 flex flex-col p-2 space-y-1 overflow-y-auto'>
                        {sideBarItems.map((item) => (
                            <button 
                                onClick={() => navigateTo(item.route)} 
                                key={item.id} 
                                className={`flex items-center px-4 py-3 rounded-md w-full text-left transition-colors duration-200
                                    ${pathName === item.route 
                                        ? "bg-lime-500 text-white font-medium" 
                                        : "text-gray-100 hover:bg-slate-500"}`}
                                aria-current={pathName === item.route ? "page" : undefined}
                            >
                                {/* {item.icon && <span className="mr-2">{item.icon}</span>} */}
                                {item.name}
                            </button>
                        ))}
                    </nav>
                    
                    {/* Logout button at the bottom */}
                    <div className=' border-t border-slate-500'>
                        <button 
                            onClick={handleLogout}
                            className="flex items-center justify-center w-full px-4 py-3 rounded-md text-gray-100 hover:bg-slate-500 transition-colors duration-200"
                        >
                            <FiLogOut className="mr-2" />
                            Logout
                        </button>
                    </div>
                </div>
            </aside>
            
            {/* Overlay for mobile */}
            {isOpen && (
                <div 
                    className="md:hidden fixed inset-0 z-10 bg-black bg-opacity-50 transition-opacity duration-300"
                    onClick={toggleSidebar}
                    aria-hidden="true"
                />
            )}
        </>
    )
}

export default HomeSideBar