import React from "react"
import { BadgeCheckIcon, ExclamationIcon } from "@heroicons/react/solid"
import { classNames } from "../../utils/classNames"

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
  return (
    <div>
      <label htmlFor="zipcode_from_user" className="sr-only">
        {title}
      </label>
      <div
        className={classNames(
          errorMessage && errorMessage.length > 0
            ? "border border-red-300 rounded-lg px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-red-600 focus-within:border-red-600"
            : context.address || context.phoneRegex
            ? "border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-cyan-600 focus-within:border-cyan-600"
            : "border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-gray-600 focus-within:border-gray-600",
          "relative text-left mt-6"
        )}
      >
        <label
          htmlFor={name}
          className={
            errorMessage && errorMessage.length > 0
              ? "block text-sm font-semibold text-red-500"
              : "block text-sm font-semibold text-cyan-900"
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
          className="bg-gray-100 block w-full border-0 p-0 text-gray-800 placeholder-gray-500 focus:ring-0 text-xl"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          {errorMessage && errorMessage.length > 0 ? (
            <ExclamationIcon
              className="h-8 w-8 text-red-500"
              aria-hidden="true"
            />
          ) : context.address || context.phoneRegex ? (
            <BadgeCheckIcon
              className="h-8 w-8 text-teal-500"
              aria-hidden="true"
            />
          ) : null}
        </div>
      </div>
      <p
        className={
          errorMessage && errorMessage.length > 0
            ? "mt-2 text-md text-red-500 text-left pl-1 font-medium"
            : "mt-2 text-md text-teal-600 text-left pl-1 font-medium"
        }
        id="zipcode-error"
      >
        {errorMessage && errorMessage.length > 0
          ? errorMessage
          : context?.address?.city}
        {context?.address?.city && `, `}
        {context?.address?.state}
      </p>
    </div>
  )
}
