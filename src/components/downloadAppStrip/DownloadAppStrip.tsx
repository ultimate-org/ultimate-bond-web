// import Image from "next/image";

// export default function DownloadAppStrip() {
//     return (
//         <div className="flex flex-row gap-2 md:gap-4 mb-6 justify-center md:justify-start h-12">
//                     <a
//                       href="https://apps.apple.com/in/app/ultimate-parenting/id6593687319"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="w-[50px] md:w-auto "
//                     >
//                       <Image
//                         src="/images/applink/app_store.png"
//                         fill
//                         className="object-contain"
//                         alt="Download on the App Store"
//                       />
//                     </a>
//                     <a
//                       href="https://play.google.com/store/apps/details?id=com.ultimate_bond"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="w-[50px] md:w-auto "
//                     >
//                       <Image
//                         src="/images/applink/play_store.png"
//                         fill
//                         className="object-contain"
//                         alt="Get it on Google Play"
//                       />
//                     </a>
//                   </div>
//     )
// }


import Image from "next/image";

export default function DownloadAppStrip() {
  return (
    <div className="flex gap-3 md:gap-4 mb-6 justify-center md:justify-end h-12">
      {/* App Store Link */}
      <a
        href="https://apps.apple.com/in/app/ultimate-parenting/id6593687319"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download on the App Store"
        className="relative w-32 h-8 md:w-40 md:h-12 transition-transform hover:scale-105"
      >
        <Image
          src="/images/applink/app_store.png"
          alt="Download on the App Store"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 128px, 160px"
          priority
        />
      </a>

      {/* Google Play Link */}
      <a
        href="https://play.google.com/store/apps/details?id=com.ultimate_bond"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get it on Google Play"
        className="relative w-32 h-8 md:w-40 md:h-12 transition-transform hover:scale-105"
      >
        <Image
          src="/images/applink/play_store.png"
          alt="Get it on Google Play"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 128px, 160px"
          priority
        />
      </a>
    </div>
  );
}