import { Outlet } from "react-router"

export default function Layout() {
  return (
    <>
      <div className=" dark:bg-zinc-900 bg-zinc-200 dark:text-zinc-200 text-zinc-900 min-h-[calc(100vh-64px)] flex flex-col items-center justify-center">
        <div className="flex flex-col w-auto md:w-5xl px-3">
          <Outlet />
        </div>
      </div>
    </>
  )
}
