import React from "react"
// import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import ac_tech from "../images/ac-tech-2.jpg"
import ac_tech_2 from "../images/smile-ac-guy-minified.jpg"
import husband from "../images/husband.jpg"
import woman from "../images/woman-crossing-fingers-minified.jpg"
import senior from "../images/senior-minified.jpg"
//
export const ProjectConversions = () => {
  return (
    <div>
      <div className="relative bg-white overflow-hidden md:mb-16 lg:mb-32">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
            <div className="sm:max-w-lg my-6">
              <div className="flex flex-col items-start">
                <h1 className="text-4xl font font-extrabold tracking-tight bg-gradient-to-r from-teal-500 to-cyan-900 bg-clip-text text-transparent sm:text-6xl">
                  Fill out for a free -No Obligation- Quote{" "}
                </h1>
                <span className="text-center my-6">
                  <lord-icon
                    src="https://cdn.lordicon.com/rvuqcvqy.json"
                    trigger="loop"
                    colors="primary:#14B8A6,secondary:#164E63"
                    stroke="100"
                    // delay="50"
                    axis-y="50"
                    style={{ width: 50, height: 50, text: "center" }}
                  />
                </span>
              </div>
              <Link
                to="/quiz-conversion"
                className="inline-block text-center bg-cyan-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-cyan-700"
              >
                Let&apos;s Go!
              </Link>
            </div>
            <div>
              <div className="lg:mt-10">
                {/* Decorative image grid  FROM TAILWIND */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 lg:w-64 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                          <img
                            src={ac_tech}
                            alt=""
                            className="w-full h-full object-right object-cover"
                          />
                        </div>
                        <div className="w-44 lg:w-64 h-64 rounded-lg overflow-hidden">
                          <img
                            src={woman}
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      {/* group of 3 */}
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 lg:w-64 h-64 rounded-lg overflow-hidden">
                          <img
                            src={ac_tech_2}
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 lg:w-64 h-64 rounded-lg overflow-hidden">
                          <img
                            src={husband}
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 lg:w-64 h-64 rounded-lg overflow-hidden">
                          <img
                            src={senior}
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      {/* final group of 2 */}
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 lg:w-64 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://images.unsplash.com/photo-1545649311-24d0ac00ae82?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 lg:w-64 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://images.unsplash.com/photo-1621905253185-95614217f357?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
