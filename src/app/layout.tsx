import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {NextIntlClientProvider} from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { Footer, } from "@/index"
import { Toaster } from "@/components/ui/toaster"


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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
                <NextIntlClientProvider messages={messages}>
                {/* <Header></Header> */}

          {children}
          <Toaster />
          <Footer></Footer>

          </NextIntlClientProvider>

      </body>
    </html>
  );
}
