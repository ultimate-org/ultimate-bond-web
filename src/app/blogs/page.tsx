//   // /* eslint-disable @typescript-eslint/no-explicit-any */
//   // "use client"

//   // import Header from '@/components/headerSection/Header';
//   // import { anton } from '@/fonts/fonts';
//   // import { useToast } from '@/hooks/use-toast';
//   // import Image from 'next/image';
//   // import Link from 'next/link';
//   // import React, { useEffect, useState, } from 'react'

//   // type blog = { carousel_content_id: number; carousel_type_id: number, file_path: string; click_url: string, value:string; }


//   // function Blogs() {

//   //   const [blogs, setBlogs] = useState<blog[]>([]);
//   //   const { toast } = useToast()

//   //   const getBlogs = async () => {
//   //     try {
//   //         const response = await fetch('/blogs/api');
//   //         if (!response.ok) {
//   //             throw new Error('Failed to fetch blogs');
//   //         }
//   //         const data = await response.json();

//   //       if (data.blogsData) {
//   //         const blogArr: blog[] = data.blogsData.map((blog: any) => ({ carousel_content_id: blog?.carousel_content_id, carousel_type_id: blog?.carousel_type_id, file_path: blog?.file_path, click_url: blog?.click_url, value:blog?.value }));
//   //       setBlogs(blogArr);}

//   //     } catch (err:any) {
//   //         console.error('Error while getting workshops', err.response);
//   //         toast({
//   //             description: "Something went wrong.",
//   //             variant: "destructive",
//   //         });
//   //     }
//   // };

//   //   useEffect(() => {
//   //     getBlogs();
//   // // eslint-disable-next-line react-hooks/exhaustive-deps
//   // }, []);


//   //   return (
//   //     <div className='min-h-screen py-[5rem] '>
//   //       <Header></Header>
//   //       <div className='my-10'>
//   //         <h1 className={`text-2xl ml-8 ${anton.className}`}>Blogs</h1>
//   //         <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-8 my-8'>
//   //           {blogs.length>0 ? blogs.map((blog:blog) => {
//   //             return <Link href={{
//   //     pathname: '/blogs/blog-detail',
//   //     query: { name: blog.value }
//   //   }}
//   //               key={blog?.carousel_content_id} className='w-[90%] md:w-[80%] h-[15rem] md:h-[20rem] relative m-auto hover:scale-110 hover:drop-shadow-xl rounded-xl overflow-hidden'>
//   //               <Image src={blog?.file_path} alt={"workshop"} className='object-fill' fill></Image>
//   //               </Link> 
//   //           }): <div className='col-span-3'><h1 className='text-center'>Blogs Loading...</h1></div>}
//   //         </div>
//   //       </div>
//   //       </div>
//   //   )
//   // }

//   // export default Blogs


//   /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { useToast } from "@/hooks/use-toast";
// import Header from "@/components/headerSection/Header";

// type Blog = {
//   carousel_content_id: number;
//   carousel_type_id: number;
//   file_path: string;
//   click_url: string;
//   value: string;
// };

// const KEYFRAMES = `
// @keyframes blink { 0%,100%{opacity:1} 50%{opacity:.3} }
// `;

// export default function Blogs() {
//   const [blogs, setBlogs] = useState<Blog[]>([]);
//   const { toast } = useToast();

//   const getBlogs = async () => {
//     try {
//       console.log("Fetching blogs from API...");
//       const response = await fetch("/blogs/api");
//       if (!response.ok) throw new Error("Failed to fetch blogs");
//       const data = await response.json();
//       console.log("Fetched blogs data:", response);
//       if (data.blogsData) {
//         setBlogs(
//           data.blogsData.map((b: any) => ({
//             carousel_content_id: b?.carousel_content_id,
//             carousel_type_id: b?.carousel_type_id,
//             file_path: b?.file_path,
//             click_url: b?.click_url,
//             value: b?.value,
//           }))
//         );
//       }
//     } catch (err: any) {
//       console.error("Error fetching blogs", err);
//       toast({ description: "Something went wrong.", variant: "destructive" });
//     }
//   };

//   useEffect(() => {
//     console.log("Component mounted, fetching blogs...");
//     getBlogs();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const featured = blogs[0];
//   const rest = blogs.slice(1);

//   return (
//     <div
//       className="min-h-screen"
//       style={{ background: "#04060f", color: "#fff" }}
//     >
//       <style>{KEYFRAMES}</style>
//       <Header />

//       <main
//         className="pt-[100px] pb-[100px] relative overflow-hidden"
//         style={{ background: "#04060f" }}
//       >
//         {/* radial glow */}
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             background:
//               "radial-gradient(ellipse at 50% 100%, rgba(249,115,22,0.07), transparent 60%)",
//           }}
//         />

//         {/* ── HERO ── */}
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center max-w-[700px] mx-auto px-[6%] mb-14 relative z-[1]"
//         >
//           {/* blinking pill */}
//           <div
//             className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-[0.7rem] font-bold tracking-[0.12em] uppercase text-[#f97316]"
//             style={{
//               background: "rgba(249,115,22,0.08)",
//               border: "1px solid rgba(249,115,22,0.25)",
//               fontFamily: "'Rubik', sans-serif",
//             }}
//           >
//             <span
//               className="w-[5px] h-[5px] rounded-full bg-[#f97316]"
//               style={{ animation: "blink 1.6s ease infinite" }}
//             />
//             Parenting Insights
//           </div>

//           {/* section tag */}
//           <span
//             className="block mb-3 text-[0.75rem] font-bold tracking-[0.06em] uppercase text-[#f97316]"
//             style={{ fontFamily: "'Rubik', sans-serif" }}
//           >
//             Our Blog
//           </span>

//           <h1
//             className="text-white font-black leading-[1.2] tracking-[-0.03em] mb-4"
//             style={{
//               fontSize: "clamp(2rem, 4vw, 3rem)",
//               fontFamily: "'Rubik', sans-serif",
//             }}
//           >
//             Expert-Backed Parenting
//             <br />
//             Insights &amp; Guides
//           </h1>

//           <p className="text-[#9ca3af] text-[1rem] font-light leading-[1.8]">
//             Practical tips, deep dives, and science-backed strategies for raising
//             emotionally intelligent children — one article at a time.
//           </p>
//         </motion.div>

//         {/* ── FEATURED POST (first blog) ── */}
//         {featured && (
//           <div className="max-w-[1160px] mx-auto px-[6%] mb-14 relative z-[1]">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.1 }}
//               className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] rounded-[24px] overflow-hidden min-h-[360px] transition-all duration-300 hover:-translate-y-1 group"
//               style={{
//                 border: "1px solid rgba(249,115,22,0.25)",
//                 boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
//               }}
//             >
//               {/* image */}
//               <div className="relative overflow-hidden min-h-[220px]">
//                 <Image
//                   src={featured.file_path}
//                   alt={featured.value || "Featured blog"}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
//                 />
//                 {/* right fade — desktop */}
//                 <div
//                   className="absolute inset-0 hidden md:block"
//                   style={{
//                     background:
//                       "linear-gradient(90deg, transparent 60%, rgba(4,6,15,0.9) 100%)",
//                   }}
//                 />
//                 {/* bottom fade — mobile */}
//                 <div
//                   className="absolute inset-0 block md:hidden"
//                   style={{
//                     background:
//                       "linear-gradient(to top, rgba(4,6,15,0.95) 0%, transparent 100%)",
//                   }}
//                 />
//               </div>

//               {/* body */}
//               <div
//                 className="flex flex-col justify-center p-10"
//                 style={{ background: "rgba(10,14,31,0.97)" }}
//               >
//                 <div
//                   className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 mb-5 text-[0.65rem] font-bold tracking-[0.1em] uppercase text-[#f97316] w-fit"
//                   style={{
//                     background: "rgba(249,115,22,0.08)",
//                     border: "1px solid rgba(249,115,22,0.25)",
//                     fontFamily: "'Rubik', sans-serif",
//                   }}
//                 >
//                   ★ Featured Read
//                 </div>

//                 <h2
//                   className="text-white font-black leading-[1.2] tracking-[-0.02em] mb-4"
//                   style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.9rem)" }}
//                 >
//                   {featured.value}
//                 </h2>

//                 <p className="text-[#9ca3af] text-[0.9rem] leading-[1.75] mb-7">
//                   Explore this featured insight from our parenting experts — practical,
//                   research-backed and designed for today's families.
//                 </p>

//                 <Link
//                   href={{
//                     pathname: "/blogs/blog-detail",
//                     query: { name: featured.value },
//                   }}
//                   className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-white font-bold text-[0.85rem] w-fit transition-all duration-300 hover:bg-[#ea6a0a] hover:-translate-y-0.5"
//                   style={{
//                     background: "#f97316",
//                     boxShadow: "0 0 24px rgba(249,115,22,0.35)",
//                     fontFamily: "'Rubik', sans-serif",
//                   }}
//                 >
//                   Read Article →
//                 </Link>
//               </div>
//             </motion.div>
//           </div>
//         )}

//         {/* ── BLOG GRID (rest of posts) ── */}
//         {rest.length > 0 && (
//           <div className="max-w-[1160px] mx-auto px-[6%] relative z-[1]">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.4rem]">
//               {rest.map((blog, i) => (
//                 <motion.div
//                   key={blog.carousel_content_id}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, amount: 0.1 }}
//                   transition={{ duration: 0.4, delay: i * 0.07 }}
//                   className="flex flex-col rounded-[20px] overflow-hidden transition-all duration-300 hover:-translate-y-[6px] group"
//                   style={{
//                     background: "rgba(10,14,31,0.9)",
//                     border: "1px solid rgba(255,255,255,0.08)",
//                   }}
//                 >
//                   {/* image */}
//                   <div className="relative overflow-hidden aspect-video">
//                     <Image
//                       src={blog.file_path}
//                       alt={blog.value || "Blog post"}
//                       fill
//                       className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
//                     />
//                     <div
//                       className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none"
//                       style={{
//                         background:
//                           "linear-gradient(to top, rgba(10,14,31,0.85), transparent)",
//                       }}
//                     />
//                   </div>

//                   {/* body */}
//                   <div className="flex flex-col flex-1 p-5">
//                     {/* meta */}
//                     <div className="flex items-center gap-2 mb-3">
//                       <span className="text-[0.7rem] text-[#9ca3af] tracking-[0.04em]">
//                         Parenting Tips
//                       </span>
//                       <span className="w-[3px] h-[3px] rounded-full bg-[#9ca3af]" />
//                       <span className="text-[0.7rem] text-[#9ca3af] tracking-[0.04em]">
//                         5 min read
//                       </span>
//                     </div>

//                     {/* title */}
//                     <h3
//                       className="text-white font-bold text-[1.05rem] leading-[1.35] tracking-[-0.01em] mb-2.5 flex-1 transition-colors duration-200 group-hover:text-[rgba(240,244,255,0.95)]"
//                       style={{ fontFamily: "'Rubik', sans-serif" }}
//                     >
//                       {blog.value}
//                     </h3>

//                     {/* footer */}
//                     <div
//                       className="flex items-center justify-between mt-auto pt-3.5"
//                       style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
//                     >
//                       <span className="text-[0.68rem] font-semibold tracking-[0.04em] text-[rgba(240,244,255,0.35)]">
//                         UltiMate Blog
//                       </span>

//                       <Link
//                         href={{
//                           pathname: "/blogs/blog-detail",
//                           query: { name: blog.value },
//                         }}
//                         className="w-[34px] h-[34px] rounded-full flex items-center justify-center text-[0.85rem] text-[#f97316] transition-all duration-200 group-hover:text-white group-hover:translate-x-[3px]"
//                         style={{
//                           background: "rgba(249,115,22,0.08)",
//                           border: "1px solid rgba(249,115,22,0.25)",
//                         }}
//                       >
//                         →
//                       </Link>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* loading */}
//         {blogs.length === 0 && (
//           <div className="text-center text-[#9ca3af] py-20 relative z-[1]">
//             Loading blog posts...
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }





// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { useToast } from "@/hooks/use-toast";
// import Header from "@/components/headerSection/Header";

// type Blog = {
//   carousel_content_id: number;
//   carousel_type_id: number;
//   file_path: string;
//   click_url: string;
//   value: string;
// };

// const KEYFRAMES = `
// @keyframes blink { 0%,100%{opacity:1} 50%{opacity:.3} }
// `;

// export default function Blogs() {
//   const [blogs, setBlogs] = useState<Blog[]>([]);
//   const { toast } = useToast();

//   const getBlogs = async () => {
//     try {
//       const response = await fetch("/blogs/api");
//       if (!response.ok) throw new Error("Failed to fetch blogs");
//       const data = await response.json();
//       if (data.blogsData) {
//         setBlogs(
//           data.blogsData.map((b: any) => ({
//             carousel_content_id: b?.carousel_content_id,
//             carousel_type_id: b?.carousel_type_id,
//             file_path: b?.file_path,
//             click_url: b?.click_url,
//             value: b?.value,
//           }))
//         );
//       }
//     } catch (err: any) {
//       console.error("Error fetching blogs", err);
//       toast({ description: "Something went wrong.", variant: "destructive" });
//     }
//   };

//   useEffect(() => {
//     getBlogs();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const featured = blogs[0];
//   const rest = blogs.slice(1);

//   return (
//     <div
//       className="min-h-screen"
//       style={{ background: "#04060f", color: "#fff" }}
//     >
//       <style>{KEYFRAMES}</style>
//       <Header />

//       <main
//         className="pt-[100px] pb-[100px] relative overflow-hidden"
//         style={{ background: "#04060f" }}
//       >
//         {/* radial glow */}
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             background:
//               "radial-gradient(ellipse at 50% 100%, rgba(249,115,22,0.07), transparent 60%)",
//           }}
//         />

//         {/* ── HERO ── */}
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="relative text-center px-[6vw] pt-[9rem] pb-[5rem] overflow-hidden z-[1]"
//         >
//           {/* radial glow */}
//           <div
//             className="absolute inset-0 pointer-events-none"
//             style={{
//               background:
//                 "radial-gradient(ellipse at 50% 100%, rgba(240,112,32,0.12) 0%, transparent 60%)",
//             }}
//           />
//           {/* bottom line */}
//           <div
//             className="absolute bottom-0 left-[10%] right-[10%] h-px pointer-events-none"
//             style={{
//               background:
//                 "linear-gradient(90deg, transparent, rgba(240,112,32,0.3), transparent)",
//             }}
//           />

//           {/* blinking pill */}
//           <div
//             className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 text-[0.7rem] font-bold tracking-[0.12em] uppercase text-[#f97316] relative z-[1]"
//             style={{
//               background: "rgba(240,112,32,0.1)",
//               border: "1px solid rgba(240,112,32,0.25)",
//             }}
//           >
//             <span
//               className="w-[5px] h-[5px] rounded-full bg-[#f97316]"
//               style={{ animation: "blink 1.6s ease infinite" }}
//             />
//             Parenting Insights
//           </div>

//           {/* h1 */}
//           <h1
//             className="text-white font-black leading-[1.0] tracking-[-0.04em] uppercase mb-4 relative z-[1]"
//             style={{
//               fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
//               fontFamily: "'Rubik', sans-serif",
//             }}
//           >
//             Our <span className="text-[#f97316]">Blog</span>
//           </h1>

//           <p
//             className="relative z-[1] mx-auto text-[1rem] leading-[1.8] max-w-[480px]"
//             style={{ color: "rgba(242,237,232,0.55)" }}
//           >
//             Expert-backed insights, practical tips, and deep dives into smart
//             parenting — one article at a time.
//           </p>
//         </motion.div>

//         {/* ── FEATURED POST (first blog) ── */}
//         {featured && (
//           <div className="max-w-[1160px] mx-auto px-[6%] my-14 relative z-[1] ">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.1 }}
//               className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] rounded-[24px] overflow-hidden min-h-[360px] transition-all duration-300 hover:-translate-y-1 group"
//               style={{
//                 border: "1px solid rgba(249,115,22,0.25)",
//                 boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
//               }}
//             >
//               {/* image */}
//               <div className="relative overflow-hidden min-h-[220px]">
//                 <Image
//                   src={featured.file_path}
//                   alt={featured.value || "Featured blog"}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
//                 />
//                 {/* right fade — desktop */}
//                 <div
//                   className="absolute inset-0 hidden md:block"
//                   style={{
//                     background:
//                       "linear-gradient(90deg, transparent 60%, rgba(4,6,15,0.9) 100%)",
//                   }}
//                 />
//                 {/* bottom fade — mobile */}
//                 <div
//                   className="absolute inset-0 block md:hidden"
//                   style={{
//                     background:
//                       "linear-gradient(to top, rgba(4,6,15,0.95) 0%, transparent 100%)",
//                   }}
//                 />
//               </div>

//               {/* body */}
//               <div
//                 className="flex flex-col justify-center p-10"
//                 style={{ background: "rgba(10,14,31,0.97)" }}
//               >
//                 <div
//                   className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 mb-5 text-[0.65rem] font-bold tracking-[0.1em] uppercase text-[#f97316] w-fit"
//                   style={{
//                     background: "rgba(249,115,22,0.08)",
//                     border: "1px solid rgba(249,115,22,0.25)",
//                     fontFamily: "'Rubik', sans-serif",
//                   }}
//                 >
//                   ★ Featured Read
//                 </div>

//                 <h2
//                   className="text-white font-black leading-[1.2] tracking-[-0.02em] mb-4"
//                   style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.9rem)" }}
//                 >
//                   {featured.value}
//                 </h2>

//                 <p className="text-[#9ca3af] text-[0.9rem] leading-[1.75] mb-7">
//                   Explore this featured insight from our parenting experts — practical,
//                   research-backed and designed for today's families.
//                 </p>

//                 <Link
//                   href={{
//                     pathname: "/blogs/blog-detail",
//                     query: { name: featured.value },
//                   }}
//                   className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-white font-bold text-[0.85rem] w-fit transition-all duration-300 hover:bg-[#ea6a0a] hover:-translate-y-0.5"
//                   style={{
//                     background: "#f97316",
//                     boxShadow: "0 0 24px rgba(249,115,22,0.35)",
//                     fontFamily: "'Rubik', sans-serif",
//                   }}
//                 >
//                   Read Article →
//                 </Link>
//               </div>
//             </motion.div>
//           </div>
//         )}

//         {/* ── BLOG GRID (rest of posts) ── */}
//         {rest.length > 0 && (
//           <div className="max-w-[1160px] mx-auto px-[6%] relative z-[1]">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.4rem]">
//               {rest.map((blog, i) => (
//                 <motion.div
//                   key={blog.carousel_content_id}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, amount: 0.1 }}
//                   transition={{ duration: 0.4, delay: i * 0.07 }}
//                   className="flex flex-col rounded-[20px] overflow-hidden transition-all duration-300 hover:-translate-y-[6px] group"
//                   style={{
//                     background: "rgba(10,14,31,0.9)",
//                     border: "1px solid rgba(255,255,255,0.08)",
//                   }}
//                 >
//                   {/* image */}
//                   <div className="relative overflow-hidden aspect-video">
//                     <Image
//                       src={blog.file_path}
//                       alt={blog.value || "Blog post"}
//                       fill
//                       className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
//                     />
//                     <div
//                       className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none"
//                       style={{
//                         background:
//                           "linear-gradient(to top, rgba(10,14,31,0.85), transparent)",
//                       }}
//                     />
//                   </div>

//                   {/* body */}
//                   <div className="flex flex-col flex-1 p-5">
//                     {/* meta */}
//                     <div className="flex items-center gap-2 mb-3">
//                       <span className="text-[0.7rem] text-[#9ca3af] tracking-[0.04em]">
//                         Parenting Tips
//                       </span>
//                       <span className="w-[3px] h-[3px] rounded-full bg-[#9ca3af]" />
//                       <span className="text-[0.7rem] text-[#9ca3af] tracking-[0.04em]">
//                         5 min read
//                       </span>
//                     </div>

//                     {/* title */}
//                     <h3
//                       className="text-white font-bold text-[1.05rem] leading-[1.35] tracking-[-0.01em] mb-2.5 flex-1 transition-colors duration-200 group-hover:text-[rgba(240,244,255,0.95)]"
//                       style={{ fontFamily: "'Rubik', sans-serif" }}
//                     >
//                       {blog.value}
//                     </h3>

//                     {/* footer */}
//                     <div
//                       className="flex items-center justify-between mt-auto pt-3.5"
//                       style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
//                     >
//                       <span className="text-[0.68rem] font-semibold tracking-[0.04em] text-[rgba(240,244,255,0.35)]">
//                         UltiMate Blog
//                       </span>

//                       <Link
//                         href={{
//                           pathname: "/blogs/blog-detail",
//                           query: { name: blog.value },
//                         }}
//                         className="w-[34px] h-[34px] rounded-full flex items-center justify-center text-[0.85rem] text-[#f97316] transition-all duration-200 group-hover:text-white group-hover:translate-x-[3px]"
//                         style={{
//                           background: "rgba(249,115,22,0.08)",
//                           border: "1px solid rgba(249,115,22,0.25)",
//                         }}
//                       >
//                         →
//                       </Link>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* loading */}
//         {blogs.length === 0 && (
//           <div className="text-center text-[#9ca3af] py-20 relative z-[1]">
//             Loading blog posts...
//           </div>
//         )}

//         {/* ── DIVIDER ── */}
//         <div
//           className="mx-[6vw] mt-14"
//           style={{
//             height: "1px",
//             background:
//               "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
//           }}
//         />

//         {/* ── CTA STRIP ── */}
//         <div className="relative z-[1] overflow-hidden px-[6vw] py-16 text-center">
//           <div
//             className="absolute inset-0 pointer-events-none"
//             style={{
//               background:
//                 "radial-gradient(ellipse at 50% 50%, rgba(240,112,32,0.07), transparent 65%)",
//             }}
//           />

//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.65, ease: "easeOut" }}
//             className="relative max-w-[600px] mx-auto"
//           >
//             <h3
//               className="text-white font-black uppercase tracking-[-0.03em] mb-3"
//               style={{
//                 fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
//                 fontFamily: "'Rubik', sans-serif",
//               }}
//             >
//               Ready to put these insights{" "}
//               <span className="text-[#f97316]">into action?</span>
//             </h3>

//             <p
//               className="text-[0.92rem] leading-[1.7] mb-8"
//               style={{ color: "rgba(242,237,232,0.5)" }}
//             >
//               UltiMate Bond turns parenting knowledge into daily 20-minute activities
//               your child will actually enjoy. 1800+ activities, 1000+ stories, 100% results.
//             </p>

//             <div className="flex gap-4 justify-center flex-wrap">
//               <a
//                 href="https://apps.apple.com/in/app/ultimate-parenting/id6593687319"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-white font-bold text-[0.85rem] transition-all duration-300 hover:bg-[#ea6a0a] hover:-translate-y-0.5"
//                 style={{
//                   background: "#f97316",
//                   boxShadow: "0 0 24px rgba(249,115,22,0.35)",
//                   fontFamily: "'Rubik', sans-serif",
//                 }}
//               >
//                 🍎 App Store
//               </a>

//               <a
//                 href="https://play.google.com/store/apps/details?id=com.ultimate_bond"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-[#f97316] font-bold text-[0.85rem] transition-all duration-300 hover:bg-[rgba(249,115,22,0.08)] hover:-translate-y-0.5"
//                 style={{
//                   border: "1px solid rgba(249,115,22,0.5)",
//                   fontFamily: "'Rubik', sans-serif",
//                 }}
//               >
//                 ▶ Google Play
//               </a>
//             </div>
//           </motion.div>
//         </div>
//       </main>
//     </div>
//   );
// }



/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/headerSection/Header";

type Blog = {
  name:string
  carousel_content_id: number;
  carousel_type_id: number;
  file_path: string;
  click_url: string;
  value: string;
};

const KEYFRAMES = `
@keyframes blink { 0%,100%{opacity:1} 50%{opacity:.3} }
`;

export default function Blogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const { toast } = useToast();

  const getBlogs = async () => {
    try {
      const response = await fetch("/blogs/api");
      if (!response.ok) throw new Error("Failed to fetch blogs");
      const data = await response.json();
      if (data.blogsData) {
        setBlogs(
          data.blogsData.map((b: any) => ({
            name:b?.name,
            carousel_content_id: b?.carousel_content_id,
            carousel_type_id: b?.carousel_type_id,
            file_path: b?.file_path,
            click_url: b?.click_url,
            value: b?.value,
          }))
        );
      }
    } catch (err: any) {
      console.error("Error fetching blogs", err);
      toast({ description: "Something went wrong.", variant: "destructive" });
    }
  };

  useEffect(() => {
    getBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const featured = blogs[0];
  const rest = blogs.slice(1);

  return (
    <div
      className="min-h-screen"
      style={{ background: "#04060f", color: "#fff" }}
    >
      <style>{KEYFRAMES}</style>
      <Header />

      <main
        className="pt-[100px] pb-[100px] relative overflow-hidden"
        style={{ background: "#04060f" }}
      >
        {/* radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, rgba(249,115,22,0.07), transparent 60%)",
          }}
        />

        {/* ── HERO ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative text-center px-[6vw] pt-[9rem] pb-[5rem] overflow-hidden z-[1]"
        >
          {/* radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 100%, rgba(240,112,32,0.12) 0%, transparent 60%)",
            }}
          />
          {/* bottom line */}
          <div
            className="absolute bottom-0 left-[10%] right-[10%] h-px pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(240,112,32,0.3), transparent)",
            }}
          />

          {/* blinking pill */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 text-[0.7rem] font-bold tracking-[0.12em] uppercase text-[#f97316] relative z-[1]"
            style={{
              background: "rgba(240,112,32,0.1)",
              border: "1px solid rgba(240,112,32,0.25)",
            }}
          >
            <span
              className="w-[5px] h-[5px] rounded-full bg-[#f97316]"
              style={{ animation: "blink 1.6s ease infinite" }}
            />
            Parenting Insights
          </div>

          {/* h1 */}
          <h1
            className="text-white font-black leading-[1.0] tracking-[-0.04em] uppercase mb-4 relative z-[1]"
            style={{
              fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
              fontFamily: "'Rubik', sans-serif",
            }}
          >
            Our <span className="text-[#f97316]">Blog</span>
          </h1>

          <p
            className="relative z-[1] mx-auto text-[1rem] leading-[1.8] max-w-[480px]"
            style={{ color: "rgba(242,237,232,0.55)" }}
          >
            Expert-backed insights, practical tips, and deep dives into smart
            parenting — one article at a time.
          </p>
        </motion.div>

        {/* ── FEATURED POST (first blog) ── */}
        {featured && (
          <div className="max-w-[1160px] mx-auto px-[6%] my-14 relative z-[1]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] rounded-[24px] overflow-hidden min-h-[360px] transition-all duration-300 hover:-translate-y-1 group"
              style={{
                border: "1px solid rgba(249,115,22,0.25)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
              }}
            >
              {/* image */}
              <div className="relative overflow-hidden min-h-[220px]">
                <Image
                  src={featured.file_path}
                  alt={featured.value || "Featured blog"}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                {/* right fade — desktop */}
                <div
                  className="absolute inset-0 hidden md:block"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 60%, rgba(4,6,15,0.9) 100%)",
                  }}
                />
                {/* bottom fade — mobile */}
                <div
                  className="absolute inset-0 block md:hidden"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(4,6,15,0.95) 0%, transparent 100%)",
                  }}
                />
              </div>

              {/* body */}
              <div
                className="flex flex-col justify-center p-10"
                style={{ background: "rgba(10,14,31,0.97)" }}
              >
                <div
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 mb-5 text-[0.65rem] font-bold tracking-[0.1em] uppercase text-[#f97316] w-fit"
                  style={{
                    background: "rgba(249,115,22,0.08)",
                    border: "1px solid rgba(249,115,22,0.25)",
                    fontFamily: "'Rubik', sans-serif",
                  }}
                >
                  ★ Featured Read
                </div>

                <h2
                  className="text-white font-black leading-[1.2] tracking-[-0.02em] mb-4"
                  style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.9rem)" }}
                >
                  {featured.name}
                </h2>

                <p className="text-[#9ca3af] text-[0.9rem] leading-[1.75] mb-7">
                  Explore this featured insight from our parenting experts — practical,
                  research-backed and designed for today's families.
                </p>

                <Link
                  href={{
                    pathname: "/blogs/blog-detail",
                    query: { name: featured.value },
                  }}
                  className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-white font-bold text-[0.85rem] w-fit transition-all duration-300 hover:bg-[#ea6a0a] hover:-translate-y-0.5"
                  style={{
                    background: "#f97316",
                    boxShadow: "0 0 24px rgba(249,115,22,0.35)",
                    fontFamily: "'Rubik', sans-serif",
                  }}
                >
                  Read Article →
                </Link>
              </div>
            </motion.div>
          </div>
        )}

        {/* ── BLOG GRID (rest of posts) ── */}
        {rest.length > 0 && (
          <div className="max-w-[1160px] mx-auto px-[6%] relative z-[1]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.4rem]">
              {rest.map((blog, i) => (
                <motion.div
                  key={blog.carousel_content_id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex flex-col rounded-[20px] overflow-hidden transition-all duration-300 hover:-translate-y-[6px] group"
                  style={{
                    background: "rgba(10,14,31,0.9)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {/* image */}
                  <div className="relative overflow-hidden aspect-video">
                    <Image
                      src={blog.file_path}
                      alt={blog.value || "Blog post"}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                    />
                    <div
                      className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(10,14,31,0.85), transparent)",
                      }}
                    />
                  </div>

                  {/* body */}
                  <div className="flex flex-col flex-1 p-5">
                    {/* meta */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[0.7rem] text-[#9ca3af] tracking-[0.04em]">
                        Parenting Tips
                      </span>
                      <span className="w-[3px] h-[3px] rounded-full bg-[#9ca3af]" />
                      <span className="text-[0.7rem] text-[#9ca3af] tracking-[0.04em]">
                        5 min read
                      </span>
                    </div>

                    {/* title */}
                    <h3
                      className="text-white font-bold text-[1.05rem] leading-[1.35] tracking-[-0.01em] mb-2.5 flex-1 transition-colors duration-200 group-hover:text-[rgba(240,244,255,0.95)]"
                      style={{ fontFamily: "'Rubik', sans-serif" }}
                    >
                      {blog.name}
                    </h3>

                    {/* footer */}
                    <div
                      className="flex items-center justify-between mt-auto pt-3.5"
                      style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
                    >
                      <span className="text-[0.68rem] font-semibold tracking-[0.04em] text-[rgba(240,244,255,0.35)]">
                        UltiMate Blog
                      </span>

                      <Link
                        href={{
                          pathname: "/blogs/blog-detail",
                          query: { name: blog.value },
                        }}
                        className="w-[34px] h-[34px] rounded-full flex items-center justify-center text-[0.85rem] text-[#f97316] transition-all duration-200 group-hover:text-white group-hover:translate-x-[3px]"
                        style={{
                          background: "rgba(249,115,22,0.08)",
                          border: "1px solid rgba(249,115,22,0.25)",
                        }}
                      >
                        →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* loading */}
        {blogs.length === 0 && (
          <div className="text-center text-[#9ca3af] py-20 relative z-[1]">
            Loading blog posts...
          </div>
        )}

        {/* ── DIVIDER ── */}
        <div
          className="mx-[6vw] mt-14"
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
          }}
        />

        {/* ── CTA STRIP ── */}
        <div className="relative z-[1] overflow-hidden px-[6vw] py-16 text-center">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(240,112,32,0.07), transparent 65%)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative max-w-[600px] mx-auto"
          >
            <h3
              className="text-white font-black uppercase tracking-[-0.03em] mb-3"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                fontFamily: "'Rubik', sans-serif",
              }}
            >
              Ready to put these insights{" "}
              <span className="text-[#f97316]">into action?</span>
            </h3>

            <p
              className="text-[0.92rem] leading-[1.7] mb-8"
              style={{ color: "rgba(242,237,232,0.5)" }}
            >
              UltiMate Bond turns parenting knowledge into daily 20-minute activities
              your child will actually enjoy. 1800+ activities, 1000+ stories, 100% results.
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href={process.env.NEXT_PUBLIC_APP_APPSTORE_SHARE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:-translate-y-[2px] hover:opacity-90"
              >
                <Image
                  src="/images/applink/app_store_white.png"
                  alt="Download on the App Store"
                  width={160}
                  height={52}
                  className="h-[52px] w-auto object-contain"
                />
              </a>

              <a
                href={process.env.NEXT_PUBLIC_APP_PLAYSTORE_SHARE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:-translate-y-[2px] hover:opacity-90"
              >
                <Image
                  src="/images/applink/play_store_white.png"
                  alt="Get it on Google Play"
                  width={160}
                  height={52}
                  className="h-[52px] w-auto object-contain"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}