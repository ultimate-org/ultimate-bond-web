// // // // // // // --------------------------------------------------------

// // // // // // "use client"
// // // // // // import React from 'react'
// // // // // // import { philosopher } from '@/fonts/fonts'
// // // // // // import { motion } from "framer-motion"
// // // // // // import { DeliciousHandrawn , montserratRegular, montserratBold} from "@/fonts/fonts"
// // // // // // import styles from "./Main.module.css"
// // // // // // import Image from 'next/image'


// // // // // // const transition = {
// // // // // //     duration: 0.8,
// // // // // //     delay: 0.5,
// // // // // //     ease: [0, 0.71, 0.2, 1.01],
// // // // // //   }

// // // // // // function Main() {
// // // // // //   const pointsArr = [
// // // // // //     { normal: "Emotional regulation", bold: "in tough situations?" },
// // // // // //     { normal: "Conflict resolution & decision making", bold: "in relationships?" },
// // // // // //     { normal: "Financial literacy to make", bold: "smart life decisions?" },
// // // // // //     { normal: "Networking & leadership to", bold: "unlock new opportunities?" },
// // // // // //     { normal: "Resilience to", bold: "handle setbacks?" }
// // // // // // ];
// // // // // //   return (
// // // // // //     <div className='justify-center items-center bg-[url(/images/landing-image.png)] bg-bottom bg-cover bg-no-repeat'>
// // // // // //           <div className='pt-[8rem]  '>
// // // // // //         {/* <div className='pt-[8rem] pb-[7rem] '> */}
// // // // // //         <div className=' pt-[7rem] pb-[10rem] relative  '>
// // // // // //         <h1 className={`text-center text-8xl ${philosopher.className} ${styles.title}`}>The Future Starts Now!</h1>
// // // // // //           <div className='flex flex-row mt-8 w-[90%] mx-auto'>
// // // // // //           <div className='relative mx-auto'>
// // // // // //           <h2 className={`text-center text-4xl ${philosopher.className} text-transparent bg-clip-text bg-[#06A5D8] `}>Prepare Your Child for the <div className='w-auto inline-block'><h2 className={`text-center text-4xl ${philosopher.className} text-transparent bg-clip-text bg-[#06A5D8]`}>Unknown</h2><div className='w-full h-3  relative'>
// // // // // //             <Image src="/images/stroke.png" alt="stroke" fill objectFit='cover'></Image>
// // // // // //             </div></div></h2>
// // // // // //             </div>
// // // // // //             </div>
// // // // // //         </div>
// // // // // //           <div className='justify-center bg-[#020e25] py-[6rem]'>
// // // // // //               <div>
// // // // // //             <p className={`text-center text-2xl text-white ${montserratRegular.className} ${styles.mainTextColor}`}>Traditional education prepares children for <span className={`underline underline-offset-2 ${styles.mainTextColor}`}>Tests, Grades, Degrees</span></p>
// // // // // //             <p className={`text-center mt-[3rem] text-5xl text-white  ${montserratBold.className} ${styles.mainTextColor}`}>But does it prepare them for...</p>
// // // // // //               </div>
// // // // // //           <div className='my-[4rem] flex flex-col md:flex-row justify-center bg-[#020e25] items-center px-8'>
// // // // // //               {
// // // // // //                   pointsArr.map((point,index) => {
// // // // // //                       return <motion.div key={index} className={`border border-1 mb-2 w-[80%] md:w-[18%] h-[8rem] mx-1 rounded-md flex items-center justify-center bg-[#CCDBEE] p-4`} initial={{scale:0, opacity:0}} whileInView={{scale:1, opacity:1}} viewport={{amount:1, once:true}} transition={{
// // // // // //                         ...transition,
// // // // // //                         delay:  index == 0 ?  0 : transition.delay + index * 0.5 , // Add delay based on index
// // // // // //                       }} >
// // // // // //                         <p className={`text-lg my-1 text-[#020e25] ${montserratBold.className} text-center`}>
// // // // // //                 {point.normal} <strong>{point.bold}</strong>
// // // // // //             </p>
// // // // // //                       </motion.div>
// // // // // //                   })
// // // // // //                   }
// // // // // //                   </div>
// // // // // //        <div className='mt-6 bg-[#020e25]'>
// // // // // //                     <p className={`text-center text-white text-xl md:text-4xl ${DeliciousHandrawn.className} ${styles.mainTextColor}`}>So, are we raising <span className={`${DeliciousHandrawn.className} text-4xl`}>happy, resilient, and emotionally</span> strong children?</p>
// // // // // //         </div>
// // // // // //           </div>

// // // // // //         </div>
// // // // // //     </div>
// // // // // //   )
// // // // // // }

// // // // // // export default Main





// // // // // "use client";

// // // // // import Link from "next/link";
// // // // // import { motion } from "framer-motion";
// // // // // import { ArrowRight, Play } from "lucide-react";

// // // // // const STATS = [
// // // // //   { val: "12K+", label: "Active Users" },
// // // // //   { val: "99.9%", label: "Uptime" },
// // // // //   { val: "4.9★", label: "Avg Rating" },
// // // // //   { val: "150+", label: "Countries" },
// // // // // ];

// // // // // const fadeUp = {
// // // // //   hidden: { opacity: 0, y: 28 },
// // // // //   visible: (i) => ({
// // // // //     opacity: 1,
// // // // //     y: 0,
// // // // //     transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
// // // // //   }),
// // // // // };

// // // // // export default function Hero() {
// // // // //   return (
// // // // //     <section
// // // // //       id="hero"
// // // // //       className="relative min-h-screen flex items-center px-[6%] pt-[120px] pb-[80px] overflow-hidden"
// // // // //     >
// // // // //       {/* ── Background Image with Gradient Overlay ── */}
// // // // //       <div
// // // // //         className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat"
// // // // //         style={{
// // // // //           backgroundImage: `url('https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=1920&q=80')`,
// // // // //         }}
// // // // //       >
// // // // //         {/* Left-heavy gradient: same logic as original CSS */}
// // // // //         <div
// // // // //           className="absolute inset-0"
// // // // //           style={{
// // // // //             background:
// // // // //               "linear-gradient(90deg, rgba(4,6,15,0.93) 40%, rgba(4,6,15,0.35) 80%, transparent 100%)",
// // // // //           }}
// // // // //         />
// // // // //       </div>

// // // // //       {/* ── Content wrapper ── */}
// // // // //       <div className="relative z-10 max-w-[1160px] mx-auto w-full">
// // // // //         <div className="max-w-[580px]">

// // // // //           {/* Eyebrow label */}
// // // // //           <motion.div
// // // // //             custom={0}
// // // // //             initial="hidden"
// // // // //             animate="visible"
// // // // //             variants={fadeUp}
// // // // //             className="flex items-center gap-2 mb-5"
// // // // //           >
// // // // //             <span className="w-6 h-[1px] bg-[#f97316] flex-shrink-0" />
// // // // //             <span
// // // // //               className="text-[0.78rem] tracking-[0.14em] uppercase font-bold text-[#f97316]"
// // // // //               style={{ fontFamily: "'Rubik', sans-serif" }}
// // // // //             >
// // // // //               Family Growth Platform

// // // // //             </span>
// // // // //           </motion.div>

// // // // //           {/* H1 */}
// // // // //           <motion.h1
// // // // //             custom={1}
// // // // //             initial="hidden"
// // // // //             animate="visible"
// // // // //             variants={fadeUp}
// // // // //             className="text-white font-black leading-[1.05] tracking-[-0.03em] mb-4"
// // // // //             style={{
// // // // //               fontSize: "clamp(2.6rem, 5.5vw, 4.2rem)",
// // // // //               fontFamily: "'Rubik', sans-serif",
// // // // //             }}
// // // // //           >
// // // // //             Ordinary Moments.

// // // // //             <br />
// // // // //             <em className="text-[#f97316] not-italic">Extraordinary</em>
// // // // //             <br />
// // // // //             Family.
// // // // //           </motion.h1>

// // // // //           {/* Subtext */}
// // // // //           <motion.p
// // // // //             custom={2}
// // // // //             initial="hidden"
// // // // //             animate="visible"
// // // // //             variants={fadeUp}
// // // // //             className="text-[#9ca3af] text-[1.05rem] max-w-[460px] mb-8 font-light leading-[1.8]"
// // // // //           >
// // // // //             The platform built for teams that{" "}
// // // // //             <strong className="text-white font-medium">move fast</strong> and
// // // // //             break records. From launch to scale —{" "}
// // // // //             <strong className="text-white font-medium">one place</strong>.
// // // // //           </motion.p>

// // // // //           {/* CTA buttons */}
// // // // //           <motion.div
// // // // //             custom={3}
// // // // //             initial="hidden"
// // // // //             animate="visible"
// // // // //             variants={fadeUp}
// // // // //             className="flex gap-4 flex-wrap mb-12"
// // // // //           >
// // // // //             {/* Primary */}
// // // // //             <Link
// // // // //               href="#get-started"
// // // // //               className="inline-flex items-center gap-2 bg-[#f97316] text-white px-6 py-3 rounded-full text-[0.875rem] font-bold no-underline transition-all duration-200 hover:bg-[#ea6a0a] hover:-translate-y-[2px]"
// // // // //               style={{
// // // // //                 boxShadow: "0 0 28px rgba(249,115,22,0.45)",
// // // // //                 fontFamily: "'Rubik', sans-serif",
// // // // //               }}
// // // // //             >
// // // // //               Get Started Free
// // // // //               <ArrowRight size={15} />
// // // // //             </Link>

// // // // //             {/* Secondary — Watch Demo */}
// // // // //             <button className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 text-white px-5 py-3 rounded-full text-[0.875rem] font-semibold transition-all duration-200 hover:bg-white/10 cursor-pointer">
// // // // //               <span className="w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
// // // // //                 <Play size={9} className="text-white fill-white ml-0.5" />
// // // // //               </span>
// // // // //               Watch Demo
// // // // //             </button>
// // // // //           </motion.div>

// // // // //           {/* Stats grid */}
// // // // //           <motion.div
// // // // //             custom={4}
// // // // //             initial="hidden"
// // // // //             animate="visible"
// // // // //             variants={fadeUp}
// // // // //             className="grid grid-cols-4 max-w-[520px] rounded-2xl overflow-hidden border border-white/10"
// // // // //             style={{
// // // // //               background: "rgba(4,6,15,0.6)",
// // // // //               backdropFilter: "blur(10px)",
// // // // //             }}
// // // // //           >
// // // // //             {STATS.map((s, i) => (
// // // // //               <div
// // // // //                 key={s.label}
// // // // //                 className={`px-4 py-[1.1rem] text-center bg-[rgba(10,14,31,0.7)] ${
// // // // //                   i < STATS.length - 1 ? "border-r border-white/10" : ""
// // // // //                 }`}
// // // // //               >
// // // // //                 <span
// // // // //                   className="block text-[1.6rem] font-black text-[#f97316] tracking-[-0.02em] leading-none mb-[2px]"
// // // // //                   style={{ fontFamily: "'Rubik', sans-serif" }}
// // // // //                 >
// // // // //                   {s.val}
// // // // //                 </span>
// // // // //                 <span className="text-[0.7rem] text-[#9ca3af] leading-[1.3]">
// // // // //                   {s.label}
// // // // //                 </span>
// // // // //               </div>
// // // // //             ))}
// // // // //           </motion.div>

// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // }







// // // // "use client";

// // // // // import Link from "next/link";
// // // // import { motion } from "framer-motion";
// // // // import { BtnPrimary, BtnSecondary } from "@/components/ui/UI";
// // // // import { useRouter } from "next/navigation";
// // // // import Image from "next/image";

// // // // const STATS = [
// // // //   { val: "1500+", label: "Life Skill Activities" },
// // // //   { val: "1000+", label: "Audio Stories" },
// // // //   { val: "20+", label: "Family Milestones" },
// // // //   { val: "10mins", label: "Daily Engagement" },
// // // // ];

// // // // const fadeUp = {
// // // //   hidden: { opacity: 0, y: 28 },
// // // //   visible: (i) => ({
// // // //     opacity: 1, y: 0,
// // // //     transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
// // // //   }),
// // // // };

// // // // export default function Hero() {
// // // //   const router = useRouter()
// // // //   return (
// // // //     <section
// // // //       id="hero"
// // // //       className="relative min-h-screen flex items-center px-[6%] pt-[120px] pb-[80px] overflow-hidden"
// // // //     >
// // // //       {/* .hero-bg-img */}
// // // //       <div
// // // //         className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat"
// // // //         style={{ backgroundImage: `url('/images/hero_bg1.jpeg')` }}
// // // //       >
// // // //         {/* gradient overlay */}
// // // //         <div
// // // //           className="absolute inset-0"
// // // //           style={{
// // // //             background:
// // // //               "linear-gradient(90deg, rgba(4,6,15,0.93) 40%, rgba(4,6,15,0.35) 80%, transparent 100%)",
// // // //           }}
// // // //         />
// // // //       </div>

// // // //       {/* .hero-inner */}
// // // //       <div className="relative z-10 max-w-[1160px] ml-12 mr-auto w-full flex flex-col md:flex-row items-center justify-between gap-10">

// // // //         {/* .hero-content.reveal */}
// // // //         <div className="max-w-[580px] w-full">

// // // //           {/* .hero-eyebrow */}
// // // //           <motion.div
// // // //             custom={0} initial="hidden" animate="visible" variants={fadeUp}
// // // //             className="flex items-center gap-2 mb-5"
// // // //           >
// // // //             {/* <span className="w-6 h-[1px] bg-[#f97316] flex-shrink-0" /> */}
// // // //             <span
// // // //               className="text-[0.78rem] tracking-[0.14em] uppercase font-bold text-[#f97316]"
// // // //               style={{ fontFamily: "'Rubik', sans-serif" }}
// // // //             >
// // // //               Family Growth Platform
// // // //             </span>
// // // //           </motion.div>

// // // //           {/* h1 — Ordinary Moments. Extraordinary Family. */}
// // // //           <motion.h1
// // // //             custom={1} initial="hidden" animate="visible" variants={fadeUp}
// // // //             className="text-white font-black leading-[1.05] tracking-[-0.03em] mb-4"
// // // //             style={{ fontSize: "clamp(2.2rem, 5.5vw, 3.8rem)", fontFamily: "'Rubik', sans-serif" }}
// // // //           >
// // // //             Ordinary Moments.
// // // //             <br />
// // // //             <em className="text-[#f97316] not-italic">Extraordinary</em>
// // // //             <br />
// // // //             Family.
// // // //           </motion.h1>

// // // //           {/* .hero-sub */}
// // // //           <motion.p
// // // //             custom={2} initial="hidden" animate="visible" variants={fadeUp}
// // // //             className="text-[#9ca3af] text-[1.1rem] max-w-[460px] mb-8 font-light leading-[1.8]"
// // // //           >
// // // //             No prep. No screen. Just meaningful conversations and real family time. Spend just 10 mins a day with simple, age appropriate activities designed to build your child&apos;s{" "}
// // // //             <strong className="text-white font-medium">
// // // //               emotional strength, resilience, and thinking skills,
// // // //             </strong>{" "}
// // // //             while bridging the gap between Knowing and Doing.
// // // //           </motion.p>

// // // //           {/* .hero-ctas */}
// // // //           <motion.div
// // // //             custom={3} initial="hidden" animate="visible" variants={fadeUp}
// // // //             className="flex gap-4 flex-wrap mb-12"
// // // //           >
// // // //             <BtnPrimary onClick={() => router.push("/download-app")}>Get the App</BtnPrimary>
// // // //             <BtnSecondary href="#journey">See How It Works →</BtnSecondary>
// // // //           </motion.div>

// // // //           {/* .hero-stats */}
// // // //           <motion.div
// // // //             custom={4} initial="hidden" animate="visible" variants={fadeUp}
// // // //             className="grid grid-cols-2 sm:grid-cols-4 max-w-[520px] rounded-2xl overflow-hidden border border-white/10"
// // // //             style={{ background: "rgba(4,6,15,0.6)", backdropFilter: "blur(10px)" }}
// // // //           >
// // // //             {STATS.map((s, i) => (
// // // //               <div
// // // //                 key={s.label}
// // // //                 className={`px-4 py-[1.1rem] text-center bg-[rgba(10,14,31,0.7)] ${i < STATS.length - 1 ? "border-r border-white/10" : ""
// // // //                   }`}
// // // //               >
// // // //                 {/* .hero-stat-val */}
// // // //                 <span
// // // //                   className="block text-[1.6rem] font-black text-[#f97316] tracking-[-0.02em] leading-none mb-[2px]"
// // // //                   style={{ fontFamily: "'Rubik', sans-serif" }}
// // // //                 >
// // // //                   {s.val}
// // // //                 </span>
// // // //                 {/* .hero-stat-label */}
// // // //                 <span className="text-[0.7rem] text-[#9ca3af] leading-[1.3]">
// // // //                   {s.label}
// // // //                 </span>
// // // //               </div>
// // // //             ))}
// // // //           </motion.div>

// // // //         </div>

// // // //         {/* Hero Right Image */}
// // // //         <motion.div
// // // //           custom={5} initial="hidden" animate="visible" variants={fadeUp}
// // // //           className="hidden md:block relative w-full min-w-[500px] lg:min-w-[650px] max-w-[800px] -mt-24 -mr-20"
// // // //         >
// // // //           <motion.div
// // // //             animate={{ y: [0, -15, 0] }}
// // // //             transition={{
// // // //               duration: 3,
// // // //               repeat: Infinity,
// // // //               ease: "easeInOut"
// // // //             }}
// // // //           >
// // // //             <img
// // // //               src="/images/3_mascots_on_rocket.png"
// // // //               alt="Mascots on Rocket"
// // // //               className="w-full max-w-2xl h-auto object-contain mx-auto"
// // // //             />
// // // //           </motion.div>
// // // //         </motion.div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }

// // // "use client";

// // // import { motion } from "framer-motion";
// // // import { BtnPrimary, BtnSecondary } from "@/components/ui/UI";
// // // import { useRouter } from "next/navigation";

// // // const GLASS_SHADOW =
// // //   "0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -1px 0 rgba(255,255,255,0.1)";
// // // const EDGE_TOP =
// // //   "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)";
// // // const EDGE_LEFT =
// // //   "linear-gradient(180deg, rgba(255,255,255,0.8), transparent, rgba(255,255,255,0.3))";
// // // const HEADLINE_GRADIENT =
// // //   "linear-gradient(103.7deg, #ffb13d 0%, #ff7a18 26%, #ff4d8d 64%, #a24bff 100%)";

// // // const STATS = [
// // //   {
// // //     label: "More real family time each week",
// // //     variant: "green",
// // //     badge: "★",
// // //     num: <>+5hrs</>,
// // //     badgeBg:
// // //       "linear-gradient(150deg, rgba(79,227,154,0.6), rgba(31,168,94,0.6))",
// // //     numColor: "#34d67e",
// // //   },
// // //   {
// // //     label: "Less daily screen time",
// // //     variant: "orange",
// // //     badge: "◷",
// // //     num: <>−40%</>,
// // //     badgeBg:
// // //       "linear-gradient(150deg, rgba(255,174,87,0.64), rgba(251,110,17,0.64))",
// // //     numColor: "#ff7a18",
// // //   },
// // //   {
// // //     label: "Families feel closer",
// // //     variant: "violet",
// // //     badge: "♥",
// // //     num: (
// // //       <>
// // //         9 <span className="font-normal text-[#8b8a98]">in</span> 10
// // //       </>
// // //     ),
// // //     badgeBg:
// // //       "linear-gradient(150deg, rgba(197,139,255,0.6), rgba(162,75,255,0.6))",
// // //     numColor: "#a24bff",
// // //   },
// // //   {
// // //     label: "More open conversations",
// // //     variant: "blue",
// // //     badge: "💬",
// // //     num: <>3X</>,
// // //     badgeBg:
// // //       "linear-gradient(150deg, rgba(124,192,255,0.61), rgba(46,143,232,0.61))",
// // //     numColor: "#4ba8ff",
// // //   },
// // // ];

// // // const TESTIMONIALS = [
// // //   {
// // //     initial: "P",
// // //     avaBg: "linear-gradient(150deg, #ff9a6e 0%, #e8633b 100%)",
// // //     quote: "We've seen such an increase in family interaction.",
// // //     author: "— Gaurav, Father of 2",
// // //     icon: "♥",
// // //     iconBg: "linear-gradient(150deg, #ff6fa0 0%, #ff3d7f 100%)",
// // //     posClass: "top-[34px] left-[11px] sm:top-[67px] sm:left-[13px] lg:top-[90px] lg:left-[34px] [animation-delay:0s]",
// // //   },
// // //   {
// // //     initial: "N",
// // //     avaBg: "linear-gradient(150deg, #c58bff 0%, #a24bff 100%)",
// // //     quote: "My son opens up so much more now.",
// // //     author: "— Neha, Mom of 1",
// // //     icon: "💬",
// // //     iconBg: "linear-gradient(180deg, #ff9a40 0%, #ff7a18 52%, #f2670a 100%)",
// // //     posClass: "top-[246px] right-[11px] sm:right-[13px] lg:top-[224px] lg:right-0 [animation-delay:2s]",
// // //   },
// // // ];

// // // const fadeUp = {
// // //   hidden: { opacity: 0, y: 28 },
// // //   visible: (i) => ({
// // //     opacity: 1,
// // //     y: 0,
// // //     transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
// // //   }),
// // // };

// // // const GlassEdges = () => (
// // //   <>
// // //     <span
// // //       className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-px"
// // //       style={{ background: EDGE_TOP }}
// // //     />
// // //     <span
// // //       className="pointer-events-none absolute left-0 top-0 z-[2] h-full w-px"
// // //       style={{ background: EDGE_LEFT }}
// // //     />
// // //   </>
// // // );

// // // export default function Hero() {
// // //   const router = useRouter();

// // //   return (
// // //     <section
// // //       id="hero"
// // //       className="relative min-h-screen overflow-hidden font-['Poppins',sans-serif] antialiased"
// // //       style={{
// // //         background:
// // //           "radial-gradient(ellipse 120% 90% at 50% 8%, #11182E 0%, #0A0E1C 38%, #060709 78%, #050507 100%)",
// // //       }}
// // //     >
// // //       <style>{`
// // //         @keyframes heroFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
// // //         @media (prefers-reduced-motion: reduce){
// // //           #hero *, #hero *::before, #hero *::after { animation-duration:.001ms!important; transition-duration:.001ms!important; }
// // //         }
// // //       `}</style>

// // //       {/* Orbits */}
// // //       <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
// // //         <div
// // //           className="absolute left-1/2 top-[60%] h-[453px] w-[1288px] rounded-full border border-white/[0.06]"
// // //           style={{ transform: "translate(-50%,-50%) rotate(14.54deg)" }}
// // //         />
// // //         <div
// // //           className="absolute left-1/2 top-[60%] h-[680px] w-[1930px] rounded-full border border-white/[0.07]"
// // //           style={{ transform: "translate(-50%,-50%) rotate(14.54deg)" }}
// // //         />
// // //         <div
// // //           className="absolute left-1/2 top-[60%] h-[855px] w-[2442px] rounded-full border border-white/[0.05]"
// // //           style={{ transform: "translate(-50%,-50%) rotate(14.54deg)" }}
// // //         />
// // //       </div>

// // //       <div className="relative mx-auto grid max-w-[1664px] grid-cols-1 items-start gap-10 px-[6%] pb-[62px] pt-[90px] sm:gap-[45px] sm:px-[54px] sm:pb-[72px] sm:pt-[110px] lg:grid-cols-2 lg:gap-[67px] lg:px-[143px] lg:pt-[120px] lg:pb-[90px]">
// // //         {/* Glow blobs */}
// // //         <div
// // //           className="pointer-events-none absolute -left-20 -top-[120px] z-0 h-[360px] w-[360px] rounded-full opacity-85 blur-[130px] sm:h-[620px] sm:w-[620px]"
// // //           style={{
// // //             background:
// // //               "radial-gradient(circle, rgba(104,100,247,0.55) 0%, rgba(104,100,247,0) 70%)",
// // //           }}
// // //         />
// // //         <div
// // //           className="pointer-events-none absolute -right-[100px] top-[35%] z-0 h-[320px] w-[320px] rounded-full opacity-85 blur-[130px] sm:h-[540px] sm:w-[540px]"
// // //           style={{
// // //             background:
// // //               "radial-gradient(circle, rgba(75,80,220,0.45) 0%, rgba(75,80,220,0) 70%)",
// // //           }}
// // //         />
// // //         <div
// // //           className="pointer-events-none absolute -bottom-[120px] left-[30%] z-0 h-[300px] w-[300px] rounded-full opacity-85 blur-[130px] sm:h-[500px] sm:w-[500px]"
// // //           style={{
// // //             background:
// // //               "radial-gradient(circle, rgba(46,36,140,0.55) 0%, rgba(46,36,140,0) 70%)",
// // //           }}
// // //         />
// // //         <div
// // //           className="pointer-events-none absolute right-1/4 top-[5%] z-0 hidden h-[420px] w-[420px] rounded-full opacity-85 blur-[130px] sm:block"
// // //           style={{
// // //             background:
// // //               "radial-gradient(circle, rgba(162,75,255,0.32) 0%, rgba(162,75,255,0) 70%)",
// // //           }}
// // //         />

// // //         {/* LEFT */}
// // //         <div className="relative">
// // //           {/* Pill */}
// // //           <motion.div
// // //             custom={0}
// // //             initial="hidden"
// // //             animate="visible"
// // //             variants={fadeUp}
// // //             className="relative z-[2] mb-[27px] inline-flex h-10 items-center gap-[11px] rounded-full border border-[rgba(255,154,64,0.55)] bg-white/[0.07] px-5 backdrop-blur-[23px] transition-colors duration-700 hover:border-[rgba(255,154,64,0.7)]"
// // //             style={{ boxShadow: GLASS_SHADOW }}
// // //           >
// // //             <span className="h-2.5 w-2.5 rounded-full bg-[#ff9a40]" />
// // //             <span className="font-['Rubik','Outfit',sans-serif] text-[14px] font-semibold uppercase tracking-[2.2px] text-[#ffb36b]">
// // //               Family Growth Platform
// // //             </span>
// // //           </motion.div>

// // //           {/* Headline */}
// // //           <motion.h1
// // //             custom={1}
// // //             initial="hidden"
// // //             animate="visible"
// // //             variants={fadeUp}
// // //             className="relative z-[2] mb-[31px] font-['Rubik','Outfit',sans-serif] text-[32px] font-extrabold leading-[1.05] tracking-[-0.8px] text-[#c3c2ce] sm:text-[40px] md:text-[47px] lg:text-[64px] lg:tracking-[-1.6px]"
// // //           >
// // //             <span className="text-white">Ordinary Moments.</span>
// // //             <br />
// // //             <span
// // //               className="bg-clip-text text-transparent"
// // //               style={{ backgroundImage: HEADLINE_GRADIENT }}
// // //             >
// // //               Extraordinary
// // //             </span>{" "}
// // //             <span className="text-white">Family.</span>
// // //           </motion.h1>

// // //           {/* Lead */}
// // //           <motion.p
// // //             custom={2}
// // //             initial="hidden"
// // //             animate="visible"
// // //             variants={fadeUp}
// // //             className="relative z-[2] mb-[45px] max-w-[784px] text-[18px] font-normal leading-[1.6] text-[#8b8a98] sm:text-[21px] lg:text-[25px]"
// // //           >
// // //             No prep. No screen. Just meaningful conversations and real family
// // //             time. Spend just 10 mins a day with simple, age appropriate
// // //             activities designed to build your child&apos;s{" "}
// // //             <span className="text-[#c3c2ce]">
// // //               emotional strength, resilience, and thinking skills,
// // //             </span>{" "}
// // //             while bridging the gap between Knowing and Doing.
// // //           </motion.p>

// // //           {/* CTAs — preserved routes/functionality */}
// // //           <motion.div
// // //             custom={3}
// // //             initial="hidden"
// // //             animate="visible"
// // //             variants={fadeUp}
// // //             className="relative z-[2] mb-[54px] flex flex-wrap items-center gap-[13px] sm:gap-[27px] lg:mb-[72px]"
// // //           >
// // //             <BtnPrimary onClick={() => router.push("/download-app")}>
// // //               Get the App
// // //             </BtnPrimary>
// // //             <BtnSecondary href="#journey">See How It Works →</BtnSecondary>
// // //           </motion.div>

// // //           {/* Stat cards */}
// // //           <motion.div
// // //             custom={4}
// // //             initial="hidden"
// // //             animate="visible"
// // //             variants={fadeUp}
// // //             className="relative z-[1] grid max-w-[803px] grid-cols-2 gap-4 sm:gap-[19px] lg:max-w-[803px] lg:grid-cols-4"
// // //           >
// // //             {STATS.map((s) => (
// // //               <div
// // //                 key={s.label}
// // //                 className="group relative z-[1] h-[188px] overflow-hidden rounded-[20px] border border-white/30 bg-white/[0.07] p-5 backdrop-blur-[23px] transition-[transform,border-color] duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-white/[0.36] sm:p-[24px_21px] lg:h-[204px]"
// // //                 style={{ boxShadow: GLASS_SHADOW }}
// // //               >
// // //                 <GlassEdges />
// // //                 <div
// // //                   className="mb-[27px] inline-flex h-[45px] w-[45px] items-center justify-center rounded-[26px] text-[20px] text-white transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025] sm:mb-[43px] sm:h-[52px] sm:w-[52px] sm:text-[22px]"
// // //                   style={{ background: s.badgeBg }}
// // //                 >
// // //                   {s.badge}
// // //                 </div>
// // //                 <div
// // //                   className="mb-[9px] text-[27px] font-semibold leading-none"
// // //                   style={{ color: s.numColor }}
// // //                 >
// // //                   {s.num}
// // //                 </div>
// // //                 <div className="text-[15.5px] font-normal leading-[1.35] text-[#c3c2ce]">
// // //                   {s.label}
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </motion.div>
// // //         </div>

// // //         {/* RIGHT — mascot + floating testimonials */}
// // //         <motion.div
// // //           custom={5}
// // //           initial="hidden"
// // //           animate="visible"
// // //           variants={fadeUp}
// // //           className="relative min-h-[514px] sm:min-h-[582px] lg:min-h-[717px]"
// // //         >
// // //           <div
// // //             className="absolute inset-[11px] z-[1] flex items-center justify-center overflow-hidden rounded-[31px] border border-white/30 bg-white/[0.07] backdrop-blur-[23px] sm:inset-[22px] lg:inset-[34px_34px_67px_34px] lg:rounded-[20px]"
// // //             style={{ boxShadow: GLASS_SHADOW }}
// // //           >
// // //             <GlassEdges />
// // //             <motion.div
// // //               animate={{ y: [0, -15, 0] }}
// // //               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
// // //               className="flex h-full w-full items-center justify-center p-6"
// // //             >
// // //               <img
// // //                 src="/images/3_mascots_on_rocket.png"
// // //                 alt="Mascots on Rocket"
// // //                 className="h-full w-full object-contain"
// // //               />
// // //             </motion.div>
// // //           </div>

// // //           {TESTIMONIALS.map((t) => (
// // //             <div
// // //               key={t.initial}
// // //               className={`group absolute z-[2] w-[84%] rounded-[20px] border border-white/30 bg-white/[0.07] p-[20px_20px_25px_20px] backdrop-blur-[23px] transition-[transform,border-color] duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] [animation:heroFloat_7s_ease-in-out_infinite] hover:-translate-y-0.5 hover:border-white/[0.36] hover:[animation-play-state:paused] sm:w-[358px] ${t.posClass}`}
// // //               style={{ boxShadow: GLASS_SHADOW }}
// // //             >
// // //               <GlassEdges />
// // //               <span
// // //                 className="absolute left-5 top-[18px] inline-flex h-[41px] w-[41px] items-center justify-center rounded-[21px] font-['Outfit',sans-serif] text-[17px] font-bold text-white"
// // //                 style={{ background: t.avaBg }}
// // //               >
// // //                 {t.initial}
// // //               </span>
// // //               <div className="ml-[55px] mt-[9px] text-[16px] leading-none tracking-[1.5px] text-[#ffb36b]">
// // //                 ★★★★★
// // //               </div>
// // //               <p className="mt-5 text-[17px] font-medium leading-[1.4] text-white">
// // //                 &ldquo;{t.quote}&rdquo;
// // //               </p>
// // //               <p className="mt-[11px] text-[15px] font-normal text-[#8b8a98]">
// // //                 {t.author}
// // //               </p>
// // //               <span
// // //                 className="absolute -right-[14px] -top-4 inline-flex h-[39px] w-[39px] items-center justify-center rounded-[20px] text-[18px] text-white transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
// // //                 style={{ background: t.iconBg }}
// // //               >
// // //                 {t.icon}
// // //               </span>
// // //             </div>
// // //           ))}
// // //         </motion.div>
// // //       </div>
// // //     </section>
// // //   );
// // // }


// // "use client";

// // import { motion } from "framer-motion";
// // import { BtnPrimary, BtnSecondary } from "@/components/ui/UI";
// // import { useRouter } from "next/navigation";

// // const GLASS_SHADOW =
// //   "0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -1px 0 rgba(255,255,255,0.1)";
// // const EDGE_TOP =
// //   "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)";
// // const EDGE_LEFT =
// //   "linear-gradient(180deg, rgba(255,255,255,0.8), transparent, rgba(255,255,255,0.3))";
// // const HEADLINE_GRADIENT =
// //   "linear-gradient(103.7deg, #ffb13d 0%, #ff7a18 26%, #ff4d8d 64%, #a24bff 100%)";

// // const STATS = [
// //   {
// //     label: "More real family time each week",
// //     badge: "★",
// //     num: <>+5hrs</>,
// //     badgeBg:
// //       "linear-gradient(150deg, rgba(79,227,154,0.6), rgba(31,168,94,0.6))",
// //     numColor: "#34d67e",
// //     badgeStroke: "rgba(110,240,175,0.55)",
// //     badgeInset: "rgba(180,255,215,0.55)",
// //   },
// //   {
// //     label: "Less daily screen time",
// //     badge: "◷",
// //     num: <>−40%</>,
// //     badgeBg:
// //       "linear-gradient(150deg, rgba(255,174,87,0.64), rgba(251,110,17,0.64))",
// //     numColor: "#ff7a18",
// //     badgeStroke: "rgba(255,190,120,0.55)",
// //     badgeInset: "rgba(255,220,180,0.55)",
// //   },
// //   {
// //     label: "Families feel closer",
// //     badge: "♥",
// //     num: (
// //       <>
// //         9 <span className="font-medium text-[#8b8a98]">in</span> 10
// //       </>
// //     ),
// //     badgeBg:
// //       "linear-gradient(150deg, rgba(197,139,255,0.6), rgba(162,75,255,0.6))",
// //     numColor: "#a24bff",
// //     badgeStroke: "rgba(210,165,255,0.55)",
// //     badgeInset: "rgba(230,205,255,0.55)",
// //   },
// //   {
// //     label: "More open conversations",
// //     badge: "💬",
// //     num: <>3X</>,
// //     badgeBg:
// //       "linear-gradient(150deg, rgba(124,192,255,0.61), rgba(46,143,232,0.61))",
// //     numColor: "#4ba8ff",
// //     badgeStroke: "rgba(140,200,255,0.55)",
// //     badgeInset: "rgba(200,225,255,0.55)",
// //   },
// // ];

// // const TESTIMONIALS = [
// //   {
// //     initial: "P",
// //     avaBg: "linear-gradient(150deg, #ff9a6e 0%, #e8633b 100%)",
// //     quote: "We've seen such an increase in family interaction.",
// //     author: "— Gaurav, Father of 2",
// //     icon: "♥",
// //     iconBg: "linear-gradient(150deg, #ff6fa0 0%, #ff3d7f 100%)",
// //     iconStroke: "rgba(255,140,180,0.6)",
// //     iconInset: "rgba(255,200,220,0.55)",
// //     // float-1: top:-10% left:10% (md) / top:-4% left:6% (≤1024) / top:-2% left:4% (≤720)
// //     posClass:
// //       "top-[-2%] left-[4%] sm:top-[-4%] sm:left-[6%] lg:top-[-10%] lg:left-[10%]",
// //     delay: "0s",
// //     duration: "5s",
// //   },
// //   {
// //     initial: "N",
// //     avaBg: "linear-gradient(150deg, #c58bff 0%, #a24bff 100%)",
// //     quote: "My son opens up so much more now.",
// //     author: "— Neha, Mom of 1",
// //     icon: "💬",
// //     iconBg:
// //       "linear-gradient(180deg, #ff9a40 0%, #ff7a18 52%, #f2670a 100%)",
// //     iconStroke: "rgba(255,190,120,0.6)",
// //     iconInset: "rgba(255,220,180,0.55)",
// //     posClass:
// //       "top-[8%] right-[-4%] sm:right-[-6%] lg:top-[5%] lg:right-[-12%]",
// //     delay: "-2.75s",
// //     duration: "5.5s",
// //   },
// // ];

// // const fadeUp = {
// //   hidden: { opacity: 0, y: 28 },
// //   visible: (i: number) => ({
// //     opacity: 1,
// //     y: 0,
// //     transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
// //   }),
// // };

// // const GlassEdgeTop = () => (
// //   <span
// //     className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-px"
// //     style={{ background: EDGE_TOP }}
// //   />
// // );
// // const GlassEdgeLeft = () => (
// //   <span
// //     className="pointer-events-none absolute left-0 top-0 z-[2] h-full w-px"
// //     style={{ background: EDGE_LEFT }}
// //   />
// // );

// // // Orbit + planets. rx/ry feed the offset-path ellipse.
// // function Orbit({
// //   w,
// //   h,
// //   rx,
// //   ry,
// //   border,
// //   planets,
// // }: {
// //   w: number;
// //   h: number;
// //   rx: number;
// //   ry: number;
// //   border: string;
// //   planets: {
// //     size: string;
// //     bg: string;
// //     glow: string;
// //     duration: string;
// //     delay: string;
// //   }[];
// // }) {
// //   return (
// //     <div
// //       className="absolute left-1/2 top-[55%] rounded-full"
// //       style={{
// //         width: w,
// //         height: h,
// //         border: `1px solid ${border}`,
// //         transform: "translate(-50%,-50%) rotate(14.54deg)",
// //       }}
// //     >
// //       {planets.map((p, i) => (
// //         <span
// //           key={i}
// //           className="absolute left-0 top-0 rounded-full"
// //           style={{
// //             width: p.size,
// //             height: p.size,
// //             background: p.bg,
// //             boxShadow: `0 0 8px ${p.glow}`,
// //             offsetPath: `ellipse(${rx}px ${ry}px at 50% 50%)`,
// //             offsetDistance: "0%",
// //             offsetRotate: "0deg",
// //             animation: `orbit-travel ${p.duration} linear infinite`,
// //             animationDelay: p.delay,
// //           }}
// //         />
// //       ))}
// //     </div>
// //   );
// // }

// // const PLANET = {
// //   warm: "radial-gradient(circle at 35% 35%, #ffd4a8, #ff9a40 70%)",
// //   cool: "radial-gradient(circle at 35% 35%, #b8d4ff, #4ba8ff 70%)",
// //   violet: "radial-gradient(circle at 35% 35%, #ddb8ff, #a24bff 70%)",
// //   pale: "radial-gradient(circle at 35% 35%, #f0f0f5, #9a99a8 70%)",
// // };
// // const GLOW = {
// //   warm: "rgba(255,154,64,0.45)",
// //   cool: "rgba(75,168,255,0.45)",
// //   violet: "rgba(162,75,255,0.45)",
// //   pale: "rgba(200,200,220,0.35)",
// // };

// // export default function Hero() {
// //   const router = useRouter();

// //   return (
// //     <div className="relative w-full overflow-x-hidden font-['Poppins',sans-serif] antialiased">
// //       <style>{`
// //         @keyframes orbit-travel { to { offset-distance: 100%; } }
// //         @keyframes card-float { 0%,100%{transform:translate3d(0,0,0)} 50%{transform:translate3d(0,-18px,0)} }
// //         @media (prefers-reduced-motion: reduce){
// //           .hero-stack *, .hero-stack *::before, .hero-stack *::after { animation-duration:.001ms!important; transition-duration:.001ms!important; }
// //         }
// //       `}</style>

// //       {/* page background — radial top to dark bottom */}
// //       <div
// //         className="fixed inset-0 -z-10"
// //         style={{
// //           background:
// //             "radial-gradient(ellipse 130% 80% at 50% 0%, #11182E 0%, #0A0E1C 32%, #060709 68%, #050507 100%), #050507",
// //         }}
// //       />

// //       {/* HERO STACK — orbits sit behind hero (and behind the nav above it) */}
// //       <div className="hero-stack relative flex min-h-[calc(100vh-80px)] w-full flex-col">
// //         {/* Orbits with traveling planets */}
// //         <div className="pointer-events-none absolute inset-0 z-0 overflow-visible">
// //           <Orbit
// //             w={1100}
// //             h={388}
// //             rx={550}
// //             ry={194}
// //             border="rgba(255,255,255,0.05)"
// //             planets={[
// //               { size: "6px", bg: PLANET.warm, glow: GLOW.warm, duration: "52s", delay: "0s" },
// //               { size: "4px", bg: PLANET.pale, glow: GLOW.pale, duration: "68s", delay: "-22s" },
// //             ]}
// //           />
// //           <Orbit
// //             w={1620}
// //             h={570}
// //             rx={810}
// //             ry={285}
// //             border="rgba(255,255,255,0.06)"
// //             planets={[
// //               { size: "8px", bg: PLANET.cool, glow: GLOW.cool, duration: "78s", delay: "-10s" },
// //               { size: "6px", bg: PLANET.violet, glow: GLOW.violet, duration: "95s", delay: "-38s" },
// //             ]}
// //           />
// //           <Orbit
// //             w={2150}
// //             h={750}
// //             rx={1075}
// //             ry={375}
// //             border="rgba(255,255,255,0.04)"
// //             planets={[
// //               { size: "6px", bg: PLANET.warm, glow: GLOW.warm, duration: "110s", delay: "-45s" },
// //               { size: "4px", bg: PLANET.cool, glow: GLOW.cool, duration: "130s", delay: "-72s" },
// //             ]}
// //           />
// //         </div>

// //         {/* NAV is a separate component rendered above <Hero /> in your layout */}

// //         {/* HERO */}
// //         <section className="relative flex w-full flex-1 items-start overflow-visible pt-6 lg:items-center lg:pt-[clamp(16px,2.2vh,32px)]">
// //           {/* Ambient glow blobs */}
// //           <div
// //             className="pointer-events-none absolute -left-[140px] -top-[180px] z-0 h-[320px] w-[320px] rounded-full opacity-[0.78] blur-[130px] sm:h-[620px] sm:w-[620px]"
// //             style={{
// //               background:
// //                 "radial-gradient(circle, rgba(104,100,247,0.52) 0%, rgba(104,100,247,0) 70%)",
// //             }}
// //           />
// //           <div
// //             className="pointer-events-none absolute -right-[160px] top-1/4 z-0 h-[280px] w-[280px] rounded-full opacity-[0.78] blur-[130px] sm:h-[540px] sm:w-[540px]"
// //             style={{
// //               background:
// //                 "radial-gradient(circle, rgba(75,80,220,0.45) 0%, rgba(75,80,220,0) 70%)",
// //             }}
// //           />
// //           <div
// //             className="pointer-events-none absolute -bottom-[180px] left-[22%] z-0 h-[260px] w-[260px] rounded-full opacity-[0.78] blur-[130px] sm:h-[500px] sm:w-[500px]"
// //             style={{
// //               background:
// //                 "radial-gradient(circle, rgba(46,36,140,0.5) 0%, rgba(46,36,140,0) 70%)",
// //             }}
// //           />
// //           <div
// //             className="pointer-events-none absolute right-[22%] top-[5%] z-0 hidden h-[420px] w-[420px] rounded-full opacity-[0.78] blur-[130px] sm:block"
// //             style={{
// //               background:
// //                 "radial-gradient(circle, rgba(162,75,255,0.3) 0%, rgba(162,75,255,0) 70%)",
// //             }}
// //           />

// //           {/* Mascot — OUTSIDE the content grid, flush bottom-right of section (desktop) */}
// //           <div
// //             className="relative z-[1] mx-auto mt-4 flex h-[clamp(240px,36vh,320px)] w-full items-center justify-center overflow-hidden rounded-[20px] border border-white/30 bg-white/[0.07] backdrop-blur-[23px] sm:h-[clamp(260px,38vh,360px)] lg:absolute lg:bottom-0 lg:right-0 lg:m-0 lg:h-[clamp(300px,56vh,480px)] lg:w-[clamp(380px,42vw,640px)] lg:rounded-[20px_0_0_0] lg:border-b-0 lg:border-r-0"
// //             style={{ boxShadow: GLASS_SHADOW }}
// //             id="mascot"
// //           >
// //             <GlassEdgeTop />
// //             <GlassEdgeLeft />
// //             <motion.div
// //               animate={{ y: [0, -15, 0] }}
// //               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
// //               className="flex h-full w-full items-center justify-center p-4"
// //             >
// //               <img
// //                 src="/images/3_mascots_on_rocket.png"
// //                 alt="Mascots on Rocket"
// //                 className="h-full w-full object-contain"
// //               />
// //             </motion.div>
// //           </div>

// //           {/* HERO INNER — content grid */}
// //           <div className="relative z-[1] mx-auto grid w-full max-w-[1600px] grid-cols-1 items-start gap-7 px-[18px] pb-[clamp(28px,4vh,40px)] sm:gap-9 sm:px-7 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-center lg:gap-[clamp(24px,3vw,56px)] lg:px-[clamp(20px,4vw,72px)]">
// //             {/* LEFT */}
// //             <div className="relative">
// //               {/* Pill */}
// //               <motion.div
// //                 custom={0}
// //                 initial="hidden"
// //                 animate="visible"
// //                 variants={fadeUp}
// //                 className="relative z-[2] mb-[clamp(14px,1.6vh,22px)] inline-flex h-8 items-center gap-2.5 rounded-full border border-[rgba(255,154,64,0.55)] bg-white/[0.07] px-3.5 backdrop-blur-[23px] transition-colors duration-700 hover:border-[rgba(255,154,64,0.75)] sm:h-9 sm:px-[18px]"
// //                 style={{ boxShadow: GLASS_SHADOW }}
// //               >
// //                 <span className="h-2 w-2 rounded-full bg-[#ff9a40]" />
// //                 <span className="font-['Outfit',sans-serif] text-[11px] font-semibold uppercase tracking-[1.6px] text-[#ffb36b] sm:text-[12px] sm:tracking-[2px]">
// //                   Family Growth Platform
// //                 </span>
// //               </motion.div>

// //               {/* Headline */}
// //               <motion.h1
// //                 custom={1}
// //                 initial="hidden"
// //                 animate="visible"
// //                 variants={fadeUp}
// //                 className="relative z-[2] mb-[clamp(14px,1.8vh,22px)] font-['Outfit',sans-serif] text-[34px] font-extrabold leading-[1.04] tracking-[-0.6px] text-[#c3c2ce] sm:text-[clamp(34px,4.4vw,64px)] sm:tracking-[-1.4px]"
// //               >
// //                 <span className="text-white">Ordinary Moments.</span>
// //                 <br />
// //                 <span
// //                   className="bg-clip-text text-transparent"
// //                   style={{ backgroundImage: HEADLINE_GRADIENT }}
// //                 >
// //                   Extraordinary
// //                 </span>{" "}
// //                 <span className="text-white">Family.</span>
// //               </motion.h1>

// //               {/* Lead */}
// //               <motion.p
// //                 custom={2}
// //                 initial="hidden"
// //                 animate="visible"
// //                 variants={fadeUp}
// //                 className="relative z-[2] mb-[clamp(18px,2.4vh,30px)] max-w-[640px] text-[14px] font-normal leading-[1.55] text-[#8b8a98] sm:text-[clamp(14px,1.05vw,17px)]"
// //               >
// //                 No prep. No screen. Just meaningful conversations and real family
// //                 time. Spend just 10 mins a day with simple, age appropriate
// //                 activities designed to build your child&apos;s{" "}
// //                 <span className="text-[#c3c2ce]">
// //                   emotional strength, resilience, and thinking skills,
// //                 </span>{" "}
// //                 while bridging the gap between Knowing and Doing.
// //               </motion.p>

// //               {/* CTAs — preserved routes/functionality */}
// //               <motion.div
// //                 custom={3}
// //                 initial="hidden"
// //                 animate="visible"
// //                 variants={fadeUp}
// //                 className="relative z-[2] mb-[30px] flex flex-wrap items-center gap-3 sm:gap-[18px] lg:mb-[clamp(24px,3.4vh,44px)]"
// //               >
// //                 <BtnPrimary onClick={() => router.push("/download-app")}>
// //                   Get the App
// //                 </BtnPrimary>
// //                 <BtnSecondary href="#journey">See How It Works →</BtnSecondary>
// //               </motion.div>

// //               {/* Stat cards */}
// //               <motion.div
// //                 custom={4}
// //                 initial="hidden"
// //                 animate="visible"
// //                 variants={fadeUp}
// //                 className="relative z-[1] grid max-w-full grid-cols-2 gap-3 sm:gap-[22px] lg:max-w-[720px] lg:grid-cols-4"
// //               >
// //                 {STATS.map((s) => (
// //                   <div
// //                     key={s.label}
// //                     className="group relative z-[1] grid h-[168px] grid-rows-[44px_1fr_auto_auto] overflow-hidden rounded-[20px] border border-white/30 bg-white/[0.07] p-[14px_12px_16px] backdrop-blur-[23px] transition-[transform,border-color,box-shadow] duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:scale-[1.025] hover:border-white/[0.48] sm:p-[18px_16px_20px] lg:h-[clamp(180px,21vh,200px)]"
// //                     style={{
// //                       boxShadow: GLASS_SHADOW,
// //                     }}
// //                   >
// //                     <GlassEdgeTop />
// //                     <GlassEdgeLeft />
// //                     <div
// //                       className="row-start-1 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center self-start rounded-[22px] text-[16px] text-white backdrop-blur-[10px] transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 sm:h-11 sm:w-11 sm:text-[18px]"
// //                       style={{
// //                         background: s.badgeBg,
// //                         border: `1px solid ${s.badgeStroke}`,
// //                         boxShadow: `inset 0 1px 0 ${s.badgeInset}, inset 0 -1px 0 rgba(255,255,255,0.08), 0 4px 14px rgba(0,0,0,0.20)`,
// //                       }}
// //                     >
// //                       {s.badge}
// //                     </div>
// //                     <div
// //                       className="row-start-3 mb-2 min-h-[26px] self-end text-[22px] font-semibold leading-none sm:min-h-[30px] sm:text-[24px]"
// //                       style={{ color: s.numColor }}
// //                     >
// //                       {s.num}
// //                     </div>
// //                     <div className="row-start-4 min-h-[36px] self-start text-[13px] font-normal leading-[1.4] text-[#c3c2ce] sm:min-h-[40px] sm:text-[14px]">
// //                       {s.label}
// //                     </div>
// //                   </div>
// //                 ))}
// //               </motion.div>
// //             </div>

// //             {/* RIGHT — testimonials only (mascot is flush to section) */}
// //             <motion.div
// //               custom={5}
// //               initial="hidden"
// //               animate="visible"
// //               variants={fadeUp}
// //               className="relative mx-auto h-full min-h-[340px] w-full max-w-[620px] sm:min-h-[420px] lg:mx-0 lg:min-h-[clamp(360px,50vh,460px)] lg:max-w-none"
// //             >
// //               {TESTIMONIALS.map((t) => (
// //                 <div
// //                   key={t.initial}
// //                   className={`group absolute z-[3] flex w-[84%] flex-col gap-2 rounded-[20px] border border-white/30 bg-white/[0.07] p-[14px_16px_16px] backdrop-blur-[23px] transition-colors duration-700 hover:border-white/40 hover:[animation-play-state:paused] sm:w-[clamp(260px,24vw,310px)] sm:gap-2.5 sm:p-[16px_18px_18px] ${t.posClass}`}
// //                   style={{
// //                     boxShadow: GLASS_SHADOW,
// //                     animation: `card-float ${t.duration} ease-in-out infinite`,
// //                     animationDelay: t.delay,
// //                     willChange: "transform",
// //                   }}
// //                 >
// //                   <GlassEdgeTop />
// //                   <div className="flex items-center gap-3">
// //                     <span
// //                       className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[18px] font-['Outfit',sans-serif] text-[15px] font-bold text-white"
// //                       style={{ background: t.avaBg }}
// //                     >
// //                       {t.initial}
// //                     </span>
// //                     <div className="text-[13px] leading-none tracking-[1.6px] text-[#ffb36b]">
// //                       ★★★★★
// //                     </div>
// //                   </div>
// //                   <p className="m-0 text-[14px] font-medium leading-[1.45] text-white">
// //                     &ldquo;{t.quote}&rdquo;
// //                   </p>
// //                   <p className="m-0 text-[12.5px] font-normal text-[#8b8a98]">
// //                     {t.author}
// //                   </p>
// //                   <span
// //                     className="absolute -right-3 -top-3.5 z-[4] inline-flex h-[34px] w-[34px] items-center justify-center rounded-[17px] text-[15px] text-white backdrop-blur-[10px] transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
// //                     style={{
// //                       background: t.iconBg,
// //                       border: `1px solid ${t.iconStroke}`,
// //                       boxShadow: `inset 0 1px 0 ${t.iconInset}, inset 0 -1px 0 rgba(255,255,255,0.08), 0 4px 14px rgba(0,0,0,0.22)`,
// //                     }}
// //                   >
// //                     {t.icon}
// //                   </span>
// //                 </div>
// //               ))}
// //             </motion.div>
// //           </div>
// //         </section>
// //       </div>
// //     </div>
// //   );
// // }


// "use client";

// import { motion } from "framer-motion";
// import { BtnPrimary, BtnSecondary } from "@/components/ui/UI";
// import { useRouter } from "next/navigation";

// const GLASS_SHADOW =
//   "0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -1px 0 rgba(255,255,255,0.1)";
// const EDGE_TOP =
//   "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)";
// const EDGE_LEFT =
//   "linear-gradient(180deg, rgba(255,255,255,0.8), transparent, rgba(255,255,255,0.3))";
// const HEADLINE_GRADIENT =
//   "linear-gradient(103.7deg, #ffb13d 0%, #ff7a18 26%, #ff4d8d 64%, #a24bff 100%)";

// const STATS = [
//   {
//     label: "More real family time each week",
//     badge: "★",
//     num: <>+5hrs</>,
//     badgeBg:
//       "linear-gradient(150deg, rgba(79,227,154,0.6), rgba(31,168,94,0.6))",
//     numColor: "#34d67e",
//     badgeStroke: "rgba(110,240,175,0.55)",
//     badgeInset: "rgba(180,255,215,0.55)",
//   },
//   {
//     label: "Less daily screen time",
//     badge: "◷",
//     num: <>−40%</>,
//     badgeBg:
//       "linear-gradient(150deg, rgba(255,174,87,0.64), rgba(251,110,17,0.64))",
//     numColor: "#ff7a18",
//     badgeStroke: "rgba(255,190,120,0.55)",
//     badgeInset: "rgba(255,220,180,0.55)",
//   },
//   {
//     label: "Families feel closer",
//     badge: "♥",
//     num: (
//       <>
//         9 <span className="font-medium text-[#8b8a98]">in</span> 10
//       </>
//     ),
//     badgeBg:
//       "linear-gradient(150deg, rgba(197,139,255,0.6), rgba(162,75,255,0.6))",
//     numColor: "#a24bff",
//     badgeStroke: "rgba(210,165,255,0.55)",
//     badgeInset: "rgba(230,205,255,0.55)",
//   },
//   {
//     label: "More open conversations",
//     badge: "💬",
//     num: <>3X</>,
//     badgeBg:
//       "linear-gradient(150deg, rgba(124,192,255,0.61), rgba(46,143,232,0.61))",
//     numColor: "#4ba8ff",
//     badgeStroke: "rgba(140,200,255,0.55)",
//     badgeInset: "rgba(200,225,255,0.55)",
//   },
// ];

// const TESTIMONIALS = [
//   {
//     initial: "P",
//     avaBg: "linear-gradient(150deg, #ff9a6e 0%, #e8633b 100%)",
//     quote: "We've seen such an increase in family interaction.",
//     author: "— Gaurav, Father of 2",
//     icon: "♥",
//     iconBg: "linear-gradient(150deg, #ff6fa0 0%, #ff3d7f 100%)",
//     iconStroke: "rgba(255,140,180,0.6)",
//     iconInset: "rgba(255,200,220,0.55)",
//     // float-1: top:-10% left:10% (md) / top:-4% left:6% (≤1024) / top:-2% left:4% (≤720)
//     posClass:
//       "top-[-2%] left-[4%] sm:top-[-4%] sm:left-[6%] lg:top-[-10%] lg:left-[10%]",
//     delay: "0s",
//     duration: "5s",
//   },
//   {
//     initial: "N",
//     avaBg: "linear-gradient(150deg, #c58bff 0%, #a24bff 100%)",
//     quote: "My son opens up so much more now.",
//     author: "— Neha, Mom of 1",
//     icon: "💬",
//     iconBg:
//       "linear-gradient(180deg, #ff9a40 0%, #ff7a18 52%, #f2670a 100%)",
//     iconStroke: "rgba(255,190,120,0.6)",
//     iconInset: "rgba(255,220,180,0.55)",
//     posClass:
//       "top-[8%] right-[-4%] sm:right-[-6%] lg:top-[5%] lg:right-[-12%]",
//     delay: "-2.75s",
//     duration: "5.5s",
//   },
// ];

// const fadeUp = {
//   hidden: { opacity: 0, y: 28 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
//   }),
// };

// const GlassEdgeTop = () => (
//   <span
//     className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-px"
//     style={{ background: EDGE_TOP }}
//   />
// );
// const GlassEdgeLeft = () => (
//   <span
//     className="pointer-events-none absolute left-0 top-0 z-[2] h-full w-px"
//     style={{ background: EDGE_LEFT }}
//   />
// );

// // Orbit + planets. rx/ry feed the offset-path ellipse.
// function Orbit({
//   w,
//   h,
//   border,
//   planets,
// }: {
//   w: number;
//   h: number;
//   border: string;
//   planets: {
//     size: number;
//     bg: string;
//     glow: string;
//     duration: string;
//     delay: string;
//   }[];
// }) {
//   // The ring is an ellipse on the border box. Planets must travel that exact
//   // ellipse, so radii are derived from w/h (never passed separately).
//   const rx = w / 2;
//   const ry = h / 2;
//   return (
//     <div
//       className="absolute left-1/2 top-[55%] rounded-[50%]"
//       style={{
//         width: w,
//         height: h,
//         border: `1px solid ${border}`,
//         transform: "translate(-50%,-50%) rotate(14.54deg)",
//       }}
//     >
//       {planets.map((p, i) => (
//         <span
//           key={i}
//           className="absolute rounded-full"
//           style={{
//             // place the box center at the element center, then let offset-path
//             // move that center along the ellipse — keeps the dot ON the line
//             left: "50%",
//             top: "50%",
//             width: p.size,
//             height: p.size,
//             marginLeft: -p.size / 2,
//             marginTop: -p.size / 2,
//             background: p.bg,
//             boxShadow: `0 0 8px ${p.glow}`,
//             offsetPath: `ellipse(${rx}px ${ry}px at 50% 50%)`,
//             offsetPosition: "50% 50%",
//             offsetDistance: "0%",
//             offsetRotate: "0deg",
//             animation: `orbit-travel ${p.duration} linear infinite`,
//             animationDelay: p.delay,
//           }}
//         />
//       ))}
//     </div>
//   );
// }

// const PLANET = {
//   warm: "radial-gradient(circle at 35% 35%, #ffd4a8, #ff9a40 70%)",
//   cool: "radial-gradient(circle at 35% 35%, #b8d4ff, #4ba8ff 70%)",
//   violet: "radial-gradient(circle at 35% 35%, #ddb8ff, #a24bff 70%)",
//   pale: "radial-gradient(circle at 35% 35%, #f0f0f5, #9a99a8 70%)",
// };
// const GLOW = {
//   warm: "rgba(255,154,64,0.45)",
//   cool: "rgba(75,168,255,0.45)",
//   violet: "rgba(162,75,255,0.45)",
//   pale: "rgba(200,200,220,0.35)",
// };

// export default function Hero() {
//   const router = useRouter();

//   return (
//     <div className="relative flex h-full min-h-0 w-full flex-1 flex-col overflow-hidden font-['Poppins',sans-serif] antialiased">
//       <style>{`
//         @keyframes orbit-travel { to { offset-distance: 100%; } }
//         @keyframes card-float { 0%,100%{transform:translate3d(0,0,0)} 50%{transform:translate3d(0,-18px,0)} }
//         @media (prefers-reduced-motion: reduce){
//           .hero-stack *, .hero-stack *::before, .hero-stack *::after { animation-duration:.001ms!important; transition-duration:.001ms!important; }
//         }`}</style>

//       {/* page background — radial top to dark bottom */}
//       <div
//         className="fixed inset-0 -z-10"
//         style={{
//           background:
//             "radial-gradient(ellipse 130% 80% at 50% 0%, #11182E 0%, #0A0E1C 32%, #060709 68%, #050507 100%), #050507",
//         }}
//       />

//       {/* HERO STACK — orbits sit behind hero (and behind the nav above it) */}
//       <div className="hero-stack relative flex min-h-0 w-full flex-1 flex-col">
//         {/* Orbits with traveling planets */}
//         <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
//           <Orbit
//             w={1100}
//             h={388}
//             border="rgba(255,255,255,0.05)"
//             planets={[
//               { size: 6, bg: PLANET.warm, glow: GLOW.warm, duration: "52s", delay: "0s" },
//               { size: 4, bg: PLANET.pale, glow: GLOW.pale, duration: "68s", delay: "-22s" },
//             ]}
//           />
//           <Orbit
//             w={1620}
//             h={570}
//             border="rgba(255,255,255,0.06)"
//             planets={[
//               { size: 8, bg: PLANET.cool, glow: GLOW.cool, duration: "78s", delay: "-10s" },
//               { size: 6, bg: PLANET.violet, glow: GLOW.violet, duration: "95s", delay: "-38s" },
//             ]}
//           />
//           <Orbit
//             w={2150}
//             h={750}
//             border="rgba(255,255,255,0.04)"
//             planets={[
//               { size: 6, bg: PLANET.warm, glow: GLOW.warm, duration: "110s", delay: "-45s" },
//               { size: 4, bg: PLANET.cool, glow: GLOW.cool, duration: "130s", delay: "-72s" },
//             ]}
//           />
//         </div>

//         {/* NAV is a separate component rendered above <Hero /> in your layout */}

//         {/* HERO */}
//         <section className="relative flex w-full flex-1 items-start overflow-visible pt-6 lg:items-center lg:pt-[clamp(16px,2.2vh,32px)]">
//           {/* Ambient glow blobs */}
//           <div
//             className="pointer-events-none absolute -left-[140px] -top-[180px] z-0 h-[320px] w-[320px] rounded-full opacity-[0.78] blur-[130px] sm:h-[620px] sm:w-[620px]"
//             style={{
//               background:
//                 "radial-gradient(circle, rgba(104,100,247,0.52) 0%, rgba(104,100,247,0) 70%)",
//             }}
//           />
//           <div
//             className="pointer-events-none absolute -right-[160px] top-1/4 z-0 h-[280px] w-[280px] rounded-full opacity-[0.78] blur-[130px] sm:h-[540px] sm:w-[540px]"
//             style={{
//               background:
//                 "radial-gradient(circle, rgba(75,80,220,0.45) 0%, rgba(75,80,220,0) 70%)",
//             }}
//           />
//           <div
//             className="pointer-events-none absolute -bottom-[180px] left-[22%] z-0 h-[260px] w-[260px] rounded-full opacity-[0.78] blur-[130px] sm:h-[500px] sm:w-[500px]"
//             style={{
//               background:
//                 "radial-gradient(circle, rgba(46,36,140,0.5) 0%, rgba(46,36,140,0) 70%)",
//             }}
//           />
//           <div
//             className="pointer-events-none absolute right-[22%] top-[5%] z-0 hidden h-[420px] w-[420px] rounded-full opacity-[0.78] blur-[130px] sm:block"
//             style={{
//               background:
//                 "radial-gradient(circle, rgba(162,75,255,0.3) 0%, rgba(162,75,255,0) 70%)",
//             }}
//           />

//           {/* Mascot — OUTSIDE the content grid, flush bottom-right of section (desktop) */}
//           <div
//             className="relative z-[1] mx-auto mt-4 flex h-[clamp(240px,36vh,320px)] w-full items-center justify-center overflow-hidden rounded-[20px] border border-white/30 bg-white/[0.07] backdrop-blur-[23px] sm:h-[clamp(260px,38vh,360px)] lg:absolute lg:bottom-0 lg:right-0 lg:m-0 lg:h-[clamp(300px,56vh,480px)] lg:w-[clamp(380px,42vw,640px)] lg:rounded-[20px_0_0_0] lg:border-b-0 lg:border-r-0"
//             style={{ boxShadow: GLASS_SHADOW }}
//             id="mascot"
//           >
//             <GlassEdgeTop />
//             <GlassEdgeLeft />
//             <motion.div
//               animate={{ y: [0, -15, 0] }}
//               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//               className="flex h-full w-full items-center justify-center p-4"
//             >
//               <img
//                 src="/images/3_mascots_on_rocket.png"
//                 alt="Mascots on Rocket"
//                 className="h-full w-full object-contain"
//               />
//             </motion.div>
//           </div>

//           {/* HERO INNER — content grid */}
//           <div className="relative z-[1] mx-auto grid w-full max-w-[1600px] grid-cols-1 items-start gap-7 px-[18px] pb-[clamp(28px,4vh,40px)] sm:gap-9 sm:px-7 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-center lg:gap-[clamp(24px,3vw,56px)] lg:px-[clamp(20px,4vw,72px)]">
//             {/* LEFT */}
//             <div className="relative">
//               {/* Pill */}
//               <motion.div
//                 custom={0}
//                 initial="hidden"
//                 animate="visible"
//                 variants={fadeUp}
//                 className="relative z-[2] mb-[clamp(14px,1.6vh,22px)] inline-flex h-8 items-center gap-2.5 rounded-full border border-[rgba(255,154,64,0.55)] bg-white/[0.07] px-3.5 backdrop-blur-[23px] transition-colors duration-700 hover:border-[rgba(255,154,64,0.75)] sm:h-9 sm:px-[18px]"
//                 style={{ boxShadow: GLASS_SHADOW }}
//               >
//                 <span className="h-2 w-2 rounded-full bg-[#ff9a40]" />
//                 <span className="font-['Outfit',sans-serif] text-[11px] font-semibold uppercase tracking-[1.6px] text-[#ffb36b] sm:text-[12px] sm:tracking-[2px]">
//                   Family Growth Platform
//                 </span>
//               </motion.div>

//               {/* Headline */}
//               <motion.h1
//                 custom={1}
//                 initial="hidden"
//                 animate="visible"
//                 variants={fadeUp}
//                 className="relative z-[2] mb-[clamp(14px,1.8vh,22px)] font-['Outfit',sans-serif] text-[34px] font-extrabold leading-[1.04] tracking-[-0.6px] text-[#c3c2ce] sm:text-[clamp(34px,4.4vw,64px)] sm:tracking-[-1.4px]"
//               >
//                 <span className="text-white">Ordinary Moments.</span>
//                 <br />
//                 <span
//                   className="bg-clip-text text-transparent"
//                   style={{ backgroundImage: HEADLINE_GRADIENT }}
//                 >
//                   Extraordinary
//                 </span>{" "}
//                 <span className="text-white">Family.</span>
//               </motion.h1>

//               {/* Lead */}
//               <motion.p
//                 custom={2}
//                 initial="hidden"
//                 animate="visible"
//                 variants={fadeUp}
//                 className="relative z-[2] mb-[clamp(18px,2.4vh,30px)] max-w-[640px] text-[14px] font-normal leading-[1.55] text-[#8b8a98] sm:text-[clamp(14px,1.05vw,17px)]"
//               >
//                 No prep. No screen. Just meaningful conversations and real family
//                 time. Spend just 10 mins a day with simple, age appropriate
//                 activities designed to build your child&apos;s{" "}
//                 <span className="text-[#c3c2ce]">
//                   emotional strength, resilience, and thinking skills,
//                 </span>{" "}
//                 while bridging the gap between Knowing and Doing.
//               </motion.p>

//               {/* CTAs — preserved routes/functionality */}
//               <motion.div
//                 custom={3}
//                 initial="hidden"
//                 animate="visible"
//                 variants={fadeUp}
//                 className="relative z-[2] mb-[30px] flex flex-wrap items-center gap-3 sm:gap-[18px] lg:mb-[clamp(24px,3.4vh,44px)]"
//               >
//                 <BtnPrimary onClick={() => router.push("/download-app")}>
//                   Get the App
//                 </BtnPrimary>
//                 <BtnSecondary href="#journey">See How It Works →</BtnSecondary>
//               </motion.div>

//               {/* Stat cards */}
//               <motion.div
//                 custom={4}
//                 initial="hidden"
//                 animate="visible"
//                 variants={fadeUp}
//                 className="relative z-[1] grid max-w-full grid-cols-2 gap-3 sm:gap-[22px] lg:max-w-[720px] lg:grid-cols-4"
//               >
//                 {STATS.map((s) => (
//                   <div
//                     key={s.label}
//                     className="group relative z-[1] grid h-[168px] grid-rows-[44px_1fr_auto_auto] overflow-hidden rounded-[20px] border border-white/30 bg-white/[0.07] p-[14px_12px_16px] backdrop-blur-[23px] transition-[transform,border-color,box-shadow] duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:scale-[1.025] hover:border-white/[0.48] sm:p-[18px_16px_20px] lg:h-[clamp(180px,21vh,200px)]"
//                     style={{
//                       boxShadow: GLASS_SHADOW,
//                     }}
//                   >
//                     <GlassEdgeTop />
//                     <GlassEdgeLeft />
//                     <div
//                       className="row-start-1 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center self-start rounded-[22px] text-[16px] text-white backdrop-blur-[10px] transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 sm:h-11 sm:w-11 sm:text-[18px]"
//                       style={{
//                         background: s.badgeBg,
//                         border: `1px solid ${s.badgeStroke}`,
//                         boxShadow: `inset 0 1px 0 ${s.badgeInset}, inset 0 -1px 0 rgba(255,255,255,0.08), 0 4px 14px rgba(0,0,0,0.20)`,
//                       }}
//                     >
//                       {s.badge}
//                     </div>
//                     <div
//                       className="row-start-3 mb-2 min-h-[26px] self-end text-[22px] font-semibold leading-none sm:min-h-[30px] sm:text-[24px]"
//                       style={{ color: s.numColor }}
//                     >
//                       {s.num}
//                     </div>
//                     <div className="row-start-4 min-h-[36px] self-start text-[13px] font-normal leading-[1.4] text-[#c3c2ce] sm:min-h-[40px] sm:text-[14px]">
//                       {s.label}
//                     </div>
//                   </div>
//                 ))}
//               </motion.div>
//             </div>

//             {/* RIGHT — testimonials only (mascot is flush to section) */}
//             <motion.div
//               custom={5}
//               initial="hidden"
//               animate="visible"
//               variants={fadeUp}
//               className="relative mx-auto h-full min-h-[340px] w-full max-w-[620px] sm:min-h-[420px] lg:mx-0 lg:min-h-[clamp(360px,50vh,460px)] lg:max-w-none"
//             >
//               {TESTIMONIALS.map((t) => (
//                 <div
//                   key={t.initial}
//                   className={`group absolute z-[3] flex w-[84%] flex-col gap-2 rounded-[20px] border border-white/30 bg-white/[0.07] p-[14px_16px_16px] backdrop-blur-[23px] transition-colors duration-700 hover:border-white/40 hover:[animation-play-state:paused] sm:w-[clamp(260px,24vw,310px)] sm:gap-2.5 sm:p-[16px_18px_18px] ${t.posClass}`}
//                   style={{
//                     boxShadow: GLASS_SHADOW,
//                     animation: `card-float ${t.duration} ease-in-out infinite`,
//                     animationDelay: t.delay,
//                     willChange: "transform",
//                   }}
//                 >
//                   <GlassEdgeTop />
//                   <div className="flex items-center gap-3">
//                     <span
//                       className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[18px] font-['Outfit',sans-serif] text-[15px] font-bold text-white"
//                       style={{ background: t.avaBg }}
//                     >
//                       {t.initial}
//                     </span>
//                     <div className="text-[13px] leading-none tracking-[1.6px] text-[#ffb36b]">
//                       ★★★★★
//                     </div>
//                   </div>
//                   <p className="m-0 text-[14px] font-medium leading-[1.45] text-white">
//                     &ldquo;{t.quote}&rdquo;
//                   </p>
//                   <p className="m-0 text-[12.5px] font-normal text-[#8b8a98]">
//                     {t.author}
//                   </p>
//                   <span
//                     className="absolute -right-3 -top-3.5 z-[4] inline-flex h-[34px] w-[34px] items-center justify-center rounded-[17px] text-[15px] text-white backdrop-blur-[10px] transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
//                     style={{
//                       background: t.iconBg,
//                       border: `1px solid ${t.iconStroke}`,
//                       boxShadow: `inset 0 1px 0 ${t.iconInset}, inset 0 -1px 0 rgba(255,255,255,0.08), 0 4px 14px rgba(0,0,0,0.22)`,
//                     }}
//                   >
//                     {t.icon}
//                   </span>
//                 </div>
//               ))}
//             </motion.div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { BtnPrimary, BtnSecondary } from "@/components/ui/UI";
import { useRouter } from "next/navigation";

const GLASS_SHADOW =
  "0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -1px 0 rgba(255,255,255,0.1)";
const EDGE_TOP =
  "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)";
const EDGE_LEFT =
  "linear-gradient(180deg, rgba(255,255,255,0.8), transparent, rgba(255,255,255,0.3))";
const HEADLINE_GRADIENT =
  "linear-gradient(103.7deg, #ffb13d 0%, #ff7a18 26%, #ff4d8d 64%, #a24bff 100%)";

const STATS = [
  {
    label: "More real family time each week",
    badge: "★",
    num: <>+5hrs</>,
    badgeBg:
      "linear-gradient(150deg, rgba(79,227,154,0.6), rgba(31,168,94,0.6))",
    numColor: "#34d67e",
    badgeStroke: "rgba(110,240,175,0.55)",
    badgeInset: "rgba(180,255,215,0.55)",
  },
  {
    label: "Less daily screen time",
    badge: "◷",
    num: <>−40%</>,
    badgeBg:
      "linear-gradient(150deg, rgba(255,174,87,0.64), rgba(251,110,17,0.64))",
    numColor: "#ff7a18",
    badgeStroke: "rgba(255,190,120,0.55)",
    badgeInset: "rgba(255,220,180,0.55)",
  },
  {
    label: "Families feel closer",
    badge: "♥",
    num: (
      <>
        9 <span className="font-medium text-[#8b8a98]">in</span> 10
      </>
    ),
    badgeBg:
      "linear-gradient(150deg, rgba(197,139,255,0.6), rgba(162,75,255,0.6))",
    numColor: "#a24bff",
    badgeStroke: "rgba(210,165,255,0.55)",
    badgeInset: "rgba(230,205,255,0.55)",
  },
  {
    label: "More open conversations",
    badge: "💬",
    num: <>3X</>,
    badgeBg:
      "linear-gradient(150deg, rgba(124,192,255,0.61), rgba(46,143,232,0.61))",
    numColor: "#4ba8ff",
    badgeStroke: "rgba(140,200,255,0.55)",
    badgeInset: "rgba(200,225,255,0.55)",
  },
];

const TESTIMONIALS = [
  {
    initial: "P",
    avaBg: "linear-gradient(150deg, #ff9a6e 0%, #e8633b 100%)",
    quote: "We've seen such an increase in family interaction.",
    author: "— Gaurav, Father of 2",
    icon: "♥",
    iconBg: "linear-gradient(150deg, #ff6fa0 0%, #ff3d7f 100%)",
    iconStroke: "rgba(255,140,180,0.6)",
    iconInset: "rgba(255,200,220,0.55)",
    // float-1: top:-10% left:10% (md) / top:-4% left:6% (≤1024) / top:-2% left:4% (≤720)
    posClass:
      "top-[-2%] left-[4%] sm:top-[-4%] sm:left-[6%] lg:top-[-10%] lg:left-[10%]",
    delay: "0s",
    duration: "5s",
  },
  {
    initial: "N",
    avaBg: "linear-gradient(150deg, #c58bff 0%, #a24bff 100%)",
    quote: "My son opens up so much more now.",
    author: "— Neha, Mom of 1",
    icon: "💬",
    iconBg:
      "linear-gradient(180deg, #ff9a40 0%, #ff7a18 52%, #f2670a 100%)",
    iconStroke: "rgba(255,190,120,0.6)",
    iconInset: "rgba(255,220,180,0.55)",
    posClass:
      "top-[8%] right-[-4%] sm:right-[-6%] lg:top-[5%] lg:right-[-12%]",
    delay: "-2.75s",
    duration: "5.5s",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
  }),
};

const GlassEdgeTop = () => (
  <span
    className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-px"
    style={{ background: EDGE_TOP }}
  />
);
const GlassEdgeLeft = () => (
  <span
    className="pointer-events-none absolute left-0 top-0 z-[2] h-full w-px"
    style={{ background: EDGE_LEFT }}
  />
);

// Orbit + planets. rx/ry feed the offset-path ellipse.
// function Orbit({
function Orbit({
  w,
  h,
  border,
  planets,
}: {
  w: number;
  h: number;
  border: string;
  planets: {
    size: number;
    bg: string;
    glow: string;
    duration: string;
    delay: string;
  }[];
}) {
  // The ring is an ellipse on the border box. Planets must travel that exact
  // ellipse, so radii are derived from w/h (never passed separately).
  const rx = w / 2;
  const ry = h / 2;
  return (
    <div
      className="absolute left-1/2 top-[55%] rounded-[50%]"
      style={{
        width: w,
        height: h,
        border: `1px solid ${border}`,
        transform: "translate(-50%,-50%) rotate(14.54deg)",
      }}
    >
      {planets.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            // place the box center at the element center, then let offset-path
            // move that center along the ellipse — keeps the dot ON the line
            left: "50%",
            top: "50%",
            width: p.size,
            height: p.size,
            marginLeft: -p.size / 2,
            marginTop: -p.size / 2,
            background: p.bg,
            boxShadow: `0 0 8px ${p.glow}`,
            offsetPath: `ellipse(${rx}px ${ry}px at 50% 50%)`,
            offsetPosition: "50% 50%",
            offsetDistance: "0%",
            offsetRotate: "0deg",
            animation: `orbit-travel ${p.duration} linear infinite`,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

const PLANET = {
  warm: "radial-gradient(circle at 35% 35%, #ffd4a8, #ff9a40 70%)",
  cool: "radial-gradient(circle at 35% 35%, #b8d4ff, #4ba8ff 70%)",
  violet: "radial-gradient(circle at 35% 35%, #ddb8ff, #a24bff 70%)",
  pale: "radial-gradient(circle at 35% 35%, #f0f0f5, #9a99a8 70%)",
};
const GLOW = {
  warm: "rgba(255,154,64,0.45)",
  cool: "rgba(75,168,255,0.45)",
  violet: "rgba(162,75,255,0.45)",
  pale: "rgba(200,200,220,0.35)",
};

export default function Hero() {
  const router = useRouter();

  return (
    <div className="relative flex min-h-0 w-full flex-col overflow-hidden font-['Poppins',sans-serif] antialiased h-[calc(100svh-var(--nav-h,72px))]">
      <style>{`
        @keyframes orbit-travel { to { offset-distance: 100%; } }
        @keyframes card-float { 0%,100%{transform:translate3d(0,0,0)} 50%{transform:translate3d(0,-18px,0)} }
        @media (prefers-reduced-motion: reduce){
          .hero-stack *, .hero-stack *::before, .hero-stack *::after { animation-duration:.001ms!important; transition-duration:.001ms!important; }
        }
      `}</style>

      {/* page background — radial top to dark bottom */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 130% 80% at 50% 0%, #11182E 0%, #0A0E1C 32%, #060709 68%, #050507 100%), #050507",
        }}
      />

      {/* HERO STACK — orbits sit behind hero (and behind the nav above it) */}
      <div className="hero-stack relative flex min-h-0 w-full flex-1 flex-col">
        {/* Orbits with traveling planets */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <Orbit
            w={1100}
            h={388}
            border="rgba(255,255,255,0.05)"
            planets={[
              { size: 6, bg: PLANET.warm, glow: GLOW.warm, duration: "52s", delay: "0s" },
              { size: 4, bg: PLANET.pale, glow: GLOW.pale, duration: "68s", delay: "-22s" },
            ]}
          />
          <Orbit
            w={1620}
            h={570}
            border="rgba(255,255,255,0.06)"
            planets={[
              { size: 8, bg: PLANET.cool, glow: GLOW.cool, duration: "78s", delay: "-10s" },
              { size: 6, bg: PLANET.violet, glow: GLOW.violet, duration: "95s", delay: "-38s" },
            ]}
          />
          <Orbit
            w={2150}
            h={750}
            border="rgba(255,255,255,0.04)"
            planets={[
              { size: 6, bg: PLANET.warm, glow: GLOW.warm, duration: "110s", delay: "-45s" },
              { size: 4, bg: PLANET.cool, glow: GLOW.cool, duration: "130s", delay: "-72s" },
            ]}
          />
        </div>

        {/* NAV is a separate component rendered above <Hero /> in your layout */}

        {/* HERO */}
        <section className="relative flex w-full flex-1 items-start overflow-visible pt-6 lg:items-center lg:pt-[clamp(16px,2.2vh,32px)]">
          {/* Ambient glow blobs */}
          <div
            className="pointer-events-none absolute -left-[140px] -top-[180px] z-0 h-[320px] w-[320px] rounded-full opacity-[0.78] blur-[130px] sm:h-[620px] sm:w-[620px]"
            style={{
              background:
                "radial-gradient(circle, rgba(104,100,247,0.52) 0%, rgba(104,100,247,0) 70%)",
            }}
          />
          <div
            className="pointer-events-none absolute -right-[160px] top-1/4 z-0 h-[280px] w-[280px] rounded-full opacity-[0.78] blur-[130px] sm:h-[540px] sm:w-[540px]"
            style={{
              background:
                "radial-gradient(circle, rgba(75,80,220,0.45) 0%, rgba(75,80,220,0) 70%)",
            }}
          />
          <div
            className="pointer-events-none absolute -bottom-[180px] left-[22%] z-0 h-[260px] w-[260px] rounded-full opacity-[0.78] blur-[130px] sm:h-[500px] sm:w-[500px]"
            style={{
              background:
                "radial-gradient(circle, rgba(46,36,140,0.5) 0%, rgba(46,36,140,0) 70%)",
            }}
          />
          <div
            className="pointer-events-none absolute right-[22%] top-[5%] z-0 hidden h-[420px] w-[420px] rounded-full opacity-[0.78] blur-[130px] sm:block"
            style={{
              background:
                "radial-gradient(circle, rgba(162,75,255,0.3) 0%, rgba(162,75,255,0) 70%)",
            }}
          />

          {/* Mascot — OUTSIDE the content grid, flush bottom-right of section (desktop) */}
          {/* <div
            className="relative z-[1] mx-auto mt-4 flex h-[clamp(240px,36vh,320px)] w-full items-center justify-center overflow-hidden rounded-[20px] border border-white/30 bg-white/[0.07] backdrop-blur-[23px] sm:h-[clamp(260px,38vh,360px)] lg:absolute lg:bottom-0 lg:right-0 lg:m-0 lg:h-[clamp(300px,56vh,480px)] lg:w-[clamp(380px,42vw,640px)] lg:rounded-[20px_0_0_0] lg:border-b-0 lg:border-r-0"
            style={{ boxShadow: GLASS_SHADOW }}
            id="mascot"
          >
            <GlassEdgeTop />
            <GlassEdgeLeft />
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="flex h-full w-full items-center justify-center p-4"
            >
              <img
                src="/images/hero.webp"
                alt="Mascots on Rocket"
                className="h-full w-full object-contain"
              />
            </motion.div>
          </div> */}

          {/* <div
  className="relative z-[1] mx-auto mt-4 flex h-[clamp(240px,36vh,320px)] w-full items-center justify-center overflow-hidden sm:h-[clamp(260px,38vh,360px)] lg:absolute lg:bottom-0 lg:right-0 lg:m-0 lg:h-[clamp(300px,56vh,480px)] lg:w-[clamp(380px,42vw,640px)]"
  id="mascot"
>
  <img
    src="/images/hero.webp"
    alt="Mascots on Rocket"
    className="h-full w-full object-contain"
  />
</div> */}
<div
  className="relative z-[1] mx-auto mt-4 flex h-[clamp(240px,36vh,320px)] w-full items-end justify-center overflow-hidden sm:h-[clamp(260px,38vh,360px)] lg:absolute lg:bottom-0 lg:right-0 lg:m-0 lg:h-[clamp(510px,95vh,700px)] lg:w-[clamp(646px,71vw,1250px)]"
  id="mascot"
>
  <img
    src="/images/hero.webp"
    alt="Mascots on Rocket"
    className="h-full w-full object-cover object-bottom"
  />
</div>

          {/* HERO INNER — content grid */}
          <div className="relative z-[1] mx-auto grid w-full max-w-[1600px] grid-cols-1 items-start gap-7 px-[18px] pb-[clamp(28px,4vh,40px)] sm:gap-9 sm:px-7 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-center lg:gap-[clamp(24px,3vw,56px)] lg:px-[clamp(20px,4vw,72px)]">
            {/* LEFT */}
            <div className="relative">
              {/* Pill */}
              <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="relative z-[2] mb-[clamp(14px,1.6vh,22px)] inline-flex h-8 items-center gap-2.5 rounded-full border border-[rgba(255,154,64,0.55)] bg-white/[0.07] px-3.5 backdrop-blur-[23px] transition-colors duration-700 hover:border-[rgba(255,154,64,0.75)] sm:h-9 sm:px-[18px]"
                style={{ boxShadow: GLASS_SHADOW }}
              >
                <span className="h-2 w-2 rounded-full bg-[#ff9a40]" />
                <span className="font-['Outfit',sans-serif] text-[11px] font-semibold uppercase tracking-[1.6px] text-[#ffb36b] sm:text-[12px] sm:tracking-[2px]">
                  Family Growth Platform
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                custom={1}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="relative z-[2] mb-[clamp(14px,1.8vh,22px)] font-['Outfit',sans-serif] text-[34px] font-extrabold leading-[1.04] tracking-[-0.6px] text-[#c3c2ce] sm:text-[clamp(34px,4.4vw,64px)] sm:tracking-[-1.4px]"
              >
                <span className="text-white">Ordinary Moments.</span>
                <br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: HEADLINE_GRADIENT }}
                >
                  Extraordinary
                </span>{" "}
                <span className="text-white">Family.</span>
              </motion.h1>

              {/* Lead */}
              <motion.p
                custom={2}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="relative z-[2] mb-[clamp(18px,2.4vh,30px)] max-w-[640px] text-[14px] font-normal leading-[1.55] text-[#8b8a98] sm:text-[clamp(14px,1.05vw,17px)]"
              >
                No prep. No screen. Just meaningful conversations and real family
                time. Spend just 10 mins a day with simple, age appropriate
                activities designed to build your child&apos;s{" "}
                <span className="text-[#c3c2ce]">
                  emotional strength, resilience, and thinking skills,
                </span>{" "}
                while bridging the gap between Knowing and Doing.
              </motion.p>

              {/* CTAs — preserved routes/functionality */}
              <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="relative z-[2] mb-[30px] flex flex-wrap items-center gap-3 sm:gap-[18px] lg:mb-[clamp(24px,3.4vh,44px)]"
              >
                <BtnPrimary onClick={() => router.push("/download-app")}>
                  Get the App
                </BtnPrimary>
                <BtnSecondary href="#journey">See How It Works →</BtnSecondary>
              </motion.div>

              {/* Stat cards */}
              <motion.div
                custom={4}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="relative z-[1] grid max-w-full grid-cols-2 gap-3 sm:gap-[22px] lg:max-w-[720px] lg:grid-cols-4"
              >
                {STATS.map((s) => (
                  <div
                    key={s.label}
                    className="group relative z-[1] grid h-[168px] grid-rows-[44px_1fr_auto_auto] overflow-hidden rounded-[20px] border border-white/30 bg-white/[0.07] p-[14px_12px_16px] backdrop-blur-[23px] transition-[transform,border-color,box-shadow] duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:scale-[1.025] hover:border-white/[0.48] sm:p-[18px_16px_20px] lg:h-[clamp(180px,21vh,200px)]"
                    style={{
                      boxShadow: GLASS_SHADOW,
                    }}
                  >
                    <GlassEdgeTop />
                    <GlassEdgeLeft />
                    <div
                      className="row-start-1 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center self-start rounded-[22px] text-[16px] text-white backdrop-blur-[10px] transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 sm:h-11 sm:w-11 sm:text-[18px]"
                      style={{
                        background: s.badgeBg,
                        border: `1px solid ${s.badgeStroke}`,
                        boxShadow: `inset 0 1px 0 ${s.badgeInset}, inset 0 -1px 0 rgba(255,255,255,0.08), 0 4px 14px rgba(0,0,0,0.20)`,
                      }}
                    >
                      {s.badge}
                    </div>
                    <div
                      className="row-start-3 mb-2 min-h-[26px] self-end text-[22px] font-semibold leading-none sm:min-h-[30px] sm:text-[24px]"
                      style={{ color: s.numColor }}
                    >
                      {s.num}
                    </div>
                    <div className="row-start-4 min-h-[36px] self-start text-[13px] font-normal leading-[1.4] text-[#c3c2ce] sm:min-h-[40px] sm:text-[14px]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — testimonials only (mascot is flush to section) */}
            <motion.div
              custom={5}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="relative mx-auto h-full min-h-[340px] w-full max-w-[620px] sm:min-h-[420px] lg:mx-0 lg:min-h-[clamp(360px,50vh,460px)] lg:max-w-none"
            >
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.initial}
                  className={`group absolute z-[3] flex w-[84%] flex-col gap-2 rounded-[20px] border border-white/30 bg-white/[0.07] p-[14px_16px_16px] backdrop-blur-[23px] transition-colors duration-700 hover:border-white/40 hover:[animation-play-state:paused] sm:w-[clamp(260px,24vw,310px)] sm:gap-2.5 sm:p-[16px_18px_18px] ${t.posClass}`}
                  style={{
                    boxShadow: GLASS_SHADOW,
                    animation: `card-float ${t.duration} ease-in-out infinite`,
                    animationDelay: t.delay,
                    willChange: "transform",
                  }}
                >
                  <GlassEdgeTop />
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[18px] font-['Outfit',sans-serif] text-[15px] font-bold text-white"
                      style={{ background: t.avaBg }}
                    >
                      {t.initial}
                    </span>
                    <div className="text-[13px] leading-none tracking-[1.6px] text-[#ffb36b]">
                      ★★★★★
                    </div>
                  </div>
                  <p className="m-0 text-[14px] font-medium leading-[1.45] text-white">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="m-0 text-[12.5px] font-normal text-[#8b8a98]">
                    {t.author}
                  </p>
                  <span
                    className="absolute -right-3 -top-3.5 z-[4] inline-flex h-[34px] w-[34px] items-center justify-center rounded-[17px] text-[15px] text-white backdrop-blur-[10px] transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    style={{
                      background: t.iconBg,
                      border: `1px solid ${t.iconStroke}`,
                      boxShadow: `inset 0 1px 0 ${t.iconInset}, inset 0 -1px 0 rgba(255,255,255,0.08), 0 4px 14px rgba(0,0,0,0.22)`,
                    }}
                  >
                    {t.icon}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}