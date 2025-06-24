"use client";

import Image from "next/image";
import { useEffect } from "react";

type AppDownloadModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function DownloadAppModal({
  isOpen,
  onClose,
}: AppDownloadModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-[#B7ECFF] rounded-lg shadow-xl w-full max-w-4xl lg:w-[70%] md:w-[80%] sm:w-[90%] h-auto max-h-[90vh] overflow-auto flex flex-col md:flex-row relative p-6 md:p-8 lg:p-12">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 z-10"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Mobile: Image First */}
        <div className="md:hidden flex-1 min-h-[200px] relative mb-6">
          <Image
            src="/images/appscreenshot.png"
            fill
            className="object-contain"
            alt="App Preview"
            sizes="100vw"
          />
        </div>

        {/* Left Content */}
        <div className="p-4 md:p-6 flex-1 flex flex-col justify-center order-2 md:order-1">
          <h2 className="text-xl md:text-xl font-bold md:text-left text-center">
          Download app to get Age-appropriate, Easy to follow activities & features designed to enhance Life Skills.
                  </h2>
                  <h2 className="text-xl md:text-xl font-bold mb-4 md:mb-6 md:text-left text-center">
                  Applicable for children from 3 to 13 years age.
                  </h2>

          {/* App Store Buttons - Smaller on mobile */}
          <div className="flex flex-row gap-2 md:gap-4 mb-6 justify-center md:justify-start">
            <a
              href="https://apps.apple.com/in/app/ultimate-parenting/id6593687319"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[120px] md:w-auto md:flex-1"
            >
              <Image
                src="/images/applink/app_store.png"
                width={120}
                height={40}
                className="w-full h-auto"
                alt="Download on the App Store"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.ultimate_bond"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[120px] md:w-auto md:flex-1"
            >
              <Image
                src="/images/applink/play_store.png"
                width={120}
                height={40}
                className="w-full h-auto"
                alt="Get it on Google Play"
              />
            </a>
          </div>

          {/* QR Codes - Hidden on mobile */}
          <div className="hidden md:flex flex-col justify-center gap-2">
            <h2 className="text-lg font-bold text-center">Scan to download our App</h2>
            <div className="hidden md:flex justify-center gap-8">
              <div className="text-center">
                <div className="bg-white p-2 rounded-lg inline-block">
                  <Image
                    src="/images/appQR/Appstore_QR.png"
                    width={120}
                    height={120}
                    className="w-28 h-28 md:w-32 md:h-32"
                    alt="iOS QR Code"
                  />
                </div>
                <p className="mt-2 text-sm">iOS App Store</p>
              </div>
              <div className="text-center">
                <div className="bg-white p-2 rounded-lg inline-block">
                  <Image
                    src="/images/appQR/Playstore_QR.png"
                    width={120}
                    height={120}
                    className="w-28 h-28 md:w-32 md:h-32"
                    alt="Android QR Code"
                  />
                </div>
                <p className="mt-2 text-sm">Google Play Store</p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Right Image */}
        <div className="hidden md:block flex-1 min-h-[300px] relative order-2">
          <Image
            src="/images/appscreenshot.png"
            fill
            className="object-contain"
            alt="App Preview"
            sizes="50vw"
          />
        </div>
      </div>
    </div>
  );
}


