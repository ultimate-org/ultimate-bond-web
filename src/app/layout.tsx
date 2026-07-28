// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import {NextIntlClientProvider} from 'next-intl';
// import { getLocale, getMessages } from 'next-intl/server';
// import { Footer, } from "@/index"
// import { Toaster } from "@/components/ui/toaster"
// import { GoogleAnalytics } from '@next/third-parties/google';
// import MetaPixel from '@/components/MetaPixel'; 
// import Stars from "@/components/star/Star";
// import CookieConsent from '@/components/cookie/CookieConsent'
// import MsClarity from "@/components/microsoft-clairty";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "UltiMate – Daily Family Bonding App",
//   description: "Leading AICTE-accredited family app. Schools build academics, UltiMate builds resilience, emotional strength & real-world thinking. Ages 3–13. 10 mins/day.",
//   icons: {
//     icon: '/favicon.ico', // Path from /app
//     shortcut: '/icon.png', // Optional
//     apple: '/icon.png', // Apple touch icon
//   },
//   verification: {
//     google: 'XK0Yxs7-PPza92y',
//   }
// };

// export default async function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const locale = await getLocale();
 
 
//   const messages = await getMessages();
//   return (
//     <html lang={locale}>
     
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//        <MsClarity />
//         <NextIntlClientProvider messages={messages}>
//           {/* <Header></Header> */}
//           <Stars/>
//           {children}
//           <Toaster />
//           <Footer />
//         </NextIntlClientProvider>
//         <MetaPixel/>
//         <CookieConsent />
//       </body>
//         <GoogleAnalytics gaId="G-8FN0J3Y8CC"></GoogleAnalytics>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {NextIntlClientProvider} from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { Footer, } from "@/index"
import { Toaster } from "@/components/ui/toaster"
import { GoogleAnalytics,GoogleTagManager } from '@next/third-parties/google';
import MetaPixel from '@/components/MetaPixel'; 
import Stars from "@/components/star/Star";
import CookieConsent from '@/components/cookie/CookieConsent'
import MsClarity from "@/components/microsoft-clairty";
import Script from "next/script";
import { ThemeProvider, themeInitScript } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UltiMate – Daily Family Bonding App",
  description: "Leading AICTE-accredited family app. Schools build academics, UltiMate builds resilience, emotional strength & real-world thinking. Ages 3–13. 10 mins/day.",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  verification: {
    google: 'XK0Yxs7-PPza92y',
  }
};

// ── Structured Data ───────────────────────────────────────────────────────────
const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "UltiMate Parenting",
    "alternateName": "UltiMate Family Growth Platform",
    "description": "AI-powered family growth platform delivering 10-minute daily structured activities, audio stories, and guided conversations to build emotional intelligence, resilience, and life skills in children aged 3–13. AICTE accredited by Ministry of Education, Government of India.",
    "url": "https://ultimatebond.in",
    "applicationCategory": "LifestyleApplication",
    "applicationSubCategory": "Parenting & Family",
    "operatingSystem": "iOS, Android",
    "installUrl": [
      "https://apps.apple.com/in/app/ultimate-parenting/id6593687319",
      "https://play.google.com/store/apps/details?id=com.ultimate_bond"
    ],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "description": "Free to start"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "featureList": [
      "1500+ Life Skills Activities",
      "1000+ Audio Stories",
      "20+ Family Milestones",
      "WonderChat — age-smart conversation prompts",
      "Know Your Child (KYC) behavioural decoder",
      "StrengthFinder psychometric assessment",
      "Parenting Virtues Workshop",
      "Habit-Up daily fitness and mental health activities",
      "Read-O-Meter reading tracker",
      "Case Studies — Harvard-inspired scenarios",
      "Shlok & Mudra — Indian wisdom integration",
      "AI-powered Ulti-Bot parenting assistant",
      "Gamified Points & Rewards system",
      "Portfolio for child achievements",
      "Milestone Tracking cosmic journey"
    ],
    "audience": {
      "@type": "Audience",
      "audienceType": "Parents and caregivers of children aged 3 to 13 years"
    },
    "inLanguage": ["en", "hi"],
    "countryOfOrigin": "IN",
    "publisher": {
      "@type": "Organization",
      "name": "Adeptify Technologies Pvt. Ltd.",
      "url": "https://ultimatebond.in",
      "email": "contact@adeptifytechnologies.com",
      "telephone": "+91-9158810069",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.facebook.com/people/UltiMate-Family/61566923972853/",
        "https://www.instagram.com/ultimate_bondbetter/",
        "https://www.linkedin.com/company/ultimate-bond-better/",
        "https://www.youtube.com/@Ulti-Mate_Parenting"
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Adeptify Technologies Pvt. Ltd.",
    "alternateName": "UltiMate Parenting",
    "url": "https://ultimatebond.in",
    "logo": "https://ultimatebond.in/images/logo/Ultimate-Logo.png",
    "email": "contact@adeptifytechnologies.com",
    "telephone": "+91-9158810069",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "foundingLocation": {
      "@type": "Place",
      "name": "Pune, Maharashtra, India"
    },
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Accreditation",
      "recognizedBy": {
        "@type": "Organization",
        "name": "All India Council for Technical Education (AICTE)",
        "url": "https://www.aicte-india.org",
        "parentOrganization": {
          "@type": "GovernmentOrganization",
          "name": "Ministry of Education, Government of India"
        }
      }
    },
    "employee": [
      {
        "@type": "Person",
        "name": "Dr. Nandita Babu",
        "jobTitle": "Advisory Board Member",
        "description": "Senior Professor (Rtd), Former HOD Psychology, Delhi University.",
        "affiliation": {
          "@type": "EducationalOrganization",
          "name": "Delhi University"
        }
      },
      {
        "@type": "Person",
        "name": "Mr. Sudhir Panse",
        "jobTitle": "Advisory Board Member",
        "description": "IIT Alumni, Mentor and Life Coach.",
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Indian Institute of Technology (IIT)"
        }
      },
      {
        "@type": "Person",
        "name": "Dr. Naina Athalye",
        "jobTitle": "Advisory Board Member",
        "description": "Ph.D. Psychology, Pune University.",
        "affiliation": {
          "@type": "EducationalOrganization",
          "name": "Pune University"
        }
      }
    ],
    "sameAs": [
      "https://www.facebook.com/people/UltiMate-Family/61566923972853/",
      "https://www.instagram.com/ultimate_bondbetter/",
      "https://www.linkedin.com/company/ultimate-bond-better/",
      "https://www.youtube.com/@Ulti-Mate_Parenting"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "UltiMate Parenting",
    "url": "https://ultimatebond.in",
    "description": "Smart parenting app for daily child and family bonding. AICTE accredited.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://ultimatebond.in/blogs?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Adeptify Technologies Pvt. Ltd."
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is UltiMate Parenting app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "UltiMate is an AICTE-accredited family growth platform that helps parents spend 10 meaningful minutes a day with their children through 1500+ life skill activities, 1000+ audio stories, WonderChat conversation prompts, and an AI parenting assistant. It is designed for children aged 3–13 years."
        }
      },
      {
        "@type": "Question",
        "name": "Is UltiMate Parenting app free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, UltiMate is free to start and available on both iOS and Android."
        }
      },
      {
        "@type": "Question",
        "name": "Is UltiMate government approved?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. UltiMate has received official accreditation from AICTE under India's Ministry of Education."
        }
      },
      {
        "@type": "Question",
        "name": "What age group is UltiMate designed for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "UltiMate is designed for parents and caregivers of children aged 3 to 13 years."
        }
      },
      {
        "@type": "Question",
        "name": "How much time does UltiMate require daily?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Just 10 minutes a day. The app delivers simple, age-appropriate daily activities and conversation prompts."
        }
      },
      {
        "@type": "Question",
        "name": "What makes UltiMate different from other parenting apps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "UltiMate is a 15-feature integrated ecosystem combining life skills, audio stories, psychometric assessments, parenting workshops, Indian cultural content, AI guidance, and gamified milestones. It is the only parenting app in India with AICTE accreditation."
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "UltiMate Parenting",
    "url": "https://ultimatebond.in",
    "applicationCategory": "EducationApplication",
    "educationalUse": [
      "Emotional Intelligence Development",
      "Life Skills Training",
      "Parent-Child Bonding",
      "Character Building",
      "Resilience Training"
    ],
    "teaches": [
      "Emotional Regulation",
      "Critical Thinking",
      "Cultural Identity",
      "Financial Literacy",
      "Conflict Resolution",
      "Self-Discipline"
    ],
    "typicalAgeRange": "3-13",
    "isAccessibleForFree": true
  }
];

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {/* ── Structured Data (JSON-LD) ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
        {/* Sets the theme class before hydration to avoid a light/dark flash */}
        <Script id="theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <ThemeProvider>
          <GoogleTagManager gtmId="GTM-MBMZ8FB4" />
          <MsClarity />
          <NextIntlClientProvider messages={messages}>
            <Stars />
            {children}
            <Toaster />
            <Footer />
          </NextIntlClientProvider>
          <MetaPixel />
          <CookieConsent />
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-8FN0J3Y8CC" />
    </html>
  );
}

