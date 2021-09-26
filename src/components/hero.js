import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export const Hero = () => {
  return (
    <main>
      <div className="relative bg-blueGray-700 overflow-hidden">
        {/* Decorative image and overlay */}
        <div aria-hidden="true">
          <StaticImage
            className="absolute inset-0 overflow-hidden transform-gpu md:transform-none scale-125 md:scale-0 rounded-2xl md:rounded-none rotate-12 mr-20 mt-64 md:mt-0 md:-mr-36"
            imgStyle={{
              height: "100%",
              width: "100%",
              objectPosition: "right",
            }}
            src="../images/man_beach_with_meme.jpeg"
            alt=""
            placeholder="blurred"
            layout="fullWidth"
            transformOptions={{ fit: "cover" }}
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-blueGray-800 opacity-30"
        />
        <div className="relative flex flex-wrap px-4 min-h-screen">
          <div className="w-full md:w-6/12 px-0 mb-12 lg:mb-0 pt-20 lg:pt-32 pb-0 lg:pb-64">
            <div className="flex flex-col min-h-full">
              <h1 className="mb-6 text-4xl lg:text-6xl text-white font-extrabold flex-grow">
                AC contractors near me with{" "}
                <span className="bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text text-transparent">
                  mind blowing expertise.
                </span>{" "}
              </h1>
              <div className="flex-end">
                <div></div>
                <a
                  href="tel:7865213075"
                  className="inline-flex items-center text-gray-50 bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                >
                  <span className="px-3 py-0.5 text-gray-50 text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full">
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
                  {/* <PhoneIcon
                    className="mx-2 w-5 h-5 text-gray-50"
                    aria-hidden="true"
                  /> */}
                  <span className="mr-4 text-base">786-521-3075</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
