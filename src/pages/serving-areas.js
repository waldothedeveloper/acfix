import React from "react"
import { useServiceAreas } from "../hooks/useServiceAreas"
import { GatsbyImage } from "gatsby-plugin-image"

const ServingAreas = () => {
  const data = useServiceAreas()

  //
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 lg:py-12">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Proudly Serving the Following Communities
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            And more! Give us a call at (555) 555-5555 to see if we can service
            your AC system in your city.
          </p>
        </div>
      </div>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 px-3 lg:px-0">
        {data.map(file => (
          <li key={file.node.id} className="relative">
            <div className="group w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-cyan-500 overflow-hidden">
              <GatsbyImage
                className="object-cover pointer-events-none group-hover:opacity-75"
                image={file?.node?.childImageSharp?.gatsbyImageData}
                alt=""
              />

              <button
                type="button"
                className="absolute inset-0 focus:outline-none"
              >
                <span className="sr-only">View details for {file.name}</span>
              </button>
            </div>
            <p className="mt-2 text-center bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent text-sm md:text-xl font-extrabold">
              {file.node.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ServingAreas
