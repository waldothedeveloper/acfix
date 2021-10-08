import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useHero } from "../hooks/useHero"
import { TrustBanner } from "./trust-banner"

export const Hero = () => {
  const data = useHero()

  //
  return (
    <div className="bg-white pb-8 sm:pb-12 lg:pb-12">
      <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
          <div>
            <div className="mt-20">
              <div>
                <a
                  href="tel:555555555"
                  className="inline-flex items-center text-gray-50 bg-blueGray-900 rounded-full p-1 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
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
              <div className="mt-6 sm:max-w-xl">
                <h1 className="text-4xl font-extrabold text-blueGray-900 tracking-tight sm:text-5xl">
                  {data.heroTitle}
                  {` `}
                  <span className="bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent">
                    {data.heroBold}
                    {` `}
                  </span>
                  {data.heroFinish}
                </h1>
              </div>
              <div className="mt-12 sm:max-w-lg sm:w-full sm:flex">
                <TrustBanner />
              </div>
            </div>
          </div>
        </div>

        <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
          <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="hidden sm:block">
              <StaticImage
                className="absolute inset-y-0 left-1/2 w-screen rounded-l-3xl lg:left-80 lg:right-0 lg:w-full"
                imgStyle={{
                  height: "100%",
                  width: "100%",
                }}
                src="../images/abs-patt-5.jpeg"
                alt="artic pattern"
                placeholder="blurred"
                layout="fullWidth"
                transformOptions={{ fit: "cover" }}
              />

              <svg
                className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-orange-400"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={392}
                  fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                />
              </svg>
            </div>
            <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
              <StaticImage
                className="w-full shadow-xl rounded-md ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                imgStyle={{
                  height: "100%",
                  width: "100%",
                }}
                src="../images/young-ac-repair-guy-hero-minified.jpg"
                alt="young ac fix certified technician inspecting an ac unit"
                placeholder="blurred"
                layout="fullWidth"
                transformOptions={{ fit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
