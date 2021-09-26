import React, { useState } from "react"
import { Switch } from "@headlessui/react"
import { SVGLeft } from "../svg/svgLeft.js"
import { SVGRight } from "../svg/svgRight.js"
import { classNames } from "../utils/classNames"

export const SignUpForm = () => {
  const [agreed, setAgreed] = useState(false)

  //
  return (
    <div className="bg-blueGray-50 py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <SVGLeft />
        <SVGRight />

        <div className="text-center">
          <div className=" border-b-2 border-cyan-100 inline-block mb-14 text-base font-extrabold">
            <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
              ACFIX.TODAY
            </span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Contact sales
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
            massa dictumst amet. Sapien tortor lacus arcu.
          </p>
        </div>
        <div className="mt-12">
          <form
            action="#"
            method="POST"
            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          >
            <div className="sm:col-span-2">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Full name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="py-3 px-4 block w-full focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md"
                  placeholder="+1 (555) 987-6543"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 border border-gray-300 rounded-md"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className={classNames(
                      agreed ? "bg-teal-600" : "bg-gray-200",
                      "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                    )}
                  >
                    <span className="sr-only">Agree to policies</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        agreed ? "translate-x-5" : "translate-x-0",
                        "inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                      )}
                    />
                  </Switch>
                </div>
                <div className="ml-3">
                  <p className="text-base text-gray-500">
                    By selecting this, you agree to the{" "}
                    <a href="#" className="font-medium text-gray-700 underline">
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="#" className="font-medium text-gray-700 underline">
                      Cookie Policy
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium bg-gradient-to-tr from-teal-200 to-cyan-400 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Let&apos;s talk
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
