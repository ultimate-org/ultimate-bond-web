"use client";

import { motion } from "framer-motion";
import { containerClass } from "@/components/ui/UI";
import Image from "next/image";

const ADVISORS = [
  {
    image: "/images/advisoryBoard/nandita-babu.webp",
    name: "Dr. Nandita Babu",
    role: "Senior Professor (Rtd) · Former HOD, Psychology, Delhi University",
    desc: "Decades of research in developmental psychology and child cognition — the scientific backbone of UltiMate's framework.",
  },
  {
    image: "/images/advisoryBoard/sudhir-panse.webp",
    name: "Mr. Sudhir Panse",
    role: "Mentor & Life Coach · IIT Alumni",
    desc: "Deep expertise in mentoring, leadership and life coaching. Shapes UltiMate's caregiver-growth and virtue framework.",
  },
  {
    image: "/images/advisoryBoard/naina-athalye.webp",
    name: "Dr. Naina Athalye",
    role: "Ph.D. Psychology · Pune University",
    desc: "Clinical and developmental psychology expertise guiding UltiMate's emotional-intelligence and parenting modules.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Advisors() {
  return (
    <section
      id="advisors"
      className="relative w-full overflow-hidden bg-[#050507] px-5 sm:px-7 lg:px-8 py-[clamp(56px,7vw,110px)]"
    >

      <div className="relative z-10 mx-auto max-w-[950px]">

        {/* ── Pill ── */}
        <div className="flex justify-center mb-[26px]">
          <div
            className="inline-flex items-center gap-[10px] h-[36px] px-[18px] rounded-full"
            style={{
              border: "1.029px solid rgba(255,154,64,0.25)",
              background: "linear-gradient(180deg,rgba(255,154,64,0.03) 0%,rgba(255,122,24,0.01) 100%)",
              boxShadow: "inset 0 1.029px 0 rgba(255,255,255,0.16)",
            }}
          >
            <span
              className="rounded-full shrink-0"
              style={{
                width: "7.2px",
                height: "7.2px",
                background: "#ff9a40",
                boxShadow: "0 0 8.229px #ff9a40",
              }}
            />
            <span
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 600,
                fontSize: "12.343px",
                color: "#ffb36b",
                letterSpacing: "1.9749px",
                textTransform: "uppercase",
              }}
            >
              Expert Backed
            </span>
          </div>
        </div>

        {/* ── Heading ── */}
        <h2
          className="text-center mx-auto mb-[22px]"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(34px,4.6vw,60px)",
            lineHeight: 1.02,
            letterSpacing: "-1.2px",
            color: "#fff",
            maxWidth: "760px",
          }}
        >
          Our{" "}
          <span
            style={{
              background: "linear-gradient(103.78deg,#FFB13D 0%,#FF7A18 26%,#FF4D8D 64%,#A24BFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            advisors
          </span>
        </h2>

        {/* ── Sub ── */}
        <p
          className="text-center mx-auto"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(16px,1.5vw,20px)",
            lineHeight: 1.62,
            color: "#8b8a98",
            maxWidth: "720px",
            marginBottom: "clamp(40px,5vw,64px)",
          }}
        >
          Built on decades of research and guided by India&apos;s leading child-development experts.
        </p>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ADVISORS.map((adv, i) => (
            <motion.div
              key={adv.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              /* Tailwind glassmorphism card */
              className="relative flex flex-col rounded-[28px] p-[30px] min-h-[318px]
                         bg-white/[0.06] backdrop-blur-2xl border border-white/[0.12]
                         shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(255,255,255,0.04),0_26px_60px_rgba(0,0,0,0.45)]
                         transition-all duration-500 hover:-translate-y-1
                         hover:bg-white/[0.09] hover:border-white/[0.2]"
            >
              {/* Gradient border — ::after mask equivalent */}
              <div
                className="absolute inset-0 rounded-[28px] pointer-events-none"
                style={{
                  padding: "1px",
                  background: "linear-gradient(155deg, rgba(255,255,255,0.34) 0%, rgba(255,255,255,0.10) 20%, rgba(255,255,255,0.03) 52%, rgba(255,255,255,0.07) 80%, rgba(255,255,255,0.16) 100%)",
                  WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />

              {/* Avatar */}
              {/* Advisor Image */}
              <div className="flex justify-center mb-8">
                <div className="relative w-[90px] h-[90px] rounded-full overflow-hidden border-2 border-[#ff9a40] shadow-[0_0_20px_rgba(255,122,24,0.35)] transition-transform duration-300 hover:scale-105">
                  <Image
                    src={adv.image}
                    alt={adv.name}
                    fill
                    sizes="90px"
                    className="object-cover"
                    priority={i === 0}
                  />
                </div>
              </div>

              {/* Name */}
              <h3
                className="text-white mb-2"
                style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: 1.1 }}
              >
                {adv.name}
              </h3>

              {/* Role */}
              <p
                className="mb-5"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: "13px", lineHeight: 1.5, color: "#ffb36b" }}
              >
                {adv.role}
              </p>

              {/* Description */}
              <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: 1.6, color: "#8b8a98" }}>
                {adv.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}