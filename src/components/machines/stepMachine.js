import { createMachine, assign } from "xstate"
import {
  zipCodeRegex,
  verifyZipcode,
  formatPhoneNumber,
  validatePhoneNumber,
} from "../../utils/quiz_form_validation"
import { quiz } from "../project-questions/quiz"

//
export const stepMachine = createMachine(
  {
    id: "stepMachine",
    initial: "one",
    context: {
      errorMessage: "",
      type_of_project: "",
      zipcode: "",
      verifiedAddress: void 0,
      address: void 0,
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
      phoneRegex: void 0,
    },
    states: {
      //! # 1 type of project
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
              assign((_, event) => {
                if (event.type !== "CONFIRM_TYPE_OF_PROJECT") return {}
                return {
                  type_of_project: event.value,
                }
              }),
            ],
          },
        },
      },
      //! # 2 zipcode
      two: {
        on: {
          NEXT: { target: "three", cond: (ctx, _) => ctx.address },
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
              src: (ctx, _) => verifyZipcode(ctx.zipcode),
              onDone: [
                {
                  cond: (_, event) =>
                    Object.keys(event.data).length > 0 ?? false,
                  actions: "validateZipCodeAndSaveToContext",
                  target: "valid",
                },
                { target: "invalid" },
              ],
              onError: [{ target: "retry" }],
            },
          },
          retry: {
            on: {
              EDIT_ZIPCODE: {
                actions: ["assignZipCodeToContext"],
                target: "pending",
              },
            },
          },
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
      // ! # 3 emergency
      three: {
        on: {
          NEXT: {
            target: "four",
            cond: ctx => {
              const emergency = ctx.emergency
              return emergency === "YES" || emergency === "NO"
            },
          },
          PREV: "two",
          CONFIRM_EMERGENCY: {
            actions: [
              assign((_, event) => {
                if (event.type !== "CONFIRM_EMERGENCY") return {}
                return {
                  emergency: event.value,
                }
              }),
            ],
          },
        },
      },
      //! # 4. problem nature
      four: {
        on: {
          CONFIRM_PROBLEM_NATURE: {
            actions: [
              assign((_, event) => {
                if (event.type !== "CONFIRM_PROBLEM_NATURE") return {}
                return {
                  nature_of_problem: event.value,
                }
              }),
            ],
          },
          NEXT: {
            target: "five",
            cond: ctx => {
              return quiz[3].options
                .map(elem => elem.msg)
                .includes(ctx.nature_of_problem)
            },
          },
          PREV: "three",
        },
      },
      //! # 5 ac unit age
      five: {
        on: {
          CHANGE: {
            actions: [
              assign((_, event) => {
                if (event.type !== "CHANGE") return {}
                return {
                  ac_unit_age: event.value,
                }
              }),
            ],
          },
          NEXT: {
            target: "six",
            cond: ctx => {
              return quiz[4].options
                .map(elem => elem.msg)
                .includes(ctx.ac_unit_age)
            },
          },
          PREV: "four",
        },
      },
      //! # 6. project status
      six: {
        on: {
          CHANGE: {
            actions: [
              assign((_, event) => {
                if (event.type !== "CHANGE") return {}
                return {
                  project_status: event.value,
                }
              }),
            ],
          },
          NEXT: {
            target: "seven",
            cond: ctx => {
              return quiz[5].options
                .map(elem => elem.msg)
                .includes(ctx.project_status)
            },
          },
          PREV: "five",
        },
      },
      //! # 7. moving into or out
      seven: {
        on: {
          CHANGE: {
            actions: [
              assign((_, event) => {
                if (event.type !== "CHANGE") return {}
                return {
                  moving: event.value,
                }
              }),
            ],
          },
          NEXT: {
            target: "eight",
            cond: ctx => {
              return quiz[6].options.map(elem => elem.msg).includes(ctx.moving)
            },
          },
          PREV: "six",
        },
      },
      //! # 8  project_deadline
      eight: {
        on: {
          CHANGE: {
            actions: [
              assign((_, event) => {
                if (event.type !== "CHANGE") return {}
                return {
                  project_deadline: event.value,
                }
              }),
            ],
          },
          NEXT: {
            target: "nine",
            cond: ctx => {
              return quiz[7].options
                .map(elem => elem.msg)
                .includes(ctx.project_deadline)
            },
          },
          PREV: "seven",
        },
      },
      //! # 9  covered by insurance
      nine: {
        on: {
          CHANGE: {
            actions: [
              assign((_, event) => {
                if (event.type !== "CHANGE") return {}
                return {
                  covered_by_insurance: event.value,
                }
              }),
            ],
          },
          NEXT: {
            target: "ten",
            cond: ctx => {
              return (
                ctx.covered_by_insurance === "YES" ||
                ctx.covered_by_insurance === "NO"
              )
            },
          },
          PREV: "eight",
        },
      },
      //! # 10. owner_or_authorized_person
      ten: {
        on: {
          CHANGE: {
            actions: [
              assign((_, event) => {
                if (event.type !== "CHANGE") return {}
                return {
                  owner_or_authorized_person: event.value,
                }
              }),
            ],
          },
          NEXT: {
            target: "eleven",
            cond: ctx => {
              return (
                ctx.owner_or_authorized_person === "YES" ||
                ctx.owner_or_authorized_person === "NO"
              )
            },
          },
          PREV: "nine",
        },
      },
      //! # 11. project_notes
      eleven: {
        on: {
          CHANGE: {
            actions: [
              assign((_, event) => {
                if (event.type !== "CHANGE") return {}
                return {
                  project_notes: event.value,
                }
              }),
            ],
          },
          NEXT: {
            target: "twelve",
          },
          PREV: "ten",
        },
      },
      //! # 12. fullname
      twelve: {
        initial: "pending",
        states: {
          pending: {
            always: [
              {
                target: "completeTask",
                cond: (ctx, _) => ctx.fullname.length > 0,
              },
              {
                target: "incompleteTask",
                cond: (ctx, _) => ctx.fullname === "",
              },
            ],
          },
          completeTask: {
            on: {
              CHANGE: {
                actions: ["editFullname"],
                target: "pending",
              },
            },
          },
          incompleteTask: {
            on: {
              CHANGE: {
                actions: ["editFullname"],
                target: "pending",
              },
            },
          },
        },
        on: {
          CHANGE: {
            actions: ["editFullname"],
          },
          NEXT: {
            target: "thirteen",
            cond: ctx => {
              return ctx.fullname !== ""
            },
          },
          PREV: "eleven",
        },
      },
      //! # 13. phone number
      thirteen: {
        on: {
          CHANGE: {
            actions: ["editPhoneNumber", "showInvalidPhoneNumberErrorMessage"],
          },
          NEXT: {
            target: "fourteen",
            cond: (ctx, _) => {
              return ctx.phoneRegex
            },
          },
          PREV: "twelve",
        },
        initial: "idle",
        states: {
          idle: {
            always: {
              target: "validating",
              cond: (ctx, _) => ctx.phone.length > 2,
            },
          },
          validating: {
            always: {
              target: "valid",
              cond: (ctx, _) => validatePhoneNumber(ctx.phone),
            },
          },
          valid: {
            entry: ["clearErrorMessage", assign({ phoneRegex: true })],
            on: {
              CHANGE: {
                target: "idle",
                actions: [
                  "editPhoneNumber",
                  "showInvalidPhoneNumberErrorMessage",
                ],
              },
            },
          },
        },
      },
      fourteen: { type: "final" },
    },
  },
  {
    actions: {
      showInvalidPhoneNumberErrorMessage: assign((ctx, _) => {
        return ctx.phone.length > 0
          ? {
              phoneRegex: void 0,
              errorMessage: "Please enter a valid phone number",
            }
          : {
              phoneRegex: void 0,
              errorMessage: "",
            }
      }),
      editPhoneNumber: assign((_, event) => {
        if (event.type !== "CHANGE") return {}

        return {
          phone: formatPhoneNumber(event.value),
        }
      }),
      editFullname: assign((_, event) => {
        if (event.type !== "CHANGE") return {}

        return {
          fullname: event.value,
        }
      }),

      clearErrorMessage: assign({
        errorMessage: void 0,
      }),
      assignErrorMessageToContext: assign((_, event) => {
        const _a = event.data

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
      assignZipCodeToContext: assign((_, event) => {
        return {
          zipcode: event.value,
          verifiedAddress: "pending",
          address: void 0,
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
          }
        }
      }),
    },

    guards: {
      regexZipCode: ctx =>
        ctx.verifiedAddress !== void 0 && zipCodeRegex.test(ctx.zipcode),
    },

    // activities, guards, delays, etc.
  }
)
