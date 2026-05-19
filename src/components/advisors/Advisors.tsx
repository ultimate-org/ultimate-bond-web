// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { containerClass, SectionHeader } from "@/components/ui/UI";

// const ADVISORS = [
//   {
//     photo: "", // set to "/advisors/name.jpg" when available
//     icon: "👤",
//     name: "Advisor Name",
//     title: "Role · Organisation",
//     bio: "Brief background about this advisor and why their expertise matters to the mission.",
//   },
//   {
//     photo: "",
//     icon: "👤",
//     name: "Advisor Name",
//     title: "Role · Organisation",
//     bio: "Brief background about this advisor and why their expertise matters to the mission.",
//   },
//   {
//     photo: "",
//     icon: "👤",
//     name: "Advisor Name",
//     title: "Role · Organisation",
//     bio: "Brief background about this advisor and why their expertise matters to the mission.",
//   },
//   {
//     photo: "",
//     icon: "👤",
//     name: "Advisor Name",
//     title: "Role · Organisation",
//     bio: "Brief background about this advisor and why their expertise matters to the mission.",
//   },
//   {
//     photo: "",
//     icon: "👤",
//     name: "Advisor Name",
//     title: "Role · Organisation",
//     bio: "Brief background about this advisor and why their expertise matters to the mission.",
//   },
//   {
//     photo: "",
//     icon: "👤",
//     name: "Advisor Name",
//     title: "Role · Organisation",
//     bio: "Brief background about this advisor and why their expertise matters to the mission.",
//   },
// ];

// const cardVariants = {
//   hidden: { opacity: 0, y: 28 },
//   visible: (i: number) => ({
//     opacity: 1, y: 0,
//     transition: { duration: 0.45, delay: i * 0.08, ease: "easeOut" },
//   }),
// };

// export default function Advisors() {
//   return (
//     <section id="advisors" className="py-[100px] relative z-[1] bg-[#0a0e1f]">
//       <div className={containerClass}>
//         <SectionHeader
//           tag="Our Advisors"
//           heading={<>Guided by the<br /><em className="text-[#f97316] not-italic">best in the field</em></>}
//           sub="Industry leaders, educators and technologists who believe in what we're building — and help us build it better."
//         />

//         {/* .advisors-grid — repeat(3,1fr) */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
//           {ADVISORS.map((adv, i) => (
//             <motion.div
//               key={`${adv.name}-${i}`}
//               custom={i}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.15 }}
//               variants={cardVariants}
//               /* .advisor-card */
//               className="bg-[#04060f] border border-white/[0.08] rounded-[20px] p-8 text-center transition-all duration-300 hover:-translate-y-[3px] hover:border-[rgba(249,115,22,0.3)]"
//             >
//               {/* .advisor-photo */}
//               <div
//                 className="relative w-[120px] h-[120px] rounded-2xl mx-auto mb-5 overflow-hidden flex flex-col items-center justify-center gap-1.5"
//                 style={{
//                   border: "1px solid rgba(249,115,22,0.25)",
//                   background: "#0d1224",
//                 }}
//               >
//                 {/* ::before gradient overlay */}
//                 <div
//                   className="absolute inset-0 z-0"
//                   style={{
//                     background:
//                       "linear-gradient(135deg, rgba(249,115,22,0.06), rgba(59,130,246,0.06))",
//                   }}
//                 />

//                 {adv.photo ? (
//                   /* real photo when available */
//                   <Image
//                     src={adv.photo}
//                     alt={adv.name}
//                     fill
//                     className="object-cover relative z-[1]"
//                   />
//                 ) : (
//                   /* placeholder state */
//                   <>
//                     {/* .advisor-photo-icon */}
//                     <span className="text-[1.8rem] opacity-40 relative z-[1] leading-none">
//                       {adv.icon}
//                     </span>
//                     {/* .advisor-photo-label */}
//                     <span
//                       className="text-[0.62rem] tracking-[0.06em] uppercase text-[#9ca3af] opacity-60 relative z-[1] text-center leading-[1.4]"
//                     >
//                       Photo
//                       <br />
//                       Coming Soon
//                     </span>
//                   </>
//                 )}
//               </div>

//               {/* .advisor-card h3 */}
//               <h3
//                 className="text-white font-black text-[1rem] mb-1"
//                 style={{ fontFamily: "'Rubik', sans-serif" }}
//               >
//                 {adv.name}
//               </h3>

//               {/* .advisor-title */}
//               <p className="text-[#f97316] text-[0.82rem] font-medium mb-2.5">
//                 {adv.title}
//               </p>

//               {/* .advisor-card p */}
//               <p className="text-[#9ca3af] text-[0.82rem] leading-[1.55] font-light">
//                 {adv.bio}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import { motion } from "framer-motion";
// import { containerClass, SectionHeader } from "@/components/ui/UI";

// /* ── 3 advisors, word-for-word from HTML ── */
// const ADVISORS = [
//   {
//     name: "Dr. Nandita Babu",
//     title: "Senior Professor (Rtd) · Former HOD, Psychology",
//     bio: "Delhi University · Decades of research in developmental psychology and child cognition. The scientific backbone of UltiMate's child development framework.",
//   },
//   {
//     name: "Mr. Sudhir Panse",
//     title: "Mentor & Life Coach · IIT Alumni",
//     bio: "IIT Alumni with deep expertise in mentoring, leadership development and life coaching. Shapes UltiMate's caregiver growth and virtue framework.",
//   },
//   {
//     name: "Dr. Naina Athalye",
//     title: "Ph.D. Psychology · Pune University",
//     bio: "Clinical and developmental psychology expertise from Pune University. Guides UltiMate's emotional intelligence and parenting behaviour modules.",
//   },
// ];

// const cardVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: (i: number) => ({
//     opacity: 1, y: 0,
//     transition: { duration: 0.4, delay: i * 0.1, ease: "easeOut" },
//   }),
// };

// export default function Advisors() {
//   return (
//     <section
//       id="advisors"
//       className="py-[100px] relative z-[1]"
//       style={{ background: "#0a0e1f" }}
//     >
//       <div className={containerClass}>

//         {/* .section-header.reveal */}
//         <SectionHeader
//           tag="Expert Backed"
//           heading={
//             <>
//               Our Child Psychology &amp;
//               <br />
//               Parenting Advisors
//             </>
//           }
//           sub="Built on decades of research and guided by India's leading child development experts."
//         />

//         {/* .advisors-grid.reveal */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
//           {ADVISORS.map((adv, i) => (
//             <motion.div
//               key={adv.name}
//               custom={i}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.2 }}
//               variants={cardVariants}
//               /* .advisor-card */
//               className="bg-[#04060f] border border-white/[0.08] rounded-[20px] p-8 text-center transition-all duration-300 hover:border-[rgba(249,115,22,0.25)] hover:-translate-y-[3px]"
//             >
//               {/* .advisor-photo */}
//               <div
//                 className="w-[120px] h-[120px] rounded-[16px] mx-auto mb-5 flex flex-col items-center justify-center gap-1.5 overflow-hidden relative"
//                 style={{
//                   border: "1px solid rgba(249,115,22,0.25)",
//                   background: "#0d1224",
//                 }}
//               >
//                 {/* ::before gradient overlay */}
//                 <div
//                   className="absolute inset-0"
//                   style={{
//                     background:
//                       "linear-gradient(135deg, rgba(249,115,22,0.06), rgba(59,130,246,0.06))",
//                   }}
//                 />

//                 {/* .advisor-photo-icon */}
//                 <span className="text-[1.8rem] relative z-[1]" style={{ opacity: 0.4 }}>
//                   📷
//                 </span>

//                 {/* .advisor-photo-label */}
//                 <span
//                   className="text-[0.62rem] tracking-[0.06em] uppercase text-[#9ca3af] text-center leading-[1.4] relative z-[1]"
//                   style={{ opacity: 0.6 }}
//                 >
//                   Photo
//                   <br />
//                   Coming Soon
//                 </span>
//               </div>

//               {/* h3 */}
//               <h3
//                 className="text-white font-black text-[1rem] mb-1"
//                 style={{ fontFamily: "'Rubik', sans-serif" }}
//               >
//                 {adv.name}
//               </h3>

//               {/* .advisor-title */}
//               <div className="text-[#f97316] text-[0.82rem] font-medium mb-2.5">
//                 {adv.title}
//               </div>

//               {/* p */}
//               <p className="text-[#9ca3af] text-[0.82rem] leading-[1.55] font-light">
//                 {adv.bio}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { containerClass, SectionHeader } from "@/components/ui/UI";

/* ── Add advisor photos to /public/advisors/ and update src below ── */
const ADVISORS = [
  {
    name: "Dr. Nandita Babu",
    title: "Senior Professor (Rtd) · Former HOD, Psychology",
    bio: "Delhi University · Decades of research in developmental psychology and child cognition. The scientific backbone of UltiMate's child development framework.",
    photo: "/images/advisoryBoard/nandita-babu.jpg",
  },
  {
    name: "Mr. Sudhir Panse",
    title: "Mentor & Life Coach · IIT Alumni",
    bio: "IIT Alumni with deep expertise in mentoring, leadership development and life coaching. Shapes UltiMate's caregiver growth and virtue framework.",
    photo: "/images/advisoryBoard/sudhir-panse.jpeg",
  },
  {
    name: "Dr. Naina Athalye",
    title: "Ph.D. Psychology · Pune University",
    bio: "Clinical and developmental psychology expertise from Pune University. Guides UltiMate's emotional intelligence and parenting behaviour modules.",
    photo: "/images/advisoryBoard/naina-athalye.jpeg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.4, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Advisors() {
  return (
    <section
      id="advisors"
      className="py-[100px] relative z-[1]"
      style={{ background: "#0a0e1f" }}
    >
      <div className={containerClass}>

        <SectionHeader
          tag="Expert Backed"
          heading={
            <>
              {/* Our Child Psychology &amp;
              <br />
              Parenting Advisors */}
              Our Advisors
            </>
          }
          sub="Built on decades of research and guided by India's leading child development experts."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {ADVISORS.map((adv, i) => (
            <motion.div
              key={adv.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="bg-[#04060f] border border-white/[0.08] rounded-[20px] p-8 text-center transition-all duration-300 hover:border-[rgba(249,115,22,0.25)] hover:-translate-y-[3px]"
            >
              {/* .advisor-photo — real image */}
              <div
                className="w-[120px] h-[120px] rounded-[16px] mx-auto mb-5 overflow-hidden relative"
                style={{ border: "1px solid rgba(249,115,22,0.25)" }}
              >
                <Image
                  src={adv.photo}
                  alt={adv.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* h3 */}
              <h3
                className="text-white font-black text-[1rem] mb-1"
                style={{ fontFamily: "'Rubik', sans-serif" }}
              >
                {adv.name}
              </h3>

              {/* .advisor-title */}
              <div className="text-[#f97316] text-[0.82rem] font-medium mb-2.5">
                {adv.title}
              </div>

              {/* p */}
              <p className="text-[#9ca3af] text-[0.82rem] leading-[1.55] font-light">
                {adv.bio}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}