// // "use client";

// // import Image from "next/image";
// // import { motion } from "framer-motion";
// // import { containerClass } from "@/components/ui/UI";

// // const STEPS = [
// //   {
// //     icon: "🎯",
// //     title: "Assess & Place",
// //     body: "Every learner starts with a skill assessment so we place them at exactly the right level — no wasted time, no gaps.",
// //   },
// //   {
// //     icon: "🛠️",
// //     title: "Build Real Projects",
// //     body: "Hands-on projects from day one. Students don't just read about code — they write it, break it, and fix it.",
// //   },
// //   {
// //     icon: "🧑‍🏫",
// //     title: "Live Mentor Sessions",
// //     body: "Weekly live sessions with industry professionals who review work, answer questions and push students further.",
// //   },
// //   {
// //     icon: "🏆",
// //     title: "Earn & Showcase",
// //     body: "Certificates, portfolio projects and peer recognition that students can share with colleges and employers.",
// //   },
// // ];

// // const FUEL_PCT = 60; // update to your real progress value

// // export default function Journey() {
// //   return (
// //     <section id="journey" className="py-[100px] relative z-[1] bg-[#04060f]">
// //       <div className={containerClass}>

// //         {/* .journey-intro */}
// //         <div className="text-center max-w-[700px] mx-auto mb-16">
// //           <h2
// //             className="text-white font-black leading-[1.15] tracking-[-0.03em] mb-4"
// //             style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontFamily: "'Rubik', sans-serif" }}
// //           >
// //             {/* YOUR HEADLINE */}
// //           </h2>
// //           <p className="text-[#9ca3af] text-[1rem] leading-[1.8] font-light">
// //             {/* YOUR SUBTEXT */}
// //           </p>
// //         </div>

// //         {/* .journey-layout — 1fr 1fr */}
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

// //           {/* LEFT — context + fuel bar */}
// //           <div>

// //             {/* .journey-narrative */}
// //             <div className="mb-8">
// //               <h3
// //                 className="text-white font-black text-[1.3rem] tracking-[-0.01em] mb-3"
// //                 style={{ fontFamily: "'Rubik', sans-serif" }}
// //               >
// //                 {/* YOUR NARRATIVE HEADING */}
// //               </h3>
// //               <p className="text-[#9ca3af] text-[0.9rem] leading-[1.8] font-light mb-4">
// //                 {/* YOUR NARRATIVE BODY */}
// //               </p>
// //             </div>

// //             {/* journey steps */}
// //             <div>
// //               {STEPS.map((step, i) => (
// //                 <motion.div
// //                   key={step.title}
// //                   initial={{ opacity: 0, x: -20 }}
// //                   whileInView={{ opacity: 1, x: 0 }}
// //                   viewport={{ once: true, amount: 0.2 }}
// //                   transition={{ duration: 0.4, delay: i * 0.1 }}
// //                   /* .journey-step */
// //                   className={`flex gap-4 py-[0.9rem] items-start ${
// //                     i < STEPS.length - 1 ? "border-b border-white/[0.08]" : ""
// //                   }`}
// //                 >
// //                   {/* .jstep-icon */}
// //                   <div
// //                     className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-[0.9rem]"
// //                     style={{
// //                       background: "rgba(249,115,22,0.08)",
// //                       border: "1px solid rgba(249,115,22,0.25)",
// //                     }}
// //                   >
// //                     {step.icon}
// //                   </div>

// //                   {/* .jstep-text */}
// //                   <div>
// //                     <h4 className="text-white font-bold text-[0.88rem] mb-0.5">{step.title}</h4>
// //                     <p className="text-[#9ca3af] text-[0.8rem] leading-[1.5] font-light">{step.body}</p>
// //                   </div>
// //                 </motion.div>
// //               ))}
// //             </div>

// //             {/* .fuel-section */}
// //             <motion.div
// //               initial={{ opacity: 0, y: 16 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true, amount: 0.3 }}
// //               transition={{ duration: 0.45, delay: 0.4 }}
// //               className="mt-6 bg-[#0a0e1f] border border-white/[0.08] rounded-[20px] px-8 py-7"
// //             >
// //               {/* .fuel-header */}
// //               <div className="flex justify-between items-center mb-3">
// //                 <span className="text-[#9ca3af] text-[0.85rem] font-medium">Learning Progress</span>
// //                 <span
// //                   className="text-[1.1rem] font-black text-[#f97316]"
// //                   style={{ fontFamily: "'Rubik', sans-serif" }}
// //                 >
// //                   {FUEL_PCT}%
// //                 </span>
// //               </div>

// //               {/* .fuel-bar */}
// //               <div className="h-2.5 bg-[#04060f] rounded-full overflow-visible mb-4 relative">
// //                 {/* .fuel-fill */}
// //                 <motion.div
// //                   initial={{ width: 0 }}
// //                   whileInView={{ width: `${FUEL_PCT}%` }}
// //                   viewport={{ once: true }}
// //                   transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
// //                   className="h-full rounded-full relative"
// //                   style={{
// //                     background: "linear-gradient(90deg, rgba(249,115,22,0.6), #f97316)",
// //                     boxShadow: "0 0 12px rgba(249,115,22,0.4)",
// //                   }}
// //                 >
// //                   {/* rocket emoji at tip — ::after */}
// //                   <span className="absolute -right-3 top-1/2 -translate-y-1/2 text-[1rem] leading-none">
// //                     🚀
// //                   </span>
// //                 </motion.div>
// //               </div>

// //               {/* .milestones-meta */}
// //               <div className="flex flex-wrap gap-5 text-[0.8rem] text-[#9ca3af]">
// //                 <span><strong className="text-white">120+</strong> Hours of content</span>
// //                 <span><strong className="text-white">24</strong> Projects built</span>
// //                 <span><strong className="text-white">3</strong> Certifications earned</span>
// //               </div>
// //             </motion.div>
// //           </div>

// //           {/* RIGHT — .journey-phones */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 24 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true, amount: 0.2 }}
// //             transition={{ duration: 0.6, delay: 0.2 }}
// //             className="flex flex-col items-center justify-center"
// //           >
// //             {/* .journey-phones-img — replace src with your app screenshot */}
// //             <Image
// //               src="/app-screenshot.png"
// //               alt="App screenshot"
// //               width={540}
// //               height={900}
// //               className="w-full max-w-[540px]"
// //               style={{
// //                 filter:
// //                   "drop-shadow(0 30px 60px rgba(0,0,0,0.7)) drop-shadow(0 0 40px rgba(249,115,22,0.12))",
// //                 animation: "phoneFloat 4s ease-in-out infinite",
// //               }}
// //             />

// //             {/* .phone-label */}
// //             <p className="text-center mt-3 text-[0.72rem] text-[#9ca3af] font-medium tracking-[0.03em]">
// //               {/* YOUR APP LABEL */}
// //             </p>
// //           </motion.div>

// //         </div>
// //       </div>

// //       <style>{`
// //         @keyframes phoneFloat {
// //           0%, 100% { transform: translateY(0); }
// //           50%       { transform: translateY(-10px); }
// //         }
// //       `}</style>
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
//     <section id="journey" className="py-[100px] relative z-[1] bg-[#04060f]">
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
//                 src="/mobile_frames.png"
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

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { containerClass } from "@/components/ui/UI";

/* ── data ── */
const STEPS = [
  {
    icon: "🚀",
    heading: "Start at Pathfinder",
    body: "Your launch pad. Complete deeds across Activities, Stories, Challenges, WonderChat & more to fill your fuel tank.",
  },
  {
    icon: "⛽",
    heading: "Each Deed = Fuel",
    body: "Every completed deed adds fuel. When your tank hits 100%, your family rockets to the next milestone — Explorer, Navigator, Bond Builder and beyond.",
  },
  {
    icon: "🌍",
    heading: "20+ Milestones Across the Year",
    body: "Each milestone unlocks new features, harder challenges, and deeper bonding experiences. The journey never truly ends — like space itself.",
  },
  {
    icon: "🔓",
    heading: "Deeds Unlock Inside Each Milestone",
    body: "Tap any active milestone to see your deed grid — Activities, Stories, Read-O-Meter, Challenges, KYC, WonderChat, Wordle and more.",
  },
];

const KEYFRAMES = `
@keyframes phoneFloat {
  0%,100% { transform: translateY(0); }
  50%      { transform: translateY(-10px); }
}
`;

export default function Journey() {
  const fuelRef = useRef<HTMLDivElement>(null);
  const inView = useInView(fuelRef, { once: true, amount: 0.4 });

  return (
    <section id="journey" className="py-[100px] relative z-[1]">
      <style>{KEYFRAMES}</style>

      <div className={containerClass}>

        {/* .journey-intro.reveal */}
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 mb-4 text-[0.75rem] font-bold tracking-[0.06em] uppercase text-[#f97316]"
            style={{
              background: "rgba(249,115,22,0.1)",
              border: "1px solid rgba(249,115,22,0.25)",
              fontFamily: "'Rubik', sans-serif",
            }}
          >
            The Space Journey
          </span>

          <h2
            className="text-white font-black leading-[1.2] tracking-[-0.03em] mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontFamily: "'Rubik', sans-serif" }}
          >
            Every Deed Is Fuel.
            <br />
            Every Milestone Is a New Planet.
          </h2>

          <p className="text-[#9ca3af] text-[1rem] leading-[1.8] font-light">
            Your family embarks on a year-long cosmic journey through 20+ milestones. Complete
            daily deeds and watch your fuel tank fill up. When full, your family rockets to the
            next planet — marking real, measurable growth in your child and in you as a caregiver.
          </p>
        </div>

        {/* .journey-layout.reveal — 2-col lg */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* ── LEFT: narrative + steps + fuel ── */}
          <div>

            {/* .journey-narrative */}
            <div className="mb-8">
              <h3
                className="text-white font-black text-[1.3rem] tracking-[-0.01em] mb-3"
                style={{ fontFamily: "'Rubik', sans-serif" }}
              >
                How the Journey Works
              </h3>
              <p className="text-[#9ca3af] text-[0.9rem] leading-[1.8] font-light">
                The app shows your milestones as a vertical cosmic map — a rocket at the base,
                each milestone stacked above like planets waiting to be reached. The further up
                you go, the deeper your family bond grows.
              </p>
            </div>

            {/* .journey-step × 4 */}
            {STEPS.map((step, i) => (
              <motion.div
                key={step.heading}
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-4 py-3.5 items-start border-b border-white/[0.08] last:border-b-0"
              >
                {/* .jstep-icon */}
                <div
                  className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-[0.9rem]"
                  style={{
                    background: "rgba(249,115,22,0.08)",
                    border: "1px solid rgba(249,115,22,0.25)",
                  }}
                >
                  {step.icon}
                </div>

                {/* .jstep-text */}
                <div>
                  <h4 className="text-white font-bold text-[0.88rem] mb-1">{step.heading}</h4>
                  <p className="text-[#9ca3af] text-[0.8rem] leading-[1.5] font-light">{step.body}</p>
                </div>
              </motion.div>
            ))}

            {/* .fuel-section */}
            <motion.div
              ref={fuelRef}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.3 }}
              className="mt-6 rounded-[20px] px-8 py-7"
              style={{
                background: "#0a0e1f",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* .fuel-header */}
              <div className="flex justify-between items-center mb-3">
                <span className="text-[#9ca3af] font-medium text-[0.85rem]">
                  🛸 Current Family Progress
                </span>
                <span
                  className="font-black text-[1.1rem] text-[#f97316]"
                  style={{ fontFamily: "'Rubik', sans-serif" }}
                >
                  60% fuelled
                </span>
              </div>

              {/* .fuel-bar */}
              <div className="h-[10px] rounded-full overflow-hidden mb-4 bg-[#04060f]">
                <motion.div
                  className="h-full rounded-full relative"
                  style={{
                    background: "linear-gradient(90deg, rgba(249,115,22,0.6), #f97316)",
                    boxShadow: "0 0 12px rgba(249,115,22,0.08)",
                  }}
                  initial={{ width: "0%" }}
                  animate={{ width: inView ? "60%" : "0%" }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                >
                  <span className="absolute right-[-10px] top-1/2 -translate-y-1/2 text-base">
                    🚀
                  </span>
                </motion.div>
              </div>

              {/* .milestones-meta */}
              <div className="flex flex-wrap gap-5 text-[0.8rem] text-[#9ca3af]">
                <span>Active: <strong className="text-white">Pathfinder</strong></span>
                <span>Deeds: <strong className="text-white">6 / 10</strong></span>
                <span>Next: <strong className="text-white">Explorer</strong></span>
                <span>Journey: <strong className="text-white">20+ milestones</strong></span>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: app screenshot ── */}
          <div className="flex justify-center items-start">
            <div className="w-full max-w-[540px]">
              <Image
                src="/images/mobile-frames.png"
                alt="UltiMate App — Home Journey & Pathfinder Screens"
                width={540}
                height={900}
                className="w-full h-auto"
                style={{
                  filter:
                    "drop-shadow(0 30px 60px rgba(0,0,0,0.7)) drop-shadow(0 0 40px rgba(249,115,22,0.12))",
                  animation: "phoneFloat 4s ease-in-out infinite",
                }}
              />
              {/* .phone-label */}
              <p className="text-center mt-3 text-[0.72rem] text-[#9ca3af] font-medium tracking-[0.03em]">
                Milestone Journey Map
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}