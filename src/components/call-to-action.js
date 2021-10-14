import React from "react"
import { Link } from "gatsby"

export const CallToAction = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:py-16 lg:px-8 lg:py-32">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Savings & Comfort are hard to come by.</span>
          <span className="mt-0.5 block text-rose-500">
            AC FIX gives you both.
          </span>
        </h2>
        <div className="mt-12 flex">
          <div className="flex flex-col rounded-md shadow">
            <Link
              to="/quiz-conversion"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700"
            >
              It&apos;s free to try!
            </Link>
            <p className="ml-1 mt-2 text-xs text-gray-400 font-semibold tracking-wide underline">
              No risk. No obligation
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
