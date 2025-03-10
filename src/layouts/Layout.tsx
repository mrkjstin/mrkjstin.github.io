import { Outlet } from "react-router"
import Navbar from "../componenets/Navbar"

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen dark:bg-zinc-900 bg-zinc-200 dark:text-zinc-200 text-zinc-900 ">
        <Outlet />
        {/* <footer className="fixed bottom-0 w-full text-center py-2 shadow-md bg-zinc-100 mt-12 text-sm">
          <p className="text-zinc-500">
            Built with <span className="font-semibold">React.js</span> and
            styled using <span className="font-semibold">Tailwind CSS</span>.
          </p>
        </footer> */}
      </div>
    </>
  )
}
