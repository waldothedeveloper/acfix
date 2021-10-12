import React from "react"

export const TrustBanner = () => {
  return (
    <div className="mt-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-2">
        {/* icon 1 */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="sm:flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 bg-blueGray-100 rounded-full shadow-xl ring-2 ring-blueGray-50">
              <lord-icon
                src="https://cdn.lordicon.com/tqvtzxhl.json"
                trigger="loop"
                delay="3000"
                stroke="100"
                colors="primary:#1E293B,secondary:#1E293B"
                style={{ width: 32, height: 32, text: "center" }}
              />
            </div>
          </div>
          <div className="mt-3 lg:mt-6 lg:ml-0">
            <h3 className="text-xs font-medium text-gray-800">
              24/7 Emergency Service
            </h3>
          </div>
        </div>
        {/* icon 2 */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="sm:flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 bg-blueGray-100 rounded-full shadow-xl ring-2 ring-blueGray-50">
              <lord-icon
                src="https://cdn.lordicon.com/qygayvwp.json"
                trigger="loop"
                delay="3000"
                stroke="100"
                colors="primary:#1E293B,secondary:#1E293B"
                style={{ width: 32, height: 32, text: "center" }}
              />
            </div>
          </div>
          <div className="mt-3  lg:mt-6 lg:ml-0">
            <h3 className="text-xs font-medium text-gray-800">
              Fast, high-quality repairs
            </h3>
          </div>
        </div>
        {/* icon 3 */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="sm:flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 bg-blueGray-100 rounded-full shadow-xl ring-2 ring-blueGray-50">
              <lord-icon
                src="https://cdn.lordicon.com/sktcjwhv.json"
                trigger="loop"
                delay="3000"
                stroke="100"
                colors="primary:#1E293B,secondary:#1E293B"
                style={{ width: 32, height: 32, text: "center" }}
              />
            </div>
          </div>
          <div className="mt-3  lg:mt-6 lg:ml-0">
            <h3 className="text-xs font-medium text-gray-800">
              PRO Certified Team
            </h3>
          </div>
        </div>
        {/* icon 4 */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="sm:flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 bg-blueGray-100 rounded-full shadow-xl ring-2 ring-blueGray-50">
              <lord-icon
                src="https://cdn.lordicon.com/llxngqhf.json"
                trigger="loop"
                delay="3000"
                stroke="100"
                colors="primary:#1E293B,secondary:#1E293B"
                style={{ width: 32, height: 32, text: "center" }}
              />
            </div>
          </div>
          <div className="mt-3 lg:mt-6 lg:ml-0">
            <h3 className="text-xs font-medium text-gray-800">
              Satisfaction Guaranteed
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}
