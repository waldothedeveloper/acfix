import React, { useCallback } from "react"
import PropTypes from "prop-types"

export const Notes = ({ send, title, context }) => {
  const handleOnChange = useCallback(event => send(event.target.value), [send])

  return (
    <div>
      <label htmlFor="about_project" className="sr-only">
        {title}
      </label>

      <div className="mt-1 sm:mt-0 sm:col-span-2">
        <textarea
          maxLength={250}
          id="about_project"
          name="about_project"
          rows={3}
          className="block w-full focus:ring-white focus:border-gray-50 sm:text-sm border border-gray-700 rounded-md bg-transparent"
          value={context.project_notes || ""}
          onChange={handleOnChange}
        />
        <p className="mt-2 text-sm text-gray-500">
          Let us know what are you looking for. ({context.project_notes?.length}{" "}
          of 250 max.)
        </p>
      </div>
    </div>
  )
}

Notes.propTypes = {
  send: PropTypes.func,
  title: PropTypes.string,
  context: PropTypes.object,
}
