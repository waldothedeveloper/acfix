import React from "react"
import { RadioGroup } from "@headlessui/react"
import { CheckCircleIcon } from "@heroicons/react/solid"
import { quiz } from "../project-questions/quiz"

//
export const RadioOptions = ({ id }) => {
  return quiz[id].options.map(question => (
    <RadioGroup.Option
      key={question.id}
      value={question.msg}
      className={({ active, checked }) =>
        `${
          active
            ? "ring-2 ring-offset-2 ring-offset-cyan-800 ring-white ring-opacity-60"
            : ""
        }
          ${checked ? "bg-cyan-600 text-white" : "bg-transparent"}
                    relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
      }
    >
      {({ active, checked }) => (
        <>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <div className="text-sm">
                <RadioGroup.Label
                  as="p"
                  className={`font-medium  ${
                    checked ? "text-white" : "text-gray-900"
                  }`}
                >
                  {question.msg}
                </RadioGroup.Label>
              </div>
            </div>
            {checked && (
              <div className="flex-shrink-0 text-white">
                <CheckCircleIcon className="w-6 h-6" />
              </div>
            )}
          </div>
        </>
      )}
    </RadioGroup.Option>
  ))
}
