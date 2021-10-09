import React from "react"
import { incentives } from "../../utils/incentives"
import { StaticImage } from "gatsby-plugin-image"
import { Card } from "./card"

export const HowItWorks = () => {
  return (
    <div className="sm:px-6 lg:px-8 max-w-screen-2xl mx-auto lg:max-w-none lg:overflow-hidden">
      <div className="flex flex-col xl:flex-row justify-center">
        <div className="w-full mx-3 mb-20 xl:mb-0">
          <div className="flex flex-col">
            {/* 1 1 1 1 1 */}
            <div className="my-12 md:mx-auto max-w-md">
              <h2 className="font-semibold inline-flex mt-2 text-sm tracking-wide uppercase bg-gradient-to-r from-teal-500 to-cyan-800 bg-clip-text text-transparent">
                Big or small projects, we can help
              </h2>

              <div className="my-12">
                <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-blueGray-800">
                  How it works
                </h2>
                <p className="mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
              </div>
            </div>
            {/* 2  2 2 2 2 */}
            <div className="grid grid-cols-1 gap-6 lg:gap-8 place-content-center md:mx-auto max-w-md">
              {incentives.map(solution => (
                <div key={solution.id} className={solution.container}>
                  <div className="flex-shrink-0">{solution.imageSrc}</div>
                  <div className="flex-1 min-w-0">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {solution.title}
                    {/* {solution.description} */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* image of worker and background image */}
        <div className="my-12 lg:my-0 w-full h-full self-end relative">
          {/* background */}
          <StaticImage
            className="hidden xl:block xl:absolute xl:inset-y-0 xl:left-1/4 xl:w-full"
            imgStyle={{
              objectPosition: "center",
              height: "100%",
            }}
            src="../../images/patterns/Waihou.svg"
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
          <div className="absolute top-0 left-1/2 z-20">
            <Card />
          </div>
        </div>
      </div>
    </div>
  )
}
