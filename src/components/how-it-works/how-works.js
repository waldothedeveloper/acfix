import React from "react"
import { incentives } from "../../utils/incentives"
import { StaticImage } from "gatsby-plugin-image"
import { Card } from "./card"

export const HowItWorks = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex flex-col xl:flex-row justify-center">
        <div className="w-full mb-20 xl:mb-0">
          <div className="flex flex-col mx-3">
            {/* 1 1 1 1 1 */}
            <div className="my-12 md:mx-auto max-w-md">
              <h2 className="font-semibold inline-flex mt-2 text-sm tracking-wide uppercase bg-gradient-to-r from-teal-500 to-cyan-800 bg-clip-text text-transparent">
                Big or small projects, we can help
              </h2>

              <div className="my-12">
                <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-blueGray-800 flex items-center">
                  How it works
                  {/* star icon */}
                  <span className="ml-5 flex items-center justify-center h-8 w-8 bg-cyan-50 rounded-full shadow-xl ring-4 ring-cyan-500">
                    <lord-icon
                      src="https://cdn.lordicon.com/mdgrhyca.json"
                      trigger="loop"
                      delay="5000"
                      stroke="100"
                      colors="primary:#1E293B,secondary:#1E293B"
                      style={{ width: 28, height: 28 }}
                    ></lord-icon>
                  </span>
                </h2>
                <p className="mt-3 font-medium text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl">
                  For homeowners who need affordable & reliable way to repair,
                  maintain or replace their Air Conditioner System, our services
                  are the best in Florida.
                </p>
              </div>
            </div>
            {/* 2  2 2 2 2 */}
            <div className="grid grid-cols-1 gap-6 lg:gap-8 xl:place-content-center md:mx-auto max-w-md">
              {incentives.map(solution => (
                <div key={solution.id} className={solution.container}>
                  <div className="flex-shrink-0">{solution.imageSrc}</div>
                  <div className="flex-1 min-w-0">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {solution.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* image of worker and background image */}
        <div className="my-0 w-full h-full self-end relative overflow-hidden">
          {/* background  color image for xl devices only */}
          <StaticImage
            className="hidden xl:block xl:absolute xl:inset-0 xl:w-full xl:mt-20"
            imgStyle={{
              height: "100%",
            }}
            src="../../images/patterns/colorful-up-resized.jpg"
            alt="background"
            placeholder="blurred"
            layout="fullWidth"
            transformOptions={{ fit: "cover" }}
          />

          {/* image of ac worker */}
          <StaticImage
            className="aspect-w-3 aspect-h-4 md:aspect-w-2 md:aspect-h-2 z-10"
            imgStyle={{
              objectPosition: "right",
              height: "100%",
            }}
            src="../../images/acfix-partners/ac-guy-2_adobespark.png"
            alt="young ac guy writing down a customer project by AC FIX"
            placeholder="blurred"
            layout="fullWidth"
            transformOptions={{ fit: "cover" }}
          />
          {/* bg colorful image for small and medium devices only */}
          <StaticImage
            className="z-0 absolute inset-0 md:transform md:-translate-y-6 xl:hidden"
            imgStyle={{
              objectPosition: "right",
              height: "100%",
            }}
            src="../../images/patterns/colorful-removed-bg-resized.png"
            alt="colorful image for AC FIX today"
            placeholder="blurred"
            layout="fullWidth"
            transformOptions={{ fit: "cover" }}
          />

          <div className="absolute top-0 left-1/2 z-20 transform -translate-x-28 md:-translate-x-0 max-w-xs xl:max-w-sm mx-auto w-full">
            <Card />
          </div>
        </div>
      </div>
    </div>
  )
}
