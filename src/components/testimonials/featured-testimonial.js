import React from "react"
import { useFeaturedCustomer } from "../../hooks/useFeaturedCustomer"
import { GatsbyImage } from "gatsby-plugin-image"
import { StarIcon } from "@heroicons/react/solid"
import facebook_like from "../../images/reviews/facebook-reaction-like-ready.svg"
import facebook from "../../images/reviews/facebook-logo-ready.svg"
import iosMessages from "../../images/reviews/messages-ios-ready.svg"
import instagram from "../../images/reviews/instagram-logo-ready.svg"

//
export const FeaturedTestimonial = () => {
  const data = useFeaturedCustomer()
  const image = data.childImageSharp.gatsbyImageData

  //
  return (
    <div className="my-12 xl:my-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* facebook like button  icon */}
        <div className="absolute inset-0 h-8 w-8 transform translate-x-6 -translate-y-4 rotate-12 z-50">
          <img
            className="object-cover object-center"
            src={facebook_like}
            alt="facebook like button on AC FIX"
          />
        </div>

        {/* instagram like button  icon */}
        <div className="absolute bottom-0 right-44 h-auto w-8 transform translate-x-32 translate-y-12 xl:-translate-x-32 xl:translate-y-24 rotate-45 z-50">
          <img
            className="object-cover object-center"
            src={instagram}
            alt="facebook like button on AC FIX"
          />
        </div>

        {/* Ios Messsages icon */}
        <div className="absolute right-0 h-auto w-10 transform -translate-x-12 -translate-y-12 -rotate-12 z-50">
          <img
            className="object-cover object-center"
            src={iosMessages}
            alt="facebook like button on AC FIX"
          />
        </div>

        {/* Facebook icon */}
        <div className="absolute bottom-0 h-auto w-10 transform -translate-x-3 -rotate-12 z-50">
          <img
            className="object-cover object-center"
            src={facebook}
            alt="facebook like button on AC FIX"
          />
        </div>

        <div className="relative py-24 px-8 bg-blueGray-50 rounded-xl shadow-2xl overflow-hidden lg:px-16 lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div className="absolute inset-0 opacity-50 z-10">
            <GatsbyImage
              image={image}
              alt="featured AC FIX customer"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative lg:col-span-1 z-20">
            <div className="flex items-center">
              {[0, 1, 2, 3, 4].map(rating => (
                <StarIcon
                  key={rating}
                  className="text-blueGray-600 flex-shrink-0 h-5 w-5"
                  aria-hidden="true"
                />
              ))}
            </div>

            <blockquote className="mt-6 text-blueGray-800">
              <p className="text-xl font-medium">
                I was completely satisfied with the AC service that I received
                from one of AC FIX&apos;s partners. The technician was very
                professional and explained everything he was doing to repair my
                air conditioner. It is nice to know that there are still
                companies out there like this one, who value their
                customers&apos; satisfaction above all else.
              </p>
              <footer className="mt-6">
                <p className="flex flex-col font-semibold text-blueGray-600">
                  <span>Customer from Weston, FL.</span>
                </p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}
