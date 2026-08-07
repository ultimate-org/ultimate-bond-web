"use client";

const TICKER_LINE = "AICTE Accredited — Ministry of Education, Government of India";

export default function AicteTicker() {
  return (
    <div className="tk relative z-[2] w-full overflow-hidden border-y border-[var(--site-card-border)] bg-[linear-gradient(180deg,rgba(255,122,24,0.05)_0%,rgba(255,122,24,0.01)_100%)] py-[14px]">
      <div className="tk-track inline-flex items-center gap-[26px] whitespace-nowrap will-change-transform">
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className="inline-flex items-center gap-[26px]">
            <span
              className={`font-['Outfit',sans-serif] text-[clamp(16px,1.7vw,26px)] font-bold tracking-[0.26px] ${
                i % 2 === 0 ? "text-[#ff9a40]" : "text-[var(--site-heading)]"
              }`}
            >
              {TICKER_LINE}
            </span>
            <span className="text-[clamp(13px,1.3vw,20px)] text-[#ff7a18]">✦</span>
          </span>
        ))}
      </div>

      <style jsx>{`
        .tk {
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent);
          mask-image: linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent);
        }
        .tk-track {
          animation: ux-ticker 40s linear infinite;
        }
        @keyframes ux-ticker {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .tk-track {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
