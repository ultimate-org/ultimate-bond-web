// // // "use client";

// // // import { motion } from "framer-motion";
// // // import { containerClass, SectionHeader } from "@/components/ui/UI";

// // // const FINDINGS = [
// // //   {
// // //     institute: "MIT Media Lab",
// // //     finding: (
// // //       <>
// // //         Children who learn <strong className="text-white">computational thinking before age 12</strong> demonstrate
// // //         significantly higher problem-solving capability and adaptability in complex environments.
// // //       </>
// // //     ),
// // //     tag: "Cognitive Development",
// // //   },
// // //   {
// // //     institute: "Stanford HSTAR",
// // //     finding: (
// // //       <>
// // //         Early exposure to structured <strong className="text-white">technology education improves neural plasticity</strong>,
// // //         making it easier to acquire new technical skills throughout life.
// // //       </>
// // //     ),
// // //     tag: "Neuroscience",
// // //   },
// // //   {
// // //     institute: "Harvard GSE",
// // //     finding: (
// // //       <>
// // //         Students with <strong className="text-white">project-based STEM learning</strong> in foundational years are
// // //         3× more likely to pursue high-earning technology careers by age 25.
// // //       </>
// // //     ),
// // //     tag: "Career Outcomes",
// // //   },
// // //   {
// // //     institute: "IIT Delhi Research",
// // //     finding: (
// // //       <>
// // //         India produces 1.5M engineers annually, yet <strong className="text-white">fewer than 20% are industry-ready</strong> —
// // //         directly linked to a lack of applied learning in formative education.
// // //       </>
// // //     ),
// // //     tag: "India Report",
// // //   },
// // // ];

// // // const cardVariants = {
// // //   hidden: { opacity: 0, y: 24 },
// // //   visible: (i: number) => ({
// // //     opacity: 1, y: 0,
// // //     transition: { duration: 0.45, delay: i * 0.1, ease: "easeOut" },
// // //   }),
// // // };

// // // export default function Science() {
// // //   return (
// // //     <section id="science" className="py-[100px] relative z-[1] bg-[#04060f]">
// // //       <div className={containerClass}>

// // //         <SectionHeader
// // //           tag="Backed by Research"
// // //           heading={<>The science is<br /><em className="text-[#f97316] not-italic">clear</em></>}
// // //           sub="Leading institutions worldwide confirm what the best educators already know — start early, learn by doing."
// // //         />

// // //         {/* 2-col grid: findings left, headline right */}
// // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-10">

// // //           {/* Left — findings list */}
// // //           <div className="flex flex-col gap-4">
// // //             {FINDINGS.map((f, i) => (
// // //               <motion.div
// // //                 key={f.institute}
// // //                 custom={i}
// // //                 initial="hidden"
// // //                 whileInView="visible"
// // //                 viewport={{ once: true, amount: 0.2 }}
// // //                 variants={cardVariants}
// // //                 className="p-6 border border-white/[0.08] rounded-[14px] bg-[#0a0e1f] transition-all duration-300 hover:border-[rgba(59,130,246,0.3)]"
// // //               >
// // //                 {/* Source row — .science-source-row */}
// // //                 <div className="flex items-center gap-3 mb-2.5">
// // //                   {/* .inst-logo-text */}
// // //                   <span
// // //                     className="h-7 px-2.5 flex items-center justify-center rounded-[6px] text-[0.72rem] font-bold tracking-[0.06em] uppercase text-[#60a5fa] whitespace-nowrap flex-shrink-0"
// // //                     style={{
// // //                       background: "rgba(255,255,255,0.06)",
// // //                       border: "1px solid rgba(255,255,255,0.1)",
// // //                       fontFamily: "'Rubik', sans-serif",
// // //                     }}
// // //                   >
// // //                     {f.institute}
// // //                   </span>
// // //                 </div>

// // //                 {/* Finding text */}
// // //                 <p className="text-[0.88rem] text-[#9ca3af] leading-[1.65] font-light">
// // //                   {f.finding}
// // //                 </p>

// // //                 {/* Tag — .science-tag */}
// // //                 <span
// // //                   className="inline-block mt-2.5 text-[0.72rem] text-[#2dd4bf] px-2 py-0.5 rounded"
// // //                   style={{
// // //                     background: "rgba(20,184,166,0.08)",
// // //                     border: "1px solid rgba(20,184,166,0.2)",
// // //                   }}
// // //                 >
// // //                   {f.tag}
// // //                 </span>
// // //               </motion.div>
// // //             ))}
// // //           </div>

// // //           {/* Right — headline card */}
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 28 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true, amount: 0.2 }}
// // //             transition={{ duration: 0.5, delay: 0.2 }}
// // //             className="rounded-[20px] p-8 text-center sticky top-28"
// // //             style={{
// // //               background: "#0d1224",
// // //               border: "1px solid rgba(249,115,22,0.25)",
// // //             }}
// // //           >
// // //             {/* YOUR HEADLINE CARD CONTENT */}
// // //             <p className="text-white font-bold text-[1.1rem] leading-[1.5] mb-2">
// // //               {/* YOUR BOLD STATEMENT */}
// // //             </p>
// // //             <span className="text-[#9ca3af] text-[0.85rem]">
// // //               {/* YOUR SOURCE / SUBLINE */}
// // //             </span>
// // //           </motion.div>

// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }







// // "use client";

// // import { motion } from "framer-motion";
// // import { containerClass, SectionHeader } from "@/components/ui/UI";

// // /* ─── Science data ─── */
// // const FINDINGS = [
// //   {
// //     institute: "MIT Media Lab",
// //     finding: <>Children who learn <strong className="text-white">computational thinking before age 12</strong> demonstrate significantly higher problem-solving capability and adaptability in complex environments.</>,
// //     tag: "Cognitive Development",
// //   },
// //   {
// //     institute: "Stanford HSTAR",
// //     finding: <>Early exposure to structured <strong className="text-white">technology education improves neural plasticity</strong>, making it easier to acquire new technical skills throughout life.</>,
// //     tag: "Neuroscience",
// //   },
// //   {
// //     institute: "Harvard GSE",
// //     finding: <>Students with <strong className="text-white">project-based STEM learning</strong> in foundational years are 3× more likely to pursue high-earning technology careers by age 25.</>,
// //     tag: "Career Outcomes",
// //   },
// //   {
// //     institute: "IIT Delhi Research",
// //     finding: <>India produces 1.5M engineers annually, yet <strong className="text-white">fewer than 20% are industry-ready</strong> — directly linked to a lack of applied learning in formative education.</>,
// //     tag: "India Report",
// //   },
// // ];

// // /* ─── Solution data ─── */
// // const INPUTS = [
// //   { num: "01", title: "Curious Learner",        body: "A child aged 6–16 with a device and the desire to build something real." },
// //   { num: "02", title: "Structured Curriculum",   body: "Age-appropriate, project-based learning paths designed by industry experts." },
// //   { num: "03", title: "Live Mentorship",         body: "Real engineers and educators guiding every session, not just pre-recorded videos." },
// //   { num: "04", title: "Safe Environment",        body: "A distraction-free, moderated learning space built specifically for children." },
// // ];

// // const OUTPUTS = [
// //   { num: "01", title: "Industry-Ready Skills",  body: "Coding, design thinking, AI literacy and problem-solving — before college." },
// //   { num: "02", title: "Portfolio of Projects",  body: "Real, shareable projects that prove capability to colleges and employers." },
// //   { num: "03", title: "Confidence & Mindset",   body: "A builder's mindset — children who create, not just consume." },
// //   { num: "04", title: "Career Head-Start",       body: "Internship pathways, certifications and a network that opens doors early." },
// // ];

// // const ENGINE_PILLARS = ["Learn", "Build", "Ship", "Grow"];

// // const DEFENSE = [
// //   { icon: "🧠", title: "Pedagogy-First",    body: "Every lesson is backed by child psychology and learning science, not just tech trends." },
// //   { icon: "🛡️", title: "AICTE Certified",   body: "Government-recognised credentials that carry real weight with colleges and employers." },
// //   { icon: "🚀", title: "Outcome-Driven",    body: "We measure success by what students build and where they go, not hours logged." },
// // ];

// // const cardVariants = {
// //   hidden: { opacity: 0, y: 24 },
// //   visible: (i: number) => ({
// //     opacity: 1, y: 0,
// //     transition: { duration: 0.45, delay: i * 0.1, ease: "easeOut" },
// //   }),
// // };

// // export default function ScienceSolution() {
// //   return (
// //     <>
// //       {/* ══════════════════════════════════════
// //           4. SCIENCE
// //       ══════════════════════════════════════ */}
// //       <section id="science" className="py-[100px] relative z-[1] bg-[#04060f]">
// //         <div className={containerClass}>
// //           <SectionHeader
// //             tag="Backed by Research"
// //             heading={<>The science is<br /><em className="text-[#f97316] not-italic">clear</em></>}
// //             sub="Leading institutions worldwide confirm what the best educators already know — start early, learn by doing."
// //           />

// //           {/* .science-grid — 1fr 1fr */}
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-10">

// //             {/* Left — findings */}
// //             <div className="flex flex-col gap-4">
// //               {FINDINGS.map((f, i) => (
// //                 <motion.div
// //                   key={f.institute}
// //                   custom={i}
// //                   initial="hidden"
// //                   whileInView="visible"
// //                   viewport={{ once: true, amount: 0.2 }}
// //                   variants={cardVariants}
// //                   /* .science-finding */
// //                   className="p-6 border border-white/[0.08] rounded-[14px] bg-[#0a0e1f] transition-all duration-300 hover:border-[rgba(59,130,246,0.3)]"
// //                 >
// //                   {/* .science-source-row */}
// //                   <div className="flex items-center gap-3 mb-2.5">
// //                     {/* .inst-logo-text */}
// //                     <span
// //                       className="h-7 px-2.5 flex items-center rounded-[6px] text-[0.72rem] font-bold tracking-[0.06em] uppercase text-[#60a5fa] whitespace-nowrap flex-shrink-0"
// //                       style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", fontFamily: "'Rubik', sans-serif" }}
// //                     >
// //                       {f.institute}
// //                     </span>
// //                   </div>

// //                   {/* .science-finding p */}
// //                   <p className="text-[0.88rem] text-[#9ca3af] leading-[1.65] font-light">{f.finding}</p>

// //                   {/* .science-tag */}
// //                   <span
// //                     className="inline-block mt-2.5 text-[0.72rem] text-[#2dd4bf] px-2 py-0.5 rounded"
// //                     style={{ background: "rgba(20,184,166,0.08)", border: "1px solid rgba(20,184,166,0.2)" }}
// //                   >
// //                     {f.tag}
// //                   </span>
// //                 </motion.div>
// //               ))}
// //             </div>

// //             {/* Right — .science-headline */}
// //             <motion.div
// //               initial={{ opacity: 0, y: 28 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true, amount: 0.2 }}
// //               transition={{ duration: 0.5, delay: 0.2 }}
// //               className="rounded-[20px] p-8 text-center sticky top-28"
// //               style={{ background: "#0d1224", border: "1px solid rgba(249,115,22,0.25)" }}
// //             >
// //               {/* .science-headline p */}
// //               <p className="text-white font-bold text-[1.1rem] leading-[1.5] mb-2">
// //                 {/* YOUR BOLD STATEMENT */}
// //               </p>
// //               {/* .science-headline span */}
// //               <span className="text-[#9ca3af] text-[0.85rem]">
// //                 {/* YOUR SOURCE / SUBLINE */}
// //               </span>
// //             </motion.div>

// //           </div>
// //         </div>
// //       </section>

// //       {/* ══════════════════════════════════════
// //           5. SOLUTION
// //       ══════════════════════════════════════ */}
// //       <section id="solution" className="py-[100px] relative z-[1] bg-[#0a0e1f]">
// //         <div className={containerClass}>
// //           <SectionHeader
// //             tag="The Solution"
// //             heading={<>Our learning<br /><em className="text-[#f97316] not-italic">engine</em></>}
// //             sub="We take raw curiosity and transform it into real-world capability through a proven, structured process."
// //           />

// //           {/* .solution-layout — 1fr auto 1fr */}
// //           <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-center mt-12">

// //             {/* LEFT — .solution-inputs */}
// //             <div className="flex flex-col gap-5">
// //               {INPUTS.map((inp, i) => (
// //                 <motion.div
// //                   key={inp.num}
// //                   custom={i}
// //                   initial="hidden"
// //                   whileInView="visible"
// //                   viewport={{ once: true, amount: 0.2 }}
// //                   variants={cardVariants}
// //                   /* .input-card */
// //                   className="bg-[#04060f] border border-white/[0.08] rounded-[14px] px-[1.4rem] py-[1.2rem] transition-all duration-300 hover:border-[#60a5fa] hover:translate-x-1"
// //                   style={{ borderRight: "3px solid rgba(59,130,246,0.4)" }}
// //                 >
// //                   {/* .input-num */}
// //                   <p className="text-[0.68rem] font-bold tracking-[0.08em] uppercase text-[#60a5fa] mb-1" style={{ fontFamily: "'Rubik', sans-serif" }}>
// //                     Input {inp.num}
// //                   </p>
// //                   <h4 className="text-white font-bold text-[0.9rem] mb-1">{inp.title}</h4>
// //                   <p className="text-[#9ca3af] text-[0.78rem] leading-[1.5] font-light">{inp.body}</p>
// //                 </motion.div>
// //               ))}
// //             </div>

// //             {/* CENTRE — .solution-engine */}
// //             <motion.div
// //               initial={{ opacity: 0, scale: 0.85 }}
// //               whileInView={{ opacity: 1, scale: 1 }}
// //               viewport={{ once: true, amount: 0.3 }}
// //               transition={{ duration: 0.6, delay: 0.2 }}
// //               className="flex flex-col items-center gap-6 px-4"
// //             >
// //               {/* .engine-wrap */}
// //               <div className="relative w-[160px] h-[160px] flex items-center justify-center">
// //                 {/* .engine-ring-1 */}
// //                 <div
// //                   className="absolute rounded-full w-[160px] h-[160px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
// //                   style={{ border: "1px solid rgba(249,115,22,0.25)", animation: "engineSpin 8s linear infinite" }}
// //                 />
// //                 {/* .engine-ring-2 */}
// //                 <div
// //                   className="absolute rounded-full w-[120px] h-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
// //                   style={{ border: "1px solid rgba(249,115,22,0.4)", animation: "engineSpin 5s linear infinite reverse" }}
// //                 />
// //                 {/* orbit dot */}
// //                 <div
// //                   className="absolute w-2.5 h-2.5 rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
// //                   style={{ background: "#f97316", boxShadow: "0 0 8px #f97316" }}
// //                 />
// //                 {/* .engine-core */}
// //                 <div
// //                   className="relative z-[2] w-20 h-20 rounded-full flex items-center justify-center text-[1.5rem]"
// //                   style={{
// //                     background: "radial-gradient(circle at 40% 35%, #f97316, #c2530a, #7c2d12)",
// //                     boxShadow: "0 0 30px rgba(249,115,22,0.6), 0 0 60px rgba(249,115,22,0.2)",
// //                     animation: "enginePulse 2s ease-in-out infinite",
// //                   }}
// //                 >
// //                   🚀
// //                 </div>
// //               </div>

// //               {/* .engine-label */}
// //               <div className="text-center">
// //                 <h3 className="text-white font-black text-[1.1rem] tracking-[-0.01em]">
// //                   {/* YOUR ENGINE NAME */}
// //                 </h3>
// //                 <p className="text-[#9ca3af] text-[0.72rem] font-light">
// //                   {/* YOUR ENGINE TAGLINE */}
// //                 </p>
// //               </div>

// //               {/* .engine-pillars */}
// //               <div className="flex flex-col gap-1.5 w-full">
// //                 {ENGINE_PILLARS.map((pill) => (
// //                   <div key={pill} className="flex items-center justify-center gap-1.5 text-[0.72rem] font-bold tracking-[0.04em]" style={{ fontFamily: "'Rubik', sans-serif" }}>
// //                     {/* .eq-pill span */}
// //                     <span
// //                       className="px-2 py-0.5 rounded text-[#f97316]"
// //                       style={{ background: "rgba(249,115,22,0.12)", border: "1px solid rgba(249,115,22,0.2)" }}
// //                     >
// //                       {pill}
// //                     </span>
// //                   </div>
// //                 ))}
// //               </div>

// //               {/* .engine-arrows — flow arrows */}
// //               <div className="flex items-center gap-0">
// //                 {[0, 1, 2].map((n) => (
// //                   <span
// //                     key={n}
// //                     className="text-[1.4rem]"
// //                     style={{ color: "rgba(249,115,22,0.5)", animation: `arrowPulse 1.5s ease-in-out ${n * 0.2}s infinite` }}
// //                   >
// //                     ›
// //                   </span>
// //                 ))}
// //               </div>
// //             </motion.div>

// //             {/* RIGHT — .solution-outputs */}
// //             <div className="flex flex-col gap-5">
// //               {OUTPUTS.map((out, i) => (
// //                 <motion.div
// //                   key={out.num}
// //                   custom={i}
// //                   initial="hidden"
// //                   whileInView="visible"
// //                   viewport={{ once: true, amount: 0.2 }}
// //                   variants={cardVariants}
// //                   /* .output-card */
// //                   className="bg-[#04060f] border border-white/[0.08] rounded-[14px] px-[1.4rem] py-[1.2rem] transition-all duration-300 hover:border-[#f97316] hover:-translate-x-1"
// //                   style={{ borderLeft: "3px solid rgba(249,115,22,0.4)" }}
// //                 >
// //                   {/* .output-num */}
// //                   <p className="text-[0.68rem] font-bold tracking-[0.08em] uppercase text-[#f97316] mb-1" style={{ fontFamily: "'Rubik', sans-serif" }}>
// //                     Output {out.num}
// //                   </p>
// //                   <h4 className="text-white font-bold text-[0.9rem] mb-1">{out.title}</h4>
// //                   <p className="text-[#9ca3af] text-[0.78rem] leading-[1.5] font-light">{out.body}</p>
// //                 </motion.div>
// //               ))}
// //             </div>
// //           </div>

// //           {/* .solution-defense — 3-col */}
// //           <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-12">
// //             {DEFENSE.map((d, i) => (
// //               <motion.div
// //                 key={d.title}
// //                 custom={i}
// //                 initial="hidden"
// //                 whileInView="visible"
// //                 viewport={{ once: true, amount: 0.2 }}
// //                 variants={cardVariants}
// //                 /* .defense-card */
// //                 className="bg-[#04060f] border border-white/[0.08] rounded-[14px] p-5 text-center transition-all duration-300 hover:border-[rgba(20,184,166,0.3)]"
// //               >
// //                 <div className="text-[2.4rem] mb-2 leading-none">{d.icon}</div>
// //                 <h4 className="text-white font-bold text-[0.85rem] mb-1">{d.title}</h4>
// //                 <p className="text-[#9ca3af] text-[0.78rem] leading-[1.5] font-light">{d.body}</p>
// //               </motion.div>
// //             ))}
// //           </div>

// //           {/* .solution-quote */}
// //           <motion.p
// //             initial={{ opacity: 0, y: 12 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true, amount: 0.5 }}
// //             transition={{ duration: 0.5, delay: 0.3 }}
// //             className="mt-8 text-center text-[0.95rem] text-[#9ca3af] italic px-6 py-6 border border-white/[0.08] rounded-[14px]"
// //             style={{ background: "rgba(249,115,22,0.03)" }}
// //           >
// //             {/* YOUR QUOTE — wrap key phrase in: <strong className="text-[#f97316]">word</strong> */}
// //           </motion.p>

// //         </div>

// //         {/* Keyframe animations via global style tag */}
// //         <style>{`
// //           @keyframes engineSpin {
// //             from { transform: translate(-50%, -50%) rotate(0deg); }
// //             to   { transform: translate(-50%, -50%) rotate(360deg); }
// //           }
// //           @keyframes enginePulse {
// //             0%, 100% { box-shadow: 0 0 25px rgba(249,115,22,.5), 0 0 50px rgba(249,115,22,.15); }
// //             50%       { box-shadow: 0 0 45px rgba(249,115,22,.9), 0 0 80px rgba(249,115,22,.3); }
// //           }
// //           @keyframes arrowPulse {
// //             0%, 100% { opacity: .4; transform: translateX(0); }
// //             50%       { opacity: 1;  transform: translateX(4px); }
// //           }
// //         `}</style>
// //       </section>
// //     </>
// //   );
// // }









// "use client";

// import { motion } from "framer-motion";
// import { containerClass, SectionHeader } from "@/components/ui/UI";

// /* ─── Science data ─── */
// const FINDINGS = [
//   {
//     institute: "MIT Media Lab",
//     finding: <>Children who learn <strong className="text-white">computational thinking before age 12</strong> demonstrate significantly higher problem-solving capability and adaptability in complex environments.</>,
//     tag: "Cognitive Development",
//   },
//   {
//     institute: "Stanford HSTAR",
//     finding: <>Early exposure to structured <strong className="text-white">technology education improves neural plasticity</strong>, making it easier to acquire new technical skills throughout life.</>,
//     tag: "Neuroscience",
//   },
//   {
//     institute: "Harvard GSE",
//     finding: <>Students with <strong className="text-white">project-based STEM learning</strong> in foundational years are 3× more likely to pursue high-earning technology careers by age 25.</>,
//     tag: "Career Outcomes",
//   },
//   {
//     institute: "IIT Delhi Research",
//     finding: <>India produces 1.5M engineers annually, yet <strong className="text-white">fewer than 20% are industry-ready</strong> — directly linked to a lack of applied learning in formative education.</>,
//     tag: "India Report",
//   },
// ];

// /* ─── Solution data ─── */
// const INPUTS = [
//   { num: "01", title: "Curious Learner",        body: "A child aged 6–16 with a device and the desire to build something real." },
//   { num: "02", title: "Structured Curriculum",   body: "Age-appropriate, project-based learning paths designed by industry experts." },
//   { num: "03", title: "Live Mentorship",         body: "Real engineers and educators guiding every session, not just pre-recorded videos." },
//   { num: "04", title: "Safe Environment",        body: "A distraction-free, moderated learning space built specifically for children." },
// ];

// const OUTPUTS = [
//   { num: "01", title: "Industry-Ready Skills",  body: "Coding, design thinking, AI literacy and problem-solving — before college." },
//   { num: "02", title: "Portfolio of Projects",  body: "Real, shareable projects that prove capability to colleges and employers." },
//   { num: "03", title: "Confidence & Mindset",   body: "A builder's mindset — children who create, not just consume." },
//   { num: "04", title: "Career Head-Start",       body: "Internship pathways, certifications and a network that opens doors early." },
// ];

// const ENGINE_PILLARS = ["Learn", "Build", "Ship", "Grow"];

// const DEFENSE = [
//   { icon: "🧠", title: "Pedagogy-First",    body: "Every lesson is backed by child psychology and learning science, not just tech trends." },
//   { icon: "🛡️", title: "AICTE Certified",   body: "Government-recognised credentials that carry real weight with colleges and employers." },
//   { icon: "🚀", title: "Outcome-Driven",    body: "We measure success by what students build and where they go, not hours logged." },
// ];

// const cardVariants = {
//   hidden: { opacity: 0, y: 24 },
//   visible: (i: number) => ({
//     opacity: 1, y: 0,
//     transition: { duration: 0.45, delay: i * 0.1, ease: "easeOut" },
//   }),
// };

// export default function ScienceSolution() {
//   return (
//     <>
//       {/* ══════════════════════════════════════
//           4. SCIENCE
//       ══════════════════════════════════════ */}
//       <section id="science" className="py-[100px] relative z-[1] bg-[#04060f]">
//         <div className={containerClass}>
//           <SectionHeader
//             tag="Backed by Research"
//             heading={<>The science is<br /><em className="text-[#f97316] not-italic">clear</em></>}
//             sub="Leading institutions worldwide confirm what the best educators already know — start early, learn by doing."
//           />

//           {/* .science-grid — 1fr 1fr */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-10">

//             {/* Left — findings */}
//             <div className="flex flex-col gap-4">
//               {FINDINGS.map((f, i) => (
//                 <motion.div
//                   key={f.institute}
//                   custom={i}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true, amount: 0.2 }}
//                   variants={cardVariants}
//                   /* .science-finding */
//                   className="p-6 border border-white/[0.08] rounded-[14px] bg-[#0a0e1f] transition-all duration-300 hover:border-[rgba(59,130,246,0.3)]"
//                 >
//                   {/* .science-source-row */}
//                   <div className="flex items-center gap-3 mb-2.5">
//                     {/* .inst-logo-text */}
//                     <span
//                       className="h-7 px-2.5 flex items-center rounded-[6px] text-[0.72rem] font-bold tracking-[0.06em] uppercase text-[#60a5fa] whitespace-nowrap flex-shrink-0"
//                       style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", fontFamily: "'Rubik', sans-serif" }}
//                     >
//                       {f.institute}
//                     </span>
//                   </div>

//                   {/* .science-finding p */}
//                   <p className="text-[0.88rem] text-[#9ca3af] leading-[1.65] font-light">{f.finding}</p>

//                   {/* .science-tag */}
//                   <span
//                     className="inline-block mt-2.5 text-[0.72rem] text-[#2dd4bf] px-2 py-0.5 rounded"
//                     style={{ background: "rgba(20,184,166,0.08)", border: "1px solid rgba(20,184,166,0.2)" }}
//                   >
//                     {f.tag}
//                   </span>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Right — .science-headline */}
//             <motion.div
//               initial={{ opacity: 0, y: 28 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="rounded-[20px] p-8 text-center sticky top-28"
//               style={{ background: "#0d1224", border: "1px solid rgba(249,115,22,0.25)" }}
//             >
//               {/* .science-headline p */}
//               <p className="text-white font-bold text-[1.1rem] leading-[1.5] mb-2">
//                 {/* YOUR BOLD STATEMENT */}
//               </p>
//               {/* .science-headline span */}
//               <span className="text-[#9ca3af] text-[0.85rem]">
//                 {/* YOUR SOURCE / SUBLINE */}
//               </span>
//             </motion.div>

//           </div>
//         </div>
//       </section>

//       {/* ══════════════════════════════════════
//           5. SOLUTION
//       ══════════════════════════════════════ */}
//       <section id="solution" className="py-[100px] relative z-[1] bg-[#0a0e1f]">
//         <div className={containerClass}>
//           <SectionHeader
//             tag="The Solution"
//             heading={<>Our learning<br /><em className="text-[#f97316] not-italic">engine</em></>}
//             sub="We take raw curiosity and transform it into real-world capability through a proven, structured process."
//           />

//           {/* .solution-layout — 1fr auto 1fr */}
//           <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-center mt-12">

//             {/* LEFT — .solution-inputs */}
//             <div className="flex flex-col gap-5">
//               {INPUTS.map((inp, i) => (
//                 <motion.div
//                   key={inp.num}
//                   custom={i}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true, amount: 0.2 }}
//                   variants={cardVariants}
//                   /* .input-card */
//                   className="bg-[#04060f] border border-white/[0.08] rounded-[14px] px-[1.4rem] py-[1.2rem] transition-all duration-300 hover:border-[#60a5fa] hover:translate-x-1"
//                   style={{ borderRight: "3px solid rgba(59,130,246,0.4)" }}
//                 >
//                   {/* .input-num */}
//                   <p className="text-[0.68rem] font-bold tracking-[0.08em] uppercase text-[#60a5fa] mb-1" style={{ fontFamily: "'Rubik', sans-serif" }}>
//                     Input {inp.num}
//                   </p>
//                   <h4 className="text-white font-bold text-[0.9rem] mb-1">{inp.title}</h4>
//                   <p className="text-[#9ca3af] text-[0.78rem] leading-[1.5] font-light">{inp.body}</p>
//                 </motion.div>
//               ))}
//             </div>

//             {/* CENTRE — .solution-engine */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.85 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="flex flex-col items-center gap-6 px-4"
//             >
//               {/* .engine-wrap */}
//               <div className="relative w-[160px] h-[160px] flex items-center justify-center">
//                 {/* .engine-ring-1 */}
//                 <div
//                   className="absolute rounded-full w-[160px] h-[160px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
//                   style={{ border: "1px solid rgba(249,115,22,0.25)", animation: "engineSpin 8s linear infinite" }}
//                 />
//                 {/* .engine-ring-2 */}
//                 <div
//                   className="absolute rounded-full w-[120px] h-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
//                   style={{ border: "1px solid rgba(249,115,22,0.4)", animation: "engineSpin 5s linear infinite reverse" }}
//                 />
//                 {/* orbit dot — spins in its own container so it revolves around the core */}
//                 <div
//                   className="absolute w-[160px] h-[160px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
//                   style={{ animation: "engineSpin 8s linear infinite" }}
//                 >
//                   <div
//                     className="absolute w-2.5 h-2.5 rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
//                     style={{ background: "#f97316", boxShadow: "0 0 8px #f97316" }}
//                   />
//                 </div>
//                 {/* .engine-core */}
//                 <div
//                   className="relative z-[2] w-20 h-20 rounded-full flex items-center justify-center text-[1.5rem]"
//                   style={{
//                     background: "radial-gradient(circle at 40% 35%, #f97316, #c2530a, #7c2d12)",
//                     boxShadow: "0 0 30px rgba(249,115,22,0.6), 0 0 60px rgba(249,115,22,0.2)",
//                     animation: "enginePulse 2s ease-in-out infinite",
//                   }}
//                 >
//                   🚀
//                 </div>
//               </div>

//               {/* .engine-label */}
//               <div className="text-center">
//                 <h3 className="text-white font-black text-[1.1rem] tracking-[-0.01em]">
//                   {/* YOUR ENGINE NAME */}
//                 </h3>
//                 <p className="text-[#9ca3af] text-[0.72rem] font-light">
//                   {/* YOUR ENGINE TAGLINE */}
//                 </p>
//               </div>

//               {/* .engine-pillars */}
//               <div className="flex flex-col gap-1.5 w-full">
//                 {ENGINE_PILLARS.map((pill) => (
//                   <div key={pill} className="flex items-center justify-center gap-1.5 text-[0.72rem] font-bold tracking-[0.04em]" style={{ fontFamily: "'Rubik', sans-serif" }}>
//                     {/* .eq-pill span */}
//                     <span
//                       className="px-2 py-0.5 rounded text-[#f97316]"
//                       style={{ background: "rgba(249,115,22,0.12)", border: "1px solid rgba(249,115,22,0.2)" }}
//                     >
//                       {pill}
//                     </span>
//                   </div>
//                 ))}
//               </div>

//               {/* .engine-arrows — flow arrows */}
//               <div className="flex items-center gap-0">
//                 {[0, 1, 2].map((n) => (
//                   <span
//                     key={n}
//                     className="text-[1.4rem]"
//                     style={{ color: "rgba(249,115,22,0.5)", animation: `arrowPulse 1.5s ease-in-out ${n * 0.2}s infinite` }}
//                   >
//                     ›
//                   </span>
//                 ))}
//               </div>
//             </motion.div>

//             {/* RIGHT — .solution-outputs */}
//             <div className="flex flex-col gap-5">
//               {OUTPUTS.map((out, i) => (
//                 <motion.div
//                   key={out.num}
//                   custom={i}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true, amount: 0.2 }}
//                   variants={cardVariants}
//                   /* .output-card */
//                   className="bg-[#04060f] border border-white/[0.08] rounded-[14px] px-[1.4rem] py-[1.2rem] transition-all duration-300 hover:border-[#f97316] hover:-translate-x-1"
//                   style={{ borderLeft: "3px solid rgba(249,115,22,0.4)" }}
//                 >
//                   {/* .output-num */}
//                   <p className="text-[0.68rem] font-bold tracking-[0.08em] uppercase text-[#f97316] mb-1" style={{ fontFamily: "'Rubik', sans-serif" }}>
//                     Output {out.num}
//                   </p>
//                   <h4 className="text-white font-bold text-[0.9rem] mb-1">{out.title}</h4>
//                   <p className="text-[#9ca3af] text-[0.78rem] leading-[1.5] font-light">{out.body}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* .solution-defense — 3-col */}
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-12">
//             {DEFENSE.map((d, i) => (
//               <motion.div
//                 key={d.title}
//                 custom={i}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.2 }}
//                 variants={cardVariants}
//                 /* .defense-card */
//                 className="bg-[#04060f] border border-white/[0.08] rounded-[14px] p-5 text-center transition-all duration-300 hover:border-[rgba(20,184,166,0.3)]"
//               >
//                 <div className="text-[2.4rem] mb-2 leading-none">{d.icon}</div>
//                 <h4 className="text-white font-bold text-[0.85rem] mb-1">{d.title}</h4>
//                 <p className="text-[#9ca3af] text-[0.78rem] leading-[1.5] font-light">{d.body}</p>
//               </motion.div>
//             ))}
//           </div>

//           {/* .solution-quote */}
//           <motion.p
//             initial={{ opacity: 0, y: 12 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             className="mt-8 text-center text-[0.95rem] text-[#9ca3af] italic px-6 py-6 border border-white/[0.08] rounded-[14px]"
//             style={{ background: "rgba(249,115,22,0.03)" }}
//           >
//             {/* YOUR QUOTE — wrap key phrase in: <strong className="text-[#f97316]">word</strong> */}
//           </motion.p>

//         </div>

//         {/* Keyframe animations via global style tag */}
//         <style>{`
//           @keyframes engineSpin {
//             from { transform: translate(-50%, -50%) rotate(0deg); }
//             to   { transform: translate(-50%, -50%) rotate(360deg); }
//           }
//           @keyframes enginePulse {
//             0%, 100% { box-shadow: 0 0 25px rgba(249,115,22,.5), 0 0 50px rgba(249,115,22,.15); }
//             50%       { box-shadow: 0 0 45px rgba(249,115,22,.9), 0 0 80px rgba(249,115,22,.3); }
//           }
//           @keyframes arrowPulse {
//             0%, 100% { opacity: .4; transform: translateX(0); }
//             50%       { opacity: 1;  transform: translateX(4px); }
//           }
//         `}</style>
//       </section>
//     </>
//   );
// }




"use client";

import { motion } from "framer-motion";
import { containerClass, SectionHeader } from "@/components/ui/UI";

/* ── data ── */
const COL_LEFT = [
  {
    sources: ["WHO / UNICEF", "World Bank"],
    body: (
      <>
        Responsive caregiving + early learning + safety = the three pillars of child development.{" "}
        <strong>UltiMate delivers all three, daily.</strong>
      </>
    ),
    tag: "→ WonderChat · Life Skills · Habit-Up · Audio Stories",
  },
  {
    sources: ["Shonkoff & Phillips"],
    sourceName: "From Neurons to Neighborhoods",
    body: (
      <>
        Ages 3–13 are the most neuroplastic years.{" "}
        <strong>Habits, values and emotional patterns formed here become the default wiring for life.</strong>
      </>
    ),
    tag: "→ Entire app architecture",
  },
  {
    sources: ["Jeong et al."],
    sourceName: "PLOS Medicine 2021",
    body: "Integrated, multi-component daily support delivers dramatically better outcomes than single-tool approaches.",
    tag: "→ All 15 features as an integrated ecosystem",
  },
];

const COL_RIGHT = [
  {
    sources: ["OECD"],
    sourceName: "Future of Education & Skills",
    body: (
      <>
        EQ, CQ, AQ and SQ are the four pillars of 21st-century readiness.{" "}
        <strong>No school curriculum adequately builds all four.</strong>
      </>
    ),
    tag: "→ Case Studies · Life Skills · Create Task · Habit-Up",
  },
  {
    sources: ["UNICEF"],
    sourceName: "Parenting Support & ECD Reports",
    body: "Structured daily parental nudges consistently outperform periodic interventions in long-term child development outcomes.",
    tag: "→ Milestone Tracking · Daily Activities · Challenges · Read-O-Meter",
  },
  {
    sources: ["Horowitz-Kraus & Gashri"],
    sourceName: "Biology 2023",
    body: (
      <>
        Multi-layered parent-child interaction — stories, conversation, shared activities —{" "}
        <strong>directly strengthens neural connectivity.</strong>
      </>
    ),
    tag: "→ KYC · Parenting Virtues Workshop · StrengthFinder",
  },
];

/* ── sub-components ── */
function SourceRow({
  sources,
  sourceName,
}: {
  sources: string[];
  sourceName?: string;
}) {
  return (
    /* .science-source-row */
    <div className="flex items-center gap-3 mb-2.5 flex-wrap">
      {sources.map((s) => (
        /* .inst-logo-text */
        <span
          key={s}
          className="h-7 px-2.5 flex items-center justify-center rounded-[6px] text-[0.72rem] font-bold tracking-[0.06em] uppercase text-[#60a5fa] whitespace-nowrap"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.08)",
            fontFamily: "'Rubik', sans-serif",
          }}
        >
          {s}
        </span>
      ))}
      {sourceName && (
        /* .science-source-name */
        <span className="text-[0.72rem] tracking-[0.06em] uppercase text-[#60a5fa] font-bold leading-[1.3]">
          {sourceName}
        </span>
      )}
    </div>
  );
}

function FindingCard({
  sources,
  sourceName,
  body,
  tag,
  i,
}: {
  sources: string[];
  sourceName?: string;
  body: React.ReactNode;
  tag: string;
  i: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: i * 0.08 }}
      /* .science-finding */
      className="p-6 border border-white/[0.08] rounded-[14px] mb-4 last:mb-0 bg-[#0a0e1f] transition-all duration-300 hover:border-[rgba(59,130,246,0.3)]"
    >
      <SourceRow sources={sources} sourceName={sourceName} />

      {/* p */}
      <p className="text-[0.88rem] text-[#9ca3af] leading-[1.65] font-light [&_strong]:text-white [&_strong]:font-semibold">
        {body}
      </p>

      {/* .science-tag */}
      <span
        className="mt-2.5 text-[0.72rem] text-[#2dd4bf] px-2 py-0.5 rounded inline-block"
        style={{
          background: "rgba(20,184,166,0.08)",
          border: "1px solid rgba(20,184,166,0.2)",
        }}
      >
        {tag}
      </span>
    </motion.div>
  );
}

/* ── main export ── */
export default function Science() {
  return (
    <section id="science" className="py-[100px] relative z-[1] ">
      <div className={containerClass}>

        {/* .section-header.reveal */}
        <SectionHeader
          tag="The Science"
          heading="Not Intuition. Science."
          sub="UltiMate operationalises the world's most authoritative child development research into simple daily family actions."
        />

        {/* .science-grid.reveal — 2-col on lg, 1-col on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-10">

          {/* left column */}
          <div>
            {COL_LEFT.map((f, i) => (
              <FindingCard key={i} i={i} {...f} />
            ))}
          </div>

          {/* right column */}
          <div>
            {COL_RIGHT.map((f, i) => (
              <FindingCard key={i} i={i + COL_LEFT.length} {...f} />
            ))}

          </div>

        </div>
            {/* .science-headline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.35 }}
              className="rounded-[20px] p-8 text-center mt-4 mx-auto"
              style={{
                background: "#0d1224",
                border: "1px solid rgba(249,115,22,0.25)",
              }}
            >
              <p className="text-white text-[1.1rem] font-bold leading-[1.5] mb-2">
                Global Consensus: Integrated, multi-component daily support delivers the strongest developmental outcomes.
              </p>
              <span className="text-[#9ca3af] text-[0.85rem]">
                That is exactly what UltiMate delivers.
              </span>
            </motion.div>
      </div>
    </section>
  );
}