import { Header } from "@/index"

 const Layout = ({children}:{children:React.ReactNode}) => {
  return <>
  <Header/>
    <div className="pt-[var(--nav-h,80px)] [--nav-h:80px]" style={{ background: "var(--site-page-bg)" }}>
      {children}
    </div>
  </>
}

export default Layout;