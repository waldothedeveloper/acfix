import { createMachine, assign } from "xstate"
const zipCodeRegex = /^\d{5,6}(?:[-\s]\d{4})?$/

const verifyZipcode = zip => {
  return fetch(`/api/verify-zipcode?query=${zip}`)
    .then(res => res.json())
    .then(data => {
      return data.results
    })
    .catch(err => {
      console.log("err trying to verify zip code", err)
      return err
    })
}

//
export const stepMachine = createMachine(
  {
    id: "stepMachine",
    initial: "one",
    context: {
      errorMessage: "",
      type_of_project: "",
      zipcode: "",
      verifiedAddress: undefined,
      address: undefined,
      emergency: "",
      nature_of_problem: "",
      ac_unit_age: "",
      project_status: "",
      moving: false,
      project_deadline: "",
      covered_by_insurance: false,
      owner_or_authorized_person: true,
      project_notes: "",
      fullname: "",
      phone: "",
      completed: {
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
        six: false,
        seven: false,
        eight: false,
        nine: false,
        ten: false,
        eleven: false,
        twelve: false,
        thirteen: false,
        fourteen: false,
      },
    },
    states: {
      // # 1 type of project
      one: {
        on: {
          NEXT: {
            target: "two",
            cond: ctx => {
              const typeOfProject = ctx.type_of_project
              return (
                typeOfProject === "Install a Central Air Conditioning System" ||
                typeOfProject ===
                  "Repair or Service a Central Air Conditioning System"
              )
            },
          },
          CONFIRM_TYPE_OF_PROJECT: {
            actions: [
              assign((context, event) => {
                if (event.type !== "CONFIRM_TYPE_OF_PROJECT") return {}
                return {
                  type_of_project: event.value,
                  completed: {
                    ...context.completed,
                    one: true,
                  },
                }
              }),
            ],
          },
        },
      },
      // # 2 zipcode
      two: {
        on: {
          NEXT: "three",
          PREV: "one",
          //! User can always change zip code in this state
          EDIT_ZIPCODE: {
            actions: ["assignZipCodeToContext"],
          },
        },
        // Different states for pending/valid/invalid/validating
        initial: "pending",
        states: {
          pending: {
            always: {
              cond: "regexZipCode",
              target: "validating",
            },
          },
          validating: {
            invoke: {
              src: (ctx, e) => verifyZipcode(ctx.zipcode),
              onDone: [
                {
                  cond: (ctx, event) =>
                    Object.keys(event.data).length > 0 ?? false,
                  actions: "validateZipCodeAndSaveToContext",
                  target: "valid",
                },
                { target: "invalid" },
              ],
              onError: [{ target: "retry" }],
            },
          },
          retry: { actions: "assignErrorMessageToContext" },
          valid: {
            on: {
              EDIT_ZIPCODE: {
                actions: ["assignZipCodeToContext"],
                target: "pending",
              },
            },
          },
          invalid: {
            entry: assign({ errorMessage: "Please enter a valid zipcode" }),
            on: {
              EDIT_ZIPCODE: {
                actions: ["assignZipCodeToContext"],
                target: "pending",
              },
            },
            exit: ["clearErrorMessage"],
          },
        },
      },
      three: {
        on: { NEXT: "four", PREV: "two" },
      },
      four: {
        on: { NEXT: "five", PREV: "three" },
      },
      five: {
        on: { NEXT: "six", PREV: "four" },
      },
      six: {
        on: { NEXT: "seven", PREV: "five" },
      },
      seven: {
        on: { NEXT: "eight", PREV: "six" },
      },
      eight: {
        on: { NEXT: "nine", PREV: "seven" },
      },
      nine: {
        on: { NEXT: "ten", PREV: "eight" },
      },
      ten: {
        on: { NEXT: "eleven", PREV: "nine" },
      },
      eleven: {
        on: { NEXT: "twelve", PREV: "ten" },
      },
      twelve: {
        on: { NEXT: "thirteen", PREV: "eleven" },
      },
      thirteen: {
        on: { NEXT: "fourteen", PREV: "twelve" },
      },

      fourteen: { type: "final" },
    },
  },
  {
    actions: {
      clearErrorMessage: assign({
        errorMessage: undefined,
      }),
      assignErrorMessageToContext: assign((context, event) => {
        let _a
        _a = event.data
        console.log("error Message: ", _a)

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
      assignZipCodeToContext: assign((ctx, event) => {
        return {
          zipcode: event.value,
          verifiedAddress: "pending",
          address: undefined,
          completed: {
            ...ctx.completed,
            two: false,
          },
        }
      }),
      validateZipCodeAndSaveToContext: assign((ctx, event) => {
        if (Object.keys(event.data).length > 0) {
          const { city, state, postal_code } = event.data[ctx.zipcode][0]
          return {
            address: {
              city,
              state,
              postal_code,
            },
            completed: {
              ...ctx.completed,
              two: true,
            },
          }
        }
      }),
    },

    guards: {
      regexZipCode: (ctx, event) =>
        ctx.verifiedAddress !== void 0 && zipCodeRegex.test(ctx.zipcode),
    },

    // activities, guards, delays, etc.
  }
)
