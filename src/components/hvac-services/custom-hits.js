import React from "react"
import { connectHits } from "react-instantsearch-dom"
import { Link } from "gatsby"
import { Configure } from "react-instantsearch-dom"

//
const Hits = ({ hits }) => {
  return (
    <>
      <Configure hitsPerPage={1000} />
      <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 md:gap-y-0 lg:gap-x-8">
        {hits.map(obj => (
          <div key={obj.objectID} className="group relative">
            <h3 className="my-2 text-base text-blue-500">
              <Link to="/quiz-conversion">{obj.service}</Link>
            </h3>
          </div>
        ))}
      </div>
    </>
  )
}
export const CustomHits = connectHits(Hits)
