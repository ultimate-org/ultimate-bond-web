// // // --------------------------------------------------------

// // "use client"
// // import React from 'react'
// // import { philosopher } from '@/fonts/fonts'
// // import { motion } from "framer-motion"
// // import { DeliciousHandrawn , montserratRegular, montserratBold} from "@/fonts/fonts"
// // import styles from "./Main.module.css"
// // import Image from 'next/image'


// // const transition = {
// //     duration: 0.8,
// //     delay: 0.5,
// //     ease: [0, 0.71, 0.2, 1.01],
// //   }

// // function Main() {
// //   const pointsArr = [
// //     { normal: "Emotional regulation", bold: "in tough situations?" },
// //     { normal: "Conflict resolution & decision making", bold: "in relationships?" },
// //     { normal: "Financial literacy to make", bold: "smart life decisions?" },
// //     { normal: "Networking & leadership to", bold: "unlock new opportunities?" },
// //     { normal: "Resilience to", bold: "handle setbacks?" }
// // ];
// //   return (
// //     <div className='justify-center items-center bg-[url(/images/landing-image.png)] bg-bottom bg-cover bg-no-repeat'>
// //           <div className='pt-[8rem]  '>
// //         {/* <div className='pt-[8rem] pb-[7rem] '> */}
// //         <div className=' pt-[7rem] pb-[10rem] relative  '>
// //         <h1 className={`text-center text-8xl ${philosopher.className} ${styles.title}`}>The Future Starts Now!</h1>
// //           <div className='flex flex-row mt-8 w-[90%] mx-auto'>
// //           <div className='relative mx-auto'>
// //           <h2 className={`text-center text-4xl ${philosopher.className} text-transparent bg-clip-text bg-[#06A5D8] `}>Prepare Your Child for the <div className='w-auto inline-block'><h2 className={`text-center text-4xl ${philosopher.className} text-transparent bg-clip-text bg-[#06A5D8]`}>Unknown</h2><div className='w-full h-3  relative'>
// //             <Image src="/images/stroke.png" alt="stroke" fill objectFit='cover'></Image>
// //             </div></div></h2>
// //             </div>
// //             </div>
// //         </div>
// //           <div className='justify-center bg-[#020e25] py-[6rem]'>
// //               <div>
// //             <p className={`text-center text-2xl text-white ${montserratRegular.className} ${styles.mainTextColor}`}>Traditional education prepares children for <span className={`underline underline-offset-2 ${styles.mainTextColor}`}>Tests, Grades, Degrees</span></p>
// //             <p className={`text-center mt-[3rem] text-5xl text-white  ${montserratBold.className} ${styles.mainTextColor}`}>But does it prepare them for...</p>
// //               </div>
// //           <div className='my-[4rem] flex flex-col md:flex-row justify-center bg-[#020e25] items-center px-8'>
// //               {
// //                   pointsArr.map((point,index) => {
// //                       return <motion.div key={index} className={`border border-1 mb-2 w-[80%] md:w-[18%] h-[8rem] mx-1 rounded-md flex items-center justify-center bg-[#CCDBEE] p-4`} initial={{scale:0, opacity:0}} whileInView={{scale:1, opacity:1}} viewport={{amount:1, once:true}} transition={{
// //                         ...transition,
// //                         delay:  index == 0 ?  0 : transition.delay + index * 0.5 , // Add delay based on index
// //                       }} >
// //                         <p className={`text-lg my-1 text-[#020e25] ${montserratBold.className} text-center`}>
// //                 {point.normal} <strong>{point.bold}</strong>
// //             </p>
// //                       </motion.div>
// //                   })
// //                   }
// //                   </div>
// //        <div className='mt-6 bg-[#020e25]'>
// //                     <p className={`text-center text-white text-xl md:text-4xl ${DeliciousHandrawn.className} ${styles.mainTextColor}`}>So, are we raising <span className={`${DeliciousHandrawn.className} text-4xl`}>happy, resilient, and emotionally</span> strong children?</p>
// //         </div>
// //           </div>
      
// //         </div>
// //     </div>
// //   )
// // }

// // export default Main





// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import { ArrowRight, Play } from "lucide-react";

// const STATS = [
//   { val: "12K+", label: "Active Users" },
//   { val: "99.9%", label: "Uptime" },
//   { val: "4.9★", label: "Avg Rating" },
//   { val: "150+", label: "Countries" },
// ];

// const fadeUp = {
//   hidden: { opacity: 0, y: 28 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
//   }),
// };

// export default function Hero() {
//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex items-center px-[6%] pt-[120px] pb-[80px] overflow-hidden"
//     >
//       {/* ── Background Image with Gradient Overlay ── */}
//       <div
//         className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat"
//         style={{
//           backgroundImage: `url('https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=1920&q=80')`,
//         }}
//       >
//         {/* Left-heavy gradient: same logic as original CSS */}
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               "linear-gradient(90deg, rgba(4,6,15,0.93) 40%, rgba(4,6,15,0.35) 80%, transparent 100%)",
//           }}
//         />
//       </div>

//       {/* ── Content wrapper ── */}
//       <div className="relative z-10 max-w-[1160px] mx-auto w-full">
//         <div className="max-w-[580px]">

//           {/* Eyebrow label */}
//           <motion.div
//             custom={0}
//             initial="hidden"
//             animate="visible"
//             variants={fadeUp}
//             className="flex items-center gap-2 mb-5"
//           >
//             <span className="w-6 h-[1px] bg-[#f97316] flex-shrink-0" />
//             <span
//               className="text-[0.78rem] tracking-[0.14em] uppercase font-bold text-[#f97316]"
//               style={{ fontFamily: "'Rubik', sans-serif" }}
//             >
//               Family Growth Platform

//             </span>
//           </motion.div>

//           {/* H1 */}
//           <motion.h1
//             custom={1}
//             initial="hidden"
//             animate="visible"
//             variants={fadeUp}
//             className="text-white font-black leading-[1.05] tracking-[-0.03em] mb-4"
//             style={{
//               fontSize: "clamp(2.6rem, 5.5vw, 4.2rem)",
//               fontFamily: "'Rubik', sans-serif",
//             }}
//           >
//             Ordinary Moments.

//             <br />
//             <em className="text-[#f97316] not-italic">Extraordinary</em>
//             <br />
//             Family.
//           </motion.h1>

//           {/* Subtext */}
//           <motion.p
//             custom={2}
//             initial="hidden"
//             animate="visible"
//             variants={fadeUp}
//             className="text-[#9ca3af] text-[1.05rem] max-w-[460px] mb-8 font-light leading-[1.8]"
//           >
//             The platform built for teams that{" "}
//             <strong className="text-white font-medium">move fast</strong> and
//             break records. From launch to scale —{" "}
//             <strong className="text-white font-medium">one place</strong>.
//           </motion.p>

//           {/* CTA buttons */}
//           <motion.div
//             custom={3}
//             initial="hidden"
//             animate="visible"
//             variants={fadeUp}
//             className="flex gap-4 flex-wrap mb-12"
//           >
//             {/* Primary */}
//             <Link
//               href="#get-started"
//               className="inline-flex items-center gap-2 bg-[#f97316] text-white px-6 py-3 rounded-full text-[0.875rem] font-bold no-underline transition-all duration-200 hover:bg-[#ea6a0a] hover:-translate-y-[2px]"
//               style={{
//                 boxShadow: "0 0 28px rgba(249,115,22,0.45)",
//                 fontFamily: "'Rubik', sans-serif",
//               }}
//             >
//               Get Started Free
//               <ArrowRight size={15} />
//             </Link>

//             {/* Secondary — Watch Demo */}
//             <button className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 text-white px-5 py-3 rounded-full text-[0.875rem] font-semibold transition-all duration-200 hover:bg-white/10 cursor-pointer">
//               <span className="w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
//                 <Play size={9} className="text-white fill-white ml-0.5" />
//               </span>
//               Watch Demo
//             </button>
//           </motion.div>

//           {/* Stats grid */}
//           <motion.div
//             custom={4}
//             initial="hidden"
//             animate="visible"
//             variants={fadeUp}
//             className="grid grid-cols-4 max-w-[520px] rounded-2xl overflow-hidden border border-white/10"
//             style={{
//               background: "rgba(4,6,15,0.6)",
//               backdropFilter: "blur(10px)",
//             }}
//           >
//             {STATS.map((s, i) => (
//               <div
//                 key={s.label}
//                 className={`px-4 py-[1.1rem] text-center bg-[rgba(10,14,31,0.7)] ${
//                   i < STATS.length - 1 ? "border-r border-white/10" : ""
//                 }`}
//               >
//                 <span
//                   className="block text-[1.6rem] font-black text-[#f97316] tracking-[-0.02em] leading-none mb-[2px]"
//                   style={{ fontFamily: "'Rubik', sans-serif" }}
//                 >
//                   {s.val}
//                 </span>
//                 <span className="text-[0.7rem] text-[#9ca3af] leading-[1.3]">
//                   {s.label}
//                 </span>
//               </div>
//             ))}
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }







"use client";

// import Link from "next/link";
import { motion } from "framer-motion";
import { BtnPrimary, BtnSecondary } from "@/components/ui/UI";
import { useRouter } from "next/navigation";

const STATS = [
  { val: "1500+", label: "Life Skill Activities" },
  { val: "1000+", label: "Audio Stories"         },
  { val: "20+",   label: "Family Milestones"      },
  { val: "10min", label: "Daily Engagement"       },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Hero() {
  const router = useRouter()
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-[6%] pt-[120px] pb-[80px] overflow-hidden"
    >
      {/* .hero-bg-img */}
      <div
        className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url('/images/hero_bg.png')` }}
      >
        {/* gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(4,6,15,0.93) 40%, rgba(4,6,15,0.35) 80%, transparent 100%)",
          }}
        />
      </div>

      {/* .hero-inner */}
      <div className="relative z-10 max-w-[1160px] mx-auto w-full">

        {/* .hero-content.reveal */}
        <div className="max-w-[580px]">

          {/* .hero-eyebrow */}
          <motion.div
            custom={0} initial="hidden" animate="visible" variants={fadeUp}
            className="flex items-center gap-2 mb-5"
          >
            <span className="w-6 h-[1px] bg-[#f97316] flex-shrink-0" />
            <span
              className="text-[0.78rem] tracking-[0.14em] uppercase font-bold text-[#f97316]"
              style={{ fontFamily: "'Rubik', sans-serif" }}
            >
              Family Growth Platform
            </span>
          </motion.div>

          {/* h1 — Ordinary Moments. Extraordinary Family. */}
          <motion.h1
            custom={1} initial="hidden" animate="visible" variants={fadeUp}
            className="text-white font-black leading-[1.05] tracking-[-0.03em] mb-4"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 3.8rem)", fontFamily: "'Rubik', sans-serif" }}
          >
            Ordinary Moments.
            <br />
            <em className="text-[#f97316] not-italic">Extraordinary</em>
            <br />
            Family.
          </motion.h1>

          {/* .hero-sub */}
          <motion.p
            custom={2} initial="hidden" animate="visible" variants={fadeUp}
            className="text-[#9ca3af] text-[1.1rem] max-w-[460px] mb-8 font-light leading-[1.8]"
          >
            No prep. No screen. Just meaningful conversations and real family time. Spend just 10 mins a day with simple, age appropriate activities designed to build your child&apos;s{" "}
            <strong className="text-white font-medium">
              emotional strength, resilience, and thinking skills,
            </strong>{" "}
            while helping you understand your child better.
          </motion.p>

          {/* .hero-ctas */}
          <motion.div
            custom={3} initial="hidden" animate="visible" variants={fadeUp}
            className="flex gap-4 flex-wrap mb-12"
          >
            <BtnPrimary onClick={()=>router.push("/download-app")}>Get the App</BtnPrimary>
            <BtnSecondary href="#journey">See How It Works →</BtnSecondary>
          </motion.div>

          {/* .hero-stats */}
          <motion.div
            custom={4} initial="hidden" animate="visible" variants={fadeUp}
            className="grid grid-cols-2 sm:grid-cols-4 max-w-[520px] rounded-2xl overflow-hidden border border-white/10"
            style={{ background: "rgba(4,6,15,0.6)", backdropFilter: "blur(10px)" }}
          >
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`px-4 py-[1.1rem] text-center bg-[rgba(10,14,31,0.7)] ${
                  i < STATS.length - 1 ? "border-r border-white/10" : ""
                }`}
              >
                {/* .hero-stat-val */}
                <span
                  className="block text-[1.6rem] font-black text-[#f97316] tracking-[-0.02em] leading-none mb-[2px]"
                  style={{ fontFamily: "'Rubik', sans-serif" }}
                >
                  {s.val}
                </span>
                {/* .hero-stat-label */}
                <span className="text-[0.7rem] text-[#9ca3af] leading-[1.3]">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

