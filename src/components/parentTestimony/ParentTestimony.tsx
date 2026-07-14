// // import React from 'react'
// // import styles from "./ParentTestimony.module.css"
// // import { montserratBold } from '@/fonts/fonts'

// // function ParentTestimony() {
// //     const parentTestimony = [
// //         {
// //             id: 1,
// //             videoPath:"/videos/parent-testimony/Arun_Testimonial.mp4"
// //         },
// //         {
// //             id: 2,
// //             videoPath:"/videos/parent-testimony/Teju.mp4"
// //         }
// //     ]
// //   return (
// //     <div className={`${styles.parentTestimonyContainer} py-8`}>
// //         <div className=''>
// //             <h1 className={`text-2xl md:text-5xl text-white text-center ${montserratBold.className} ${styles.parentTestimony}`}>Parent Testimony</h1>
// //           </div>
// //           <div className='flex md:flex-row justify-center mt-[3rem]'>
// //               {parentTestimony.map((testimony) => {
// //                   return <div key={testimony.id} className='w-[30%] border-2 h-[20rem] bg-lime-500'>
// //                       <video
// //                                         className="w-[70%] cover"
// //                                         controls
// //                                     >
// //                                         <source src={testimony.videoPath} type="video/mp4" />
// //                                         Your browser does not support the video tag.
// //                                     </video>
// //                   </div>
// //               })}
// //           </div>
// //     </div>
// //   )
// // }

// // export default ParentTestimony


// import React from 'react';
// import styles from "./ParentTestimony.module.css";
// import { montserratBold } from '@/fonts/fonts';
// import Image from 'next/image';
// import Link from 'next/link';

// function ParentTestimony() {
//     const parentTestimony = [
//         {
//             id: 1,
//             videoPath: "/videos/parent-testimony/Arun_Testimonial.mp4"
//         },
//         {
//             id: 2,
//             videoPath: "/videos/parent-testimony/Teju_Testimonial.mp4"
//         }
//     ];

//     return (
//         <div className={`${styles.parentTestimonyContainer} py-8 `}>
//         <div className={` flex flex-col md:flex-row justify-center`}>
//             <div className='w-[80%] mb-4 md:mb-0 md:w-[30%] mx-auto flex justify-end items-center md:ml-[4rem]'>
//                 <h2 className={`text-2xl md:text-4xl text-white text-center ${montserratBold.className} ${styles.parentTestimony}`}>
//                 What Parents Say About <span className={`${styles.ultimateText}`}>Ulti-Mate</span>
//                 </h2>
//             </div>
//             <div className='flex flex-col md:flex-row justify-center mt-8 items-center mx-auto w-[70%]'>
//                 {parentTestimony.map((testimony) => (
//                     <div key={testimony.id} className='w-[80%] md:w-[30%] border border-1 h-auto aspect-[14/16] md:aspect-[14/16] overflow-hidden rounded-lg shadow-lg my-4 md:mx-4'>
//                         <video
//                             className="w-full h-full object-contain"
//                             controls
//                         >
//                             <source src={testimony.videoPath} type="video/mp4" />
//                             Your browser does not support the video tag.
//                         </video>
//                     </div>
//                 ))}
//                 </div>
//                 </div>
//             {/* app download links */}
//              <div className='flex flex-col md:flex-row md:w-[40%] w-[90%] mx-auto my-10'>
//                             {/* <div className='md:w-[48%] h-14 w-full my-2 relative overflow-hidden'><Image src={"/images/applink/app_store.png"} alt="App store" objectFit='contain' fill></Image></div>
//                             <div  className='md:w-[48%] h-14 w-full my-2 relative overflow-hidden'><Image src={"/images/applink/play_store.png"} alt="Play store" objectFit='contain' fill></Image></div> */}
//                              <Link
//                                 href={`https://apps.apple.com/in/app/ultimate-parenting/id6593687319`}
//                                 target="_blank" // Opens link in a new tab
//                                 rel="noopener noreferrer" // Security best practice for external links
//                                 className='md:w-[48%] mx-4 h-14 w-full my-2 relative overflow-hidden'
//                             >
//                                 <Image
//                                     src="/images/applink/app_store_white.png"
//                                     alt="App store"
//                                     fill
//                                     className="object-contain"
//                                     priority // Add priority for above-the-fold images
//                                 />
//                             </Link>
//                             <Link
//                                 href={`https://play.google.com/store/apps/details?id=com.ultimate_bond`}
//                                 target="_blank" // Opens link in a new tab
//                                 rel="noopener noreferrer" // Security best practice for external links
//                                 className='md:w-[48%] mx-4 h-14 w-full my-2 relative overflow-hidden'
//                             >
//                                 <Image
//                                     src="/images/applink/play_store_white.png"
//                                     alt="Play store"
//                                     fill
//                                     className="object-contain"
//                                     priority // Add priority for above-the-fold images
//                                 />
//                             </Link>
//                         </div>
            
//             </div>
//     );
// }

// export default ParentTestimony;





// "use client";

// import { useEffect, useRef, useState, useCallback } from "react";
// // import { motion } from "framer-motion";
// import { containerClass, SectionHeader } from "@/components/ui/UI";

// /* ── Video sources — add your files to /public/videos/ ── */
// const VIDEOS = [
//   "/videos/parent-testimony/testimony-1.mp4",
//   "/videos/parent-testimony/testimony-2.mp4",
//   "/videos/parent-testimony/testimony-3.mp4",
// //   "/videos/parent-testimony/testimony-6.mp4",
// ];

// /* ── Single video card ── */
// function VideoCard({ src, onPlay }: { src: string; onPlay: (el: HTMLVideoElement) => void }) {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [playing, setPlaying] = useState(false);

//   const togglePlay = () => {
//     const v = videoRef.current;
//     if (!v) return;
//     if (v.paused) {
//       onPlay(v); // pause all others first
//       v.play();
//       setPlaying(true);
//     } else {
//       v.pause();
//       setPlaying(false);
//     }
//   };

//   // When another card plays, pause this one
//   useEffect(() => {
//     const v = videoRef.current;
//     if (!v) return;
//     const handlePause = () => setPlaying(false);
//     v.addEventListener("pause", handlePause);
//     return () => v.removeEventListener("pause", handlePause);
//   }, []);

//   return (
//     <div
//       className="flex-none rounded-[20px] overflow-hidden transition-all duration-300 hover:-translate-y-[6px] group"
//       style={{
//         width: "300px",
//         background: "#0a0e1f",
//         border: "1px solid rgba(255,255,255,0.07)",
//       }}
//       onMouseEnter={(e) => {
//         (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(249,115,22,0.3)";
//         (e.currentTarget as HTMLDivElement).style.boxShadow =
//           "0 12px 48px rgba(0,0,0,0.4), 0 0 20px rgba(249,115,22,0.18)";
//       }}
//       onMouseLeave={(e) => {
//         (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
//         (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
//       }}
//     >
//       {/* video container — 9:14 aspect ratio */}
//       <div className="relative overflow-hidden bg-black" style={{ aspectRatio: "9/14" }}>
//         <video
//           ref={videoRef}
//           src={src}
//           preload="metadata"
//           playsInline
//           loop
//           className="w-full h-full object-cover block"
//         />

//         {/* play overlay */}
//         <div
//           className={`absolute inset-0 flex items-center justify-center cursor-pointer transition-all duration-300 z-[2] ${
//             playing ? "opacity-0 pointer-events-none" : "opacity-100"
//           }`}
//           style={{
//             background:
//               "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 100%)",
//           }}
//           onClick={togglePlay}
//         >
//           <div
//             className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
//             style={{
//               background: "rgba(249,115,22,0.9)",
//               boxShadow: "0 0 30px rgba(249,115,22,0.5)",
//             }}
//           >
//             <svg
//               viewBox="0 0 24 24"
//               className="w-6 h-6 ml-0.5"
//               fill="white"
//             >
//               <polygon points="6,3 20,12 6,21" />
//             </svg>
//           </div>
//         </div>

//         {/* tap to pause when playing */}
//         {playing && (
//           <div
//             className="absolute inset-0 z-[2] cursor-pointer"
//             onClick={togglePlay}
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// /* ── Main Testimonials component ── */
// export default function Testimonials() {
//   const trackRef = useRef<HTMLDivElement>(null);
//   const [currentPage, setCurrentPage] = useState(0);
//   const [pageCount, setPageCount] = useState(1);
//   const [translate, setTranslate] = useState(0);

//   // drag state
//   const isDragging = useRef(false);
//   const startX = useRef(0);
//   const scrollStart = useRef(0);

//   /* pause all videos except the one passed */
//   const pauseOthers = useCallback((except: HTMLVideoElement) => {
//     trackRef.current?.querySelectorAll("video").forEach((v) => {
//       if (v !== except) {
//         v.pause();
//         v.currentTime = 0;
//       }
//     });
//   }, []);

//   /* geometry helpers */
//   const getMaxScroll = useCallback(() => {
//     const el = trackRef.current;
//     if (!el) return 0;
//     const cards = Array.from(el.children) as HTMLElement[];
//     const totalW = cards.reduce((s, c) => s + c.offsetWidth + 24, -24);
//     return Math.max(0, totalW - el.parentElement!.offsetWidth);
//   }, []);

//   const calcPageCount = useCallback(() => {
//     const el = trackRef.current;
//     if (!el) return 1;
//     const cards = Array.from(el.children) as HTMLElement[];
//     const totalW = cards.reduce((s, c) => s + c.offsetWidth + 24, -24);
//     const viewW = el.parentElement!.offsetWidth;
//     return Math.max(1, Math.ceil(totalW / viewW));
//   }, []);

//   const goToPage = useCallback(
//     (page: number) => {
//       const el = trackRef.current;
//       if (!el) return;
//       const viewW = el.parentElement!.offsetWidth;
//       const maxScroll = getMaxScroll();
//       const pages = calcPageCount();
//       const clamped = Math.max(0, Math.min(page, pages - 1));
//       let target = clamped * viewW;
//       if (target > maxScroll) target = maxScroll;
//       setTranslate(-target);
//       setCurrentPage(clamped);
//     },
//     [getMaxScroll, calcPageCount]
//   );

//   /* init + resize */
//   useEffect(() => {
//     const update = () => {
//       const pc = calcPageCount();
//       setPageCount(pc);
//       goToPage(0);
//     };
//     update();
//     window.addEventListener("resize", update);
//     return () => window.removeEventListener("resize", update);
//   }, [calcPageCount, goToPage]);

//   /* drag handlers */
//   const getClientX = (e: MouseEvent | TouchEvent) =>
//     "touches" in e ? e.touches[0].clientX : e.clientX;

//   useEffect(() => {
//     const el = trackRef.current;
//     if (!el) return;

//     const onDown = (e: MouseEvent | TouchEvent) => {
//       isDragging.current = true;
//       startX.current = getClientX(e);
//       scrollStart.current = translate;
//       el.style.transition = "none";
//       el.style.cursor = "grabbing";
//     };

//     const onMove = (e: MouseEvent | TouchEvent) => {
//       if (!isDragging.current) return;
//       const diff = getClientX(e) - startX.current;
//       const maxScroll = getMaxScroll();
//       let next = scrollStart.current + diff;
//       if (next > 0) next = next * 0.3;
//       if (next < -maxScroll) next = -maxScroll + (next + maxScroll) * 0.3;
//       setTranslate(next);
//     };

//     const onUp = () => {
//       if (!isDragging.current) return;
//       isDragging.current = false;
//       el.style.transition = "";
//       el.style.cursor = "grab";
//       const viewW = el.parentElement!.offsetWidth;
//       const page = Math.round(Math.abs(translate) / viewW);
//       goToPage(page);
//     };

//     el.addEventListener("mousedown", onDown);
//     el.addEventListener("touchstart", onDown, { passive: true });
//     window.addEventListener("mousemove", onMove);
//     window.addEventListener("touchmove", onMove, { passive: true });
//     window.addEventListener("mouseup", onUp);
//     window.addEventListener("touchend", onUp);

//     return () => {
//       el.removeEventListener("mousedown", onDown);
//       el.removeEventListener("touchstart", onDown);
//       window.removeEventListener("mousemove", onMove);
//       window.removeEventListener("touchmove", onMove);
//       window.removeEventListener("mouseup", onUp);
//       window.removeEventListener("touchend", onUp);
//     };
//   }, [translate, getMaxScroll, goToPage]);

//   return (
//     <section
//       id="testimonials"
//       className="py-[100px] pb-[120px] relative overflow-hidden z-[1]"
//       style={{
//         background:
//           "linear-gradient(180deg, #04060f 0%, #0a0e1f 40%, #0a0e1f 60%, #04060f 100%)",
//       }}
//     >
//       {/* top radial glow */}
//       <div
//         className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(249,115,22,0.04) 0%, transparent 70%)",
//         }}
//       />

//       <div className={containerClass}>

//         {/* header */}
//         <SectionHeader
//           tag="Real Families · Real Stories"
//           heading={
//             <>
//               Hear It From{" "}
//               <em className="text-[#f97316] not-italic">Parents Like You</em>
//             </>
//           }
//           sub="Families across India are building deeper bonds, one deed at a time. Here's what they have to say."
//         />

//         {/* carousel */}
//         <div className="relative">
//           {/* edge fade mask */}
//           <div
//             className="overflow-hidden rounded-[20px]"
//             style={{
//               WebkitMaskImage:
//                 "linear-gradient(90deg, transparent 0%, #000 4%, #000 96%, transparent 100%)",
//               maskImage:
//                 "linear-gradient(90deg, transparent 0%, #000 4%, #000 96%, transparent 100%)",
//             }}
//           >
//             <div
//               ref={trackRef}
//               className="flex gap-6 py-2 select-none"
//               style={{
//                 transform: `translateX(${translate}px)`,
//                 transition: "transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94)",
//                 cursor: "grab",
//                 willChange: "transform",
//               }}
//             >
//               {VIDEOS.map((src, i) => (
//                 <VideoCard key={i} src={src} onPlay={pauseOthers} />
//               ))}
//             </div>
//           </div>

//           {/* nav controls */}
//           <div className="flex items-center justify-center gap-4 mt-10">
//             {/* prev */}
//             <button
//               onClick={() => goToPage(currentPage - 1)}
//               className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
//               style={{
//                 background: "#0a0e1f",
//                 border: "1px solid rgba(255,255,255,0.07)",
//                 color: "#f0f4ff",
//               }}
//               onMouseEnter={(e) => {
//                 (e.currentTarget as HTMLButtonElement).style.borderColor = "#f97316";
//                 (e.currentTarget as HTMLButtonElement).style.color = "#f97316";
//                 (e.currentTarget as HTMLButtonElement).style.boxShadow =
//                   "0 0 16px rgba(249,115,22,0.18)";
//               }}
//               onMouseLeave={(e) => {
//                 (e.currentTarget as HTMLButtonElement).style.borderColor =
//                   "rgba(255,255,255,0.07)";
//                 (e.currentTarget as HTMLButtonElement).style.color = "#f0f4ff";
//                 (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
//               }}
//               aria-label="Previous"
//             >
//               <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                 <polyline points="15 18 9 12 15 6" />
//               </svg>
//             </button>

//             {/* dots */}
//             <div className="flex items-center gap-2">
//               {Array.from({ length: pageCount }).map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => goToPage(i)}
//                   className="h-2 rounded-full transition-all duration-300"
//                   style={{
//                     width: i === currentPage ? "24px" : "8px",
//                     background: i === currentPage ? "#f97316" : "#7a8ab0",
//                     opacity: i === currentPage ? 1 : 0.3,
//                     boxShadow:
//                       i === currentPage
//                         ? "0 0 10px rgba(249,115,22,0.18)"
//                         : "none",
//                   }}
//                   aria-label={`Go to page ${i + 1}`}
//                 />
//               ))}
//             </div>

//             {/* next */}
//             <button
//               onClick={() => goToPage(currentPage + 1)}
//               className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
//               style={{
//                 background: "#0a0e1f",
//                 border: "1px solid rgba(255,255,255,0.07)",
//                 color: "#f0f4ff",
//               }}
//               onMouseEnter={(e) => {
//                 (e.currentTarget as HTMLButtonElement).style.borderColor = "#f97316";
//                 (e.currentTarget as HTMLButtonElement).style.color = "#f97316";
//                 (e.currentTarget as HTMLButtonElement).style.boxShadow =
//                   "0 0 16px rgba(249,115,22,0.18)";
//               }}
//               onMouseLeave={(e) => {
//                 (e.currentTarget as HTMLButtonElement).style.borderColor =
//                   "rgba(255,255,255,0.07)";
//                 (e.currentTarget as HTMLButtonElement).style.color = "#f0f4ff";
//                 (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
//               }}
//               aria-label="Next"
//             >
//               <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                 <polyline points="9 6 15 12 9 18" />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* pull quote */}
//         {/* <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.5 }}
//           className="relative text-center mt-14 px-10 py-8 rounded-[16px] max-w-[700px] mx-auto"
//           style={{
//             background: "#0a0e1f",
//             border: "1px solid rgba(255,255,255,0.07)",
//           }}
//         > */}
//           {/* opening quote mark */}
//           {/* <span
//             className="absolute top-[-12px] left-8 text-[3rem] font-black leading-none"
//             style={{
//               fontFamily: "'Rubik', sans-serif",
//               color: "#f97316",
//               opacity: 0.25,
//             }}
//           >
//             "
//           </span>

//           <p className="text-[#f0f4ff] text-[1.05rem] leading-[1.75] italic">
//             We've tried tuitions, coaches, screen-time apps — nothing changed at home. UltiMate changed the conversations we have at dinner. That changed everything.
//           </p>
//           <div className="mt-3 text-[0.82rem] text-[#7a8ab0] font-medium not-italic">
//             — <strong className="text-[#f97316] font-bold">Anita Patil</strong>, Mother of 2, Pune
//           </div>
//         </motion.div> */}

//       </div>
//     </section>
//   );
// }







"use client";

/**
 * ParentTestimony — video testimonial carousel.
 *
 * CLIENT COMPONENT — unavoidable: drag paging, video play/pause coordination,
 * and resize handling all need browser APIs + state.
 *
 * Single self-contained client component (header inlined, no split).
 *
 * Logic is UNCHANGED from the original — same drag math, paging, pauseOthers,
 * and resize behaviour. Only the header and the background were restyled to
 * match the other sections.
 */

import { useEffect, useRef, useState, useCallback } from "react";

/* ── Video sources — add your files to /public/videos/ ── */
const VIDEOS = [
  "/videos/parent-testimony/testimony-1.mp4",
  "/videos/parent-testimony/testimony-2.mp4",
  "/videos/parent-testimony/testimony-3.mp4",
];

/* ── Single video card ── */
function VideoCard({
  src,
  onPlay,
}: {
  src: string;
  onPlay: (el: HTMLVideoElement) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      onPlay(v); // pause all others first
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  // When another card plays, pause this one
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const handlePause = () => setPlaying(false);
    v.addEventListener("pause", handlePause);
    return () => v.removeEventListener("pause", handlePause);
  }, []);

  return (
    <div className="tst-card group w-[300px] flex-none overflow-hidden rounded-[20px] border border-white/10 bg-[rgba(18,18,24,0.7)] backdrop-blur-[7px] transition-all duration-300 hover:-translate-y-[6px] max-[400px]:w-[260px]">
      {/* video container — 9:14 aspect ratio */}
      <div
        className="relative overflow-hidden bg-black"
        style={{ aspectRatio: "9/14" }}
      >
        <video
          ref={videoRef}
          src={src}
          preload="metadata"
          playsInline
          loop
          className="block h-full w-full object-cover"
        />

        {/* play overlay */}
        <div
          className={`absolute inset-0 z-[2] flex cursor-pointer items-center justify-center bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.5)_100%)] transition-all duration-300 ${
            playing ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
          onClick={togglePlay}
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(255,122,24,0.9)] shadow-[0_0_30px_rgba(255,122,24,0.5)] transition-all duration-300 hover:scale-110">
            <svg viewBox="0 0 24 24" className="ml-0.5 h-6 w-6" fill="white">
              <polygon points="6,3 20,12 6,21" />
            </svg>
          </div>
        </div>

        {/* tap to pause when playing */}
        {playing && (
          <div
            className="absolute inset-0 z-[2] cursor-pointer"
            onClick={togglePlay}
          />
        )}
      </div>
    </div>
  );
}

/* ── Main component ── */
export default function ParentTestimony() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [translate, setTranslate] = useState(0);
  // When the cards fit inside the viewport there is nothing to scroll —
  // in that case we center them instead of left-aligning + dragging.
  const [fits, setFits] = useState(false);

  // drag state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  /* pause all videos except the one passed */
  const pauseOthers = useCallback((except: HTMLVideoElement) => {
    trackRef.current?.querySelectorAll("video").forEach((v) => {
      if (v !== except) {
        v.pause();
        v.currentTime = 0;
      }
    });
  }, []);

  /* geometry helpers */
  const getMaxScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return 0;
    const cards = Array.from(el.children) as HTMLElement[];
    const totalW = cards.reduce((s, c) => s + c.offsetWidth + 24, -24);
    return Math.max(0, totalW - el.parentElement!.offsetWidth);
  }, []);

  const calcPageCount = useCallback(() => {
    const el = trackRef.current;
    if (!el) return 1;
    const cards = Array.from(el.children) as HTMLElement[];
    const totalW = cards.reduce((s, c) => s + c.offsetWidth + 24, -24);
    const viewW = el.parentElement!.offsetWidth;
    return Math.max(1, Math.ceil(totalW / viewW));
  }, []);

  const goToPage = useCallback(
    (page: number) => {
      const el = trackRef.current;
      if (!el) return;
      const viewW = el.parentElement!.offsetWidth;
      const maxScroll = getMaxScroll();
      const pages = calcPageCount();
      const clamped = Math.max(0, Math.min(page, pages - 1));
      let target = clamped * viewW;
      if (target > maxScroll) target = maxScroll;
      setTranslate(-target);
      setCurrentPage(clamped);
    },
    [getMaxScroll, calcPageCount]
  );

  /* init + resize */
  useEffect(() => {
    const update = () => {
      const pc = calcPageCount();
      setPageCount(pc);
      setFits(getMaxScroll() <= 0); // no overflow => center, don't scroll
      goToPage(0);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [calcPageCount, goToPage, getMaxScroll]);

  /* drag handlers */
  const getClientX = (e: MouseEvent | TouchEvent) =>
    "touches" in e ? e.touches[0].clientX : e.clientX;

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    if (fits) return; // nothing to scroll — no drag

    const onDown = (e: MouseEvent | TouchEvent) => {
      isDragging.current = true;
      startX.current = getClientX(e);
      scrollStart.current = translate;
      el.style.transition = "none";
      el.style.cursor = "grabbing";
    };

    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging.current) return;
      const diff = getClientX(e) - startX.current;
      const maxScroll = getMaxScroll();
      let next = scrollStart.current + diff;
      if (next > 0) next = next * 0.3;
      if (next < -maxScroll) next = -maxScroll + (next + maxScroll) * 0.3;
      setTranslate(next);
    };

    const onUp = () => {
      if (!isDragging.current) return;
      isDragging.current = false;
      el.style.transition = "";
      el.style.cursor = "grab";
      const viewW = el.parentElement!.offsetWidth;
      const page = Math.round(Math.abs(translate) / viewW);
      goToPage(page);
    };

    el.addEventListener("mousedown", onDown);
    el.addEventListener("touchstart", onDown, { passive: true });
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);

    return () => {
      el.removeEventListener("mousedown", onDown);
      el.removeEventListener("touchstart", onDown);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
    };
  }, [translate, getMaxScroll, goToPage, fits]);

  return (
    <section
      id="testimonials"
      className="relative z-[1] w-full overflow-hidden bg-[#050507] px-[clamp(20px,4vw,48px)] py-[clamp(56px,7vw,110px)] font-['Poppins',sans-serif] text-[#c3c2ce] antialiased"
    >
      {/* top warm glow — matches the other sections */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(circle, rgba(255,122,24,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-[1] mx-auto max-w-[1240px]">
        {/* Pill */}
        <div className="mb-[26px] flex justify-center">
          <div className="inline-flex h-9 items-center gap-2.5 rounded-full border-[1.029px] border-[rgba(255,154,64,0.25)] bg-[linear-gradient(180deg,rgba(255,154,64,0.03)_0%,rgba(255,122,24,0.01)_100%)] px-[18px] shadow-[inset_0_1.029px_0_rgba(255,255,255,0.16)]">
            <span className="h-[7.2px] w-[7.2px] rounded-full bg-[#ff9a40] shadow-[0_0_8.229px_#ff9a40]" />
            <span className="font-['Outfit',sans-serif] text-[12.343px] font-semibold uppercase tracking-[1.9749px] text-[#ffb36b]">
              Real Families · Real Stories
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="mx-auto mb-[22px] max-w-[760px] text-center font-['Outfit',sans-serif] text-[clamp(34px,4.6vw,60px)] font-extrabold leading-[1.02] tracking-[-1.2px] text-white max-[560px]:tracking-[-0.6px]">
          Hear It From{" "}
          <span className="bg-[linear-gradient(110.93deg,#FFB13D_0%,#FF7A18_26%,#FF4D8D_64%,#A24BFF_100%)] bg-clip-text text-transparent">
            Parents Like You
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mb-[clamp(40px,5vw,60px)] max-w-[720px] text-center text-[clamp(16px,1.5vw,20px)] font-normal leading-[1.62] text-[#8b8a98]">
          Families across India are building deeper bonds, one deed at a time.
          Here&apos;s what they have to say.
        </p>

        {/* carousel */}
        <div className="relative">
          {/* edge fade mask */}
          <div
            className="overflow-hidden rounded-[20px]"
            style={{
              WebkitMaskImage:
                "linear-gradient(90deg, transparent 0%, #000 4%, #000 96%, transparent 100%)",
              maskImage:
                "linear-gradient(90deg, transparent 0%, #000 4%, #000 96%, transparent 100%)",
            }}
          >
            <div
              ref={trackRef}
              className={`flex select-none gap-6 py-2 ${
                fits ? "justify-center" : "justify-start"
              }`}
              style={{
                transform: `translateX(${fits ? 0 : translate}px)`,
                transition: "transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94)",
                cursor: fits ? "default" : "grab",
                willChange: "transform",
              }}
            >
              {VIDEOS.map((src, i) => (
                <VideoCard key={i} src={src} onPlay={pauseOthers} />
              ))}
            </div>
          </div>

          {/* nav controls — only when there is something to page through */}
          <div
            className={`mt-10 items-center justify-center gap-4 ${
              fits ? "hidden" : "flex"
            }`}
          >
            {/* prev */}
            <button
              onClick={() => goToPage(currentPage - 1)}
              aria-label="Previous"
              className="nav-btn flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[rgba(18,18,24,0.7)] text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[18px] w-[18px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* dots */}
            <div className="flex items-center gap-2">
              {Array.from({ length: pageCount }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToPage(i)}
                  aria-label={`Go to page ${i + 1}`}
                  aria-current={i === currentPage}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentPage
                      ? "w-[24px] bg-[linear-gradient(145deg,#FFB13D_0%,#FF7A18_34%,#FF4D8D_70%,#A24BFF_100%)] shadow-[0_0_10px_rgba(255,122,24,0.35)]"
                      : "w-2 bg-white/[0.18] hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            {/* next */}
            <button
              onClick={() => goToPage(currentPage + 1)}
              aria-label="Next"
              className="nav-btn flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[rgba(18,18,24,0.7)] text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[18px] w-[18px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Card + nav hover glow — multi-layer shadows, cleaner as CSS than as
           the inline onMouseEnter/onMouseLeave handlers the original used. */
        .tst-card {
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }
        .tst-card:hover {
          border-color: rgba(255, 154, 64, 0.35);
          box-shadow: 0 26px 60px rgba(0, 0, 0, 0.55),
            0 0 24px rgba(255, 122, 24, 0.15);
        }
        .nav-btn:hover {
          border-color: #ff9a40;
          color: #ff9a40;
          box-shadow: 0 0 16px rgba(255, 122, 24, 0.22);
        }
      `}</style>
    </section>
  );
}