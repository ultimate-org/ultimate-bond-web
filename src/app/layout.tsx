import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {NextIntlClientProvider} from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { Footer, } from "@/index"
import { Toaster } from "@/components/ui/toaster"
import { GoogleTagManager } from '@next/third-parties/google';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ulti-Mate",
  description: "Unleash the power of Child Development and Parenting with UltiMate. We offer age appropriate Life Skills enhancing 4000+ Child engagement along with practical parenting guidance and many more aids to enhance parent child bond.",
  icons: {
    icon: '/favicon.ico', // Path from /app
    shortcut: '/icon.png', // Optional
    apple: '/icon.png', // Apple touch icon
  },

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
      <GoogleTagManager gtmId="GTM-KR55C25Q"></GoogleTagManager>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript
    dangerouslySetInnerHTML={{
      __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KR55C25Q"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
    }}
  />
        <NextIntlClientProvider messages={messages}>
          {/* <Header></Header> */}
          {children}
          <Toaster />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
