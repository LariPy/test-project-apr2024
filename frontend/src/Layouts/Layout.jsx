import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"

const Layout = () => {
  return (
    <section>
        <header>
            <Navbar />
        </header>
        <main>
            <Outlet />
        </main>
    </section>
  )
}

export default Layout