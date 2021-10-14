import React from "react"
import { connectHits } from "react-instantsearch-dom"
import { Link } from "gatsby"
import { Configure } from "react-instantsearch-dom"

//
const Hits = ({ hits }) => {
  return (
    <>
      {hits.length > 0 ? (
        <>
          <Configure hitsPerPage={1000} />
          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8 place-content-center">
            {hits.map(obj => (
              <div key={obj.objectID} className="group relative">
                <h3 className="my-2 text-base text-blue-500">
                  <Link to="/quiz-conversion">{obj.service}</Link>
                </h3>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="relative px-6 py-5 flex items-center space-x-3">
          <div className="flex-shrink-0">
            <lord-icon
              src="https://cdn.lordicon.com/qbtyvmai.json"
              trigger="loop"
              delay="3000"
              stroke="75"
              colors="primary:#1E293B,secondary:#1E293B"
              style={{ width: 85, height: 85, text: "center" }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-lg">No Result Found.</p>
            <p className="font-base text-sm text-gray-500">
              Try something like 'Install Air Conditioner'...
            </p>
          </div>
        </div>
      )}
    </>
  )
}
export const CustomHits = connectHits(Hits)