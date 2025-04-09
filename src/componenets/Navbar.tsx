import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { NavLink } from "react-router"

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "About Me", href: "/about-me", current: false },
  { name: "Projects", href: "/projects", current: false },
  { name: "My Tech Stack", href: "/tech-stack", current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

const Navbar = () => {
  return (
    <>
      <Disclosure
        as="nav"
        className="dark:bg-zinc-900 bg-zinc-200 top-0 sticky z-50"
      >
        <div className="mx-auto max-w-5xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-zinc-800 hover:bg-zinc-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block size-6 group-data-open:hidden dark:text-zinc-200"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden size-6 group-data-open:block dark:text-zinc-200"
                />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "dark:text-zinc-200 underline"
                          : "dark:text-zinc-200 text-zinc-800 hover:underline",
                        "rounded-md px-3 py-2 text-md font-medium"
                      )}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
            <button
              className="p-1.5 rounded bg-gradient-to-r from-red-400 to-orange-400 dark:text-zinc-100 text-zinc-200 hover:from-red-600 hover:to-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
              onClick={() =>
                (window.location.href = "mailto:mrkjstn.dinglasan@gmail.com")
              }
            >
              Open a ticket 🎫
            </button>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          {({ close }) => (
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={() => close()}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "bg-zinc-400 text-zinc-100 dark:text-zinc-200 dark:bg-zinc-700"
                      : "text-zinc-800 hover:bg-zinc-700 hover:text-white dark:text-zinc-400",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          )}
        </DisclosurePanel>
      </Disclosure>
    </>
  )
}

export default Navbar
