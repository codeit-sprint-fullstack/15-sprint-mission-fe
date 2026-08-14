import { Outlet } from "react-router"
import GlobalFooter from "./GlobalFooter"
import GlobalHeader from "./GobalHeader"

function Layout() {
  return (
    <>
      <GlobalHeader />
      <Outlet />
      <GlobalFooter />
    </>
  )
}

export default Layout
