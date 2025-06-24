import HomeSideBar from "@/components/homeSideBar/HomeSideBar";

// export default async function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
 
 
//   return (
//     <html>
//       <body>
//         <div className="flex">
//           <HomeSideBar></HomeSideBar>
//           <div className="md:w-[80%] max-h-screen overflow-scroll mx-auto">
//           {children}
//           </div>
//           </div>
//       </body>
//     </html>
//   );
// }
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full">
      <body className="h-full">
        <div className="flex h-max-screen">
          <HomeSideBar />
          <div className="flex-1 overflow-y-auto">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

