import React from "react"
import yellowBlob from "../../images/patterns/call-blob-yellow.svg"
import cyanBlob from "../../images/patterns/call-blob-cyan.svg"
import roseBlob from "../../images/patterns/call-blob-rose.svg"
import indigoBlob from "../../images/patterns/call-blob-indigo.svg"
import { StaticImage } from "gatsby-plugin-image"

const hoursOfOperation = [
  {
    id: 1,
    unit: "24 hours a day",
    ping_full:
      "animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75",
    ping_fixed: "relative inline-flex rounded-full h-3 w-3 bg-yellow-500",
    text: "text-base text-yellow-900 font-medium",
  },
  {
    id: 2,
    unit: "7 days a week",
    ping_full:
      "animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75",
    ping_fixed: "relative inline-flex rounded-full h-3 w-3 bg-rose-500",
    text: "text-base text-rose-900 font-medium",
  },
  {
    id: 3,
    unit: "365 days a year",
    ping_full:
      "animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75",
    ping_fixed: "relative inline-flex rounded-full h-3 w-3 bg-cyan-500",
    text: "text-base text-cyan-900 font-medium",
  },
]

//
export const CallUsNow = () => {
  return (
    <div className="py-6 md:py-0 overflow-hidden">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 bg-yellow-50 xl:rounded-tl-3xl xl:rounded-br-3xl py-32 md:py-24 xl:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          <div className="w-full px-3 md:pl-4 grid grid-cols-2 gap-6 md:gap-12 xl:grid-cols-none xl:gap-0 xl:p-12">
            <div className="w-full relative">
              <div className="aspect-w-2 aspect-h-4 transform -translate-y-16 xl:-translate-y-0">
                <StaticImage
                  className="h-full w-full rounded-tl-full rounded-bl-full rounded-br-full object-cover object-center shadow-sm"
                  src="https://images.unsplash.com/photo-1506880135364-e28660dc35fa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FsbGluZ3xlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt="ac fix client"
                  placeholder="blurred"
                  layout="constrained"
                />
              </div>
              {/* blob yellow */}
              <img
                className="absolute inset-0 w-full h-12 z-50 transform xl:-translate-x-36 -translate-y-36 xl:-translate-y-0"
                src={yellowBlob}
                alt=""
              />
              {/*  blob rose */}
              <img
                className="absolute xl:top-1/2 w-full h-6 z-50 transform xl:-translate-x-44 translate-x-44"
                src={roseBlob}
                alt=""
              />
              {/* cyan blob */}
              <img
                className="absolute bottom-0 w-full h-16 z-50 transform xl:translate-y-20"
                src={cyanBlob}
                alt=""
              />
            </div>
            <div className="w-full xl:hidden relative">
              <div className="aspect-w-2 aspect-h-4">
                <StaticImage
                  className="rounded-tl-full rounded-tr-full rounded-br-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1621905252472-943afaa20e20?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjJ8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt="ac fix client"
                  placeholder="blurred"
                  layout="constrained"
                />
              </div>
              {/* indigo blob */}
              <img
                className="absolute -top-16 -right-12 w-full h-16 z-50"
                src={indigoBlob}
                alt=""
              />
            </div>
          </div>

          <div className="mt-12 md:mt-0 text-center flex flex-col justify-center items-center">
            <a href="tel:555555555" className="text-2xl text-semibold">
              555-555-5555
            </a>
            <div className="text-5xl md:text-4xl text-blueGray-800 mt-6">
              <p className="font-light tracking-widest">Call Us</p>
              <p className="font-extrabold tracking-tight uppercase">Now</p>
            </div>
            <p className="font-light mt-4 mx-4 text-center text-lg">
              We are here for you always. <br /> We are only a phone call away.
            </p>
            {/* hours of operation */}
            <ul className="mt-6">
              {hoursOfOperation.map(card => (
                <li key={card.id} className="py-4 flex items-center">
                  <div>
                    <span className="flex h-3 w-3 relative">
                      <span className={card.ping_full}></span>
                      <span className={card.ping_fixed}></span>
                    </span>
                  </div>
                  <div className="ml-3">
                    <p className={card.text}>{card.unit}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block w-full px-8 transform translate-y-12 xl:px-16 relative">
            <div className="aspect-w-2 aspect-h-4">
              <StaticImage
                className="h-full w-full rounded-tl-full rounded-tr-full rounded-br-full object-cover object-center shadow-sm"
                src="https://images.unsplash.com/photo-1621905252472-943afaa20e20?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjJ8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="ac fix client"
                placeholder="blurred"
                layout="constrained"
              />
            </div>
            {/* indigo blob */}
            <img
              className="absolute top-0 w-full -left-1/2 h-16 z-50 transform -translate-y-32 -translate-x-24"
              src={indigoBlob}
              alt=""
            />
            {/* blob yellow */}
            <img
              className="absolute bottom-0 w-full h-12 z-50 transform translate-y-6"
              src={yellowBlob}
              alt=""
            />
            {/*  blob rose */}
            <img
              className="absolute top-1/2 w-full h-6 z-50 transform -left-1/2"
              src={roseBlob}
              alt=""
            />
            {/* cyan blob */}
            <img
              className="absolute top-0 w-full h-16 z-50 transform translate-x-12 -translate-y-12"
              src={cyanBlob}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}
