"use client";

import Image from "next/image";

export default function WhatsAppButton() {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER; // e.g. "919158810069"
  const message = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ?? "Hi, I came from your website and want to know more about the UltiMate parenting app for my child.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    // Optional: fire analytics event here
    // window.gtag?.("event", "whatsapp_click", { event_category: "engagement" });
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-[200] transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_16px_rgba(37,211,102,0.5)]"
    >
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        width={60}
        height={60}
        className="w-[60px] h-[60px] rounded-full drop-shadow-xl"
      />
    </a>
  );
}