import HomeSideBar from "@/components/homeSideBar/HomeSideBar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
 
  return (
    <html>
      <body>
        <div className="flex">
          <HomeSideBar></HomeSideBar>
          {children}
          </div>
      </body>
    </html>
  );
}
