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


import Image from "next/image";
import Link from "next/link";

/* ── Update hrefs when pages exist ── */
const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "Features", href: "#features" },
  { label: "Blog", href: "/blogs" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
//   { label: "Contact Us", href: "/contact-us" },
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
      {/* .footer-inner */}
      <div className="max-w-[1160px] mx-auto">

        {/* .footer-brand */}
        <div
          className="text-white font-black text-[1.1rem] mb-1"
          style={{ fontFamily: "'Rubik', sans-serif" }}
        >
          Ulti<span className="text-[#f97316]">Mate</span> — Family Growth Platform
        </div>

        {/* .footer-tagline */}
        <p className="text-[0.82rem] text-[#9ca3af] mb-5">
          Powered by Adeptify Technologies Pvt. Ltd. · Ordinary Moments. Extraordinary Family.
        </p>

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
        <div className="flex gap-8 justify-center flex-wrap mb-4">
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

        {/* .footer-contact */}
        <div className="text-[0.78rem] text-[#9ca3af] mb-3">
          📞 +91 9158810069 · ✉️{" "}
          <a
            href="mailto:contact@adeptifytechnologies.com"
            className="text-[#9ca3af] hover:text-[#f97316] transition-colors duration-200"
          >
            contact@adeptifytechnologies.com
          </a>{" "}
          · 📍 Pune - 411038, Maharashtra, India
        </div>

        {/* .footer-copy */}
        <div className="text-[0.75rem]" style={{ color: "rgba(122,138,176,0.5)" }}>
          @ 2025 Adeptify Technologies Pvt. Ltd. All rights reserved
        </div>

      </div>
    </footer>
  );
}