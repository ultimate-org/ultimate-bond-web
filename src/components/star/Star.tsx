// "use client";

// import { useEffect, useRef } from "react";

// export default function Stars() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     type Star = { x: number; y: number; r: number; a: number; speed: number };
//     let stars: Star[] = [];
//     let animId: number;

//     // Matches original initStars() exactly
//     const initStars = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       stars = [];
//       for (let i = 0; i < 200; i++) {
//         stars.push({
//           x: Math.random() * canvas.width,
//           y: Math.random() * canvas.height,
//           r: Math.random() * 1.5 + 0.3,
//           a: Math.random(),
//           speed: Math.random() * 0.005 + 0.002,
//         });
//       }
//     };

//     // Matches original drawStars() exactly
//     const drawStars = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       stars.forEach((s) => {
//         s.a += s.speed;
//         const alpha = (Math.sin(s.a) * 0.5 + 0.5) * 0.8 + 0.1;
//         ctx.beginPath();
//         ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(180,200,255,${alpha})`;
//         ctx.fill();
//       });
//       animId = requestAnimationFrame(drawStars);
//     };

//     initStars();
//     drawStars();
//     window.addEventListener("resize", initStars);

//     return () => {
//       cancelAnimationFrame(animId);
//       window.removeEventListener("resize", initStars);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       id="stars"
//       className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-50"
//       style={{ zIndex: 0 }}
//     />
//   );
// }



"use client";

import { useEffect, useRef } from "react";

export default function Stars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    type Star = { x: number; y: number; r: number; a: number; speed: number };
    let stars: Star[] = [];
    let animId: number;

    // Matches original initStars() exactly
    const initStars = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = [];
      for (let i = 0; i < 200; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.5 + 0.3,
          a: Math.random(),
          speed: Math.random() * 0.005 + 0.002,
        });
      }
    };

    // Matches original drawStars() exactly
    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => {
        s.a += s.speed;
        const alpha = (Math.sin(s.a) * 0.5 + 0.5) * 0.8 + 0.1;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180,200,255,${alpha})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(drawStars);
    };

    initStars();
    drawStars();
    window.addEventListener("resize", initStars);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", initStars);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="stars"
      className="fixed top-0 left-0 w-full h-full pointer-events-none bg-[#04060f] "
      style={{ zIndex: 0 }}
    />
  );
}