import React, { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import { ChevronDownIcon } from "@heroicons/react/solid"
import { solutions } from "../utils/navLinks"
import { Link } from "gatsby"
import { classNames } from "../utils/classNames"

export const Navigation = () => {
  return (
    <header>
      <Popover className="relative bg-white">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:space-x-10 lg:px-8 md:bg-blueGray-800 rounded-b-3xl">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link
              to="/"
              className="flex items-center justify-center focus:outline-none"
            >
              <lord-icon
                className="h-8 w-auto sm:h-10"
                src="https://cdn.lordicon.com/kjmnoemj.json"
                trigger="loop"
                colors="primary:#06b6d4,secondary:#06b6d4"
                stroke="100"
              />
              <span className="sr-only">ACFIX.TODAY</span>
              <span className="text-base font-extrabold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
                ACFIX.TODAY
              </span>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-blueGray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-50 hover:text-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-200" : "text-gray-50",
                      "group bg-blueGray-800 rounded-md inline-flex items-center text-base font-medium hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                    )}
                  >
                    <span>Solutions</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                          {solutions.map(item => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-teal-500 to-cyan-500 text-white sm:h-12 sm:w-12">
                                <item.icon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              </div>
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Link
              to="/"
              className="text-base font-medium text-gray-50 hover:text-gray-200"
            >
              Pricing
            </Link>
            <Link
              to="/"
              className="text-base font-medium text-gray-50 hover:text-gray-200"
            >
              Blog
            </Link>
            <Link
              to="/"
              className="text-base font-medium text-gray-50 hover:text-gray-200"
            >
              Contact
            </Link>
          </Popover.Group>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  {/* ICON OF THE WEBSITE FOR MOBILE VIEW */}
                  <Link
                    to="/"
                    className="flex items-center justify-center focus:outline-none"
                  >
                    <lord-icon
                      className="h-8 w-auto sm:h-10"
                      src="https://cdn.lordicon.com/kjmnoemj.json"
                      trigger="loop"
                      colors="primary:#121331,secondary:#06b6d4"
                      stroke="75"
                    />
                    <span className="sr-only">ACFIX.TODAY</span>
                    <span className="text-base font-extrabold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
                      ACFIX.TODAY
                    </span>
                  </Link>

                  <div className="-mr-2">
                    <Popover.Button className="bg-blueGray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-50 hover:text-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid grid-cols-1 gap-7">
                    {solutions.map(item => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
                          <item.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-900">
                          {item.name}
                        </div>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5">
                <div className="grid grid-cols-2 gap-4">
                  <Link
                    to="/"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Pricing
                  </Link>
                  <Link
                    to="/"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Blog
                  </Link>
                  <Link
                    to="/"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  )
}
