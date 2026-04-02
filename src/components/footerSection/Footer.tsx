// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import {FaYoutube, FaSquareFacebook, FaSquareInstagram, FaLinkedin} from "react-icons/fa6"



// function Footer() {
//     const socialMediaLinks = [
//         {
//             id: 1,
//             name: "Facebook",
//             icon: FaSquareFacebook,
//             link: "https://www.facebook.com/profile.php?id=61557983202371&mibextid=ZbWKwL"
//         },
//         // {
//         //     id: 2,
//         //     name: "Quora",
//         //     icon: FaQuora,
//         //     link: "https://www.quora.com/profile/UltiMate-227"
//         // },
//         {
//             id: 3,
//             name: "Instagram",
//             icon: FaSquareInstagram,
//             link: "https://www.instagram.com/ultimate_bondbetter/"
//         },
//         // {
//         //     id: 4,
//         //     name: "Twitter",
//         //     icon: FaSquareXTwitter,
//         //     link: "https://twitter.com/Ultimate_Bond_X"
//         // },
//         {
//             id: 5,
//             name: "Linkedin",
//             icon: FaLinkedin,
//             link: "https://www.linkedin.com/company/102275825/admin/feed/posts/"
//         },
//         {
//             id: 6,
//             name: "Youtube",
//             icon: FaYoutube,
//             link: "https://www.youtube.com/@Ulti-Mate_Parenting"
//         }

//     ]

//     const legalDocuments = [
//         {
//             id: 1,
//             name: "Terms and Conditions",
//             route:"/terms-and-conditions"
//         },
//         // {
//         //     id: 2,
//         //     name: "Refund and Cancellation Policy",
//         //     route: "/refund-and-cancellation-policy"
//         // },
//         // {
//         //     id: 3,
//         //     name: "Shipping Policy",
//         //     route: "/shipping-policy"
//         // },
//         {
//             id: 4,
//             name: "Privacy Policy",
//             route: "/privacy-policy"
//         },
//     ]
//   return (
//       <div className={`w-full px-8 py-2 bg-[#1D5B89]`}>
//           <div className={`w-full flex flex-col md:flex-row md:justify-between items-center`}>
//               {/* Footer logo and social media links section */}
//               <div className='flex flex-col items-center my-4'>
//                   <Image  src={"/images/logo/Ultimate-Logo.png"} alt="Ultimate Logo" width={80} height={80}></Image>
//                   <div className=' flex flex-row my-2'>
//                       {
//                           socialMediaLinks.map((mediaLink) => {
//                              return <Link key={mediaLink.id} href={mediaLink.link} className='mx-1 text-2xl' target='_blank'><mediaLink.icon color='#fff'></mediaLink.icon></Link>
//                           })
//                       }
//                   </div>
//               </div>

//               {/* Privacy Policy, Disclaimer, etc links */}
//               <div className='grid md:grid-cols-2 gap-2 '>
//                   {
//                       legalDocuments.map((doc) => {
//                         return  <Link key={doc.id} href={doc.route} className='text-xs text-center text-white'>{ doc.name}</Link>
//                       })
//                   }
//               </div>

//                {/* Contact us and share link */}
//                <div className='mt-6'>
//                   <div>
//                       <h3 className='font-bold text-center text-white'>Contact Us</h3>
//                       <p className='my-1 text-center text-xs text-white'>+91 9158810069</p>
//                       <p className='my-1 text-center text-xs text-white'>contact@adeptifytechnologies.com</p>
//                       <p className='my-1 text-center text-xs text-white'>Pune - 411038, Maharashtra, India</p>
//                  </div>
//               </div>
//           </div>
//           <div className='my-4'><p className={`text-center text-[0.55rem] text-slate-800 text-white md:mr-[6rem]`}>@ 2025 Adeptify Technologies Pvt. Ltd. All rights reserved</p></div>
//     </div>
//   )
// }

// export default Footer


// import Image from "next/image";
// import Link from "next/link";

// /* ── Update hrefs when pages exist ── */
// const FOOTER_LINKS = [
//   { label: "Home", href: "/" },
//   { label: "Features", href: "#features" },
//   { label: "Blog", href: "/blogs" },
//   { label: "Terms & Conditions", href: "/terms-and-conditions" },
//   { label: "Privacy Policy", href: "/privacy-policy" },
// //   { label: "Contact Us", href: "/contact-us" },
// ];

// export default function Footer() {
//   return (
//     <footer
//       className="relative z-[1] px-[6%] py-12 text-center"
//       style={{
//         background: "#0a0e1f",
//         borderTop: "1px solid rgba(255,255,255,0.08)",
//       }}
//     >
//       {/* .footer-inner */}
//       <div className="max-w-[1160px] mx-auto">

//         {/* .footer-brand */}
//         <div
//           className="text-white font-black text-[1.1rem] mb-1"
//           style={{ fontFamily: "'Rubik', sans-serif" }}
//         >
//           Ulti<span className="text-[#f97316]">Mate</span> — Family Growth Platform
//         </div>

//         {/* .footer-tagline */}
//         <p className="text-[0.82rem] text-[#9ca3af] mb-5">
//           Powered by Adeptify Technologies Pvt. Ltd. · Ordinary Moments. Extraordinary Family.
//         </p>

//         {/* AICTE badge row */}
//         <div className="flex items-center justify-center gap-4 mb-4">
//           <Image
//             src="/images/aictelogo.png"
//             alt="AICTE Approved"
//             width={60}
//             height={40}
            
//             className="h-20 w-auto"
//             style={{ opacity: 0.7, filter: "grayscale(0.3)" }}
//           />
//           <span className="text-[0.75rem] text-[#9ca3af]">
//             AICTE Accredited · Ministry of Education, Govt. of India
//           </span>
//         </div>

//         {/* .footer-links */}
//         <div className="flex gap-8 justify-center flex-wrap mb-4">
//           {FOOTER_LINKS.map((link) => (
//             <Link
//               key={link.label}
//               href={link.href}
//               className="text-[0.8rem] text-[#9ca3af] no-underline transition-colors duration-200 hover:text-[#f97316]"
//             >
//               {link.label}
//             </Link>
//           ))}
//         </div>

//         {/* .footer-contact */}
//         <div className="text-[0.78rem] text-[#9ca3af] mb-3">
//           📞 +91 9158810069 · ✉️{" "}
//           <a
//             href="mailto:contact@adeptifytechnologies.com"
//             className="text-[#9ca3af] hover:text-[#f97316] transition-colors duration-200"
//           >
//             contact@adeptifytechnologies.com
//           </a>{" "}
//           · 📍 Pune - 411038, Maharashtra, India
//         </div>

//         {/* .footer-copy */}
//         <div className="text-[0.75rem]" style={{ color: "rgba(122,138,176,0.5)" }}>
//           @ 2025 Adeptify Technologies Pvt. Ltd. All rights reserved
//         </div>

//       </div>
//     </footer>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";

const FOOTER_LINKS = [
  { label: "Home",               href: "/"                    },
  { label: "Features",           href: "#features"            },
  { label: "Blog",               href: "/blogs"               },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Policy",     href: "/privacy-policy"      },
];

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/Ultimatebondbetter/61557983202371/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ultimate_bondbetter/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/ultimate-pristine-tech-solutions/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@Ulti-Mate_Parenting",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      className="relative z-[1] px-[6%] py-12 text-center"
      style={{
        background: "#0a0e1f",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="max-w-[1160px] mx-auto">

        {/* .footer-brand */}
        <div
          className="text-white font-black text-[1.1rem] mb-1"
          style={{ fontFamily: "'Rubik', sans-serif" }}
        >
          Ulti<span className="text-[#f97316]">Mate</span> — Family Growth Platform
        </div>

        {/* .footer-tagline
        <p className="text-[0.82rem] text-[#9ca3af] mb-5">
          Powered by Adeptify Technologies Pvt. Ltd.
        </p> */}

        {/* AICTE badge row */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <Image
            src="/images/aictelogo.png"
            alt="AICTE Approved"
            width={60}
            height={40}
            className="h-20 w-auto"
            style={{ opacity: 0.7, filter: "grayscale(0.3)" }}
          />
          <span className="text-[0.75rem] text-[#9ca3af]">
            AICTE Accredited · Ministry of Education, Govt. of India
          </span>
        </div>

        {/* .footer-links */}
        <div className="flex gap-8 justify-center flex-wrap mb-5">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[0.8rem] text-[#9ca3af] no-underline transition-colors duration-200 hover:text-[#f97316]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* social links */}
        <div className="flex items-center justify-center gap-3 mb-5">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-8 h-8 rounded-full flex items-center justify-center text-[#9ca3af] transition-all duration-200 hover:text-[#f97316] hover:-translate-y-0.5 hover:bg-[rgba(249,115,22,0.08)] hover:border-[rgba(249,115,22,0.4)]"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* .footer-contact */}
        <div className="text-[0.78rem] text-[#9ca3af] mb-3">
          📞 +91 9158810069 · ✉️{" "}
          <a
            href="mailto:contact@adeptifytechnologies.com"
            className="text-[#9ca3af] hover:text-[#f97316] transition-colors duration-200"
          >
            contact@adeptifytechnologies.com
          </a>{" "}
          · 📍 Pune, Maharashtra, India
        </div>

        {/* .footer-copy */}
        <div className="text-[0.75rem]" style={{ color: "rgba(122,138,176,0.5)" }}>
          @ 2025 Adeptify Technologies Pvt. Ltd. All rights reserved
        </div>

      </div>
    </footer>
  );
}