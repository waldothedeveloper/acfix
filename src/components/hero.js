import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { TrustBanner } from "./trust-banner"
import { useHero } from "../hooks/useHero"

export const Hero = () => {
  const data = useHero()

  //
  return (
    <main>
      <div className="relative bg-blueGray-100 overflow-hidden">
        {/* Decorative image and overlay */}
        <div aria-hidden="true">
          <StaticImage
            // transform-gpu md:transform-none scale-125 md:scale-0 rounded-2xl md:rounded-none rotate-12 mr-20 mt-64 md:mt-0 md:-mr-36
            className="absolute inset-0 -mr-96 lg:-mr-0 overflow-hidden"
            imgStyle={{
              height: "100%",
              width: "100%",
              objectPosition: "right",
            }}
            src="../images/ac-tech-working-minified.jpg"
            alt=""
            placeholder="blurred"
            layout="fullWidth"
            transformOptions={{ fit: "cover" }}
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-blueGray-700 opacity-75"
        />
        <div className="relative flex items-center md:justify-end flex-wrap px-4 min-h-screen">
          <div className="w-full md:max-w-xl xl:max-w-3xl px-0 mb-12 lg:mb-0 pt-20 lg:pt-32 pb-0 lg:pb-64">
            <div className="flex flex-col justify-start min-h-full xl:mr-20">
              <div>
                <a
                  href="tel:555555555"
                  className="inline-flex items-center text-gray-50 bg-black rounded-full p-1 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                >
                  <span className="px-3 py-1 text-gray-50 text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full">
                    FREE estimates 🤩
                  </span>
                  <span className="mx-2">
                    <lord-icon
                      delay="1500"
                      src="https://cdn.lordicon.com/ltxkhbfa.json"
                      trigger="loop"
                      colors="primary:#ffffff,secondary:#06b6d4"
                    />
                  </span>
                  <span className="mr-4 text-base">555-555-5555</span>
                </a>
              </div>
              <h1 className="my-6 text-3xl md:text-6xl text-white font-extrabold">
                {data.heroTitle}
                {` `}
                <span className="bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text text-transparent">
                  {data.heroBold}
                  {` `}
                </span>
                {data.heroFinish}
              </h1>

              <TrustBanner />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
