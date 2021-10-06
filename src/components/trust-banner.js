import React from "react"

export const TrustBanner = () => {
  return (
    <div className="px-4 mt-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 gap-x-2">
        {/* icon 1 */}
        <div className="text-start">
          <div className="sm:flex-shrink-0">
            <div className="flow-root">
              <lord-icon
                src="https://cdn.lordicon.com/tqvtzxhl.json"
                trigger="loop"
                delay="1000"
                colors="primary:#22D3EE,secondary:#22D3EE"
                style={{ width: 45, height: 45, text: "center" }}
              />
            </div>
          </div>
          <div className="mt-3 sm:ml-6 lg:mt-6 lg:ml-0">
            <h3 className="text-base font-medium text-white">
              24/7 Emergency Service
            </h3>
          </div>
        </div>
        {/* icon 2 */}
        <div className="text-start">
          <div className="sm:flex-shrink-0">
            <div className="flow-root">
              <lord-icon
                src="https://cdn.lordicon.com/qygayvwp.json"
                trigger="loop"
                delay="1000"
                colors="primary:#22D3EE,secondary:#22D3EE"
                style={{ width: 45, height: 45, text: "center" }}
              />
            </div>
          </div>
          <div className="mt-3 sm:ml-6 lg:mt-6 lg:ml-0">
            <h3 className="text-base font-medium text-white">
              Quality Same-Day Repairs
            </h3>
          </div>
        </div>
        {/* icon 3 */}
        <div className="text-start">
          <div className="sm:flex-shrink-0">
            <div className="flow-root">
              <lord-icon
                src="https://cdn.lordicon.com/sktcjwhv.json"
                trigger="loop"
                delay="1000"
                colors="primary:#22D3EE,secondary:#22D3EE"
                style={{ width: 45, height: 45, text: "center" }}
              />
            </div>
          </div>
          <div className="mt-3 sm:ml-6 lg:mt-6 lg:ml-0">
            <h3 className="text-base font-medium text-white">
              Professional & Certified Team
            </h3>
          </div>
        </div>
        {/* icon 4 */}
        <div className="text-start">
          <div className="sm:flex-shrink-0">
            <div className="flow-root">
              <lord-icon
                src="https://cdn.lordicon.com/llxngqhf.json"
                trigger="loop"
                delay="1000"
                colors="primary:#22D3EE,secondary:#22D3EE"
                style={{ width: 45, height: 45, text: "center" }}
              />
            </div>
          </div>
          <div className="mt-3 sm:ml-6 lg:mt-6 lg:ml-0">
            <h3 className="text-base font-medium text-white">
              100% Satisfaction Guarantee
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}
