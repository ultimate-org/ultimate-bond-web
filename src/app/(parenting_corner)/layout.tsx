import { Header } from "@/index"

 const Layout = ({children}:{children:React.ReactNode}) => {
  return <>
  <Header/>
    {children}
  </>
}

export default Layout;