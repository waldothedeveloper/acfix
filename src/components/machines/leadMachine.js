import { createMachine, assign } from "xstate"
//

const zipCodeRegex = /^\d{5,6}(?:[-\s]\d{4})?$/

//
const validateZipCode = zipcode => {
  return fetch(`/api/verify-zipcode?query=${zipcode}`)
    .then(res => res.json())
    .then(data => {
      return data.results
    })
    .catch(err => {
      console.log("err trying to verify zip code", err)
      return err
    })
}

export const leadMachine = createMachine(
  {
    id: "lead",
    initial: "type_of_project",
    context: {
      type_of_project: "",
      zipcode: "",
      emergency: "",
      errorMessage: undefined,
    },
    states: {
      // ! # 1
      type_of_project: {
        initial: "idle",
        id: "type_of_project",
        onDone: {
          target: "zipcode",
        },
        states: {
          idle: {
            exit: ["clearErrorMessage"],
            on: {
              CONFIRM_TYPE_OF_PROJECT: {
                actions: ["assignTypeOfProjectToContext"],
              },
              NEXT: {
                target: "submitting",
              },
            },
          },

          submitting: {
            invoke: {
              src: "validateTypeOfProject",
              onDone: {
                target: "complete",
              },
              onError: {
                target: "idle",
                actions: "assignErrorMessageToContext",
              },
            },
          },
          complete: {
            type: "final",
          },
        },
      },
      //! # 2
      zipcode: {
        initial: "idle",
        id: "zipcode",
        onDone: {
          target: "zipcode",
        },
        on: {
          PREV: {
            target: "type_of_project",
          },
        },
        states: {
          idle: {
            exit: ["clearErrorMessage"],
            on: {
              EDIT_ZIPCODE: {
                actions: ["assignZipcodeToContext", "validateZipCode"],
              },
              NEXT: {
                target: "submitting",
              },
            },
          },

          submitting: {
            invoke: {
              src: "validateZipCode",
              onDone: {
                target: "complete",
              },
              onError: {
                target: "idle",
                actions: "assignErrorMessageToContext",
              },
            },
          },
          complete: {
            type: "final",
          },
        },
      },
      emergency: {
        initial: "idle",
        id: "emergency",
        on: {
          PREV: {
            target: "zipcode",
          },
        },
        states: {
          idle: { type: "final" },
        },
      },
    },
  },
  {
    actions: {
      clearErrorMessage: assign({
        errorMessage: undefined,
      }),
      assignTypeOfProjectToContext: assign((context, event) => {
        if (event.type !== "CONFIRM_TYPE_OF_PROJECT") return {}
        return { type_of_project: event.value }
      }),
      assignZipcodeToContext: assign((ctx, event) => {
        if (event.type !== "EDIT_ZIPCODE") return {}
        return { zipcode: event.value }
      }),

      assignErrorMessageToContext: assign((context, event) => {
        let _a
        _a = event.data
        console.log("_a: ", _a)

        if (_a === null || _a === void 0) {
          return {
            errorMessage: void 0,
          }
        }

        if (_a.message) {
          return {
            errorMessage: _a.message,
          }
        }

        return {
          errorMessage: "An unknown error occurred",
        }
      }),
    },
    services: {
      validateTypeOfProject: (context, event) => {
        if (
          context.type_of_project ===
            "Install a Central Air Conditioning System" ||
          context.type_of_project ===
            "Repair or Service a Central Air Conditioning System"
        ) {
          return Promise.resolve({})
        } else {
          return Promise.reject({
            message: "Please make a selection or type the requested value",
          })
        }
      },
      validateZipCode: (ctx, event) => {
        const validZip = validateZipCode(ctx.zipcode)

        return validZip
          .then(data => {
            console.log("data: ", data)
            return {
              address: {
                data,
              },
            }
          })
          .catch(err => console.log(err))
      },
    },
  }
)
