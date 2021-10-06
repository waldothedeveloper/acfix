import React from "react"
import { BadgeCheckIcon, ExclamationIcon } from "@heroicons/react/solid"
import { classNames } from "../../utils/classNames"
const errorClass =
  "border border-red-300 rounded-lg px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-red-600 focus-within:border-red-600"
const successClass =
  "border border-4 border-cyan-500 rounded-lg px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-cyan-600 focus-within:border-cyan-600"

const idleClass =
  "border border-gray-700 rounded-lg px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-gray-600 focus-within:border-gray-600"

// TODO: USE THE ID PROP HERE TO SHOW WHEN VALID ADDRESS SHOULD SHOW, AND REPEAT THE SAME FOR FULL NAME (SO THAT ADDRESS IS NOT SHOWN), AND PHONE NUMBER

export const InputGroup = ({
  send,
  title,
  subtitle,
  id,
  type,
  name,
  input_id,
  maxLength,
  placeholder,
  context,
}) => {
  const { errorMessage } = context

  const zip =
    id === 1 ? { error: errorMessage, address: context.address } : void 0
  const phone =
    id === 12 ? { error: errorMessage, reg: context.phoneRegex } : void 0
  return (
    <div>
      <label htmlFor="zipcode_from_user" className="sr-only">
        {title}
      </label>
      <div
        className={classNames(
          zip && zip.error
            ? errorClass
            : zip && zip.address
            ? successClass
            : phone && phone.error
            ? errorClass
            : phone && phone.reg
            ? successClass
            : idleClass,
          "relative text-left mt-6"
        )}
      >
        <label
          htmlFor={name}
          className={
            errorMessage && errorMessage.length > 0
              ? "block text-sm font-semibold text-red-500"
              : "block text-sm font-semibold text-gray-800"
          }
        >
          {subtitle}
        </label>
        <input
          onChange={event => send(event.target.value)}
          value={
            id === 1
              ? context.zipcode
              : id === 11
              ? context.fullname
              : id === 12
              ? context.phone
              : ""
          }
          type={type}
          name={name}
          maxLength={maxLength}
          placeholder={placeholder}
          aria-invalid="true"
          id={input_id}
          className="bg-transparent block w-full border-0 p-0 text-gray-800 focus:ring-0 text-xl"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          {/* error */}
          {zip && zip.error && (
            <ExclamationIcon
              className="h-8 w-8 text-red-500"
              aria-hidden="true"
            />
          )}
          {phone && phone.error && (
            <ExclamationIcon
              className="h-8 w-8 text-red-500"
              aria-hidden="true"
            />
          )}
          {/* success */}
          {zip && zip.address && (
            <BadgeCheckIcon
              className="h-8 w-8 text-cyan-700"
              aria-hidden="true"
            />
          )}
          {phone && phone.reg && (
            <BadgeCheckIcon
              className="h-8 w-8 text-cyan-700"
              aria-hidden="true"
            />
          )}
        </div>
      </div>
      {/* error  messages */}
      {zip && zip.error && (
        <p
          className="mt-2 text-md text-red-500 text-left pl-1 font-medium"
          id="zipcode-error"
        >
          {zip.error}
        </p>
      )}
      {phone && phone.error && (
        <p
          className="mt-2 text-md text-red-500 text-left pl-1 font-medium"
          id="zipcode-error"
        >
          {phone.error}
        </p>
      )}

      {/* success messages */}
      {zip && zip.address && (
        <p
          className="mt-2 text-md text-cyan-700 text-left pl-1 font-medium"
          id="zipcode-error"
        >
          {zip.address.city}, {zip.address.state}
        </p>
      )}
    </div>
  )
}
