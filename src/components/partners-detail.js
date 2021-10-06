import React from "react"
import { usePartnersPriceDetails } from "../hooks/usePartners_Price_Details"
import { usePartnerLicensedDetails } from "../hooks/usePartnerDetails"
import { GatsbyImage } from "gatsby-plugin-image"

//

export const PartnersDetail = () => {
  const { title, image, description, imageQuoteCustomer, imageQuoteMessage } =
    usePartnerLicensedDetails()

  const rawPrice = usePartnersPriceDetails()
  const price = {
    title: rawPrice.title,
    description: rawPrice.description.description,
    customerMsg: rawPrice.imageQuoteMessage,
    customerWho: rawPrice.imageQuoteCustomer,
    image: rawPrice.image,
  }

  //
  return (
    <div className="bg-blueGray-800">
      <div className="max-w-2xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-50 sm:text-4xl">
            Our process for vetting our professionals
          </h2>
          <p className="mt-4 text-gray-400">
            Since day one, we have strived to ensure you are in good hands. To
            ensure the highest level of excellence, we carefully pick each and
            every HVAC partner. Here are some of the requirements for working
            with us.
          </p>
        </div>
        {/* row 1 LICENSED */}
        <div className="mt-24 md:mt-32 lg:mt-48 mb-48">
          <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
            <div>
              <h2
                id="testimonial-heading"
                className="text-2xl font-extrabold tracking-tight text-gray-50"
              >
                1. {title}
              </h2>
              <p className="mt-4 text-base text-gray-400">
                {description.description}
              </p>
              <div className="mt-8 relative flex justify-center">
                <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                  <GatsbyImage
                    className="w-full h-full object-center"
                    image={image?.gatsbyImageData}
                    objectFit="cover"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blueGray-800" />
                </div>
                <div className="absolute bottom-0 -mb-48 md:-mb-32 lg:right-0 xl:-mr-16">
                  <div className="px-4 py-5 bg-gradient-to-r from-coolGray-100 to-coolGray-300 opacity-75 rounded-lg max-w-xs md:max-w-sm backdrop-filter backdrop-blur-xl">
                    <blockquote className="text-base font-normal flex flex-wrap">
                      &#10077;{` `}
                      {imageQuoteMessage}
                      {` `}&#10078;
                      <span className="mt-3 text-sm">
                        {imageQuoteCustomer}.
                      </span>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* row 2 PRICE */}
        <div className="my-32">
          <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
            <div />
            <div>
              <h2
                id="testimonial-heading"
                className="text-2xl font-extrabold tracking-tight text-gray-50"
              >
                1. {price.title}
              </h2>
              <p className="mt-4 text-base text-gray-400">
                {price.description}
              </p>
              <div className="mt-8 relative flex justify-center">
                <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                  <GatsbyImage
                    className="w-full h-full object-center"
                    image={price.image?.gatsbyImageData}
                    objectFit="cover"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blueGray-800" />
                </div>
                <div className="absolute bottom-0 -mb-36 md:-mb-32 lg:left-0 xl:-ml-16">
                  <div className="px-4 py-5 bg-gradient-to-r from-coolGray-100 to-coolGray-300 opacity-75 rounded-lg max-w-xs md:max-w-sm backdrop-filter backdrop-blur-xl">
                    <blockquote className="text-base font-normal flex flex-wrap">
                      &#10077;{` `}
                      {price.customerMsg}
                      {` `}&#10078;
                      <span className="mt-3 text-sm">{price.customerWho}.</span>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
