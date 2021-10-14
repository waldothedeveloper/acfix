import React from "react"

export const Notes = ({ send, title, context }) => {
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
          onChange={event => send(event.target.value)}
        />
        <p className="mt-2 text-sm text-gray-500">
          Let us know what are you looking for. ({context.project_notes?.length}{" "}
          of 250 max.)
        </p>
      </div>
    </div>
  )
}