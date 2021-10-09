import React from "react"
import { Link } from "gatsby"

export const CallToAction = () => {
  return (
    <div className="bg-blueGray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-50 md:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-cyan-50">
            Start your free trial today.
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link
              to="/quiz-conversion"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
