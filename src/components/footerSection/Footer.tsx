import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {FaYoutube, FaSquareFacebook, FaSquareInstagram, FaLinkedin} from "react-icons/fa6"



function Footer() {
    const socialMediaLinks = [
        {
            id: 1,
            name: "Facebook",
            icon: FaSquareFacebook,
            link: "https://www.facebook.com/profile.php?id=61557983202371&mibextid=ZbWKwL"
        },
        // {
        //     id: 2,
        //     name: "Quora",
        //     icon: FaQuora,
        //     link: "https://www.quora.com/profile/UltiMate-227"
        // },
        {
            id: 3,
            name: "Instagram",
            icon: FaSquareInstagram,
            link: "https://www.instagram.com/ultimate_bondbetter/"
        },
        // {
        //     id: 4,
        //     name: "Twitter",
        //     icon: FaSquareXTwitter,
        //     link: "https://twitter.com/Ultimate_Bond_X"
        // },
        {
            id: 5,
            name: "Linkedin",
            icon: FaLinkedin,
            link: "https://www.linkedin.com/company/102275825/admin/feed/posts/"
        },
        {
            id: 6,
            name: "Youtube",
            icon: FaYoutube,
            link: "https://www.youtube.com/@Ulti-Mate_Parenting"
        }

    ]

    const legalDocuments = [
        {
            id: 1,
            name: "Terms and Conditions",
            route:"/terms-and-conditions"
        },
        {
            id: 2,
            name: "Refund and Cancellation Policy",
            route: "/refund-and-cancellation-policy"
        },
        {
            id: 3,
            name: "Shipping Policy",
            route: "/shipping-policy"
        },
        {
            id: 4,
            name: "Privacy Policy",
            route: "/privacy-policy"
        },
    ]
  return (
      <div className={`w-full px-8 py-2 bg-[#020e25]`}>
          <div className={`w-full flex flex-col md:flex-row md:justify-between items-center`}>
              {/* Footer logo and social media links section */}
              <div className='flex flex-col items-center my-4'>
                  <Image  src={"/images/logo/Ultimate-Logo.png"} alt="Ultimate Logo" width={80} height={80}></Image>
                  <div className=' flex flex-row my-2'>
                      {
                          socialMediaLinks.map((mediaLink) => {
                             return <Link key={mediaLink.id} href={mediaLink.link} className='mx-1 text-2xl' target='_blank'><mediaLink.icon color='#fff'></mediaLink.icon></Link>
                          })
                      }
                  </div>
              </div>

              {/* Privacy Policy, Disclaimer, etc links */}
              <div className='grid md:grid-cols-2 gap-2 '>
                  {
                      legalDocuments.map((doc) => {
                        return  <Link key={doc.id} href={doc.route} className='text-xs text-center text-white'>{ doc.name}</Link>
                      })
                  }
              </div>

               {/* Contact us and share link */}
               <div className='mt-6'>
                  <div>
                      <h3 className='font-bold text-center text-white'>Contact Us</h3>
                      <p className='my-1 text-center text-xs text-white'>+91 9356452498</p>
                      <p className='my-1 text-center text-xs text-white'>contact@adeptifytechnologies.com</p>
                 </div>
              </div>
          </div>
          <div className='my-4'><p className={`text-center text-[0.55rem] text-slate-800 text-white`}>@ 2025 Adeptify Technologies Pvt. Ltd. All rights reserved</p></div>
    </div>
  )
}

export default Footer