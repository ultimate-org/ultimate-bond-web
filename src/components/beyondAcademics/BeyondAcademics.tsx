"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionTag, useReveal } from "@/components/ui/UI";

const CARDS = [
  {
    body: "Emotional regulation",
    highlight: "in tough situations?",
  },
  {
    body: "Conflict resolution & decision making",
    highlight: "in relationships?",
  },
  {
    body: "Financial literacy to make",
    highlight: "smart life decisions?",
  },
  {
    body: "Networking & leadership to",
    highlight: "unlock new opportunities?",
  },
  {
    body: "Resilience to",
    highlight: "handle setbacks?",
  },
];

export default function BeyondAcademics() {
  const tagRef = useReveal<HTMLDivElement>();
  const toplineRef = useReveal<HTMLParagraphElement>();
  const headlineRef = useReveal<HTMLHeadingElement>();
  const bottomRef = useReveal<HTMLParagraphElement>();

  const cardsRef = useRef<HTMLDivElement>(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-10% 0px" });

  return (
    <section
      id="beyond-academics"
      className="relative z-[1] py-[100px] text-center"
      style={{
        background:
          "linear-gradient(180deg, var(--bg) 0%, var(--surface) 50%, var(--bg) 100%)",
      }}
    >
      <div className="max-w-[1160px] mx-auto px-[6%]">

        {/* Section tag */}
        <div ref={tagRef}>
          <SectionTag>The Reality Check</SectionTag>
        </div>

        {/* Top line */}
        <p
          ref={toplineRef}
          className="mb-5"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            fontWeight: 300,
            color: "var(--muted)",
          }}
        >
          Traditional education prepares children for{" "}
          <span
            style={{
              textDecoration: "underline",
              textUnderlineOffset: "4px",
              textDecorationColor: "var(--orange)",
              textDecorationThickness: "2px",
              color: "var(--white)",
              fontWeight: 500,
            }}
          >
            Tests, Grades, Degrees
          </span>
        </p>

        {/* Headline */}
        <h2
          ref={headlineRef}
          className="mb-14"
          style={{
            fontFamily: "'Rubik', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.4rem)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            color: "var(--white)",
          }}
        >
          But does it prepare them for…
        </h2>

        {/* Cards grid */}
        <div
          ref={cardsRef}
          className="grid gap-4 mb-14"
          style={{
            gridTemplateColumns: "repeat(5, 1fr)",
          }}
        >
          {CARDS.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={
                cardsInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 40, scale: 0.95 }
              }
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.22, 0.68, 0.36, 1.2],
              }}
              whileHover={{
                y: -4,
                borderColor: "rgba(249,115,22,0.3)",
                boxShadow: "0 8px 30px rgba(249,115,22,0.08)",
              }}
              className="relative overflow-hidden rounded-[16px] flex items-center justify-center text-center"
              style={{
                background: "rgba(200,215,240,0.08)",
                border: "1px solid rgba(255,255,255,0.07)",
                padding: "2rem 1.4rem",
                minHeight: "160px",
                transition: "border-color 0.3s, box-shadow 0.3s",
              }}
            >
              {/* Top orange bar on hover — using motion */}
              <motion.span
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{
                  background:
                    "linear-gradient(90deg, var(--orange), transparent)",
                  opacity: 0,
                }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.92rem",
                  color: "var(--muted)",
                  lineHeight: 1.65,
                  fontWeight: 300,
                }}
              >
                {card.body}{" "}
                <strong
                  style={{ color: "var(--orange)", fontWeight: 700 }}
                >
                  {card.highlight}
                </strong>
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom handwritten line */}
        <p
          ref={bottomRef}
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)",
            fontWeight: 600,
            color: "var(--white)",
            lineHeight: 1.4,
            opacity: 0.9,
          }}
        >
          So, are we raising happy, resilient, and emotionally strong children?
        </p>

      </div>

      {/* Responsive grid CSS */}
      <style>{`
        #beyond-academics .grid {
          grid-template-columns: repeat(5, 1fr);
        }
        @media (max-width: 1024px) {
          #beyond-academics .grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 768px) {
          #beyond-academics {
            padding: 70px 0;
          }
          #beyond-academics .grid {
            grid-template-columns: 1fr 1fr;
            gap: 0.75rem;
          }
          #beyond-academics .grid > div {
            min-height: 130px;
            padding: 1.5rem 1.2rem;
          }
        }
        @media (max-width: 480px) {
          #beyond-academics .grid {
            grid-template-columns: 1fr;
          }
          #beyond-academics .grid > div {
            min-height: auto;
            padding: 1.4rem 1.2rem;
          }
        }
      `}</style>
    </section>
  );
}