import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"
import { XIcon } from "@heroicons/react/solid"
//
const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => {
  return (
    <form noValidate role="search" onSubmit={e => e.preventDefault()}>
      <label
        htmlFor="search"
        className="block text-sm font-medium text-gray-700"
      >
        Find your project faster here
      </label>
      <div className="mt-1 relative flex items-center">
        <input
          value={currentRefinement}
          onChange={event => refine(event.currentTarget.value)}
          type="text"
          name="search"
          id="search"
          className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
        />
        <button
          onClick={() => refine("")}
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
        >
          <XIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </button>
      </div>

      {isSearchStalled ? "My search is stalled" : ""}
    </form>
  )
}

export const CustomSearchBox = connectSearchBox(SearchBox)
