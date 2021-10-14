import React, { useCallback } from "react"
import { RadioOptions } from "./radio-options"
import { RadioGroup } from "@headlessui/react"
import "../../styles/scroll.css"
import PropTypes from "prop-types"

export const RadioQuizGroup = ({ send, title, id, context }) => {
  const handleSendValue = useCallback(val => send(val), [send])

  return (
    <div className="w-full px-4 py-6">
      <div className="w-full max-w-md mx-auto">
        <RadioGroup
          value={
            id === 0
              ? context.type_of_project
              : id === 2
              ? context.emergency
              : id === 3
              ? context.nature_of_problem
              : id === 4
              ? context.ac_unit_age
              : id === 5
              ? context.project_status
              : id === 6
              ? context.moving
              : id === 7
              ? context.project_deadline
              : id === 8
              ? context.covered_by_insurance
              : id === 9
              ? context.owner_or_authorized_person
              : ""
          }
          onChange={handleSendValue}
        >
          <RadioGroup.Label className="sr-only">{title}</RadioGroup.Label>
          <div className="scrollbar space-y-2 h-56 overflow-y-auto overflow-x-hidden pt-3 pb-8 px-3">
            <RadioOptions id={id} />
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

RadioQuizGroup.propTypes = {
  send: PropTypes.func,
  title: PropTypes.string,
  id: PropTypes.number,
  context: PropTypes.object,
}
