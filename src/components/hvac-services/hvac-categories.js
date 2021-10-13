import React from "react"
import { usePopularServices } from "../../hooks/usePopularServices"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export const HvacCategories = () => {
  //
  const popularServices = usePopularServices()

  //
  return (
    <div className="xl:mb-72">
      <div className="py-16 sm:py-24 xl:max-w-7xl xl:mx-auto xl:px-8">
        <div className="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Our AC Partners&apos; Most Popular Services
          </h2>
          <Link
            to="/all-services"
            className="hidden text-sm font-semibold text-cyan-600 hover:text-cyan-500 sm:block"
          >
            Browse all services<span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>

        <div className="mt-4 flow-root">
          <div className="">
            <div className="box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible">
              <div className="absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-3 xl:gap-x-8">
                {popularServices.map(service => (
                  <Link
                    to="/quiz-conversion"
                    key={service.node.id}
                    className="relative w-56 h-80 rounded-lg p-6 lg:mb-3 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto"
                  >
                    <span aria-hidden="true" className="absolute inset-0">
                      <GatsbyImage
                        className="w-full h-full object-center object-cover"
                        image={service.node.imageSrc.gatsbyImageData}
                        alt=""
                      />
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                    />
                    <span className="relative mt-auto text-center text-xl font-bold text-white">
                      {service.node.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 px-4 sm:hidden">
          <Link
            to="/all-services"
            className="block text-sm font-semibold text-cyan-600 hover:text-cyan-500"
          >
            Browse all services<span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
