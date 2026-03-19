// // import Link from "next/link";
// // import { BtnPrimary, BtnSecondary, containerClass } from "@/components/ui/UI";

// // const STORE_BTNS = [
// //   {
// //     icon: "🍎",
// //     small: "Download on the",
// //     strong: "App Store",
// //     href: "#app-store",
// //   },
// //   {
// //     icon: "▶️",
// //     small: "Get it on",
// //     strong: "Google Play",
// //     href: "#google-play",
// //   },
// // ];

// // const FOOTER_LINKS = [
// //   { label: "About",      href: "#about" },
// //   { label: "Features",   href: "#features" },
// //   { label: "Pricing",    href: "#pricing" },
// //   { label: "Blog",       href: "#blog" },
// //   { label: "Privacy",    href: "#privacy" },
// //   { label: "Terms",      href: "#terms" },
// // ];

// // export default function CtaFooter() {
// //   return (
// //     <>
// //       {/* ══════════════════════════════════════
// //           CTA
// //       ══════════════════════════════════════ */}
// //       <section
// //         id="cta"
// //         className="py-[100px] text-center relative z-[1]"
// //         style={{
// //           background:
// //             "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(249,115,22,0.07) 0%, transparent 70%)",
// //         }}
// //       >
// //         <div className={containerClass}>

// //           {/* #cta h2 */}
// //           <h2
// //             className="text-white font-black leading-[1.15] tracking-[-0.03em] mb-4 max-w-[700px] mx-auto"
// //             style={{
// //               fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
// //               fontFamily: "'Rubik', sans-serif",
// //             }}
// //           >
// //             {/* YOUR CTA HEADLINE — wrap accent in: <em className="text-[#f97316] not-italic">word</em> */}
// //           </h2>

// //           {/* #cta p */}
// //           <p className="text-[#9ca3af] text-[1rem] mb-10 font-light">
// //             {/* YOUR CTA SUBTEXT */}
// //           </p>

// //           {/* Primary + secondary CTA row */}
// //           <div className="flex gap-4 justify-center flex-wrap mb-8">
// //             <BtnPrimary href="#get-started">
// //               {/* YOUR PRIMARY CTA */}
// //             </BtnPrimary>
// //             <BtnSecondary href="#learn-more">
// //               {/* YOUR SECONDARY CTA */}
// //             </BtnSecondary>
// //           </div>

// //           {/* .store-btns */}
// //           <div className="flex gap-4 justify-center flex-wrap mb-8">
// //             {STORE_BTNS.map((btn) => (
// //               <Link
// //                 key={btn.strong}
// //                 href={btn.href}
// //                 /* .store-btn */
// //                 className="flex items-center gap-3 no-underline text-white px-6 py-[14px] rounded-[14px] transition-all duration-300 hover:border-[rgba(249,115,22,0.3)]"
// //                 style={{
// //                   background: "#0a0e1f",
// //                   border: "1px solid rgba(255,255,255,0.08)",
// //                 }}
// //               >
// //                 {/* .store-btn-icon */}
// //                 <span className="text-[1.8rem] leading-none">{btn.icon}</span>

// //                 {/* .store-btn-text */}
// //                 <span>
// //                   <small className="block text-[0.68rem] text-[#9ca3af] uppercase tracking-[0.06em]">
// //                     {btn.small}
// //                   </small>
// //                   <strong className="text-[0.95rem] font-semibold">{btn.strong}</strong>
// //                 </span>
// //               </Link>
// //             ))}
// //           </div>

// //           {/* .guarantee */}
// //           <p className="flex items-center justify-center gap-1.5 text-[0.82rem] text-[#9ca3af]">
// //             <span>🔒</span>
// //             {/* YOUR GUARANTEE TEXT */}
// //           </p>

// //         </div>
// //       </section>

// //       {/* ══════════════════════════════════════
// //           FOOTER
// //       ══════════════════════════════════════ */}
// //       <footer
// //         className="py-12 px-[6%] text-center relative z-[1]"
// //         style={{
// //           borderTop: "1px solid rgba(255,255,255,0.08)",
// //           background: "#0a0e1f",
// //         }}
// //       >
// //         <div className="max-w-[1160px] mx-auto">

// //           {/* .footer-brand */}
// //           <p
// //             className="font-black text-[1.1rem] mb-1 text-white"
// //             style={{ fontFamily: "'Rubik', sans-serif" }}
// //           >
// //             Ultimate<span className="text-[#f97316]">.</span>
// //           </p>

// //           {/* .footer-tagline */}
// //           <p className="text-[#9ca3af] text-[0.82rem] mb-5">
// //             {/* YOUR FOOTER TAGLINE */}
// //           </p>

// //           {/* .footer-links */}
// //           <div className="flex gap-8 justify-center flex-wrap mb-4">
// //             {FOOTER_LINKS.map((l) => (
// //               <Link
// //                 key={l.label}
// //                 href={l.href}
// //                 className="text-[0.8rem] text-[#9ca3af] no-underline transition-colors duration-200 hover:text-[#f97316]"
// //               >
// //                 {l.label}
// //               </Link>
// //             ))}
// //           </div>

// //           {/* .footer-contact */}
// //           <p className="text-[#9ca3af] text-[0.78rem] mb-3">
// //             {/* YOUR CONTACT LINE e.g. hello@yourdomain.com */}
// //           </p>

// //           {/* .footer-copy */}
// //           <p className="text-[0.75rem]" style={{ color: "rgba(122,138,176,0.5)" }}>
// //             © {new Date().getFullYear()} Ultimate. All rights reserved.
// //           </p>

// //         </div>
// //       </footer>
// //     </>
// //   );
// // }






// import Link from "next/link";
// import { containerClass, SectionHeader } from "@/components/ui/UI";

// const STORE_BTNS = [
//   {
//     icon: "🍎",
//     small: "Download on the",
//     strong: "App Store",
//     href:  `${process.env.NEXT_PUBLIC_APP_APPSTORE_SHARE_LINK}`, // ← replace with your App Store link
//   },
//   {
//     icon: "▶️",
//     small: "Get it on",
//     strong: "Google Play",
//     href: `${process.env.NEXT_PUBLIC_APP_PLAYSTORE_SHARE_LINK}`, // ← replace with your Play Store link
//   },
// ];

// export default function Cta() {
//   return (
//     <section
//       id="cta"
//       className="py-[100px] text-center relative z-[1]"
//       style={{
//         background:
//           "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(249,115,22,0.07) 0%, transparent 70%)",
//       }}
//     >
//       <div className={containerClass}>

//         <SectionHeader heading={"Be The UltiMate Parent in Your Child's Growth"} sub={"Download the app today and start your family's journey across the stars. 20 minutes a day. 20+ milestones. One extraordinary family. 100% results guaranteed."}/>

//         {/* #cta h2
//         <h2
//           className="text-white font-black leading-[1.15] tracking-[-0.03em] mb-4 max-w-[700px] mx-auto"
//           style={{
//             fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
//             fontFamily: "'Rubik', sans-serif",
//           }}
//         >
//           Be The UltiMate Parent
// in Your Child's Growth
//         </h2>

//         {/* #cta p */}
//         {/* <p className="text-[#9ca3af] text-[1rem] mb-10 font-light">
//           {/* YOUR CTA SUBTEXT */}
//         {/* </p> */}

        

//         {/* Primary + Secondary buttons */}
//         {/* <div className="flex gap-4 justify-center flex-wrap mb-8">
//           <BtnPrimary href={process.env.NEXT_PUBLIC_APP_PLAYSTORE_SHARE_LINK}>
            
//           </BtnPrimary>
//           <BtnSecondary href={process.env.NEXT_PUBLIC_APP_PLAYSTORE_SHARE_LINK}>
           
//           </BtnSecondary>
//         </div> */}

//         {/* .store-btns
//             @media(max-width:600px) → stacks naturally via flex-wrap */}
//         <div className="flex gap-4 justify-center flex-wrap mb-8">
//           {STORE_BTNS.map((btn) => (
//             <Link
//               key={btn.strong}
//               href={btn.href}
//               target="_blank"
//               rel="noopener noreferrer"
//               /* .store-btn */
//               className="flex items-center gap-3 no-underline text-white px-6 py-[14px] rounded-[14px] transition-all duration-300 hover:border-[rgba(249,115,22,0.3)]"
//               style={{
//                 background: "#0a0e1f",
//                 border: "1px solid rgba(255,255,255,0.08)",
//               }}
//             >
//               {/* .store-btn-icon */}
//               <span className="text-[1.8rem] leading-none">{btn.icon}</span>

//               {/* .store-btn-text */}
//               <span>
//                 <small className="block text-[0.68rem] text-[#9ca3af] uppercase tracking-[0.06em]">
//                   {btn.small}
//                 </small>
//                 <strong className="text-[0.95rem] font-semibold">{btn.strong}</strong>
//               </span>
//             </Link>
//           ))}
//         </div>

//         {/* .guarantee */}
//         <p className="flex items-center justify-center gap-1.5 text-[0.82rem] text-[#9ca3af] mt-8">
//           <span>🔒</span>
//           {/* YOUR GUARANTEE TEXT */}
//         </p>

//       </div>
//     </section>
//   );
// }


// "use client";

// import { motion } from "framer-motion";
// import { containerClass, BtnPrimary } from "@/components/ui/UI";

// /* ── Update these hrefs when store links are ready ── */
// const STORE_BTNS = [
//   {
//     icon: "🍎",
//     small: "Download on the",
//     strong: "App Store",
//     href: process.env.NEXT_PUBLIC_APP_APPSTORE_SHARE_LINK,
//   },
//   {
//     icon: "▶",
//     small: "Get it on",
//     strong: "Google Play",
//     href: process.env.NEXT_PUBLIC_APP_PLAYSTORE_SHARE_LINK,
//   },
// ];

// export default function CtaFooter() {
//   return (
//     <section
//       id="cta"
//       className="py-[100px] text-center relative z-[1]"
//       style={{
//         background:
//           "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(249,115,22,0.07) 0%, transparent 70%)",
//       }}
//     >
//       <div className={`${containerClass} flex flex-col items-center`}>

//         {/* .section-tag */}
//         <span
//           className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 mb-6 text-[0.75rem] font-bold tracking-[0.06em] uppercase text-[#f97316]"
//           style={{
//             background: "rgba(249,115,22,0.1)",
//             border: "1px solid rgba(249,115,22,0.25)",
//             fontFamily: "'Rubik', sans-serif",
//           }}
//         >
//           Be The Ulti-Mate Parent
//         </span>

//         {/* h2 */}
//         <motion.h2
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-white font-black leading-[1.15] tracking-[-0.03em] mb-4 max-w-[700px] mx-auto"
//           style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontFamily: "'Rubik', sans-serif" }}
//         >
//           Be The{" "}
//           <em className="text-[#f97316] not-italic">UltiMate</em>{" "}
//           Parent
//           <br />
//           in Your Child's Growth
//         </motion.h2>

//         {/* p */}
//         <p className="text-[#9ca3af] text-[1rem] mb-10 font-light">
//           Download the app today and start your family's journey across the stars.
//           <br />
//           20 minutes a day. 20+ milestones. One extraordinary family. 100% results guaranteed.
//         </p>

//         {/* .store-btns */}
//         <div className="flex gap-4 justify-center flex-wrap mb-8">
//           {STORE_BTNS.map((btn) => (
//             <a
//               key={btn.strong}
//               href={btn.href}
//               target="_blank"
//               rel="noopener noreferrer"
//               /* .store-btn */
//               className="flex items-center gap-3 px-6 py-3.5 rounded-[14px] text-white no-underline transition-all duration-300 hover:bg-[#0d1224] hover:border-[rgba(249,115,22,0.25)]"
//               style={{
//                 background: "#0a0e1f",
//                 border: "1px solid rgba(255,255,255,0.08)",
//               }}
//             >
//               {/* .store-btn-icon */}
//               <span className="text-[1.8rem] leading-none">{btn.icon}</span>

//               {/* .store-btn-text */}
//               <span>
//                 <small
//                   className="block text-[0.68rem] text-[#9ca3af] uppercase tracking-[0.06em]"
//                   style={{ fontStyle: "normal" }}
//                 >
//                   {btn.small}
//                 </small>
//                 <strong className="text-[0.95rem] font-semibold">{btn.strong}</strong>
//               </span>
//             </a>
//           ))}
//         </div>

//         {/* .guarantee */}
//         <div className="flex items-center justify-center gap-1.5 text-[0.82rem] text-[#9ca3af]">
//           ✅ 100% results guaranteed · follow the framework · free to start
//         </div>

//       </div>
//     </section>
//   );
// }



"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { containerClass } from "@/components/ui/UI";

const STORE_BTNS = [
  {
    img: "/images/applink/app_store_white.png",
    alt: "Download on the App Store",
    href: process.env.NEXT_PUBLIC_APP_APPSTORE_SHARE_LINK,
  },
  {
    img: "/images/applink/play_store_white.png",
    alt: "Get it on Google Play",
    href: process.env.NEXT_PUBLIC_APP_PLAYSTORE_SHARE_LINK,
  },
];

export default function Cta() {
  return (
    <section
      id="cta"
      className="py-[100px] text-center relative z-[1]"
      style={{
        background:
          "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(249,115,22,0.07) 0%, transparent 70%)",
      }}
    >
      <div className={`${containerClass} flex flex-col items-center`}>

        {/* .section-tag */}
        <span
          className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 mb-6 text-[0.75rem] font-bold tracking-[0.06em] uppercase text-[#f97316]"
          style={{
            background: "rgba(249,115,22,0.1)",
            border: "1px solid rgba(249,115,22,0.25)",
            fontFamily: "'Rubik', sans-serif",
          }}
        >
          Be The Ulti-Mate Parent
        </span>

        {/* h2 */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-white font-black leading-[1.15] tracking-[-0.03em] mb-4 max-w-[700px] mx-auto"
          style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontFamily: "'Rubik', sans-serif" }}
        >
          Be The{" "}
          <em className="text-[#f97316] not-italic">UltiMate</em>{" "}
          Parent
          <br />
          in Your Child&apos;s Growth
        </motion.h2>

        {/* p */}
        <p className="text-[#9ca3af] text-[1rem] mb-10 font-light">
          Download the app today and start your family&apos;s journey across the stars.
          <br />
          20 minutes a day. 20+ milestones. One extraordinary family. 100% results guaranteed.
        </p>

        {/* store badge buttons */}
        <div className="flex gap-4 justify-center flex-wrap mb-8">
          {STORE_BTNS.map((btn) => (
            <a
              key={btn.alt}
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:-translate-y-[2px] hover:opacity-90"
            >
              <Image
                src={btn.img}
                alt={btn.alt}
                width={160}
                height={52}
                className="h-[52px] w-auto object-contain"
              />
            </a>
          ))}
        </div>

        {/* .guarantee */}
        <div className="flex items-center justify-center gap-1.5 text-[0.82rem] text-[#9ca3af]">
          ✅ 100% results guaranteed · follow the framework · free to start
        </div>

      </div>
    </section>
  );
}