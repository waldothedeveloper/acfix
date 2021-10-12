import React from "react"
import { Link } from "gatsby"
import { ArrowRightIcon } from "@heroicons/react/outline"

export const CallToAction = () => {
  return (
    <div className="bg-blueGray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            <span className="inline-flex items-center">
              <span className="block">Savings & Comfort</span>
              <span className="inline-flex ml-5 items-center justify-center h-8 w-8 bg-cyan-50 rounded-full shadow-xl ring-4 ring-cyan-500">
                <lord-icon
                  src="https://cdn.lordicon.com/mdgrhyca.json"
                  trigger="loop"
                  delay="5000"
                  stroke="100"
                  colors="primary:#1E293B,secondary:#1E293B"
                  style={{ width: 28, height: 28 }}
                ></lord-icon>
              </span>
            </span>
            <br />
            <span> are hard to come by.</span> <br />
            <span className="mt-2 lock text-rose-500">
              AC FIX gives you both.
            </span>
          </h2>
        </div>

        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="flex flex-col rounded-md shadow">
            <Link
              to="/quiz-conversion"
              className="inline-flex items-center px-6 py-5 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              There is no cost to try
              <ArrowRightIcon
                className="ml-3 -mr-1 h-5 w-5"
                aria-hidden="true"
              />
            </Link>
            <p className="ml-1 mt-3 text-xs text-gray-400 font-semibold tracking-wide">
              No risk. No obligation
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
