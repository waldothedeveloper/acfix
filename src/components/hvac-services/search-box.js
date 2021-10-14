import React, { useCallback } from "react"
import { connectSearchBox } from "react-instantsearch-dom"
import { XIcon } from "@heroicons/react/solid"
import PropTypes from "prop-types"
//
const SearchBox = ({ currentRefinement, refine }) => {
  //
  const handleSubmit = useCallback(event => {
    if (event) event.preventDefault()
  }, [])
  //
  const handleChange = useCallback(
    event => refine(event.currentTarget.value),
    [refine]
  )
  //
  const handleOnClick = useCallback(() => refine(""), [refine])
  //
  return (
    <form noValidate role="search" onSubmit={handleSubmit}>
      <label
        htmlFor="search"
        className="block text-sm font-medium text-gray-700"
      >
        Find your project faster here
      </label>
      <div className="mt-1 relative flex items-center">
        <input
          value={currentRefinement}
          onChange={handleChange}
          type="text"
          name="search"
          id="search"
          className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
        />
        <button
          onClick={handleOnClick}
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
        >
          <XIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </button>
      </div>
    </form>
  )
}

SearchBox.propTypes = {
  currentRefinement: PropTypes.string,
  refine: PropTypes.func,
}
export const CustomSearchBox = connectSearchBox(SearchBox)
