import React from "react"
import { usePartnersPriceDetails } from "../hooks/usePartners_Price_Details"
import { usePartnerLicensedDetails } from "../hooks/usePartnerDetails"
import { usePartnersMaterialsDetails } from "../hooks/usePartners_Materials_Details"
import { usePartnersExpertsDetails } from "../hooks/usePartners_Experts_Details"
import { OtherPartnersDetails } from "../components/other-partners-details"
import { GatsbyImage } from "gatsby-plugin-image"
import { CallToAction } from "./call-to-action"

//

export const PartnersDetail = () => {
  // licensed
  const rawLicensed = usePartnerLicensedDetails()
  const licensed = {
    title: rawLicensed.title,
    description: rawLicensed.description.description,
    customerMsg: rawLicensed.imageQuoteMessage,
    customerWho: rawLicensed.imageQuoteCustomer,
    image: rawLicensed.image.gatsbyImageData,
  }

  // price
  const rawPrice = usePartnersPriceDetails()
  const price = {
    title: rawPrice.title,
    description: rawPrice.description.description,
    customerMsg: rawPrice.imageQuoteMessage,
    customerWho: rawPrice.imageQuoteCustomer,
    image: rawPrice.image.gatsbyImageData,
  }

  // materials
  const rawMaterials = usePartnersMaterialsDetails()
  const materials = {
    title: rawMaterials.title,
    description: rawMaterials.description.description,
    customerMsg: rawMaterials.imageQuoteMessage,
    customerWho: rawMaterials.imageQuoteCustomer,
    image: rawMaterials.image.gatsbyImageData,
  }

  // experts
  const rawExperts = usePartnersExpertsDetails()
  const experts = {
    title: rawExperts.title,
    description: rawExperts.description.description,
    image: rawExperts.image.gatsbyImageData,
  }
  //
  return (
    <div className="bg-blueGray-800">
      <div className="max-w-2xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text text-transparent sm:text-4xl">
            Our process for selecting AC professionals
          </h2>
          <p className="mt-4 text-gray-400 max-w-sm md:max-w-lg mx-auto">
            Since day one, we have strived to ensure you are in good hands. To
            ensure the highest level of excellence, we carefully pick each and
            every HVAC partner.
          </p>
        </div>
        {/* row 1 LICENSED */}
        <div className="mt-24 md:mt-32 lg:mt-48 mb-48">
          <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:gap-x-8">
            <div className="col-span-2">
              <h2
                id="testimonial-heading"
                className="text-xl font-extrabold tracking-tight text-gray-50"
              >
                {licensed.title}
              </h2>
              <p className="mt-4 text-base text-gray-400">
                {licensed.description}
              </p>
              <div className="mt-8 relative flex justify-center">
                <div className="w-full aspect-w-3 aspect-h-2 overflow-hidden">
                  <GatsbyImage
                    className="w-full h-full object-center"
                    image={licensed.image}
                    objectFit="cover"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blueGray-800" />
                </div>
                <div className="absolute bottom-0 -mb-48 md:-mb-32 lg:right-0 xl:-mr-16">
                  <div className="px-4 py-5 bg-gradient-to-r from-coolGray-100 to-coolGray-300 opacity-75 rounded-lg max-w-xs md:max-w-sm backdrop-filter backdrop-blur-xl">
                    <blockquote className="text-base font-normal flex flex-wrap">
                      &#10077;{` `}
                      {licensed.customerMsg}
                      {` `}&#10078;
                      <span className="mt-3 text-sm">
                        {licensed.customerWho}.
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
          <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-4 lg:gap-x-8">
            <div />
            <div className="col-span-3">
              <h2
                id="testimonial-heading"
                className="text-xl font-extrabold tracking-tight text-gray-50"
              >
                {price.title}
              </h2>
              <p className="mt-4 text-base text-gray-400">
                {price.description}
              </p>
              <div className="mt-8 relative flex justify-center">
                <div className="w-full aspect-w-3 aspect-h-2 overflow-hidden z-40">
                  <GatsbyImage
                    className="w-full h-full object-center"
                    image={price.image}
                    objectFit="cover"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blueGray-800" />
                </div>

                <div className="absolute bottom-0 -mb-36 md:-mb-32 lg:left-0 xl:-ml-16 z-50">
                  <div className="px-4 py-5 bg-gradient-to-r from-coolGray-100 to-coolGray-300 rounded-lg max-w-xs md:max-w-sm">
                    <blockquote className="text-base font-normal flex flex-wrap">
                      &#10077;{` `}
                      {price.customerMsg}
                      {` `}&#10078;
                      <span className="mt-3 text-sm">{price.customerWho}</span>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 3. Best Service & Materials */}
        <div className="mt-52 lg:my-56">
          <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:gap-x-8">
            <div>
              <h2
                id="testimonial-heading"
                className="text-xl font-extrabold tracking-tight text-gray-50"
              >
                {materials.title}
              </h2>
              <p className="mt-4 text-base text-gray-400">
                {materials.description}
              </p>
            </div>
            <div className="col-span-2">
              <div className="mt-8 relative flex justify-center">
                <div className="w-full aspect-w-3 aspect-h-2 overflow-hidden">
                  <GatsbyImage
                    image={materials.image}
                    alt="raw materials air ventilation acfix"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blueGray-800" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 4. Real Experts */}
        <div className="my-12">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:gap-x-8">
            <div className="col-span-2">
              <div className="relative flex justify-center">
                <div className="w-full aspect-w-3 aspect-h-2 overflow-hidden">
                  <GatsbyImage
                    image={experts.image}
                    alt="raw materials air ventilation acfix"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blueGray-800" />
                </div>
              </div>
            </div>
            <div>
              <h2
                id="testimonial-heading"
                className="text-xl font-extrabold tracking-tight text-gray-50"
              >
                {experts.title}
              </h2>
              <p className="mt-4 text-base text-gray-400">
                {experts.description}
              </p>
            </div>
          </div>
        </div>
        {/* Additional Requirements */}
        <OtherPartnersDetails />
        <CallToAction />
      </div>
    </div>
  )
}
