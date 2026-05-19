import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {NextIntlClientProvider} from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { Footer, } from "@/index"
import { Toaster } from "@/components/ui/toaster"
import { GoogleAnalytics } from '@next/third-parties/google';
import MetaPixel from '@/components/MetaPixel'; 
import Stars from "@/components/star/Star";
import CookieConsent from '@/components/cookie/CookieConsent'


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
    icon: '/favicon.ico', // Path from /app
    shortcut: '/icon.png', // Optional
    apple: '/icon.png', // Apple touch icon
  },
  verification: {
    google: 'XK0Yxs7-PPza92y',
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
 
 
  const messages = await getMessages();
  return (
    <html lang={locale}>
     
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       
        <NextIntlClientProvider messages={messages}>
          {/* <Header></Header> */}
          <Stars/>
          {children}
          <Toaster />
          <Footer />
        </NextIntlClientProvider>
        <MetaPixel/>
        <CookieConsent />
      </body>
        <GoogleAnalytics gaId="G-8FN0J3Y8CC"></GoogleAnalytics>
    </html>
  );
}


