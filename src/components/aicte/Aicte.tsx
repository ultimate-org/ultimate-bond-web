// // import Image from "next/image";

// // export default function Aicte() {
// //   return (
// //     <section
// //       id="aicte-bar"
// //       className="py-7"
// //       style={{
// //         background:
// //           "linear-gradient(90deg, rgba(249,115,22,0.06), rgba(249,115,22,0.12), rgba(249,115,22,0.06))",
// //         borderTop: "1px solid rgba(249,115,22,0.25)",
// //         borderBottom: "1px solid rgba(249,115,22,0.25)",
// //       }}
// //     >
// //       <div className="max-w-[1160px] mx-auto px-[6%] flex items-center justify-center gap-10 flex-wrap">

// //         {/* AICTE Logo */}
// //         <Image
// //           src="/aicte-logo.png" // ← replace with your actual logo path
// //           alt="AICTE Logo"
// //           width={88}
// //           height={88}
// //           className="object-contain w-[88px] h-[88px] flex-shrink-0"
// //           style={{ filter: "drop-shadow(0 0 12px rgba(249,115,22,0.3))" }}
// //         />

// //         {/* Text block */}
// //         <div className="aicte-text">
// //           {/* Badge pill */}
// //           <div
// //             className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 mb-2.5 text-[0.75rem] font-bold tracking-[0.06em] uppercase text-[#f97316]"
// //             style={{
// //               background: "rgba(249,115,22,0.1)",
// //               border: "1px solid rgba(249,115,22,0.25)",
// //               fontFamily: "'Rubik', sans-serif",
// //             }}
// //           >
// //             {/* badge icon */}
// //             <svg
// //               width="13"
// //               height="13"
// //               viewBox="0 0 24 24"
// //               fill="none"
// //               stroke="currentColor"
// //               strokeWidth="2.5"
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //             >
// //               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
// //             </svg>
// //             AICTE Approved
// //           </div>

// //           {/* Headline */}
// //           <p
// //             className="text-white font-black text-[1.1rem] mb-1 tracking-[-0.01em]"
// //             style={{ fontFamily: "'Rubik', sans-serif" }}
// //           >
// //             Approved by All India Council for Technical Education
// //           </p>

// //           {/* Sub-line */}
// //           <p className="text-[#9ca3af] text-[0.88rem] font-light leading-[1.6] max-w-[560px]">
// //             Our programs are{" "}
// //             <strong className="text-[#f97316] font-semibold">
// //               officially recognised
// //             </strong>{" "}
// //             by AICTE, ensuring industry-aligned curriculum and{" "}
// //             <strong className="text-[#f97316] font-semibold">
// //               government-backed credibility
// //             </strong>{" "}
// //             for every learner.
// //           </p>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// import Image from "next/image";
// import { containerClass } from "@/components/ui/UI";

// export default function AicteBadge() {
//   return (
//     <section
//       id="aicte-bar"
//       className="py-7 relative z-[1]"
//       style={{
//         background: "linear-gradient(90deg, rgba(249,115,22,0.06), rgba(249,115,22,0.12), rgba(249,115,22,0.06))",
//         borderTop: "1px solid rgba(249,115,22,0.25)",
//         borderBottom: "1px solid rgba(249,115,22,0.25)",
//       }}
//     >
//       <div className={`${containerClass} flex items-center justify-center gap-10 flex-wrap`}>

//         {/* Logo */}
//         <Image
//           src="/aicte-logo.png"
//           alt="AICTE Logo"
//           width={88}
//           height={88}
//           className="object-contain w-[88px] h-[88px] flex-shrink-0"
//           style={{ filter: "drop-shadow(0 0 12px rgba(249,115,22,0.3))" }}
//         />

//         {/* Text */}
//         <div>
//           {/* Badge pill — .aicte-badge-pill */}
//           <div
//             className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 mb-2.5 text-[0.75rem] font-bold tracking-[0.06em] uppercase text-[#f97316]"
//             style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.25)", fontFamily: "'Rubik', sans-serif" }}
//           >
//             <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//             </svg>
//             AICTE Approved
//           </div>

//           {/* .aicte-headline */}
//           <p className="text-white font-black text-[1.1rem] mb-1 tracking-[-0.01em]" style={{ fontFamily: "'Rubik', sans-serif" }}>
//             Approved by All India Council for Technical Education
//           </p>

//           {/* .aicte-sub */}
//           <p className="text-[#9ca3af] text-[0.88rem] font-light leading-[1.6] max-w-[560px]">
//             Our programs are{" "}
//             <strong className="text-[#f97316] font-semibold">officially recognised</strong>{" "}
//             by AICTE, ensuring industry-aligned curriculum and{" "}
//             <strong className="text-[#f97316] font-semibold">government-backed credibility</strong>{" "}
//             for every learner.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }



import Image from "next/image";
import { containerClass } from "@/components/ui/UI";

// Base64 logo from the provided HTML — drop your actual logo in /public/aicte-logo.png
// and replace this with: src="/aicte-logo.png"
const AICTE_LOGO_B64 = "./images/aictelogo.png"; // swap if you have the file in /public

export default function AicteBadge() {
  return (
    <section
      id="aicte-bar"
      className="py-7 relative z-[1]"
      style={{
        background:
          "linear-gradient(90deg, rgba(249,115,22,0.06), rgba(249,115,22,0.12), rgba(249,115,22,0.06))",
        borderTop: "1px solid rgba(249,115,22,0.25)",
        borderBottom: "1px solid rgba(249,115,22,0.25)",
      }}
    >
      {/* .aicte-inner.reveal */}
      <div className={`${containerClass} flex items-center justify-center gap-10 flex-wrap`}>

        {/* .aicte-logo */}
        <Image
          src="/images/aictelogo.png"
          alt="AICTE Approved"
          width={120}
          height={120}
          className="w-[120px] h-[120px] object-cover flex-shrink-0"
          style={{ filter: "drop-shadow(0 0 12px rgba(249,115,22,0.3))" }}
        />

        {/* .aicte-text */}
        <div>
          {/* .aicte-badge-pill — "🏛️ Official Government Endorsement" */}
          <div
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 mb-2.5 text-[0.75rem] font-bold tracking-[0.06em] uppercase text-[#f97316]"
            style={{
              background: "rgba(249,115,22,0.1)",
              border: "1px solid rgba(249,115,22,0.25)",
              fontFamily: "'Rubik', sans-serif",
            }}
          >
            🏛️ Official Government Endorsement
          </div>

          {/* .aicte-headline */}
          <p
            className="text-white font-black text-[1.1rem] mb-1 tracking-[-0.01em]"
            style={{ fontFamily: "'Rubik', sans-serif" }}
          >
            AICTE Accredited — Ministry of Education, Government of India
          </p>

          {/* .aicte-sub */}
          <p className="text-[#9ca3af] text-[0.88rem] font-light leading-[1.6] max-w-[560px]">
            UltiMate has received official accreditation from{" "}
            <strong className="text-[#f97316] font-semibold">
              AICTE (All India Council for Technical Education)
            </strong>
            , under India's Ministry of Education — recognising our app as an
            essential resource for Indian families and parents in child
            development.
          </p>
        </div>

      </div>
    </section>
  );
}