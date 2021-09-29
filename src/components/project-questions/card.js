import React from "react"

export const Card = ({
  completed,
  title,
  subtitle,
  onChange,
  submit,
  onPrev,
  context,
  children,
  dataMachine,
  dataState,
}) => {
  return (
    <form
      onSubmit={evt => {
        evt.preventDefault()
        submit()
      }}
      className="bg-gradient-to-tr from-teal-500 to-cyan-500"
    >
      <div className="max-w-none md:max-w-3xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <div className="bg-gray-100 flex flex-col rounded-lg shadow-2xl overflow-hidden px-2 md:px-16 py-8">
          <div className="h-16 flex-shrink-0">
            <p className="text-2xl font-bold text-blueGray-900">{title}</p>
          </div>
          <div className="flex-1 flex flex-col">
            <div className="block h-56 overflow-hidden">
              {React.cloneElement(children, {
                send: onChange,
                title: title,
                subtitle: subtitle,
                context: context,
              })}
            </div>

            <div className="mt-4 flex items-center justify-end">
              <div className="flex-shrink-0">
                {title !== "What type of project is it?" && (
                  <button
                    type="button"
                    onClick={() => onPrev()}
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    PREV
                  </button>
                )}

                <button
                  disabled={!completed}
                  type="submit"
                  className={
                    completed
                      ? "ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                      : "ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                  }
                >
                  NEXT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex m-2 bg-sky-600 rounded-md justify-evenly items-center">
        <p className="text-sm font-medium text-blueGray-50">
          Machine: {dataMachine}
        </p>
        <p className="text-base font-medium text-blueGray-50">
          State: <span className="uppercase">{dataState}</span>
        </p>
      </div>
    </form>
  )
}
