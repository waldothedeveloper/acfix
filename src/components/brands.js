import React from "react"
import { StaticImage } from "gatsby-plugin-image"

//
export const Brands = () => {
  return (
    <div className="bg-blueGray-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center text-base font-semibold uppercase text-blueGray-50 tracking-wider">
          We proudly serve a wide variety of brands.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-0.5 md:grid-cols-3 lg:mt-8">
          <div className="col-span-1 flex justify-center py-8 px-8">
            <StaticImage
              className="max-h-24"
              src="../images/rheem.png"
              alt="rheem"
              placeholder="blurred"
              layout="constrained"
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8">
            <StaticImage
              className="max-h-24"
              src="../images/trane.png"
              alt="rheem"
              placeholder="blurred"
              layout="constrained"
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8">
            <StaticImage
              className="max-h-24"
              src="../images/carrier.png"
              alt="rheem"
              placeholder="blurred"
              layout="constrained"
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8">
            <img
              className="max-h-12"
              src="https://tailwindui.com/img/logos/laravel-logo-gray-400.svg"
              alt="Laravel"
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8">
            <img
              className="max-h-12"
              src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
              alt="StaticKit"
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8">
            <img
              className="max-h-12"
              src="https://tailwindui.com/img/logos/statamic-logo-gray-400.svg"
              alt="Statamic"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
