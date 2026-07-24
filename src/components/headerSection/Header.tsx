// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { usePathname } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X, ChevronDown } from "lucide-react";

// const CTA_GRADIENT =
//   "linear-gradient(166deg, #ffae57 0%, #ff8a2e 40%, #fb6e11 100%)";

// const NAV_LINKS = [
//   // { label: "Challenge", href: "/#problem" },
//   { label: "Journey", href: "/#journey" },
//   { label: "Transformation", href: "/#transformations" },
//   { label: "Features", href: "/#features" },
//   { label: "Ulti-Bot", href: "/#ai" },
// ];

// const PG_CATEGORIES = [
//   {
//     id: "child_behaviour",
//     label: "Child Behaviour",
//     subtopics: [
//       { id: "cb_01", label: "Why Children Lie" },
//       { id: "cb_02", label: "Why Kids Talk Back" },
//       { id: "cb_03", label: "Stubborn Children" },
//       { id: "cb_04", label: "Discipline Without Punishment" },
//       { id: "cb_05", label: "Aggressive Behaviour" },
//       { id: "cb_06", label: "Why Children Refuse to Listen" },
//       { id: "cb_07", label: "Sibling Fights" },
//       { id: "cb_08", label: "Tantrums" },
//       { id: "cb_09", label: "Teaching Respect" },
//       { id: "cb_10", label: "Setting Boundaries" },
//     ],
//   },
//   {
//     id: "emotional_development",
//     label: "Emotional Development",
//     subtopics: [
//       { id: "ed_01", label: "Building Emotional Resilience" },
//       { id: "ed_02", label: "Emotional Intelligence in Children" },
//       { id: "ed_03", label: "Helping Children Express Emotions" },
//       { id: "ed_04", label: "Helping Children Overcome Fear" },
//       { id: "ed_05", label: "Helping Kids Deal with Frustration" },
//       { id: "ed_06", label: "Helping Kids Handle Disappointment" },
//       { id: "ed_07", label: "Managing Tantrums (Age 3–6)" },
//       { id: "ed_08", label: "Raising Emotionally Strong Children" },
//       { id: "ed_09", label: "Teaching Patience to Children" },
//       { id: "ed_10", label: "Why Children Get Angry" },
//     ],
//   },
//   {
//     id: "habits_discipline",
//     label: "Habits & Discipline",
//     subtopics: [
//       { id: "hd_01", label: "Building Reading Habits" },
//       { id: "hd_02", label: "Daily Routines for Children" },
//       { id: "hd_03", label: "Helping Kids Stay Organized" },
//       { id: "hd_04", label: "How Children Develop Habits" },
//       { id: "hd_05", label: "Morning Routines for Kids" },
//       { id: "hd_06", label: "Teaching Responsibility at Home" },
//       { id: "hd_07", label: "Teaching Self Discipline" },
//       { id: "hd_08", label: "Teaching Time Management" },
//       { id: "hd_09", label: "Screen Time Balance for Kids" },
//       { id: "hd_10", label: "Why Routines Help Children" },
//     ],
//   },
//   {
//     id: "school_life",
//     label: "School Life",
//     subtopics: [
//       { id: "sl_01", label: "Bullying in Primary Schools" },
//       { id: "sl_02", label: "Encouraging Curiosity in Kids" },
//       { id: "sl_03", label: "Helping Children Focus on Studies" },
//       { id: "sl_04", label: "Helping Kids Deal with Teasing" },
//       { id: "sl_05", label: "Helping Kids Develop Reading Habits" },
//       { id: "sl_06", label: "Helping Kids Make Friends" },
//       { id: "sl_07", label: "Homework Struggles in Children" },
//       { id: "sl_08", label: "Signs Your Child Is Being Bullied" },
//       { id: "sl_09", label: "Reducing School Stress" },
//       { id: "sl_10", label: "School Anxiety in Children" },
//     ],
//   },
//   {
//     id: "family_resources",
//     label: "Family Resources",
//     subtopics: [
//       { id: "fr_01", label: "Age-Wise Behaviour Guide" },
//       { id: "fr_02", label: "Emotional Development Chart" },
//       { id: "fr_03", label: "Habit Tracker for Kids" },
//       { id: "fr_04", label: "Parenting Checklist" },
//       { id: "fr_05", label: "Parenting Tools for Modern Parents" },
//       { id: "fr_06", label: "School Readiness Guide" },
//     ],
//   },
// ];

// const PC_OPTIONS = [
//   { id: "readometer", label: "Readometer", href: "/readometer" },
//   { id: "wordquest", label: "Wordquest", href: "/wordquest" },
//   // { id: "Top Parenting", label: "Top Parenting", href: "/top-parenting" },
// ];

// // desktop nav link with animated gradient underline
// const navLink =
//   "relative inline-flex items-center gap-[5px] pb-[5px] font-['Poppins',sans-serif] text-[14px] xl:text-[16px] font-medium text-[#8b8a98] no-underline transition-colors duration-500 hover:text-white cursor-pointer bg-transparent border-0 " +
//   "after:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:rounded-sm after:opacity-0 after:scale-x-0 after:origin-left after:transition-[transform,opacity] after:duration-700 after:ease-smooth hover:after:scale-x-100 hover:after:opacity-100 " +
//   "after:[background-image:linear-gradient(103.7deg,#ffb13d_0%,#ff7a18_26%,#ff4d8d_64%,#a24bff_100%)]";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [pgOpen, setPgOpen] = useState(false);
//   const [pcOpen, setPcOpen] = useState(false);
//   const [pgHovered, setPgHovered] = useState("child_behaviour");
//   const [mobilePgOpen, setMobilePgOpen] = useState(false);
//   const [mobilePcOpen, setMobilePcOpen] = useState(false);
//   const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>(
//     null
//   );
//   const router = useRouter();
//   const pathname = usePathname();
//   const isHome = pathname === "/";
//   const showFullNav =
//     isHome || pathname === "/readometer" || pathname === "/wordquest";

//   return (
//     <header className="relative z-[50] w-full flex-none bg-transparent">
//       <div className="mx-auto grid w-full max-w-[1600px] grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-3 sm:gap-8 sm:px-7 sm:py-4 lg:grid-cols-[1fr_auto_1fr] lg:px-[clamp(20px,4vw,72px)] lg:py-5">
//         {/* Logo */}
//         <Link href="/" className="flex items-center no-underline">
//           <Image
//             src="/images/logo/Ultimate-Logo.png"
//             alt="UltiMate"
//             width={60}
//             height={20}
//             className="h-auto w-auto object-contain"
//             priority
//           />
//         </Link>

//         {/* Desktop nav links */}
//         {showFullNav ? (
//           <ul className="m-0 hidden list-none items-center justify-center gap-4 p-0 lg:flex xl:gap-9">
//             {NAV_LINKS.map((link) => (
//               <li key={link.href}>
//                 <Link href={link.href} className={navLink}>
//                   {link.label}
//                 </Link>
//               </li>
//             ))}

//             {/* Parenting Guide mega-menu */}
//             <li
//               className="relative flex h-full items-center"
//               onMouseEnter={() => setPgOpen(true)}
//               onMouseLeave={() => setPgOpen(false)}
//             >
//               <button
//                 onClick={() => {
//                   setPgOpen(false);
//                   router.push("/parenting-guide");
//                 }}
//                 className={navLink}
//               >
//                 Parenting Guide
//                 <ChevronDown
//                   size={13}
//                   className={`transition-transform duration-200 ${
//                     pgOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>

//               {pgOpen && (
// <div className="absolute left-0 top-full z-[200] pt-3.5">
//     <div className="flex max-w-[calc(100vw-2rem)] min-w-[560px] overflow-hidden rounded-b-[18px] rounded-t-[3px] border border-[rgba(249,115,22,0.18)] border-t-[3px] border-t-[#ff7a18] bg-white shadow-[0_24px_60px_rgba(0,0,0,0.35)]">                  {/* categories */}
//                   <div className="w-[210px] border-r border-[#f1f1f4] py-2">
//                     {PG_CATEGORIES.map((cat) => {
//                       const active = pgHovered === cat.id;
//                       return (
//                         <div
//                           key={cat.id}
//                           className={`flex cursor-pointer items-center justify-between px-4 py-2.5 font-['Poppins',sans-serif] text-[14px] font-medium transition-all duration-150 ${
//                             active
//                               ? "border-l-[3px] border-[#ff7a18] bg-[#fff6ef] text-[#ff7a18]"
//                               : "border-l-[3px] border-transparent text-[#374151]"
//                           }`}
//                           onMouseEnter={() => setPgHovered(cat.id)}
//                           onClick={() => {
//                             router.push(`/parenting-guide?artId=${cat.id}`);
//                             setPgOpen(false);
//                           }}
//                         >
//                           <span>{cat.label}</span>
//                           <svg
//                             width="10"
//                             height="10"
//                             viewBox="0 0 10 10"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth="1.5"
//                           >
//                             <path d="M3 2l4 3-4 3" />
//                           </svg>
//                         </div>
//                       );
//                     })}
//                   </div>

//                   {/* subtopics */}
//                   <div className="max-h-[320px] flex-1 overflow-y-auto px-1.5 py-2">
//                     {PG_CATEGORIES.find(
//                       (c) => c.id === pgHovered
//                     )?.subtopics.map((sub) => (
//                       <div
//                         key={sub.id}
//                         className="cursor-pointer rounded-lg px-4 py-[7px] font-['Poppins',sans-serif] text-[13px] text-[#4b5563] transition-all duration-100 hover:bg-[rgba(255,122,24,0.06)] hover:text-[#ff7a18]"
//                         onClick={() => {
//                           router.push(`/parenting-guide?artId=${sub.id}`);
//                           setPgOpen(false);
//                         }}
//                       >
//                         {sub.label}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//                 </div>
//               )}
//             </li>

//             {/* Parenting Corner dropdown */}
//             <li
//               className="relative flex h-full items-center"
//               onMouseEnter={() => setPcOpen(true)}
//               onMouseLeave={() => setPcOpen(false)}
//             >
//               <button className={navLink}>
//                 Parenting Corner
//                 <ChevronDown
//                   size={13}
//                   className={`transition-transform duration-200 ${
//                     pcOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>

//               {pcOpen && (
// <div className="absolute left-0 top-full z-[200] pt-3.5">
//     <div className="flex min-w-[200px] flex-col overflow-hidden rounded-b-[18px] rounded-t-[3px] border border-[rgba(249,115,22,0.18)] border-t-[3px] border-t-[#ff7a18] bg-white py-2 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">                  {PC_OPTIONS.map((opt) => {
//                     const isActive = pathname === opt.href;
//                     return (
//                       <div
//                         key={opt.id}
//                         className={`cursor-pointer border-l-[3px] px-4 py-2.5 font-['Poppins',sans-serif] text-[14px] transition-all duration-100 ${
//                           isActive
//                             ? "border-[#ff7a18] bg-[#fff6ef] text-[#ff7a18]"
//                             : "border-transparent text-[#4b5563] hover:border-[#ff7a18] hover:bg-[#fff6ef] hover:text-[#ff7a18]"
//                         }`}
//                         onClick={() => {
//                           router.push(opt.href);
//                           setPcOpen(false);
//                         }}
//                       >
//                         {opt.label}
//                       </div>
//                     );
//                   })}
//                 </div>
//                 </div>
//               )}
//             </li>
//           </ul>
//         ) : (
//           <span className="hidden lg:block" />
//         )}

//         {/* Desktop right buttons */}
//         <div className="hidden items-center justify-end gap-2.5 lg:flex xl:gap-3">
//           <Link
//             href="/blogs"
//             className="cursor-pointer rounded-[13px] border border-[rgba(255,154,64,0.45)] bg-white/[0.04] px-4 py-2 font-['Outfit',sans-serif] text-[14px] font-bold text-[#ffb36b] no-underline transition-[transform,background] duration-900 ease-smooth hover:-translate-y-px hover:bg-[rgba(255,154,64,0.10)] xl:px-5 xl:py-[9px] xl:text-[15px]"
//           >
//             Blogs
//           </Link>
//           <button
//             onClick={() => router.push("/download-app")}
//             className="cursor-pointer rounded-[13px] border-0 px-5 py-2.5 font-['Outfit',sans-serif] text-[14px] font-bold text-white transition-[transform,filter] duration-900 ease-smooth hover:-translate-y-px hover:brightness-105 xl:px-[22px] xl:py-[11px] xl:text-[15px]"
//             style={{ background: CTA_GRADIENT }}
//           >
//             Get the App
//           </button>
//         </div>

//         {/* Mobile hamburger */}
//         <button
//           className="justify-self-end p-1 text-white lg:hidden"
//           onClick={() => setMenuOpen((v) => !v)}
//           aria-label="Toggle menu"
//         >
//           {menuOpen ? <X size={22} /> : <Menu size={22} />}
//         </button>
//       </div>

//       {/* Mobile drawer */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             key="mobile-menu"
//             initial={{ opacity: 0, y: -12 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -12 }}
//             transition={{ duration: 0.22, ease: "easeOut" }}
//             className="absolute left-0 right-0 top-full z-[99] flex max-h-[calc(100svh-64px)] flex-col gap-4 overflow-y-auto border-b border-white/[0.08] px-5 py-5 backdrop-blur-[16px] lg:hidden"
//             style={{ background: "rgba(6,8,18,0.97)" }}
//           >
//             {showFullNav &&
//               NAV_LINKS.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   onClick={() => setMenuOpen(false)}
//                   className="cursor-pointer text-left font-['Poppins',sans-serif] text-[16px] font-medium text-[#c3c2ce] no-underline transition-colors duration-300 hover:text-white"
//                 >
//                   {link.label}
//                 </Link>
//               ))}

//             {/* Parenting Guide accordion */}
//             {showFullNav && (
//               <div>
//                 <div className="flex items-center justify-between">
//                   <button
//                     onClick={() => {
//                       router.push("/parenting-guide");
//                       setMenuOpen(false);
//                     }}
//                     className="cursor-pointer border-0 bg-transparent text-left font-['Poppins',sans-serif] text-[16px] font-medium text-[#c3c2ce] transition-colors duration-300 hover:text-white"
//                   >
//                     Parenting Guide
//                   </button>
//                   <button
//                     onClick={() => setMobilePgOpen((v) => !v)}
//                     className="border-0 bg-transparent p-1 text-[#8b8a98]"
//                     aria-label="Toggle parenting guide menu"
//                   >
//                     <ChevronDown
//                       size={16}
//                       className={`transition-transform duration-200 ${
//                         mobilePgOpen ? "rotate-180" : ""
//                       }`}
//                     />
//                   </button>
//                 </div>

//                 <AnimatePresence>
//                   {mobilePgOpen && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: "auto" }}
//                       exit={{ opacity: 0, height: 0 }}
//                       transition={{ duration: 0.2 }}
//                       className="mt-2 overflow-hidden"
//                     >
//                       {PG_CATEGORIES.map((cat) => (
//                         <div key={cat.id} className="mb-1">
//                           <div className="flex items-center justify-between">
//                             <button
//                               onClick={() => {
//                                 router.push(
//                                   `/parenting-guide?artId=${cat.id}`
//                                 );
//                                 setMenuOpen(false);
//                               }}
//                               className="cursor-pointer border-0 bg-transparent py-2 pl-3 text-left font-['Poppins',sans-serif] text-[14px] font-semibold text-[#ffb36b]"
//                             >
//                               {cat.label}
//                             </button>
//                             <button
//                               onClick={() =>
//                                 setMobileExpandedCat((prev) =>
//                                   prev === cat.id ? null : cat.id
//                                 )
//                               }
//                               className="border-0 bg-transparent p-2 text-[#8b8a98]"
//                             >
//                               <ChevronDown
//                                 size={14}
//                                 className={`transition-transform duration-200 ${
//                                   mobileExpandedCat === cat.id
//                                     ? "rotate-180"
//                                     : ""
//                                 }`}
//                               />
//                             </button>
//                           </div>

//                           <AnimatePresence>
//                             {mobileExpandedCat === cat.id && (
//                               <motion.div
//                                 initial={{ opacity: 0, height: 0 }}
//                                 animate={{ opacity: 1, height: "auto" }}
//                                 exit={{ opacity: 0, height: 0 }}
//                                 transition={{ duration: 0.15 }}
//                                 className="overflow-hidden pl-4"
//                               >
//                                 {cat.subtopics.map((sub) => (
//                                   <button
//                                     key={sub.id}
//                                     onClick={() => {
//                                       router.push(
//                                         `/parenting-guide?artId=${sub.id}`
//                                       );
//                                       setMenuOpen(false);
//                                     }}
//                                     className="block w-full cursor-pointer border-0 bg-transparent py-1.5 text-left font-['Poppins',sans-serif] text-[13px] text-[#8b8a98] transition-colors duration-300 hover:text-white"
//                                   >
//                                     {sub.label}
//                                   </button>
//                                 ))}
//                               </motion.div>
//                             )}
//                           </AnimatePresence>
//                         </div>
//                       ))}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             )}

//             {/* Parenting Corner accordion */}
//             {showFullNav && (
//               <div className="mt-2">
//                 <div className="flex items-center justify-between">
//                   <span className="font-['Poppins',sans-serif] text-[16px] font-medium text-[#c3c2ce]">
//                     Parenting Corner
//                   </span>
//                   <button
//                     onClick={() => setMobilePcOpen((v) => !v)}
//                     className="border-0 bg-transparent p-1 text-[#8b8a98]"
//                     aria-label="Toggle parenting corner menu"
//                   >
//                     <ChevronDown
//                       size={16}
//                       className={`transition-transform duration-200 ${
//                         mobilePcOpen ? "rotate-180" : ""
//                       }`}
//                     />
//                   </button>
//                 </div>

//                 <AnimatePresence>
//                   {mobilePcOpen && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: "auto" }}
//                       exit={{ opacity: 0, height: 0 }}
//                       transition={{ duration: 0.2 }}
//                       className="mt-1 overflow-hidden pl-3"
//                     >
//                       {PC_OPTIONS.map((opt) => {
//                         const isActive = pathname === opt.href;
//                         return (
//                           <button
//                             key={opt.id}
//                             onClick={() => {
//                               router.push(opt.href);
//                               setMenuOpen(false);
//                             }}
//                             className={`block w-full cursor-pointer border-l-[3px] bg-transparent py-2 pl-3 text-left font-['Poppins',sans-serif] text-[14px] transition-all duration-150 ${
//                               isActive
//                                 ? "border-[#ff7a18] bg-[rgba(255,122,24,0.05)] text-[#ff7a18]"
//                                 : "border-transparent text-[#8b8a98] hover:border-[#ff7a18] hover:text-white"
//                             }`}
//                           >
//                             {opt.label}
//                           </button>
//                         );
//                       })}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             )}

//             {/* CTA buttons */}
//             <div className="flex flex-wrap items-center gap-3 pt-1">
//               <Link
//                 href="/blogs"
//                 onClick={() => setMenuOpen(false)}
//                 className="cursor-pointer rounded-[13px] border border-[rgba(255,154,64,0.45)] bg-white/[0.04] px-5 py-[9px] font-['Outfit',sans-serif] text-[15px] font-bold text-[#ffb36b] no-underline"
//               >
//                 Blog
//               </Link>
//               <button
//                 onClick={() => {
//                   router.push("/download-app");
//                   setMenuOpen(false);
//                 }}
//                 className="cursor-pointer rounded-[13px] border-0 px-[22px] py-[11px] font-['Outfit',sans-serif] text-[15px] font-bold text-white"
//                 style={{ background: CTA_GRADIENT }}
//               >
//                 Get the App
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }




"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const CTA_GRADIENT =
  "linear-gradient(166deg, #ffae57 0%, #ff8a2e 40%, #fb6e11 100%)";

const NAV_LINKS = [
  // { label: "Challenge", href: "/#problem" },
  { label: "Journey", href: "/#journey" },
  { label: "Transformation", href: "/#transformations" },
  { label: "Features", href: "/#features" },
  { label: "Ulti-Bot", href: "/#ai" },
];

const PG_CATEGORIES = [
  {
    id: "child_behaviour",
    label: "Child Behaviour",
    subtopics: [
      { id: "cb_01", label: "Why Children Lie" },
      { id: "cb_02", label: "Why Kids Talk Back" },
      { id: "cb_03", label: "Stubborn Children" },
      { id: "cb_04", label: "Discipline Without Punishment" },
      { id: "cb_05", label: "Aggressive Behaviour" },
      { id: "cb_06", label: "Why Children Refuse to Listen" },
      { id: "cb_07", label: "Sibling Fights" },
      { id: "cb_08", label: "Tantrums" },
      { id: "cb_09", label: "Teaching Respect" },
      { id: "cb_10", label: "Setting Boundaries" },
    ],
  },
  {
    id: "emotional_development",
    label: "Emotional Development",
    subtopics: [
      { id: "ed_01", label: "Building Emotional Resilience" },
      { id: "ed_02", label: "Emotional Intelligence in Children" },
      { id: "ed_03", label: "Helping Children Express Emotions" },
      { id: "ed_04", label: "Helping Children Overcome Fear" },
      { id: "ed_05", label: "Helping Kids Deal with Frustration" },
      { id: "ed_06", label: "Helping Kids Handle Disappointment" },
      { id: "ed_07", label: "Managing Tantrums (Age 3–6)" },
      { id: "ed_08", label: "Raising Emotionally Strong Children" },
      { id: "ed_09", label: "Teaching Patience to Children" },
      { id: "ed_10", label: "Why Children Get Angry" },
    ],
  },
  {
    id: "habits_discipline",
    label: "Habits & Discipline",
    subtopics: [
      { id: "hd_01", label: "Building Reading Habits" },
      { id: "hd_02", label: "Daily Routines for Children" },
      { id: "hd_03", label: "Helping Kids Stay Organized" },
      { id: "hd_04", label: "How Children Develop Habits" },
      { id: "hd_05", label: "Morning Routines for Kids" },
      { id: "hd_06", label: "Teaching Responsibility at Home" },
      { id: "hd_07", label: "Teaching Self Discipline" },
      { id: "hd_08", label: "Teaching Time Management" },
      { id: "hd_09", label: "Screen Time Balance for Kids" },
      { id: "hd_10", label: "Why Routines Help Children" },
    ],
  },
  {
    id: "school_life",
    label: "School Life",
    subtopics: [
      { id: "sl_01", label: "Bullying in Primary Schools" },
      { id: "sl_02", label: "Encouraging Curiosity in Kids" },
      { id: "sl_03", label: "Helping Children Focus on Studies" },
      { id: "sl_04", label: "Helping Kids Deal with Teasing" },
      { id: "sl_05", label: "Helping Kids Develop Reading Habits" },
      { id: "sl_06", label: "Helping Kids Make Friends" },
      { id: "sl_07", label: "Homework Struggles in Children" },
      { id: "sl_08", label: "Signs Your Child Is Being Bullied" },
      { id: "sl_09", label: "Reducing School Stress" },
      { id: "sl_10", label: "School Anxiety in Children" },
    ],
  },
  {
    id: "family_resources",
    label: "Family Resources",
    subtopics: [
      { id: "fr_01", label: "Age-Wise Behaviour Guide" },
      { id: "fr_02", label: "Emotional Development Chart" },
      { id: "fr_03", label: "Habit Tracker for Kids" },
      { id: "fr_04", label: "Parenting Checklist" },
      { id: "fr_05", label: "Parenting Tools for Modern Parents" },
      { id: "fr_06", label: "School Readiness Guide" },
    ],
  },
];

const PC_OPTIONS = [
  { id: "readometer", label: "Readometer", href: "/readometer" },
  { id: "wordquest", label: "Wordquest", href: "/wordquest" },
  // { id: "Top Parenting", label: "Top Parenting", href: "/top-parenting" },
];

// desktop nav link with animated gradient underline
const navLink =
  "relative inline-flex items-center gap-[5px] pb-[5px] font-['Poppins',sans-serif] text-[13px] xl:text-[14px] font-medium text-[#8b8a98] no-underline transition-colors duration-500 hover:text-white cursor-pointer bg-transparent border-0 " +
  "after:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:rounded-sm after:opacity-0 after:scale-x-0 after:origin-left after:transition-[transform,opacity] after:duration-700 after:ease-smooth hover:after:scale-x-100 hover:after:opacity-100 " +
  "after:[background-image:linear-gradient(103.7deg,#ffb13d_0%,#ff7a18_26%,#ff4d8d_64%,#a24bff_100%)]";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pgOpen, setPgOpen] = useState(false);
  const [pcOpen, setPcOpen] = useState(false);
  const [pgHovered, setPgHovered] = useState("child_behaviour");
  const [mobilePgOpen, setMobilePgOpen] = useState(false);
  const [mobilePcOpen, setMobilePcOpen] = useState(false);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>(
    null
  );
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const showFullNav =
    isHome || pathname === "/readometer" || pathname === "/wordquest";

  return (
    <header className="absolute top-0 left-0 right-0 z-[50] w-full">
      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-2 sm:gap-8 sm:px-7 sm:py-2.5 lg:grid-cols-[1fr_auto_1fr] lg:px-[clamp(20px,4vw,72px)] lg:py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center no-underline">
          <Image
            src="/images/logo/Ultimate-Logo.png"
            alt="UltiMate"
            width={60}
            height={20}
            className="h-auto w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav links */}
        {showFullNav ? (
          <ul className="m-0 hidden list-none items-center justify-center gap-4 p-0 lg:flex xl:gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={navLink}>
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Parenting Guide mega-menu */}
            <li
              className="relative flex h-full items-center"
              onMouseEnter={() => setPgOpen(true)}
              onMouseLeave={() => setPgOpen(false)}
            >
              <button
                className={navLink}
              >
                Parenting Guide
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ${pgOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {pgOpen && (
                <div className="absolute left-0 top-full z-[200] pt-3.5">
                  <div className="flex max-w-[calc(100vw-2rem)] min-w-[560px] overflow-hidden rounded-b-[18px] rounded-t-[3px] border border-[rgba(249,115,22,0.18)] border-t-[3px] border-t-[#ff7a18] bg-white shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
                    {/* categories */}
                    <div className="w-[210px] border-r border-[#f1f1f4] py-2">
                      {PG_CATEGORIES.map((cat) => {
                        const active = pgHovered === cat.id;
                        return (
                          <div
                            key={cat.id}
                            className={`flex cursor-pointer items-center justify-between px-4 py-2.5 font-['Poppins',sans-serif] text-[13px] font-medium transition-all duration-150 ${active
                              ? "border-l-[3px] border-[#ff7a18] bg-[#fff6ef] text-[#ff7a18]"
                              : "border-l-[3px] border-transparent text-[#374151]"
                              }`}
                            onMouseEnter={() => setPgHovered(cat.id)}
                            onClick={() => {
                              router.push(`/parenting-guide?artId=${cat.id}`);
                              setPgOpen(false);
                            }}
                          >
                            <span>{cat.label}</span>
                            <svg
                              width="10"
                              height="10"
                              viewBox="0 0 10 10"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            >
                              <path d="M3 2l4 3-4 3" />
                            </svg>
                          </div>
                        );
                      })}
                    </div>

                    {/* subtopics */}
                    <div className="max-h-[320px] flex-1 overflow-y-auto px-1.5 py-2">
                      {PG_CATEGORIES.find(
                        (c) => c.id === pgHovered
                      )?.subtopics.map((sub) => (
                        <div
                          key={sub.id}
                          className="cursor-pointer rounded-lg px-4 py-[7px] font-['Poppins',sans-serif] text-[12.5px] text-[#4b5563] transition-all duration-100 hover:bg-[rgba(255,122,24,0.06)] hover:text-[#ff7a18]"
                          onClick={() => {
                            router.push(`/parenting-guide?artId=${sub.id}`);
                            setPgOpen(false);
                          }}
                        >
                          {sub.label}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* Parenting Corner dropdown */}
            <li
              className="relative flex h-full items-center"
              onMouseEnter={() => setPcOpen(true)}
              onMouseLeave={() => setPcOpen(false)}
            >
              <button className={navLink}>
                Parenting Corner
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ${pcOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {pcOpen && (
                <div className="absolute left-0 top-full z-[200] pt-3.5">
                  <div className="flex min-w-[200px] flex-col overflow-hidden rounded-b-[18px] rounded-t-[3px] border border-[rgba(249,115,22,0.18)] border-t-[3px] border-t-[#ff7a18] bg-white py-2 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
                    {PC_OPTIONS.map((opt) => {
                      const isActive = pathname === opt.href;
                      return (
                        <div
                          key={opt.id}
                          className={`cursor-pointer border-l-[3px] px-4 py-2.5 font-['Poppins',sans-serif] text-[13px] transition-all duration-100 ${isActive
                            ? "border-[#ff7a18] bg-[#fff6ef] text-[#ff7a18]"
                            : "border-transparent text-[#4b5563] hover:border-[#ff7a18] hover:bg-[#fff6ef] hover:text-[#ff7a18]"
                            }`}
                          onClick={() => {
                            router.push(opt.href);
                            setPcOpen(false);
                          }}
                        >
                          {opt.label}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </li>
          </ul>
        ) : (
          <span className="hidden lg:block" />
        )}

        {/* Desktop right buttons */}
        <div className="hidden items-center justify-end gap-2.5 lg:flex xl:gap-3">
          <Link
            href="/blogs"
            className="cursor-pointer rounded-[12px] border border-[rgba(255,154,64,0.45)] bg-white/[0.04] px-3.5 py-1.5 font-['Outfit',sans-serif] text-[13px] font-bold text-[#ffb36b] no-underline transition-[transform,background] duration-900 ease-smooth hover:-translate-y-px hover:bg-[rgba(255,154,64,0.10)] xl:px-4 xl:py-2 xl:text-[14px]"
          >
            Blogs
          </Link>
          <button
            onClick={() => router.push("/download-app")}
            className="cursor-pointer rounded-[12px] border-0 px-4 py-2 font-['Outfit',sans-serif] text-[13px] font-bold text-white transition-[transform,filter] duration-900 ease-smooth hover:-translate-y-px hover:brightness-105 xl:px-5 xl:py-2.5 xl:text-[14px]"
            style={{ background: CTA_GRADIENT }}
          >
            Get the App
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="justify-self-end p-1 text-white lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="absolute left-0 right-0 top-full z-[99] flex max-h-[calc(100svh-64px)] flex-col gap-3.5 overflow-y-auto border-b border-white/[0.08] px-5 py-4 backdrop-blur-[16px] lg:hidden"
            style={{ background: "rgba(5,5,7,0.97)" }}
          >
            {showFullNav &&
              NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="cursor-pointer text-left font-['Poppins',sans-serif] text-[15px] font-medium text-[#c3c2ce] no-underline transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}

            {/* Parenting Guide accordion */}
            {showFullNav && (
              <div>
                <div className="flex items-center justify-between">
                  <button
                    className="border-0 bg-transparent text-left font-['Poppins',sans-serif] text-[15px] font-medium text-[#c3c2ce] transition-colors duration-300 hover:text-white"
                  >
                    Parenting Guide
                  </button>
                  <button
                    onClick={() => setMobilePgOpen((v) => !v)}
                    className="border-0 bg-transparent p-1 text-[#8b8a98]"
                    aria-label="Toggle parenting guide menu"
                  >
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${mobilePgOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                </div>

                <AnimatePresence>
                  {mobilePgOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-2 overflow-hidden"
                    >
                      {PG_CATEGORIES.map((cat) => (
                        <div key={cat.id} className="mb-1">
                          <div className="flex items-center justify-between">
                            <button
                              onClick={() => {
                                router.push(`/parenting-guide?artId=${cat.id}`);
                                setMenuOpen(false);
                              }}
                              className="cursor-pointer border-0 bg-transparent py-2 pl-3 text-left font-['Poppins',sans-serif] text-[13.5px] font-semibold text-[#ffb36b]"
                            >
                              {cat.label}
                            </button>
                            <button
                              onClick={() =>
                                setMobileExpandedCat((prev) =>
                                  prev === cat.id ? null : cat.id
                                )
                              }
                              className="border-0 bg-transparent p-2 text-[#8b8a98]"
                            >
                              <ChevronDown
                                size={14}
                                className={`transition-transform duration-200 ${mobileExpandedCat === cat.id
                                  ? "rotate-180"
                                  : ""
                                  }`}
                              />
                            </button>
                          </div>

                          <AnimatePresence>
                            {mobileExpandedCat === cat.id && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.15 }}
                                className="overflow-hidden pl-4"
                              >
                                {cat.subtopics.map((sub) => (
                                  <button
                                    key={sub.id}
                                    onClick={() => {
                                      router.push(
                                        `/parenting-guide?artId=${sub.id}`
                                      );
                                      setMenuOpen(false);
                                    }}
                                    className="block w-full cursor-pointer border-0 bg-transparent py-1.5 text-left font-['Poppins',sans-serif] text-[12.5px] text-[#8b8a98] transition-colors duration-300 hover:text-white"
                                  >
                                    {sub.label}
                                  </button>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* Parenting Corner accordion */}
            {showFullNav && (
              <div className="mt-2">
                <div className="flex items-center justify-between">
                  <span className="font-['Poppins',sans-serif] text-[15px] font-medium text-[#c3c2ce]">
                    Parenting Corner
                  </span>
                  <button
                    onClick={() => setMobilePcOpen((v) => !v)}
                    className="border-0 bg-transparent p-1 text-[#8b8a98]"
                    aria-label="Toggle parenting corner menu"
                  >
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${mobilePcOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                </div>

                <AnimatePresence>
                  {mobilePcOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-1 overflow-hidden pl-3"
                    >
                      {PC_OPTIONS.map((opt) => {
                        const isActive = pathname === opt.href;
                        return (
                          <button
                            key={opt.id}
                            onClick={() => {
                              router.push(opt.href);
                              setMenuOpen(false);
                            }}
                            className={`block w-full cursor-pointer border-l-[3px] bg-transparent py-2 pl-3 text-left font-['Poppins',sans-serif] text-[13.5px] transition-all duration-150 ${isActive
                              ? "border-[#ff7a18] bg-[rgba(255,122,24,0.05)] text-[#ff7a18]"
                              : "border-transparent text-[#8b8a98] hover:border-[#ff7a18] hover:text-white"
                              }`}
                          >
                            {opt.label}
                          </button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="/blogs"
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer rounded-[12px] border border-[rgba(255,154,64,0.45)] bg-white/[0.04] px-4 py-2 font-['Outfit',sans-serif] text-[14px] font-bold text-[#ffb36b] no-underline"
              >
                Blog
              </Link>
              <button
                onClick={() => {
                  router.push("/download-app");
                  setMenuOpen(false);
                }}
                className="cursor-pointer rounded-[12px] border-0 px-5 py-2.5 font-['Outfit',sans-serif] text-[14px] font-bold text-white"
                style={{ background: CTA_GRADIENT }}
              >
                Get the App
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}