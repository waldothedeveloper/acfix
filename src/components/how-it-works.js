import React from "react"
import { Link } from "gatsby"
import bgSVG from "../images/blob-scene-haikei.svg"

const attentionGrabber =
  "font-bold bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent"

const incentives = [
  {
    name: "1. Tell us about your HVAC needs",
    imageSrc: (
      <lord-icon
        src="https://cdn.lordicon.com/fbmlrfcd.json"
        trigger="loop"
        delay="1000"
        colors="primary:#ffffff,secondary:#ffffff"
        style={{ width: 85, height: 85, text: "center" }}
      />
    ),
    description: (
      <p className="mt-2 mr-2 text-sm text-gray-300">
        We will ask you a{" "}
        <span className={attentionGrabber}>few questions </span> to determine
        your current HVAC status.
      </p>
    ),
  },
  {
    name: "2. We'll match you with a solution that fits your needs",
    imageSrc: (
      <lord-icon
        src="https://cdn.lordicon.com/lntygiyb.json"
        trigger="loop"
        delay="1000"
        colors="primary:#ffffff,secondary:#ffffff"
        style={{ width: 85, height: 85, text: "center" }}
      />
    ),
    description: (
      <p className="mt-2 mr-2 text-sm text-gray-300">
        A <span className={attentionGrabber}>real-time</span> match is made
        based on your answers with one of our partners.
      </p>
    ),
  },
  {
    name: "3. The experts will handle everything for you.",
    imageSrc: (
      <lord-icon
        src="https://cdn.lordicon.com/jpromtvn.json"
        trigger="loop"
        delay="1000"
        colors="primary:#ffffff,secondary:#ffffff"
        style={{ width: 85, height: 85, text: "center" }}
      />
    ),
    description: (
      <p className="mt-2 mr-2 text-sm text-gray-300">
        Since every partner we work with is rigorously vetted, your satisfaction
        is <span className={attentionGrabber}>100% guaranteed.</span>
      </p>
    ),
  },
]

export const HowItWorks = () => {
  return (
    <div
      className="bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bgSVG})` }}
    >
      <div className="max-w-7xl mx-auto py-12 sm:px-2 lg:px-4">
        <div className="max-w-2xl mx-auto px-4 lg:max-w-none rounded-lg">
          <div className="max-w-3xl">
            <h2 className="inline-flex mt-2 text-sm tracking-wide uppercase border-b border-gray-600 text-blueGray-800">
              Big or small, we can help
            </h2>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-50">
              How it works
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
            {incentives.map(incentive => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:flex-shrink-0">{incentive.imageSrc}</div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h3 className="text-lg font-semibold text-gray-50">
                    {incentive.name}
                  </h3>

                  {incentive.description}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <Link
              to="/quiz-conversion"
              className="inline-block text-center bg-cyan-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-cyan-700"
            >
              It's free to try!
            </Link>
            <p className="ml-1 mt-2 text-xs text-gray-400 font-semibold tracking-wide underline">
              No risk. No obligation
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
