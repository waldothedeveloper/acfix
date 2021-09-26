import React from "react"
import { RadioOptions } from "./radio-options"
import { RadioGroup } from "@headlessui/react"

export const RadioQuizGroup = ({ send, title, id, wizardCtx }) => {
  console.log("id: ", id)
  return (
    <div className="w-full px-4 py-6">
      <div className="w-full max-w-md mx-auto">
        <RadioGroup
          value={
            id === 0
              ? wizardCtx.type_of_project
              : id === 2
              ? wizardCtx.emergency
              : id === 3
              ? wizardCtx.nature_of_problem
              : id === 4
              ? wizardCtx.ac_unit_age
              : id === 5
              ? wizardCtx.project_status
              : id === 6
              ? wizardCtx.moving
              : id === 7
              ? wizardCtx.project_deadline
              : id === 8
              ? wizardCtx.covered_by_insurance
              : id === 9
              ? wizardCtx.owner_or_authorized_person
              : ""
          }
          onChange={val => {
            send(val)
          }}
        >
          <RadioGroup.Label className="sr-only">{title}</RadioGroup.Label>
          <div className="space-y-2 h-56 overflow-y-auto overflow-x-hidden pt-3 pb-8 px-3">
            <RadioOptions id={id} />
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}
