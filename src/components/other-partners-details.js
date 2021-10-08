import React from "react"
const requirements = [
  { id: 1, title: "Friendly & Professional" },
  { id: 2, title: "Same Day Repairs" },
  { id: 3, title: "Payment Options" },
  { id: 4, title: "Excellent Customer Service" },
  { id: 5, title: "Online Reviews" },
  { id: 6, title: "Free Estimates" },
  { id: 7, title: "Same Day Repair" },
  { id: 8, title: "24/7 Emergency" },
  { id: 9, title: "Bonded & Insured" },
  { id: 10, title: "Multi-language service" },
  { id: 11, title: "Guaranteed Repairs" },
  { id: 12, title: "Family-Owned & Operated" },
]

export const OtherPartnersDetails = () => {
  return (
    <div className="mt-32 lg:mt-48">
      <div className="relative -mt-12 max-w-7xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center lg:max-w-4xl">
          <h2 className="text-xl font-extrabold tracking-tight text-gray-300 sm:text-2xl">
            We also look at these additional requirements.
          </h2>

          <div className="bg-gradient-to-r from-teal-300 via-cyan-500 to-purple-600 h-0.5 w-full max-w-xs md:max-w-md mx-auto mt-1 inline-flex" />
        </div>

        <dl className="mt-6 max-w-2xl mx-auto grid grid-cols-2 gap-x-6 gap-y-2 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {requirements.map(req => (
            <div key={req.id} className="pt-4">
              <dt className="font-medium text-gray-400 text-center">
                {req.title}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
