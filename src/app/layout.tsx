import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {NextIntlClientProvider} from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { Footer, } from "@/index"
import { Toaster } from "@/components/ui/toaster"
import Script from "next/script";


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
      <head>
        {/* <!-- Google Tag Manager --> */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KBZ3G8M6');`
          }}
        />
        {/* <!-- End Google Tag Manager --> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <!-- Google Tag Manager (noscript) --> */}
<noscript>
  <iframe
    src="https://www.googletagmanager.com/ns.html?id=GTM-KBZ3G8M6"
    height="0"
    width="0"
    style={{ display: "none", visibility: "hidden" }}
  ></iframe>
</noscript>
{/* <!-- End Google Tag Manager (noscript) --> */}
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
