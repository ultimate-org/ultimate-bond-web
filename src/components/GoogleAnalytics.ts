// import Script from 'next/script'

// export default function GoogleAnalytics() {
//   return (
//     <>
//       <Script
//         strategy="afterInteractive"
//         src="https://www.googletagmanager.com/gtag/js?id=G-8FN0J3Y8CC"
//       />
//       <Script
//         id="google-analytics"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{
//           __html: `
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', 'G-8FN0J3Y8CC');
//           `,
//         }}
//       />
//     </>
//   )
// }