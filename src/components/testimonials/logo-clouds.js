import React from "react"
import { useSocialProof } from "../../hooks/useSocialProof"
import { GatsbyImage } from "gatsby-plugin-image"

//
export const LogoClouds = () => {
  const socialProof = useSocialProof()
  console.log("socialProof: ", socialProof)

  //
  return (
    <div>
      <div className="max-w-7xl mx-auto py-32 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
          {socialProof.map((logo, idx) => (
            <div
              key={logo.node.id}
              className="col-span-1 flex justify-center md:col-span-2"
            >
              <GatsbyImage
                image={logo.node.publicURL}
                alt="featured AC FIX customer"
                className="object-center object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
