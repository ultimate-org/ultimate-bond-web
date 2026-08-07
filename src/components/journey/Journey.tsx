// // // "use client";

// // // import Image from "next/image";
// // // import { motion } from "framer-motion";
// // // import { containerClass } from "@/components/ui/UI";

// // // const STEPS = [
// // //   {
// // //     icon: "🎯",
// // //     title: "Assess & Place",
// // //     body: "Every learner starts with a skill assessment so we place them at exactly the right level — no wasted time, no gaps.",
// // //   },
// // //   {
// // //     icon: "🛠️",
// // //     title: "Build Real Projects",
// // //     body: "Hands-on projects from day one. Students don't just read about code — they write it, break it, and fix it.",
// // //   },
// // //   {
// // //     icon: "🧑‍🏫",
// // //     title: "Live Mentor Sessions",
// // //     body: "Weekly live sessions with industry professionals who review work, answer questions and push students further.",
// // //   },
// // //   {
// // //     icon: "🏆",
// // //     title: "Earn & Showcase",
// // //     body: "Certificates, portfolio projects and peer recognition that students can share with colleges and employers.",
// // //   },
// // // ];

// // // const FUEL_PCT = 60; // update to your real progress value

// // // export default function Journey() {
// // //   return (
// // //     <section id="journey" className="py-[100px] relative z-[1] bg-[#04060f]">
// // //       <div className={containerClass}>

// // //         {/* .journey-intro */}
// // //         <div className="text-center max-w-[700px] mx-auto mb-16">
// // //           <h2
// // //             className="text-white font-black leading-[1.15] tracking-[-0.03em] mb-4"
// // //             style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontFamily: "'Rubik', sans-serif" }}
// // //           >
// // //             {/* YOUR HEADLINE */}
// // //           </h2>
// // //           <p className="text-[#9ca3af] text-[1rem] leading-[1.8] font-light">
// // //             {/* YOUR SUBTEXT */}
// // //           </p>
// // //         </div>

// // //         {/* .journey-layout — 1fr 1fr */}
// // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

// // //           {/* LEFT — context + fuel bar */}
// // //           <div>

// // //             {/* .journey-narrative */}
// // //             <div className="mb-8">
// // //               <h3
// // //                 className="text-white font-black text-[1.3rem] tracking-[-0.01em] mb-3"
// // //                 style={{ fontFamily: "'Rubik', sans-serif" }}
// // //               >
// // //                 {/* YOUR NARRATIVE HEADING */}
// // //               </h3>
// // //               <p className="text-[#9ca3af] text-[0.9rem] leading-[1.8] font-light mb-4">
// // //                 {/* YOUR NARRATIVE BODY */}
// // //               </p>
// // //             </div>

// // //             {/* journey steps */}
// // //             <div>
// // //               {STEPS.map((step, i) => (
// // //                 <motion.div
// // //                   key={step.title}
// // //                   initial={{ opacity: 0, x: -20 }}
// // //                   whileInView={{ opacity: 1, x: 0 }}
// // //                   viewport={{ once: true, amount: 0.2 }}
// // //                   transition={{ duration: 0.4, delay: i * 0.1 }}
// // //                   /* .journey-step */
// // //                   className={`flex gap-4 py-[0.9rem] items-start ${
// // //                     i < STEPS.length - 1 ? "border-b border-white/[0.08]" : ""
// // //                   }`}
// // //                 >
// // //                   {/* .jstep-icon */}
// // //                   <div
// // //                     className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-[0.9rem]"
// // //                     style={{
// // //                       background: "rgba(249,115,22,0.08)",
// // //                       border: "1px solid rgba(249,115,22,0.25)",
// // //                     }}
// // //                   >
// // //                     {step.icon}
// // //                   </div>

// // //                   {/* .jstep-text */}
// // //                   <div>
// // //                     <h4 className="text-white font-bold text-[0.88rem] mb-0.5">{step.title}</h4>
// // //                     <p className="text-[#9ca3af] text-[0.8rem] leading-[1.5] font-light">{step.body}</p>
// // //                   </div>
// // //                 </motion.div>
// // //               ))}
// // //             </div>

// // //             {/* .fuel-section */}
// // //             <motion.div
// // //               initial={{ opacity: 0, y: 16 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               viewport={{ once: true, amount: 0.3 }}
// // //               transition={{ duration: 0.45, delay: 0.4 }}
// // //               className="mt-6 bg-[#0a0e1f] border border-white/[0.08] rounded-[20px] px-8 py-7"
// // //             >
// // //               {/* .fuel-header */}
// // //               <div className="flex justify-between items-center mb-3">
// // //                 <span className="text-[#9ca3af] text-[0.85rem] font-medium">Learning Progress</span>
// // //                 <span
// // //                   className="text-[1.1rem] font-black text-[#f97316]"
// // //                   style={{ fontFamily: "'Rubik', sans-serif" }}
// // //                 >
// // //                   {FUEL_PCT}%
// // //                 </span>
// // //               </div>

// // //               {/* .fuel-bar */}
// // //               <div className="h-2.5 bg-[#04060f] rounded-full overflow-visible mb-4 relative">
// // //                 {/* .fuel-fill */}
// // //                 <motion.div
// // //                   initial={{ width: 0 }}
// // //                   whileInView={{ width: `${FUEL_PCT}%` }}
// // //                   viewport={{ once: true }}
// // //                   transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
// // //                   className="h-full rounded-full relative"
// // //                   style={{
// // //                     background: "linear-gradient(90deg, rgba(249,115,22,0.6), #f97316)",
// // //                     boxShadow: "0 0 12px rgba(249,115,22,0.4)",
// // //                   }}
// // //                 >
// // //                   {/* rocket emoji at tip — ::after */}
// // //                   <span className="absolute -right-3 top-1/2 -translate-y-1/2 text-[1rem] leading-none">
// // //                     🚀
// // //                   </span>
// // //                 </motion.div>
// // //               </div>

// // //               {/* .milestones-meta */}
// // //               <div className="flex flex-wrap gap-5 text-[0.8rem] text-[#9ca3af]">
// // //                 <span><strong className="text-white">120+</strong> Hours of content</span>
// // //                 <span><strong className="text-white">24</strong> Projects built</span>
// // //                 <span><strong className="text-white">3</strong> Certifications earned</span>
// // //               </div>
// // //             </motion.div>
// // //           </div>

// // //           {/* RIGHT — .journey-phones */}
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 24 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true, amount: 0.2 }}
// // //             transition={{ duration: 0.6, delay: 0.2 }}
// // //             className="flex flex-col items-center justify-center"
// // //           >
// // //             {/* .journey-phones-img — replace src with your app screenshot */}
// // //             <Image
// // //               src="/app-screenshot.png"
// // //               alt="App screenshot"
// // //               width={540}
// // //               height={900}
// // //               className="w-full max-w-[540px]"
// // //               style={{
// // //                 filter:
// // //                   "drop-shadow(0 30px 60px rgba(0,0,0,0.7)) drop-shadow(0 0 40px rgba(249,115,22,0.12))",
// // //                 animation: "phoneFloat 4s ease-in-out infinite",
// // //               }}
// // //             />

// // //             {/* .phone-label */}
// // //             <p className="text-center mt-3 text-[0.72rem] text-[#9ca3af] font-medium tracking-[0.03em]">
// // //               {/* YOUR APP LABEL */}
// // //             </p>
// // //           </motion.div>

// // //         </div>
// // //       </div>

// // //       <style>{`
// // //         @keyframes phoneFloat {
// // //           0%, 100% { transform: translateY(0); }
// // //           50%       { transform: translateY(-10px); }
// // //         }
// // //       `}</style>
// // //     </section>
// // //   );
// // // }



// // "use client";

// // import { useRef } from "react";
// // import { motion, useInView } from "framer-motion";
// // import Image from "next/image";
// // import { containerClass } from "@/components/ui/UI";

// // /* ── data ── */
// // const STEPS = [
// //   {
// //     icon: "🚀",
// //     heading: "Start at Pathfinder",
// //     body: "Your launch pad. Complete deeds across Activities, Stories, Challenges, WonderChat & more to fill your fuel tank.",
// //   },
// //   {
// //     icon: "⛽",
// //     heading: "Each Deed = Fuel",
// //     body: "Every completed deed adds fuel. When your tank hits 100%, your family rockets to the next milestone — Explorer, Navigator, Bond Builder and beyond.",
// //   },
// //   {
// //     icon: "🌍",
// //     heading: "20+ Milestones Across the Year",
// //     body: "Each milestone unlocks new features, harder challenges, and deeper bonding experiences. The journey never truly ends — like space itself.",
// //   },
// //   {
// //     icon: "🔓",
// //     heading: "Deeds Unlock Inside Each Milestone",
// //     body: "Tap any active milestone to see your deed grid — Activities, Stories, Read-O-Meter, Challenges, KYC, WonderChat, Wordle and more.",
// //   },
// // ];

// // const KEYFRAMES = `
// // @keyframes phoneFloat {
// //   0%,100% { transform: translateY(0); }
// //   50%      { transform: translateY(-10px); }
// // }
// // `;

// // export default function Journey() {
// //   const fuelRef = useRef<HTMLDivElement>(null);
// //   const inView = useInView(fuelRef, { once: true, amount: 0.4 });

// //   return (
// //     <section id="journey" className="py-[100px] relative z-[1] bg-[#04060f]">
// //       <style>{KEYFRAMES}</style>

// //       <div className={containerClass}>

// //         {/* .journey-intro.reveal */}
// //         <div className="text-center max-w-[700px] mx-auto mb-16">
// //           <span
// //             className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 mb-4 text-[0.75rem] font-bold tracking-[0.06em] uppercase text-[#f97316]"
// //             style={{
// //               background: "rgba(249,115,22,0.1)",
// //               border: "1px solid rgba(249,115,22,0.25)",
// //               fontFamily: "'Rubik', sans-serif",
// //             }}
// //           >
// //             The Space Journey
// //           </span>

// //           <h2
// //             className="text-white font-black leading-[1.2] tracking-[-0.03em] mb-4"
// //             style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontFamily: "'Rubik', sans-serif" }}
// //           >
// //             Every Deed Is Fuel.
// //             <br />
// //             Every Milestone Is a New Planet.
// //           </h2>

// //           <p className="text-[#9ca3af] text-[1rem] leading-[1.8] font-light">
// //             Your family embarks on a year-long cosmic journey through 20+ milestones. Complete
// //             daily deeds and watch your fuel tank fill up. When full, your family rockets to the
// //             next planet — marking real, measurable growth in your child and in you as a caregiver.
// //           </p>
// //         </div>

// //         {/* .journey-layout.reveal — 2-col lg */}
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

// //           {/* ── LEFT: narrative + steps + fuel ── */}
// //           <div>

// //             {/* .journey-narrative */}
// //             <div className="mb-8">
// //               <h3
// //                 className="text-white font-black text-[1.3rem] tracking-[-0.01em] mb-3"
// //                 style={{ fontFamily: "'Rubik', sans-serif" }}
// //               >
// //                 How the Journey Works
// //               </h3>
// //               <p className="text-[#9ca3af] text-[0.9rem] leading-[1.8] font-light">
// //                 The app shows your milestones as a vertical cosmic map — a rocket at the base,
// //                 each milestone stacked above like planets waiting to be reached. The further up
// //                 you go, the deeper your family bond grows.
// //               </p>
// //             </div>

// //             {/* .journey-step × 4 */}
// //             {STEPS.map((step, i) => (
// //               <motion.div
// //                 key={step.heading}
// //                 initial={{ opacity: 0, x: -14 }}
// //                 whileInView={{ opacity: 1, x: 0 }}
// //                 viewport={{ once: true, amount: 0.2 }}
// //                 transition={{ duration: 0.4, delay: i * 0.08 }}
// //                 className="flex gap-4 py-3.5 items-start border-b border-white/[0.08] last:border-b-0"
// //               >
// //                 {/* .jstep-icon */}
// //                 <div
// //                   className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-[0.9rem]"
// //                   style={{
// //                     background: "rgba(249,115,22,0.08)",
// //                     border: "1px solid rgba(249,115,22,0.25)",
// //                   }}
// //                 >
// //                   {step.icon}
// //                 </div>

// //                 {/* .jstep-text */}
// //                 <div>
// //                   <h4 className="text-white font-bold text-[0.88rem] mb-1">{step.heading}</h4>
// //                   <p className="text-[#9ca3af] text-[0.8rem] leading-[1.5] font-light">{step.body}</p>
// //                 </div>
// //               </motion.div>
// //             ))}

// //             {/* .fuel-section */}
// //             <motion.div
// //               ref={fuelRef}
// //               initial={{ opacity: 0, y: 16 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.45, delay: 0.3 }}
// //               className="mt-6 rounded-[20px] px-8 py-7"
// //               style={{
// //                 background: "#0a0e1f",
// //                 border: "1px solid rgba(255,255,255,0.08)",
// //               }}
// //             >
// //               {/* .fuel-header */}
// //               <div className="flex justify-between items-center mb-3">
// //                 <span className="text-[#9ca3af] font-medium text-[0.85rem]">
// //                   🛸 Current Family Progress
// //                 </span>
// //                 <span
// //                   className="font-black text-[1.1rem] text-[#f97316]"
// //                   style={{ fontFamily: "'Rubik', sans-serif" }}
// //                 >
// //                   60% fuelled
// //                 </span>
// //               </div>

// //               {/* .fuel-bar */}
// //               <div className="h-[10px] rounded-full overflow-hidden mb-4 bg-[#04060f]">
// //                 <motion.div
// //                   className="h-full rounded-full relative"
// //                   style={{
// //                     background: "linear-gradient(90deg, rgba(249,115,22,0.6), #f97316)",
// //                     boxShadow: "0 0 12px rgba(249,115,22,0.08)",
// //                   }}
// //                   initial={{ width: "0%" }}
// //                   animate={{ width: inView ? "60%" : "0%" }}
// //                   transition={{ duration: 1.2, ease: "easeOut" }}
// //                 >
// //                   <span className="absolute right-[-10px] top-1/2 -translate-y-1/2 text-base">
// //                     🚀
// //                   </span>
// //                 </motion.div>
// //               </div>

// //               {/* .milestones-meta */}
// //               <div className="flex flex-wrap gap-5 text-[0.8rem] text-[#9ca3af]">
// //                 <span>Active: <strong className="text-white">Pathfinder</strong></span>
// //                 <span>Deeds: <strong className="text-white">6 / 10</strong></span>
// //                 <span>Next: <strong className="text-white">Explorer</strong></span>
// //                 <span>Journey: <strong className="text-white">20+ milestones</strong></span>
// //               </div>
// //             </motion.div>
// //           </div>

// //           {/* ── RIGHT: app screenshot ── */}
// //           <div className="flex justify-center items-start">
// //             <div className="w-full max-w-[540px]">
// //               <Image
// //                 src="/mobile_frames.png"
// //                 alt="UltiMate App — Home Journey & Pathfinder Screens"
// //                 width={540}
// //                 height={900}
// //                 className="w-full h-auto"
// //                 style={{
// //                   filter:
// //                     "drop-shadow(0 30px 60px rgba(0,0,0,0.7)) drop-shadow(0 0 40px rgba(249,115,22,0.12))",
// //                   animation: "phoneFloat 4s ease-in-out infinite",
// //                 }}
// //               />
// //               {/* .phone-label */}
// //               <p className="text-center mt-3 text-[0.72rem] text-[#9ca3af] font-medium tracking-[0.03em]">
// //                 Milestone Journey Map
// //               </p>
// //             </div>
// //           </div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// "use client";

// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import Image from "next/image";
// import { containerClass } from "@/components/ui/UI";

// /* ── data ── */
// const STEPS = [
//   {
//     icon: "🚀",
//     heading: "Start at Pathfinder",
//     body: "Your launch pad. Complete deeds across Activities, Stories, Challenges, WonderChat & more to fill your fuel tank.",
//   },
//   {
//     icon: "⛽",
//     heading: "Each Deed = Fuel",
//     body: "Every completed deed adds fuel. When your tank hits 100%, your family rockets to the next milestone — Explorer, Navigator, Bond Builder and beyond.",
//   },
//   {
//     icon: "🌍",
//     heading: "20+ Milestones Across the Year",
//     body: "Each milestone unlocks new features, harder challenges, and deeper bonding experiences. The journey never truly ends — like space itself.",
//   },
//   {
//     icon: "🔓",
//     heading: "Deeds Unlock Inside Each Milestone",
//     body: "Tap any active milestone to see your deed grid — Activities, Stories, Read-O-Meter, Challenges, KYC, WonderChat, Wordle and more.",
//   },
// ];

// const KEYFRAMES = `
// @keyframes phoneFloat {
//   0%,100% { transform: translateY(0); }
//   50%      { transform: translateY(-10px); }
// }
// `;

// export default function Journey() {
//   const fuelRef = useRef<HTMLDivElement>(null);
//   const inView = useInView(fuelRef, { once: true, amount: 0.4 });

//   return (
//     <section id="journey" className="py-[100px] relative z-[1]">
//       <style>{KEYFRAMES}</style>

//       <div className={containerClass}>

//         {/* .journey-intro.reveal */}
//         <div className="text-center max-w-[700px] mx-auto mb-16">
//           <span
//             className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 mb-4 text-[0.75rem] font-bold tracking-[0.06em] uppercase text-[#f97316]"
//             style={{
//               background: "rgba(249,115,22,0.1)",
//               border: "1px solid rgba(249,115,22,0.25)",
//               fontFamily: "'Rubik', sans-serif",
//             }}
//           >
//             The Space Journey
//           </span>

//           <h2
//             className="text-white font-black leading-[1.2] tracking-[-0.03em] mb-4"
//             style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontFamily: "'Rubik', sans-serif" }}
//           >
//             Every Deed Is Fuel.
//             <br />
//             Every Milestone Is a New Planet.
//           </h2>

//           <p className="text-[#9ca3af] text-[1rem] leading-[1.8] font-light">
//             Your family embarks on a year-long cosmic journey through 20+ milestones. Complete
//             daily deeds and watch your fuel tank fill up. When full, your family rockets to the
//             next planet — marking real, measurable growth in your child and in you as a caregiver.
//           </p>
//         </div>

//         {/* .journey-layout.reveal — 2-col lg */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

//           {/* ── LEFT: narrative + steps + fuel ── */}
//           <div>

//             {/* .journey-narrative */}
//             <div className="mb-8">
//               <h3
//                 className="text-white font-black text-[1.3rem] tracking-[-0.01em] mb-3"
//                 style={{ fontFamily: "'Rubik', sans-serif" }}
//               >
//                 How the Journey Works
//               </h3>
//               <p className="text-[#9ca3af] text-[0.9rem] leading-[1.8] font-light">
//                 The app shows your milestones as a vertical cosmic map — a rocket at the base,
//                 each milestone stacked above like planets waiting to be reached. The further up
//                 you go, the deeper your family bond grows.
//               </p>
//             </div>

//             {/* .journey-step × 4 */}
//             {STEPS.map((step, i) => (
//               <motion.div
//                 key={step.heading}
//                 initial={{ opacity: 0, x: -14 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true, amount: 0.2 }}
//                 transition={{ duration: 0.4, delay: i * 0.08 }}
//                 className="flex gap-4 py-3.5 items-start border-b border-white/[0.08] last:border-b-0"
//               >
//                 {/* .jstep-icon */}
//                 <div
//                   className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-[0.9rem]"
//                   style={{
//                     background: "rgba(249,115,22,0.08)",
//                     border: "1px solid rgba(249,115,22,0.25)",
//                   }}
//                 >
//                   {step.icon}
//                 </div>

//                 {/* .jstep-text */}
//                 <div>
//                   <h4 className="text-white font-bold text-[0.88rem] mb-1">{step.heading}</h4>
//                   <p className="text-[#9ca3af] text-[0.8rem] leading-[1.5] font-light">{step.body}</p>
//                 </div>
//               </motion.div>
//             ))}

//             {/* .fuel-section */}
//             <motion.div
//               ref={fuelRef}
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.45, delay: 0.3 }}
//               className="mt-6 rounded-[20px] px-8 py-7"
//               style={{
//                 background: "#0a0e1f",
//                 border: "1px solid rgba(255,255,255,0.08)",
//               }}
//             >
//               {/* .fuel-header */}
//               <div className="flex justify-between items-center mb-3">
//                 <span className="text-[#9ca3af] font-medium text-[0.85rem]">
//                   🛸 Current Family Progress
//                 </span>
//                 <span
//                   className="font-black text-[1.1rem] text-[#f97316]"
//                   style={{ fontFamily: "'Rubik', sans-serif" }}
//                 >
//                   60% fuelled
//                 </span>
//               </div>

//               {/* .fuel-bar */}
//               <div className="h-[10px] rounded-full overflow-hidden mb-4 bg-[#04060f]">
//                 <motion.div
//                   className="h-full rounded-full relative"
//                   style={{
//                     background: "linear-gradient(90deg, rgba(249,115,22,0.6), #f97316)",
//                     boxShadow: "0 0 12px rgba(249,115,22,0.08)",
//                   }}
//                   initial={{ width: "0%" }}
//                   animate={{ width: inView ? "60%" : "0%" }}
//                   transition={{ duration: 1.2, ease: "easeOut" }}
//                 >
//                   <span className="absolute right-[-10px] top-1/2 -translate-y-1/2 text-base">
//                     🚀
//                   </span>
//                 </motion.div>
//               </div>

//               {/* .milestones-meta */}
//               <div className="flex flex-wrap gap-5 text-[0.8rem] text-[#9ca3af]">
//                 <span>Active: <strong className="text-white">Pathfinder</strong></span>
//                 <span>Deeds: <strong className="text-white">6 / 10</strong></span>
//                 <span>Next: <strong className="text-white">Explorer</strong></span>
//                 <span>Journey: <strong className="text-white">20+ milestones</strong></span>
//               </div>
//             </motion.div>
//           </div>

//           {/* ── RIGHT: app screenshot ── */}
//           <div className="flex justify-center items-start">
//             <div className="w-full max-w-[540px]">
//               <Image
//                 src="/images/mobile-frames.png"
//                 alt="UltiMate App — Home Journey & Pathfinder Screens"
//                 width={540}
//                 height={900}
//                 className="w-full h-auto"
//                 style={{
//                   filter:
//                     "drop-shadow(0 30px 60px rgba(0,0,0,0.7)) drop-shadow(0 0 40px rgba(249,115,22,0.12))",
//                   animation: "phoneFloat 4s ease-in-out infinite",
//                 }}
//               />
//               {/* .phone-label */}
//               <p className="text-center mt-3 text-[0.72rem] text-[#9ca3af] font-medium tracking-[0.03em]">
//                 Milestone Journey Map
//               </p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

/**
 * Journey — "The Space Journey / Every Deed Is Fuel"
 *
 * CLIENT COMPONENT — required: the scroll-pinned timeline needs
 * scroll listeners + getBoundingClientRect (no server equivalent).
 *
 * Scroll timeline (while the section is pinned):
 *   0.08–0.32  phase-1 boxes IN   (Locked Planets + The Rocket)
 *   0.40–0.60  phone crossfades   (home map -> deeds page)
 *   0.52–0.72  phase-1 boxes OUT
 *   0.58–0.82  phase-2 boxes IN   (Your Journey + Fuel Gauge)
 *   0.82–1.00  settled, still pinned
 *
 * ⚠️ IMPORTANT: position:sticky breaks if ANY ancestor has overflow-x:hidden.
 * Use `overflow-x: clip` on html/body instead (see note at the bottom).
 *
 * Images: swap the two placeholder paths under /images/journey/.
 */

import { useEffect, useRef, useState } from "react";

const IMG_BASE = "/images/journey";

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
// smoothstep
const smooth = (a: number, b: number, x: number) => {
  const t = clamp((x - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
};

type BoxData = {
  key: string;
  eyebrow: string;
  title: string;
  desc: React.ReactNode;
  icon: React.ReactNode;
};

export default function Journey() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const homeRef = useRef<HTMLImageElement | null>(null);
  const deedsRef = useRef<HTMLImageElement | null>(null);

  const boxJourney = useRef<HTMLDivElement | null>(null);
  const boxRocket = useRef<HTMLDivElement | null>(null);
  const boxLocked = useRef<HTMLDivElement | null>(null);
  const boxFuel = useRef<HTMLDivElement | null>(null);

  // if the deeds screenshot fails to load, keep showing home (no blank phone)
  const deedsReady = useRef(true);
  const [, setDeedsError] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const applyBox = (
      el: HTMLDivElement | null,
      opacity: number,
      slide: number
    ) => {
      if (!el) return;
      el.style.opacity = clamp(opacity, 0, 1).toFixed(3);
      el.style.transform = `translateX(${slide.toFixed(1)}px)`;
    };

    const isDesktop = () => window.innerWidth > 1040;

    const update = () => {
      const home = homeRef.current;
      const deeds = deedsRef.current;

      // Stacked layout (<=1040px): no pin, everything visible, home screen shown
      if (!isDesktop()) {
        [boxJourney, boxRocket, boxLocked, boxFuel].forEach((r) => {
          if (r.current) {
            r.current.style.opacity = "";
            r.current.style.transform = "";
          }
        });
        if (home) home.style.opacity = "";
        if (deeds) deeds.style.opacity = deedsReady.current ? "" : "0";
        return;
      }

      const rect = section.getBoundingClientRect();
      const total = section.offsetHeight - window.innerHeight;
      const p = total > 0 ? clamp(-rect.top / total, 0, 1) : 0;

      // Phase 1: in, hold, out
      const in1 = smooth(0.08, 0.32, p);
      const out1 = smooth(0.52, 0.72, p);
      const op1 = in1 * (1 - out1);
      const mv1 = 1 - in1 + out1;
      applyBox(boxLocked.current, op1, 26 * mv1); // right
      applyBox(boxRocket.current, op1, -26 * mv1); // left

      // Phase 2: in
      const in2 = smooth(0.58, 0.82, p);
      applyBox(boxJourney.current, in2, -26 * (1 - in2)); // left
      applyBox(boxFuel.current, in2, 26 * (1 - in2)); // right

      // Phone crossfade
      const tCross = smooth(0.4, 0.6, p);
      if (deedsReady.current) {
        if (home) home.style.opacity = (1 - tCross).toFixed(3);
        if (deeds) deeds.style.opacity = tCross.toFixed(3);
      } else {
        if (home) home.style.opacity = "1";
        if (deeds) deeds.style.opacity = "0";
      }
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          update();
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  const LEFT: BoxData[] = [
    {
      key: "journey",
      eyebrow: "Your journey",
      title: "Made for you, the parent",
      desc: (
        <>
          The whole map tracks <i>your</i> growth as a parent — not a score, a
          story.
        </>
      ),
      icon: <IconMap />,
    },
    {
      key: "rocket",
      eyebrow: "The rocket",
      title: "You're on the move",
      desc: "Your rocket climbs the flight path as milestones are completed.",
      icon: <IconRocket />,
    },
  ];

  const RIGHT: BoxData[] = [
    {
      key: "locked",
      eyebrow: "Locked planets",
      title: "20+ milestones ahead",
      desc: "Explorer, Navigator, Bond Builder and beyond unlock one launch at a time.",
      icon: <IconLock />,
    },
    {
      key: "fuel",
      eyebrow: "Fuel gauge",
      title: "Deeds fill the tank",
      desc: "Each small daily deed adds fuel. Reach 100% to launch to the next planet.",
      icon: <IconGauge />,
    },
  ];

  const boxRefFor = (key: string) =>
    key === "journey"
      ? boxJourney
      : key === "rocket"
      ? boxRocket
      : key === "locked"
      ? boxLocked
      : boxFuel;

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="jn relative h-[230vh] w-full font-['Poppins',sans-serif] antialiased max-[1040px]:h-auto"
      style={{ background: "var(--site-page-bg)", color: "var(--site-text)" }}
    >
      {/* Pinned viewport */}
      <div className="jn-pin sticky top-0 flex h-screen flex-col items-center justify-center gap-[clamp(44px,7vh,92px)] overflow-hidden px-[clamp(20px,4vw,48px)] py-[clamp(16px,3vh,40px)] max-[1040px]:static max-[1040px]:h-auto max-[1040px]:gap-[34px] max-[1040px]:px-[clamp(20px,4vw,48px)] max-[1040px]:py-[clamp(48px,7vw,90px)]">
        {/* Header */}
        <div className="relative z-[2] flex max-w-[820px] flex-col items-center gap-3.5 text-center">
          <div
            className="inline-flex h-[34px] items-center gap-2.5 rounded-full border-[1.029px] px-[18px] shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]"
            style={{ borderColor: "var(--site-pill-border)", background: "var(--site-pill-bg)" }}
          >
            <span className="h-[7px] w-[7px] rounded-full bg-[#ff9a40] shadow-[0_0_8px_#ff9a40]" />
            <span
              className="font-['Outfit',sans-serif] text-[12px] font-semibold uppercase tracking-[1.97px]"
              style={{ color: "var(--site-pill-text)" }}
            >
              The Space Journey
            </span>
          </div>

          <h2
            className="font-['Outfit',sans-serif] text-[clamp(28px,3.6vw,46px)] font-extrabold leading-[1.04] tracking-[-1.1px]"
            style={{ color: "var(--site-heading)" }}
          >
            Every Deed Is <GradText>Fuel.</GradText>
            <br />
            Every Milestone Is a <GradText>New Planet.</GradText>
          </h2>

          <p
            className="max-w-[640px] text-[clamp(14px,1.2vw,17px)] font-normal leading-[1.55]"
            style={{ color: "var(--site-text-muted)" }}
          >
            The moment you open Ulti-Mate, your child&apos;s growth becomes a map
            of the stars. Here&apos;s how every part of it works.
          </p>
        </div>

        {/* Stage: [left col][phone][right col] */}
        <div className="relative z-[1] flex items-center justify-center gap-[clamp(14px,2.4vw,54px)] max-[1040px]:flex-col max-[1040px]:gap-8">
          {/* LEFT column */}
          <div className="col-left flex flex-col justify-center gap-[clamp(70px,16vh,190px)] max-[1040px]:flex-row max-[1040px]:flex-wrap max-[1040px]:justify-center max-[1040px]:gap-[18px] max-[640px]:flex-col">
            {LEFT.map((b) => (
              <Box key={b.key} data={b} innerRef={boxRefFor(b.key)} side="left" />
            ))}
          </div>

          {/* Phone */}
          <div className="ph relative flex-none max-[1040px]:order-first">
            <div className="relative h-full w-full overflow-hidden rounded-[40px] bg-[#08080b]">
              <img
                ref={homeRef}
                src={`${IMG_BASE}/home.webp`}
                alt="Ulti-Mate home — space journey map"
                className="absolute inset-0 h-full w-full rounded-[40px] object-cover"
              />
              <img
                ref={deedsRef}
                src={`${IMG_BASE}/deed.webp`}
                alt="Ulti-Mate deeds page"
                className="absolute inset-0 h-full w-full rounded-[40px] object-cover opacity-0"
                onError={() => {
                  deedsReady.current = false;
                  setDeedsError(true);
                }}
              />
            </div>
          </div>

          {/* RIGHT column */}
          <div className="col-right flex flex-col justify-center gap-[clamp(70px,16vh,190px)] max-[1040px]:flex-row max-[1040px]:flex-wrap max-[1040px]:justify-center max-[1040px]:gap-[18px] max-[640px]:flex-col">
            {RIGHT.map((b) => (
              <Box key={b.key} data={b} innerRef={boxRefFor(b.key)} side="right" />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Warm glow behind the phone */
        .jn-pin::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 56%;
          width: 760px;
          height: 760px;
          transform: translate(-50%, -50%);
          background: radial-gradient(
            circle,
            rgba(255, 122, 24, 0.1) 0%,
            rgba(255, 90, 20, 0.04) 34%,
            transparent 66%
          );
          pointer-events: none;
          z-index: 0;
        }

        /* Phone shell — sized from a height var, floats gently */
        .ph {
          --ph-h: clamp(440px, 63vh, 640px);
          width: calc(var(--ph-h) * 0.462);
          height: var(--ph-h);
          border-radius: 46px;
          padding: 7px;
          border: 1.5px solid rgba(255, 255, 255, 0.21);
          background: linear-gradient(
            90deg,
            #2f2f2f 0%,
            #262626 20%,
            #0d0d0d 50%,
            #3e3e3f 80%,
            #3e3e3e 100%
          );
          box-shadow: 0 54px 140px rgba(0, 0, 0, 0.78),
            0 12px 40px rgba(0, 0, 0, 0.5);
          animation: phfloat 7s ease-in-out infinite;
        }
        @keyframes phfloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        /* Connector line + dot pointing toward the phone (desktop only) */
        .col-left :global(.box)::after,
        .col-right :global(.box)::after {
          content: "";
          position: absolute;
          top: 50%;
          width: 48px;
          height: 1.5px;
        }
        .col-left :global(.box)::after {
          right: -48px;
          background: linear-gradient(
            to right,
            rgba(255, 154, 64, 0.7),
            rgba(255, 154, 64, 0)
          );
        }
        .col-right :global(.box)::after {
          left: -48px;
          background: linear-gradient(
            to left,
            rgba(255, 154, 64, 0.7),
            rgba(255, 154, 64, 0)
          );
        }
        .col-left :global(.box)::before,
        .col-right :global(.box)::before {
          content: "";
          position: absolute;
          top: calc(50% - 3.5px);
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ff9a40;
          box-shadow: 0 0 8px #ff9a40;
          z-index: 1;
        }
        .col-left :global(.box)::before {
          right: -51px;
        }
        .col-right :global(.box)::before {
          left: -51px;
        }

        /* Stacked layout: force boxes visible, kill connectors */
        @media (max-width: 1040px) {
          .col-left :global(.box),
          .col-right :global(.box) {
            opacity: 1 !important;
            transform: none !important;
          }
          .col-left :global(.box)::after,
          .col-right :global(.box)::after,
          .col-left :global(.box)::before,
          .col-right :global(.box)::before {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ph {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

/* ── Sub-components ── */

function GradText({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-[linear-gradient(98.35deg,#FFB13D_0%,#FF7A18_26%,#FF4D8D_64%,#A24BFF_100%)] bg-clip-text text-transparent">
      {children}
    </span>
  );
}

function Box({
  data,
  innerRef,
  side,
}: {
  data: BoxData;
  innerRef: React.RefObject<HTMLDivElement | null>;
  side: "left" | "right";
}) {
  return (
    <div
      ref={innerRef}
      data-side={side}
      className="box relative w-[clamp(196px,15.5vw,220px)] rounded-2xl border border-[var(--site-card-border)] bg-[var(--site-card-bg)] p-[17px] opacity-0 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-[7px] [will-change:opacity,transform] max-[1040px]:w-[min(280px,42vw)] max-[640px]:w-full max-[640px]:max-w-[340px]"
    >
      <div
        className="mb-3.5 flex items-center gap-2 font-['Outfit',sans-serif] text-[10.5px] font-semibold uppercase tracking-[1.26px]"
        style={{ color: "var(--site-pill-text)" }}
      >
        <span className="h-3.5 w-3.5 flex-none text-[#ff9a40]">{data.icon}</span>
        {data.eyebrow}
      </div>
      <div
        className="mb-2.5 font-['Outfit',sans-serif] text-[15.5px] font-bold"
        style={{ color: "var(--site-heading)" }}
      >
        {data.title}
      </div>
      <div
        className="text-[12.5px] font-normal leading-[1.55]"
        style={{ color: "var(--site-text-muted)" }}
      >
        {data.desc}
      </div>
    </div>
  );
}

/* ── Icons ── */

const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "block h-full w-full",
};

function IconMap() {
  return (
    <svg {...svgProps}>
      <path d="M3 7l6-2 6 2 6-2v12l-6 2-6-2-6 2z" />
      <path d="M9 5v12M15 7v12" />
    </svg>
  );
}
function IconRocket() {
  return (
    <svg {...svgProps}>
      <path d="M5 15c-1.4 1.4-1.6 4-1.6 4s2.6-.2 4-1.6" />
      <path d="M15 4c3 1 4.5 3.5 4.5 6.5 0 1.8-2 4-4 6l-3.5 2.5-4-4L14 11.5c2-2 4.2-4 4.5-6.5" />
      <circle cx="14" cy="9" r="1.6" />
    </svg>
  );
}
function IconLock() {
  return (
    <svg {...svgProps}>
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  );
}
function IconGauge() {
  return (
    <svg {...svgProps}>
      <path d="M4 19a8 8 0 1 1 16 0" />
      <path d="M12 12l4-3" />
      <circle cx="12" cy="19" r="1.2" />
    </svg>
  );
}