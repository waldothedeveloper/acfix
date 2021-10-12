import React from "react"

const customers = [
  {
    id: 1,
    position: "h-full w-full transform lg:-translate-y-52 lg:rotate-2",
    location: "Pembroke Pines, FL.",
    testimonial:
      "I would definitely do business with AC Fix again, and I will recommend them to anyone who needs their dryer vent cleaned.",
    imageSrc:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    id: 2,
    position: "h-full w-full transform lg:-translate-3/4 lg:-rotate-6",
    location: "Homestead, Fl.",
    testimonial:
      "There is no doubt that AC Fix does excellent work for a very reasonable price. I had to get my AC fixed and they were super quick and courteous.",
    imageSrc:
      "https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b2xkJTIwd29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    position: "h-full w-full transform lg:translate-y-3/4 lg:rotate-12",
    location: "Hialeah, Fl.",
    testimonial:
      "There is no doubt that AC Fix does excellent work for a very reasonable price. I had to get my AC fixed and they were super quick and courteous.",
    imageSrc:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
]

export const CustomerTestimonials = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <div className="max-w-screen-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 relative">
        <div className="text-left border-l-4 border-cyan-400">
          <h2 className="ml-8 text-base font-semibold text-cyan-600 tracking-wide uppercase">
            Happy customers
          </h2>
          <p className="ml-8 mt-1 text-4xl font-extrabold text-gray-900 sm:tracking-tight">
            Service with Integrity
          </p>
        </div>
        {/* testimonials cards */}
        <div className="max-w-5xl mx-auto sm:px-6 lg:px-8">
          <div className="mt-12 md:mt-24 xl:mt-32 grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center place-items-start shadow-xl bg-gray-200 rounded-md py-8 px-12">
            <div className="w-full relative z-20">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  className="object-cover rounded-full shadow-md"
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
            </div>
            <div className="mt-6">
              <h2 className="mt-4 font-bold tracking-tight space-x-2 text-3xl text-blueGray-800">
                Leonard Bristol
              </h2>
              <p className="mt-6 font-medium text-md text-blueGray-500">
                I was in desperate need of heating and cooling services in my
                home. I called Mike, the owner of AC FIX, who came to my home
                and fixed the problem for me. Before he left he showed me how to
                fix it in case it happened again. He's very knowledgeable in his
                field, has great customer service skills, and is very friendly.
                Thanks Mike!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
