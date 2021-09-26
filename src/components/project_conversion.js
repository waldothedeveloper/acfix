import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

//
export const ProjectConversions = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font font-extrabold tracking-tight bg-gradient-to-r from-teal-500 to-cyan-900 bg-clip-text text-transparent sm:text-6xl">
              Let&apos;s talk about your project
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Answer the following questions to find out more about your
              Install, Repair, or Service a Central Air Conditioning System
              project.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-3">
                    {/* image # 1 crazy husband */}
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6">
                      <StaticImage
                        className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100"
                        src="../images/husband_breaking_stuff.jpg"
                        alt=""
                        placeholder="blurred"
                        layout="fullWidth"
                        transformOptions={{ fit: "cover" }}
                      />
                    </div>
                    {/* image # 2  woman crossing fingers */}
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6">
                      <div className="hidden md:block w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100" />
                      <StaticImage
                        className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100"
                        src="../images/woman_crossing_fingers.jpg"
                        alt=""
                        placeholder="blurred"
                        layout="fullWidth"
                        transformOptions={{ fit: "cover" }}
                      />
                      <div className="md:hidden w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100" />
                    </div>
                    {/* image # 3  senior crazy man */}
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6">
                      <StaticImage
                        className="hidden md:block w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100"
                        src="../images/senior.jpg"
                        alt=""
                        placeholder="blurred"
                        layout="fullWidth"
                        transformOptions={{ fit: "cover" }}
                      />
                      <div className="hidden md:block w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100" />
                    </div>
                  </div>
                </div>
              </div>

              <Link
                to="/quiz-conversion"
                className="inline-block text-center bg-cyan-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-cyan-700"
              >
                Let&apos;s start!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
