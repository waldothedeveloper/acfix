import { Link } from "gatsby"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

//
const SubmissionError = () => {
  return (
    <Layout>
      <div className="bg-white my-16 flex flex-col lg:relative">
        <div className="flex-grow flex flex-col">
          <main className="flex-grow flex flex-col bg-white">
            <div className="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8">
              <div className="flex-shrink-0 pt-10 sm:pt-16">
                <a href="/" className="inline-flex">
                  <span className="sr-only">Workflow</span>
                  <lord-icon
                    className="h-full w-full"
                    src="https://cdn.lordicon.com/gxulgxck.json"
                    trigger="loop"
                    colors="primary:#0EA5E9,secondary:#0EA5E9"
                    stroke="100"
                    style={{ width: 65, height: 65 }}
                  />
                </a>
              </div>
              <div className="flex-shrink-0 my-auto py-16 sm:py-32">
                <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                  Errors are unanticipated
                </h1>
                <p className="mt-2 text-base text-gray-500">
                  We're sorry. Our system encountered an unexpected error.
                </p>
                <div className="mt-6">
                  <Link
                    to="/quiz-conversion"
                    className="text-base font-medium text-cyan-600 hover:text-cyan-500"
                  >
                    Let's try again<span aria-hidden="true"> &rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <StaticImage
            className="absolute inset-0 h-full w-full object-cover"
            src="../images/ac-jokes/husband-minified.jpg"
          />
        </div>
      </div>
    </Layout>
  )
}
export default SubmissionError
