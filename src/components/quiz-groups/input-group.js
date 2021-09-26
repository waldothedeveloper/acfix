import React from "react"

export const InputGroup = ({
  send,
  title,
  id,
  type,
  name,
  input_id,
  maxLength,
  placeholder,
  wizardCtx,
}) => {
  console.log("id on Input GRoup", id)

  return (
    <div>
      <label htmlFor="zipcode_from_user" className="sr-only">
        {title}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          onChange={event => send(event.target.value)}
          value={
            id === 1
              ? wizardCtx.zipcode
              : id === 11
              ? wizardCtx.fullname
              : id === 12
              ? wizardCtx.phone
              : ""
          }
          type={type}
          name={name}
          maxLength={maxLength}
          id={input_id}
          className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-red-500 focus:border-red-500 border-gray-red rounded-md"
          placeholder={placeholder}
          aria-invalid="true"
          aria-describedby="zipcode-error"
        />
        {/* <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          {!Object.keys(errors).includes("zipcode_from_user") ? (
            <BadgeCheckIcon
              className="h-5 w-5 text-teal-500"
              aria-hidden="true"
            />
          ) : (
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          )}
        </div> */}
      </div>
      {/* <p
        className={
          !Object.keys(errors).includes("zipcode_from_user")
            ? "mt-2 text-sm text-teal-600 text-left pl-1"
            : "mt-2 text-sm text-red-600 text-left pl-1"
        }
        id="zipcode-error"
      >
        {!Object.keys(errors).includes("zipcode_from_user") &&
        !waitForZipcodeValidation
          ? responses?.verifiedZipcode?.city
          : `Please enter a valid ZIP code`}
      </p> */}
    </div>
  )
}
